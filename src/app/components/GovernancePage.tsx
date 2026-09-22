import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Brand Ops · Governance — plantilla en blanco (master template).
 *
 * Estructura tomada de "Brand Ops — Estructura de presentación" (sección
 * "Governance"): roles y responsabilidades, gobierno del sistema, proceso de
 * aprobación, versionado, changelog y criterios de consistencia — todo en
 * una sola página.
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

const ROLES = ['Owner del BrandSystem', 'Diseño', 'Marketing', 'Producto']

const GOBIERNO = ['Owner del BrandSystem', 'Roles y responsabilidades', 'Quién puede editar', 'Quién aprueba cambios', 'Reglas de uso']

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

export function GovernancePage() {
  return (
    <div id="brand-ops.governance" className="flex w-full flex-col items-start bg-white">
      <PageHeader module="Brand Ops" title="Governance" paragraphs={['Quién gobierna el sistema y cómo se realizan cambios.']} />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader
            title="Roles y responsabilidades"
            description="Los nombres, responsabilidades y permisos deben completarse únicamente con información real del proyecto."
          />
          <Table
            headers={['Rol', 'Persona', 'Responsabilidad', 'Puede aprobar']}
            rows={ROLES.map((r) => [
              r,
              <Placeholder key="p">Nombre</Placeholder>,
              <Placeholder key="resp">—</Placeholder>,
              <Placeholder key="a">—</Placeholder>,
            ])}
          />
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Gobierno del sistema" description="" />
          <div className="flex w-full flex-wrap gap-[8px]">
            {GOBIERNO.map((g) => (
              <span key={g} className="rounded-[999px] border border-[#bac2cf] bg-white px-[14px] py-[8px] text-[13px]">
                {g}
              </span>
            ))}
          </div>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Proceso de aprobación" description="Debe mostrar el flujo real de aprobación definido para el proyecto." />
          <Field label="Flujo de aprobación">Paso 1 → 2 → 3</Field>
        </section>

        <section className="flex w-full flex-col gap-[24px]">
          <div className="grid grid-cols-1 gap-[16px] min-[900px]:grid-cols-2">
            <Field label="Versionado">Criterio mayor / menor.</Field>
            <Field label="Changelog">Se registra en el Log de evolución.</Field>
          </div>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Criterios para mantener la consistencia" description="" />
          <p className="text-[14px] leading-[21px]">
            <Placeholder>Criterios documentados para el proyecto.</Placeholder>
          </p>
        </section>
      </div>

      <MetaFooter label="v1 · Governance · Brand Ops · Master Template" />
    </div>
  )
}
