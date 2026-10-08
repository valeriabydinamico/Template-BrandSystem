import fs from 'node:fs'
import path from 'node:path'
import type { IncomingMessage, ServerResponse } from 'node:http'
import type { Plugin } from 'vite'
// @ts-ignore — módulo JS compartido con el CLI (tools/mejoraCheckpoint.mjs)
import * as snap from './mejoraSnapshots.mjs'

/**
 * Plugin SOLO de desarrollo (`npm run dev`): expone `POST /__dev/revert`, que
 * usa el botón "Revertir cambio" de Informe → Mejoras, y `POST /__dev/pendiente`,
 * que usa el botón "Marcar como listo" de Informe → Pendientes (edita el
 * `status` de la entrada en InformePage.tsx). Ninguno existe en el build
 * publicado.
 *
 * Dos formas de revertir una mejora (en este orden de preferencia):
 *  1. "patch": la mejora tiene una foto registrada (`refs/mejoras/<id>`, ver
 *     tools/mejoraCheckpoint.mjs). Se aplica su parche al revés sobre los
 *     archivos de trabajo — sirve con cambios sin guardar y con cambios ya
 *     commiteados, y conserva todo el resto del trabajo. No crea commit; antes
 *     guarda una copia de seguridad (`refs/mejoras/backup/…`).
 *  2. "commits": no hay foto pero sí commits (trailer `Mejora: <id>` o campo
 *     `commits` de la entrada). Se hace `git revert` en un commit nuevo (no
 *     borra historial). Se permite con trabajo sin guardar mientras no toque
 *     los mismos archivos que el commit.
 *
 * Seguridad (corre git desde el navegador, así que es estricto):
 *  - solo loopback, con `Origin` igual al propio servidor y un header propio
 *    (un sitio ajeno no puede cumplir ninguna de las dos cosas);
 *  - el cliente manda solo el `id` (slug validado); archivos, parches y
 *    commits los resuelve el servidor — nunca confía en datos del cliente;
 *  - `execFile` sin shell; los parches se aplican todo-o-nada; si un revert de
 *    commits da conflicto se cancela sin tocar el trabajo sin guardar.
 */

const INFORME = 'src/app/components/InformePage.tsx'
const ID_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const HASH_RE = /^[0-9a-f]{7,40}$/

type Mode = 'patch' | 'commits' | 'none'

interface CommitInfo {
  hash: string
  short: string
  subject: string
  files: number
}

interface Plan {
  id: string
  title: string
  branch: string
  mode: Mode
  files: string[]
  commits: CommitInfo[]
  blocker: string | null
  entryFound: boolean
}

class HttpError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message)
  }
}

