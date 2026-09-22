import { PageHeader } from './PageHeader'
import { GovernanceFooter } from './GovernanceFooter'
import { MetaFooter } from './MetaFooter'
import { SemanticColorCard, type SemanticColorVariant } from './SemanticColorCard'
import { ColorCard } from './ColorCard'

/* ────────────────────────────────────────────────────────────────────────────
 * 03 Semantic Colors.
 *
 * Reestructurada siguiendo el frame de referencia de Figma "Specific Light/
 * Dark Color" (nodo 16407:16841, dos variantes "Color Specific"): 7 grupos —
 * Content, Content State, Background, Background State, Border, Semantic y
 * Semantic State — en vez de la agrupación anterior (Superficies de acción y
 * soporte / Estructura UI / Fondos / Texto). Mismo criterio que Global
 * Colors: se toma la estructura y los nombres del frame, pero los valores
 * son los primitives reales del master (Ink/Gray/Blue/Light Blue/
 * funcionales), no los del ejemplo (que usaba Cyan/Lime/Red/Yellow/Green de
 * otra paleta).
 *
 * "Danger" en el ejemplo solo tenía Hover + Active (2 estados, no 3) porque
 * la escala funcional del master (Soft/Default/Strong) alcanza justo para
 * eso: Hover = Default, Active = Strong.
 *
 * "Combinaciones aprobadas" (nodo 16353:6727) es distinto a los dos frames
 * anteriores: su copy menciona a Myntex por nombre y trae valores concretos
 * (Cyan/60, Lime/60, Blue/90, Gray/20, Gray/10) con sus ratios de contraste
 * — es contenido real, no una estructura genérica para rellenar con el
 * master. Por eso esta sección SÍ usa esos HEX literales (no primitives del
 * master template), a diferencia del resto de la página. Introduce la
 * variante `combination` de `ColorCard` (fondo + color de texto real +
 * badge de contraste calculado o "Falla AA"/"Conflicto" manual).
 * ────────────────────────────────────────────────────────────────────────── */

interface Entry {
  role: string
  hex: string
  reference: string
  onDark?: boolean
}

function toToken(section: string, key: string) {
  return `color_system/semantic/${section}/${key}`
}

/* ─── Content ─── */

const CONTENT: Entry[] = [
  { role: 'Content 1', hex: '16181D', reference: 'color_system/global/neutral/ink/900' },
  { role: 'Content 2', hex: '576175', reference: 'color_system/global/neutral/ink/600' },
  { role: 'Content 3', hex: '8A94A8', reference: 'color_system/global/neutral/ink/400' },
  { role: 'Content Inverse', hex: 'FFFFFF', reference: 'color_system/global/basicos/white', onDark: true },
]

const CONTENT_STATE: Entry[] = [
  { role: 'Content State Hover', hex: '42495B', reference: 'color_system/global/neutral/ink/700' },
  { role: 'Content State Active', hex: '16181D', reference: 'color_system/global/neutral/ink/900' },
  { role: 'Content State Disabled', hex: 'A8AFBE', reference: 'color_system/global/neutral/ink/300' },
]

/* ─── Background ─── */

const BACKGROUND: Entry[] = [
  { role: 'Background 1', hex: 'FFFFFF', reference: 'color_system/global/basicos/white' },
  { role: 'Background 2', hex: 'F1F2F4', reference: 'color_system/global/neutral/ink/50' },
  { role: 'Background 3', hex: 'E3E4EA', reference: 'color_system/global/neutral/ink/100' },
  { role: 'Background Inverse', hex: '16181D', reference: 'color_system/global/neutral/ink/900', onDark: true },
]

const BACKGROUND_STATE: Entry[] = [
  { role: 'Background State Hover', hex: 'F2F8FF', reference: 'color_system/global/primary/50' },
  { role: 'Background State Active', hex: 'E1F0FF', reference: 'color_system/global/primary/100' },
  { role: 'Background State Disabled', hex: 'F1F2F4', reference: 'color_system/global/neutral/ink/50' },
]

