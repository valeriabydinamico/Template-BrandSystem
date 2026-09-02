import { ArrowRight } from 'lucide-react'
import { PageHeader } from './PageHeader'
import brandSystemBadgeIcon from '@/assets/brand-system-badge-icon.svg'

/* ────────────────────────────────────────────────────────────────────────────
 * Introducción — home. Sinopsis del sitio + mapa de módulos.
 * Lenguaje visual del resto de la documentación (Tailwind, sin Astra).
 * ────────────────────────────────────────────────────────────────────────── */

export type IntroTarget = 'color' | 'typography' | 'visual-styles' | 'grids'

const PRINCIPLES = [
  'Los tokens nombran una función, no un valor: el rol se mantiene aunque cambie el color, la medida o la familia.',
  'Cada sección incluye su gobernanza: reglas estables que acotan cómo y cuándo aplicar cada decisión.',
  'Accesibilidad y contraste se calculan y documentan, no se asumen.',
  'Los valores del master son puntos de partida; se validan en el contexto real de cada proyecto.',
]

const MODULES: {
  target: IntroTarget
  eyebrow: string
  title: string
  description: string
  pages: string
}[] = [
  {
    target: 'color',
    eyebrow: 'Color System',
    title: 'Color',
    description:
      'Primitives, roles cromáticos de marca y tokens semánticos para superficies, texto, bordes y estados. Ratios y nivel WCAG calculados por card.',
    pages: 'Global · Brand · Semantic',
  },
  {
    target: 'typography',
    eyebrow: 'Type System',
    title: 'Typography',
    description:
      'Familias de marca y funcional, roles tipográficos y la escala responsive (desktop / tablet / mobile) de la configuración de ejemplo.',
    pages: 'Foundations · System',
  },
  {
    target: 'visual-styles',
    eyebrow: 'Visual Styles',
    title: 'Estilos visuales',
    description:
      'Spacing como escala base, más border radius, borders, shadows y sizing de componentes e íconos como decisiones complementarias.',
    pages: 'Página única',
  },
  {
    target: 'grids',
    eyebrow: 'Layout Grids',
    title: 'Grillas',
    description:
      'Anatomía de la grilla y baseline global, más formatos de referencia por canal, wireframes estructurales y reglas de alineación.',
    pages: 'System · Application',
  },
]

function ModuleCard({
  data,
  onNavigate,
}: {
  data: (typeof MODULES)[number]
  onNavigate: (t: IntroTarget) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onNavigate(data.target)}
      className="group flex w-full min-w-0 flex-col items-start gap-[12px] rounded-[16px] border border-[#b9c3ce] bg-white p-[24px] text-left transition-colors hover:border-[#8fb3dd] hover:bg-[#f7f9fb]"
    >
      <span className="font-semibold text-[11px] uppercase leading-[14px] tracking-[0.6px] text-[#8a94a8]">
        {data.eyebrow}
      </span>
      <p className="font-bold text-[22px] leading-[27px] text-[#1c212b]">{data.title}</p>
      <p className="font-normal text-[14px] leading-[21px] text-[#59667d]">{data.description}</p>
      <span className="mt-[4px] inline-flex items-center gap-[6px] font-semibold text-[13px] leading-[18px] text-[#004c97]">
        {data.pages}
        <ArrowRight size={15} className="transition-transform group-hover:translate-x-[2px]" />
      </span>
    </button>
  )
}

export function IntroduccionPage({ onNavigate }: { onNavigate: (t: IntroTarget) => void }) {
  return (
    <div className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Brand System"
        moduleIconSrc={brandSystemBadgeIcon}
        title="Introducción"
        paragraphs={[
          'Sitio de documentación del Template — BrandSystem: un master de design system para arrancar proyectos de marca con una base coherente y trazable.',
          'Reúne las decisiones estructurales — color, tipografía, estilos visuales y grillas — como escalas y tokens reutilizables. Cada valor se adapta por proyecto sin cambiar la lógica ni la intención del sistema.',
          null,
          'El master conserva las reglas estables; los valores concretos son puntos de partida que se validan en el contexto real de cada cliente.',
        ]}
      />

      <div className="flex w-full flex-col gap-[48px] px-[40px] py-[64px]">
        <section className="flex w-full flex-col gap-[20px]">
          <h2 className="font-bold text-[24px] leading-[30px] tracking-[-0.2px] text-[#1c212b]">
            Cómo leer este sistema
          </h2>
          <ul className="flex w-full flex-col gap-[10px]">
            {PRINCIPLES.map((p, i) => (
              <li
                key={i}
                className="flex w-full items-start gap-[12px] rounded-[12px] bg-[#f1f4f7] px-[18px] py-[14px]"
              >
                <span className="mt-[1px] grid size-[20px] shrink-0 place-items-center rounded-full bg-[#596879] font-semibold text-[11px] text-white">
                  {i + 1}
                </span>
                <p className="font-normal text-[14px] leading-[21px] text-[#3f4a5a]">{p}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex w-full flex-col gap-[20px]">
          <div className="flex w-full flex-col gap-[6px]">
            <h2 className="font-bold text-[24px] leading-[30px] tracking-[-0.2px] text-[#1c212b]">
              Cómo está organizado
            </h2>
            <p className="font-normal text-[15px] leading-[22px] text-[#59667d]">
              Cuatro áreas, cada una con sus tokens, previews en vivo y bloque de gobernanza.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-[16px] min-[720px]:grid-cols-2 min-[1400px]:grid-cols-4">
            {MODULES.map((m) => (
              <ModuleCard key={m.target} data={m} onNavigate={onNavigate} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
