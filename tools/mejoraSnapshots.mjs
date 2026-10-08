// Fotos ("checkpoints") de cada mejora, para poder deshacer solo ese cambio
// aunque todavía no esté commiteado. Lo usan `mejoraCheckpoint.mjs` (CLI) y
// `revertMejoraPlugin.ts` (botón "Revertir cambio"). Solo toca refs locales
// bajo `refs/mejoras/`; nunca modifica el historial ni se sube a GitHub.
//
// Idea: al registrar una mejora se guarda una foto del árbol de trabajo
// (incluye archivos nuevos sin versionar, respeta .gitignore). El parche de la
// mejora = diferencia entre la foto anterior y esta. Revertir = aplicar ese
// parche al revés sobre los archivos actuales (conserva todo el resto).

import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const run = promisify(execFile)

export const CHECKPOINT_REF = 'refs/mejoras/checkpoint'
export const mejoraRef = (id) => `refs/mejoras/${id}`

const IDENTITY = {
  GIT_AUTHOR_NAME: 'Mejoras',
  GIT_AUTHOR_EMAIL: 'mejoras@local',
  GIT_COMMITTER_NAME: 'Mejoras',
  GIT_COMMITTER_EMAIL: 'mejoras@local',
}

/** Ejecuta git y devuelve stdout (`raw` evita el trim, necesario para parches). */
export async function git(root, args, { env = {}, raw = false } = {}) {
  const { stdout } = await run('git', args, {
    cwd: root,
    maxBuffer: 100 * 1024 * 1024,
    env: { ...process.env, ...IDENTITY, ...env },
  })
  return raw ? stdout : stdout.trim()
}

/** Foto (tree) del árbol de trabajo actual, sin tocar el índice real. */
export async function snapshotTree(root) {
  const idx = path.join(os.tmpdir(), `mejora-idx-${process.pid}-${Date.now()}`)
  const env = { GIT_INDEX_FILE: idx }
  try {
    await git(root, ['read-tree', '--empty'], { env })
    await git(root, ['add', '-A'], { env })
    return await git(root, ['write-tree'], { env })
  } finally {
    fs.rmSync(idx, { force: true })
  }
}

async function refExists(root, ref) {
  try {
    await git(root, ['rev-parse', '--verify', `${ref}^{commit}`])
    return true
  } catch {
    return false
  }
}

/** Marca el estado actual como punto de partida: lo anterior queda "sin registro". */
export async function setBaseline(root) {
  const tree = await snapshotTree(root)
  const commit = await git(root, ['commit-tree', tree, '-m', 'baseline de mejoras'])
  await git(root, ['update-ref', CHECKPOINT_REF, commit])
  return { commit }
}

/** Registra la mejora `id`: guarda la foto actual y su diferencia con la anterior. */
export async function registerCheckpoint(root, id) {
  const after = await snapshotTree(root)
  let base
  if (await refExists(root, CHECKPOINT_REF)) {
    base = await git(root, ['rev-parse', CHECKPOINT_REF])
  } else {
    // Sin foto previa: todo lo no guardado se atribuye a esta mejora.
    const headTree = await git(root, ['rev-parse', 'HEAD^{tree}'])
    base = await git(root, ['commit-tree', headTree, '-m', 'base de mejoras'])
  }
  const afterCommit = await git(root, ['commit-tree', after, '-p', base, '-m', `mejora ${id}`])
  await git(root, ['update-ref', mejoraRef(id), afterCommit])
  await git(root, ['update-ref', CHECKPOINT_REF, afterCommit])
  const files = (await git(root, ['diff', '--name-only', base, afterCommit])).split('\n').filter(Boolean)
  return { id, files }
}

export async function hasCheckpoint(root, id) {
  return refExists(root, mejoraRef(id))
}

/** Archivos y parche (sin contexto, para tolerar cambios posteriores cercanos) de una mejora. */
export async function checkpointPatch(root, id) {
  const ref = mejoraRef(id)
  const files = (await git(root, ['diff', '--name-only', `${ref}^`, ref])).split('\n').filter(Boolean)
  const patch = await git(root, ['diff', '--binary', '-U0', `${ref}^`, ref], { raw: true })
  return { files, patch }
}

function withPatchFile(patch, fn) {
  const file = path.join(os.tmpdir(), `mejora-patch-${process.pid}-${Date.now()}.patch`)
  fs.writeFileSync(file, patch)
  return Promise.resolve(fn(file)).finally(() => fs.rmSync(file, { force: true }))
}

const APPLY_FLAGS = ['apply', '-R', '--unidiff-zero', '--whitespace=nowarn']

/** ¿Se puede deshacer hoy el parche sin conflictos? */
export async function canReversePatch(root, patch) {
  if (!patch.trim()) return false
  return withPatchFile(patch, async (file) => {
    try {
      await git(root, [...APPLY_FLAGS, '--check', file])
      return true
    } catch {
      return false
    }
  })
}

/** Deshace el parche en los archivos de trabajo (todo o nada). */
export async function reversePatch(root, patch) {
  return withPatchFile(patch, (file) => git(root, [...APPLY_FLAGS, file]))
}

/** Copia de seguridad del árbol actual, para poder recuperar lo anterior a un revert. */
export async function backupCurrentTree(root, id) {
  const tree = await snapshotTree(root)
  const commit = await git(root, ['commit-tree', tree, '-m', `copia antes de revertir ${id}`])
  const ref = `refs/mejoras/backup/${id}-${Date.now()}`
  await git(root, ['update-ref', ref, commit])
  return { ref, commit: commit.slice(0, 7) }
}

/** Después de un revert, la foto de referencia pasa a ser el estado resultante. */
export async function rebaseCheckpoint(root, id) {
  await git(root, ['update-ref', '-d', mejoraRef(id)]).catch(() => undefined)
  return setBaseline(root)
}
