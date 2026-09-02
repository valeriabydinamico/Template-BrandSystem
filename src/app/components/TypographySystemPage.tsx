import type { CSSProperties } from 'react'
import { PageHeader } from './PageHeader'
import { GovernanceFooter } from './GovernanceFooter'
import { MetaFooter } from './MetaFooter'
import { TokenTag } from './TokenTag'
import { FONT } from './typography/shared'
import { DocNote, SectionHeader } from './docs/shared'
import typeBadgeIcon from '@/assets/type-badge-icon.svg'

/* ────────────────────────────────────────────────────────────────────────────
 * 02 Typography System — Figma nodo 154:8196.
 *
 * Jerarquías, tokens y especificaciones responsive de la configuración de
 * ejemplo. Los nombres de token se mantienen; familias y métricas se sustituyen
 * por proyecto.
 *
 * Responsive: punto de quiebre 1600px (Brand/Semantic Colors). Además, la tabla
 * de jerarquía de marca colapsa a cards apiladas por debajo de 1180px.
 * ────────────────────────────────────────────────────────────────────────── */

/* ─── 01 · Cómo leer los tokens ─── */

const GUIDE = [
  {
    title: 'Token',
    example: 'type/desktop/title/lg',
    description: 'Identificador estable que expresa intención, dispositivo y escala.',
  },
  {
    title: 'Device',
    example: 'desktop · tablet · mobile',
    description: 'Contexto responsive donde se aplica el token.',
  },
  {
    title: 'Categoría',
    example: 'title · body · cta',
    description: 'Rol funcional principal dentro del sistema tipográfico.',
  },
  {
    title: 'Escala',
    example: 'lg · md · sm',
    description: 'Nivel relativo dentro de cada categoría; no representa un tamaño universal.',
  },
]

function TokenGuide() {
  return (
    <div className="grid grid-cols-1 gap-[16px] min-[640px]:grid-cols-2 min-[1600px]:grid-cols-4">
      {GUIDE.map((g) => (
        <div
          key={g.title}
          className="flex flex-col gap-[12px] rounded-[16px] border border-[#b9c3ce] bg-white p-[20px]"
        >
          <p className="font-bold text-[18px] leading-[22px] text-[#2f3945]">{g.title}</p>
          <TokenTag fit>{g.example}</TokenTag>
          <p className="font-normal text-[13px] leading-[18px] text-[#5f6b78]">{g.description}</p>
        </div>
      ))}
    </div>
  )
}

/* ─── 02 · Jerarquía de marca (tabla responsive) ─── */

interface StyleToken {
  token: string
  preview: string
  previewStyle: CSSProperties
  family: string
  weight: string
  size: string
  lineHeight: string
  letterSpacing: string
  usage: string
}

