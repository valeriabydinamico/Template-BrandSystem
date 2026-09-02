import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { GovernanceFooter } from './GovernanceFooter'
import { MetaFooter } from './MetaFooter'
import { TokenTag } from './TokenTag'
import { DocNote, SectionHeader } from './docs/shared'
import visualStylesBadgeIcon from '@/assets/visual-styles-badge-icon.svg'

/* ────────────────────────────────────────────────────────────────────────────
 * 01 Visual Styles — Figma nodo 214:2446.
 *
 * Escalas y propiedades visuales reutilizables: spacing (escala base),
 * border radius, borders, shadows y sizing. Los valores del template se
 * adaptan por proyecto sin cambiar la intención de los tokens.
 *
 * Reutiliza PageHeader / GovernanceFooter / MetaFooter / TokenTag.
 * Responsive: breakpoint 1600 (Brand/Semantic Colors).
 * ────────────────────────────────────────────────────────────────────────── */

const SAMPLE = '#3c5c87'

/** Card de token: preview + valor + chip + uso. Base de spacing / radius / borders. */
function TokenCard({
  preview,
  value,
  token,
  usage,
}: {
  preview: ReactNode
  value: string
  token: string
  usage: string
}) {
  return (
    <div className="flex w-full min-w-0 flex-col gap-[14px] overflow-clip rounded-[16px] border border-[#b9c3ce] bg-white p-[20px]">
      <div className="flex h-[72px] w-full items-center overflow-clip rounded-[10px] bg-[#f7f9fb] px-[16px]">
        {preview}
      </div>
      <p className="font-bold text-[18px] leading-[22px] text-[#292e38]">{value}</p>
      <TokenTag fit>{token}</TokenTag>
      <p className="font-normal text-[13px] leading-[20px] text-[#576175]">{usage}</p>
    </div>
  )
}

/* grilla estándar de token cards: 1 → 2 → 3 → 4 columnas */
const TOKEN_GRID =
  'grid w-full grid-cols-1 gap-[16px] min-[560px]:grid-cols-2 min-[1024px]:grid-cols-3 min-[1600px]:grid-cols-4'

/* ─── 01 · Spacing ─── */

interface ScaleToken {
  value: number
  token: string
  usage: string
}

const SPACING: ScaleToken[] = [
  { value: 2, token: 'space/2', usage: 'micro gaps · icon/text' },
  { value: 4, token: 'space/4', usage: 'micro gaps · icon/text' },
  { value: 6, token: 'space/6', usage: 'micro gaps · icon/text' },
  { value: 8, token: 'space/8', usage: 'micro gaps · icon/text' },
  { value: 12, token: 'space/12', usage: 'controles compactos · metadata' },
  { value: 16, token: 'space/16', usage: 'controles compactos · metadata' },
  { value: 24, token: 'space/24', usage: 'cards · módulos · padding' },
  { value: 32, token: 'space/32', usage: 'cards · módulos · padding' },
  { value: 40, token: 'space/40', usage: 'bloques de contenido · secciones' },
  { value: 48, token: 'space/48', usage: 'bloques de contenido · secciones' },
  { value: 56, token: 'space/56', usage: 'bloques de contenido · secciones' },
  { value: 64, token: 'space/64', usage: 'bloques de contenido · secciones' },
  { value: 80, token: 'space/80', usage: 'hero · layouts amplios' },
  { value: 96, token: 'space/96', usage: 'hero · layouts amplios' },
  { value: 104, token: 'space/104', usage: 'hero · layouts amplios' },
]

function SpacingPreview({ value }: { value: number }) {
  return (
    <div className="flex w-full items-center">
      <span className="h-[32px] w-[80px] shrink-0 rounded-[6px]" style={{ backgroundColor: SAMPLE }} />
      <span className="h-[32px] shrink-0" style={{ width: value }} />
      <span
        className="h-[32px] min-w-[32px] flex-1 rounded-[6px]"
        style={{ backgroundColor: SAMPLE }}
      />
    </div>
  )
}

/* ─── 02 · Border Radius ─── */

