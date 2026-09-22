import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Strategy · Esencia y Personalidad — plantilla en blanco (master template).
 *
 * Cómo se siente y se comporta la marca: tres ejes de personalidad, la
 * esencia que los sintetiza y el territorio conceptual que ocupa — no el
 * procedimiento de derivación que los construye. Sin datos de marca todavía:
 * contenido placeholder entre corchetes. "Evolución de la percepción" es
 * condicional (solo marcas con historia) — queda solo como nota. Tono de
 * voz, palabras a favorecer/evitar, anti-personalidad y "Así sí/Así no"
 * NO se documentan acá — viven en Verbal Identity.
 * ────────────────────────────────────────────────────────────────────────── */

const TH = 'px-[14px] py-[12px] text-left font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]'
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

function Quote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="w-full rounded-[10px] border-l-[3px] border-[#1677d8] bg-[#f7f9fb] px-[16px] py-[12px] text-[14px] italic leading-[21px]">
      <Placeholder>{children}</Placeholder>
    </blockquote>
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

/* ─── 02 · Los tres ejes de personalidad ─── */

const AXES = ['Criterio', 'Relación', 'Energía']

function AxisCard({ dimension }: { dimension: string }) {
  return (
    <div className="flex w-full flex-col gap-[14px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
      <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">{dimension}</p>
      <div className="flex flex-col gap-[2px]">
        <p className="font-bold text-[20px] leading-[26px] text-[#1c212b]">
          <Placeholder>Nombre propio del eje</Placeholder>
        </p>
        <p className="text-[14px] italic leading-[20px]">
          <Placeholder>Frase breve que concreta el significado del eje.</Placeholder>
        </p>
      </div>
      <Field label="Origen">Dato, hallazgo o evidencia de la que nace este eje.</Field>
      <Quote>[X] no es [Y], es [Z].</Quote>
      <Field label="Comportamiento">Cómo actúa la marca desde este eje.</Field>
      <Field label="Narrativa">Cómo se expresa o comunica desde este eje.</Field>
      <Field label="Experiencia">Cómo se manifiesta en producto, servicio o puntos de contacto.</Field>
      <Field label="Expresión visual">Cómo se traduce en forma, composición, densidad, color u otros recursos visuales.</Field>
    </div>
  )
}

/* ─── 06 · Territorio conceptual ─── */

function TerritoryBlock() {
  return (
    <div className="flex w-full flex-col gap-[20px] rounded-[32px] bg-[#0f1e33] px-[40px] py-[48px]">
      <p className="font-bold text-[32px] leading-[40px] tracking-[-0.2px] text-white">
        <Placeholder>Nombre propio del territorio (2–3 palabras)</Placeholder>
      </p>
      <div className="flex flex-col gap-[4px]">
        <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#8fa3c2]">Momento humano</p>
        <p className="text-[15px] leading-[22px] text-[#c7d2e0]">
          <Placeholder>Situación concreta en la que la marca aparece en la vida de las personas.</Placeholder>
        </p>
      </div>
      <blockquote className="w-full rounded-[10px] border-l-[3px] border-[#4f8fd6] bg-white/5 px-[16px] py-[12px] text-[15px] italic leading-[22px] text-[#c7d2e0]">
        La gente viene a nosotros para sentir [______] cuando está frente a [______].
      </blockquote>
      <div className="flex flex-col gap-[4px]">
        <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#8fa3c2]">Enemigo</p>
        <p className="text-[15px] leading-[22px] text-[#c7d2e0]">
          <Placeholder>Condición que la marca busca combatir (no un competidor).</Placeholder>
        </p>
      </div>
      <div className="flex flex-col gap-[4px]">
        <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#8fa3c2]">Rol de la marca</p>
        <p className="text-[15px] leading-[22px] text-[#c7d2e0]">[Verbo 1] · [Verbo 2] · [Verbo 3]</p>
      </div>
    </div>
  )
}