export function revertMejoraPlugin(): Plugin {
  let root = process.cwd()
  let busy = false

  const git = (args: string[]) => snap.git(root, args) as Promise<string>
  const informePath = () => path.join(root, INFORME)
  const lines = (s: string) => s.split('\n').filter(Boolean)

  /** Líneas [start, end] (inclusive) del bloque `{ ... },` de la entrada, dentro de `array` (MEJORAS por defecto). */
  function findEntryBlock(
    src: string[],
    id: string,
    array: 'MEJORAS' | 'PENDIENTES' = 'MEJORAS',
  ): { start: number; end: number } | null {
    const mejorasStart = src.findIndex((l) => new RegExp(`^const ${array}\\b`).test(l))
    if (mejorasStart < 0) return null
    let mejorasEnd = src.findIndex((l, i) => i > mejorasStart && /^\]\s*$/.test(l))
    if (mejorasEnd < 0) mejorasEnd = src.length
    const idRe = new RegExp(`^\\s{4}id:\\s*'${id}',?\\s*$`)
    const idLine = src.findIndex((l, i) => i > mejorasStart && i < mejorasEnd && idRe.test(l))
    if (idLine < 0) return null
    let start = idLine
    while (start > mejorasStart && !/^ {2}\{\s*$/.test(src[start])) start--
    let end = idLine
    while (end < mejorasEnd && !/^ {2}\},\s*$/.test(src[end])) end++
    if (!/^ {2}\{\s*$/.test(src[start]) || !/^ {2}\},\s*$/.test(src[end])) return null
    return { start, end }
  }

  /** Saca la entrada de la lista si todavía está (el revert del commit/parche suele quitarla solo). */
  function removeEntryIfPresent(id: string): boolean {
    const file = informePath()
    const src = fs.readFileSync(file, 'utf8').split('\n')
    const block = findEntryBlock(src, id)
    if (!block) return false
    src.splice(block.start, block.end - block.start + 1)
    fs.writeFileSync(file, src.join('\n'))
    return true
  }

  async function resolveCommits(id: string, blockText: string): Promise<CommitInfo[]> {
    const declared = (/commits:\s*\[([^\]]*)\]/.exec(blockText)?.[1].match(/[0-9a-f]{7,40}/g) ?? []).filter((h) =>
      HASH_RE.test(h),
    )
    const trailer = lines(await git(['log', '--format=%H', `--grep=^Mejora: ${id}$`]))
    const revs = lines(await git(['rev-list', '--topo-order', 'HEAD']))
    const resolved = new Set<string>()
    for (const h of [...declared, ...trailer]) {
      let full: string
      try {
        full = await git(['rev-parse', '--verify', `${h}^{commit}`])
      } catch {
        continue
      }
      if (!revs.includes(full)) continue // no es ancestro del HEAD actual
      const parents = (await git(['rev-list', '--parents', '-n', '1', full])).split(' ')
      if (parents.length !== 2) continue // merge o commit raíz: no se revierte desde acá
      resolved.add(full)
    }
    const ordered = [...resolved].sort((a, b) => revs.indexOf(a) - revs.indexOf(b)) // más nuevo primero
    const out: CommitInfo[] = []
    for (const hash of ordered) {
      const subject = await git(['log', '-1', '--format=%s', hash])
      const files = lines(await git(['show', '--name-only', '--format=', hash])).length
      out.push({ hash, short: hash.slice(0, 7), subject, files })
    }
    return out
  }

  async function buildPlan(id: string): Promise<Plan> {
    const src = fs.readFileSync(informePath(), 'utf8').split('\n')
    const block = findEntryBlock(src, id)
    const blockText = block ? src.slice(block.start, block.end + 1).join('\n') : ''
    const title = (/^\s{4}title:\s*'(.*)',?\s*$/m.exec(blockText)?.[1] ?? id).replace(/[\r\n]+/g, ' ')
    const branch = await git(['rev-parse', '--abbrev-ref', 'HEAD'])
    const base = { id, title, branch, entryFound: block !== null }

    // 1) Foto registrada: parche aplicable al revés, con o sin cambios sin guardar.
    if (await snap.hasCheckpoint(root, id)) {
      const { files, patch } = await snap.checkpointPatch(root, id)
      const ok = await snap.canReversePatch(root, patch)
      return {
        ...base,
        mode: 'patch',
        files,
        commits: [],
        blocker: ok
          ? null
          : 'Otros cambios posteriores modificaron las mismas líneas, así que no se puede deshacer solo este cambio sin pisar lo que vino después. No se modifica nada.',
      }
    }

    // 2) Commits del cambio: git revert (permitido con trabajo sin guardar si no se pisan archivos).
    const commits = await resolveCommits(id, blockText)
    if (commits.length > 0) {
      const staged = lines(await git(['diff', '--cached', '--name-only']))
      const dirty = new Set(lines(await git(['diff', '--name-only'])))
      const commitFiles = new Set<string>()
      for (const c of commits) for (const f of lines(await git(['show', '--name-only', '--format=', c.hash]))) commitFiles.add(f)
      const overlap = [...commitFiles].filter((f) => dirty.has(f))
      let blocker: string | null = null
      if (staged.length > 0) {
        blocker = 'Hay cambios preparados (staged) sin commitear. Commitealos o sacalos del stage y volvé a intentar.'
      } else if (overlap.length > 0) {
        blocker = `Tenés cambios sin guardar en archivos que este cambio también tocó (${overlap.slice(0, 4).join(', ')}${
          overlap.length > 4 ? '…' : ''
        }). Guardalos primero (/guardar) y volvé a intentar.`
      }
      return { ...base, mode: 'commits', files: [...commitFiles], commits, blocker }
    }

    return {
      ...base,
      mode: 'none',
      files: [],
      commits: [],
      blocker:
        'Este cambio no tiene registro para revertirlo (ni foto ni commit asociado). Solo se pueden revertir los cambios registrados desde que existe esta función.',
    }
  }

  async function apply(id: string) {
    const plan = await buildPlan(id)
    if (plan.blocker) throw new HttpError(409, plan.blocker)

    if (plan.mode === 'patch') {
      const { patch } = await snap.checkpointPatch(root, id)
      const backup = await snap.backupCurrentTree(root, id)
      try {
        await snap.reversePatch(root, patch)
      } catch {
        throw new HttpError(409, 'No se pudo aplicar el revert. No se modificó nada.')
      }
      removeEntryIfPresent(id)
      await snap.rebaseCheckpoint(root, id)
      return { mode: 'patch', files: plan.files, backup: backup.ref }
    }

    // mode === 'commits'
    const dirtyBefore = new Set(lines(await git(['diff', '--name-only'])))
    try {
      await git(['revert', '--no-commit', ...plan.commits.map((c) => c.hash)])
    } catch {
      await git(['revert', '--abort']).catch(() => undefined)
      await git(['reset', '--merge']).catch(() => undefined) // conserva el trabajo sin guardar
      throw new HttpError(
        409,
        'No se pudo revertir sin conflictos (otros cambios posteriores tocan los mismos archivos). No se modificó nada.',
      )
    }
    removeEntryIfPresent(id)
    // Si InformePage ya tenía cambios sin guardar míos, no los meto en el commit del revert.
    if (!dirtyBefore.has(INFORME)) await git(['add', '--', INFORME])
    try {
      await git([
        'commit',
        '-m',
        `Revierte mejora: ${plan.title}`,
        '-m',
        `Deshace: ${plan.commits.map((c) => c.short).join(', ')}`,
        '-m',
        `Revierte-mejora: ${id}`,
      ])
    } catch (e) {
      await git(['reset', '--merge']).catch(() => undefined)
      throw new HttpError(500, `No se pudo crear el commit del revert: ${(e as Error).message.split('\n')[0]}`)
    }
    return {
      mode: 'commits',
      commit: await git(['rev-parse', '--short', 'HEAD']),
      reverted: plan.commits.map((c) => c.short),
    }
  }

  /**
   * Marca (o reabre) un pendiente de Informe → Pendientes editando
   * InformePage.tsx: cambia `status` y agrega/quita `completada: 'YYYY-MM-DD'`.
   * Solo toca las líneas de esa entrada; respeta los saltos de línea del archivo.
   */
  function setPendienteListo(id: string, listo: boolean) {
    const file = informePath()
    const src = fs.readFileSync(file, 'utf8').split('\n')
    const block = findEntryBlock(src, id, 'PENDIENTES')
    if (!block) throw new HttpError(404, 'No encontré ese pendiente.')

    const find = (re: RegExp) => {
      for (let i = block.start; i <= block.end; i++) if (re.test(src[i])) return i
      return -1
    }
    const cr = (i: number) => (src[i].endsWith('\r') ? '\r' : '')

    const statusAt = find(/^\s{4}status:\s*'(?:pending|done)',?\s*\r?$/)
    const fechaAt = find(/^\s{4}fecha:\s*'/)
    if (statusAt < 0 || fechaAt < 0) throw new HttpError(500, 'El pendiente no tiene el formato esperado.')

    src[statusAt] = `    status: '${listo ? 'done' : 'pending'}',${cr(statusAt)}`

    const completadaAt = find(/^\s{4}completada:\s*'/)
    if (listo) {
      const d = new Date()
      const hoy = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
      const line = `    completada: '${hoy}',${cr(fechaAt)}`
      if (completadaAt >= 0) src[completadaAt] = line
      else src.splice(fechaAt + 1, 0, line)
    } else if (completadaAt >= 0) {
      src.splice(completadaAt, 1)
    }
    fs.writeFileSync(file, src.join('\n'))
    return { listo }
  }

  /** Solo desde la propia página, en loopback, con el header propio (ver comentario del archivo). */
  function assertLocalRequest(req: IncomingMessage) {
    const remote = req.socket.remoteAddress ?? ''
    const loopback = ['127.0.0.1', '::1', '::ffff:127.0.0.1'].includes(remote)
    const host = req.headers.host ?? ''
    if (!loopback || req.headers.origin !== `http://${host}` || req.headers['x-dev-revert'] !== '1') {
      throw new HttpError(403, 'Pedido no permitido.')
    }
  }

  function send(res: ServerResponse, status: number, body: unknown) {
    res.statusCode = status
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.end(JSON.stringify(body))
  }

  async function readJson(req: IncomingMessage): Promise<Record<string, unknown>> {
    let size = 0
    const chunks: Buffer[] = []
    for await (const chunk of req) {
      size += (chunk as Buffer).length
      if (size > 4096) throw new HttpError(413, 'Pedido demasiado grande.')
      chunks.push(chunk as Buffer)
    }
    try {
      return JSON.parse(Buffer.concat(chunks).toString('utf8'))
    } catch {
      throw new HttpError(400, 'Pedido inválido.')
    }
  }

  return {
    name: 'revert-mejora-dev',
    apply: 'serve',
    configResolved(config) {
      root = config.root
    },
    configureServer(server) {
      server.middlewares.use('/__dev/revert', async (req, res) => {
        try {
          if (req.method !== 'POST') throw new HttpError(405, 'Método no permitido.')
          assertLocalRequest(req)
          const body = await readJson(req)
          const id = typeof body.id === 'string' ? body.id : ''
          const mode = body.mode
          if (!ID_RE.test(id) || (mode !== 'plan' && mode !== 'apply')) throw new HttpError(400, 'Pedido inválido.')

          if (busy) throw new HttpError(409, 'Ya hay un revert en curso.')
          busy = true
          try {
            if (mode === 'plan') return send(res, 200, await buildPlan(id))
            return send(res, 200, await apply(id))
          } finally {
            busy = false
          }
        } catch (e) {
          if (e instanceof HttpError) return send(res, e.status, { error: e.message })
          return send(res, 500, { error: 'Error inesperado al revertir.' })
        }
      })

      // Marcar/reabrir un pendiente del Informe (mismas protecciones que el revert).
      server.middlewares.use('/__dev/pendiente', async (req, res) => {
        try {
          if (req.method !== 'POST') throw new HttpError(405, 'Método no permitido.')
          assertLocalRequest(req)
          const body = await readJson(req)
          const id = typeof body.id === 'string' ? body.id : ''
          if (!ID_RE.test(id) || typeof body.listo !== 'boolean') throw new HttpError(400, 'Pedido inválido.')
          if (busy) throw new HttpError(409, 'Hay otra acción en curso.')
          busy = true
          try {
            return send(res, 200, setPendienteListo(id, body.listo))
          } finally {
            busy = false
          }
        } catch (e) {
          if (e instanceof HttpError) return send(res, e.status, { error: e.message })
          return send(res, 500, { error: 'Error inesperado al actualizar el pendiente.' })
        }
      })
    },
  }
}
