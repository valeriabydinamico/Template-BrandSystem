import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { GovernanceFooter } from './GovernanceFooter'
import { MetaFooter } from './MetaFooter'
import { Note } from './Note'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Foundations · Color System — 03 Semantic Colors — plantilla en blanco
 * (master template).
 *
 * Estructura tomada de "Foundations — Estructura de presentación v2" (sección
 * "Sistema de color" → 03. Colores semánticos), más la parte de Gobernanza
 * (06) que corresponde a colores semánticos. El resto de la Gobernanza (reglas
 * sobre primario/secundario/acentos) vive en Brand Colors.
 * ────────────────────────────────────────────────────────────────────────── */

function Placeholder({ children }: { children: ReactNode }) {
  return <span className="font-normal italic text-[#8a94a8]">{children}</span>
}

const FUNCIONES = ['Texto', 'Fondos', 'Bordes', 'Iconos', 'Focus', 'Estados', 'Superficies interactivas']

function FunctionCard({ funcion }: { funcion: string }) {
  return (
    <div className="flex w-full flex-col gap-[8px] rounded-[16px] border border-[#bac2cf] bg-white p-[20px]">
      <p className="text-[16px] font-bold leading-[22px] text-[#1c212b]">{funcion}</p>
      <p className="text-[13px] leading-[19px]">
        <Placeholder>Token(s) asignado(s) a esta función, con su referencia de color.</Placeholder>
      </p>
    </div>
  )
}

const GOVERNANCE_RULES = [
  'Los colores semánticos deben utilizarse para funciones claras: texto, fondo, UI, estado o interacción.',
]

export function SemanticColorsPage() {
  return (
    <div id="color.semantic-colors" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Color System"
        title="03 Semantic Colors"
        paragraphs={['Colores semánticos que conectan la paleta con funciones específicas de interfaz.']}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[80px]">
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader
            title="03. Colores semánticos"
            description="Funciones que la guía contempla para conectar la paleta con roles concretos de interfaz."
          />
          <div className="grid grid-cols-1 gap-[16px] min-[900px]:grid-cols-2 min-[1600px]:grid-cols-3">
            {FUNCIONES.map((f) => (
              <FunctionCard key={f} funcion={f} />
            ))}
          </div>

          <Note>
            Los colores semánticos no se utilizan como recursos libres de branding o composición. Su función es
            comunicar estados, jerarquías e interacción.
          </Note>
        </section>
      </div>

      <GovernanceFooter title="Gobernanza del color semántico" rules={GOVERNANCE_RULES} />

      <MetaFooter label="v1 · 03 Semantic Colors · Color System · Master Template" />
    </div>
  )
}
