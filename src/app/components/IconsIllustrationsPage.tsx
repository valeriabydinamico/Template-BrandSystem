import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Components · Icons & Illustrations — plantilla en blanco (master template).
 *
 * Estructura tomada de "Components — Estructura de presentación v2" (sección
 * "Icons & Illustrations"): escalas y reglas — todo en una sola página.
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

const ESCALAS: { escala: string; tipo: string; uso: string }[] = [
  { escala: 'Small', tipo: 'UI icons', uso: 'Interfaz' },
  { escala: 'Small', tipo: 'Social icons', uso: 'Redes' },
  { escala: 'Medium', tipo: 'Pictogramas', uso: 'Explicativo' },
  { escala: 'Large', tipo: 'Ilustraciones', uso: 'Narrativo' },
  { escala: 'Large', tipo: 'Personajes', uso: 'Humanizar' },
  { escala: 'Extra large', tipo: 'Ilustración decorativa', uso: 'Campaña' },
]

const REGLAS = [
  { title: 'Estilo de trazo y relleno', body: 'Reglas documentadas.' },
  { title: 'Reglas de color por escala', body: 'Reglas documentadas.' },
  { title: 'Librería y naming', body: 'Sistema de librería y nomenclatura documentado.' },
  { title: 'Qué evitar', body: 'Usos incorrectos documentados.' },
]

export function IconsIllustrationsPage() {
  return (
    <div id="components.icons-illustrations" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Components"
        title="Icons & Illustrations"
        paragraphs={['El lenguaje gráfico por escala, desde iconos UI hasta ilustraciones de campaña.']}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader
            title="Escalas"
            description="Los tamaños funcionan como placeholders hasta que exista información real del proyecto."
          />
          <Table
            headers={['Escala', 'Tipo', 'Grid / tamaño', 'Uso']}
            rows={ESCALAS.map((e) => [e.escala, e.tipo, <Placeholder key="g">—</Placeholder>, e.uso])}
          />
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <div className="grid grid-cols-1 gap-[16px] min-[900px]:grid-cols-2">
            {REGLAS.map((r) => (
              <div key={r.title} className="flex flex-col gap-[8px] rounded-[16px] border border-[#bac2cf] bg-white p-[20px]">
                <p className="font-bold text-[16px] leading-[20px] text-[#1c212b]">{r.title}</p>
                <p className="text-[13px] leading-[19px]">
                  <Placeholder>{r.body}</Placeholder>
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <MetaFooter label="v1 · Icons & Illustrations · Components · Master Template" />
    </div>
  )
}
