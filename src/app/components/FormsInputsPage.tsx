import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { Note } from './Note'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Components · Forms & Inputs — plantilla en blanco (master template).
 *
 * Estructura tomada de "Components — Estructura de presentación v2" (sección
 * "Forms & Inputs"): componentes, estados/validación, mensajes y
 * accesibilidad — todo en una sola página.
 * ────────────────────────────────────────────────────────────────────────── */

function Placeholder({ children }: { children: ReactNode }) {
  return <span className="font-normal italic text-[#8a94a8]">{children}</span>
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex w-full flex-col gap-[4px]">
      <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">{label}</p>
      <p className="text-[14px] leading-[21px]">
        <Placeholder>{children}</Placeholder>
      </p>
    </div>
  )
}

const COMPONENTES = [
  'Text input',
  'Text area',
  'Search input',
  'Select',
  'Checkbox',
  'Radio button',
  'Toggle',
  'Dropdown',
  'Date input',
  'File upload',
  'Form field',
  'Form actions',
]

const ESTADOS = ['default', 'focus', 'filled', 'disabled', 'error', 'success']

export function FormsInputsPage() {
  return (
    <div id="components.forms-inputs" className="flex w-full flex-col items-start bg-white">
      <PageHeader module="Components" title="Forms & Inputs" paragraphs={['Cómo se pide información sin fricción.']} />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Componentes" description="" />
          <div className="flex w-full flex-wrap gap-[8px]">
            {COMPONENTES.map((c) => (
              <span key={c} className="rounded-[999px] border border-[#bac2cf] bg-white px-[14px] py-[8px] text-[13px]">
                {c}
              </span>
            ))}
          </div>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Estados y validación" description="" />
          <div className="flex w-full flex-wrap gap-[8px]">
            {ESTADOS.map((e) => (
              <span key={e} className="rounded-[999px] border border-[#bac2cf] bg-white px-[14px] py-[8px] text-[13px]">
                {e}
              </span>
            ))}
          </div>
        </section>

        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="Mensajes" description="" />
          <div className="grid grid-cols-1 gap-[16px] min-[900px]:grid-cols-2 rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
            <Field label="Mensajes de error">Copy de error.</Field>
            <Field label="Mensajes de ayuda">Copy de ayuda.</Field>
            <Field label="Mensajes de éxito">Copy de éxito.</Field>
            <Field label="Tono">Tono documentado para el proyecto.</Field>
            <Field label="Longitud">Longitud documentada para el proyecto.</Field>
          </div>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Accesibilidad" description="" />
          <div className="grid grid-cols-1 gap-[16px] min-[700px]:grid-cols-2">
            <Field label="Labels">Criterio documentado para el proyecto.</Field>
            <Field label="Focus visible">Criterio documentado para el proyecto.</Field>
          </div>
          <Note>No agregar reglas adicionales si el proyecto no las documenta.</Note>
        </section>
      </div>

      <MetaFooter label="v1 · Forms & Inputs · Components · Master Template" />
    </div>
  )
}
