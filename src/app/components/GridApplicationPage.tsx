import { PageHeader } from './PageHeader'
import { GovernanceFooter } from './GovernanceFooter'
import { GovernanceRule } from './GovernanceRule'
import { MetaFooter } from './MetaFooter'
import { TokenTag } from './TokenTag'
import { DocNote, SectionHeader } from './docs/shared'
import layoutGridsBadgeIcon from '@/assets/layout-grids-badge-icon.svg'

/* ────────────────────────────────────────────────────────────────────────────
 * 02 Grid Application — Figma nodo 2162:33595.
 *
 * Formatos de referencia (tabla), wireframes estructurales por familia y
 * reglas de alineación. Reutiliza PageHeader / GovernanceFooter / GovernanceRule
 * / MetaFooter / TokenTag. Responsive: breakpoint 1600 (+ la tabla scrollea
 * horizontal dentro de su contenedor en pantallas angostas).
 * ────────────────────────────────────────────────────────────────────────── */

interface FormatRow {
  channel: string
  format: string
  size: string
  cols: number
  margin: number
  gutter: number
  safe: string
  token: string
  goal: string
}

const FORMATS: FormatRow[] = [
  { channel: 'WEB', format: 'Desktop', size: '1440×1024', cols: 12, margin: 80, gutter: 24, safe: 'H:80 / V:80', token: 'Layout Grid / Reference / Web / Desktop', goal: 'Sitio web · layouts amplios' },
  { channel: 'WEB', format: 'Tablet', size: '768×1024', cols: 8, margin: 32, gutter: 24, safe: 'H:32 / V:32', token: 'Layout Grid / Reference / Web / Tablet', goal: 'Web responsive · tablet' },
  { channel: 'WEB', format: 'Mobile', size: '390×844', cols: 4, margin: 16, gutter: 16, safe: 'H:16 / V:16', token: 'Layout Grid / Reference / Web / Mobile', goal: 'Web responsive · mobile' },
  { channel: 'SOCIAL', format: 'Feed Portrait', size: '1080×1350', cols: 6, margin: 64, gutter: 24, safe: 'H:64 / V:64', token: 'Layout Grid / Reference / Social / Feed Portrait', goal: 'Publicación vertical de feed' },
  { channel: 'SOCIAL', format: 'Square', size: '1080×1080', cols: 6, margin: 64, gutter: 24, safe: 'H:64 / V:64', token: 'Layout Grid / Reference / Social / Square', goal: 'Publicación cuadrada' },
  { channel: 'SOCIAL', format: 'Story', size: '1080×1920', cols: 6, margin: 64, gutter: 24, safe: 'H:64 / V:104', token: 'Layout Grid / Reference / Social / Story', goal: 'Story vertical full-screen' },
  { channel: 'SOCIAL', format: 'Reels + TikTok', size: '1080×1920', cols: 6, margin: 64, gutter: 24, safe: 'H:64 / V:104', token: 'Layout Grid / Reference / Social / Reels + TikTok', goal: 'Video corto vertical' },
  { channel: 'SOCIAL', format: 'LinkedIn Landscape', size: '1200×627', cols: 12, margin: 64, gutter: 24, safe: 'H:64 / V:64', token: 'Layout Grid / Reference / Social / LinkedIn Landscape', goal: 'Publicación horizontal profesional' },
  { channel: 'VIDEO', format: 'YouTube Thumbnail', size: '1280×720', cols: 12, margin: 64, gutter: 24, safe: 'H:64 / V:64', token: 'Layout Grid / Reference / Video / YouTube Thumbnail', goal: 'Thumbnail / portada 16:9' },
  { channel: 'EMAIL', format: 'Desktop', size: '600×variable', cols: 4, margin: 24, gutter: 16, safe: 'H:24 / V:24', token: 'Layout Grid / Reference / Email / Desktop', goal: 'Contenido de email base' },
  { channel: 'DISPLAY', format: 'Landscape', size: '1920×1080', cols: 12, margin: 96, gutter: 24, safe: 'H:96 / V:96', token: 'Layout Grid / Reference / Display / Landscape', goal: 'Pantalla / display 16:9' },
  { channel: 'DISPLAY', format: 'Portrait', size: '1080×1920', cols: 6, margin: 80, gutter: 24, safe: 'H:80 / V:96', token: 'Layout Grid / Reference / Display / Portrait', goal: 'Pantalla / display vertical' },
]

