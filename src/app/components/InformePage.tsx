import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Search } from 'lucide-react'
import { PageHeader } from './PageHeader'
import { Tooltip } from './Tooltip'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Informe — historial de trabajo sobre el dashboard, dividido en 3 tabs:
 *   - Mejoras: cambios estructurales/funcionales del dashboard en sí
 *     (sidebar, buscador, Ajustes, convenciones de datos…).
 *   - Pendientes: trabajo del dashboard todavía no ejecutado.
 *   - Resúmenes: por cada página de contenido de marca completada con datos
 *     reales de un proyecto (ej. Myntex), qué se hizo y qué se dejó
 *     deliberadamente afuera (para poder auditar el criterio sin tener que
 *     releer la página entera o el Notion fuente).
 * Las tres listas se registran solas cada vez que se hace un cambio (ver
 * "Anotar en el Informe" en CLAUDE.md) — no se calculan de ningún reporte, a
 * diferencia de `RegistroPage`. Se muestran siempre de la más reciente a la
 * más antigua (por `fecha`; a igual fecha, la que está antes en el array).
 * Las entradas nuevas se agregan al principio del array.
 * ────────────────────────────────────────────────────────────────────────── */

function masRecientesPrimero<T extends { fecha: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.fecha.localeCompare(a.fecha))
}

/** Minúsculas y sin acentos, para buscar sin importar tildes ni mayúsculas. */
function normalizar(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
}

/** `true` si el texto contiene TODAS las palabras de la consulta (en cualquier orden). */
function coincide(texto: string, consulta: string): boolean {
  const terminos = normalizar(consulta).split(/\s+/).filter(Boolean)
  if (terminos.length === 0) return true
  const t = normalizar(texto)
  return terminos.every((x) => t.includes(x))
}

interface Entry {
  /** Slug estable (solo Mejoras). Los commits del cambio llevan el trailer `Mejora: <id>`. */
  id?: string
  /** Hashes de commits ya existentes que componen este cambio (opcional). */
  commits?: string[]
  title: string
  status: 'done' | 'pending'
  fecha: string
  /** Solo Pendientes ya resueltos: fecha en que se marcaron como listos (`YYYY-MM-DD`). */
  completada?: string
  description: string
}

