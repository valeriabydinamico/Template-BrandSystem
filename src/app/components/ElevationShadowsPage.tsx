import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Foundations · Elevation & Shadows — plantilla en blanco (master template).
 *
 * Estructura tomada de "Foundations — Estructura de presentación v2" (sección
 * "Elevation & Shadows"): niveles de elevación y el resto del contenido
 * (blur, opacidad, offset, superficies, cuándo no usar sombras) — todo en una
 * sola página, sin subpáginas.
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

const NIVELES = ['elevation/1', 'elevation/2', 'elevation/3']
const NIVEL_USO: Record<string, string> = {
  'elevation/1': 'Cards',
  'elevation/2': 'Dropdowns',
  'elevation/3': 'Modals',
}

const SUPERFICIES = ['Cards', 'Modals', 'Dropdowns', 'Floating elements']

export function ElevationShadowsPage() {
  return (
    <div id="foundations.elevation-shadows" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Foundations"
        title="Elevation & Shadows"
        paragraphs={['Cómo se expresa la profundidad y la jerarquía de superficies.']}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader
            title="Niveles de elevación"
            description="Los niveles y valores deben corresponder al sistema real del proyecto."
          />
          <Table
            headers={['Nivel', 'Blur', 'Offset', 'Opacidad', 'Se aplica en']}
            rows={NIVELES.map((n) => [
              n,
              <Placeholder key="b">00</Placeholder>,
              <Placeholder key="o">00</Placeholder>,
              <Placeholder key="p">00%</Placeholder>,
              NIVEL_USO[n],
            ])}
          />
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Aplicación por superficie" description="" />
          <div className="flex w-full flex-wrap gap-[8px]">
            {SUPERFICIES.map((s) => (
              <span key={s} className="rounded-[999px] border border-[#bac2cf] bg-white px-[14px] py-[8px] text-[13px]">
                {s}
              </span>
            ))}
          </div>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Cuándo no usar sombras" description="" />
          <p className="text-[14px] leading-[21px]">
            <Placeholder>Criterio documentado para el proyecto.</Placeholder>
          </p>
        </section>
      </div>

      <MetaFooter label="v1 · Elevation & Shadows · Foundations · Master Template" />
    </div>
  )
}
