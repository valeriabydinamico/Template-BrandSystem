import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { Note } from './Note'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Templates · Mailers — plantilla en blanco (master template).
 *
 * Estructura tomada de "Templates — Estructura de presentación" (sección
 * "Mailers"): estructura del mail y reglas — todo en una sola página.
 * ────────────────────────────────────────────────────────────────────────── */

function Placeholder({ children }: { children: ReactNode }) {
  return <span className="font-normal italic text-[#8a94a8]">{children}</span>
}

const ESTRUCTURA = [
  'Header',
  'Logo',
  'Subject line',
  'Preheader',
  'Hero o título',
  'Cuerpo de contenido',
  'Imagen o recurso visual',
  'CTA principal',
  'CTA secundario',
  'Información complementaria',
  'Footer',
  'Links legales y preferencias',
]

export function MailersPage() {
  return (
    <div id="templates.mailers" className="flex w-full flex-col items-start bg-white">
      <PageHeader module="Templates" title="Mailers" paragraphs={['La plantilla de email y sus reglas de contenido.']} />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Estructura del mail" description="" />
          <div className="flex w-full flex-wrap gap-[8px]">
            {ESTRUCTURA.map((e) => (
              <span key={e} className="rounded-[999px] border border-[#bac2cf] bg-white px-[14px] py-[8px] text-[13px]">
                {e}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-[4px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
            <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">
              Subject line — límite de caracteres
            </p>
            <p className="text-[14px] leading-[21px]">
              <Placeholder>Límite de caracteres</Placeholder>
            </p>
          </div>
          <Note>No asumir un valor hasta que esté definido para el proyecto.</Note>
        </section>

        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="Reglas" description="" />
          <div className="flex w-full flex-col items-start gap-[16px] rounded-[32px] bg-[#0f1e33] px-[40px] py-[48px]">
            <span className="font-bold text-[40px] leading-none text-[#4f8fd6]">&ldquo;</span>
            <p className="font-medium text-[22px] italic leading-[32px] tracking-[-0.2px] text-[#c7d2e0]">
              Un solo CTA principal.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-[16px] min-[900px]:grid-cols-2">
            <div className="flex flex-col gap-[4px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
              <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">
                Ancho y compatibilidad de clientes de correo
              </p>
              <p className="text-[14px] leading-[21px]">
                <Placeholder>Reglas documentadas de ancho y compatibilidad.</Placeholder>
              </p>
            </div>
            <div className="flex flex-col gap-[4px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
              <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">
                Modo oscuro
              </p>
              <p className="text-[14px] leading-[21px]">
                <Placeholder>Reglas documentadas para dark mode.</Placeholder>
              </p>
            </div>
          </div>
        </section>
      </div>

      <MetaFooter label="v1 · Mailers · Templates · Master Template" />
    </div>
  )
}