const MEJORAS: Entry[] = [
  {
    id: 'idioma-es-traductor',
    title: 'El sitio declara que está en español (evita traducciones que deforman el texto)',
    status: 'done',
    fecha: '2026-10-08',
    description:
      'El HTML decía lang="en" y tenía una descripción en inglés, así que el traductor automático del navegador creía que el sitio estaba en inglés y "traducía" el español, deformando textos (por ejemplo "Pendientes" pasaba a "estar"). Ahora el sitio declara lang="es" y una descripción en español, por lo que el navegador ya no lo trata como inglés.',
  },
  {
    id: 'informe-tab-cambios',
    title: 'La tab "Mejoras" del Informe pasa a llamarse "Cambios"',
    status: 'done',
    fecha: '2026-10-08',
    description:
      'Se renombra la tab, su título, el placeholder del buscador y los textos del modal de revertir. Solo cambia el nombre visible: internamente siguen igual el id de la tab, la lista y el trailer Mejora: de los commits, para no romper el botón "Revertir cambio". También se elimina el comando /informe, porque el registro es automático.',
  },
  {
    id: 'informe-buscador-y-pendientes-listo',
    title: 'Buscador en cada tab del Informe y botón "Marcar como listo" en Pendientes',
    status: 'done',
    fecha: '2026-10-07',
    description:
      'Mejoras, Pendientes y Resúmenes tienen su propio buscador: ignora mayúsculas y tildes, encuentra las entradas que contienen todas las palabras (en cualquier orden) y muestra cuántas coinciden. Cada pendiente tiene además un botón "Marcar como listo": queda tachado con la etiqueta "Listo" y la fecha en que se completó, y se puede "Reabrir". El estado se guarda en el propio proyecto, por eso, igual que "Revertir cambio", solo funciona al correr el dashboard en local con npm run dev (en el sitio publicado el botón aparece deshabilitado).',
  },
  {
    id: 'revertir-cambios-mejoras',
    title: 'Botón "Revertir cambio" en cada cambio',
    status: 'done',
    fecha: '2026-10-07',
    description:
      'Cada entrada de Mejoras tiene un botón "Revertir cambio" con un modal de confirmación que muestra exactamente qué se va a deshacer. Funciona con cambios todavía sin guardar y con cambios ya commiteados (y aunque ya estén subidos a GitHub): cada mejora nueva guarda una foto de qué cambió, y al confirmar se deshace solo ese cambio sin tocar el resto de tu trabajo, con una copia de seguridad previa. Si el cambio ya estaba commiteado y no tiene foto, se crea un commit de git que lo revierte (sin borrar historial). En ambos casos la entrada se quita de la lista. Solo funciona al correr el dashboard en local con npm run dev; en el sitio publicado el botón aparece deshabilitado. Si otros cambios posteriores tocan las mismas líneas, lo detecta y no modifica nada.',
  },
  {
    id: 'informe-orden-reciente',
    title: 'Informe siempre ordenado de lo más reciente a lo más antiguo',
    status: 'done',
    fecha: '2026-10-07',
    description:
      'Las tres tabs (Mejoras, Pendientes y Resúmenes) se ordenan solas por fecha, con lo más reciente arriba, sin depender del orden en que se escribieron. Además cada tab explica qué se documenta ahí, y las mejoras del dashboard pasan a registrarse automáticamente con cada cambio.',
  },
  {
    id: 'titulos-sin-numero',
    commits: ['6cae549'],
    title: 'Títulos de página sin número por delante',
    status: 'done',
    fecha: '2026-10-07',
    description:
      'Global, Brand y Semantic Colors, Typography Foundations y System, Grid System y Application y Visual Styles mostraban un prefijo (01, 02, 03) en el título y en la barra de versión. Ahora muestran solo el nombre. Los números de las secciones internas se mantienen.',
  },
  {
    id: 'registro-tabs-contenido-real',
    title: 'Registro de completado en tabs con criterio de contenido real',
    status: 'done',
    fecha: '2026-09-22',
    description:
      'El Registro se divide en dos tabs: "Por documentar" (páginas que todavía muestran la plantilla en blanco del master e ítems sin ningún dato) y "Contenido parcial" (páginas o ítems con solo una parte). Una página cuenta como documentada cuando está completada con valores concretos, sin importar si vienen del brief de un cliente o del master.',
  },
  {
    id: 'colorcard-combination',
    title: 'Nueva variante "combination" en ColorCard',
    status: 'done',
    fecha: '2026-09-22',
    description:
      'Documenta pares de color (fondo + texto) con badge de contraste calculado en vivo (AA/AAA/Fail) o badge manual para pares no recomendados ("Falla AA"/"Conflicto"). Usada por la categoría "Combinaciones aprobadas" de Semantic Colors.',
  },
  {
    id: 'informe-tabs',
    title: 'Informe dividido en tabs (Mejoras / Pendientes / Resúmenes)',
    status: 'done',
    fecha: '2026-09-22',
    description:
      'Se suma la tab "Resúmenes": un resumen por página de contenido real completada con el brief de un proyecto (qué se hizo, qué se dejó afuera y por qué), separado de las mejoras del dashboard en sí.',
  },
  {
    id: 'catalogo-master-template',
    title: 'Catálogo completo construido como master template en blanco',
    status: 'done',
    fecha: '2026-09-21',
    description:
      'Strategy, Foundations, Components, Templates y Brand Ops completos (32 páginas) siguiendo los .md de estructura de presentación por categoría. Ya no queda ningún PlaceholderPage — el Registro de completado muestra "Todo completo".',
  },
  {
    id: 'nomenclatura-tokens',
    title: 'Nomenclatura única de tokens/rutas',
    status: 'done',
    fecha: '2026-09-20',
    description:
      'Esquema <página>/<subpágina>/<sección>/<paleta si tiene>/<tono> aplicado en Semantic Colors, Typography System, Visual Styles y Grid Application.',
  },
  {
    id: 'buscador-global',
    title: 'Buscador global del sidebar',
    status: 'done',
    fecha: '2026-09-20',
    description:
      'Campo de búsqueda arriba de toda la navegación: indexa títulos y nombres de todo el catálogo y, al elegir un resultado, navega y hace scroll + resalta el ítem exacto.',
  },
  {
    id: 'ajustes-preset-buscador',
    title: 'Ajustes — preset "Deshabilitar todo" + buscador de módulos',
    status: 'done',
    fecha: '2026-09-20',
    description:
      'Tercer preset (apaga todo el catálogo de una) y un buscador entre los presets y la lista de categorías que filtra por nombre de grupo o de sub-página.',
  },
]

