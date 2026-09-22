import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Foundations · Spacing System — plantilla en blanco (master template).
 *
 * Estructura tomada de "Foundations — Estructura de presentación v2" (sección
 * "Spacing System"): unidad base + escala, y aplicación (padding, margin,
 * gap, separaciones, reglas de consistencia, usos incorrectos) — todo en una
 * sola página, sin subpáginas.
 * ────────────────────────────────────────────────────────────────────────── */

function Placeholder({ children }: { children: ReactNode }) {
  return <span className="font-normal italic text-[#8a94a8]">{children}</span>
}

const APLICACION = [
  'Padding',
  'Margin',
  'Gap',
  'Separación entre secciones',
  'Separación entre elementos',
  'Espaciado interno de componentes',
  'Espaciado en layouts',
  'Reglas de consistencia',
  'Usos incorrectos',
]

function ApplicationCard({ title }: { title: string }) {
  return (
    <div className="flex w-full flex-col gap-[8px] rounded-[16px] border border-[#bac2cf] bg-white p-[20px]">
      <p className="font-bold text-[16px] leading-[20px] text-[#1c212b]">{title}</p>
      <p className="text-[13px] leading-[19px]">
        <Placeholder>Cómo se aplica el spacing en este caso.</Placeholder>
      </p>
    </div>
  )
}

export function SpacingSystemPage() {
  return (
    <div id="foundations.spacing-system" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Foundations"
        title="Spacing System"
        paragraphs={['El ritmo del sistema: cuánto espacio existe entre elementos, componentes y secciones.']}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="Escala" description="" />
          <div className="grid grid-cols-1 gap-[16px] min-[900px]:grid-cols-2">
            <div className="flex flex-col gap-[4px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
              <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">
                Unidad base
              </p>
              <p className="text-[16px] leading-[24px]">
                <Placeholder>4 / 8 px</Placeholder>
              </p>
              <p className="text-[13px] leading-[19px] text-[#8a94a8]">
                Utilizar únicamente la unidad real definida para el proyecto.
              </p>
            </div>
            <div className="flex flex-col gap-[4px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
              <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">
                Escala de spacing
              </p>
              <p className="font-mono text-[15px] leading-[24px] text-[#1c212b]">
                2 · 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64
              </p>
              <p className="text-[13px] leading-[19px] text-[#8a94a8]">
                Referencia metodológica: no debe asumirse como valor final si el proyecto usa otra escala.
              </p>
            </div>
          </div>
        </section>

        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="Aplicación" description="" />
          <div className="grid grid-cols-1 gap-[16px] min-[700px]:grid-cols-2 min-[1200px]:grid-cols-3">
            {APLICACION.map((a) => (
              <ApplicationCard key={a} title={a} />
            ))}
          </div>
        </section>
      </div>

      <MetaFooter label="v1 · Spacing System · Foundations · Master Template" />
    </div>
  )
}
