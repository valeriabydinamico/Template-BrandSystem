import type { CSSProperties } from 'react'
import { PageHeader } from './PageHeader'
import { GovernanceFooter } from './GovernanceFooter'
import { MetaFooter } from './MetaFooter'
import { FONT } from './typography/shared'
import { DocNote, MetaRow, SectionHeader, TypePreview } from './docs/shared'
import { typographyFoundationsReports } from '../lib/siteCompleteness'
import { slugify } from '../lib/slug'
import type { TypeSpecEntry } from '../data/typographyFoundations'
import typeBadgeIcon from '@/assets/type-badge-icon.svg'

/* ────────────────────────────────────────────────────────────────────────────
 * 01 Typography Foundations — Figma nodo 196:6664.
 *
 * Base tipográfica configurable: familias de marca, tipografía funcional y
 * comportamiento tipográfico de los CTA. La configuración de ejemplo del master
 * es Manrope / Source Serif 4 / Inter (se sustituye por proyecto).
 *
 * Datos de marca en `src/app/data/typographyFoundations.ts`; reporte de
 * completitud en `src/app/lib/siteCompleteness.ts` (`typographyFoundationsReports`).
 * Un rol sin todos sus campos obligatorios se oculta (ver "Regla de
 * completitud de datos" en CLAUDE.md); el `previewText`/`previewStyle` y las
 * labels de fila (`ROW_LABELS`) son estructurales, no datos de marca.
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

/** Labels de fila por tipo de card — estructural, no varía por proyecto. */
const ROW_LABELS = {
  brand: { family: 'Familia configurada', weights: 'Pesos aprobados', role: 'Rol principal', usage: 'Uso recomendado' },
  cta: { family: 'Fuente tipográfica', weights: 'Weight', role: 'Prioridad', usage: 'Ejemplos' },
} as const

/** Preview de ejemplo por rol — contenido ilustrativo, no dato de marca. */
const PREVIEW: Record<string, { text: string; style: CSSProperties }> = {
  'Tipografía primaria de marca': {
    text: 'Build trust through every interaction.',
    style: { fontFamily: FONT.brand, fontWeight: 600, fontSize: 30, lineHeight: '38px' },
  },
  'Tipografía secundaria de marca': {
    text: 'Ideas deserve room to breathe.',
    style: { fontFamily: FONT.editorial, fontWeight: 500, fontSize: 30, lineHeight: '38px' },
  },
  'Tipografía funcional': {
    text: 'Clear, readable interfaces for every task.',
    style: { fontFamily: FONT.functional, fontWeight: 400, fontSize: 22, lineHeight: '30px' },
  },
  'CTA de producto': {
    text: 'Continue',
    style: { fontFamily: FONT.functional, fontWeight: 600, fontSize: 18, lineHeight: '24px' },
  },
  'CTA de comunicación': {
    text: 'Discover the story',
    style: { fontFamily: FONT.brand, fontWeight: 600, fontSize: 18, lineHeight: '24px' },
  },
}

/** Card de especificación de una familia / rol tipográfico. */
function TypeSpecCard({ spec, kind }: { spec: TypeSpecEntry; kind: 'brand' | 'cta' }) {
  const labels = ROW_LABELS[kind]
  const preview = spec.title ? PREVIEW[spec.title] : undefined
  const rows: SpecRow[] = [
    { label: labels.family, value: spec.family!, valueStyle: preview ? { fontFamily: preview.style.fontFamily, fontWeight: 600 } : undefined },
    { label: labels.weights, value: spec.weights! },
    { label: labels.role, value: spec.role! },
    { label: labels.usage, value: spec.usage! },
  ]

  return (
    <div
      id={spec.title ? `type-foundation-${slugify(spec.title)}` : undefined}
      className="flex w-full min-w-0 flex-col gap-[16px] rounded-[16px] border border-[#b9c3ce] bg-white p-[28px]"
    >
      <div className="flex flex-wrap items-center gap-[12px]">
        <h3 className="font-bold text-[22px] leading-[27px] text-[#2f3945]">{spec.title}</h3>
        {spec.optional && (
          <span className="rounded-[999px] border border-[#b9c3ce] bg-[#f6f8fa] px-[8px] py-[3px] font-medium text-[12px] leading-[15px] text-[#465463]">
            Opcional
          </span>
        )}
      </div>
      <p className="w-full font-normal text-[15px] leading-[22px] text-[#5f6b78]">{spec.description}</p>
      {preview && <TypePreview text={preview.text} style={preview.style} />}
      <div className="flex w-full flex-col gap-[8px]">
        {rows.map((r) => (
          <MetaRow key={r.label} label={r.label} value={r.value} valueStyle={r.valueStyle} />
        ))}
      </div>
    </div>
  )
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
  const { brandPrimary, brandSecondary, functional, ctaProduct, ctaCommunication } = typographyFoundationsReports

  const hasBrandFamilies = brandPrimary.visible.length > 0 || brandSecondary.visible.length > 0
  const hasCta = ctaProduct.visible.length > 0 || ctaCommunication.visible.length > 0

  return (
    <div id="typography.foundations" className="flex w-full flex-col items-start bg-white">
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
        {hasBrandFamilies && (
          <section className="flex w-full flex-col gap-[24px]">
            <SectionHeader
              title="Tipografías de marca"
              description="Configuración de ejemplo para construir la voz visual de marca: Manrope como familia primaria y Source Serif 4 como apoyo editorial opcional."
            />
            <div className={ROW_2UP}>
              {brandPrimary.visible.map((spec) => (
                <div key={spec.title} className={COL_2UP}>
                  <TypeSpecCard spec={spec} kind="brand" />
                </div>
              ))}
              {brandSecondary.visible.map((spec) => (
                <div key={spec.title} className={COL_2UP}>
                  <TypeSpecCard spec={spec} kind="brand" />
                </div>
              ))}
            </div>
          </section>
        )}

        {functional.visible.length > 0 && (
          <section className="flex w-full flex-col gap-[24px]">
            <SectionHeader
              title="Tipografía funcional"
              description="Familia funcional para lectura, interfaces y producto. Debe priorizar legibilidad, consistencia y rendimiento en tamaños pequeños."
            />
            {functional.visible.map((spec) => (
              <TypeSpecCard key={spec.title} spec={spec} kind="brand" />
            ))}
          </section>
        )}

        {hasCta && (
          <section className="flex w-full flex-col gap-[24px]">
            <SectionHeader
              title="Tipografía para CTA & Buttons"
              description="Define el comportamiento tipográfico de acciones sin asumir que todos los CTAs pertenecen a la misma familia o canal."
            />
            <div className={ROW_2UP}>
              {ctaProduct.visible.map((spec) => (
                <div key={spec.title} className={COL_2UP}>
                  <TypeSpecCard spec={spec} kind="cta" />
                </div>
              ))}
              {ctaCommunication.visible.map((spec) => (
                <div key={spec.title} className={COL_2UP}>
                  <TypeSpecCard spec={spec} kind="cta" />
                </div>
              ))}
            </div>
          </section>
        )}

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
