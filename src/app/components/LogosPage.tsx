import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Components · Logos — plantilla en blanco (master template).
 *
 * Estructura tomada de "Components — Estructura de presentación v2" (sección
 * "Logos"): versiones del logo y reglas de uso — todo en una sola página.
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
      <table className="w-full min-w-[480px] border-collapse">
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

const VERSIONES = [
  'Logo principal',
  'Isotipo',
  'Wordmark',
  'Lockups',
  'Sub-brand',
  'Versiones horizontal y vertical',
  'Versiones monocromáticas',
  'Versiones para fondo claro y oscuro',
  'Favicon y app icon',
]

function VersionCard({ title }: { title: string }) {
  return (
    <div className="flex w-full flex-col gap-[8px] rounded-[16px] border border-[#bac2cf] bg-white p-[20px]">
      <p className="font-bold text-[16px] leading-[20px] text-[#1c212b]">{title}</p>
      <p className="text-[13px] leading-[19px]">
        <Placeholder>Recursos disponibles para este proyecto.</Placeholder>
      </p>
    </div>
  )
}

export function LogosPage() {
  return (
    <div id="components.logos" className="flex w-full flex-col items-start bg-white">
      <PageHeader module="Components" title="Logos" paragraphs={['Todas las versiones del logo y sus reglas de uso.']} />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader
            title="Versiones"
            description="Cada versión debe mostrar únicamente la información y recursos realmente disponibles para el proyecto."
          />
          <div className="grid grid-cols-1 gap-[16px] min-[700px]:grid-cols-2 min-[1200px]:grid-cols-3">
            {VERSIONES.map((v) => (
              <VersionCard key={v} title={v} />
            ))}
          </div>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Reglas" description="" />
          <div className="grid grid-cols-1 gap-[16px] min-[900px]:grid-cols-2">
            <div className="flex flex-col gap-[4px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
              <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">
                Área de respeto
              </p>
              <p className="text-[14px] leading-[21px]">
                <Placeholder>Valor</Placeholder>
              </p>
            </div>
            <div className="flex flex-col gap-[4px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
              <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">
                Tamaño mínimo
              </p>
              <p className="text-[14px] leading-[21px]">
                <Placeholder>Digital / impreso</Placeholder>
              </p>
            </div>
          </div>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Usos incorrectos" description="" />
          <Table
            headers={['Sí', 'No']}
            rows={[[<Placeholder key="s">Regla correcta.</Placeholder>, <Placeholder key="n">Deformar, recolorear, rotar…</Placeholder>]]}
          />
        </section>
      </div>

      <MetaFooter label="v1 · Logos · Components · Master Template" />
    </div>
  )
}
