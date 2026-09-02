import { ColorCard } from './ColorCard'
import { Badge } from './Badge'
import { ModuleBadge } from './ModuleBadge'
import { GovernanceRule } from './GovernanceRule'
import governanceIcon from '@/assets/governance-icon.svg'

/* ────────────────────────────────────────────────────────────────────────────
 * Datos — Brand Colors (Figma · F01 Color System · "02 Brand Colors")
 * HEX es la fuente de verdad; RGB / CMYK / Pantone son referencia técnica.
 * ────────────────────────────────────────────────────────────────────────── */

interface BrandColor {
  color: string
  name: string
  description: string
  hex: string
  rgb: { r: number; g: number; b: number }
  cmyk: { c: number; m: number; y: number; k: number }
  pantone: string
  accessibilityRating: string
  contrastRatio: string
  /** Cards claras que necesitan borde para separarse del fondo */
  bordered?: boolean
}

const PRIMARY: BrandColor = {
  color: '#004c97',
  name: 'Primary',
  description: 'Color Reference: Blue 700',
  hex: '004C97',
  rgb: { r: 0, g: 76, b: 151 },
  cmyk: { c: 100, m: 50, y: 0, k: 41 },
  pantone: 'Pantone 2945 C',
  accessibilityRating: 'AAA',
  contrastRatio: '8.47:1',
}

const SECONDARY: BrandColor[] = [
  {
    color: '#ffffff',
    name: 'Neutral',
    description: 'Color Reference: Gray 50',
    hex: 'FFFFFF',
    rgb: { r: 255, g: 255, b: 255 },
    cmyk: { c: 0, m: 0, y: 0, k: 0 },
    pantone: 'Paper White / Digital White',
    accessibilityRating: 'AAA',
    contrastRatio: '13.56:1',
    bordered: true,
  },
  {
    color: '#00a3e1',
    name: 'Secondary',
    description: 'Color Reference: Light Blue 600',
    hex: '00A3E1',
    rgb: { r: 0, g: 163, b: 225 },
    cmyk: { c: 100, m: 28, y: 0, k: 12 },
    pantone: 'Pantone 2995 C',
    accessibilityRating: 'AA',
    contrastRatio: '4.73:1',
  },
]

const ACCENTS: BrandColor[] = [
  {
    color: '#ff7900',
    name: 'Accent 01',
    description: 'Color Reference: Orange 500',
    hex: 'FF7900',
    rgb: { r: 255, g: 121, b: 0 },
    cmyk: { c: 0, m: 53, y: 100, k: 0 },
    pantone: 'Pantone 144 C',
    accessibilityRating: 'AA',
    contrastRatio: '5.31:1',
  },
  {
    color: '#20a5b1',
    name: 'Accent 02',
    description: 'Color Reference: Teal 600',
    hex: '20A5B1',
    rgb: { r: 32, g: 165, b: 177 },
    cmyk: { c: 82, m: 7, y: 0, k: 31 },
    pantone: 'Pantone 7710 C',
    accessibilityRating: 'AA',
    contrastRatio: '4.52:1',
  },
  {
    color: '#7dc030',
    name: 'Accent 03',
    description: 'Color Reference: Apple 500',
    hex: '7DC030',
    rgb: { r: 125, g: 192, b: 48 },
    cmyk: { c: 35, m: 0, y: 75, k: 25 },
    pantone: 'Pantone 376 C',
    accessibilityRating: 'AAA',
    contrastRatio: '7.18:1',
    bordered: true,
  },
]

