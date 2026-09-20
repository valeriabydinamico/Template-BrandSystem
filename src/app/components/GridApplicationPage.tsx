import { PageHeader } from './PageHeader'
import { GovernanceFooter } from './GovernanceFooter'
import { GovernanceRule } from './GovernanceRule'
import { MetaFooter } from './MetaFooter'
import { TokenTag } from './TokenTag'
import { DocNote, SectionHeader } from './docs/shared'
import { gridApplicationReports } from '../lib/siteCompleteness'
import { WIREFRAME_REFS, type FormatRow } from '../data/gridApplication'
import layoutGridsBadgeIcon from '@/assets/layout-grids-badge-icon.svg'

/* ────────────────────────────────────────────────────────────────────────────
 * 02 Grid Application — Figma nodo 2162:33595.
 *
 * Formatos de referencia (tabla), wireframes estructurales por familia y
 * reglas de alineación. Reutiliza PageHeader / GovernanceFooter / GovernanceRule
 * / MetaFooter / TokenTag. Responsive: breakpoint 1600 (+ la tabla scrollea
 * horizontal dentro de su contenedor en pantallas angostas).
 *
 * Datos de marca en `src/app/data/gridApplication.ts`; reporte de
 * completitud en `src/app/lib/siteCompleteness.ts` (`gridApplicationReports`).
 * Los wireframes se derivan de los formatos visibles (`WIREFRAME_REFS`), no
 * son una lista de datos aparte — si el formato referenciado está oculto, el
 * wireframe también lo está.
 * ────────────────────────────────────────────────────────────────────────── */

const TH = 'whitespace-nowrap px-[14px] py-[14px] text-left font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]'
const TD = 'px-[14px] py-[12px] align-middle text-[13px] leading-[18px] text-[#1c212b]'

function ColsBadge({ n }: { n: number }) {
  return (
    <span className="inline-flex size-[24px] items-center justify-center rounded-[12px] bg-[#5d6774] font-semibold text-[12px] leading-none text-white">
      {n}
    </span>
  )
}

