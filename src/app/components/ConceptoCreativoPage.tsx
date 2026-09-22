import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { Note } from './Note'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Strategy · Concepto Creativo — Myntex.
 *
 * Estructura fija del template, completada con datos reales de Notion
 * ("💡 Concepto de Marca"): Threshold / El umbral. Se agregó una sección
 * nueva (07 Material y color) porque es contenido de resultado final (el
 * territorio cromático de partida y sus restricciones para F3) sin
 * casillero en el template. No se muestran las dos direcciones
 * alternativas exploradas ni el razonamiento de selección — mismo criterio
 * ya establecido para esta página.
 * ────────────────────────────────────────────────────────────────────────── */

const TH = 'px-[14px] py-[12px] text-left font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]'
const TD = 'px-[14px] py-[12px] align-top text-[13px] leading-[19px] text-[#1c212b]'

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
      <p className="text-[14px] leading-[21px] text-[#1c212b]">{children}</p>
    </div>
  )
}

/* ─── 04 · Los tres elementos del concepto ─── */

interface Elemento {
  nombre: string
  representa: string
  vinculo: string
}

function ElementCard({ elemento }: { elemento: Elemento }) {
  return (
    <div className="flex w-full flex-col gap-[10px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
      <p className="font-bold text-[18px] leading-[24px] text-[#1c212b]">{elemento.nombre}</p>
      <Field label="Qué representa">{elemento.representa}</Field>
      <Field label="Vínculo estratégico">{elemento.vinculo}</Field>
    </div>
  )
}

const ELEMENTOS: Elemento[] = [
  {
    nombre: 'El vano',
    representa: 'El hueco del arco. Lo que se ve a través. Familia: Aire.',
    vinculo: 'Eje Claridad — lo complejo se explica, no se esconde. El interior está vacío a propósito: no hay nada oculto detrás.',
  },
  {
    nombre: 'La secuencia',
    representa: 'Los arcos repetidos en profundidad. El camino ya recorrido. Familia: Evidencia.',
    vinculo: 'Eje Probado — las cinco etapas del ciclo y los cinco principios. La repetición modular es medición.',
  },
  {
    nombre: 'El corte',
    representa: 'El borde superior en diagonal y el escalón desplazado de la base. Familia: Ruptura.',
    vinculo: 'Eje Audaz — el arco no es simétrico ni clásico: está recortado y desplazado. No se conforma con cómo se ha hecho siempre.',
  },
]

/* ─── 05 · Traducción del concepto ─── */

function TranslationCard({ channel, description }: { channel: string; description: string }) {
  return (
    <div className="flex w-full flex-col gap-[8px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
      <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">{channel}</p>
      <p className="text-[14px] leading-[21px] text-[#1c212b]">{description}</p>
    </div>
  )
}

/* ─── 06 · Principios visuales ─── */

