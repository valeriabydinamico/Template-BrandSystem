import { PageHeader } from './PageHeader'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Informe — historial de mejoras estructurales/funcionales del dashboard en
 * sí (sidebar, buscador, Ajustes, convenciones de datos…), separado del
 * contenido de marca que documenta cada página. Se actualiza a mano cada vez
 * que se suma o cierra un cambio relevante — no se calcula de ningún reporte
 * como `RegistroPage`.
 * ────────────────────────────────────────────────────────────────────────── */

interface Entry {
  title: string
  status: 'done' | 'pending'
  description: string
}

const MEJORAS: Entry[] = [
  {
    title: 'Ajustes — preset "Deshabilitar todo" + buscador de módulos',
    status: 'done',
    description:
      'Tercer preset (apaga todo el catálogo de una) y un buscador entre los presets y la lista de categorías que filtra por nombre de grupo o de sub-página.',
  },
  {
    title: 'Buscador global del sidebar',
    status: 'done',
    description:
      'Campo de búsqueda arriba de toda la navegación: indexa títulos y nombres de todo el catálogo y, al elegir un resultado, navega y hace scroll + resalta el ítem exacto.',
  },
  {
    title: 'Nomenclatura única de tokens/rutas',
    status: 'done',
    description:
      'Esquema <página>/<subpágina>/<sección>/<paleta si tiene>/<tono> aplicado en Semantic Colors, Typography System, Visual Styles y Grid Application.',
  },
]

const PENDIENTES: Entry[] = [
  {
    title: 'Redistribuir y eliminar Visual Styles',
    status: 'pending',
    description:
      'Repartir Spacing, Border Radius, Borders, Shadows y Sizing en las páginas de Foundations correspondientes, y luego eliminar el módulo "Visual Styles" completo.',
  },
  {
    title: 'Tooltip del sidebar con sub-páginas',
    status: 'pending',
    description:
      'En el rail comprimido, el tooltip de un grupo con sub-páginas (Color System, Typography System, Layout & Grid) hoy solo muestra el nombre del grupo.',
  },
  {
    title: 'Página real de Photography',
    status: 'pending',
    description:
      'Los componentes (PhotoCategoryCard, ImageCriteriaCard, ComparisonCard, ComparisonExampleCard) ya están construidos; falta el contenido real cuando lleguen las fotos de marca.',
  },
  {
    title: 'HEX vs. HSL como fuente de verdad',
    status: 'pending',
    description:
      'Consultar con el equipo si conviene documentar HSL en vez de HEX — el HEX es un redondeo aproximado del HSL definido en el picker de Figma, lo que pierde precisión.',
  },
]

function EntryCard({ entry }: { entry: Entry }) {
  return (
    <div className="flex w-full flex-col gap-[8px] rounded-[16px] border border-[#e3e7ee] bg-[#fafbfc] p-[20px]">
      <div className="flex w-full items-start justify-between gap-[12px]">
        <p className="font-bold text-[16px] leading-[22px] text-[#16181d]">{entry.title}</p>
        <span
          className={`shrink-0 rounded-[999px] px-[10px] py-[4px] font-semibold text-[11px] uppercase leading-[14px] tracking-[0.03em] ${
            entry.status === 'done' ? 'bg-[#ecfdf3] text-[#166534]' : 'bg-[#fffbeb] text-[#92400e]'
          }`}
        >
          {entry.status === 'done' ? 'Hecho' : 'Pendiente'}
        </span>
      </div>
      <p className="font-normal text-[14px] leading-[20px] text-[#576175]">{entry.description}</p>
    </div>
  )
}

export function InformePage() {
  return (
    <div id="informe" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Sistema"
        title="Informe"
        paragraphs={[
          'Historial de mejoras estructurales y funcionales del dashboard — sidebar, buscador, Ajustes, convenciones de datos — separado del contenido de marca que documenta cada página.',
          'Se actualiza a mano cada vez que se cierra un cambio relevante.',
        ]}
      />

      <div className="flex w-full flex-col gap-[48px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="Mejoras" description="De lo primero a lo más reciente." />
          <div className="flex w-full flex-col gap-[12px]">
            {MEJORAS.map((entry) => (
              <EntryCard key={entry.title} entry={entry} />
            ))}
          </div>
        </section>

        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="Pendientes" description="Nada de esto se ejecuta hasta que se pida explícitamente." />
          <div className="flex w-full flex-col gap-[12px]">
            {PENDIENTES.map((entry) => (
              <EntryCard key={entry.title} entry={entry} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
