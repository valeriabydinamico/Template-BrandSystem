import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { Note } from './Note'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Components · Cards — plantilla en blanco (master template).
 *
 * Estructura tomada de "Components — Estructura de presentación v2" (sección
 * "Cards"): tipos de card, anatomía/variantes, estados y Do/Don't — todo en
 * una sola página.
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

const TIPOS = ['Content card', 'Product card', 'Service card', 'Feature card', 'Editorial card', 'Media card', 'Pricing card']

const ESTADOS = ['hover', 'seleccionada']

export function CardsPage() {
  return (
    <div id="components.cards" className="flex w-full flex-col items-start bg-white">
      <PageHeader module="Components" title="Cards" paragraphs={['Cómo se empaqueta información en unidades escaneables.']} />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Tipos de card" description="" />
          <Table
            headers={['Card', 'Contenido obligatorio', 'Uso']}
            rows={TIPOS.map((t) => [t, <Placeholder key="c">—</Placeholder>, <Placeholder key="u">—</Placeholder>])}
          />
          <Note>
            La guía todavía no define cuáles son los campos obligatorios de cada card. No deben inventarse. Se
            completarán cuando exista contenido real o cuando el componente correspondiente defina esos
            requisitos.
          </Note>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Anatomía y variantes" description="" />
          <p className="text-[14px] leading-[21px]">
            <Placeholder>Anatomía y variantes definidas para cada tipo de card.</Placeholder>
          </p>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Estados" description="" />
          <div className="flex w-full flex-wrap gap-[8px]">
            {ESTADOS.map((e) => (
              <span key={e} className="rounded-[999px] border border-[#bac2cf] bg-white px-[14px] py-[8px] text-[13px]">
                {e}
              </span>
            ))}
          </div>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Do / Don't" description="" />
          <Note>Mostrar usos correctos e incorrectos cuando exista documentación.</Note>
        </section>
      </div>

      <MetaFooter label="v1 · Cards · Components · Master Template" />
    </div>
  )
}
