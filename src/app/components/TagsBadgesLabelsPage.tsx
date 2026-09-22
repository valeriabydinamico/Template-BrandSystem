import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { Note } from './Note'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Components · Tags, Badges & Labels — plantilla en blanco (master template).
 *
 * Estructura tomada de "Components — Estructura de presentación v2" (sección
 * "Tags, Badges & Labels"): tipos y reglas — todo en una sola página.
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

const TIPOS = [
  'Tag',
  'Badge',
  'Status badge',
  'Category label',
  'New label',
  'Featured label',
  'Pricing label',
  'Campaign label',
  'Beta label',
]

export function TagsBadgesLabelsPage() {
  return (
    <div id="components.tags-badges-labels" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Components"
        title="Tags, Badges & Labels"
        paragraphs={['Cómo se etiqueta y comunica estado o categoría.']}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Tipos" description="" />
          <div className="flex w-full flex-wrap gap-[8px]">
            {TIPOS.map((t) => (
              <span key={t} className="rounded-[999px] border border-[#bac2cf] bg-white px-[14px] py-[8px] text-[13px]">
                {t}
              </span>
            ))}
          </div>
        </section>

        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="Reglas" description="" />
          <div className="grid grid-cols-1 gap-[16px] min-[900px]:grid-cols-2 rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
            <Field label="Significado de cada color">Mapa color → significado.</Field>
            <Field label="Máximo de etiquetas por pieza">Cantidad máxima documentada.</Field>
            <Field label="Reglas de copy — longitud">Longitud documentada para el proyecto.</Field>
            <Field label="Reglas de copy — mayúsculas">Criterio documentado para el proyecto.</Field>
          </div>
          <Note>No inventar cantidades, mapas de color ni reglas de copy que no estén documentadas.</Note>
        </section>
      </div>

      <MetaFooter label="v1 · Tags, Badges & Labels · Components · Master Template" />
    </div>
  )
}
