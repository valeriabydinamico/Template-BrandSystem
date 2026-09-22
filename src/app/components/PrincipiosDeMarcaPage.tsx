import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { Badge } from './Badge'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Strategy · Principios de Marca — Myntex.
 *
 * Estructura fija del template, completada con datos reales de Notion
 * ("🏛️ Principios de Marca"). "Acompañamiento real" ya no es aspiracional:
 * el Ajuste v2.0 le da mecanismo (cinco piezas de servicio), aunque sigue
 * pendiente su prueba en un cliente externo — se nota en el campo "Ejemplo
 * visible" en vez del badge "Aspiracional". Se agregó el campo "Lo que
 * cuesta" a cada principio: dato nuevo de Notion que no tenía casillero en
 * el template.
 *
 * Se dejaron afuera las opciones exploradas/descartadas, los valores del
 * taller no usados, las decisiones de proceso y el listado de fuentes —
 * mismo criterio que el resto de Strategy.
 * ────────────────────────────────────────────────────────────────────────── */

function Quote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="w-full rounded-[10px] border-l-[3px] border-[#1677d8] bg-[#f7f9fb] px-[16px] py-[12px] text-[14px] italic leading-[21px]">
      {children}
    </blockquote>
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

interface Principio {
  nombre: string
  rector: string
  comoSeAplica: string
  queNoEs: string
  ejemploVisible: string
  loQueCuesta: string
  clienteSiente: string
  aspiracional?: boolean
}

/* ─── 02 · Resumen de principios ─── */

function SummaryCard({ principio }: { principio: Principio }) {
  return (
    <div className="flex w-full flex-col gap-[10px] rounded-[16px] border border-[#bac2cf] bg-white p-[20px]">
      <p className="font-bold text-[16px] leading-[22px] text-[#1c212b]">{principio.nombre}</p>
      <p className="text-[13px] leading-[19px] text-[#1c212b]">{principio.rector}</p>
      <p className="text-[13px] italic leading-[19px] text-[#8a94a8]">&ldquo;{principio.clienteSiente}&rdquo;</p>
    </div>
  )
}

/* ─── 03 · Desarrollo de cada principio ─── */

function PrincipleCard({ principio }: { principio: Principio }) {
  return (
    <div className="flex w-full flex-col gap-[16px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
      <div className="flex w-full flex-wrap items-start justify-between gap-[8px]">
        <p className="font-bold text-[22px] leading-[28px] text-[#1c212b]">{principio.nombre}</p>
        {principio.aspiracional && (
          <Badge tone="warning" size="sm">
            Aspiracional
          </Badge>
        )}
      </div>

      <div className="flex w-full flex-col gap-[6px]">
        <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">Principio rector</p>
        <Quote>{principio.rector}</Quote>
      </div>

      <Field label="Cómo se aplica">{principio.comoSeAplica}</Field>
      <Field label="Qué NO es">{principio.queNoEs}</Field>
      <Field label="Ejemplo visible">{principio.ejemploVisible}</Field>
      <Field label="Lo que cuesta">{principio.loQueCuesta}</Field>

      <div className="flex w-full flex-col gap-[6px]">
        <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">Lo que el cliente siente</p>
        <Quote>&ldquo;{principio.clienteSiente}&rdquo;</Quote>
      </div>
    </div>
  )
}

/* ─── 04 · Pregunta de auditoría ─── */

