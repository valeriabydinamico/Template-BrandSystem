import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Components · Visual System — plantilla en blanco (master template).
 *
 * Estructura tomada de "Components — Estructura de presentación v2" (sección
 * "Visual System"): recursos gráficos propios y reglas — todo en una sola
 * página.
 * ────────────────────────────────────────────────────────────────────────── */

function Placeholder({ children }: { children: ReactNode }) {
  return <span className="font-normal italic text-[#8a94a8]">{children}</span>
}

const RECURSOS = [
  'Shapes',
  'Patterns',
  'Lines',
  'Frames',
  'Decorative elements',
  'Background compositions',
  'Graphic overlays',
  'Branded textures',
]

const REGLAS = [
  { title: 'Densidad y proporción de uso', body: 'Reglas documentadas.' },
  { title: 'Combinación con fotografía', body: 'Reglas documentadas.' },
  { title: 'Qué evitar', body: 'Usos incorrectos documentados.' },
]

export function VisualSystemPage() {
  return (
    <div id="components.visual-system" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Components"
        title="Visual System"
        paragraphs={['Los recursos gráficos propios que hacen reconocible a la marca.']}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Recursos" description="" />
          <div className="flex w-full flex-wrap gap-[8px]">
            {RECURSOS.map((r) => (
              <span key={r} className="rounded-[999px] border border-[#bac2cf] bg-white px-[14px] py-[8px] text-[13px]">
                {r}
              </span>
            ))}
          </div>
        </section>

        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="Reglas" description="" />
          <div className="grid grid-cols-1 gap-[16px] min-[900px]:grid-cols-3">
            {REGLAS.map((r) => (
              <div key={r.title} className="flex flex-col gap-[8px] rounded-[16px] border border-[#bac2cf] bg-white p-[20px]">
                <p className="font-bold text-[16px] leading-[20px] text-[#1c212b]">{r.title}</p>
                <p className="text-[13px] leading-[19px]">
                  <Placeholder>{r.body}</Placeholder>
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <MetaFooter label="v1 · Visual System · Components · Master Template" />
    </div>
  )
}
