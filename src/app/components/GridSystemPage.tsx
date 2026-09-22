import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { SectionHeader } from './docs/shared'
import layoutGridsBadgeIcon from '@/assets/layout-grids-badge-icon.svg'

/* ────────────────────────────────────────────────────────────────────────────
 * Foundations · Layout & Grid — 01 Grid System — plantilla en blanco (master
 * template).
 *
 * Estructura tomada de "Foundations — Estructura de presentación v2" (sección
 * "Layout & Grid"): la parte estructural de la grilla — grid principal,
 * contenedores y anchos máximos, breakpoints, responsive behavior y
 * alineación/jerarquía espacial. Las tablas por contexto y las reglas de
 * composición viven en Grid Application — ver `GridApplicationPage.tsx`.
 * ────────────────────────────────────────────────────────────────────────── */

function Placeholder({ children }: { children: ReactNode }) {
  return <span className="font-normal italic text-[#8a94a8]">{children}</span>
}

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex w-full flex-col gap-[8px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
      <p className="font-bold text-[18px] leading-[22px] text-[#1c212b]">{title}</p>
      <p className="text-[14px] leading-[21px]">
        <Placeholder>{children}</Placeholder>
      </p>
    </div>
  )
}

const BREAKPOINTS = ['Mobile', 'Tablet', 'Desktop']

export function GridSystemPage() {
  return (
    <div id="grids.system" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Layout Grids"
        moduleIconSrc={layoutGridsBadgeIcon}
        title="01 Grid System"
        paragraphs={['Estructura sobre la que se compone el sistema: grid principal, contenedores, breakpoints y comportamiento responsive.']}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Grid principal" description="" />
          <Card title="Grid principal">Descripción del grid principal del sistema.</Card>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Contenedores y anchos máximos" description="" />
          <Card title="Contenedores y anchos máximos">Descripción de contenedores y sus anchos máximos.</Card>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Breakpoints" description="" />
          <div className="grid grid-cols-1 gap-[12px] min-[700px]:grid-cols-3">
            {BREAKPOINTS.map((bp) => (
              <div key={bp} className="flex flex-col gap-[4px] rounded-[16px] border border-[#bac2cf] bg-white p-[20px]">
                <p className="font-bold text-[16px] leading-[20px] text-[#1c212b]">{bp}</p>
                <p className="text-[13px]">
                  <Placeholder>Ancho de referencia</Placeholder>
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Responsive behavior" description="" />
          <Card title="Responsive behavior">Cómo se comporta la grilla al cambiar de breakpoint.</Card>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Alineación y jerarquía espacial" description="" />
          <Card title="Alineación y jerarquía espacial">Criterios de alineación y jerarquía espacial del sistema.</Card>
        </section>
      </div>

      <MetaFooter label="v1 · 01 Grid System · Layout & Grid · Master Template" />
    </div>
  )
}
