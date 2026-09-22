import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Components · Content Blocks — plantilla en blanco (master template).
 *
 * Estructura tomada de "Components — Estructura de presentación v2" (sección
 * "Content Blocks"): bloques disponibles y reglas transversales — todo en una
 * sola página.
 * ────────────────────────────────────────────────────────────────────────── */

function Placeholder({ children }: { children: ReactNode }) {
  return <span className="font-normal italic text-[#8a94a8]">{children}</span>
}

const BLOQUES = [
  'Cuestionario',
  'Hero',
  'Intro block',
  'Text block',
  'Image + text',
  'Feature block',
  'Quote block',
  'Testimonial',
  'Statistic block',
  'Callout',
  'Announcement block',
  'CTA block',
  'Footer block',
  'Editorial block',
]

const REGLAS = [
  { title: 'Anatomía y variantes por bloque', body: 'Anatomía y variantes definidas para cada bloque.' },
  { title: 'Jerarquía de contenido', body: 'Cómo se organiza el contenido dentro de cada bloque.' },
  { title: 'Combinaciones recomendadas', body: 'Qué bloques pueden combinarse y cómo.' },
]

export function ContentBlocksPage() {
  return (
    <div id="components.content-blocks" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Components"
        title="Content Blocks"
        paragraphs={['Los bloques con los que se arma cualquier página o pieza.']}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Bloques disponibles" description="" />
          <div className="flex w-full flex-wrap gap-[8px]">
            {BLOQUES.map((b) => (
              <span key={b} className="rounded-[999px] border border-[#bac2cf] bg-white px-[14px] py-[8px] text-[13px]">
                {b}
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
        </section>
      </div>

      <MetaFooter label="v1 · Content Blocks · Components · Master Template" />
    </div>
  )
}