const TH = 'whitespace-nowrap px-[14px] py-[14px] text-left font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]'
const TD = 'px-[14px] py-[12px] align-middle text-[13px] leading-[18px] text-[#1c212b]'

function ColsBadge({ n }: { n: number }) {
  return (
    <span className="inline-flex size-[24px] items-center justify-center rounded-[12px] bg-[#5d6774] font-semibold text-[12px] leading-none text-white">
      {n}
    </span>
  )
}

function FormatTable() {
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
          {FORMATS.map((r, i) => {
            const sameChannel = i > 0 && FORMATS[i - 1].channel === r.channel
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
                  <ColsBadge n={r.cols} />
                </td>
                <td className={`${TD} font-mono text-[12px] text-[#59667d]`}>{r.margin}</td>
                <td className={`${TD} font-mono text-[12px] text-[#59667d]`}>{r.gutter}</td>
                <td className={`${TD} whitespace-nowrap font-mono text-[12px] text-[#59667d]`}>
                  {r.safe}
                </td>
                <td className={TD}>
                  <TokenTag fit>{r.token}</TokenTag>
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

/* ─── Wireframes ─── */

interface Wireframe {
  channel: string
  title: string
  size: string
  gridSpec: string
}

const WIREFRAMES: Wireframe[] = [
  { channel: 'WEB', title: 'Desktop', size: '1440×1024', gridSpec: '12 col · M80 · G24' },
  { channel: 'SOCIAL', title: 'Feed Portrait', size: '1080×1350', gridSpec: '6 col · M64 · G24' },
  { channel: 'VIDEO', title: '16:9', size: '1280×720', gridSpec: '12 col · M64 · G24' },
  { channel: 'DISPLAY', title: 'Portrait', size: '1080×1920', gridSpec: '6 col · M80 · G24' },
]

function WireframeCard({ data }: { data: Wireframe }) {
  return (
    <div className="flex w-full min-w-0 flex-col gap-[14px] rounded-[16px] border border-[#bac2cf] bg-white p-[20px]">
      <div className="flex flex-col gap-[2px]">
        <span className="font-semibold text-[11px] uppercase leading-[14px] tracking-[0.5px] text-[#3d5e87]">
          {data.channel}
        </span>
        <p className="font-bold text-[16px] leading-[22px] text-[#1c212b]">{data.title}</p>
      </div>
      <div className="relative w-full overflow-clip rounded-[10px] border border-[#bac2cf] bg-[#f7f9fb] pb-[56%]">
        <span className="absolute inset-x-[9%] inset-y-[13%] rounded-[2px] border-2 border-[#ccdef2]" />
        <span className="absolute inset-x-[13%] inset-y-[22%] flex gap-[4%]">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="h-full flex-1 rounded-[1px]" style={{ backgroundColor: '#e0ebf7' }} />
          ))}
        </span>
      </div>
      <div className="flex flex-wrap gap-x-[12px] gap-y-[2px] font-mono text-[11px] leading-[15px] text-[#1c212b]">
        <span>{data.size}</span>
        <span className="text-[#59667d]">{data.gridSpec}</span>
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
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader
            title="01. Formatos de referencia y estructura base"
            description="Base inicial de formatos comunes. Debe adaptarse al proyecto: el objetivo es acelerar la configuración, no imponer un set universal de canales."
          />
          <FormatTable />
          <DocNote title="Referencia configurable">
            Estas medidas y grids funcionan como punto de partida del master. Antes de usar un formato
            en producción, valida las especificaciones vigentes de la plataforma y las necesidades
            reales del cliente.
          </DocNote>
        </section>

        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader
            title="02. Wireframes estructurales"
            description="Ejemplos neutros por familia para explicar grid, content zone y safe zone sin introducir decisiones visuales de una marca específica."
          />
          <div className="grid grid-cols-1 gap-[16px] min-[560px]:grid-cols-2 min-[1200px]:grid-cols-4">
            {WIREFRAMES.map((w) => (
              <WireframeCard key={`${w.channel}-${w.title}`} data={w} />
            ))}
          </div>
        </section>

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