/* ─── Border ─── */

const BORDER: Entry[] = [
  { role: 'Border 1', hex: '42495B', reference: 'color_system/global/neutral/ink/700' },
  { role: 'Border 2', hex: 'A8AFBE', reference: 'color_system/global/neutral/ink/300' },
  { role: 'Border 3', hex: 'E3E4EA', reference: 'color_system/global/neutral/ink/100' },
  { role: 'Border Inverse', hex: 'FFFFFF', reference: 'color_system/global/basicos/white', onDark: true },
]

/* ─── Semantic (roles funcionales) ─── */

const SEMANTIC: Entry[] = [
  { role: 'Semantic Highlight', hex: '1677D8', reference: 'color_system/global/primary/500' },
  { role: 'Semantic Secondary', hex: '15BFFF', reference: 'color_system/global/secondary/500' },
  { role: 'Semantic Danger', hex: 'DC2626', reference: 'color_system/global/functional/red/default' },
  { role: 'Semantic Warning', hex: 'D97706', reference: 'color_system/global/functional/amber/default' },
  { role: 'Semantic Success', hex: '16A34A', reference: 'color_system/global/functional/green/default' },
]

const SEMANTIC_STATE: Entry[] = [
  { role: 'Semantic State Highlight Hover', hex: '0B5FB8', reference: 'color_system/global/primary/600' },
  { role: 'Semantic State Highlight Active', hex: '004C97', reference: 'color_system/global/primary/700' },
  { role: 'Semantic State Danger Hover', hex: 'DC2626', reference: 'color_system/global/functional/red/default' },
  { role: 'Semantic State Danger Active', hex: '991B1B', reference: 'color_system/global/functional/red/strong' },
]

const GOVERNANCE_RULES = [
  'Los tokens semánticos no crean paletas nuevas: asignan intención a primitives ya definidos en Global Colors.',
  'Content, Background y Border siguen la misma escala 1/2/3/Inverse — 1 es la mayor jerarquía, 3 la más sutil.',
  'Los estados (Hover/Active/Disabled) solo se usan en elementos interactivos; nunca en texto o superficies estáticas.',
  'Los roles Semantic (Highlight/Secondary/Danger/Warning/Success) comunican estados o interacción, no decoración de marca.',
  'Danger solo documenta Hover y Active porque la escala funcional del master (Soft/Default/Strong) no tiene un cuarto paso disponible.',
  'Las combinaciones aprobadas (Combination/01-05) usan siempre uno de los cuatro colores de proporción de marca (Neutral/Highlight/Secondary Accent/Anchor); no combinar colores fuera de esa lista sin validar contraste primero.',
]

function Divider() {
  return <div className="h-px w-full shrink-0 bg-[#eef2f8]" />
}

/* ─── Combinaciones aprobadas ─── */

interface Proportion {
  role: string
  hex: string
  label: string
  pct: number
}

const PROPORTIONS: Proportion[] = [
  { role: 'Brand/Neutral', hex: 'F5F5F0', label: 'Gray/20', pct: 40 },
  { role: 'Brand/Highlight', hex: '1AC3E5', label: 'Cyan/60', pct: 30 },
  { role: 'Brand/Secondary Accent', hex: 'DEF20D', label: 'Lime/60', pct: 20 },
  { role: 'Brand/Anchor', hex: '043148', label: 'Blue/90', pct: 10 },
]

