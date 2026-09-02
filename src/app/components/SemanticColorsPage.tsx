import { PageHeader } from './PageHeader'
import { SemanticColorCard } from './SemanticColorCard'
import type { SemanticColorVariant } from './SemanticColorCard'

/* ────────────────────────────────────────────────────────────────────────────
 * 03 Semantic Colors — documentación de tokens semánticos.
 *
 * Responsive (viewport, incluye sidebar) — mismo punto de quiebre que Brand
 * Colors: 1600px. Todo es full-width; lo único que cambia es cuántas cards por
 * fila en cada grid.
 *   - Grids "4-up"  (fondos, estados)  → auto abajo de 1600, 4 por fila en ≥1600
 *   - Grids "3-up"  (borders, iconos, acciones…) → auto, 3 por fila en ≥1600
 *   - reading-guide → 2 por fila abajo de 1600, 4 en ≥1600
 *
 * Construcción por partes: por ahora shell + reading guide + sección "Colores
 * de fondo". El resto de secciones se agregan después.
 * ────────────────────────────────────────────────────────────────────────── */

interface TokenRow {
  role: string
  color: string
  token: string
  reference: string
  variant?: SemanticColorVariant
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

/* ─── Estructura de secciones ─── */

function Divider() {
  return <div className="h-px w-full shrink-0 bg-[#eef2f8]" />
}

function Section({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section className="flex w-full flex-col gap-[40px]">
      <div className="flex flex-col gap-[12px]">
        <h2 className="font-bold text-[40px] leading-[44px] tracking-[-0.4px] text-[#16181d]">
          {title}
        </h2>
        <p className="font-normal text-[16px] leading-[24px] text-[#576175]">{description}</p>
      </div>
      {children}
    </section>
  )
}

function Group({ title, rows }: { title: string; rows: TokenRow[] }) {
  return (
    <div className="flex w-full flex-col gap-[16px]">
      <h3 className="font-bold text-[24px] leading-[32px] tracking-[-0.24px] text-[#16181d]">
        {title}
      </h3>
      <CardGrid rows={rows} />
    </div>
  )
}

/**
 * Grid de SemanticColorCard.
 * - Abajo de 1600px: tantas columnas como entren (min 280 por card).
 * - Desde 1600px: exactamente 4 por fila.
 * Card suelta de una fila incompleta conserva el ancho de columna (grid).
 */
function CardGrid({ rows }: { rows: TokenRow[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[16px] min-[1600px]:grid-cols-4">
      {rows.map((r) => (
        <SemanticColorCard
          key={r.token}
          variant={r.variant ?? 'background'}
          role={r.role}
          color={r.color}
          token={r.token}
          reference={r.reference}
        />
      ))}
    </div>
  )
}

/* ─── Datos · Colores de fondo ─── */

const BG_BASE: TokenRow[] = [
  { role: 'Default', color: '#FFFFFF', token: 'color/background/default', reference: 'color/primitive/gray/50' },
  { role: 'Subtle', color: '#F1F2F4', token: 'color/background/subtle', reference: 'color/primitive/ink/50' },
  { role: 'Muted', color: '#E3E4EA', token: 'color/background/muted', reference: 'color/primitive/ink/100' },
  { role: 'Inverse', color: '#16181D', token: 'color/background/inverse', reference: 'color/primitive/ink/900' },
]

const BG_BRAND_PRIMARY: TokenRow[] = [
  { role: 'Primary', color: '#004C97', token: 'color/background/brand-primary', reference: 'color/primitive/blue/700' },
  { role: 'Primary Soft', color: '#8FC7FF', token: 'color/background/brand-primary-soft', reference: 'color/primitive/blue/300' },
  { role: 'Primary Light', color: '#E1F0FF', token: 'color/background/brand-primary-light', reference: 'color/primitive/blue/100' },
  { role: 'Primary Dark', color: '#003882', token: 'color/background/brand-primary-dark', reference: 'color/primitive/blue/800' },
]

const BG_BRAND_SECONDARY: TokenRow[] = [
  { role: 'Secondary', color: '#00A3E1', token: 'color/background/brand-secondary', reference: 'color/primitive/light-blue/600' },
  { role: 'Secondary Soft', color: '#65D6FF', token: 'color/background/brand-secondary-soft', reference: 'color/primitive/light-blue/300' },
  { role: 'Secondary Light', color: '#E5F9FF', token: 'color/background/brand-secondary-light', reference: 'color/primitive/light-blue/50' },
  { role: 'Secondary Dark', color: '#004A67', token: 'color/background/brand-secondary-dark', reference: 'color/primitive/light-blue/800' },
]

const BG_ACCENT_01: TokenRow[] = [
  { role: 'Accent 01', color: '#FF7900', token: 'color/background/accent-01', reference: 'color/primitive/orange/500' },
  { role: 'Accent 01 Soft', color: '#FFC99A', token: 'color/background/accent-01-soft', reference: 'color/primitive/orange/200' },
  { role: 'Accent 01 Light', color: '#FFF3E6', token: 'color/background/accent-01-light', reference: 'color/primitive/orange/50' },
  { role: 'Accent 01 Dark', color: '#663000', token: 'color/background/accent-01-dark', reference: 'color/primitive/orange/800' },
]

const BG_ACCENT_02: TokenRow[] = [
  { role: 'Accent 02', color: '#20A5B1', token: 'color/background/accent-02', reference: 'color/primitive/teal/600' },
  { role: 'Accent 02 Soft', color: '#7FDFE7', token: 'color/background/accent-02-soft', reference: 'color/primitive/teal/300' },
  { role: 'Accent 02 Light', color: '#E7F8F9', token: 'color/background/accent-02-light', reference: 'color/primitive/teal/50' },
  { role: 'Accent 02 Dark', color: '#105056', token: 'color/background/accent-02-dark', reference: 'color/primitive/teal/800' },
]

const BG_ACCENT_03: TokenRow[] = [
  { role: 'Accent 03', color: '#7DC030', token: 'color/background/accent-03', reference: 'color/primitive/apple/500' },
  { role: 'Accent 03 Soft', color: '#C7E8A1', token: 'color/background/accent-03-soft', reference: 'color/primitive/apple/200' },
  { role: 'Accent 03 Light', color: '#ECF7DF', token: 'color/background/accent-03-light', reference: 'color/primitive/apple/50' },
  { role: 'Accent 03 Dark', color: '#365214', token: 'color/background/accent-03-dark', reference: 'color/primitive/apple/800' },
]

const BG_STATE: TokenRow[] = [
  { role: 'Error', color: '#FEF2F2', token: 'color/background/error', reference: 'color/primitive/red/soft' },
  { role: 'Success', color: '#ECFDF3', token: 'color/background/success', reference: 'color/primitive/green/soft' },
  { role: 'Warning', color: '#FFFBEB', token: 'color/background/warning', reference: 'color/primitive/amber/soft' },
  { role: 'Info', color: '#EFF6FF', token: 'color/background/info', reference: 'color/primitive/blue/soft' },
]

function SectionBackgrounds() {
  return (
    <Section
      title="Colores de fondo"
      description="Roles para fondos base, superficies de marca, acentos y estados funcionales."
    >
      <Group title="Fondos base" rows={BG_BASE} />
      <Group title="Fondos primarios de marca" rows={BG_BRAND_PRIMARY} />
      <Group title="Fondos secundarios de marca" rows={BG_BRAND_SECONDARY} />
      <Group title="Fondos de acento — Accent 01" rows={BG_ACCENT_01} />
      <Group title="Fondos de acento — Accent 02" rows={BG_ACCENT_02} />
      <Group title="Fondos de acento — Accent 03" rows={BG_ACCENT_03} />
      <Group title="Fondos de estados" rows={BG_STATE} />
    </Section>
  )
}

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
        <SectionBackgrounds />
      </div>
    </div>
  )
}
