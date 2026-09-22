import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { Note } from './Note'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Components · Navigation — plantilla en blanco (master template).
 *
 * Estructura tomada de "Components — Estructura de presentación v2" (sección
 * "Navigation"): componentes de navegación y reglas — todo en una sola
 * página.
 * ────────────────────────────────────────────────────────────────────────── */

function Placeholder({ children }: { children: ReactNode }) {
  return <span className="font-normal italic text-[#8a94a8]">{children}</span>
}

const COMPONENTES = [
  'Header',
  'Main navigation',
  'Secondary navigation',
  'Footer',
  'Tabs',
  'Breadcrumbs',
  'Pagination',
  'Menu',
  'Mobile navigation',
  'Anchor navigation',
]

const REGLAS = [
  { title: 'Estados activos y hover', body: 'Estados definidos para navegación.' },
  { title: 'Comportamiento responsive', body: 'Reglas responsive documentadas.' },
  { title: 'Máximo de niveles de profundidad', body: 'Cantidad o criterio documentado.' },
]

export function NavigationPage() {
  return (
    <div id="components.navigation" className="flex w-full flex-col items-start bg-white">
      <PageHeader module="Components" title="Navigation" paragraphs={['Cómo se orienta el usuario dentro de la marca.']} />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Componentes de navegación" description="" />
          <div className="flex w-full flex-wrap gap-[8px]">
            {COMPONENTES.map((c) => (
              <span key={c} className="rounded-[999px] border border-[#bac2cf] bg-white px-[14px] py-[8px] text-[13px]">
                {c}
              </span>
            ))}
          </div>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Reglas" description="" />
          <div className="grid grid-cols-1 gap-[16px] min-[900px]:grid-cols-3">
            {REGLAS.map((r) => (
              <div key={r.title} className="flex flex-col gap-[8px] rounded-[16px] border border-[#bac2cf] bg-white p-[20px]">
                <p className="font-bold text-[16px] leading-[20px] text-[#1c212b]">{r.title}</p>
                <p className="text-[13px] leading-[19px]">
                  <Placeholder>{r.body}</Placeholder>
                </p>
              </div>
            ))}
          </div>
          <Note>No inventar valores cuando todavía no estén definidos.</Note>
        </section>
      </div>

      <MetaFooter label="v1 · Navigation · Components · Master Template" />
    </div>
  )
}