function ClosingStatement({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col items-start gap-[16px] rounded-[32px] bg-[#0f1e33] px-[40px] py-[48px]">
      <span className="font-bold text-[40px] leading-none text-[#4f8fd6]">&ldquo;</span>
      <p className="font-bold text-[26px] leading-[36px] tracking-[-0.2px] text-white">{children}</p>
    </div>
  )
}

/* ─── Página ─── */

const PRINCIPIOS: Principio[] = [
  {
    nombre: 'Primero probamos que funcione',
    rector: 'No recomendamos nada que no hayamos corrido nosotros.',
    comoSeAplica: 'Cada política de riesgo que proponemos salió de una decisión que tomamos en Tafi. Los números que mostramos son de producción, no de laboratorio.',
    queNoEs: 'No es "somos los que más sabemos". Es "no te vendemos lo que no hemos usado".',
    ejemploVisible: 'Los 28 pp de diferencia en first payment default. La economía del bot de cobranza.',
    loQueCuesta: 'No podemos vender roadmap. Lo que está por construirse no se ofrece.',
    clienteSiente: 'No me están vendiendo teoría. Esta gente ya pasó por esto.',
  },
  {
    nombre: 'Nos adaptamos a lo que existe',
    rector: 'El cliente no cambia su operación para poder trabajar con nosotros.',
    comoSeAplica: 'Nos integramos a su banco, su central de riesgo, su ERP y sus canales. Sumar uno nuevo es configurar, no programar.',
    queNoEs: 'No es decir que sí a todo. Es no obligarlo a rehacer lo que ya le funciona.',
    ejemploVisible: 'Conciliación bancaria configurable por entidad. La integración con Banco General.',
    loQueCuesta: 'Renunciamos a estandarizar del todo. Cada integración tiene trabajo real detrás.',
    clienteSiente: 'No tuve que romper nada para empezar.',
  },
  {
    nombre: 'Cada decisión tiene su razón',
    rector: 'Una decisión de crédito que no se puede explicar no sirve — ni al regulador, ni a la junta, ni a la persona.',
    comoSeAplica: 'Cada decisión es trazable y auditable. La trazabilidad se presenta como argumento comercial, no como anexo legal.',
    queNoEs: 'No es publicar el modelo. Es poder responder por qué cuando alguien pregunta.',
    ejemploVisible: 'Soluciones de riesgo explicables, auditables y probadas en producción. El código de pago con trazabilidad en tiempo real.',
    loQueCuesta: 'Descarta modelos de caja negra que podrían ser más precisos.',
    clienteSiente: 'Puedo defender esta decisión ante mi junta y ante el regulador.',
  },
  {
    nombre: 'Transparencia en cada letra',
    rector: 'Lo que firmas es lo que pagas. Sin mínimos garantizados, sin cobro por crédito originado, sin sorpresas en el año dos.',
    comoSeAplica: 'El precio escala con el uso real. El alcance y sus límites se dicen antes de firmar, no después.',
    queNoEs: 'No es ser el más barato. Es no ser una trampa.',
    ejemploVisible: 'La decisión de cobrar por consumo o por usuario y no por crédito — aprendizaje directo de lo que Tafi vivió con su proveedor.',
    loQueCuesta: 'Renunciamos a ingresos predecibles y a los mínimos garantizados que la categoría da por normales.',
    clienteSiente: 'Puedo crecer sin que me castiguen por crecer.',
  },
  {
    nombre: 'Acompañamiento real',
    rector: 'La venta termina cuando el cliente coloca su primer crédito, no cuando firma.',
    comoSeAplica: 'Solutions engineer asignado desde el día uno. Horas de implementación incluidas, forward deployed engineers, reentrenamiento de modelos y reporte mensual — el conocimiento queda con el cliente, no como dependencia.',
    queNoEs: 'No es soporte reactivo por tickets, y no es consultoría — es service-as-software: gente que opera para que el cliente no tenga que operar.',
    ejemploVisible: 'Oferta definida con cinco componentes. Sigue pendiente su prueba en cliente externo: se convierte en caso con el primer cliente fuera de Tafi.',
    loQueCuesta: 'Margen y estructura: exige un equipo de forward deployed engineers que no está facturando en otra parte.',
    clienteSiente: 'No me dejaron solo con el manual.',
  },
]

export function PrincipiosDeMarcaPage() {
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
          <p className="text-[16px] leading-[26px] text-[#33394a]">
            El ejercicio de valores del taller quedó vacío en todos sus cuadrantes menos uno: el de experiencias
            negativas. Ese cuadrante es el material más honesto del descubrimiento — cuatro de los cinco
            principios nacen por oposición a lo que Myntex sufrió como comprador.
          </p>
          <div className="flex w-full flex-col gap-[4px]">
            <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#8a94a8]">
              Nota de alcance
            </p>
            <p className="text-[14px] leading-[21px] text-[#1c212b]">
              Molded aún no tiene valores institucionales definidos. Estos principios de marca son guías de
              expresión y comportamiento para comunicaciones, diseño y experiencia de cliente. Cuando Molded
              formalice sus valores organizacionales, estos principios no los reemplazan: los toman como base y
              los traducen al lenguaje de marca.
            </p>
          </div>
        </section>

        {/* 02 · Resumen de principios */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="02. Resumen de principios" description="Lectura rápida antes del desarrollo completo." />
          <div className="grid grid-cols-1 gap-[16px] min-[560px]:grid-cols-2 min-[1100px]:grid-cols-4">
            {PRINCIPIOS.map((p) => (
              <SummaryCard key={p.nombre} principio={p} />
            ))}
          </div>
        </section>

        {/* 03 · Desarrollo de cada principio */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="03. Desarrollo de cada principio" description="Misma estructura para cada uno de los principios." />
          <div className="flex w-full flex-col gap-[20px]">
            {PRINCIPIOS.map((p) => (
              <PrincipleCard key={p.nombre} principio={p} />
            ))}
          </div>
        </section>

        {/* 04 · Pregunta de auditoría */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="04. Pregunta de auditoría" description="" />
          <ClosingStatement>¿Tu comunicación cumple con estos principios?</ClosingStatement>
        </section>
      </div>

      <MetaFooter label="v2.0 · Principios de Marca · Strategy · Myntex" status="Cliente" />
    </div>
  )
}
