import { useState } from 'react'
import { PageHeader } from './PageHeader'
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
 * Las tres listas se actualizan a mano cada vez que se cierra un cambio
 * relevante — no se calculan de ningún reporte, a diferencia de `RegistroPage`.
 * ────────────────────────────────────────────────────────────────────────── */

interface Entry {
  title: string
  status: 'done' | 'pending'
  fecha: string
  description: string
}

const MEJORAS: Entry[] = [
  {
    title: 'Ajustes — preset "Deshabilitar todo" + buscador de módulos',
    status: 'done',
    fecha: '2026-09-20',
    description:
      'Tercer preset (apaga todo el catálogo de una) y un buscador entre los presets y la lista de categorías que filtra por nombre de grupo o de sub-página.',
  },
  {
    title: 'Buscador global del sidebar',
    status: 'done',
    fecha: '2026-09-20',
    description:
      'Campo de búsqueda arriba de toda la navegación: indexa títulos y nombres de todo el catálogo y, al elegir un resultado, navega y hace scroll + resalta el ítem exacto.',
  },
  {
    title: 'Nomenclatura única de tokens/rutas',
    status: 'done',
    fecha: '2026-09-20',
    description:
      'Esquema <página>/<subpágina>/<sección>/<paleta si tiene>/<tono> aplicado en Semantic Colors, Typography System, Visual Styles y Grid Application.',
  },
  {
    title: 'Catálogo completo construido como master template en blanco',
    status: 'done',
    fecha: '2026-09-21',
    description:
      'Strategy, Foundations, Components, Templates y Brand Ops completos (32 páginas) siguiendo los .md de estructura de presentación por categoría. Ya no queda ningún PlaceholderPage — el Registro de completado muestra "Todo completo".',
  },
  {
    title: 'Informe dividido en tabs (Mejoras / Pendientes / Resúmenes)',
    status: 'done',
    fecha: '2026-09-22',
    description:
      'Se suma la tab "Resúmenes": un resumen por página de contenido real completada con el brief de un proyecto (qué se hizo, qué se dejó afuera y por qué), separado de las mejoras del dashboard en sí.',
  },
  {
    title: 'Nueva variante "combination" en ColorCard',
    status: 'done',
    fecha: '2026-09-22',
    description:
      'Documenta pares de color (fondo + texto) con badge de contraste calculado en vivo (AA/AAA/Fail) o badge manual para pares no recomendados ("Falla AA"/"Conflicto"). Usada por la categoría "Combinaciones aprobadas" de Semantic Colors.',
  },
]

const PENDIENTES: Entry[] = [
  {
    title: 'Redistribuir y eliminar Visual Styles',
    status: 'pending',
    fecha: '2026-09-20',
    description:
      'Repartir Spacing, Border Radius, Borders, Shadows y Sizing en las páginas de Foundations correspondientes, y luego eliminar el módulo "Visual Styles" completo.',
  },
  {
    title: 'Tooltip del sidebar con sub-páginas',
    status: 'pending',
    fecha: '2026-09-20',
    description:
      'En el rail comprimido, el tooltip de un grupo con sub-páginas (Color System, Typography System, Layout & Grid) hoy solo muestra el nombre del grupo.',
  },
  {
    title: 'Página real de Photography',
    status: 'pending',
    fecha: '2026-09-20',
    description:
      'Los componentes (PhotoCategoryCard, ImageCriteriaCard, ComparisonCard, ComparisonExampleCard) ya están construidos; falta el contenido real cuando lleguen las fotos de marca.',
  },
  {
    title: 'HEX vs. HSL como fuente de verdad',
    status: 'pending',
    fecha: '2026-09-20',
    description:
      'Consultar con el equipo si conviene documentar HSL en vez de HEX — el HEX es un redondeo aproximado del HSL definido en el picker de Figma, lo que pierde precisión.',
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

function EntryCard({ entry }: { entry: Entry }) {
  return (
    <div className="flex w-full flex-col gap-[8px] rounded-[16px] border border-[#e3e7ee] bg-[#fafbfc] p-[20px]">
      <div className="flex w-full flex-wrap items-start justify-between gap-[12px]">
        <p className="font-bold text-[16px] leading-[22px] text-[#16181d]">{entry.title}</p>
        <div className="flex shrink-0 items-center gap-[8px]">
          <span className="rounded-[999px] bg-[#eef2f8] px-[10px] py-[4px] font-semibold text-[11px] text-[#44515f]">
            {entry.fecha}
          </span>
          <span
            className={`rounded-[999px] px-[10px] py-[4px] font-semibold text-[11px] uppercase leading-[14px] tracking-[0.03em] ${
              entry.status === 'done' ? 'bg-[#ecfdf3] text-[#166534]' : 'bg-[#fffbeb] text-[#92400e]'
            }`}
          >
            {entry.status === 'done' ? 'Hecho' : 'Pendiente'}
          </span>
        </div>
      </div>
      <p className="font-normal text-[14px] leading-[20px] text-[#576175]">{entry.description}</p>
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
  { id: 'mejoras', label: 'Mejoras' },
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

  return (
    <div id="informe" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Sistema"
        title="Informe"
        paragraphs={[
          'Historial de trabajo sobre el dashboard: mejoras estructurales y funcionales, pendientes, y un resumen por página de contenido real completada con el brief de cada proyecto.',
          'Se actualiza a mano cada vez que se cierra un cambio relevante.',
        ]}
      />

      <div className="flex w-full flex-col gap-[32px] px-[40px] py-[72px]">
        <TabBar active={tab} onChange={setTab} />

        {tab === 'mejoras' && (
          <section className="flex w-full flex-col gap-[24px]">
            <SectionHeader title="Mejoras" description="De lo primero a lo más reciente." />
            <div className="flex w-full flex-col gap-[12px]">
              {MEJORAS.map((entry) => (
                <EntryCard key={entry.title} entry={entry} />
              ))}
            </div>
          </section>
        )}

        {tab === 'pendientes' && (
          <section className="flex w-full flex-col gap-[24px]">
            <SectionHeader title="Pendientes" description="Nada de esto se ejecuta hasta que se pida explícitamente." />
            <div className="flex w-full flex-col gap-[12px]">
              {PENDIENTES.map((entry) => (
                <EntryCard key={entry.title} entry={entry} />
              ))}
            </div>
          </section>
        )}

        {tab === 'resumenes' && (
          <section className="flex w-full flex-col gap-[24px]">
            <SectionHeader
              title="Resúmenes"
              description="Por cada página de contenido real: qué se completó y qué se dejó afuera deliberadamente, para poder auditar el criterio sin releer la página ni el Notion fuente."
            />
            {RESUMENES.length === 0 ? (
              <div className="flex w-full flex-col items-center justify-center gap-[8px] rounded-[16px] border border-dashed border-[#c4c9d4] bg-[#f7f8fa] p-[48px] text-center">
                <p className="font-semibold text-[16px] text-[#16181d]">Sin resúmenes todavía</p>
                <p className="max-w-[420px] font-normal text-[14px] leading-[20px] text-[#576175]">
                  Ninguna página tiene todavía el brief real de un proyecto cargado — esta tab se completa a medida
                  que se documenta contenido real.
                </p>
              </div>
            ) : (
              <div className="flex w-full flex-col gap-[12px]">
                {RESUMENES.map((entry) => (
                  <ResumenCard key={`${entry.categoria}-${entry.pagina}`} entry={entry} />
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  )
}
