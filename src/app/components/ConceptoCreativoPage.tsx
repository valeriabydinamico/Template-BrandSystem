import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Strategy · Concepto Creativo — plantilla en blanco (master template).
 *
 * La idea creativa que unifica la estrategia y explica cómo debe crecer la
 * expresión visual, verbal y experiencial de la marca — una metáfora con
 * mecanismo, no un eslogan ni una descripción literal del sistema visual.
 * Sin datos de marca todavía: contenido placeholder entre corchetes. No se
 * muestran conceptos alternativos explorados, moodboards descartados ni
 * razonamiento de selección — solo el concepto elegido y su sistema de
 * aplicación.
 * ────────────────────────────────────────────────────────────────────────── */

const TH = 'px-[14px] py-[12px] text-left font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]'
const TD = 'px-[14px] py-[12px] align-top text-[13px] leading-[19px] text-[#1c212b]'

function Placeholder({ children }: { children: ReactNode }) {
  return <span className="font-normal italic text-[#8a94a8]">{children}</span>
}

function Table({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return (
    <div className="w-full overflow-x-auto rounded-[12px] border border-[#d5dadf]">
      <table className="w-full min-w-[560px] border-collapse">
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

/* ─── 04 · Los tres elementos del concepto ─── */

function ElementCard({ index }: { index: number }) {
  return (
    <div className="flex w-full flex-col gap-[10px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
      <p className="font-bold text-[18px] leading-[24px] text-[#1c212b]">
        <Placeholder>Nombre del elemento {index}</Placeholder>
      </p>
      <Field label="Qué representa">Significado dentro del concepto.</Field>
      <Field label="Vínculo estratégico">Bloque, idea o decisión estratégica que lo justifica.</Field>
    </div>
  )
}

/* ─── 05 · Traducción del concepto ─── */

function TranslationCard({ channel, description }: { channel: string; description: string }) {
  return (
    <div className="flex w-full flex-col gap-[8px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
      <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">{channel}</p>
      <p className="text-[14px] leading-[21px]">
        <Placeholder>{description}</Placeholder>
      </p>
    </div>
  )
}

/* ─── Página ─── */

export function ConceptoCreativoPage() {
  return (
    <div id="strategy.concepto-creativo" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Strategy"
        title="Concepto Creativo"
        paragraphs={['La idea que unifica la estrategia y explica cómo debe crecer la expresión visual, verbal y experiencial de la marca.']}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        {/* 01 · Contexto */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="01. Contexto" description="" />
          <p className="text-[16px] leading-[26px]">
            <Placeholder>
              Breve explicación de cómo el concepto creativo sintetiza la estrategia y se convierte en
              principio generador para la expresión de marca.
            </Placeholder>
          </p>
        </section>

        {/* 02 · Nombre del concepto */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="02. Nombre del concepto" description="Lenguaje cotidiano y entendible — sin jerga de agencia." />
          <div className="flex w-full flex-col items-start rounded-[32px] bg-[#0f1e33] px-[40px] py-[48px]">
            <p className="font-bold text-[36px] leading-[44px] tracking-[-0.2px] text-white">
              <Placeholder>Nombre del concepto.</Placeholder>
            </p>
          </div>
        </section>

        {/* 03 · Mecanismo */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="03. Mecanismo" description="Cómo funciona el concepto: qué relación, transformación o dinámica produce." />
          <div className="flex w-full flex-col gap-[8px] rounded-[16px] border border-[#bac2cf] bg-[#f7f9fb] p-[24px]">
            <p className="text-[16px] leading-[26px]">
              <Placeholder>Frase que explica el mecanismo del concepto y cómo genera nuevas aplicaciones.</Placeholder>
            </p>
          </div>
        </section>

        {/* 04 · Los tres elementos del concepto */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="04. Los tres elementos del concepto" description="Cada elemento existe por un motivo estratégico, no solo estético." />
          <div className="grid grid-cols-1 gap-[16px] min-[1100px]:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <ElementCard key={i} index={i} />
            ))}
          </div>
        </section>

        {/* 05 · Traducción del concepto */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="05. Traducción del concepto" description="" />
          <div className="grid grid-cols-1 gap-[16px] min-[1100px]:grid-cols-3">
            <TranslationCard channel="Visual" description="Cómo se traduce en formas, composición, espacio, imagen u otros recursos visuales." />
            <TranslationCard channel="Verbal" description="Cómo aparece en títulos, narrativa y lenguaje sin convertirse en una metáfora literal repetida." />
            <TranslationCard channel="Experiencia" description="Cómo se manifiesta en producto, servicio y puntos de contacto." />
          </div>
        </section>

        {/* 06 · Principios visuales */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="06. Principios visuales" description="Entre 3 y 4 reglas — deben poder comprobarse por alguien ajeno al proyecto." />
          <Table
            headers={['Nombre', 'Regla visual', 'Aplicación']}
            rows={[1, 2, 3].map((i) => [
              <Placeholder key="n">Principio visual {i}</Placeholder>,
              <Placeholder key="r">Regla operativa y verificable.</Placeholder>,
              <Placeholder key="a">Dónde aplica.</Placeholder>,
            ])}
          />
        </section>
      </div>

      <MetaFooter label="v1 · Concepto Creativo · Strategy · Master Template" />
    </div>
  )
}
