import { Note } from './Note'
import { PageHeader } from './PageHeader'
import { GovernanceFooter } from './GovernanceFooter'
import { SemanticColorCard } from './SemanticColorCard'
import type { SemanticColorVariant } from './SemanticColorCard'

/* ────────────────────────────────────────────────────────────────────────────
 * 03 Semantic Colors — documentación de tokens semánticos.
 *
 * Responsive (viewport, incluye sidebar) — mismo punto de quiebre que Brand
 * Colors: 1600px. Todo es full-width; lo único que cambia es cuántas cards por
 * fila en cada grid:
 *   - grids `maxCols={4}` (fondos, estados, texto)  → auto abajo de 1600, 4 en ≥1600
 *   - grids `maxCols={3}` (borders, iconos, focus, acciones, soporte)  → auto, 3 en ≥1600
 *   - reading-guide y principios → 2 por fila abajo de 1600, 4 / 3 en ≥1600
 *
 * Los datos de los tokens salen de Figma (file muVJlf3hw1JM155GJlUnTd, página
 * "03 Semantic Colors"). Los ratios de contraste los calcula SemanticColorCard.
 * ────────────────────────────────────────────────────────────────────────── */

interface TokenRow {
  role: string
  color: string
  token: string
  reference: string
  variant: SemanticColorVariant
}

/* ─── Bloques compartidos ─── */

function Divider() {
  return <div className="h-px w-full shrink-0 bg-[#eef2f8]" />
}

function Section({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="flex w-full flex-col gap-[40px]">
      <div className="flex flex-col gap-[12px]">
        <h2 className="font-bold text-[40px] leading-[44px] tracking-[-0.4px] text-[#16181d]">
          {title}
        </h2>
        {description && (
          <p className="font-normal text-[16px] leading-[24px] text-[#576175]">{description}</p>
        )}
      </div>
      {children}
    </section>
  )
}

function Group({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex w-full flex-col gap-[16px]">
      <div className="flex flex-col gap-[8px]">
        <h3 className="font-bold text-[24px] leading-[32px] tracking-[-0.24px] text-[#16181d]">
          {title}
        </h3>
        {description && (
          <p className="font-normal text-[16px] leading-[24px] text-[#576175]">{description}</p>
        )}
      </div>
      {children}
    </div>
  )
}

/**
 * Grid de SemanticColorCard.
 * - Abajo de 1600px: tantas columnas como entren (min 280 por card).
 * - Desde 1600px: `maxCols` por fila (4 por defecto, 3 para grids de cards anchas).
 * La card suelta de una fila incompleta conserva el ancho de columna (grid).
 */
function CardGrid({ rows, maxCols = 4 }: { rows: TokenRow[]; maxCols?: 3 | 4 }) {
  return (
    <div
      className={`grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[16px] ${
        maxCols === 3 ? 'min-[1600px]:grid-cols-3' : 'min-[1600px]:grid-cols-4'
      }`}
    >
      {rows.map((r) => (
        <SemanticColorCard
          key={r.token}
          variant={r.variant}
          role={r.role}
          color={r.color}
          token={r.token}
          reference={r.reference}
        />
      ))}
    </div>
  )
}

function ExamplesPlaceholder({ title }: { title: string }) {
  return (
    <Group title={title}>
      <div className="flex min-h-[200px] w-full flex-col items-center justify-center gap-[4px] rounded-[16px] border border-dashed border-[#c4c9d4] bg-[#f7f8fa] p-[24px] text-center">
        <p className="font-semibold text-[14px] text-[#576175]">Ejemplos</p>
        <p className="font-normal text-[13px] text-[#8a94a8]">
          Se agregan manualmente según cada marca.
        </p>
      </div>
    </Group>
  )
}

/* ─── Reading guide ─── */

