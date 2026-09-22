import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Strategy · Posicionamiento — plantilla en blanco (master template).
 *
 * Qué espacio competitivo puede ocupar la marca, por qué puede defenderlo y
 * cómo se traduce en una declaración clara — no el proceso metodológico que
 * lo construye. Sin datos de marca todavía: contenido placeholder entre
 * corchetes.
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

function StatementBlock({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col items-start gap-[16px] rounded-[32px] bg-[#0f1e33] px-[40px] py-[48px]">
      <span className="font-bold text-[40px] leading-none text-[#4f8fd6]">&ldquo;</span>
      <p className="font-medium text-[26px] italic leading-[36px] tracking-[-0.2px] text-[#c7d2e0]">
        <Placeholder>{children}</Placeholder>
      </p>
    </div>
  )
}

/* ─── 02 · Benchmark competitivo ─── */

function CompetitorCard({ index }: { index: number }) {
  return (
    <div className="flex w-full flex-col gap-[12px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
      <p className="font-bold text-[18px] leading-[24px] text-[#1c212b]">
        <Placeholder>Competidor {index}</Placeholder>
      </p>
      <Field label="Diferenciadores">2 diferenciadores principales.</Field>
      <Field label="Fortalezas">Fortalezas relevantes de la marca competidora.</Field>
      <Field label="Debilidades / brechas">Debilidades o espacios que deja sin cubrir.</Field>
      <Field label="Patrón de confianza">Cómo construye credibilidad: producto, narrativa, autoridad, prueba social, etc.</Field>
    </div>
  )
}

/* ─── 03 · Mapa de territorio ─── */

function TerritoryMap() {
  return (
    <div className="flex w-full flex-col items-center gap-[8px]">
      <p className="text-[13px] leading-[18px]">
        <Placeholder>Eje 2 — variable estratégica relevante</Placeholder>
      </p>
      <div className="relative aspect-square w-full max-w-[420px] rounded-[16px] border border-[#bac2cf] bg-[#f7f9fb]">
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#d5dadf]" />
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#d5dadf]" />
        <div className="flex size-full items-center justify-center p-[24px] text-center">
          <p className="text-[13px] leading-[19px]">
            <Placeholder>Jugadores — ubicación de la marca y competidores.</Placeholder>
          </p>
        </div>
      </div>
      <p className="text-[13px] leading-[18px]">
        <Placeholder>Eje 1 — variable estratégica relevante</Placeholder>
      </p>
    </div>
  )
}

/* ─── 08 · Tres beneficios únicos ─── */

function BenefitCard({ level, description }: { level: string; description: string }) {
  return (
    <div className="flex w-full flex-col gap-[10px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
      <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">{level}</p>
      <p className="text-[15px] leading-[22px]">
        <Placeholder>{description}</Placeholder>
      </p>
      <Field label="Pilar asociado">Pilar de personalidad correspondiente.</Field>
    </div>
  )
}

/* ─── Página ─── */

export function PosicionamientoPage() {
  return (
    <div id="strategy.posicionamiento" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Strategy"
        title="Posicionamiento"
        paragraphs={['Qué espacio competitivo puede ocupar la marca, por qué puede defenderlo y cómo se traduce en una declaración clara.']}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        {/* 01 · Contexto */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="01. Contexto" description="" />
          <p className="text-[16px] leading-[26px]">
            <Placeholder>Breve contexto sobre la categoría, el mercado y el desafío competitivo de la marca.</Placeholder>
          </p>
        </section>

        {/* 02 · Benchmark competitivo */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="02. Benchmark competitivo" description="Tres referencias competitivas principales, mismas dimensiones para cada una." />
          <div className="grid grid-cols-1 gap-[16px] min-[1100px]:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <CompetitorCard key={i} index={i} />
            ))}
          </div>
        </section>

        {/* 03 · Mapa de territorio */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="03. Mapa de territorio" description="Dos variables relevantes para la categoría; los ejes surgen del análisis competitivo." />
          <TerritoryMap />
        </section>

        {/* 04 · Oportunidad / espacio en blanco */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="04. Oportunidad / espacio en blanco" description="" />
          <div className="flex w-full flex-col gap-[16px] rounded-[16px] border border-[#bac2cf] bg-[#f7f9fb] p-[24px]">
            <Field label="Espacio disponible">Descripción del espacio u oportunidad identificada.</Field>
            <Field label="Por qué la marca puede ocuparlo">Prueba, capacidad o característica real que permite sostener ese territorio.</Field>
          </div>
        </section>

        {/* 05 · Categoría / marco competitivo */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="05. Categoría / marco competitivo" description="" />
          <p className="text-[16px] leading-[26px]">
            <Placeholder>Categoría o marco competitivo desde el que la marca quiere posicionarse.</Placeholder>
          </p>
        </section>

        {/* 06 · Declaración de posicionamiento */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="06. Declaración de posicionamiento" description="Breve, y expresa una diferencia defendible (máximo 15 palabras)." />
          <StatementBlock>[La categoría] que [atributo diferencial] sin [sacrificio que el mercado considera inevitable].</StatementBlock>
        </section>

        {/* 07 · Posicionamiento extendido */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="07. Posicionamiento extendido" description="" />
          <p className="text-[16px] leading-[26px]">
            <Placeholder>Párrafo que argumenta y desarrolla la declaración de posicionamiento.</Placeholder>
          </p>
        </section>

        {/* 08 · Tres beneficios únicos */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="08. Tres beneficios únicos" description="Uno por cada nivel de promesa." />
          <div className="grid grid-cols-1 gap-[16px] min-[1100px]:grid-cols-3">
            <BenefitCard level="Beneficio funcional" description="Qué hace mejor la marca de forma demostrable." />
            <BenefitCard level="Beneficio emocional" description="Qué siente el cliente al relacionarse con la marca." />
            <BenefitCard level="Beneficio aspiracional" description="Cómo la marca acerca al cliente a quien quiere llegar a ser." />
          </div>
        </section>

        {/* 09 · A quién renunciamos */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="09. A quién renunciamos" description="" />
          <div className="flex w-full flex-col gap-[16px] rounded-[16px] border border-[#e3e7ec] bg-[#fafbfc] p-[24px]">
            <Field label="Renuncia">Cliente, necesidad o territorio al que la marca decide renunciar.</Field>
            <Field label="Motivo">Por qué no encaja con el espacio que la marca decidió ocupar.</Field>
          </div>
        </section>
      </div>

      <MetaFooter label="v1 · Posicionamiento · Strategy · Master Template" />
    </div>
  )
}
