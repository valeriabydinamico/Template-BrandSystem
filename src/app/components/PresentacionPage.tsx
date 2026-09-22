import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Templates · Presentación — plantilla en blanco (master template).
 *
 * Estructura tomada de "Templates — Estructura de presentación" (sección
 * "Presentación"): slides base y reglas — todo en una sola página.
 * ────────────────────────────────────────────────────────────────────────── */

function Placeholder({ children }: { children: ReactNode }) {
  return <span className="font-normal italic text-[#8a94a8]">{children}</span>
}

const SLIDES = [
  'Portada',
  'Agenda',
  'Contexto',
  'Problema',
  'Insight',
  'Solución',
  'Proceso',
  'Datos',
  'Caso',
  'Próximos pasos',
  'CTA',
  'Cierre',
]

const REGLAS = [
  { title: 'Master de slides creado', body: 'Referencia o estado del master de slides.' },
  { title: 'Estilos de gráfico y tabla', body: 'Estilos definidos para gráficos y tablas.' },
  { title: 'Versión interna y versión cliente', body: 'Diferencias o criterios documentados entre ambas versiones.' },
]

export function PresentacionPage() {
  return (
    <div id="templates.presentacion" className="flex w-full flex-col items-start bg-white">
      <PageHeader module="Templates" title="Presentación" paragraphs={['El deck de marca y su narrativa estándar.']} />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Slides base" description="Base estructural del deck." />
          <div className="flex w-full flex-wrap gap-[8px]">
            {SLIDES.map((s) => (
              <span key={s} className="rounded-[999px] border border-[#bac2cf] bg-white px-[14px] py-[8px] text-[13px]">
                {s}
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

      <MetaFooter label="v1 · Presentación · Templates · Master Template" />
    </div>
  )
}
