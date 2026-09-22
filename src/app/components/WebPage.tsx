import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Templates · Web — plantilla en blanco (master template).
 *
 * Estructura tomada de "Templates — Estructura de presentación" (sección
 * "Web"): páginas y estados contemplados, y reglas — todo en una sola
 * página.
 * ────────────────────────────────────────────────────────────────────────── */

function Placeholder({ children }: { children: ReactNode }) {
  return <span className="font-normal italic text-[#8a94a8]">{children}</span>
}

const PAGINAS = [
  'Landing page',
  'Homepage',
  'Product page',
  'Service page',
  'About page',
  'Pricing page',
  'Contact page',
  'Blog / article page',
  'Case study',
  'FAQ',
  'Checkout o conversión',
  'Error page',
  'Empty state',
  'Banners web',
  'Pop-ups y modals',
]

export function WebPage() {
  return (
    <div id="templates.web" className="flex w-full flex-col items-start bg-white">
      <PageHeader module="Templates" title="Web" paragraphs={['Las páginas tipo y su orden de bloques.']} />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Páginas y estados contemplados" description="" />
          <div className="flex w-full flex-wrap gap-[8px]">
            {PAGINAS.map((p) => (
              <span key={p} className="rounded-[999px] border border-[#bac2cf] bg-white px-[14px] py-[8px] text-[13px]">
                {p}
              </span>
            ))}
          </div>
        </section>

        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="Reglas" description="" />
          <div className="flex flex-col gap-[4px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
            <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">
              Orden estándar de bloques por tipo de página
            </p>
            <p className="text-[14px] leading-[21px]">
              <Placeholder>Orden definido para cada tipo de página.</Placeholder>
            </p>
          </div>

          <div className="flex w-full flex-col items-start gap-[16px] rounded-[32px] bg-[#0f1e33] px-[40px] py-[48px]">
            <span className="font-bold text-[40px] leading-none text-[#4f8fd6]">&ldquo;</span>
            <p className="font-medium text-[22px] italic leading-[32px] tracking-[-0.2px] text-[#c7d2e0]">
              Un solo CTA principal por pantalla.
            </p>
          </div>

          <div className="flex flex-col gap-[4px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
            <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">
              Comportamiento responsive
            </p>
            <p className="text-[14px] leading-[21px]">
              <Placeholder>Comportamiento responsive documentado.</Placeholder>
            </p>
          </div>
        </section>
      </div>

      <MetaFooter label="v1 · Web · Templates · Master Template" />
    </div>
  )
}