function RatioBar() {
  return (
    <div className="flex w-full flex-col gap-[16px]">
      <p className="text-[14px] font-medium text-[#16181d]">Ratio 40 / 30 / 20 / 10</p>
      <div className="flex h-[48px] w-full overflow-hidden rounded-[8px]">
        {PROPORTIONS.map((p) => (
          <div
            key={p.role}
            className="flex items-center justify-center"
            style={{ backgroundColor: `#${p.hex}`, width: `${p.pct}%` }}
          >
            <span className="text-[12px]" style={{ color: p.pct >= 30 ? '#FFFFFF' : '#16181D' }}>
              {p.pct}%
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-[24px]">
        {PROPORTIONS.map((p) => (
          <div key={p.role} className="flex items-center gap-[8px]">
            <span className="size-[12px] shrink-0 rounded-[2px]" style={{ backgroundColor: `#${p.hex}` }} />
            <span className="text-[12px] text-[#576175]">
              {p.role} · {p.label} · {p.pct}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

interface Combination {
  name: string
  bgHex: string
  bgLabel: string
  textHex: string
  textLabel: string
}

const APPROVED_COMBINATIONS: Combination[] = [
  { name: 'Combination/01', bgHex: '1AC3E5', bgLabel: 'Cyan/60', textHex: '043148', textLabel: 'Blue/90' },
  { name: 'Combination/02', bgHex: 'DEF20D', bgLabel: 'Lime/60', textHex: '043148', textLabel: 'Blue/90' },
  { name: 'Combination/03', bgHex: '043148', bgLabel: 'Blue/90', textHex: 'F9F9F6', textLabel: 'Gray/10' },
  { name: 'Combination/04', bgHex: 'F5F5F0', bgLabel: 'Gray/20', textHex: '043148', textLabel: 'Blue/90' },
  { name: 'Combination/05', bgHex: '043148', bgLabel: 'Blue/90', textHex: '1AC3E5', textLabel: 'Cyan/60' },
]

interface NotRecommended {
  name: string
  bgHex: string
  textHex: string
  sampleText: string
  description: string
  badgeTone: 'fail' | 'conflict'
  badgeText: string
}

const NOT_RECOMMENDED: NotRecommended[] = [
  {
    name: 'No recomendado',
    bgHex: '1AC3E5',
    textHex: 'FFFFFF',
    sampleText: 'Texto claro',
    description: 'Texto claro sobre Cyan/60 · contraste insuficiente',
    badgeTone: 'fail',
    badgeText: 'Falla AA',
  },
  {
    name: 'No recomendado',
    bgHex: 'DEF20D',
    textHex: 'FFFFFF',
    sampleText: 'Texto claro',
    description: 'Texto claro sobre Lime/60 · contraste insuficiente',
    badgeTone: 'fail',
    badgeText: 'Falla AA',
  },
  {
    name: 'No recomendado',
    bgHex: '1AC3E5',
    textHex: 'DEF20D',
    sampleText: 'Cyan / Lime',
    description: 'Cyan/60 con Lime/60 para texto · conflicto visual de marca',
    badgeTone: 'conflict',
    badgeText: 'Conflicto',
  },
]

function Group({
  title,
  sectionKey,
  variant,
  entries,
  maxCols = 4,
}: {
  title: string
  sectionKey: string
  variant: SemanticColorVariant
  entries: Entry[]
  maxCols?: 3 | 4
}) {
  return (
    <div className="flex w-full flex-col gap-[16px]">
      <h3 className="font-bold text-[24px] leading-[32px] tracking-[-0.24px] text-[#16181d]">{title}</h3>
      <div
        className={`grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-[16px] ${
          maxCols === 3 ? 'min-[1600px]:grid-cols-3' : 'min-[1600px]:grid-cols-4'
        }`}
      >
        {entries.map((e) => (
          <SemanticColorCard
            key={e.role}
            variant={variant}
            role={e.role}
            color={e.hex}
            token={toToken(sectionKey, e.role.toLowerCase().replace(/\s+/g, '_'))}
            reference={e.reference}
            onDark={e.onDark}
          />
        ))}
      </div>
    </div>
  )
}

export function SemanticColorsPage() {
  return (
    <div id="color.semantic-colors" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Color System"
        title="03 Semantic Colors"
        paragraphs={[
          'Roles funcionales que traducen Global Colors en decisiones consistentes de interfaz.',
          'No crean nuevas paletas: asignan intención a primitives existentes para texto, fondos, bordes y estados.',
        ]}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[80px]">
        <Group title="Content" sectionKey="content" variant="text" entries={CONTENT} maxCols={4} />
        <Divider />
        <Group title="Content State" sectionKey="content_state" variant="text" entries={CONTENT_STATE} maxCols={3} />
        <Divider />
        <Group title="Background" sectionKey="background" variant="background" entries={BACKGROUND} maxCols={4} />
        <Divider />
        <Group title="Background State" sectionKey="background_state" variant="background" entries={BACKGROUND_STATE} maxCols={3} />
        <Divider />
        <Group title="Border" sectionKey="border" variant="border" entries={BORDER} maxCols={4} />
        <Divider />
        <Group title="Semantic" sectionKey="functional" variant="background" entries={SEMANTIC} maxCols={3} />
        <Divider />
        <Group title="Semantic State" sectionKey="functional_state" variant="background" entries={SEMANTIC_STATE} maxCols={4} />
        <Divider />

        {/* Combinaciones aprobadas */}
        <section className="flex w-full flex-col gap-[48px]">
          <div className="flex flex-col gap-[16px]">
            <h2 className="font-bold text-[28px] leading-[34px] tracking-[-0.2px] text-[#16181d]">
              Proporción de color Myntex
            </h2>
            <p className="text-[14px] leading-[20px] text-[#576175]">
              La identidad visual de Myntex se construye sobre una proporción cromática definida: 40% Neutral, 30%
              Highlight, 20% Secondary Accent y 10% Anchor. Esta proporción garantiza coherencia visual,
              accesibilidad y reconocimiento de marca en todas las aplicaciones.
            </p>
            <p className="text-[14px] leading-[20px] text-[#576175]">
              Cyan/60 actúa como color expresivo principal, aportando vitalidad y presencia. Lime/60 funciona como
              acento controlado, reservado para énfasis puntual. Blue/90 opera como anclaje de contraste,
              asegurando legibilidad y profundidad.
            </p>
            <RatioBar />
          </div>

          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[4px]">
              <h3 className="font-bold text-[24px] leading-[32px] tracking-[-0.24px] text-[#16181d]">
                Combinaciones aprobadas
              </h3>
              <p className="text-[14px] leading-[20px] text-[#576175]">
                Pares de color que cumplen los requisitos mínimos de contraste WCAG AA (≥ 4.5:1 para texto) y son
                coherentes con la identidad de marca.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-[16px] min-[700px]:grid-cols-2 min-[1100px]:grid-cols-3">
              {APPROVED_COMBINATIONS.map((c) => (
                <ColorCard
                  key={c.name}
                  variant="combination"
                  name={c.name}
                  color={`#${c.bgHex}`}
                  textColor={`#${c.textHex}`}
                  badgeTone="success"
                  description={`${c.bgLabel} · #${c.bgHex} ↔ ${c.textLabel} · #${c.textHex}`}
                  token={`color_system/semantic/combinations/${c.name.toLowerCase().replace('/', '_')}`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[4px]">
              <h3 className="font-bold text-[24px] leading-[32px] tracking-[-0.24px] text-[#d64545]">
                Combinaciones no recomendadas
              </h3>
              <p className="text-[14px] leading-[20px] text-[#576175]">
                Las siguientes combinaciones no cumplen los requisitos mínimos de contraste o generan conflictos
                visuales entre colores de marca. Evitar su uso en texto, UI components y materiales de
                comunicación.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-[16px] min-[700px]:grid-cols-2 min-[1100px]:grid-cols-3">
              {NOT_RECOMMENDED.map((c, i) => (
                <ColorCard
                  key={i}
                  variant="combination"
                  name={c.name}
                  color={`#${c.bgHex}`}
                  textColor={`#${c.textHex}`}
                  sampleText={c.sampleText}
                  badgeTone={c.badgeTone}
                  badgeText={c.badgeText}
                  description={c.description}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      <GovernanceFooter title="Gobernanza del color semántico" rules={GOVERNANCE_RULES} />
      <MetaFooter label="v3 · 03 Semantic Colors · Color System · Master Template + Myntex" />
    </div>
  )
}