interface RadiusToken {
  value: number
  label: string
  token: string
  usage: string
}

const RADIUS: RadiusToken[] = [
  { value: 4, label: '4px', token: 'radius/4', usage: 'inputs · controles compactos' },
  { value: 8, label: '8px', token: 'radius/8', usage: 'inputs · controles compactos' },
  { value: 12, label: '12px', token: 'radius/12', usage: 'inputs · controles compactos' },
  { value: 16, label: '16px', token: 'radius/16', usage: 'cards · componentes' },
  { value: 20, label: '20px', token: 'radius/20', usage: 'cards · componentes' },
  { value: 24, label: '24px', token: 'radius/24', usage: 'cards · componentes' },
  { value: 32, label: '32px', token: 'radius/32', usage: 'contenedores · módulos' },
  { value: 48, label: '48px', token: 'radius/48', usage: 'contenedores · módulos' },
  { value: 72, label: '72px', token: 'radius/72', usage: 'shapes expresivos · hero' },
  { value: 96, label: '96px', token: 'radius/96', usage: 'shapes expresivos · hero' },
  { value: 9999, label: 'Full · 9999 px', token: 'radius/full', usage: 'pills · avatars · círculos' },
]

function RadiusPreview({ value }: { value: number }) {
  return (
    <div className="flex w-full items-center justify-center">
      <span
        className="h-[56px] w-[120px]"
        style={{ backgroundColor: SAMPLE, borderRadius: Math.min(value, 28) }}
      />
    </div>
  )
}

/* ─── 03 · Borders ─── */

interface BorderToken {
  value: number
  label: string
  token: string
  usage: string
}

const BORDERS: BorderToken[] = [
  { value: 0.6, label: '0.6px', token: 'border/0-6', usage: 'hairline óptico · tablas' },
  { value: 1, label: '1px', token: 'border/1', usage: 'divisores · cards sutiles' },
  { value: 2, label: '2px', token: 'border/2', usage: 'inputs · cards · UI' },
  { value: 3, label: '3px', token: 'border/3', usage: 'destacados · overlays' },
  { value: 4, label: '4px', token: 'border/4', usage: 'énfasis fuerte · recursos gráficos' },
  { value: 5, label: '5px', token: 'border/5', usage: 'énfasis fuerte · recursos gráficos' },
]

function BorderPreview({ value }: { value: number }) {
  return (
    <div className="flex w-full items-center">
      <span
        className="w-full max-w-[300px]"
        style={{ borderTopColor: SAMPLE, borderTopStyle: 'solid', borderTopWidth: value }}
      />
    </div>
  )
}

/* ─── 04 · Shadows ─── */

interface ShadowToken {
  name: string
  token: string
  spec: string
  shadow: string
  usage: string
}

const SHADOWS: ShadowToken[] = [
  {
    name: 'Low',
    token: 'shadow/low',
    spec: '0 / 6px / 16px / 0 · neutral blue-grey',
    shadow: '0px 6px 16px 0px rgba(62,73,88,0.12)',
    usage: 'chips · cards pequeñas',
  },
  {
    name: 'Medium',
    token: 'shadow/medium',
    spec: '0 / 12px / 28px / 0 · neutral blue-grey',
    shadow: '0px 12px 28px 0px rgba(62,73,88,0.16)',
    usage: 'cards · overlays · dropdowns',
  },
  {
    name: 'High',
    token: 'shadow/high',
    spec: '0 / 20px / 48px / 0 · neutral blue-grey',
    shadow: '0px 20px 48px 0px rgba(62,73,88,0.2)',
    usage: 'panels · modales · hero flotante',
  },
]

function ShadowCard({ data }: { data: ShadowToken }) {
  return (
    <div className="flex w-full min-w-0 flex-col gap-[12px] overflow-clip rounded-[16px] border border-[#b9c3ce] bg-white p-[20px]">
      <div className="flex h-[132px] w-full items-center justify-center rounded-[10px] bg-[#f7f9fb]">
        <span
          className="h-[80px] w-[180px] rounded-[14px] bg-white"
          style={{ boxShadow: data.shadow }}
        />
      </div>
      <p className="font-bold text-[20px] leading-[26px] text-[#292e38]">{data.name}</p>
      <TokenTag fit>{data.token}</TokenTag>
      <p className="font-mono text-[12px] leading-[16px] text-[#576175]">{data.spec}</p>
      <p className="font-normal text-[13px] leading-[20px] text-[#576175]">{data.usage}</p>
    </div>
  )
}

