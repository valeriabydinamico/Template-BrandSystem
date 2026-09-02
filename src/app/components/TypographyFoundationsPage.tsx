import type { CSSProperties } from 'react'
import { PageHeader } from './PageHeader'
import { GovernanceFooter } from './GovernanceFooter'
import { MetaFooter } from './MetaFooter'
import { FONT } from './typography/shared'
import { DocNote, MetaRow, SectionHeader, TypePreview } from './docs/shared'
import typeBadgeIcon from '@/assets/type-badge-icon.svg'

/* ────────────────────────────────────────────────────────────────────────────
 * 01 Typography Foundations — Figma nodo 196:6664.
 *
 * Base tipográfica configurable: familias de marca, tipografía funcional y
 * comportamiento tipográfico de los CTA. La configuración de ejemplo del master
 * es Manrope / Source Serif 4 / Inter (se sustituye por proyecto).
 *
 * Responsive: mismo punto de quiebre que Brand/Semantic Colors (1600px).
 *   < 1600  → cards apiladas
 *   ≥ 1600  → dos cards por fila
 * ────────────────────────────────────────────────────────────────────────── */

interface SpecRow {
  label: string
  value: string
  valueStyle?: CSSProperties
}

interface TypeSpec {
  title: string
  optional?: boolean
  description: string
  previewText: string
  previewStyle: CSSProperties
  rows: SpecRow[]
}

/** Card de especificación de una familia / rol tipográfico. */
function TypeSpecCard({ spec }: { spec: TypeSpec }) {
  return (
    <div className="flex w-full min-w-0 flex-col gap-[16px] rounded-[16px] border border-[#b9c3ce] bg-white p-[28px]">
      <div className="flex flex-wrap items-center gap-[12px]">
        <h3 className="font-bold text-[22px] leading-[27px] text-[#2f3945]">{spec.title}</h3>
        {spec.optional && (
          <span className="rounded-[999px] border border-[#b9c3ce] bg-[#f6f8fa] px-[8px] py-[3px] font-medium text-[12px] leading-[15px] text-[#465463]">
            Opcional
          </span>
        )}
      </div>
      <p className="w-full font-normal text-[15px] leading-[22px] text-[#5f6b78]">
        {spec.description}
      </p>
      <TypePreview text={spec.previewText} style={spec.previewStyle} />
      <div className="flex w-full flex-col gap-[8px]">
        {spec.rows.map((r) => (
          <MetaRow key={r.label} label={r.label} value={r.value} valueStyle={r.valueStyle} />
        ))}
      </div>
    </div>
  )
}

/* ─── Datos (Figma · configuración de ejemplo) ─── */

const BRAND_PRIMARY: TypeSpec = {
  title: 'Tipografía primaria de marca',
  description:
    'Familia principal para titulares de marca, campañas, storytelling y comunicación editorial.',
  previewText: 'Build trust through every interaction.',
  previewStyle: { fontFamily: FONT.brand, fontWeight: 600, fontSize: 30, lineHeight: '38px' },
  rows: [
    { label: 'Familia configurada', value: 'Manrope', valueStyle: { fontFamily: FONT.brand, fontWeight: 600 } },
    { label: 'Pesos aprobados', value: 'Medium · Semi Bold · Bold' },
    { label: 'Rol principal', value: 'Marca / Jerarquía editorial' },
    { label: 'Uso recomendado', value: 'Display · Headlines · Campaigns · Storytelling' },
  ],
}

const BRAND_SECONDARY: TypeSpec = {
  title: 'Tipografía secundaria de marca',
  optional: true,
  description:
    'Familia complementaria para ampliar la expresión de marca sin competir con la primaria.',
  previewText: 'Ideas deserve room to breathe.',
  previewStyle: { fontFamily: FONT.editorial, fontWeight: 500, fontSize: 30, lineHeight: '38px' },
  rows: [
    { label: 'Familia configurada', value: 'Source Serif 4', valueStyle: { fontFamily: FONT.editorial, fontWeight: 500 } },
    { label: 'Pesos aprobados', value: 'Regular · Medium · Semi Bold' },
    { label: 'Rol principal', value: 'Editorial / Storytelling complementario' },
    { label: 'Uso recomendado', value: 'Subtitles · Quotes · Editorial moments' },
  ],
}

const FUNCTIONAL: TypeSpec = {
  title: 'Tipografía funcional',
  description:
    'Tipografía obligatoria para contenido funcional y lectura continua. Puede coincidir o no con la tipografía de marca.',
  previewText: 'Clear, readable interfaces for every task.',
  previewStyle: { fontFamily: FONT.functional, fontWeight: 400, fontSize: 22, lineHeight: '30px' },
  rows: [
    { label: 'Familia configurada', value: 'Inter', valueStyle: { fontFamily: FONT.functional, fontWeight: 600 } },
    { label: 'Pesos aprobados', value: 'Regular · Medium · Semi Bold · Bold' },
    { label: 'Rol principal', value: 'UI / Lectura / Producto' },
    { label: 'Uso recomendado', value: 'Body · Forms · Tables · Metadata · Disclaimers · Navigation' },
  ],
}

