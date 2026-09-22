import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Brand Ops · Health & Evolution — plantilla en blanco (master template).
 *
 * Estructura tomada de "Brand Ops — Estructura de presentación" (sección
 * "Health & Evolution"): métricas y seguimiento del sistema — todo en una
 * sola página.
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

const METRICAS = ['Nivel de adopción', 'Consistencia de marca', 'Componentes más usados', 'Problemas recurrentes']

const SEGUIMIENTO = [
  'Auditorías de marca',
  'Revisión de consistencia',
  'Componentes más utilizados',
  'Templates más utilizados',
  'Problemas recurrentes',
  'Nivel de adopción',
  'Cambios realizados',
  'Prioridades futuras',
  'Roadmap de evolución',
  'Reporte periódico de Brand Health',
]

export function HealthEvolutionPage() {
  return (
    <div id="brand-ops.health-evolution" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Brand Ops"
        title="Health & Evolution"
        paragraphs={['Cómo se mide si el sistema está vivo, sano y evolucionando correctamente.']}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader
            title="Métricas"
            description="Los métodos y frecuencias funcionan como campos a completar con la información real del proyecto."
          />
          <Table
            headers={['Métrica', 'Cómo se mide', 'Frecuencia']}
            rows={METRICAS.map((m) => [m, <Placeholder key="c">—</Placeholder>, <Placeholder key="f">—</Placeholder>])}
          />
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Seguimiento del sistema" description="" />
          <div className="flex w-full flex-wrap gap-[8px]">
            {SEGUIMIENTO.map((s) => (
              <span key={s} className="rounded-[999px] border border-[#bac2cf] bg-white px-[14px] py-[8px] text-[13px]">
                {s}
              </span>
            ))}
          </div>
        </section>
      </div>

      <MetaFooter label="v1 · Health & Evolution · Brand Ops · Master Template" />
    </div>
  )
}
