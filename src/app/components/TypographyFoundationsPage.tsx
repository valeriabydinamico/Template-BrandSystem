import type { CSSProperties, ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { TokenTag } from './TokenTag'
import typeBadgeIcon from '@/assets/type-badge-icon.svg'

/* ────────────────────────────────────────────────────────────────────────────
 * 01 Typography Foundations — Myntex ("Typography Global", Figma nodo
 * 182:7687, archivo "Myntex - Brand Definition (Limpio)").
 *
 * Documenta los primitivos tipográficos reales de Myntex — mismo rol que
 * Global Colors dentro de Color System: Font Family, Font Weight, Letter
 * Spacing y Font Size (escala completa de 24 pasos). Reemplaza la
 * configuración de ejemplo del master (Manrope/Source Serif 4/Inter).
 * Typography System (la otra sub-página del grupo) sigue documentando el
 * uso por contexto sobre estos mismos primitivos.
 *
 * Familias reales cargadas en `src/styles/fonts.css`:
 * --font-myntex-primary (Funnel Sans) y --font-myntex-details (Geist Mono).
 * ────────────────────────────────────────────────────────────────────────── */

const FONT_PRIMARY = 'var(--font-myntex-primary)'
const FONT_DETAILS = 'var(--font-myntex-details)'

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex w-full flex-col gap-[8px]">
      <h3 className="font-bold text-[24px] leading-[32px] tracking-[-0.24px] text-[#16181d]">{title}</h3>
      <div className="h-px w-full bg-[#e3e7ee]" />
    </div>
  )
}

function TokenRow({
  title,
  detail,
  token,
  sampleText,
  sampleStyle,
}: {
  title: string
  detail: string
  token: string
  sampleText: ReactNode
  sampleStyle: CSSProperties
}) {
  return (
    <div className="flex w-full flex-col gap-[8px] border-b border-[#eef2f8] py-[16px] last:border-b-0">
      <div className="flex w-full items-center justify-between gap-[16px]">
        <div className="flex min-w-0 flex-col gap-[2px]">
          <p className="text-[14px] font-medium leading-[20px] text-[#16181d]">{title}</p>
          <p className="text-[13px] leading-[18px] text-[#8a94a8]">{detail}</p>
        </div>
        <p className="shrink-0 truncate text-right" style={sampleStyle}>
          {sampleText}
        </p>
      </div>
      <TokenTag fit>{token}</TokenTag>
    </div>
  )
}

/* ─── Font Family ─── */

const FONT_FAMILY = [
  {
    title: 'Font Family Primary',
    detail: 'Titles, headings y bodys',
    token: 'typography_system/foundations/font_family/primary',
    sampleText: 'Funnel Sans',
    sampleStyle: { fontFamily: FONT_PRIMARY, fontSize: 24, color: '#16181d' } as CSSProperties,
  },
  {
    title: 'Font Family Details / Contrast',
    detail: 'Subheadings de secciones · Buttons · Links',
    token: 'typography_system/foundations/font_family/details_contrast',
    sampleText: 'Geist Mono',
    sampleStyle: { fontFamily: FONT_DETAILS, fontSize: 24, color: '#16181d' } as CSSProperties,
  },
]

/* ─── Font Weight ─── */

const FONT_WEIGHT = [
  {
    title: 'Font Weight Regular',
    detail: '400',
    token: 'typography_system/foundations/font_weight/regular',
    sampleText: 'Regular',
    sampleStyle: { fontFamily: FONT_PRIMARY, fontWeight: 400, fontSize: 24, color: '#16181d' } as CSSProperties,
  },
  {
    title: 'Font Weight Medium',
    detail: '500',
    token: 'typography_system/foundations/font_weight/medium',
    sampleText: 'Medium',
    sampleStyle: { fontFamily: FONT_PRIMARY, fontWeight: 500, fontSize: 24, color: '#16181d' } as CSSProperties,
  },
]

/* ─── Letter Spacing ─── */

