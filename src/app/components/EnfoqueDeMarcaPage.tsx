import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { Note } from './Note'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Strategy · Enfoque de Marca — Myntex.
 *
 * Estructura fija según "enfoque-de-marca..." (el resultado final, no el
 * proceso). Completada con datos reales de Notion ("🧭 Enfoque de marca"),
 * usando siempre la versión vigente cuando hay ajustes: propósito → Ajuste
 * v2.0 (se retira la palabra "privilegio"); mecanismos → Ajuste v3.1
 * (reescritos como 5 principios de acción con servicio nombrado).
 *
 * Se dejaron afuera las opciones exploradas y descartadas, las decisiones de
 * proceso, los vacíos de investigación y el listado de fuentes — igual
 * criterio que en Público Objetivo: se documenta el resultado vigente, no
 * el proceso de research.
 * ────────────────────────────────────────────────────────────────────────── */

const TH =
  'px-[14px] py-[12px] text-left font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]'
const TD = 'px-[14px] py-[12px] align-top text-[13px] leading-[19px] text-[#1c212b]'

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

/* ─── Problema humano — cita destacada ─── */

function QuoteCallout({ children }: { children: ReactNode }) {
  return (
    <blockquote className="w-full rounded-[12px] border-l-[3px] border-[#1677d8] bg-[#f7f9fb] px-[20px] py-[16px] text-[16px] italic leading-[24px] text-[#3d4653]">
      {children}
    </blockquote>
  )
}

/* ─── Propósito / Visión / Misión — bloque protagonista ─── */

