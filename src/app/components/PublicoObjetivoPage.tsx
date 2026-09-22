import { Fragment, type ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Strategy · Público Objetivo — plantilla en blanco (master template).
 *
 * Estructura fija según "publico-objetivo-estructura-presentacion.md": el
 * resultado final de la definición (no el proceso que lo construye). Sin
 * datos de marca todavía — todo el contenido es placeholder entre corchetes,
 * tal cual lo define la estructura, para guiar cómo se completa por
 * proyecto. Sección 05 (Implicaciones) es opcional y no se genera sin datos
 * reales documentados, así que queda solo como nota.
 * ────────────────────────────────────────────────────────────────────────── */

function Placeholder({ children }: { children: ReactNode }) {
  return <span className="font-normal italic text-[#8a94a8]">{children}</span>
}

/* ─── 02 · Foco de audiencia ─── */

function AudienceCard({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <div className="flex h-full min-w-0 flex-col items-start gap-[10px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
      <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">{eyebrow}</p>
      <p className="text-[15px] leading-[22px]">
        <Placeholder>{children}</Placeholder>
      </p>
    </div>
  )
}

/** Grid (no flex) para que las 3 cards compartan siempre la misma altura,
 *  contenido alineado arriba; las flechas se centran en su propia columna. */
function AudienceFocusRow({ items }: { items: { eyebrow: string; value: string }[] }) {
  return (
    <div className="grid w-full grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-[12px]">
      {items.map((item, i) => (
        <Fragment key={item.eyebrow}>
          <AudienceCard eyebrow={item.eyebrow}>{item.value}</AudienceCard>
          {i < items.length - 1 && (
            <ArrowRight className="size-[20px] shrink-0 self-center text-[#8a94a8]" strokeWidth={2} />
          )}
        </Fragment>
      ))}
    </div>
  )
}

/* ─── 03 · Segmentos prioritarios ─── */

function SegmentCard({ index }: { index: number }) {
  return (
    <div className="flex w-full flex-col gap-[16px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
      <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">
        Segmento {index}
      </p>
      <div className="flex w-full flex-col gap-[8px]">
        <PlaceholderRow label="Nombre y apodo" text="Nombre descriptivo — apodo estratégico" />
        <PlaceholderRow label="Contexto" text="Cómo vive actualmente la categoría o situación." />
        <PlaceholderRow label="Necesidad funcional" text="Qué problema práctico necesita resolver." />
        <PlaceholderRow label="Necesidad emocional" text="Qué necesita sentir. Preferiblemente 2–3 conceptos." />
        <PlaceholderRow label="Tensión principal" text="Quiere A sin sacrificar B." />
        <PlaceholderRow label="Momento crítico" text="Momento concreto en el que toma una decisión, avanza o abandona." />
      </div>
    </div>
  )
}

function PlaceholderRow({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex w-full flex-wrap items-baseline gap-x-[16px] gap-y-[2px] rounded-[10px] bg-[#f1f4f7] p-[14px]">
      <p className="w-[180px] max-w-full shrink-0 font-medium text-[13px] leading-[18px] text-[#5f6b78]">{label}</p>
      <p className="min-w-0 flex-1 text-[14px] leading-[19px]">
        <Placeholder>{text}</Placeholder>
      </p>
    </div>
  )
}

/* ─── 04 · Tensión estratégica central ─── */

function TensionStatement({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col items-start gap-[16px] rounded-[32px] bg-[#0f1e33] px-[40px] py-[48px]">
      <span className="font-bold text-[40px] leading-none text-[#4f8fd6]">&ldquo;</span>
      <p className="font-medium text-[26px] italic leading-[36px] tracking-[-0.2px] text-[#c7d2e0]">{children}</p>
    </div>
  )
}

/* ─── Página ─── */

export function PublicoObjetivoPage() {
  return (
    <div id="strategy.publico-objetivo" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Strategy"
        title="Público Objetivo"
        paragraphs={['A quién le habla la marca y bajo qué tensión estratégica se organiza esa audiencia.']}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        {/* 01 · Contexto */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="01. Contexto" description="" />
          <p className="text-[16px] leading-[26px]">
            <Placeholder>Descripción breve del público objetivo y del criterio utilizado para segmentarlo.</Placeholder>
          </p>
        </section>

        {/* 02 · Foco de audiencia */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="02. Foco de audiencia" description="De lo amplio al nicho donde la marca es claramente mejor." />
          <AudienceFocusRow
            items={[
              { eyebrow: 'Audiencia amplia', value: 'Personas que podrían utilizar la categoría.' },
              { eyebrow: 'Cliente', value: 'Personas que efectivamente compran o utilizan la solución.' },
              { eyebrow: 'Nicho prioritario', value: 'Grupo específico donde la marca puede aportar mayor valor o diferenciarse.' },
            ]}
          />
        </section>

        {/* 03 · Segmentos prioritarios */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="03. Segmentos prioritarios" description="Entre 3 y 5 segmentos, todos con la misma estructura de lectura." />
          <div className="grid grid-cols-1 gap-[20px] min-[1100px]:grid-cols-2">
            {[1, 2, 3].map((i) => (
              <SegmentCard key={i} index={i} />
            ))}
          </div>
        </section>

        {/* 04 · Tensión estratégica central */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="04. Tensión estratégica central" description="" />
          <TensionStatement>
            La marca necesita mantener ______ mientras se vuelve ______, sin perder ______.
          </TensionStatement>
        </section>

        {/* 05 · Implicaciones para la marca (opcional) */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader
            title="05. Implicaciones para la marca"
            description="Opcional — se agrega solo si el proyecto tiene esta información documentada (mensaje, canales, producto, puntos de contacto, tono)."
          />
        </section>
      </div>

      <MetaFooter label="v1 · Público Objetivo · Strategy · Master Template" />
    </div>
  )
}