const CTA_PRODUCT: TypeSpec = {
  title: 'CTA de producto',
  description:
    'Acciones funcionales dentro de producto, navegación, formularios y flujos digitales.',
  previewText: 'Continue',
  previewStyle: { fontFamily: FONT.functional, fontWeight: 600, fontSize: 18, lineHeight: '24px' },
  rows: [
    { label: 'Fuente tipográfica', value: 'Inter', valueStyle: { fontFamily: FONT.functional, fontWeight: 600 } },
    { label: 'Weight', value: 'Semi Bold' },
    { label: 'Prioridad', value: 'Legibilidad y claridad de acción' },
    { label: 'Ejemplos', value: 'Buttons · Links · Tabs · Navigation' },
  ],
}

const CTA_COMMUNICATION: TypeSpec = {
  title: 'CTA de comunicación',
  description: 'Acciones en landings, campañas y piezas digitales de comunicación.',
  previewText: 'Discover the story',
  previewStyle: { fontFamily: FONT.brand, fontWeight: 600, fontSize: 18, lineHeight: '24px' },
  rows: [
    { label: 'Fuente tipográfica', value: 'Manrope', valueStyle: { fontFamily: FONT.brand, fontWeight: 600 } },
    { label: 'Weight', value: 'Semi Bold' },
    { label: 'Prioridad', value: 'Expresión de marca + legibilidad' },
    { label: 'Ejemplos', value: 'Campaign CTA · Landing CTA · Promotional links' },
  ],
}

const GOVERNANCE_RULES = [
  'La tipografía primaria de marca se reserva para expresión de marca y jerarquía editorial.',
  'La tipografía secundaria de marca es opcional: no debe activarse si no cumple una función diferenciada.',
  'La tipografía funcional debe cubrir lectura continua, UI, producto, metadata y contenido operativo.',
  'El CTA de producto debe priorizar la tipografía funcional; el CTA de comunicación puede usar tipografía de marca o funcional según el contexto.',
  'Cualquier line-height personalizado debe validarse internamente con una prueba de dos líneas antes de aprobarse.',
  'Las familias y pesos concretos se configuran por proyecto; el master conserva roles, no decisiones tipográficas de un cliente.',
]

/* dos cards por fila desde 1600px, apiladas por debajo */
const ROW_2UP = 'flex w-full items-stretch gap-[16px] max-[1600px]:flex-col min-[1600px]:flex-row'
const COL_2UP = 'min-w-0 max-[1600px]:w-full min-[1600px]:flex-1'

export function TypographyFoundationsPage() {
  return (
    <div className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Type System"
        moduleIconSrc={typeBadgeIcon}
        title="01 Typography Foundations"
        paragraphs={[
          'Base tipográfica configurable para marca, lectura y acciones.',
          'El master incluye una configuración de ejemplo real: Manrope para marca, Source Serif 4 como apoyo editorial e Inter para producto y lectura.',
          null,
          'Los roles se mantienen; familias, pesos y métricas se sustituyen por proyecto.',
        ]}
      />

      <div className="flex w-full flex-col gap-[44px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader
            title="Tipografías de marca"
            description="Configuración de ejemplo para construir la voz visual de marca: Manrope como familia primaria y Source Serif 4 como apoyo editorial opcional."
          />
          <div className={ROW_2UP}>
            <div className={COL_2UP}>
              <TypeSpecCard spec={BRAND_PRIMARY} />
            </div>
            <div className={COL_2UP}>
              <TypeSpecCard spec={BRAND_SECONDARY} />
            </div>
          </div>
        </section>

        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader
            title="Tipografía funcional"
            description="Familia funcional para lectura, interfaces y producto. Debe priorizar legibilidad, consistencia y rendimiento en tamaños pequeños."
          />
          <TypeSpecCard spec={FUNCTIONAL} />
        </section>

        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader
            title="Tipografía para CTA & Buttons"
            description="Define el comportamiento tipográfico de acciones sin asumir que todos los CTAs pertenecen a la misma familia o canal."
          />
          <div className={ROW_2UP}>
            <div className={COL_2UP}>
              <TypeSpecCard spec={CTA_PRODUCT} />
            </div>
            <div className={COL_2UP}>
              <TypeSpecCard spec={CTA_COMMUNICATION} />
            </div>
          </div>
        </section>

        <DocNote title="QA interno — Prueba de dos líneas">
          Cuando se modifique manualmente el line-height de una familia, validar siempre el resultado
          con al menos dos líneas de texto antes de aprobar el valor. Esta prueba es un criterio
          interno de construcción, no una regla visual para el cliente.
        </DocNote>
      </div>

      <GovernanceFooter title="Gobernanza tipográfica" rules={GOVERNANCE_RULES} />
      <MetaFooter label="v1 · Typography Foundations · Brand System Template · Master" />
    </div>
  )
}