function FormatTable({ formats }: { formats: FormatRow[] }) {
  return (
    <div className="w-full overflow-x-auto rounded-[12px] border border-[#d5dadf]">
      <table className="w-full min-w-[1120px] border-collapse">
        <thead>
          <tr className="border-b border-[#d5dadf] bg-[#f4f5f7]">
            <th className={TH}>Canal</th>
            <th className={TH}>Formato</th>
            <th className={TH}>Medida</th>
            <th className={TH}>Cols</th>
            <th className={TH}>Margin</th>
            <th className={TH}>Gutter</th>
            <th className={TH}>Safe Zone</th>
            <th className={TH}>Dónde encontrarlo</th>
            <th className={TH}>Objetivo</th>
          </tr>
        </thead>
        <tbody>
          {formats.map((r, i) => {
            const sameChannel = i > 0 && formats[i - 1].channel === r.channel
            return (
              <tr key={r.token} className="border-b border-[#e3e7ec] last:border-b-0">
                <td className={`${TD} bg-[#f7f9fb] font-semibold text-[#3d5e87]`}>
                  {sameChannel ? <span className="text-[#a9b2c0]">·</span> : r.channel}
                </td>
                <td className={`${TD} whitespace-nowrap font-semibold`}>{r.format}</td>
                <td className={`${TD} whitespace-nowrap font-mono text-[12px] text-[#59667d]`}>
                  {r.size}
                </td>
                <td className={TD}>
                  <ColsBadge n={r.cols!} />
                </td>
                <td className={`${TD} font-mono text-[12px] text-[#59667d]`}>{r.margin}</td>
                <td className={`${TD} font-mono text-[12px] text-[#59667d]`}>{r.gutter}</td>
                <td className={`${TD} whitespace-nowrap font-mono text-[12px] text-[#59667d]`}>
                  {r.safe}
                </td>
                <td className={TD}>
                  <TokenTag fit>{r.token!}</TokenTag>
                </td>
                <td className={`${TD} text-[#59667d]`}>{r.goal}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

/* ─── Wireframes (derivados de los formatos visibles) ─── */

function WireframeCard({ data }: { data: FormatRow }) {
  const cols = data.cols ?? 0
  return (
    <div className="flex w-full min-w-0 flex-col gap-[14px] rounded-[16px] border border-[#bac2cf] bg-white p-[20px]">
      <div className="flex flex-col gap-[2px]">
        <span className="font-semibold text-[11px] uppercase leading-[14px] tracking-[0.5px] text-[#3d5e87]">
          {data.channel}
        </span>
        <p className="font-bold text-[16px] leading-[22px] text-[#1c212b]">{data.format}</p>
      </div>
      <div className="relative w-full overflow-clip rounded-[10px] border border-[#bac2cf] bg-[#f7f9fb] pb-[56%]">
        <span className="absolute inset-x-[9%] inset-y-[13%] rounded-[2px] border-2 border-[#ccdef2]" />
        {/* Cantidad de columnas dinámica — refleja el `cols` real de este
            formato, no un número fijo. Las columnas de borde (margin) se
            tiñen distinto para diferenciarlas del resto (gutter). */}
        <span className="absolute inset-x-[13%] inset-y-[22%] flex gap-[2px]">
          {Array.from({ length: cols }).map((_, i) => (
            <span
              key={i}
              className="h-full flex-1 rounded-[1px]"
              style={{ backgroundColor: i === 0 || i === cols - 1 ? '#f4d7c9' : '#e0ebf7' }}
            />
          ))}
        </span>
      </div>
      <div className="flex flex-wrap gap-x-[12px] gap-y-[2px] font-mono text-[11px] leading-[15px] text-[#1c212b]">
        <span>{data.size}</span>
        <span className="text-[#59667d]">{`${data.cols} col · M${data.margin} · G${data.gutter}`}</span>
      </div>
    </div>
  )
}

/* ─── Reglas de alineación ─── */

const ALIGNMENT_RULES = [
  'El contenido principal se alinea a la grilla definida para el formato.',
  'Legal, metadata y elementos críticos permanecen dentro de la safe zone.',
  'CTA y controles interactivos respetan safe zone, márgenes y UI nativa de plataforma.',
  'Overlays, gradients y recursos de apoyo no deben competir con la jerarquía principal.',
  'Las excepciones se documentan cuando modifican una regla estructural del sistema.',
]

const GOVERNANCE_RULES = [
  'Los formatos documentados son referencias iniciales y deben sustituirse cuando el proyecto requiera otras medidas o canales.',
  'Cada fila debe apuntar a un Layout Grid Style real o indicar claramente que el formato aún no está configurado.',
  'Las medidas de plataformas externas deben verificarse antes de producción; el master no debe congelar especificaciones cambiantes.',
  'Wireframes muestran estructura y no deben incorporar identidad, assets ni contenido de un cliente específico.',
  'Safe Zones responden al contexto de uso, overlays, recortes y UI nativa de cada plataforma.',
  'Los valores estructurales se validan en el formato real antes de convertirse en regla del proyecto.',
  'Cualquier formato nuevo debe documentar medida, columns, margin, gutter, safe zone, ubicación y objetivo.',
]

export function GridApplicationPage() {
  const { formats } = gridApplicationReports
  const wireframes = WIREFRAME_REFS.map((ref) =>
    formats.visible.find((f) => f.channel === ref.channel && f.format === ref.format),
  ).filter((f): f is FormatRow => f !== undefined)

  return (
    <div className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Layout Grids"
        moduleIconSrc={layoutGridsBadgeIcon}
        title="02 Grid Application"
        paragraphs={[
          'Referencias estructurales estándar para iniciar proyectos con una base coherente de medidas, columnas, márgenes, gutters y safe zones.',
          'Estos formatos no representan requerimientos fijos: se sustituyen, amplían o eliminan según el alcance y los canales reales de cada cliente.',
          null,
          'Cada fila conecta la referencia documental con un Layout Grid Style real del master.',
        ]}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        {formats.visible.length > 0 && (
          <section className="flex w-full flex-col gap-[24px]">
            <SectionHeader
              title="01. Formatos de referencia y estructura base"
              description="Base inicial de formatos comunes. Debe adaptarse al proyecto: el objetivo es acelerar la configuración, no imponer un set universal de canales."
            />
            <FormatTable formats={formats.visible} />
            <DocNote title="Referencia configurable">
              Estas medidas y grids funcionan como punto de partida del master. Antes de usar un formato
              en producción, valida las especificaciones vigentes de la plataforma y las necesidades
              reales del cliente.
            </DocNote>
          </section>
        )}

        {wireframes.length > 0 && (
          <section className="flex w-full flex-col gap-[24px]">
            <SectionHeader
              title="02. Wireframes estructurales"
              description="Ejemplos neutros por familia para explicar grid, content zone y safe zone sin introducir decisiones visuales de una marca específica."
            />
            <div className="grid grid-cols-1 gap-[16px] min-[560px]:grid-cols-2 min-[1200px]:grid-cols-4">
              {wireframes.map((w) => (
                <WireframeCard key={`${w.channel}-${w.format}`} data={w} />
              ))}
            </div>
          </section>
        )}

        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader
            title="03. Reglas de alineación y posicionamiento"
            description="Criterios estructurales base que deben mantenerse aunque los valores concretos cambien por formato o cliente."
          />
          <div className="flex w-full flex-col gap-[12px]">
            {ALIGNMENT_RULES.map((rule, i) => (
              <GovernanceRule key={i} number={i + 1}>
                {rule}
              </GovernanceRule>
            ))}
          </div>
        </section>
      </div>

      <GovernanceFooter title="Gobernanza de Grid Application" rules={GOVERNANCE_RULES} />
      <MetaFooter label="v1 · Grid Application · Brand System Template · Master" />
    </div>
  )
}