const PENDIENTES: Entry[] = [
  {
    id: 'hex-vs-hsl',
    title: 'HEX vs. HSL como fuente de verdad',
    status: 'pending',
    fecha: '2026-09-20',
    description:
      'Consultar con el equipo si conviene documentar HSL en vez de HEX — el HEX es un redondeo aproximado del HSL definido en el picker de Figma, lo que pierde precisión.',
  },
  {
    id: 'pagina-real-photography',
    title: 'Página real de Photography',
    status: 'pending',
    fecha: '2026-09-20',
    description:
      'Los componentes (PhotoCategoryCard, ImageCriteriaCard, ComparisonCard, ComparisonExampleCard) ya están construidos; falta el contenido real cuando lleguen las fotos de marca.',
  },
  {
    id: 'tooltip-sidebar-subpaginas',
    title: 'Tooltip del sidebar con sub-páginas',
    status: 'pending',
    fecha: '2026-09-20',
    description:
      'En el rail comprimido, el tooltip de un grupo con sub-páginas (Color System, Typography System, Layout & Grid) hoy solo muestra el nombre del grupo.',
  },
  {
    id: 'redistribuir-visual-styles',
    title: 'Redistribuir y eliminar Visual Styles',
    status: 'pending',
    fecha: '2026-09-20',
    description:
      'Repartir Spacing, Border Radius, Borders, Shadows y Sizing en las páginas de Foundations correspondientes, y luego eliminar el módulo "Visual Styles" completo.',
  },
]

interface ResumenEntry {
  pagina: string
  categoria: string
  proyecto: string
  fecha: string
  hecho: string[]
  afuera: string[]
}

const RESUMENES: ResumenEntry[] = []

/* ─── Revertir cambio (solo con `npm run dev`; ver tools/revertMejoraPlugin.ts) ─── */

interface RevertCommit {
  hash: string
  short: string
  subject: string
  files: number
}

interface RevertPlan {
  title: string
  branch: string
  mode: 'patch' | 'commits' | 'none'
  files: string[]
  commits: RevertCommit[]
  blocker: string | null
}

type RevertDone =
  | { mode: 'patch'; files: string[]; backup: string }
  | { mode: 'commits'; commit: string; reverted: string[] }

type RevertState =
  | { step: 'loading' }
  | { step: 'ready'; plan: RevertPlan }
  | { step: 'working'; plan: RevertPlan }
  | { step: 'done'; result: RevertDone }
  | { step: 'error'; message: string }

const CAN_EDIT_LOCAL = import.meta.env.DEV

