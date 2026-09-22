import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Foundations · Motion Principles — plantilla en blanco (master template).
 *
 * Estructura tomada de "Foundations — Estructura de presentación v2" (sección
 * "Motion Principles"): principios de movimiento y aplicación por contexto —
 * todo en una sola página, sin subpáginas.
 * ────────────────────────────────────────────────────────────────────────── */

function Placeholder({ children }: { children: ReactNode }) {
  return <span className="font-normal italic text-[#8a94a8]">{children}</span>
}

const PRINCIPIOS = [
  'Personalidad del movimiento',
  'Velocidad',
  'Transiciones',
  'Entrada y salida',
  'Feedback',
  'Loading',
  'Microinteracciones',
]

const APLICACION = ['Motion en producto', 'Motion en campañas', 'Motion en video', 'Motion de logo', 'Qué evitar']

function PrincipleCard({ title }: { title: string }) {
  return (
    <div className="flex w-full flex-col gap-[8px] rounded-[16px] border border-[#bac2cf] bg-white p-[20px]">
      <p className="font-bold text-[16px] leading-[20px] text-[#1c212b]">{title}</p>
      <p className="text-[13px] leading-[19px]">
        <Placeholder>Definición para el proyecto.</Placeholder>
      </p>
    </div>
  )
}

export function MotionPrinciplesPage() {
  return (
    <div id="foundations.motion-principles" className="flex w-full flex-col items-start bg-white">
      <PageHeader module="Foundations" title="Motion Principles" paragraphs={['Cómo se mueve la marca.']} />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="Principios" description="" />
          <div className="grid grid-cols-1 gap-[16px] min-[700px]:grid-cols-2 min-[1200px]:grid-cols-3">
            {PRINCIPIOS.map((p) => (
              <PrincipleCard key={p} title={p} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-[16px] min-[900px]:grid-cols-2">
            <div className="flex flex-col gap-[4px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
              <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">
                Duración
              </p>
              <p className="text-[14px] leading-[21px]">
                <Placeholder>000 ms</Placeholder>
              </p>
            </div>
            <div className="flex flex-col gap-[4px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
              <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">
                Easing
              </p>
              <p className="text-[14px] leading-[21px]">
                <Placeholder>Curva / valor</Placeholder>
              </p>
            </div>
          </div>
          <p className="text-[13px] italic leading-[19px] text-[#8a94a8]">No inventar valores técnicos.</p>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Aplicación" description="" />
          <div className="flex w-full flex-wrap gap-[8px]">
            {APLICACION.map((a) => (
              <span key={a} className="rounded-[999px] border border-[#bac2cf] bg-white px-[14px] py-[8px] text-[13px]">
                {a}
              </span>
            ))}
          </div>
        </section>
      </div>

      <MetaFooter label="v1 · Motion Principles · Foundations · Master Template" />
    </div>
  )
}
