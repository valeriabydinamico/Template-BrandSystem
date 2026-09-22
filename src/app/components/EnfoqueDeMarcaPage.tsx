import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Strategy · Enfoque de Marca — plantilla en blanco (master template).
 *
 * Muestra el enfoque estratégico final (por qué existe, cómo actúa, qué
 * ofrece, hacia dónde va) — no el proceso metodológico que lo construye.
 * Sin datos de marca todavía: contenido placeholder entre corchetes, mismo
 * criterio que Público Objetivo. Golden Circle y Misión de marca son
 * opcionales (solo nota, sin contenido fabricado). Los principios
 * estratégicos NO se duplican acá — viven en la página dedicada
 * "Principios de Marca"; la página cierra con Visión de marca.
 * ────────────────────────────────────────────────────────────────────────── */

function Placeholder({ children }: { children: ReactNode }) {
  return <span className="font-normal italic text-[#8a94a8]">{children}</span>
}

/* ─── Problema humano — cita destacada ─── */

function QuoteCallout({ children }: { children: ReactNode }) {
  return (
    <blockquote className="w-full rounded-[12px] border-l-[3px] border-[#1677d8] bg-[#f7f9fb] px-[20px] py-[16px] text-[16px] italic leading-[24px] text-[#3d4653]">
      <Placeholder>{children}</Placeholder>
    </blockquote>
  )
}

/* ─── Propósito / Visión — bloque protagonista ─── */

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

/* ─── Cómo lo hacemos — mecanismos repetibles ─── */

function MechanismCard({ index }: { index: number }) {
  return (
    <div className="flex w-full flex-col gap-[8px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
      <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">
        Mecanismo {index}
      </p>
      <p className="font-bold text-[18px] leading-[24px] text-[#1c212b]">
        <Placeholder>Nombre breve del mecanismo.</Placeholder>
      </p>
      <p className="text-[14px] leading-[21px]">
        <Placeholder>Cómo se manifiesta o qué significa.</Placeholder>
      </p>
    </div>
  )
}

/* ─── Qué hacemos — bloque funcional ─── */

function OfferCard({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col gap-[8px] rounded-[16px] border border-[#bac2cf] bg-[#f7f9fb] p-[24px]">
      <p className="text-[16px] leading-[26px]">
        <Placeholder>{children}</Placeholder>
      </p>
    </div>
  )
}

/* ─── Página ─── */

export function EnfoqueDeMarcaPage() {
  return (
    <div id="strategy.enfoque-de-marca" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Strategy"
        title="Enfoque de Marca"
        paragraphs={['Qué problema humano aborda la marca, por qué existe, cómo actúa, qué ofrece y hacia dónde quiere avanzar.']}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        {/* 01 · Contexto + Problema humano */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="01. Contexto" description="" />
          <p className="text-[16px] leading-[26px]">
            <Placeholder>Situación o necesidad que da origen al enfoque de marca.</Placeholder>
          </p>
          <QuoteCallout>Problema humano expresado en primera persona.</QuoteCallout>
        </section>

        {/* 02 · Propósito — Por qué */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="02. Propósito — Por qué" description="Por qué existe la marca más allá de lo que vende." />
          <StatementBlock>Frase de propósito.</StatementBlock>
        </section>

        {/* 03 · Visión de marca */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="03. Visión de marca" description="El futuro que la marca busca ayudar a construir." />
          <StatementBlock>Rol que la marca quiere ocupar + transformación que busca provocar + beneficio futuro.</StatementBlock>
        </section>

        {/* 04 · Misión de marca (opcional) */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader
            title="04. Misión de marca"
            description="Opcional — solo si el proyecto documenta una misión específica (qué hace hoy, para quién y bajo qué estándar)."
          />
        </section>

        {/* 05 · Cómo lo hacemos */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader
            title="05. Cómo lo hacemos"
            description="Entre 3 y 5 mecanismos o principios de acción que convierten el propósito en una forma concreta de operar."
          />
          <div className="grid grid-cols-1 gap-[16px] min-[560px]:grid-cols-2 min-[1100px]:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <MechanismCard key={i} index={i} />
            ))}
          </div>
        </section>

        {/* 06 · Qué hacemos */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="06. Qué hacemos" description="" />
          <OfferCard>Descripción clara de la oferta, producto o servicio.</OfferCard>
        </section>

        {/* 07 · Golden Circle (opcional) */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader
            title="07. Golden Circle"
            description="Opcional — resumen de Propósito, Cómo y Qué. No sustituye esas secciones ni repite información innecesariamente."
          />
        </section>

        {/* 08 · Principios estratégicos (opcional) */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader
            title="08. Principios estratégicos"
            description="Opcional — reglas que orientan decisiones de estrategia (distinto de Principios de Marca, que orienta el comportamiento). No duplicar contenido de esa página."
          />
        </section>
      </div>

      <MetaFooter label="v2 · Enfoque de Marca · Strategy · Master Template" />
    </div>
  )
}
