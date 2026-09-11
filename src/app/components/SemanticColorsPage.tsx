import { Note } from './Note'
import { PageHeader } from './PageHeader'
import { GovernanceFooter } from './GovernanceFooter'
import { MetaFooter } from './MetaFooter'
import { SemanticColorCard } from './SemanticColorCard'
import type { TokenRow } from '../data/semanticColors'
import { semanticColorsReports } from '../lib/siteCompleteness'

/* ────────────────────────────────────────────────────────────────────────────
 * 03 Semantic Colors — documentación de tokens semánticos.
 *
 * Los datos viven en `src/app/data/semanticColors.ts`; los reportes de
 * completitud (qué grupo tiene datos completos) en
 * `src/app/lib/siteCompleteness.ts`. Un grupo sin ninguna fila completa NO se
 * renderiza, y una sección sin ningún grupo visible tampoco — ver "Regla de
 * completitud de datos" en CLAUDE.md.
 *
 * Responsive (viewport, incluye sidebar) — mismo punto de quiebre que Brand
 * Colors: 1600px. Todo es full-width; lo único que cambia es cuántas cards por
 * fila en cada grid:
 *   - grids `maxCols={4}` (fondos, estados, texto)  → auto abajo de 1600, 4 en ≥1600
 *   - grids `maxCols={3}` (borders, iconos, focus, acciones, soporte)  → auto, 3 en ≥1600
 *   - reading-guide y principios → 2 por fila abajo de 1600, 4 / 3 en ≥1600
 * ────────────────────────────────────────────────────────────────────────── */

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
          role={r.role!}
          color={r.color!}
          token={r.token!}
          reference={r.reference!}
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

function SectionActionSupport() {
  const { ctaPrimary, ctaSecondary, supportSurfaces } = semanticColorsReports
  const hasCta = ctaPrimary.visible.length > 0 || ctaSecondary.visible.length > 0
  const hasSupport = supportSurfaces.visible.length > 0
  if (!hasCta && !hasSupport) return null

  return (
    <Section
      title="Superficies de acción y soporte"
      description="Superficies semánticas para acciones principales, secundarias y estados de apoyo. Cada rol debe expresar una intención funcional, no un color específico."
    >
      {hasCta && (
        <Group
          title="Superficies para CTA & Buttons"
          description="Roles de superficie para botones y elementos accionables. Incluyen estados básicos de interacción y deben mantener contraste suficiente con su contenido."
        >
          {ctaPrimary.visible.length > 0 && <CardGrid rows={ctaPrimary.visible} maxCols={3} />}
          {ctaSecondary.visible.length > 0 && <CardGrid rows={ctaSecondary.visible} maxCols={3} />}
          <Note>
            El rol de acción principal debe apuntar al color de marca configurado para cada proyecto.
            Su valor puede cambiar sin alterar el nombre ni la intención del token semántico.
          </Note>
          <Note>
            En esta propuesta, el estado pressed aumenta la profundidad del color para reforzar
            feedback táctil y diferenciarlo del estado default.
          </Note>
        </Group>
      )}
      {hasSupport && (
        <Group
          title="Superficies de soporte"
          description="Superficies suaves para énfasis, selección o estados activos. No deben reutilizarse como tokens de texto; cada categoría mantiene su propio rol semántico."
        >
          <CardGrid rows={supportSurfaces.visible} maxCols={3} />
        </Group>
      )}
    </Section>
  )
}

/* ─── Sección 02 · Estructura UI ─── */

function SectionUiStructure() {
  const { borderNeutral, borderState, icons, focus } = semanticColorsReports
  const hasBorders = borderNeutral.visible.length > 0 || borderState.visible.length > 0
  const hasIcons = icons.visible.length > 0
  const hasFocus = focus.visible.length > 0
  if (!hasBorders && !hasIcons && !hasFocus) return null

  return (
    <Section
      title="Estructura UI"
      description="Roles para bordes, iconografía, divisores, focus rings y otros elementos estructurales de interfaz. En bordes de estado, el ratio documentado compara el borde contra la superficie adyacente y debe alcanzar al menos 3:1 cuando comunica información visual relevante."
    >
      {hasBorders && (
        <Group title="Bordes y contornos">
          {borderNeutral.visible.length > 0 && <CardGrid rows={borderNeutral.visible} maxCols={3} />}
          {borderState.visible.length > 0 && <CardGrid rows={borderState.visible} maxCols={4} />}
        </Group>
      )}
      {hasIcons && (
        <Group title="Iconos">
          <CardGrid rows={icons.visible} maxCols={3} />
        </Group>
      )}
      {hasFocus && (
        <Group
          title="Focus"
          description="Color reservado para estados de foco en componentes interactivos digitales. Aplica principalmente a navegación por teclado, accesibilidad y elementos accionables en entornos UI. No se usa en piezas gráficas estáticas."
        >
          <CardGrid rows={focus.visible} maxCols={3} />
        </Group>
      )}
    </Section>
  )
}