const GUIDE = [
  {
    title: 'Role',
    example: 'Brand Primary',
    description: 'Nombre funcional que expresa la intención del color dentro de la interfaz.',
  },
  {
    title: 'Token',
    example: 'color/text/brand-primary',
    description: 'Identificador estable que describe el uso del color, no su valor HEX.',
  },
  {
    title: 'Color Reference',
    example: 'color/primitive/blue/700',
    description: 'Primitive que aporta el valor al token y puede cambiar por proyecto.',
  },
  {
    title: 'Development Name',
    example: '--color-text-brand-primary',
    description: 'Equivalencia del path de Figma en una nomenclatura compatible con código.',
  },
]

function ReadingGuide() {
  return (
    <div className="flex w-full flex-col gap-[16px] px-[40px] py-[48px]">
      <div className="flex flex-col gap-[8px]">
        <p className="font-bold text-[28px] text-[#2f3945]">Cómo leer las cards</p>
        <p className="font-normal text-[15px] leading-[22px] text-[#5f6b78]">
          La estructura separa intención, token, referencia y nombre de desarrollo para que la paleta
          pueda cambiar sin alterar la lógica del sistema.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-[16px] min-[900px]:grid-cols-2 min-[1600px]:grid-cols-4">
        {GUIDE.map((g) => (
          <div
            key={g.title}
            className="flex flex-col gap-[12px] rounded-[16px] border border-[#b9c3ce] bg-white p-[20px]"
          >
            <p className="font-bold text-[18px] text-[#2f3945]">{g.title}</p>
            <div className="flex max-w-full items-center self-start rounded-[8px] bg-[#f1f4f7] p-[10px]">
              <p className="truncate font-mono text-[12px] text-[#465463]">{g.example}</p>
            </div>
            <p className="font-normal text-[13px] leading-[18px] text-[#5f6b78]">{g.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Sección 01 · Superficies de acción y soporte ─── */

const CTA_PRIMARY: TokenRow[] = [
  { role: 'Primary Default', color: '#1677D8', token: 'color/surface/cta/primary/default', reference: 'color/primitive/blue/500', variant: 'background' },
  { role: 'Primary Pressed', color: '#004C97', token: 'color/surface/cta/primary/pressed', reference: 'color/primitive/blue/700', variant: 'background' },
  { role: 'Primary Disabled', color: '#E3E4EA', token: 'color/surface/cta/primary/disabled', reference: 'color/primitive/ink/100', variant: 'background' },
]

const CTA_SECONDARY: TokenRow[] = [
  { role: 'Secondary Default', color: '#FFFFFF', token: 'color/surface/cta/secondary/default', reference: 'color/primitive/gray/50', variant: 'background' },
  { role: 'Secondary Pressed', color: '#E1F0FF', token: 'color/surface/cta/secondary/pressed', reference: 'color/primitive/blue/100', variant: 'background' },
  { role: 'Secondary Disabled', color: '#E3E4EA', token: 'color/surface/cta/secondary/disabled', reference: 'color/primitive/ink/100', variant: 'background' },
]

const SUPPORT_SURFACES: TokenRow[] = [
  { role: 'Highlight', color: '#F2F8FF', token: 'color/surface/support/highlight', reference: 'color/primitive/blue/50', variant: 'background' },
  { role: 'Selected', color: '#CCF1FF', token: 'color/surface/support/selected', reference: 'color/primitive/light-blue/100', variant: 'background' },
  { role: 'Active', color: '#9AE3FF', token: 'color/surface/support/active', reference: 'color/primitive/light-blue/200', variant: 'background' },
]

function SectionActionSupport() {
  return (
    <Section
      title="Superficies de acción y soporte"
      description="Superficies semánticas para acciones principales, secundarias y estados de apoyo. Cada rol debe expresar una intención funcional, no un color específico."
    >
      <Group
        title="Superficies para CTA & Buttons"
        description="Roles de superficie para botones y elementos accionables. Incluyen estados básicos de interacción y deben mantener contraste suficiente con su contenido."
      >
        <CardGrid rows={CTA_PRIMARY} maxCols={3} />
        <CardGrid rows={CTA_SECONDARY} maxCols={3} />
        <Note>
          El rol de acción principal debe apuntar al color de marca configurado para cada proyecto.
          Su valor puede cambiar sin alterar el nombre ni la intención del token semántico.
        </Note>
        <Note>
          En esta propuesta, el estado pressed aumenta la profundidad del color para reforzar
          feedback táctil y diferenciarlo del estado default.
        </Note>
      </Group>
      <Group
        title="Superficies de soporte"
        description="Superficies suaves para énfasis, selección o estados activos. No deben reutilizarse como tokens de texto; cada categoría mantiene su propio rol semántico."
      >
        <CardGrid rows={SUPPORT_SURFACES} maxCols={3} />
      </Group>
    </Section>
  )
}

/* ─── Sección 02 · Estructura UI ─── */

const BORDER_NEUTRAL: TokenRow[] = [
  { role: 'Border Default', color: '#C4C9D4', token: 'color/ui/border/default', reference: 'color/primitive/ink/200', variant: 'border' },
  { role: 'Border Strong', color: '#8A94A8', token: 'color/ui/border/strong', reference: 'color/primitive/ink/400', variant: 'border' },
  { role: 'Border Brand', color: '#1677D8', token: 'color/ui/border/brand', reference: 'color/primitive/blue/500', variant: 'border' },
]

const BORDER_STATE: TokenRow[] = [
  { role: 'Error', color: '#DC2626', token: 'color/ui/border/error', reference: 'color/primitive/red/default', variant: 'background-border' },
  { role: 'Success', color: '#16A34A', token: 'color/ui/border/success', reference: 'color/primitive/green/default', variant: 'background-border' },
  { role: 'Warning', color: '#92400E', token: 'color/ui/border/warning', reference: 'color/primitive/amber/strong', variant: 'background-border' },
  { role: 'Info', color: '#1E40AF', token: 'color/ui/border/info', reference: 'color/primitive/blue/strong', variant: 'background-border' },
]

const ICONS: TokenRow[] = [
  { role: 'Icon Brand', color: '#1677D8', token: 'color/ui/icon/brand', reference: 'color/primitive/blue/500', variant: 'border' },
  { role: 'Icon Default', color: '#576175', token: 'color/ui/icon/default', reference: 'color/primitive/ink/600', variant: 'border' },
  { role: 'Icon Inverse', color: '#FFFFFF', token: 'color/ui/icon/inverse', reference: 'color/primitive/gray/50', variant: 'border' },
]

const FOCUS: TokenRow[] = [
  { role: 'Focus', color: '#8FC7FF', token: 'color/ui/focus/default', reference: 'color/primitive/blue/300', variant: 'border' },
]

function SectionUiStructure() {
  return (
    <Section
      title="Estructura UI"
      description="Roles para bordes, iconografía, divisores, focus rings y otros elementos estructurales de interfaz. En bordes de estado, el ratio documentado compara el borde contra la superficie adyacente y debe alcanzar al menos 3:1 cuando comunica información visual relevante."
    >
      <Group title="Bordes y contornos">
        <CardGrid rows={BORDER_NEUTRAL} maxCols={3} />
        <CardGrid rows={BORDER_STATE} maxCols={4} />
      </Group>
      <Group title="Iconos">
        <CardGrid rows={ICONS} maxCols={3} />
      </Group>
      <Group
        title="Focus"
        description="Color reservado para estados de foco en componentes interactivos digitales. Aplica principalmente a navegación por teclado, accesibilidad y elementos accionables en entornos UI. No se usa en piezas gráficas estáticas."
      >
        <CardGrid rows={FOCUS} maxCols={3} />
      </Group>
    </Section>
  )
}

/* ─── Sección 03 · Colores de fondo ─── */

const BG_BASE: TokenRow[] = [
  { role: 'Default', color: '#FFFFFF', token: 'color/background/default', reference: 'color/primitive/gray/50', variant: 'background' },
  { role: 'Subtle', color: '#F1F2F4', token: 'color/background/subtle', reference: 'color/primitive/ink/50', variant: 'background' },
  { role: 'Muted', color: '#E3E4EA', token: 'color/background/muted', reference: 'color/primitive/ink/100', variant: 'background' },
  { role: 'Inverse', color: '#16181D', token: 'color/background/inverse', reference: 'color/primitive/ink/900', variant: 'background' },
]

const BG_BRAND_PRIMARY: TokenRow[] = [
  { role: 'Primary', color: '#004C97', token: 'color/background/brand-primary', reference: 'color/primitive/blue/700', variant: 'background' },
  { role: 'Primary Soft', color: '#8FC7FF', token: 'color/background/brand-primary-soft', reference: 'color/primitive/blue/300', variant: 'background' },
  { role: 'Primary Light', color: '#E1F0FF', token: 'color/background/brand-primary-light', reference: 'color/primitive/blue/100', variant: 'background' },
  { role: 'Primary Dark', color: '#003882', token: 'color/background/brand-primary-dark', reference: 'color/primitive/blue/800', variant: 'background' },
]

const BG_BRAND_SECONDARY: TokenRow[] = [
  { role: 'Secondary', color: '#00A3E1', token: 'color/background/brand-secondary', reference: 'color/primitive/light-blue/600', variant: 'background' },
  { role: 'Secondary Soft', color: '#65D6FF', token: 'color/background/brand-secondary-soft', reference: 'color/primitive/light-blue/300', variant: 'background' },
  { role: 'Secondary Light', color: '#E5F9FF', token: 'color/background/brand-secondary-light', reference: 'color/primitive/light-blue/50', variant: 'background' },
  { role: 'Secondary Dark', color: '#004A67', token: 'color/background/brand-secondary-dark', reference: 'color/primitive/light-blue/800', variant: 'background' },
]

const BG_ACCENT_01: TokenRow[] = [
  { role: 'Accent 01', color: '#FF7900', token: 'color/background/accent-01', reference: 'color/primitive/orange/500', variant: 'background' },
  { role: 'Accent 01 Soft', color: '#FFC99A', token: 'color/background/accent-01-soft', reference: 'color/primitive/orange/200', variant: 'background' },
  { role: 'Accent 01 Light', color: '#FFF3E6', token: 'color/background/accent-01-light', reference: 'color/primitive/orange/50', variant: 'background' },
  { role: 'Accent 01 Dark', color: '#663000', token: 'color/background/accent-01-dark', reference: 'color/primitive/orange/800', variant: 'background' },
]

const BG_ACCENT_02: TokenRow[] = [
  { role: 'Accent 02', color: '#20A5B1', token: 'color/background/accent-02', reference: 'color/primitive/teal/600', variant: 'background' },
  { role: 'Accent 02 Soft', color: '#7FDFE7', token: 'color/background/accent-02-soft', reference: 'color/primitive/teal/300', variant: 'background' },
  { role: 'Accent 02 Light', color: '#E7F8F9', token: 'color/background/accent-02-light', reference: 'color/primitive/teal/50', variant: 'background' },
  { role: 'Accent 02 Dark', color: '#105056', token: 'color/background/accent-02-dark', reference: 'color/primitive/teal/800', variant: 'background' },
]

const BG_ACCENT_03: TokenRow[] = [
  { role: 'Accent 03', color: '#7DC030', token: 'color/background/accent-03', reference: 'color/primitive/apple/500', variant: 'background' },
  { role: 'Accent 03 Soft', color: '#C7E8A1', token: 'color/background/accent-03-soft', reference: 'color/primitive/apple/200', variant: 'background' },
  { role: 'Accent 03 Light', color: '#ECF7DF', token: 'color/background/accent-03-light', reference: 'color/primitive/apple/50', variant: 'background' },
  { role: 'Accent 03 Dark', color: '#365214', token: 'color/background/accent-03-dark', reference: 'color/primitive/apple/800', variant: 'background' },
]

const BG_STATE: TokenRow[] = [
  { role: 'Error', color: '#FEF2F2', token: 'color/background/error', reference: 'color/primitive/red/soft', variant: 'background' },
  { role: 'Success', color: '#ECFDF3', token: 'color/background/success', reference: 'color/primitive/green/soft', variant: 'background' },
  { role: 'Warning', color: '#FFFBEB', token: 'color/background/warning', reference: 'color/primitive/amber/soft', variant: 'background' },
  { role: 'Info', color: '#EFF6FF', token: 'color/background/info', reference: 'color/primitive/blue/soft', variant: 'background' },
]

function SectionBackgrounds() {
  return (
    <Section
      title="Colores de fondo"
      description="Roles para fondos base, superficies de marca, acentos y estados funcionales."
    >
      <Group title="Fondos base">
        <CardGrid rows={BG_BASE} />
      </Group>
      <Group title="Fondos primarios de marca">
        <CardGrid rows={BG_BRAND_PRIMARY} />
      </Group>
      <Group title="Fondos secundarios de marca">
        <CardGrid rows={BG_BRAND_SECONDARY} />
      </Group>
      <Group title="Fondos de acento — Accent 01">
        <CardGrid rows={BG_ACCENT_01} />
      </Group>
      <Group title="Fondos de acento — Accent 02">
        <CardGrid rows={BG_ACCENT_02} />
      </Group>
      <Group title="Fondos de acento — Accent 03">
        <CardGrid rows={BG_ACCENT_03} />
      </Group>
      <Group title="Fondos de estados">
        <CardGrid rows={BG_STATE} />
      </Group>
      <ExamplesPlaceholder title="Ejemplos de colores de fondo" />
    </Section>
  )
}

/* ─── Sección 04 · Colores de texto ─── */

const TEXT_BRAND: TokenRow[] = [
  { role: 'Brand Primary', color: '#004C97', token: 'color/text/brand-primary', reference: 'color/primitive/blue/700', variant: 'text' },
  { role: 'Brand Strong', color: '#003882', token: 'color/text/brand-strong', reference: 'color/primitive/blue/800', variant: 'text' },
  { role: 'Interactive', color: '#1677D8', token: 'color/text/brand-interactive', reference: 'color/primitive/blue/500', variant: 'text' },
  { role: 'Interactive On Dark', color: '#9AE3FF', token: 'color/text/brand-interactive-on-dark', reference: 'color/primitive/light-blue/200', variant: 'text' },
]

const TEXT_NEUTRAL: TokenRow[] = [
  { role: 'Primary', color: '#292E38', token: 'color/text/on-light/primary', reference: 'color/primitive/ink/800', variant: 'text' },
  { role: 'Secondary', color: '#576175', token: 'color/text/on-light/secondary', reference: 'color/primitive/ink/600', variant: 'text' },
  { role: 'Support', color: '#576175', token: 'color/text/on-light/support', reference: 'color/primitive/ink/600', variant: 'text' },
  { role: 'Primary On Dark', color: '#FFFFFF', token: 'color/text/on-dark/primary', reference: 'color/primitive/gray/50', variant: 'text' },
  { role: 'Secondary On Dark', color: '#FFFFFF', token: 'color/text/on-dark/secondary', reference: 'color/primitive/gray/50 + opacity/80', variant: 'text' },
  { role: 'Support On Dark', color: '#FFFFFF', token: 'color/text/on-dark/support', reference: 'color/primitive/gray/50 + opacity/70', variant: 'text' },
]

const TEXT_ACCENT: TokenRow[] = [
  { role: 'Accent 01', color: '#994A00', token: 'color/text/accent-01', reference: 'color/primitive/orange/700', variant: 'text' },
  { role: 'Accent 02', color: '#187882', token: 'color/text/accent-02', reference: 'color/primitive/teal/700', variant: 'text' },
  { role: 'Accent 03', color: '#517A20', token: 'color/text/accent-03', reference: 'color/primitive/apple/700', variant: 'text' },
]

const TEXT_SEMANTIC: TokenRow[] = [
  { role: 'Error', color: '#991B1B', token: 'color/text/semantic/error', reference: 'color/primitive/red/strong', variant: 'text' },
  { role: 'Success', color: '#166534', token: 'color/text/semantic/success', reference: 'color/primitive/green/strong', variant: 'text' },
  { role: 'Warning', color: '#92400E', token: 'color/text/semantic/warning', reference: 'color/primitive/amber/strong', variant: 'text' },
  { role: 'Info', color: '#1E40AF', token: 'color/text/semantic/info', reference: 'color/primitive/blue/strong', variant: 'text' },
]

function SectionTextColors() {
  return (
    <Section
      title="Colores de texto"
      description="Roles para lectura, jerarquía tipográfica, acciones de texto, presencia de marca y feedback funcional."
    >
      <Group title="Texto de marca">
        <CardGrid rows={TEXT_BRAND} />
      </Group>
      <Group title="Texto neutral">
        <CardGrid rows={TEXT_NEUTRAL} />
      </Group>
      <Group title="Texto de acento">
        <CardGrid rows={TEXT_ACCENT} />
      </Group>
      <Group title="Texto semántico">
        <CardGrid rows={TEXT_SEMANTIC} />
      </Group>
      <ExamplesPlaceholder title="Ejemplos de colores de texto" />
    </Section>
  )
}

/* ─── Sección 05 · Principios ─── */

const PRINCIPLES = [
  { title: 'Scalability', body: 'Considera estados futuros (hover, pressed, disabled) y contextos multicanal.' },
  { title: 'Clear Hierarchy', body: 'Organiza los colores por categorías (texto, fondo, bordes, estados, acentos).' },
  { title: 'Accessibility', body: 'Los colores cumplen criterios de contraste (mínimo AA, ideal AAA).' },
  { title: 'Cross-channel Consistency', body: 'El mismo token funciona en producto (UI) y en marketing.' },
  { title: 'Evolución de marca', body: 'El nombre describe la función (ej. text/primary), no el color.' },
  { title: 'Tokens semánticos', body: 'Los tokens semánticos definen el uso funcional del color en la marca y la interfaz.' },
]

function SectionPrinciples() {
  return (
    <Section title="Principios del color semántico">
      <div className="grid grid-cols-1 gap-[16px] min-[900px]:grid-cols-2 min-[1600px]:grid-cols-3">
        {PRINCIPLES.map((p) => (
          <div
            key={p.title}
            className="flex flex-col gap-[16px] rounded-[16px] border border-[#e0e7f0] bg-white px-[16px] py-[24px]"
          >
            <p className="font-bold text-[24px] leading-[32px] tracking-[-0.24px] text-[#16181d]">
              {p.title}
            </p>
            <p className="min-h-[48px] font-normal text-[16px] leading-[24px] text-[#576175]">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ─── Sección · Gobernanza ─── */

const GOVERNANCE_RULES = [
  'Los roles de Brand Colors deben construirse siempre a partir de primitives existentes; no se deben crear valores HEX aislados directamente en esta capa.',
  'Primary debe mantener la mayor jerarquía de marca. Secondary y Accent funcionan como apoyo y no deben competir sistemáticamente con el rol principal.',
  'Evitar el uso simultáneo de múltiples terciarios dentro de una misma pieza, salvo storytelling editorial o visualizaciones.',
  'Cada rol debe documentar su referencia de color y conservar una relación trazable con Global Colors. Si cambia la primitive referenciada, el rol debe actualizarse mediante una referencia y no mediante duplicación manual del valor.',
  'Los equivalentes RGB, CMYK y referencias Pantone funcionan como guía de implementación editorial, impresión y alineación cross-team con producto.',
  'Los tokens de texto no deben redefinirse por canal.',
]

/* ─── Página ─── */

export function SemanticColorsPage() {
  return (
    <div className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Color System"
        title="03 Semantic Colors"
        paragraphs={[
          'Roles funcionales que traducen Global Colors en decisiones consistentes de interfaz.',
          'No crean nuevas paletas: asignan intención a primitives existentes para superficies, texto, bordes, iconografía, estados y acciones.',
        ]}
      />

      <ReadingGuide />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[80px]">
        <Divider />
        <SectionActionSupport />
        <Divider />
        <SectionUiStructure />
        <Divider />
        <SectionBackgrounds />
        <Divider />
        <SectionTextColors />
        <Divider />
        <SectionPrinciples />
      </div>

      <GovernanceFooter title="Gobernanza del color de marca" rules={GOVERNANCE_RULES} />
    </div>
  )
}
