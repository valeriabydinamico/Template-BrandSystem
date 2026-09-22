import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Foundations · Color System — 01 Global Colors — plantilla en blanco
 * (master template).
 *
 * Estructura tomada de "Foundations — Estructura de presentación v2" (sección
 * "Sistema de color" → 01. Global Colors / Colores globales). Documenta las
 * primitives del sistema: grupos/familias con sus tonos, y colores puntuales
 * que no forman una escala. Nombre + HEX son los únicos campos obligatorios
 * definidos por la guía — sin datos de marca todavía: contenido placeholder.
 * ────────────────────────────────────────────────────────────────────────── */

const TH =
  'px-[14px] py-[12px] text-left font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]'
const TD = 'px-[14px] py-[12px] align-top text-[13px] leading-[19px] text-[#1c212b]'

function Placeholder({ children }: { children: ReactNode }) {
  return <span className="font-normal italic text-[#8a94a8]">{children}</span>
}

function Table({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return (
    <div className="w-full overflow-x-auto rounded-[12px] border border-[#d5dadf]">
      <table className="w-full min-w-[420px] border-collapse">
        <thead>
          <tr className="border-b border-[#d5dadf] bg-[#f4f5f7]">
            {headers.map((h) => (
              <th key={h} className={TH}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[#e3e7ec] last:border-b-0">
              {row.map((cell, j) => (
                <td key={j} className={TD}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ToneSwatch() {
  return (
    <div className="flex size-[40px] shrink-0 items-center justify-center rounded-[10px] border border-dashed border-[#c4c9d4] bg-[#f7f8fa]" />
  )
}

function ToneRow({ index }: { index: number }) {
  return (
    <div className="flex w-full items-center gap-[12px] rounded-[10px] bg-[#f7f9fb] p-[10px]">
      <ToneSwatch />
      <div className="flex flex-1 flex-col gap-[2px]">
        <p className="text-[13px] font-medium leading-[18px] text-[#2f3945]">
          <Placeholder>Nombre del tono {index}</Placeholder>
        </p>
        <p className="font-mono text-[12px] leading-[16px] text-[#8a94a8]">
          <Placeholder>#HEXHEX</Placeholder>
        </p>
      </div>
    </div>
  )
}

function GroupCard({ index }: { index: number }) {
  return (
    <div className="flex w-full flex-col gap-[16px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
      <div className="flex flex-col gap-[4px]">
        <p className="text-[18px] font-bold leading-[24px] text-[#1c212b]">
          <Placeholder>Título del grupo {index}</Placeholder>
        </p>
        <p className="text-[14px] leading-[21px]">
          <Placeholder>Descripción del grupo: qué representa y en qué contexto se usa.</Placeholder>
        </p>
      </div>
      <div className="grid grid-cols-1 gap-[8px] min-[900px]:grid-cols-2">
        {[1, 2, 3].map((i) => (
          <ToneRow key={i} index={i} />
        ))}
      </div>
    </div>
  )
}

export function GlobalColorsPage() {
  return (
    <div id="color.global-colors" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Color System"
        title="01 Global Colors"
        paragraphs={[
          'Los colores globales son los colores base del sistema: primario, secundarios, terciarios/acentos, neutros, estados semánticos y degradados, según lo documentado para cada proyecto.',
        ]}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[80px]">
        {/* Grupos / familias */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader
            title="Grupos o familias"
            description="Cuando existen grupos o familias: título del grupo, descripción y sus tonos (nombre + HEX)."
          />
          <div className="grid grid-cols-1 gap-[16px] min-[1100px]:grid-cols-2">
            {[1, 2].map((i) => (
              <GroupCard key={i} index={i} />
            ))}
          </div>
        </section>

        {/* Colores puntuales */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader
            title="Colores puntuales"
            description="Cuando existen colores puntuales que no forman una escala: nombre + HEX."
          />
          <Table
            headers={['Nombre', 'HEX']}
            rows={[1, 2].map((i) => [
              <Placeholder key="n">Color puntual {i}</Placeholder>,
              <Placeholder key="h">#HEXHEX</Placeholder>,
            ])}
          />
        </section>
      </div>

      <MetaFooter label="v1 · 01 Global Colors · Color System · Master Template" />
    </div>
  )
}
