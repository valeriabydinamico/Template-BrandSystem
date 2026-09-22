import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Strategy · Verbal Identity — plantilla en blanco (master template).
 *
 * Cómo suena la marca y qué reglas permiten escribir de manera consistente
 * en distintos canales y contextos. Acá vive toda la capa verbal (tono,
 * vocabulario, gramática, anti-personalidad) que NO se duplica en Esencia y
 * Personalidad. Sin datos de marca todavía: contenido placeholder entre
 * corchetes.
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

function TextBlock({ children }: { children: ReactNode }) {
  return (
    <p className="text-[16px] leading-[26px]">
      <Placeholder>{children}</Placeholder>
    </p>
  )
}

function StatementBlock({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col items-start gap-[16px] rounded-[32px] bg-[#0f1e33] px-[40px] py-[48px]">
      <span className="font-bold text-[40px] leading-none text-[#4f8fd6]">&ldquo;</span>
      <p className="font-medium text-[22px] italic leading-[32px] tracking-[-0.2px] text-[#c7d2e0]">
        <Placeholder>{children}</Placeholder>
      </p>
    </div>
  )
}

function Card({ children }: { children: ReactNode }) {
  return <div className="flex w-full flex-col gap-[8px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">{children}</div>
}

/* ─── 04 · Personalidad verbal ─── */

function AttributeCard({ index }: { index: number }) {
  return (
    <Card>
      <p className="font-bold text-[16px] leading-[22px] text-[#1c212b]">
        <Placeholder>Atributo {index}</Placeholder>
      </p>
      <Field label="Aplicación">Cómo se manifiesta al escribir.</Field>
    </Card>
  )
}

/* ─── Página ─── */

export function VerbalIdentityPage() {
  return (
    <div id="strategy.verbal-identity" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Strategy"
        title="Verbal Identity"
        paragraphs={['Cómo suena la marca y qué reglas permiten escribir de manera consistente en distintos canales y contextos.']}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        {/* 01 · Contexto */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="01. Contexto" description="" />
          <TextBlock>Breve explicación de cómo la identidad verbal traduce la personalidad de la marca a lenguaje y comunicación.</TextBlock>
        </section>

        {/* 02 · Voz de marca */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="02. Voz de marca" description="Cómo suena siempre la marca, independientemente del canal." />
          <StatementBlock>Descripción de la voz permanente de la marca.</StatementBlock>
        </section>

        {/* 03 · Tono de voz */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="03. Tono de voz" description="Cómo puede cambiar la expresión según el contexto, sin perder la voz de marca." />
          <Card>
            <TextBlock>Cómo cambia el tono según situación, audiencia o nivel de sensibilidad.</TextBlock>
          </Card>
        </section>

        {/* 04 · Personalidad verbal */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="04. Personalidad verbal" description="Tres rasgos verbales que ayudan a tomar decisiones de escritura." />
          <div className="grid grid-cols-1 gap-[16px] min-[1100px]:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <AttributeCard key={i} index={i} />
            ))}
          </div>
        </section>

        {/* 05 · Nivel de formalidad */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="05. Nivel de formalidad" description="Acompañar con ejemplos que permitan reconocer los límites." />
          <TextBlock>Nivel o rango de formalidad de la marca.</TextBlock>
        </section>

        {/* 06 · Ritmo y longitud de frases */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="06. Ritmo y longitud de frases" description="" />
          <TextBlock>Cómo deben construirse las frases: longitud, ritmo, cantidad de ideas, estructura.</TextBlock>
        </section>

        {/* 07 · Principios de escritura */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="07. Principios de escritura" description="Entre 3 y 5 reglas — cada una debe ser accionable." />
          <Table
            headers={['Regla', 'Aplicación']}
            rows={[1, 2, 3].map((i) => [
              <Placeholder key="r">Principio de escritura {i}.</Placeholder>,
              <Placeholder key="a">Qué implica al redactar.</Placeholder>,
            ])}
          />
        </section>

        {/* 08 · Palabras que usamos */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="08. Palabras que usamos" description="Vocabulario propio que refuerza el lenguaje característico de la marca." />
          <div className="flex w-full flex-wrap gap-[8px]">
            {[1, 2, 3, 4].map((i) => (
              <span key={i} className="rounded-[999px] border border-[#bac2cf] bg-white px-[14px] py-[8px] text-[13px]">
                <Placeholder>Palabra o expresión {i}</Placeholder>
              </span>
            ))}
          </div>
        </section>

        {/* 09 · Palabras que evitamos */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="09. Palabras que evitamos" description="" />
          <Table
            headers={['Palabra / expresión', 'Motivo (si es necesario)']}
            rows={[1, 2].map((i) => [
              <Placeholder key="p">Término a evitar {i}</Placeholder>,
              <Placeholder key="m">Por qué no corresponde al lenguaje de la marca.</Placeholder>,
            ])}
          />
        </section>

        {/* 10 · Gramática y estilo */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="10. Gramática y estilo" description="Mayúsculas y minúsculas, números, puntuación, emojis, abreviaturas y otras convenciones." />
          <Card>
            <TextBlock>Reglas breves de gramática y estilo, según corresponda al proyecto.</TextBlock>
          </Card>
        </section>

        {/* 11 · Uso de pronombres */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="11. Uso de pronombres" description="Indicar en qué contextos cambia, si aplica." />
          <TextBlock>Tú / usted / nosotros / otras convenciones según el proyecto.</TextBlock>
        </section>

        {/* 12 · Reglas por canal */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="12. Reglas por canal" description="Ajustes específicos donde sean necesarios (Web, RRSS, Producto, Mail, Comunicación interna)." />
          <Table
            headers={['Canal', 'Regla o ajuste']}
            rows={['Web', 'RRSS', 'Producto', 'Mail', 'Comunicación interna'].map((canal) => [
              canal,
              <Placeholder key="r">Cómo se adapta la identidad verbal.</Placeholder>,
            ])}
          />
        </section>

        {/* 13 · Ejemplos de aplicación */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="13. Ejemplos de aplicación" description="Diferencias reales de ejecución, no variaciones superficiales." />
          <Table
            headers={['Aprobado', 'Incorrecto', 'Por qué']}
            rows={[
              [
                <Placeholder key="a">Ejemplo correcto.</Placeholder>,
                <Placeholder key="i">La misma intención mal resuelta.</Placeholder>,
                <Placeholder key="p">Regla que explica la diferencia.</Placeholder>,
              ],
            ]}
          />
        </section>

        {/* 14 · Anti-personalidad verbal */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="14. Anti-personalidad verbal" description="Registros, actitudes o maneras de hablar que no corresponden nunca a la marca." />
          <Table
            headers={['La marca no es…', 'Qué significa en la práctica']}
            rows={[1, 2].map((i) => [
              <Placeholder key="n">Registro o comportamiento verbal descartado {i}.</Placeholder>,
              <Placeholder key="s">Cómo reconocer y evitar ese comportamiento al escribir.</Placeholder>,
            ])}
          />
        </section>
      </div>

      <MetaFooter label="v1 · Verbal Identity · Strategy · Master Template" />
    </div>
  )
}
