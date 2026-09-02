import { PageHeader } from './PageHeader'
import { GovernanceFooter } from './GovernanceFooter'
import { MetaFooter } from './MetaFooter'
import { TokenTag } from './TokenTag'
import { RefNote, SectionHeader } from './grids/shared'
import layoutGridsBadgeIcon from '@/assets/layout-grids-badge-icon.svg'

/* ────────────────────────────────────────────────────────────────────────────
 * 01 Grid System — Figma nodo 2162:33104.
 *
 * Fundamentos estructurales: anatomía de la grilla (columns / margins / gutters
 * / baseline / safe zones) y el baseline global de 4px.
 * Reutiliza PageHeader / GovernanceFooter / MetaFooter / TokenTag.
 * Responsive: breakpoint 1600 del template.
 * ────────────────────────────────────────────────────────────────────────── */

const ANATOMY = [
  {
    category: 'Estructura',
    title: 'Columns',
    description: 'Definen la estructura principal y el ancho útil disponible para organizar contenido.',
  },
  {
    category: 'Respiración',
    title: 'Margins',
    description: 'Protegen el contenido del borde del formato y establecen el inicio de la grilla.',
  },
  {
    category: 'Separación',
    title: 'Gutters',
    description: 'Mantienen distancia constante entre columnas y ayudan a sostener ritmo horizontal.',
  },
  {
    category: 'Ritmo vertical',
    title: 'Baseline',
    description: 'Referencia micro para alinear texto, módulos y alturas con mayor precisión vertical.',
  },
  {
    category: 'Área protegida',
    title: 'Safe Zones',
    description: 'Reservan zonas críticas para evitar cortes, UI nativa, legales o elementos de interfaz.',
  },
]

const GOVERNANCE_RULES = [
  'Columns, margins, gutters y safe zones definen estructura; no deben confundirse con decisiones de composición visual.',
  'El baseline funciona como referencia micro y no sustituye la escala oficial de Spacing.',
  'Las proporciones y cantidades de columnas son referencias configurables y deben adaptarse a cada formato real.',
  'Los Grid Styles documentados en el master son puntos de partida, no especificaciones universales para todos los clientes.',
  'Safe Zones deben responder a recortes, UI nativa, legibilidad y contexto de uso del formato.',
  'Cualquier excepción estructural debe documentarse cuando cambie la lógica base del sistema.',
  'Los valores finales se validan en el contexto real del formato antes de producción.',
]

function AnatomyCard({ data }: { data: (typeof ANATOMY)[number] }) {
  return (
    <div className="flex w-full min-w-0 flex-col gap-[12px] overflow-clip rounded-[16px] border border-[#bac2cf] bg-white p-[20px]">
      <span className="self-start rounded-[8px] bg-[#f1f4f7] px-[10px] py-[6px] font-semibold text-[11px] leading-[14px] text-[#3d5e87]">
        {data.category}
      </span>
      <p className="font-bold text-[18px] leading-[22px] text-[#1c212b]">{data.title}</p>
      <p className="font-normal text-[13px] leading-[20px] text-[#59667d]">{data.description}</p>
    </div>
  )
}

function BaselineCard() {
  return (
    <div className="flex w-full flex-col gap-[24px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
      <p className="font-bold text-[20px] leading-[25px] text-[#1c212b]">Baseline base</p>
      <div className="flex w-full flex-col gap-[8px] rounded-[10px] bg-[#f7f9fb] px-[16px] py-[16px]">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="h-px w-[220px] max-w-full" style={{ backgroundColor: '#9cbfe8' }} />
        ))}
      </div>
      <p className="font-semibold text-[13px] leading-[16px] text-[#3d5e87]">4 px</p>
      <div className="flex w-full flex-wrap items-baseline gap-x-[32px] gap-y-[8px] rounded-[10px] bg-[#f1f4f7] p-[16px]">
        <TokenTag fit>grid/baseline/base</TokenTag>
        <p className="font-semibold text-[13px] leading-[18px] text-[#1c212b]">4 px</p>
        <p className="min-w-[200px] flex-1 font-normal text-[13px] leading-[18px] text-[#59667d]">
          Alineación vertical de textos, line-heights, módulos y bloques.
        </p>
      </div>
    </div>
  )
}

export function GridSystemPage() {
  return (
    <div className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Layout Grids"
        moduleIconSrc={layoutGridsBadgeIcon}
        title="01 Grid System"
        paragraphs={[
          'Fundamentos estructurales para organizar columnas, márgenes, gutters, baseline y zonas seguras de forma consistente.',
          'La arquitectura define una lógica reusable antes de adaptarla a formatos, canales o necesidades específicas de cada cliente.',
          null,
          'El master conserva reglas estables y utiliza referencias configurables como punto de partida.',
        ]}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader
            title="01. Anatomía de la grilla"
            description="Cinco elementos definen la estructura base. Se combinan según el formato, pero mantienen una intención consistente dentro del sistema."
          />
          <div className="grid grid-cols-1 gap-[16px] min-[560px]:grid-cols-2 min-[900px]:grid-cols-3 min-[1600px]:grid-cols-5">
            {ANATOMY.map((a) => (
              <AnatomyCard key={a.title} data={a} />
            ))}
          </div>
        </section>

        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader
            title="02. Baseline global"
            description="El baseline funciona como referencia micro de ritmo vertical. No sustituye la escala oficial de Spacing ni crea un sistema paralelo."
          />
          <BaselineCard />
          <RefNote title="Relación con Spacing">
            El baseline de 4 px puede utilizarse como referencia de precisión. Las separaciones
            estructurales deben resolverse con la escala oficial de Spacing documentada en Visual
            Styles.
          </RefNote>
        </section>
      </div>

      <GovernanceFooter title="Gobernanza de Grid System" rules={GOVERNANCE_RULES} />
      <MetaFooter label="v1 · Grid System · Brand System Template · Master" />
    </div>
  )
}
