import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { Badge } from './Badge'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Strategy · Principios de Marca — plantilla en blanco (master template).
 *
 * Principios que guían el comportamiento de la marca en comunicación, diseño
 * y experiencia — no el proceso metodológico que los construye. Sin datos de
 * marca todavía: contenido placeholder entre corchetes. "Aspiracional" es un
 * tag condicional por principio (no una sección aparte). La pregunta de
 * auditoría cierra la página con el texto sugerido tal cual (no es un
 * placeholder de marca, es la fórmula de cierre del template).
 * ────────────────────────────────────────────────────────────────────────── */

function Placeholder({ children }: { children: ReactNode }) {
  return <span className="font-normal italic text-[#8a94a8]">{children}</span>
}

function Quote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="w-full rounded-[10px] border-l-[3px] border-[#1677d8] bg-[#f7f9fb] px-[16px] py-[12px] text-[14px] italic leading-[21px]">
      <Placeholder>{children}</Placeholder>
    </blockquote>
  )
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

/* ─── 02 · Resumen de principios ─── */

function SummaryCard({ index }: { index: number }) {
  return (
    <div className="flex w-full flex-col gap-[10px] rounded-[16px] border border-[#bac2cf] bg-white p-[20px]">
      <p className="font-bold text-[16px] leading-[22px] text-[#1c212b]">
        <Placeholder>Nombre del principio {index}</Placeholder>
      </p>
      <p className="text-[13px] leading-[19px]">
        <Placeholder>Convicción de fondo en una frase.</Placeholder>
      </p>
      <p className="text-[13px] italic leading-[19px] text-[#8a94a8]">
        <Placeholder>&ldquo;Lo que el cliente siente — en primera persona.&rdquo;</Placeholder>
      </p>
    </div>
  )
}

/* ─── 03 · Desarrollo de cada principio ─── */

function PrincipleCard({ index }: { index: number }) {
  return (
    <div className="flex w-full flex-col gap-[16px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
      <div className="flex w-full flex-wrap items-start justify-between gap-[8px]">
        <p className="font-bold text-[22px] leading-[28px] text-[#1c212b]">
          <Placeholder>Principio {index}</Placeholder>
        </p>
        <Badge tone="warning" size="sm">
          Aspiracional (si aplica)
        </Badge>
      </div>

      <div className="flex w-full flex-col gap-[6px]">
        <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">Principio rector</p>
        <Quote>Convicción central que guía el principio.</Quote>
      </div>

      <Field label="Qué significa">Explicación breve de la idea y de cómo debe interpretarse.</Field>
      <Field label="Cómo se aplica">Comportamiento concreto y observable de la marca.</Field>
      <Field label="Qué NO es">Interpretación, comportamiento o límite que debe descartarse.</Field>
      <Field label="Ejemplo visible">
        Situación, decisión, pieza o comportamiento donde el principio puede comprobarse (o &ldquo;aspiracional&rdquo; si
        todavía no existe un ejemplo real).
      </Field>

      <div className="flex w-full flex-col gap-[6px]">
        <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">Lo que el cliente siente</p>
        <Quote>Percepción o emoción del cliente escrita en primera persona.</Quote>
      </div>
    </div>
  )
}

/* ─── 05 · Pregunta de auditoría ─── */

function ClosingStatement({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col items-start gap-[16px] rounded-[32px] bg-[#0f1e33] px-[40px] py-[48px]">
      <span className="font-bold text-[40px] leading-none text-[#4f8fd6]">&ldquo;</span>
      <p className="font-bold text-[26px] leading-[36px] tracking-[-0.2px] text-white">{children}</p>
    </div>
  )
}

/* ─── Página ─── */

const PRINCIPLE_COUNT = 4

export function PrincipiosDeMarcaPage() {
  const indices = Array.from({ length: PRINCIPLE_COUNT }, (_, i) => i + 1)

  return (
    <div id="strategy.principios-de-marca" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Strategy"
        title="Principios de Marca"
        paragraphs={['Los principios que guían el comportamiento de la marca en comunicación, diseño y experiencia.']}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        {/* 01 · Contexto */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="01. Contexto" description="" />
          <p className="text-[16px] leading-[26px]">
            <Placeholder>
              Breve explicación de cómo estos principios guían el comportamiento de la marca en comunicación,
              diseño y experiencia.
            </Placeholder>
          </p>
          <div className="flex w-full flex-col gap-[4px]">
            <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#8a94a8]">
              Nota de alcance — si aplica
            </p>
            <p className="text-[14px] leading-[21px]">
              <Placeholder>
                Estos principios de marca guían la expresión y el comportamiento de la marca sin reemplazar los
                valores institucionales existentes.
              </Placeholder>
            </p>
          </div>
        </section>

        {/* 02 · Resumen de principios */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="02. Resumen de principios" description="Entre 4 y 6 principios — lectura rápida antes del desarrollo completo." />
          <div className="grid grid-cols-1 gap-[16px] min-[560px]:grid-cols-2 min-[1100px]:grid-cols-4">
            {indices.map((i) => (
              <SummaryCard key={i} index={i} />
            ))}
          </div>
        </section>

        {/* 03 · Desarrollo de cada principio */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="03. Desarrollo de cada principio" description="Misma estructura para cada uno de los principios." />
          <div className="flex w-full flex-col gap-[20px]">
            {indices.map((i) => (
              <PrincipleCard key={i} index={i} />
            ))}
          </div>
        </section>

        {/* 04 · Pregunta de auditoría */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="04. Pregunta de auditoría" description="" />
          <ClosingStatement>¿Nuestra comunicación y comportamiento cumplen con estos principios?</ClosingStatement>
        </section>
      </div>

      <MetaFooter label="v1 · Principios de Marca · Strategy · Master Template" />
    </div>
  )
}