async function callRevert(id: string, mode: 'plan' | 'apply') {
  const res = await fetch('/__dev/revert', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Dev-Revert': '1' },
    body: JSON.stringify({ id, mode }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error ?? 'No se pudo completar la acción.')
  return data
}

async function callPendiente(id: string, listo: boolean) {
  const res = await fetch('/__dev/pendiente', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Dev-Revert': '1' },
    body: JSON.stringify({ id, listo }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error ?? 'No se pudo actualizar el pendiente.')
}

function FileList({ files }: { files: string[] }) {
  const shown = files.slice(0, 8)
  return (
    <ul className="flex flex-col gap-[4px]">
      {shown.map((f) => (
        <li key={f} className="rounded-[8px] bg-[#f4f5f7] px-[12px] py-[6px] font-mono text-[12px] text-[#576175]">
          {f}
        </li>
      ))}
      {files.length > shown.length && (
        <li className="px-[12px] text-[12px] text-[#8a94a8]">… y {files.length - shown.length} más</li>
      )}
    </ul>
  )
}

function RevertModal({ entry, onClose }: { entry: Entry; onClose: () => void }) {
  const [state, setState] = useState<RevertState>({ step: 'loading' })
  const cancelRef = useRef<HTMLButtonElement>(null)
  const busy = state.step === 'working'

  useEffect(() => {
    let alive = true
    callRevert(entry.id ?? '', 'plan')
      .then((plan) => alive && setState({ step: 'ready', plan }))
      .catch((e: Error) => alive && setState({ step: 'error', message: e.message }))
    return () => {
      alive = false
    }
  }, [entry.id])

  useEffect(() => {
    cancelRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !busy) onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [busy, onClose])

  const plan = state.step === 'ready' || state.step === 'working' ? state.plan : null

  async function confirm() {
    if (state.step !== 'ready') return
    const current = state.plan
    setState({ step: 'working', plan: current })
    try {
      const result = (await callRevert(entry.id ?? '', 'apply')) as RevertDone
      setState({ step: 'done', result })
    } catch (e) {
      setState({ step: 'error', message: (e as Error).message })
    }
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#16181d]/50 p-[16px]"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget && !busy) onClose()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="revert-title"
        className="flex max-h-[90vh] w-full max-w-[520px] flex-col gap-[16px] overflow-y-auto rounded-[16px] bg-white p-[24px] shadow-[0_24px_48px_rgba(22,24,29,0.24)]"
      >
        <h3 id="revert-title" className="font-bold text-[20px] leading-[26px] text-[#16181d]">
          Revertir cambio
        </h3>

        <p className="text-[14px] leading-[20px] text-[#576175]">
          Vas a deshacer: <strong className="text-[#16181d]">{entry.title}</strong>
        </p>

        {state.step === 'loading' && <p className="text-[14px] text-[#8a94a8]">Buscando qué cambió…</p>}

        {plan?.mode === 'patch' && (
          <div className="flex flex-col gap-[8px]">
            <p className="text-[13px] font-semibold text-[#16181d]">
              Se van a deshacer los cambios que hizo en {plan.files.length}{' '}
              {plan.files.length === 1 ? 'archivo' : 'archivos'} (haya o no commit):
            </p>
            <FileList files={plan.files} />
            <p className="text-[13px] leading-[19px] text-[#8a94a8]">
              Solo se deshace este cambio; el resto de tu trabajo se conserva. No se crea ningún commit: los archivos
              quedan modificados para que los revises. Antes se guarda una copia de seguridad por si te arrepentís.
            </p>
          </div>
        )}

        {plan?.mode === 'commits' && (
          <div className="flex flex-col gap-[8px]">
            <p className="text-[13px] font-semibold text-[#16181d]">
              Se va a crear un commit nuevo en <code className="font-mono">{plan.branch}</code> que deshace:
            </p>
            <ul className="flex flex-col gap-[6px]">
              {plan.commits.map((c) => (
                <li key={c.hash} className="rounded-[8px] bg-[#f4f5f7] px-[12px] py-[8px] text-[13px] text-[#576175]">
                  <code className="font-mono text-[#16181d]">{c.short}</code> — {c.subject}{' '}
                  <span className="text-[#8a94a8]">
                    ({c.files} {c.files === 1 ? 'archivo' : 'archivos'})
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-[13px] leading-[19px] text-[#8a94a8]">
              No borra historial: el revert queda como un commit más (también si el cambio ya estaba subido a GitHub).
              Para subirlo hay que guardarlo después (/guardar). Tu trabajo sin guardar no se toca.
            </p>
          </div>
        )}

        {plan?.blocker && (
          <p className="rounded-[8px] bg-[#fffbeb] px-[12px] py-[10px] text-[13px] leading-[19px] text-[#92400e]">
            {plan.blocker}
          </p>
        )}

        {state.step === 'error' && (
          <p className="rounded-[8px] bg-[#fef3f2] px-[12px] py-[10px] text-[13px] leading-[19px] text-[#b42318]">
            {state.message}
          </p>
        )}

        {state.step === 'done' && (
          <p className="rounded-[8px] bg-[#ecfdf3] px-[12px] py-[10px] text-[13px] leading-[19px] text-[#166534]">
            {state.result.mode === 'patch' ? (
              <>
                Listo. Se deshizo el cambio en {state.result.files.length}{' '}
                {state.result.files.length === 1 ? 'archivo' : 'archivos'} y la entrada se quitó de Cambios. Si te
                arrepentís, la copia de seguridad está en <code className="font-mono">{state.result.backup}</code>.
              </>
            ) : (
              <>
                Listo. Se creó el commit <code className="font-mono">{state.result.commit}</code> que deshace este
                cambio y la entrada se quitó de Cambios.
              </>
            )}
          </p>
        )}

        <div className="flex justify-end gap-[8px]">
          <button
            ref={cancelRef}
            type="button"
            disabled={busy}
            onClick={onClose}
            className="rounded-[8px] border border-[#e3e7ee] bg-white px-[14px] py-[8px] text-[13px] font-semibold text-[#16181d] hover:bg-[#f4f5f7] disabled:opacity-50"
          >
            {state.step === 'done' || state.step === 'error' ? 'Cerrar' : 'Cancelar'}
          </button>
          {(state.step === 'ready' || state.step === 'working') && (
            <button
              type="button"
              disabled={busy || state.plan.blocker !== null}
              onClick={confirm}
              className="rounded-[8px] bg-[#b42318] px-[14px] py-[8px] text-[13px] font-semibold text-white hover:bg-[#912018] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {busy ? 'Revirtiendo…' : 'Sí, revertir cambio'}
            </button>
          )}
        </div>
      </div>
    </div>,
    document.body,
  )
}


function RevertButton({ onClick }: { onClick: () => void }) {
  const base = 'rounded-[8px] border px-[12px] py-[6px] text-[13px] font-semibold'
  if (!CAN_EDIT_LOCAL) {
    return (
      <Tooltip label="Solo disponible al correr el dashboard en local (npm run dev)">
        <button type="button" disabled className={`${base} cursor-not-allowed border-[#e3e7ee] bg-white text-[#a8afbe]`}>
          Revertir cambio
        </button>
      </Tooltip>
    )
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${base} border-[#fecdca] bg-white text-[#b42318] hover:bg-[#fef3f2]`}
    >
      Revertir cambio
    </button>
  )
}

function ListoButton({ listo, busy, onClick }: { listo: boolean; busy: boolean; onClick: () => void }) {
  const base = 'rounded-[8px] border px-[12px] py-[6px] text-[13px] font-semibold'
  if (!CAN_EDIT_LOCAL) {
    return (
      <Tooltip label="Solo disponible al correr el dashboard en local (npm run dev)">
        <button type="button" disabled className={`${base} cursor-not-allowed border-[#e3e7ee] bg-white text-[#a8afbe]`}>
          {listo ? 'Reabrir' : 'Marcar como listo'}
        </button>
      </Tooltip>
    )
  }
  return (
    <button
      type="button"
      disabled={busy}
      onClick={onClick}
      className={`${base} disabled:cursor-wait disabled:opacity-60 ${
        listo
          ? 'border-[#e3e7ee] bg-white text-[#576175] hover:bg-[#f4f5f7]'
          : 'border-[#abefc6] bg-white text-[#166534] hover:bg-[#ecfdf3]'
      }`}
    >
      {busy ? 'Guardando…' : listo ? 'Reabrir' : 'Marcar como listo'}
    </button>
  )
}

function EntryCard({
  entry,
  onRevert,
  onToggleListo,
  listoBusy = false,
  doneLabel = 'Hecho',
}: {
  entry: Entry
  onRevert?: () => void
  /** Solo Pendientes: marca el pendiente como listo (o lo reabre). */
  onToggleListo?: () => void
  listoBusy?: boolean
  doneLabel?: string
}) {
  const resuelto = onToggleListo !== undefined && entry.status === 'done'
  return (
    <div className="flex w-full flex-col gap-[8px] rounded-[16px] border border-[#e3e7ee] bg-[#fafbfc] p-[20px]">
      <div className="flex w-full flex-wrap items-start justify-between gap-[12px]">
        <p
          className={`font-bold text-[16px] leading-[22px] ${
            resuelto ? 'text-[#8a94a8] line-through decoration-[#a8afbe]' : 'text-[#16181d]'
          }`}
        >
          {entry.title}
        </p>
        <div className="flex shrink-0 items-center gap-[8px]">
          <span className="rounded-[999px] bg-[#eef2f8] px-[10px] py-[4px] font-semibold text-[11px] text-[#44515f]">
            {entry.fecha}
          </span>
          <span
            className={`rounded-[999px] px-[10px] py-[4px] font-semibold text-[11px] uppercase leading-[14px] tracking-[0.03em] ${
              entry.status === 'done' ? 'bg-[#ecfdf3] text-[#166534]' : 'bg-[#fffbeb] text-[#92400e]'
            }`}
          >
            {entry.status === 'done' ? doneLabel : 'Pendiente'}
          </span>
        </div>
      </div>
      <p className={`font-normal text-[14px] leading-[20px] ${resuelto ? 'text-[#8a94a8]' : 'text-[#576175]'}`}>
        {entry.description}
      </p>
      {resuelto && entry.completada && (
        <p className="text-[12px] font-medium text-[#166534]">Completado el {entry.completada}</p>
      )}
      {onRevert && (
        <div className="flex justify-end pt-[4px]">
          <RevertButton onClick={onRevert} />
        </div>
      )}
      {onToggleListo && (
        <div className="flex justify-end pt-[4px]">
          <ListoButton listo={entry.status === 'done'} busy={listoBusy} onClick={onToggleListo} />
        </div>
      )}
    </div>
  )
}

function SearchBox({
  value,
  onChange,
  placeholder,
  shown,
  total,
}: {
  value: string
  onChange: (v: string) => void
  placeholder: string
  shown: number
  total: number
}) {
  return (
    <div className="flex w-full flex-wrap items-center gap-[12px]">
      <div className="relative w-full max-w-[420px]">
        <Search
          aria-hidden
          className="pointer-events-none absolute left-[12px] top-1/2 size-[16px] -translate-y-1/2 text-[#8a94a8]"
        />
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          className="h-[40px] w-full rounded-[10px] border border-[#e3e7ee] bg-white pl-[36px] pr-[12px] text-[14px] text-[#16181d] outline-none placeholder:text-[#8a94a8] focus:border-[#004c97]"
        />
      </div>
      {value.trim() !== '' && (
        <span className="text-[13px] text-[#8a94a8]">
          {shown} de {total}
        </span>
      )}
    </div>
  )
}

function SinResultados({ consulta }: { consulta: string }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-[8px] rounded-[16px] border border-dashed border-[#c4c9d4] bg-[#f7f8fa] p-[40px] text-center">
      <p className="font-semibold text-[16px] text-[#16181d]">Sin resultados</p>
      <p className="max-w-[420px] font-normal text-[14px] leading-[20px] text-[#576175]">
        No hay nada que coincida con "{consulta.trim()}". Probá con otra palabra.
      </p>
    </div>
  )
}


function ResumenCard({ entry }: { entry: ResumenEntry }) {
  return (
    <div className="flex w-full flex-col gap-[16px] rounded-[16px] border border-[#e3e7ee] bg-[#fafbfc] p-[20px]">
      <div className="flex w-full flex-wrap items-start justify-between gap-[12px]">
        <div className="flex flex-col gap-[2px]">
          <p className="font-bold text-[16px] leading-[22px] text-[#16181d]">{entry.pagina}</p>
          <p className="font-medium text-[12px] uppercase tracking-[0.4px] text-[#8a94a8]">
            {entry.categoria} · {entry.proyecto}
          </p>
        </div>
        <span className="shrink-0 rounded-[999px] bg-[#eef2f8] px-[10px] py-[4px] font-semibold text-[11px] text-[#44515f]">
          {entry.fecha}
        </span>
      </div>

      <div className="flex flex-col gap-[8px]">
        <p className="font-semibold text-[12px] uppercase tracking-[0.4px] text-[#166534]">Qué se hizo</p>
        <ul className="flex flex-col gap-[6px] pl-[18px]">
          {entry.hecho.map((h, i) => (
            <li key={i} className="list-disc font-normal text-[14px] leading-[20px] text-[#576175]">
              {h}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-[8px]">
        <p className="font-semibold text-[12px] uppercase tracking-[0.4px] text-[#92400e]">Qué quedó afuera</p>
        <ul className="flex flex-col gap-[6px] pl-[18px]">
          {entry.afuera.map((a, i) => (
            <li key={i} className="list-disc font-normal text-[14px] leading-[20px] text-[#576175]">
              {a}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

type Tab = 'mejoras' | 'pendientes' | 'resumenes'

const TABS: { id: Tab; label: string }[] = [
  { id: 'mejoras', label: 'Cambios' },
  { id: 'pendientes', label: 'Pendientes' },
  { id: 'resumenes', label: 'Resúmenes' },
]

function TabBar({ active, onChange }: { active: Tab; onChange: (tab: Tab) => void }) {
  return (
    <div className="flex w-full max-w-fit items-center gap-[4px] rounded-[999px] border border-[#e3e7ee] bg-[#f4f5f7] p-[4px]">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={`rounded-[999px] px-[18px] py-[8px] font-semibold text-[13px] leading-[16px] transition-colors ${
            active === tab.id ? 'bg-[#004c97] text-white' : 'text-[#576175] hover:text-[#16181d]'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export function InformePage() {
  const [tab, setTab] = useState<Tab>('mejoras')
  const [revertEntry, setRevertEntry] = useState<Entry | null>(null)
  const [queries, setQueries] = useState<Record<Tab, string>>({ mejoras: '', pendientes: '', resumenes: '' })
  const [listoBusy, setListoBusy] = useState<string | null>(null)
  const [listoError, setListoError] = useState<string | null>(null)

  const setQuery = (t: Tab, v: string) => setQueries((q) => ({ ...q, [t]: v }))

  const todasMejoras = masRecientesPrimero(MEJORAS)
  const mejoras = todasMejoras.filter((e) =>
    coincide(`${e.title} ${e.description} ${e.fecha}`, queries.mejoras),
  )

  const todosPendientes = masRecientesPrimero(PENDIENTES)
  const pendientes = todosPendientes.filter((e) =>
    coincide(
      `${e.title} ${e.description} ${e.fecha} ${e.completada ?? ''} ${e.status === 'done' ? 'listo' : 'pendiente'}`,
      queries.pendientes,
    ),
  )

  const todosResumenes = masRecientesPrimero(RESUMENES)
  const resumenes = todosResumenes.filter((r) =>
    coincide(
      [r.pagina, r.categoria, r.proyecto, r.fecha, ...r.hecho, ...r.afuera].join(' '),
      queries.resumenes,
    ),
  )

  async function toggleListo(entry: Entry) {
    if (!entry.id) return
    setListoBusy(entry.id)
    setListoError(null)
    try {
      await callPendiente(entry.id, entry.status !== 'done')
    } catch (e) {
      setListoError((e as Error).message)
    } finally {
      setListoBusy(null)
    }
  }

  return (
    <div id="informe" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Sistema"
        title="Informe"
        paragraphs={[
          'Historial de trabajo sobre el dashboard: cambios estructurales y funcionales, pendientes, y un resumen por página de contenido real completada con el brief de cada proyecto.',
          'Se actualiza solo cada vez que se hace un cambio, y siempre se muestra de lo más reciente a lo más antiguo.',
        ]}
      />

      <div className="flex w-full flex-col gap-[32px] px-[40px] py-[72px]">
        <TabBar active={tab} onChange={setTab} />

        {tab === 'mejoras' && (
          <section className="flex w-full flex-col gap-[24px]">
            <SectionHeader
              title="Cambios"
              description="Acá se documenta cada cambio que se hace en el dashboard en sí: una funcionalidad nueva, un componente, un ajuste de interfaz, un cambio de estructura o del catálogo. Queda registrado automáticamente, con su fecha y una descripción de qué se hizo y cómo funciona, sin que haya que pedirlo. El contenido de marca de cada página no va acá: se resume en la tab Resúmenes. Ordenado de la más reciente a la más antigua."
            />
            <SearchBox
              value={queries.mejoras}
              onChange={(v) => setQuery('mejoras', v)}
              placeholder="Buscar en cambios…"
              shown={mejoras.length}
              total={todasMejoras.length}
            />
            {mejoras.length === 0 ? (
              <SinResultados consulta={queries.mejoras} />
            ) : (
              <div className="flex w-full flex-col gap-[12px]">
                {mejoras.map((entry) => (
                  <EntryCard key={entry.title} entry={entry} onRevert={() => setRevertEntry(entry)} />
                ))}
              </div>
            )}
          </section>
        )}

        {tab === 'pendientes' && (
          <section className="flex w-full flex-col gap-[24px]">
            <SectionHeader
              title="Pendientes"
              description="Ideas y tareas anotadas para más adelante. Nada de esto se ejecuta hasta que se pida explícitamente. Cuando un pendiente se resuelve, se marca como listo (queda tachado, con la fecha en que se completó) y se puede reabrir. Ordenado de la más reciente a la más antigua."
            />
            <SearchBox
              value={queries.pendientes}
              onChange={(v) => setQuery('pendientes', v)}
              placeholder="Buscar en pendientes…"
              shown={pendientes.length}
              total={todosPendientes.length}
            />
            {listoError && (
              <p className="rounded-[8px] bg-[#fef3f2] px-[12px] py-[10px] text-[13px] leading-[19px] text-[#b42318]">
                {listoError}
              </p>
            )}
            {pendientes.length === 0 ? (
              <SinResultados consulta={queries.pendientes} />
            ) : (
              <div className="flex w-full flex-col gap-[12px]">
                {pendientes.map((entry) => (
                  <EntryCard
                    key={entry.title}
                    entry={entry}
                    doneLabel="Listo"
                    onToggleListo={() => toggleListo(entry)}
                    listoBusy={listoBusy === entry.id}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {tab === 'resumenes' && (
          <section className="flex w-full flex-col gap-[24px]">
            <SectionHeader
              title="Resúmenes"
              description="Por cada página de contenido real: qué se completó y qué se dejó afuera deliberadamente, para poder auditar el criterio sin releer la página ni el Notion fuente. Ordenado de la más reciente a la más antigua."
            />
            <SearchBox
              value={queries.resumenes}
              onChange={(v) => setQuery('resumenes', v)}
              placeholder="Buscar en resúmenes…"
              shown={resumenes.length}
              total={todosResumenes.length}
            />
            {todosResumenes.length === 0 ? (
              <div className="flex w-full flex-col items-center justify-center gap-[8px] rounded-[16px] border border-dashed border-[#c4c9d4] bg-[#f7f8fa] p-[48px] text-center">
                <p className="font-semibold text-[16px] text-[#16181d]">Sin resúmenes todavía</p>
                <p className="max-w-[420px] font-normal text-[14px] leading-[20px] text-[#576175]">
                  Ninguna página tiene todavía el brief real de un proyecto cargado — esta tab se completa a medida
                  que se documenta contenido real.
                </p>
              </div>
            ) : resumenes.length === 0 ? (
              <SinResultados consulta={queries.resumenes} />
            ) : (
              <div className="flex w-full flex-col gap-[12px]">
                {resumenes.map((entry) => (
                  <ResumenCard key={`${entry.categoria}-${entry.pagina}`} entry={entry} />
                ))}
              </div>
            )}
          </section>
        )}
      </div>

      {revertEntry && <RevertModal entry={revertEntry} onClose={() => setRevertEntry(null)} />}
    </div>
  )
}
