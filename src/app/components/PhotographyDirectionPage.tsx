import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { Note } from './Note'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Foundations · Photography & Direction — plantilla en blanco (master
 * template).
 *
 * Estructura tomada de "Foundations — Estructura de presentación v2" (sección
 * "Photography & Direction", fuente Notion "Photography & image direction"):
 * dirección fotográfica, tipos de fotografía y tratamiento — todo en una sola
 * página, sin subpáginas.
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

const DIRECCION_FIELDS = [
  'Tipo de personas',
  'Tipo de escenarios',
  'Encuadres',
  'Ángulos',
  'Luz',
  'Temperatura de color',
  'Dirección de arte',
]

const TIPOS = ['Producto', 'Lifestyle', 'Institucional', 'Documental']

const TRATAMIENTO = ['Tratamiento de imágenes', 'Recortes', 'Uso de overlays', 'Uso de filtros', 'Qué evitar']

function TypeCard({ tipo }: { tipo: string }) {
  return (
    <div className="flex w-full flex-col gap-[8px] rounded-[16px] border border-[#bac2cf] bg-white p-[20px]">
      <p className="font-bold text-[16px] leading-[20px] text-[#1c212b]">{tipo}</p>
      <p className="text-[13px] leading-[19px]">
        <Placeholder>Reglas o ejemplos cuando exista documentación real.</Placeholder>
      </p>
    </div>
  )
}

export function PhotographyDirectionPage() {
  return (
    <div id="foundations.photography" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Foundations"
        title="Photography & Direction"
        paragraphs={['Cómo se ve la marca cuando representa el mundo real mediante fotografía.']}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Dirección" description="" />
          <div className="flex flex-col gap-[16px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
            <Field label="Estilo fotográfico">Descripción en 2 líneas.</Field>
            <div className="grid grid-cols-1 gap-[12px] min-[900px]:grid-cols-2">
              {DIRECCION_FIELDS.map((f) => (
                <Field key={f} label={f}>
                  Definición para el proyecto.
                </Field>
              ))}
            </div>
          </div>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Tipos de fotografía" description="" />
          <div className="grid grid-cols-1 gap-[16px] min-[700px]:grid-cols-2 min-[1200px]:grid-cols-4">
            {TIPOS.map((t) => (
              <TypeCard key={t} tipo={t} />
            ))}
          </div>
          <Note>No asumir que todos los proyectos utilizarán necesariamente los cuatro tipos.</Note>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Tratamiento" description="" />
          <div className="flex w-full flex-wrap gap-[8px]">
            {TRATAMIENTO.map((t) => (
              <span key={t} className="rounded-[999px] border border-[#bac2cf] bg-white px-[14px] py-[8px] text-[13px]">
                {t}
              </span>
            ))}
          </div>
        </section>
      </div>

      <MetaFooter label="v1 · Photography & Direction · Foundations · Master Template" />
    </div>
  )
}
