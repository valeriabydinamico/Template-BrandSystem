import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { Note } from './Note'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Brand Ops · Training & Adoption — plantilla en blanco (master template).
 *
 * Estructura tomada de "Brand Ops — Estructura de presentación" (sección
 * "Training & Adoption"): capacitación/adopción y material por área — todo
 * en una sola página.
 * ────────────────────────────────────────────────────────────────────────── */

function Placeholder({ children }: { children: ReactNode }) {
  return <span className="font-normal italic text-[#8a94a8]">{children}</span>
}

const CAPACITACION = [
  'Capacitación inicial',
  'Onboarding de nuevos integrantes',
  'Quick Start Guide',
  'Sesiones por equipo',
  'Grabaciones',
  'Ejercicios prácticos',
  'Guías de uso',
]

const AREAS = ['Diseño', 'Marketing', 'Producto', 'RRHH y Operaciones']

export function TrainingAdoptionPage() {
  return (
    <div id="brand-ops.training-adoption" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Brand Ops"
        title="Training & Adoption"
        paragraphs={['Cómo el equipo aprende a usar el sistema.']}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Capacitación y adopción" description="" />
          <div className="flex w-full flex-wrap gap-[8px]">
            {CAPACITACION.map((c) => (
              <span key={c} className="rounded-[999px] border border-[#bac2cf] bg-white px-[14px] py-[8px] text-[13px]">
                {c}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-[16px] min-[900px]:grid-cols-2">
            <div className="flex flex-col gap-[4px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
              <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">
                Quick Start Guide
              </p>
              <p className="text-[14px] leading-[21px]">
                <Placeholder>Link</Placeholder>
              </p>
            </div>
            <div className="flex flex-col gap-[4px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
              <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">
                Grabaciones
              </p>
              <p className="text-[14px] leading-[21px]">
                <Placeholder>Link</Placeholder>
              </p>
            </div>
          </div>
          <Note>Los links deben mostrarse únicamente cuando existan recursos reales.</Note>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader
            title="Material por área"
            description="Cada área puede mostrar los recursos que realmente tenga disponibles."
          />
          <div className="grid grid-cols-1 gap-[16px] min-[700px]:grid-cols-2 min-[1200px]:grid-cols-4">
            {AREAS.map((a) => (
              <div key={a} className="flex flex-col gap-[8px] rounded-[16px] border border-[#bac2cf] bg-white p-[20px]">
                <p className="font-bold text-[16px] leading-[20px] text-[#1c212b]">{a}</p>
                <p className="text-[13px] leading-[19px]">
                  <Placeholder>Recursos disponibles para esta área.</Placeholder>
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <MetaFooter label="v1 · Training & Adoption · Brand Ops · Master Template" />
    </div>
  )
}