/* ─── Página ─── */

export function EsenciaYPersonalidadPage() {
  return (
    <div id="strategy.esencia-personalidad" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Strategy"
        title="Esencia y Personalidad"
        paragraphs={['Cómo se siente y se comporta la marca — tres ejes de personalidad, la esencia que los sintetiza y el territorio conceptual que ocupa.']}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        {/* 01 · Contexto */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="01. Contexto" description="" />
          <p className="text-[16px] leading-[26px]">
            <Placeholder>
              Breve explicación de cómo la personalidad determina la forma en que la marca se comporta, se
              expresa y se percibe.
            </Placeholder>
          </p>
        </section>

        {/* 02 · Los tres ejes de personalidad */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="02. Los tres ejes de personalidad" description="Criterio, Relación y Energía — el nombre visible de cada eje es propio de la marca." />
          <div className="grid grid-cols-1 gap-[16px] min-[1100px]:grid-cols-3">
            {AXES.map((dimension) => (
              <AxisCard key={dimension} dimension={dimension} />
            ))}
          </div>
        </section>

        {/* 03 · Puente visual */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="03. Puente visual" description="Traduce los tres ejes en una base para el sistema visual — conexión entre Strategy y el sistema visual." />
          <Table
            headers={['Eje', 'Familia de formas', 'Se siente como', 'Recursos secundarios', 'Densidad', 'Rol del recurso', 'Contextos de uso']}
            rows={AXES.map((dimension) => [
              <Placeholder key="eje">{dimension}</Placeholder>,
              <Placeholder key="familia">Nombre del universo gráfico asociado.</Placeholder>,
              <Placeholder key="siente">3–4 atributos perceptivos.</Placeholder>,
              <Placeholder key="recursos">Recursos gráficos que pueden expresar el eje.</Placeholder>,
              <Placeholder key="densidad">Baja / Media / Alta</Placeholder>,
              <Placeholder key="rol">Firma / guía / contenedor / atmósfera.</Placeholder>,
              <Placeholder key="contextos">Momentos o tipos de comunicación donde este eje domina.</Placeholder>,
            ])}
          />
        </section>

        {/* 04 · Matriz intención × eje */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="04. Matriz intención × eje" description="Qué eje debe dominar según el contexto de comunicación." />
          <Table
            headers={['Contexto', 'Eje dominante', 'Familia visual', 'Densidad']}
            rows={[
              [
                <Placeholder key="c">Contexto</Placeholder>,
                <Placeholder key="e">Eje</Placeholder>,
                <Placeholder key="f">Familia</Placeholder>,
                <Placeholder key="d">Densidad</Placeholder>,
              ],
            ]}
          />
        </section>

        {/* 05 · Esencia de marca */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="05. Esencia de marca" description="Frase única que sintetiza los tres ejes — no una idea independiente." />
          <StatementBlock>Frase breve que integra los tres ejes de personalidad.</StatementBlock>
        </section>

        {/* 06 · Territorio conceptual */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="06. Territorio conceptual" description="Un espacio o territorio, no simplemente un atributo de personalidad." />
          <TerritoryBlock />
        </section>

        {/* 07 · Somos / No somos */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="07. Somos / No somos" description="“No somos” describe conductas reales que se evitan, no el adjetivo contrario." />
          <Table
            headers={['Somos', 'No somos']}
            rows={[
              [
                <Placeholder key="s">Comportamiento o característica propia.</Placeholder>,
                <Placeholder key="n">Comportamiento concreto que se descarta.</Placeholder>,
              ],
            ]}
          />
        </section>

        {/* 08 · Evolución de la percepción (opcional) */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader
            title="08. Evolución de la percepción"
            description="Opcional — solo en marcas con historia y una percepción previa relevante que documentar."
          />
        </section>
      </div>

      <MetaFooter label="v1 · Esencia y Personalidad · Strategy · Master Template" />
    </div>
  )
}
