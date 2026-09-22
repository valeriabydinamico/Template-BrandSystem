import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { Note } from './Note'
import { SectionHeader } from './docs/shared'
import typeBadgeIcon from '@/assets/type-badge-icon.svg'

/* ────────────────────────────────────────────────────────────────────────────
 * Foundations · Typography System — 01 Typography Foundations — plantilla en
 * blanco (master template).
 *
 * Estructura tomada de "Foundations — Estructura de presentación v2" (sección
 * "Sistema tipográfico" → "Familias"). La Escala y el Uso por contexto viven
 * en Typography System — ver `TypographySystemPage.tsx`.
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

function FamilyCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex w-full flex-col gap-[16px] rounded-[16px] border border-[#b9c3ce] bg-white p-[28px]">
      <h3 className="font-bold text-[22px] leading-[27px] text-[#2f3945]">{title}</h3>
      <div className="flex flex-col gap-[12px]">{children}</div>
    </div>
  )
}

export function TypographyFoundationsPage() {
  return (
    <div id="typography.foundations" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Type System"
        moduleIconSrc={typeBadgeIcon}
        title="01 Typography Foundations"
        paragraphs={['Familias tipográficas de la marca: qué tipografías usa y con qué función.']}
      />

      <div className="flex w-full flex-col gap-[44px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="Familias" description="" />
          <div className="grid grid-cols-1 gap-[16px] min-[1100px]:grid-cols-3">
            <FamilyCard title="Tipografía principal">
              <Field label="Familia">Nombre de la familia tipográfica principal.</Field>
              <Field label="Licencia">Tipo de licencia.</Field>
            </FamilyCard>
            <FamilyCard title="Tipografía secundaria">
              <Field label="Familia">Nombre de la familia tipográfica secundaria.</Field>
            </FamilyCard>
            <FamilyCard title="Tipografía de sustitución">
              <Field label="Fallback web / sistema">Familia de reemplazo para web o sistema.</Field>
            </FamilyCard>
          </div>
          <Note>No agregar familias adicionales si no están documentadas.</Note>
        </section>
      </div>

      <MetaFooter label="v1 · 01 Typography Foundations · Typography System · Master Template" />
    </div>
  )
}