/* ─── Sección 03 · Colores de fondo ─── */

function SectionBackgrounds() {
  const { bgBase, bgBrandPrimary, bgBrandSecondary, bgAccent01, bgAccent02, bgAccent03, bgState } =
    semanticColorsReports
  const groups = [
    { key: 'base', title: 'Fondos base', report: bgBase },
    { key: 'brand-primary', title: 'Fondos primarios de marca', report: bgBrandPrimary },
    { key: 'brand-secondary', title: 'Fondos secundarios de marca', report: bgBrandSecondary },
    { key: 'accent-01', title: 'Fondos de acento — Accent 01', report: bgAccent01 },
    { key: 'accent-02', title: 'Fondos de acento — Accent 02', report: bgAccent02 },
    { key: 'accent-03', title: 'Fondos de acento — Accent 03', report: bgAccent03 },
    { key: 'state', title: 'Fondos de estados', report: bgState },
  ].filter((g) => g.report.visible.length > 0)

  if (groups.length === 0) return null

  return (
    <Section
      title="Colores de fondo"
      description="Roles para fondos base, superficies de marca, acentos y estados funcionales."
    >
      {groups.map((g) => (
        <Group key={g.key} title={g.title}>
          <CardGrid rows={g.report.visible} />
        </Group>
      ))}
      <ExamplesPlaceholder title="Ejemplos de colores de fondo" />
    </Section>
  )
}

/* ─── Sección 04 · Colores de texto ─── */

function SectionTextColors() {
  const { textBrand, textNeutral, textAccent, textSemantic } = semanticColorsReports
  const groups = [
    { key: 'brand', title: 'Texto de marca', report: textBrand },
    { key: 'neutral', title: 'Texto neutral', report: textNeutral },
    { key: 'accent', title: 'Texto de acento', report: textAccent },
    { key: 'semantic', title: 'Texto semántico', report: textSemantic },
  ].filter((g) => g.report.visible.length > 0)

  if (groups.length === 0) return null

  return (
    <Section
      title="Colores de texto"
      description="Roles para lectura, jerarquía tipográfica, acciones de texto, presencia de marca y feedback funcional."
    >
      {groups.map((g) => (
        <Group key={g.key} title={g.title}>
          <CardGrid rows={g.report.visible} />
        </Group>
      ))}
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
  'Todos los tokens funcionales deben derivarse exclusivamente de las familias aprobadas en Foundations.',
  'No se permiten nuevos valores HEX fuera de las paletas oficiales.',
  'Los tokens claros de estados semánticos deben priorizarse para fondos, overlays, highlights y superficies de apoyo.',
  'Los tokens de texto deben mantener contraste WCAG AA como mínimo, y AAA en jerarquías críticas.',
  'Los ratios documentados corresponden a combinaciones aprobadas dentro del sistema y deben revalidarse al cambiar opacidad, overlay o fondos contextuales.',
  'Los fondos de acentos deben reservarse para bloques de apoyo, storytelling, campañas y diferenciación contextual. Nunca deben reemplazar fondos base ni superficies primarias de producto.',
]

/* ─── Página ─── */

export function SemanticColorsPage() {
  const r = semanticColorsReports
  const hasActionSupport =
    r.ctaPrimary.visible.length > 0 || r.ctaSecondary.visible.length > 0 || r.supportSurfaces.visible.length > 0
  const hasUiStructure =
    r.borderNeutral.visible.length > 0 ||
    r.borderState.visible.length > 0 ||
    r.icons.visible.length > 0 ||
    r.focus.visible.length > 0
  const hasBackgrounds = [r.bgBase, r.bgBrandPrimary, r.bgBrandSecondary, r.bgAccent01, r.bgAccent02, r.bgAccent03, r.bgState].some(
    (g) => g.visible.length > 0,
  )
  const hasTextColors = [r.textBrand, r.textNeutral, r.textAccent, r.textSemantic].some((g) => g.visible.length > 0)

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
        {hasActionSupport && (
          <>
            <Divider />
            <SectionActionSupport />
          </>
        )}
        {hasUiStructure && (
          <>
            <Divider />
            <SectionUiStructure />
          </>
        )}
        {hasBackgrounds && (
          <>
            <Divider />
            <SectionBackgrounds />
          </>
        )}
        {hasTextColors && (
          <>
            <Divider />
            <SectionTextColors />
          </>
        )}
        <Divider />
        <SectionPrinciples />
      </div>

      <GovernanceFooter title="Gobernanza del color semántico" rules={GOVERNANCE_RULES} />

      <MetaFooter label="v1 · 03 Semantic Colors · Master Template" />
    </div>
  )
}
