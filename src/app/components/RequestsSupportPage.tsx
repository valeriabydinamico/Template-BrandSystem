import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Brand Ops · Requests & Support — plantilla en blanco (master template).
 *
 * Estructura tomada de "Brand Ops — Estructura de presentación" (sección
 * "Requests & Support"): tipos de solicitud, canal de soporte, tiempos de
 * respuesta, priorización y estado de solicitudes — todo en una sola página.
 * ────────────────────────────────────────────────────────────────────────── */

function Placeholder({ children }: { children: ReactNode }) {
  return <span className="font-normal italic text-[#8a94a8]">{children}</span>
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-[4px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
      <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">{label}</p>
      <p className="text-[14px] leading-[21px]">
        <Placeholder>{children}</Placeholder>
      </p>
    </div>
  )
}

const TIPOS = [
  'Solicitud de nuevos componentes',
  'Solicitud de nuevos templates',
  'Solicitud de cambios estratégicos',
  'Reporte de inconsistencias',
  'Preguntas frecuentes',
]

export function RequestsSupportPage() {
  return (
    <div id="brand-ops.requests-support" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Brand Ops"
        title="Requests & Support"
        paragraphs={['El canal y las reglas para pedir cambios, soporte o nuevas necesidades al sistema.']}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Tipos de solicitud" description="" />
          <div className="flex w-full flex-wrap gap-[8px]">
            {TIPOS.map((t) => (
              <span key={t} className="rounded-[999px] border border-[#bac2cf] bg-white px-[14px] py-[8px] text-[13px]">
                {t}
              </span>
            ))}
          </div>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <div className="grid grid-cols-1 gap-[16px] min-[900px]:grid-cols-2">
            <Field label="Canal de soporte">Slack / mail / formulario.</Field>
            <Field label="Tiempos de respuesta">SLA por tipo.</Field>
          </div>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Priorización" description="Debe utilizarse únicamente si ese es el criterio aprobado para el proyecto." />
          <Field label="Criterio">Impacto × frecuencia de uso.</Field>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader
            title="Estado de cada solicitud"
            description="Debe permitir consultar o entender el estado de las solicitudes cuando exista esa fuente."
          />
          <Field label="Fuente de referencia">DB Solicitudes al sistema.</Field>
        </section>
      </div>

      <MetaFooter label="v1 · Requests & Support · Brand Ops · Master Template" />
    </div>
  )
}