/* ─── 05 · Sizing ─── */

const COMPONENT_HEIGHTS = [
  { token: 'size/button/display', value: '72px', usage: 'Button Display · Input Display cuando corresponda' },
  { token: 'size/button/standard', value: '56px', usage: 'Button Standard · Input Standard cuando corresponda' },
  { token: 'size/button/compact', value: '48px', usage: 'Button Compact · Input Compact cuando corresponda' },
  { token: 'size/button/small', value: '36px', usage: 'Button Small · Input Small cuando corresponda' },
]

const ICON_SIZES = [16, 18, 20, 24, 32, 40, 48, 56, 72]

function SizingCardShell({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <div className="flex w-full flex-col gap-[16px] rounded-[16px] border border-[#b9c3ce] bg-white p-[20px]">
      <div className="flex flex-col gap-[6px]">
        <h3 className="font-bold text-[20px] leading-[26px] text-[#292e38]">{title}</h3>
        <p className="font-normal text-[14px] leading-[22px] text-[#576175]">{description}</p>
      </div>
      {children}
    </div>
  )
}

/* ─── Página ─── */

const GOVERNANCE_RULES = [
  'Spacing es la escala base compartida por separación, padding y gap; no crear sistemas paralelos para la misma intención.',
  'Priorizar siempre los valores documentados. Cualquier valor excepcional debe responder a una necesidad real y quedar documentado.',
  'Radius se aplica según escala y contexto. Full (9999) se reserva para pills, círculos o componentes que deban cerrar completamente sus esquinas.',
  'Los borders funcionales usan la escala 0.6–5 px. Grosores fuera de rango requieren una razón visual o técnica explícita.',
  'Las sombras del master deben ser neutrales, en gris azulado; evitar colores de marca o residuos específicos de un cliente.',
  'Buttons e inputs equivalentes deben compartir altura cuando aplique; no introducir alturas aisladas dentro de un mismo nivel de componente.',
  'Sizing complementa spacing, radius y reglas de componente; no sustituye esas escalas ni debe usarse como atajo para resolver layout.',
]