const GOVERNANCE_RULES = [
  'Los roles de Brand Colors deben construirse siempre a partir de primitives existentes; no se deben crear valores HEX aislados directamente en esta capa.',
  'Primary debe mantener la mayor jerarquía de marca. Secondary y Accent funcionan como apoyo y no deben competir sistemáticamente con el rol principal.',
  'Evitar el uso simultáneo de múltiples terciarios dentro de una misma pieza, salvo storytelling editorial o visualizaciones.',
  'Cada rol debe documentar su referencia de color y conservar una relación trazable con Global Colors. Si cambia la primitive referenciada, el rol debe actualizarse mediante una referencia y no mediante duplicación manual del valor.',
  'Los equivalentes RGB, CMYK y referencias Pantone funcionan como guía de implementación editorial, impresión y alineación cross-team con producto.',
  'Los tokens de texto no deben redefinirse por canal.',
]

/* ────────────────────────────────────────────────────────────────────────────
 * Sub-componentes de página
 * ────────────────────────────────────────────────────────────────────────── */

/** Tarjeta de color con las medidas de grilla del diseño (min 300 / max 500, flexible) */
function BrandColorCard({ data }: { data: BrandColor }) {
  return (
    <div className="min-w-[300px] max-w-[500px] flex-[1_0_0]">
      <ColorCard
        variant={data.name === 'Primary' ? 'primary' : 'secondary'}
        color={data.color}
        name={data.name}
        description={data.description}
        hex={data.hex}
        rgb={data.rgb}
        cmyk={data.cmyk}
        pantone={data.pantone}
        accessibilityRating={data.accessibilityRating}
        contrastRatio={data.contrastRatio}
        className={data.bordered ? 'border border-[#dadcde]' : ''}
      />
    </div>
  )
}

/** Sección de rol cromático: encabezado + lista de uso a la izquierda, cards a la derecha */
function BrandSection({
  title,
  paragraphs,
  usage,
  cards,
}: {
  title: string
  paragraphs: string[]
  usage: string[]
  cards: BrandColor[]
}) {
  return (
    <section className="flex w-full max-lg:flex-col items-start gap-[72px] lg:flex-row">
      {/* section-header */}
      <div className="flex flex-[1_0_0] flex-col items-start gap-[24px]">
        <h3 className="w-full font-bold text-[40px] leading-[44px] text-[#16181d]">{title}</h3>
        <div className="w-full font-normal text-[16px] leading-[24px] text-[#576175]">
          {paragraphs.map((p, i) => (
            <p key={i} className={i < paragraphs.length - 1 ? 'mb-0' : ''}>
              {p}
            </p>
          ))}
        </div>
        {/* usage-list */}
        <div className="flex w-full flex-wrap items-start gap-[12px]">
          {usage.map((u) => (
            <Badge key={u}>{u}</Badge>
          ))}
        </div>
      </div>

      {/* color-card-grid */}
      <div className="flex flex-[1_0_0] flex-wrap content-center items-stretch gap-[16px]">
        {cards.map((c) => (
          <BrandColorCard key={c.name} data={c} />
        ))}
      </div>
    </section>
  )
}

function Divider() {
  return <div className="h-px w-full shrink-0 bg-[#eef2f8]" />
}

/* ────────────────────────────────────────────────────────────────────────────
 * Página
 * ────────────────────────────────────────────────────────────────────────── */

