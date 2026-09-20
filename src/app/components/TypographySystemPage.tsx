import { PageHeader } from './PageHeader'
import { GovernanceFooter } from './GovernanceFooter'
import { MetaFooter } from './MetaFooter'
import { TokenTag } from './TokenTag'
import { FONT } from './typography/shared'
import { DocNote, SectionHeader } from './docs/shared'
import { typographySystemReports, typographyDeviceReports } from '../lib/siteCompleteness'
import { DEVICE_GROUPS, type StyleToken, type DeviceRow } from '../data/typographySystem'
import typeBadgeIcon from '@/assets/type-badge-icon.svg'

/* ────────────────────────────────────────────────────────────────────────────
 * 02 Typography System — Figma nodo 154:8196.
 *
 * Jerarquías, tokens y especificaciones responsive de la configuración de
 * ejemplo. Los nombres de token se mantienen; familias y métricas se sustituyen
 * por proyecto.
 *
 * Datos de marca en `src/app/data/typographySystem.ts`; reportes en
 * `src/app/lib/siteCompleteness.ts` (`typographySystemReports`,
 * `typographyDeviceReports`). `GUIDE` y `RECOMMENDATIONS` son estructurales
 * (guía de lectura y criterios de producto, no datos de marca).
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

function BrandStyleTable({ styles }: { styles: StyleToken[] }) {
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

      {styles.map((s) => (
        <div
          key={s.token}
          className={`grid items-center gap-x-[16px] max-[1180px]:grid-cols-1 max-[1180px]:gap-y-[12px] max-[1180px]:rounded-[12px] max-[1180px]:border max-[1180px]:border-[#e3e7ee] max-[1180px]:bg-white max-[1180px]:p-[16px] min-[1180px]:border-b min-[1180px]:border-[#eef2f8] min-[1180px]:py-[16px] ${TABLE_COLS}`}
        >
          <TokenTag fit>{s.token}</TokenTag>
          <p
            className="truncate text-[#2f3945]"
            style={{ fontFamily: s.family === 'Source Serif 4' ? FONT.editorial : FONT.brand }}
          >
            {s.preview || s.token}
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

function DeviceCard({ title, groups }: { title: string; groups: { label: string; rows: DeviceRow[] }[] }) {
  return (
    <div className="flex w-full min-w-0 flex-col gap-[16px] rounded-[16px] border border-[#b9c3ce] bg-white p-[20px]">
      <div className="flex flex-col gap-[4px]">
        <p className="font-bold text-[20px] leading-[25px] text-[#2f3945]">{title}</p>
        <p className="font-normal text-[13px] leading-[18px] text-[#5f6b78]">
          Configuración de ejemplo con Inter. Cada fila muestra Font Family · Weight · Size/Line
          Height · Letter Spacing.
        </p>
      </div>

      {groups.map((group) => (
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
                {r.preview || r.token}
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
  const { brandStyles } = typographySystemReports

  const devices = (Object.keys(DEVICE_GROUPS) as (keyof typeof DEVICE_GROUPS)[]).map((deviceKey) => {
    const device = DEVICE_GROUPS[deviceKey]
    const groups = device.groups
      .map((group) => ({
        label: group.label,
        rows: typographyDeviceReports[`${deviceKey}.${group.label}`].visible,
      }))
      .filter((group) => group.rows.length > 0)
    return { title: device.title, groups }
  }).filter((device) => device.groups.length > 0)

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

        {brandStyles.visible.length > 0 && (
          <section className="flex w-full flex-col gap-[24px]">
            <SectionHeader
              title="Jerarquía de marca"
              description="Especificación de ejemplo con la vista previa renderizada dentro de cada fila. Cada estilo muestra familia, weight, size, line-height y letter-spacing reales del master."
            />
            <BrandStyleTable styles={brandStyles.visible} />
          </section>
        )}

        {devices.length > 0 && (
          <section className="flex w-full flex-col gap-[24px]">
            <SectionHeader
              title="Tokens tipográficos responsive"
              description="Cada fila integra la vista previa del estilo con su configuración real. El token se mantiene estable; familia y métricas se sustituyen por proyecto."
            />
            <div className="grid grid-cols-1 gap-[16px] min-[900px]:grid-cols-2 min-[1600px]:grid-cols-3">
              {devices.map((d) => (
                <DeviceCard key={d.title} title={d.title} groups={d.groups} />
              ))}
            </div>
          </section>
        )}

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
