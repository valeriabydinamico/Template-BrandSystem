import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Foundations · Bordes & Radius — plantilla en blanco (master template).
 *
 * Estructura tomada de "Foundations — Estructura de presentación v2" (sección
 * "Bordes & Radius"): tokens de radius/borde y aplicación por componente —
 * todo en una sola página, sin subpáginas.
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
      <table className="w-full min-w-[560px] border-collapse">
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

const TOKENS = ['radius/sm', 'radius/md', 'radius/lg', 'border/default']

const APLICACION = ['Radios', 'Bordes', 'Contenedores', 'Cards', 'Botones', 'Inputs', 'Badges', 'Chips']

export function BordesRadiusPage() {
  return (
    <div id="foundations.bordes-radius" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Foundations"
        title="Bordes & Radius"
        paragraphs={['La forma de los contenedores del sistema.']}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader
            title="Tokens"
            description="Los valores deben reemplazarse únicamente por datos reales del proyecto."
          />
          <Table
            headers={['Token', 'Valor', 'Se aplica en']}
            rows={TOKENS.map((t) => [
              t,
              <Placeholder key="v">0px</Placeholder>,
              <Placeholder key="u">Dónde se aplica.</Placeholder>,
            ])}
          />
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Aplicación" description="" />
          <div className="flex w-full flex-wrap gap-[8px]">
            {APLICACION.map((a) => (
              <span key={a} className="rounded-[999px] border border-[#bac2cf] bg-white px-[14px] py-[8px] text-[13px]">
                {a}
              </span>
            ))}
          </div>
        </section>
      </div>

      <MetaFooter label="v1 · Bordes & Radius · Foundations · Master Template" />
    </div>
  )
}