function StatementBlock({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col items-start gap-[16px] rounded-[32px] bg-[#0f1e33] px-[40px] py-[48px]">
      <span className="font-bold text-[40px] leading-none text-[#4f8fd6]">&ldquo;</span>
      <p className="font-medium text-[26px] italic leading-[36px] tracking-[-0.2px] text-[#c7d2e0]">{children}</p>
    </div>
  )
}

/* ─── Cómo lo hacemos — mecanismos repetibles ─── */

interface Mecanismo {
  nombre: string
  servicio: string
  descripcion: string
}

function MechanismCard({ index, mecanismo }: { index: number; mecanismo: Mecanismo }) {
  return (
    <div className="flex w-full flex-col gap-[8px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
      <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">
        Mecanismo {index}
      </p>
      <p className="font-bold text-[18px] leading-[24px] text-[#1c212b]">{mecanismo.nombre}</p>
      <p className="text-[14px] leading-[21px]">{mecanismo.descripcion}</p>
      <span className="w-fit rounded-[999px] bg-[#f1f4f7] px-[10px] py-[4px] font-mono text-[12px] text-[#3d5e87]">
        {mecanismo.servicio}
      </span>
    </div>
  )
}

const MECANISMOS: Mecanismo[] = [
  {
    nombre: 'Correr el negocio antes de venderlo',
    servicio: 'Myntex Model',
    descripcion: 'El modelo llega entrenado con cartera real y con el método con el que se midió.',
  },
  {
    nombre: 'Parametrizar en vez de programar',
    servicio: 'Myntex Setup',
    descripcion: 'Implementación por configuración, con horas incluidas en la propuesta.',
  },
  {
    nombre: 'Entrar sin que el cliente rompa lo que ya funciona',
    servicio: 'Myntex Connect',
    descripcion: 'Integración con su banco, su central de riesgo, su ERP y sus canales.',
  },
  {
    nombre: 'Quedarnos hasta el primer desembolso',
    servicio: 'Myntex Deploy',
    descripcion: 'Ingenieros dentro del equipo del cliente hasta que coloque su primer crédito.',
  },
  {
    nombre: 'Devolver cada mes lo que aprendimos de su cartera',
    servicio: 'Myntex Review',
    descripcion: 'Reentrenamiento de modelos, reporte de indicadores y políticas.',
  },
]

/* ─── Qué hacemos — bloque funcional ─── */

function OfferCard({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col gap-[8px] rounded-[16px] border border-[#bac2cf] bg-[#f7f9fb] p-[24px]">
      <p className="text-[16px] leading-[26px]">{children}</p>
    </div>
  )
}

const PRODUCTOS: { nombre: string; resuelve: string }[] = [
  { nombre: 'Core de Crédito', resuelve: 'Ciclo de vida completo: originación, cartera, mora, cargos, documentos, reportería' },
  { nombre: 'Motor de Decisiones y Scoring', resuelve: 'Underwriting con ML, scoring por huella digital, motor de reglas' },
  { nombre: 'Motor Financiero y Contable', resuelve: 'Conciliación bancaria, contabilidad automatizada, ACH, facturación electrónica' },
  { nombre: 'Trazabilidad de Pagos', resuelve: 'Código de pago único que elimina la mala aplicación de fondos' },
  { nombre: 'Canal Conversacional', resuelve: 'Onboarding, checkout y cobranza por WhatsApp' },
  { nombre: 'Comercios y Punto de Venta', resuelve: 'Enrolamiento, portal de comercios, POS Android' },
]

/* ─── Principios estratégicos ─── */

const PRINCIPIOS_ESTRATEGICOS: { principio: string; significa: string; filtro: string }[] = [
  {
    principio: 'Mostramos, no prometemos',
    significa: 'Todo lo que decimos se puede ver corriendo hoy',
    filtro: '¿Hay un número real detrás?',
  },
  {
    principio: 'Una idea, no un catálogo',
    significa: 'Si no cabe en una frase, no está listo para salir',
    filtro: '¿Se explica en una frase?',
  },
  {
    principio: 'Una sola voz para dos audiencias',
    significa: 'Al que construye y al que decide el riesgo les hablamos igual',
    filtro: '¿Le sirve al CIO y al de Riesgo?',
  },
]

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
          <p className="text-[16px] leading-[26px] text-[#33394a]">
            Molded, el holding, aún no tiene misión, visión ni valores institucionales definidos. Esto se declara,
            no se asume: el enfoque de Myntex no pisa nada existente, y hay una oportunidad en el orden — si Myntex
            cierra su enfoque primero, se convierte en el borrador de lo que el holding después formalice.
          </p>
          <QuoteCallout>
            &ldquo;Tengo los clientes. Tengo el tráfico, la relación, las ganas de venderles a crédito. Lo que no
            tengo es cómo saber a quién decirle que sí. Y si me equivoco, el que se queda con la cartera en la
            lona soy yo.&rdquo;
          </QuoteCallout>
        </section>

        {/* 02 · Propósito — Por qué */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="02. Propósito — Por qué" description="Por qué existe la marca más allá de lo que vende." />
          <StatementBlock>Acortar la distancia entre querer prestar y poder hacerlo.</StatementBlock>
          <p className="text-[15px] leading-[23px] text-[#33394a]">
            Creemos que la distancia más larga en los negocios es la que va del querer al poder. En el crédito,
            esa distancia siempre se midió en tamaño: cuántos ingenieros tienes, cuánto puedes pagar, cuántos años
            llevas. Nosotros la medimos en criterio. Existimos para acortarla.
          </p>
        </section>

        {/* 03 · Visión de marca */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="03. Visión de marca" description="El futuro que la marca busca ayudar a construir." />
          <StatementBlock>
            Ser el estándar de la región para lanzar y operar crédito — y que llegar ahí signifique que prestar
            bien dejó de ser un privilegio de los grandes.
          </StatementBlock>
          <p className="text-[15px] leading-[23px] text-[#33394a]">
            La vara de medir para el equipo, la pregunta que cualquiera puede responder después de un trato: <em>¿Fuimos el camino más corto?</em> Si el cliente tardó nueve meses, si el contrato lo frenó, si no entendió qué vendíamos — no lo fuimos.
          </p>
        </section>

        {/* 04 · Misión de marca */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="04. Misión de marca" description="" />
          <StatementBlock>
            Damos a retailers, financieras, cooperativas y bancos el core y el criterio de riesgo con los que
            operamos un negocio de crédito real, para que puedan prestar bien desde el primer día.
          </StatementBlock>
          <p className="text-[13px] leading-[19px] text-[#8a94a8]">
            Diferencia con la visión: la misión se cumple hoy y se puede auditar — corre en producción con la
            cartera de Tafi. La visión no se cumple todavía.
          </p>
        </section>

        {/* 05 · Cómo lo hacemos */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader
            title="05. Cómo lo hacemos"
            description="Cinco principios de acción, cada uno con su servicio nombrado."
          />
          <div className="grid grid-cols-1 gap-[16px] min-[560px]:grid-cols-2 min-[1100px]:grid-cols-3">
            {MECANISMOS.map((m, i) => (
              <MechanismCard key={m.nombre} index={i + 1} mecanismo={m} />
            ))}
          </div>
        </section>

        {/* 06 · Qué hacemos */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="06. Qué hacemos" description="" />
          <OfferCard>El sistema operativo del crédito — modular —, más implementación y parametrización.</OfferCard>
          <Table
            headers={['Producto insignia', 'Qué resuelve']}
            rows={PRODUCTOS.map((p) => [p.nombre, p.resuelve])}
          />
        </section>

        {/* 07 · Golden Circle */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="07. Golden Circle" description="Resumen de Propósito, Cómo y Qué." />
          <Table
            headers={['Capa', 'Myntex']}
            rows={[
              ['Por qué', 'Acortar la distancia entre querer prestar y poder hacerlo'],
              [
                'Cómo',
                'Correr el negocio antes de venderlo · parametrizar en vez de programar · entrar sin que el cliente rompa lo que ya funciona · quedarnos hasta el primer desembolso · devolver cada mes lo aprendido',
              ],
              [
                'Qué',
                'El sistema operativo del crédito, modular: core, decisiones, contabilidad, recaudo, canal conversacional y POS — más implementación',
              ],
            ]}
          />
        </section>

        {/* 08 · Principios estratégicos */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader
            title="08. Principios estratégicos"
            description="Reglas que orientan qué se dice y qué no — distinto de Principios de Marca, que orienta el comportamiento."
          />
          <Table
            headers={['Principio', 'Qué significa', 'Filtro']}
            rows={PRINCIPIOS_ESTRATEGICOS.map((p) => [p.principio, p.significa, p.filtro])}
          />
          <Note>
            &ldquo;El contrato acompaña, no atrapa&rdquo; nació acá como principio estratégico y migró a Principios
            de Marca como &ldquo;Transparencia en cada letra&rdquo;: no gobierna el discurso, gobierna el
            comportamiento.
          </Note>
        </section>
      </div>

      <MetaFooter label="v3.1 · Enfoque de Marca · Strategy · Myntex" status="Cliente" />
    </div>
  )
}