const BRAND_STYLES: StyleToken[] = [
  {
    token: 'type/brand/display/lg',
    preview: 'Build trust.',
    previewStyle: { fontFamily: FONT.brand, fontWeight: 600, fontSize: 40, lineHeight: '46px', letterSpacing: '-0.4px' },
    family: 'Manrope',
    weight: 'Semi Bold',
    size: '56 px',
    lineHeight: '64 px',
    letterSpacing: '-1%',
    usage: 'Hero · Campaigns · Titulares de alto impacto',
  },
  {
    token: 'type/brand/display/md',
    preview: 'Clear ideas.',
    previewStyle: { fontFamily: FONT.brand, fontWeight: 600, fontSize: 36, lineHeight: '42px', letterSpacing: '-0.2px' },
    family: 'Manrope',
    weight: 'Semi Bold',
    size: '48 px',
    lineHeight: '56 px',
    letterSpacing: '-0.5%',
    usage: 'Headlines editoriales · Piezas institucionales',
  },
  {
    token: 'type/brand/heading/lg',
    preview: 'Section heading',
    previewStyle: { fontFamily: FONT.brand, fontWeight: 600, fontSize: 30, lineHeight: '38px', letterSpacing: '-0.15px' },
    family: 'Manrope',
    weight: 'Semi Bold',
    size: '40 px',
    lineHeight: '48 px',
    letterSpacing: '-0.5%',
    usage: 'Heading principal · Secciones destacadas',
  },
  {
    token: 'type/brand/heading/md',
    preview: 'Section title',
    previewStyle: { fontFamily: FONT.brand, fontWeight: 500, fontSize: 26, lineHeight: '34px' },
    family: 'Manrope',
    weight: 'Medium',
    size: '32 px',
    lineHeight: '40 px',
    letterSpacing: '0%',
    usage: 'Heading secundario · Módulos editoriales',
  },
  {
    token: 'type/brand/subtitle',
    preview: 'Ideas deserve room to breathe.',
    previewStyle: { fontFamily: FONT.editorial, fontWeight: 500, fontSize: 22, lineHeight: '30px' },
    family: 'Source Serif 4',
    weight: 'Medium',
    size: '24 px',
    lineHeight: '32 px',
    letterSpacing: '0%',
    usage: 'Storytelling · Quotes · Apoyo editorial',
  },
  {
    token: 'type/brand/label',
    preview: 'FEATURED',
    previewStyle: { fontFamily: FONT.brand, fontWeight: 600, fontSize: 14, lineHeight: '20px', letterSpacing: '0.14px' },
    family: 'Manrope',
    weight: 'Semi Bold',
    size: '14 px',
    lineHeight: '20 px',
    letterSpacing: '+1%',
    usage: 'Campaign labels · Badges · Soporte breve',
  },
]

/* plantilla de columnas de la tabla (solo ≥1180px).
   Los pares max-[1180px]/min-[1180px] son mutuamente excluyentes a propósito:
   evitan el problema de orden en la cascada de Tailwind v4 entre una utilidad
   base y su variante responsive (display / border / radius). */
const TABLE_COLS =
  'min-[1180px]:grid-cols-[176px_minmax(180px,1.1fr)_120px_92px_60px_84px_96px_minmax(150px,1.3fr)]'

function HeaderCell({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold text-[12px] leading-[16px] text-[#5f6b78]">{children}</span>
}

function BodyCell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[2px]">
      <span className="font-semibold text-[10px] uppercase leading-[13px] tracking-[0.5px] text-[#8a94a8] min-[1180px]:hidden">
        {label}
      </span>
      <span className="font-normal text-[12px] leading-[16px] text-[#2f3945]">{children}</span>
    </div>
  )
}

function BrandStyleTable() {
  return (
    <div className="flex w-full flex-col max-[1180px]:gap-[10px]">
      {/* cabecera (solo ≥1180) */}
      <div
        className={`max-[1180px]:hidden gap-x-[16px] border-b border-[#c4c9d4] pb-[12px] min-[1180px]:grid ${TABLE_COLS}`}
      >
        <HeaderCell>Style Token</HeaderCell>
        <HeaderCell>Vista previa</HeaderCell>
        <HeaderCell>Font Family</HeaderCell>
        <HeaderCell>Weight</HeaderCell>
        <HeaderCell>Size</HeaderCell>
        <HeaderCell>Line Height</HeaderCell>
        <HeaderCell>Letter Spacing</HeaderCell>
        <HeaderCell>Uso</HeaderCell>
      </div>

      {BRAND_STYLES.map((s) => (
        <div
          key={s.token}
          className={`grid items-center gap-x-[16px] max-[1180px]:grid-cols-1 max-[1180px]:gap-y-[12px] max-[1180px]:rounded-[12px] max-[1180px]:border max-[1180px]:border-[#e3e7ee] max-[1180px]:bg-white max-[1180px]:p-[16px] min-[1180px]:border-b min-[1180px]:border-[#eef2f8] min-[1180px]:py-[16px] ${TABLE_COLS}`}
        >
          <TokenTag fit>{s.token}</TokenTag>
          <p className="truncate text-[#2f3945]" style={s.previewStyle}>
            {s.preview}
          </p>
          <BodyCell label="Font Family">{s.family}</BodyCell>
          <BodyCell label="Weight">{s.weight}</BodyCell>
          <BodyCell label="Size">{s.size}</BodyCell>
          <BodyCell label="Line Height">{s.lineHeight}</BodyCell>
          <BodyCell label="Letter Spacing">{s.letterSpacing}</BodyCell>
          <BodyCell label="Uso">{s.usage}</BodyCell>
        </div>
      ))}
    </div>
  )
}