export function VisualStylesPage() {
  return (
    <div className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Visual Styles"
        moduleIconSrc={visualStylesBadgeIcon}
        title="01 Visual Styles"
        paragraphs={[
          'Escalas y propiedades visuales reutilizables para construir interfaces y piezas de marca con consistencia.',
          'Spacing funciona como escala base para separación, padding y gap; radius, borders, shadows y sizing cubren decisiones complementarias.',
          null,
          'Los valores del template pueden adaptarse por proyecto sin alterar la lógica ni la intención de los tokens.',
        ]}
      />

      <div className="flex w-full flex-col gap-[44px] px-[40px] py-[72px]">
        {/* 01 · Spacing */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader
            title="01. Spacing"
            description="Escala base compartida por separación, padding y gap. Padding & Gap no se documentan como sistemas independientes: ambos consumen estos mismos valores."
          />
          <div className={TOKEN_GRID}>
            {SPACING.map((s) => (
              <TokenCard
                key={s.token}
                preview={<SpacingPreview value={s.value} />}
                value={`${s.value}px`}
                token={s.token}
                usage={s.usage}
              />
            ))}
          </div>
          <DocNote title="Padding & Gap">
            Usar los mismos tokens de spacing para padding interno y separación entre elementos. Esto
            evita escalas duplicadas y mantiene una única fuente de verdad.
          </DocNote>
        </section>

        {/* 02 · Border Radius */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader
            title="02. Border Radius"
            description="Escala única de redondeo para shapes, cards y componentes. La elección depende del contexto visual, no de una familia de tokens paralela."
          />
          <div className={TOKEN_GRID}>
            {RADIUS.map((r) => (
              <TokenCard
                key={r.token}
                preview={<RadiusPreview value={r.value} />}
                value={r.label}
                token={r.token}
                usage={r.usage}
              />
            ))}
          </div>
        </section>

        {/* 03 · Borders */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader
            title="03. Borders"
            description="Grosores oficiales para divisores, contornos funcionales y énfasis. La escala incluye hairlines ópticos y niveles fuertes sin depender de un proyecto específico."
          />
          <div className={TOKEN_GRID}>
            {BORDERS.map((b) => (
              <TokenCard
                key={b.token}
                preview={<BorderPreview value={b.value} />}
                value={b.label}
                token={b.token}
                usage={b.usage}
              />
            ))}
          </div>
        </section>

        {/* 04 · Shadows */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader
            title="04. Shadows"
            description="Sombras neutrales del master en gris azulado. Tres niveles cubren profundidad sutil, elevación intermedia y paneles destacados sin introducir colores propios de una marca."
          />
          <div className="grid w-full grid-cols-1 gap-[16px] min-[900px]:grid-cols-2 min-[1600px]:grid-cols-3">
            {SHADOWS.map((s) => (
              <ShadowCard key={s.token} data={s} />
            ))}
          </div>
        </section>

        {/* 05 · Sizing */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader
            title="05. Sizing"
            description="Dimensiones fijas para componentes e íconos que no pertenecen a la escala base de spacing. Sizing complementa el sistema; no sustituye spacing, padding, gap o radius."
          />

          <SizingCardShell
            title="A. Alturas de componentes"
            description="Buttons definen la referencia. Inputs equivalentes deberían compartir estas alturas cuando aplique para conservar ritmo y alineación."
          >
            <div className="flex flex-col gap-[10px]">
              {COMPONENT_HEIGHTS.map((h) => (
                <div
                  key={h.token}
                  className="flex w-full items-center gap-[20px] rounded-[10px] border border-[#e3e7ee] bg-white p-[16px] max-[720px]:flex-col max-[720px]:items-start max-[720px]:gap-[10px]"
                >
                  <div className="flex shrink-0 items-center gap-[16px] max-[720px]:w-full">
                    <span
                      className="w-[6px] shrink-0 rounded-full"
                      style={{ backgroundColor: SAMPLE, height: h.value }}
                    />
                    <TokenTag fit>{h.token}</TokenTag>
                  </div>
                  <p className="w-[80px] shrink-0 font-bold text-[16px] leading-[22px] text-[#292e38]">
                    {h.value}
                  </p>
                  <p className="min-w-0 flex-1 font-normal text-[14px] leading-[22px] text-[#576175]">
                    {h.usage}
                  </p>
                </div>
              ))}
            </div>
          </SizingCardShell>

          <SizingCardShell
            title="B. Tamaños de íconos"
            description="Escala funcional para íconos de interfaz, metadata, CTAs y componentes de comunicación. Incluye los niveles 18, 48, 56 y 72 del master."
          >
            <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-[16px]">
              {ICON_SIZES.map((size) => (
                <div
                  key={size}
                  className="flex flex-col items-center gap-[12px] rounded-[12px] border border-[#e3e7ee] bg-white p-[16px]"
                >
                  <div className="flex h-[80px] w-full items-center justify-center rounded-[10px] bg-[#f7f9fb]">
                    <span
                      className="rounded-[4px]"
                      style={{ backgroundColor: SAMPLE, width: size, height: size }}
                    />
                  </div>
                  <p className="font-bold text-[16px] leading-[22px] text-[#292e38]">{size}px</p>
                  <TokenTag fit>{`icon/${size}`}</TokenTag>
                </div>
              ))}
            </div>
          </SizingCardShell>
        </section>
      </div>

      <GovernanceFooter title="Gobernanza de Visual Styles" rules={GOVERNANCE_RULES} />
      <MetaFooter label="v1 · Visual Styles · Brand System Template · Master" />
    </div>
  )
}