export function BrandColorsPage() {
  return (
    <div className="flex w-full flex-col items-start bg-white">
      {/* Container */}
      <div className="w-full p-[24px]">
        {/* IntroCard */}
        <div className="flex w-full flex-col items-start gap-[32px] rounded-[40px] bg-[#d2d8e1] px-[40px] py-[48px]">
          <ModuleBadge label="Color System" />

          {/* IntroCopy */}
          <div className="flex w-full flex-col items-start gap-[24px]">
            <p className="font-bold text-[48px] leading-[48px] tracking-[-0.4px] text-[#2f3945]">
              02 Brand Colors
            </p>
            <div className="w-full font-normal text-[16px] leading-[24px] text-[#4d5965]">
              <p className="mb-0">
                Roles cromáticos de marca construidos a partir de las primitives definidas en Global
                Colors.
              </p>
              <p className="mb-0">
                Este board traduce familias cromáticas en decisiones de identidad como Primary,
                Secondary, Neutral y Accent sin duplicar valores base.
              </p>
              <p className="mb-0">&#8203;</p>
              <p>
                Cada rol debe mantener una referencia de color clara hacia su primitive para
                facilitar consistencia, mantenimiento e implementación.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Secciones de roles */}
      <div className="flex w-full flex-col items-start gap-[64px] px-[40px] py-[80px]">
        <Divider />
        <BrandSection
          title="Color primario de marca"
          paragraphs={[
            'Rol cromático principal de la identidad.',
            'Debe concentrar el mayor reconocimiento de marca y utilizarse como referencia para los momentos de mayor jerarquía visual. La familia y el tono asignados pueden cambiar según el proyecto.',
          ]}
          usage={['CTA’s', 'Headers', 'Hero surfaces', 'Logo', 'Elementos']}
          cards={[PRIMARY]}
        />

        <Divider />
        <BrandSection
          title="Colores secundarios de marca"
          paragraphs={[
            'Roles cromáticos de apoyo que amplían la identidad sin competir con Primary.',
            'Pueden utilizarse para construir jerarquía, profundidad, superficies auxiliares y diferenciación visual. La cantidad de roles secundarios puede variar según cada marca.',
          ]}
          usage={[
            'Backgrounds',
            'Estados interactivos',
            'Diferenciación modular',
            'Apoyo Editorial',
            'Iconos',
          ]}
          cards={SECONDARY}
        />

        <Divider />
        <BrandSection
          title="Colores de acento de marca"
          paragraphs={[
            'Roles cromáticos complementarios para ampliar el rango expresivo de la marca.',
            'Se utilizan de forma intencional para campañas, categorías, storytelling o momentos específicos sin desplazar los roles Primary y Secondary. La cantidad de accents debe responder a las necesidades reales del proyecto.',
          ]}
          usage={[
            'Promociones',
            'CTA’s',
            'Contraste Visual',
            'Información puntual',
            'Bloques secundarios de contenido',
          ]}
          cards={ACCENTS}
        />
      </div>

      {/* governance-footer */}
      <div className="flex w-full flex-col items-start bg-[#d2d8e1] px-[40px] py-[48px]">
        <div className="w-full rounded-[24px] border border-[#b9c3ce] bg-[#fafbfc]">
          <div className="flex flex-col items-start gap-[18px] p-[32px]">
            {/* governance-header */}
            <div className="flex w-full items-center gap-[14px] border-b border-[rgba(170,182,194,0.35)] pb-[29px]">
              <div className="flex size-[40px] shrink-0 items-center justify-center rounded-[10px] border-[1.5px] border-[#596879] bg-[#e8edf2]">
                <img src={governanceIcon} alt="" className="block size-[20px]" />
              </div>
              <div className="flex flex-col items-start gap-[2px]">
                <p className="font-medium text-[14px] uppercase leading-[19.5px] tracking-[0.65px] text-[#596879]">
                  Guías de uso
                </p>
                <p className="font-bold text-[24px] leading-[26.4px] text-[#2f3945]">
                  Gobernanza del color de marca
                </p>
              </div>
            </div>

            {GOVERNANCE_RULES.map((rule, i) => (
              <GovernanceRule key={i} number={i + 1}>
                {rule}
              </GovernanceRule>
            ))}
          </div>
        </div>
      </div>

      {/* MetaFooter */}
      <div className="flex h-[72px] w-full items-center justify-between border-t border-[#c6d0da] bg-[#44515f] px-[80px]">
        <p className="whitespace-nowrap font-medium text-[13px] text-white opacity-[0.72]">
          v1 · 02 Brand Colors · Master Template
        </p>
        <div className="rounded-[999px] border border-[#b9c3ce] bg-white px-[16px] py-[8px]">
          <p className="whitespace-nowrap font-semibold text-[12px] text-[#44515f]">Master</p>
        </div>
      </div>
    </div>
  )
}
