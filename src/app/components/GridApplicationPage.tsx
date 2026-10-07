import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { SectionHeader } from './docs/shared'
import layoutGridsBadgeIcon from '@/assets/layout-grids-badge-icon.svg'

/* ────────────────────────────────────────────────────────────────────────────
 * Foundations · Layout & Grid — 02 Grid Application — plantilla en blanco
 * (master template).
 *
 * Estructura tomada de "Foundations — Estructura de presentación v2" (sección
 * "Layout & Grid"): grids por contexto y reglas de composición. La parte
 * estructural (grid principal, breakpoints, responsive, jerarquía espacial)
 * vive en Grid System — ver `GridSystemPage.tsx`.
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

const CONTEXTOS = ['Web', 'Producto', 'Presentación', 'RRSS']

export function GridApplicationPage() {
  return (
    <div id="grids.application" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Layout Grids"
        moduleIconSrc={layoutGridsBadgeIcon}
        title="Grid Application"
        paragraphs={['Grids por contexto de uso y reglas de composición.']}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader
            title="Grids por contexto"
            description="Los valores funcionan como placeholders hasta que exista información real del proyecto."
          />
          <Table
            headers={['Contexto', 'Columnas', 'Gutter', 'Márgenes', 'Ancho máx.']}
            rows={CONTEXTOS.map((c) => [
              c,
              <Placeholder key="c">—</Placeholder>,
              <Placeholder key="g">—</Placeholder>,
              <Placeholder key="m">—</Placeholder>,
              <Placeholder key="a">—</Placeholder>,
            ])}
          />
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Reglas de composición" description="" />
          <p className="text-[14px] leading-[21px]">
            <Placeholder>Criterios de composición sobre la grilla definidos para el proyecto.</Placeholder>
          </p>
        </section>
      </div>

      <MetaFooter label="v1 · Grid Application · Layout & Grid · Master Template" />
    </div>
  )
}