/* ─── 03 · Tokens responsive por dispositivo ─── */

interface DeviceRow {
  token: string
  preview: string
  size: number
  lineHeight: number
  weight: 400 | 600
  spec: string
}

interface DeviceGroup {
  label: string
  rows: DeviceRow[]
}

interface Device {
  title: string
  rows: DeviceGroup[]
}

const t = (token: string, preview: string, size: number, lineHeight: number, weight: 400 | 600, spec: string): DeviceRow => ({
  token,
  preview,
  size,
  lineHeight,
  weight,
  spec,
})

const DEVICES: Device[] = [
  {
    title: 'Desktop',
    rows: [
      {
        label: 'Titles',
        rows: [
          t('type/desktop/title/lg', 'Build trust.', 32, 40, 600, 'Primary title · Inter · Semi Bold · 32/40 · -0.5%'),
          t('type/desktop/title/md', 'Clear hierarchy', 28, 36, 600, 'Section title · Inter · Semi Bold · 28/36 · -0.25%'),
          t('type/desktop/title/sm', 'Module title', 24, 32, 600, 'Module title · Inter · Semi Bold · 24/32 · 0%'),
        ],
      },
      {
        label: 'Body',
        rows: [
          t('type/desktop/body/lg', 'Lead content for context.', 18, 28, 400, 'Lead / intro · Inter · Regular · 18/28 · 0%'),
          t('type/desktop/body/md', 'Clear, readable content.', 16, 24, 400, 'Default body · Inter · Regular · 16/24 · 0%'),
          t('type/desktop/body/sm', 'Supporting details.', 14, 20, 400, 'Supporting copy · Inter · Regular · 14/20 · 0%'),
        ],
      },
      {
        label: 'CTA',
        rows: [
          t('type/desktop/cta/md', 'Continue', 16, 20, 600, 'Primary actions · Inter · Semi Bold · 16/20 · 0%'),
          t('type/desktop/cta/sm', 'Learn more', 14, 18, 600, 'Compact actions · Inter · Semi Bold · 14/18 · 0%'),
        ],
      },
    ],
  },
  {
    title: 'Tablet',
    rows: [
      {
        label: 'Titles',
        rows: [
          t('type/tablet/title/lg', 'Build trust.', 28, 36, 600, 'Primary title · Inter · Semi Bold · 28/36 · -0.25%'),
          t('type/tablet/title/md', 'Clear hierarchy', 24, 32, 600, 'Section title · Inter · Semi Bold · 24/32 · -0.25%'),
          t('type/tablet/title/sm', 'Module title', 20, 28, 600, 'Module title · Inter · Semi Bold · 20/28 · 0%'),
        ],
      },
      {
        label: 'Body',
        rows: [
          t('type/tablet/body/lg', 'Lead content for context.', 18, 28, 400, 'Lead / intro · Inter · Regular · 18/28 · 0%'),
          t('type/tablet/body/md', 'Clear, readable content.', 16, 24, 400, 'Default body · Inter · Regular · 16/24 · 0%'),
          t('type/tablet/body/sm', 'Supporting details.', 14, 20, 400, 'Supporting copy · Inter · Regular · 14/20 · 0%'),
        ],
      },
      {
        label: 'CTA',
        rows: [
          t('type/tablet/cta/md', 'Continue', 15, 20, 600, 'Primary actions · Inter · Semi Bold · 15/20 · 0%'),
          t('type/tablet/cta/sm', 'Learn more', 14, 18, 600, 'Compact actions · Inter · Semi Bold · 14/18 · 0%'),
        ],
      },
    ],
  },
  {
    title: 'Mobile',
    rows: [
      {
        label: 'Titles',
        rows: [
          t('type/mobile/title/lg', 'Build trust.', 24, 32, 600, 'Primary title · Inter · Semi Bold · 24/32 · 0%'),
          t('type/mobile/title/md', 'Clear hierarchy', 22, 28, 600, 'Section title · Inter · Semi Bold · 22/28 · 0%'),
          t('type/mobile/title/sm', 'Module title', 18, 24, 600, 'Module title · Inter · Semi Bold · 18/24 · 0%'),
        ],
      },
      {
        label: 'Body',
        rows: [
          t('type/mobile/body/lg', 'Lead content for context.', 16, 24, 400, 'Lead / intro · Inter · Regular · 16/24 · 0%'),
          t('type/mobile/body/md', 'Clear, readable content.', 14, 20, 400, 'Default body · Inter · Regular · 14/20 · 0%'),
          t('type/mobile/body/sm', 'Supporting details.', 14, 18, 400, 'Supporting copy · Inter · Regular · 14/18 · 0%'),
        ],
      },
      {
        label: 'CTA',
        rows: [
          t('type/mobile/cta/md', 'Continue', 16, 20, 600, 'Primary actions · Inter · Semi Bold · 16/20 · 0%'),
          t('type/mobile/cta/sm', 'Learn more', 14, 18, 600, 'Compact actions · Inter · Semi Bold · 14/18 · 0%'),
        ],
      },
    ],
  },
]