const LETTER_SPACING = [
  {
    title: 'Letter Spacing Narrow',
    detail: '-3%',
    token: 'typography_system/foundations/letter_spacing/narrow',
    sampleText: 'Narrow',
    sampleStyle: { fontFamily: FONT_PRIMARY, fontSize: 24, letterSpacing: '-0.72px', color: '#16181d' } as CSSProperties,
  },
  {
    title: 'Letter Spacing Narrower',
    detail: '-4%',
    token: 'typography_system/foundations/letter_spacing/narrower',
    sampleText: 'Narrower',
    sampleStyle: { fontFamily: FONT_PRIMARY, fontSize: 24, letterSpacing: '-0.96px', color: '#16181d' } as CSSProperties,
  },
  {
    title: 'Letter Spacing Narrowest',
    detail: '-5%',
    token: 'typography_system/foundations/letter_spacing/narrowest',
    sampleText: 'Narrowest',
    sampleStyle: { fontFamily: FONT_PRIMARY, fontSize: 24, letterSpacing: '-1.2px', color: '#16181d' } as CSSProperties,
  },
]

/* ─── Font Size (escala completa) ─── */

interface FontSizeToken {
  index: number
  px: number
  lineHeight: string
}

const FONT_SIZE: FontSizeToken[] = [
  { index: 1, px: 10, lineHeight: '12px' },
  { index: 2, px: 12, lineHeight: '16px' },
  { index: 3, px: 14, lineHeight: '20px' },
  { index: 4, px: 16, lineHeight: '22px' },
  { index: 5, px: 18, lineHeight: '24px' },
  { index: 6, px: 20, lineHeight: '26px' },
  { index: 7, px: 24, lineHeight: '32px' },
  { index: 8, px: 28, lineHeight: '36px' },
  { index: 9, px: 32, lineHeight: '40px' },
  { index: 10, px: 36, lineHeight: '44px' },
  { index: 11, px: 40, lineHeight: '48px' },
  { index: 12, px: 48, lineHeight: '56px' },
  { index: 13, px: 56, lineHeight: '64px' },
  { index: 14, px: 64, lineHeight: '72px' },
  { index: 15, px: 72, lineHeight: '82px' },
  { index: 16, px: 80, lineHeight: 'normal' },
  { index: 17, px: 88, lineHeight: 'normal' },
  { index: 18, px: 96, lineHeight: 'normal' },
  { index: 19, px: 104, lineHeight: 'normal' },
  { index: 20, px: 112, lineHeight: 'normal' },
  { index: 21, px: 120, lineHeight: 'normal' },
  { index: 22, px: 128, lineHeight: 'normal' },
  { index: 23, px: 136, lineHeight: 'normal' },
  { index: 24, px: 144, lineHeight: 'normal' },
]

export function TypographyFoundationsPage() {
  return (
    <div id="typography.foundations" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Type System"
        moduleIconSrc={typeBadgeIcon}
        title="01 Typography Foundations"
        paragraphs={[
          'Primitivos tipográficos de Myntex: familias, pesos, tracking y la escala completa de tamaños.',
          'Funnel Sans resuelve títulos, encabezados y cuerpo de texto. Geist Mono se reserva para subtítulos de sección, botones y links.',
        ]}
      />

      <div className="flex w-full flex-col gap-[48px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeading title="Font Family" />
          {FONT_FAMILY.map((f) => (
            <TokenRow key={f.token} {...f} />
          ))}
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeading title="Font Weight" />
          {FONT_WEIGHT.map((f) => (
            <TokenRow key={f.token} {...f} />
          ))}
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeading title="Letter Spacing" />
          {LETTER_SPACING.map((f) => (
            <TokenRow key={f.token} {...f} />
          ))}
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeading title="Font Size" />
          {FONT_SIZE.map((f) => (
            <TokenRow
              key={f.index}
              title={`Font Size ${f.index}`}
              detail={`${f.px}px`}
              token={`typography_system/foundations/font_size/${String(f.index).padStart(2, '0')}`}
              sampleText="Aa"
              sampleStyle={{ fontFamily: FONT_PRIMARY, fontSize: f.px, lineHeight: f.lineHeight, color: '#16181d' }}
            />
          ))}
        </section>
      </div>

      <MetaFooter label="v1.0 · Typography Foundations · Typography System · Myntex" status="Cliente" />
    </div>
  )
}