const PRINCIPIOS_VISUALES: { nombre: string; regla: string; aplicacion: string }[] = [
  {
    nombre: 'El arco nunca está solo',
    regla: 'Todo arco enmarca contenido, imagen o dato. Si está vacío y no es la firma de marca, se elimina.',
    aplicacion: 'Todas',
  },
  {
    nombre: 'Nunca simétrico',
    regla: 'El arco lleva siempre corte diagonal en el plano o desnivel en la base. Un arco simétrico y centrado no es Myntex.',
    aplicacion: 'Identidad · campaña · producto',
  },
  {
    nombre: 'Toda cifra trae su método',
    regla: 'Ninguna cifra aparece sin unidad y sin la nota de cómo se midió, en la misma pieza. Si el método no cabe, la cifra no va.',
    aplicacion: 'Web · deck · social',
  },
  {
    nombre: 'Nada vive en el pie de página',
    regla: 'Precio, límite y condición van en el mismo bloque visual que la promesa, nunca por debajo del 70% del cuerpo de texto.',
    aplicacion: 'Precio · contratos · campañas',
  },
  {
    nombre: 'Superficie, no gradiente',
    regla: 'Cero gradientes tech. Si hay superficie, tiene grano o textura de material.',
    aplicacion: 'Todas',
  },
]

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
          <p className="text-[16px] leading-[26px] text-[#33394a]">
            Umbral es una de las poquísimas palabras que significa exactamente lo mismo en el lenguaje cotidiano y
            en el lenguaje del crédito: en la vida es la línea de la puerta que se cruza, en riesgo es el corte
            donde se decide el sí y el no. No hubo que construir el puente entre la marca y el negocio — ya existía
            en el idioma.
          </p>
        </section>

        {/* 02 · Nombre del concepto */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="02. Nombre del concepto" description="Lenguaje cotidiano y entendible — sin jerga de agencia." />
          <div className="flex w-full flex-col items-start gap-[8px] rounded-[32px] bg-[#0f1e33] px-[40px] py-[48px]">
            <p className="font-bold text-[36px] leading-[44px] tracking-[-0.2px] text-white">Threshold — El umbral</p>
            <p className="text-[14px] leading-[21px] text-[#c7d2e0]">
              Inglés (Threshold) para concepto, sistema, F3 e inversores · Español (El umbral) para explicación,
              deck local y ventas.
            </p>
          </div>
        </section>

        {/* 03 · Mecanismo */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="03. Mecanismo" description="Cómo funciona el concepto: qué relación, transformación o dinámica produce." />
          <div className="flex w-full flex-col gap-[8px] rounded-[16px] border border-[#bac2cf] bg-[#f7f9fb] p-[24px]">
            <p className="text-[16px] leading-[26px] text-[#1c212b]">
              Un pórtico es la forma más antigua de decir &ldquo;aquí se pasa&rdquo;. Myntex no baja el umbral:
              construye el paso. El escalón es la pieza que más trabaja — la base del arco no está a ras, hay un
              desnivel que te sube. Es literalmente lo que hace Myntex: prestas como un banco sin tener que ser
              uno.
            </p>
          </div>
        </section>

        {/* 04 · Los tres elementos del concepto */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="04. Los tres elementos del concepto" description="Cada elemento existe por un motivo estratégico, no solo estético." />
          <div className="grid grid-cols-1 gap-[16px] min-[1100px]:grid-cols-3">
            {ELEMENTOS.map((el) => (
              <ElementCard key={el.nombre} elemento={el} />
            ))}
          </div>
          <p className="text-[13px] italic leading-[19px] text-[#8a94a8]">
            La secuencia lleva cinco arcos — no es arbitrario: son los cinco principios de marca y las cinco
            etapas del ciclo (originar, decidir, contabilizar, recaudar, conversar).
          </p>
        </section>

        {/* 05 · Traducción del concepto */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="05. Traducción del concepto" description="" />
          <div className="grid grid-cols-1 gap-[16px] min-[1100px]:grid-cols-3">
            <TranslationCard
              channel="Visual"
              description="Toda pieza es la misma estructura: un vano que enmarca la prueba, una secuencia que indica recorrido, y un corte que rompe la simetría."
            />
            <TranslationCard
              channel="Verbal"
              description={'"El umbral que decía si podías prestar medía tu tamaño. Ahora mide tu criterio." La metáfora aparece en narrativa sin volverse literal.'}
            />
            <TranslationCard
              channel="Experiencia"
              description="El arco es el marco de las interfaces de decisión: el corte de aprobación, las variables que lo mueven, el punto donde el analista puede intervenir."
            />
          </div>
        </section>

        {/* 06 · Principios visuales */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="06. Principios visuales" description="Cinco reglas — comprobables por alguien ajeno al proyecto." />
          <Table
            headers={['Nombre', 'Regla visual', 'Aplicación']}
            rows={PRINCIPIOS_VISUALES.map((p) => [p.nombre, p.regla, p.aplicacion])}
          />
        </section>

        {/* 07 · Material y color */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="07. Material y color" description="" />
          <p className="text-[16px] leading-[26px] text-[#33394a]">
            El acero corten de la referencia visual no es decoración: es superficie que registra el tiempo. Se
            oxida a la intemperie y esa oxidación es la prueba de que estuvo ahí — el eje Probado convertido en
            textura, antítesis del gradiente tech que usa ~70% del sector. Territorio cromático de partida: óxido,
            tierra y ocre profundo contra neutros de hormigón.
          </p>
          <Note>
            Dos cautelas para F3: si se va a terracota, debe ser más profundo, más terroso y menos saturado que el
            naranja de Mo y el coral de Mambu. Y el arco está de moda en hospitality y wellness — lo que salva
            estas referencias del cliché es el corte diagonal y el escalón desplazado, nunca un arco simétrico y
            centrado.
          </Note>
        </section>
      </div>

      <MetaFooter label="v1.0 · Concepto Creativo · Strategy · Myntex" status="Cliente" />
    </div>
  )
}
