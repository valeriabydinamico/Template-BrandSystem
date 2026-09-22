import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Templates · RRSS — plantilla en blanco (master template).
 *
 * Estructura tomada de "Templates — Estructura de presentación" (sección
 * "RRSS"): templates de social, archivo fuente, reglas de copy y ejemplos
 * aprobados — todo en una sola página.
 * ────────────────────────────────────────────────────────────────────────── */

const TH =
  'px-[14px] py-[12px] text-left font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]'
const TD = 'px-[14px] py-[12px] align-top text-[13px] leading-[19px] text-[#1c212b]'

function Placeholder({ children }: { children: ReactNode }) {
  return <span className="font-normal italic text-[#8a94a8]">{children}</span>
}

function Table({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return (
    <div className="w-full overflow-x-auto rounded-[12px] border border-[#d5dadf]">
      <table className="w-full min-w-[640px] border-collapse">
        <thead>
          <tr className="border-b border-[#d5dadf] bg-[#f4f5f7]">
            {headers.map((h) => (
              <th key={h} className={TH}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[#e3e7ec] last:border-b-0">
              {row.map((cell, j) => (
                <td key={j} className={TD}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const TEMPLATES = ['Posts estáticos', 'Carruseles', 'Stories', 'Reels', 'Portadas de video', 'Lanzamientos']

export function RRSSPage() {
  return (
    <div id="templates.rrss" className="flex w-full flex-col items-start bg-white">
      <PageHeader module="Templates" title="RRSS" paragraphs={['Plantillas de social listas para adaptar contenido.']} />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader
            title="Templates"
            description="Los valores mostrados funcionan como campos a completar con la información real del proyecto."
          />
          <Table
            headers={['Template', 'Formato', 'Qué se edita', 'Qué no se toca']}
            rows={TEMPLATES.map((t) => [
              t,
              <Placeholder key="f">—</Placeholder>,
              <Placeholder key="e">—</Placeholder>,
              <Placeholder key="n">—</Placeholder>,
            ])}
          />
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Archivo fuente enlazado" description="" />
          <p className="text-[14px] leading-[21px]">
            <Placeholder>Link al archivo fuente correspondiente.</Placeholder>
          </p>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Reglas de copy por formato" description="" />
          <p className="text-[14px] leading-[21px]">
            <Placeholder>Reglas documentadas para cada formato.</Placeholder>
          </p>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Ejemplos aprobados" description="" />
          <p className="text-[14px] leading-[21px]">
            <Placeholder>Ejemplos reales aprobados para el proyecto.</Placeholder>
          </p>
        </section>
      </div>

      <MetaFooter label="v1 · RRSS · Templates · Master Template" />
    </div>
  )
}
