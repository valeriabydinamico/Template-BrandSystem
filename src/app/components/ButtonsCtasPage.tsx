import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { Note } from './Note'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Components · Buttons & CTAs — plantilla en blanco (master template).
 *
 * Estructura tomada de "Components — Estructura de presentación v2" (sección
 * "Buttons & CTAs"): componentes/jerarquía de acciones, estados, tokens,
 * reglas de copy y Do/Don't — todo en una sola página.
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

const COMPONENTES: { componente: string; uso: string }[] = [
  { componente: 'Primary button', uso: 'Acción principal' },
  { componente: 'Secondary button', uso: 'Acción alterna' },
  { componente: 'Tertiary button', uso: 'Acción de bajo peso' },
  { componente: 'Text link', uso: 'Navegación en texto' },
  { componente: 'Icon button', uso: 'Acciones compactas' },
  { componente: 'CTA group', uso: 'Dos acciones juntas' },
  { componente: 'Download CTA', uso: 'Descargas' },
  { componente: 'External link', uso: 'Sale del sitio' },
  { componente: 'Destructive action', uso: 'Acciones irreversibles' },
]

const ESTADOS = ['default', 'hover', 'active', 'focus', 'disabled', 'loading']

export function ButtonsCtasPage() {
  return (
    <div id="components.buttons-ctas" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Components"
        title="Buttons & CTAs"
        paragraphs={['Cómo se ven y jerarquizan las acciones.']}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader
            title="Componentes"
            description="Los valores de variantes deben reemplazarse únicamente por las variantes reales del proyecto."
          />
          <Table
            headers={['Componente', 'Variantes', 'Cuándo usarlo']}
            rows={COMPONENTES.map((c) => [c.componente, <Placeholder key="v">—</Placeholder>, c.uso])}
          />
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
          <SectionHeader title="Tokens usados" description="" />
          <p className="text-[14px] leading-[21px]">
            <Placeholder>Tokens usados por los componentes.</Placeholder>
          </p>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Reglas de copy del CTA" description="" />
          <p className="text-[14px] leading-[21px]">
            <Placeholder>Reglas de copy documentadas para los CTAs.</Placeholder>
          </p>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Do / Don't" description="" />
          <Note>Mostrar usos correctos e incorrectos cuando exista documentación para el proyecto.</Note>
        </section>
      </div>

      <MetaFooter label="v1 · Buttons & CTAs · Components · Master Template" />
    </div>
  )
}