function DeviceCard({ device }: { device: Device }) {
  return (
    <div className="flex w-full min-w-0 flex-col gap-[16px] rounded-[16px] border border-[#b9c3ce] bg-white p-[20px]">
      <div className="flex flex-col gap-[4px]">
        <p className="font-bold text-[20px] leading-[25px] text-[#2f3945]">{device.title}</p>
        <p className="font-normal text-[13px] leading-[18px] text-[#5f6b78]">
          Configuración de ejemplo con Inter. Cada fila muestra Font Family · Weight · Size/Line
          Height · Letter Spacing.
        </p>
      </div>

      {device.rows.map((group) => (
        <div key={group.label} className="flex flex-col gap-[8px]">
          <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.5px] text-[#5f6b78]">
            {group.label}
          </p>
          {group.rows.map((r) => (
            <div
              key={r.token}
              className="flex flex-col gap-[8px] rounded-[12px] border border-[#e3e7ee] bg-[#f7f9fb] p-[12px]"
            >
              <p
                className="truncate text-[#2f3945]"
                style={{
                  fontFamily: FONT.functional,
                  fontWeight: r.weight,
                  fontSize: r.size,
                  lineHeight: `${r.lineHeight}px`,
                }}
              >
                {r.preview}
              </p>
              <p className="font-normal text-[11px] leading-[15px] text-[#5f6b78]">{r.spec}</p>
              <TokenTag fit>{r.token}</TokenTag>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

/* ─── 04 · Recomendaciones ─── */

const RECOMMENDATIONS = [
  {
    title: 'Base de lectura',
    body: 'Usar 16 px como referencia mínima para lectura funcional. En familias con x-height bajo o proporciones pequeñas, 18 px puede ofrecer mejor legibilidad.',
  },
  {
    title: 'Texto pequeño',
    body: 'Reservar 12–14 px para captions, metadata, disclaimers y soporte breve. Evitar usarlo como body principal.',
  },
  {
    title: 'Escala responsive',
    body: 'No reutilizar tamaños de display de desktop en mobile. Cada dispositivo debe resolver su propia escala manteniendo la misma intención semántica.',
  },
  {
    title: 'Rango de CTA',
    body: 'Mantener CTAs generalmente entre 14–18 px y validar peso, altura de línea y centrado dentro del componente real.',
  },
]

const GOVERNANCE_RULES = [
  'Los tokens responsive se separan por Desktop, Tablet y Mobile; no compartir valores automáticamente entre dispositivos.',
  'Titles, Body y CTA son las categorías funcionales base del template; pueden ampliarse solo cuando el proyecto lo requiera.',
  'Los rangos recomendados son puntos de partida: la familia configurada puede requerir ajustes por x-height, ancho o densidad visual.',
  'Body funcional debe partir de 16 px como referencia; 12–14 px se reserva para soporte, metadata y disclaimers.',
  'La jerarquía de marca y la jerarquía funcional no deben mezclarse dentro del mismo nivel semántico sin una razón documentada.',
  'Cualquier line-height personalizado debe validarse con una prueba de dos líneas y en contexto real de producto.',
  'Los valores finales deben configurarse por proyecto sin cambiar el nombre ni la intención del token.',
]

export function TypographySystemPage() {
  return (
    <div className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Type System"
        moduleIconSrc={typeBadgeIcon}
        title="02 Typography System"
        paragraphs={[
          'Jerarquías, tokens y especificaciones responsive del ejemplo configurado.',
          'Manrope resuelve la expresión de marca, Source Serif 4 el apoyo editorial e Inter la tipografía funcional de producto.',
          null,
          'Los nombres de token se mantienen; familias y métricas se sustituyen por proyecto.',
        ]}
      />

      <div className="flex w-full flex-col gap-[44px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader
            title="Cómo leer los tokens tipográficos"
            description="La arquitectura se construye de macro a micro para que el mismo rol pueda adaptarse a diferentes dispositivos sin perder consistencia."
          />
          <TokenGuide />
        </section>

        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader
            title="Jerarquía de marca"
            description="Especificación de ejemplo con la vista previa renderizada dentro de cada fila. Cada estilo muestra familia, weight, size, line-height y letter-spacing reales del master."
          />
          <BrandStyleTable />
        </section>

        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader
            title="Tokens tipográficos responsive"
            description="Cada fila integra la vista previa del estilo con su configuración real. El token se mantiene estable; familia y métricas se sustituyen por proyecto."
          />
          <div className="grid grid-cols-1 gap-[16px] min-[900px]:grid-cols-2 min-[1600px]:grid-cols-3">
            {DEVICES.map((d) => (
              <DeviceCard key={d.title} device={d} />
            ))}
          </div>
        </section>

        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader
            title="Recomendaciones para producto"
            description="Criterios de partida para producto digital. Deben validarse con la familia real y el contexto de uso antes de convertirse en especificaciones definitivas."
          />
          <div className="grid grid-cols-1 gap-[16px] min-[700px]:grid-cols-2 min-[1600px]:grid-cols-4">
            {RECOMMENDATIONS.map((r) => (
              <div
                key={r.title}
                className="flex flex-col gap-[10px] rounded-[16px] border border-[#b9c3ce] bg-white p-[20px]"
              >
                <p className="font-bold text-[18px] leading-[22px] text-[#2f3945]">{r.title}</p>
                <p className="font-normal text-[13px] leading-[19px] text-[#5f6b78]">{r.body}</p>
              </div>
            ))}
          </div>
        </section>

        <DocNote title="QA interno — Prueba de dos líneas">
          Si se modifica el line-height sugerido por la fuente, probar siempre el estilo con al menos
          dos líneas. La decisión final debe evaluarse dentro del componente o layout donde se
          utilizará.
        </DocNote>
      </div>

      <GovernanceFooter title="Gobernanza del sistema tipográfico" rules={GOVERNANCE_RULES} />
      <MetaFooter label="v1 · Typography System · Brand System Template · Master" />
    </div>
  )
}
