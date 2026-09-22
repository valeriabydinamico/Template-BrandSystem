import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { Note } from './Note'
import { SectionHeader } from './docs/shared'
import typeBadgeIcon from '@/assets/type-badge-icon.svg'

/* ────────────────────────────────────────────────────────────────────────────
 * Foundations · Typography System — 02 Typography System — plantilla en
 * blanco (master template).
 *
 * Estructura tomada de "Foundations — Estructura de presentación v2" (sección
 * "Sistema tipográfico" → "Escala" + "Uso por contexto"). Las Familias viven
 * en Typography Foundations — ver `TypographyFoundationsPage.tsx`.
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
      <table className="w-full min-w-[640px] border-collapse">
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

const ESCALA_ROWS = ['Display', 'H1', 'H2', 'Body', 'Caption']
const ESCALA_USO: Record<string, string> = {
  Display: 'Campaña',
  H1: 'Título de página',
  H2: 'Sección',
  Body: 'Texto corrido',
  Caption: 'Notas, legales',
}

const CONTEXTOS = ['Interfaces', 'Campañas', 'Presentaciones', 'Documentos', 'Compatibilidad digital', 'Usos incorrectos']

function ContextCard({ title }: { title: string }) {
  return (
    <div className="flex w-full flex-col gap-[8px] rounded-[16px] border border-[#b9c3ce] bg-white p-[20px]">
      <p className="font-bold text-[18px] leading-[22px] text-[#2f3945]">{title}</p>
      <p className="text-[13px] leading-[19px]">
        <Placeholder>Cómo se aplica la tipografía en este contexto.</Placeholder>
      </p>
    </div>
  )
}

export function TypographySystemPage() {
  return (
    <div id="typography.system" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Type System"
        moduleIconSrc={typeBadgeIcon}
        title="02 Typography System"
        paragraphs={['Escala tipográfica y uso según contexto de aplicación.']}
      />

      <div className="flex w-full flex-col gap-[44px] px-[40px] py-[72px]">
        {/* Escala */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Escala" description="" />
          <Table
            headers={['Estilo', 'Familia / Peso', 'Tamaño / Line-height', 'Tracking', 'Uso']}
            rows={ESCALA_ROWS.map((estilo) => [
              estilo,
              <Placeholder key="f">—</Placeholder>,
              <Placeholder key="t">00 / 00</Placeholder>,
              <Placeholder key="tr">0</Placeholder>,
              ESCALA_USO[estilo],
            ])}
          />
          <p className="text-[13px] leading-[19px] text-[#8a94a8]">
            Esta sección debe contemplar, cuando exista información: jerarquía, escala, pesos, interlineado y
            alineación.
          </p>
        </section>

        {/* Uso por contexto */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="Uso por contexto" description="" />
          <div className="grid grid-cols-1 gap-[16px] min-[900px]:grid-cols-2 min-[1600px]:grid-cols-3">
            {CONTEXTOS.map((c) => (
              <ContextCard key={c} title={c} />
            ))}
          </div>
          <div className="flex w-full flex-col gap-[8px] rounded-[16px] border border-[#b9c3ce] bg-white p-[20px]">
            <p className="font-bold text-[18px] leading-[22px] text-[#2f3945]">Accesibilidad</p>
            <div className="grid grid-cols-1 gap-[8px] min-[700px]:grid-cols-2">
              <p className="text-[13px] leading-[19px]">
                <span className="font-semibold text-[#59667d]">Tamaño mínimo: </span>
                <Placeholder>valor mínimo definido para el proyecto.</Placeholder>
              </p>
              <p className="text-[13px] leading-[19px]">
                <span className="font-semibold text-[#59667d]">Contraste: </span>
                <Placeholder>criterio de contraste definido para el proyecto.</Placeholder>
              </p>
            </div>
          </div>
          <Note>No agregar reglas adicionales que no hayan sido definidas para el proyecto.</Note>
        </section>
      </div>

      <MetaFooter label="v1 · 02 Typography System · Typography System · Master Template" />
    </div>
  )
}
