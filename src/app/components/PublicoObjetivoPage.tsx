import { Fragment, type ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { Badge } from './Badge'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Strategy · Público Objetivo — Myntex.
 *
 * Estructura fija según "publico-objetivo-estructura-presentacion.md" (el
 * resultado final de la definición, no el proceso que lo construye), ahora
 * completada con datos reales del brief de Myntex (Notion, "🎯 Público
 * Objetivo", actualizado con el Ajuste v2.0 — comité de compra confirmado con
 * evidencia propia del equipo).
 *
 * Contenido de Notion que no encajaba en ninguna de las 5 secciones base se
 * agregó como secciones nuevas dentro de la misma página (03 Hallazgo, 05
 * Comité de compra, 08 Exclusiones) — mismo criterio de UI, sin crear
 * subpáginas. Se dejó afuera el material puramente metodológico (vacíos de
 * investigación pendientes de validar, listado de fuentes, historial del
 * ajuste v2.0): la página documenta el resultado vigente, no el proceso ni
 * el research status.
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

/* ─── 02 · Foco de audiencia ─── */

function AudienceCard({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <div className="flex h-full min-w-0 flex-col items-start gap-[10px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
      <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">{eyebrow}</p>
      <p className="text-[15px] leading-[22px] text-[#1c212b]">{children}</p>
    </div>
  )
}

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

/* ─── 03 · Hallazgo ─── */

function InsightCallout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col gap-[8px] rounded-[16px] border border-[#bfd4ef] bg-[#eef4fc] px-[24px] py-[20px]">
      <p className="text-[15px] leading-[23px] text-[#173a63]">{children}</p>
    </div>
  )
}

/* ─── 04 · Segmentos prioritarios ─── */

interface Segment {
  apodo: string
  nombre: string
  secundario?: boolean
  contexto: string
  necesidadFuncional: string
  necesidadEmocional: string
  tensionPrincipal: string
  momentoCritico: string
  quienFirma: string
  quienVeta: string
  usaADiario: string
}

function DataRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex w-full flex-wrap items-baseline gap-x-[16px] gap-y-[2px] rounded-[10px] bg-[#f1f4f7] p-[14px]">
      <p className="w-[180px] max-w-full shrink-0 font-medium text-[13px] leading-[18px] text-[#5f6b78]">{label}</p>
      <p className="min-w-0 flex-1 text-[14px] leading-[19px] text-[#1c212b]">{children}</p>
    </div>
  )
}

function SegmentCard({ segment }: { segment: Segment }) {
  return (
    <div className="flex w-full flex-col gap-[16px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
      <div className="flex flex-wrap items-center gap-[10px]">
        <p className="font-bold text-[17px] leading-[22px] text-[#1c212b]">&ldquo;{segment.apodo}&rdquo;</p>
        {segment.secundario && (
          <Badge tone="warning" size="sm">
            Secundario
          </Badge>
        )}
      </div>
      <p className="text-[13px] font-semibold uppercase tracking-[0.4px] text-[#59667d]">{segment.nombre}</p>
      <div className="flex w-full flex-col gap-[8px]">
        <DataRow label="Contexto">{segment.contexto}</DataRow>
        <DataRow label="Necesidad funcional">{segment.necesidadFuncional}</DataRow>
        <DataRow label="Necesidad emocional">{segment.necesidadEmocional}</DataRow>
        <DataRow label="Tensión principal">{segment.tensionPrincipal}</DataRow>
        <DataRow label="Momento crítico">{segment.momentoCritico}</DataRow>
        <DataRow label="Quién firma">{segment.quienFirma}</DataRow>
        <DataRow label="Quién veta">{segment.quienVeta}</DataRow>
        <DataRow label="Usa a diario">{segment.usaADiario}</DataRow>
      </div>
    </div>
  )
}

const SEGMENTOS: Segment[] = [
  {
    apodo: 'El que tiene la fila',
    nombre: 'Retailer con clientes y sin criterio',
    contexto:
      'Tiene tráfico, base de clientes y ganas de vender a crédito. Ya lo intentó o está por intentarlo. En palabras del equipo: "los retails no saben prestar la plata". Referencia real del mercado: Grupo Tova lanzó crédito y quebró su financiera.',
    necesidadFuncional: 'Un crédito llave en mano integrado a su punto de venta, con decisión en tiempo real.',
    necesidadEmocional: 'Respaldo · tranquilidad',
    tensionPrincipal: 'Quiere colocar crédito ya sin quebrar la cartera',
    momentoCritico:
      'Dos ventanas: antes de lanzar, cuando descubre que no sabe a quién decir que sí. Y después de lanzar, cuando la mora del primer trimestre le demuestra que no sabía prestar. La segunda ventana convierte mejor.',
    quienFirma: 'CEO / Gerente Comercial — hipótesis, sin evidencia de mercado',
    quienVeta: '—',
    usaADiario: 'Operación de crédito',
  },
  {
    apodo: 'El que presta a pulso',
    nombre: 'Financiera o cooperativa subescalada — financieras en fase de escala',
    contexto:
      'Financieras en fase de escala: ya tienen recorrido y posicionamiento, prestan hoy con un sistema interno construido a mano que no es preciso, y quieren crecer. Del taller: "¿cuántas financieras aquí en Panamá o en Latinoamérica pueden pagar un Mambu de 2.5 millones de dólares al año?"',
    necesidadFuncional: 'Core de crédito, conciliación y trazabilidad de pagos a un costo que su tamaño soporte.',
    necesidadEmocional: 'Dignidad técnica · control',
    tensionPrincipal: 'Quiere tecnología de banco sin costos ni tiempos de banco',
    momentoCritico:
      'Cuando el volumen supera lo que el Excel aguanta y aparece el primer error grave de aplicación de pagos — "mano negra", en palabras del equipo.',
    quienFirma: 'CEO o socio, con el CIO como validador — evidencia: casos de HES FinTech',
    quienVeta: 'CIO',
    usaADiario: 'Head of Loan Management',
  },
  {
    apodo: 'El grande que no puede moverse',
    nombre: 'Banco con core de crédito rezagado',
    contexto:
      'Tiene capital, criterio de riesgo y licencia. Lo que no tiene es un core que le permita lanzar. Del taller: "un banco tarda meses en montar esto". Caso vivo: propuesta en curso con Global Bank.',
    necesidadFuncional: 'Modernizar el core de crédito y el motor de decisiones sin detener la operación existente.',
    necesidadEmocional: 'Seguridad · velocidad sin sobresaltos',
    tensionPrincipal: 'Quiere lanzar rápido sin poner en riesgo lo que ya corre',
    momentoCritico: 'Cuando el comité aprueba un producto nuevo y Tecnología responde con un plazo de nueve meses.',
    quienFirma: 'CIO / CTO / VP of Technology — evidencia: Mambu · Towerbank (Panamá), Ualá, Platcorp, Western Union',
    quienVeta: 'Riesgo y Cumplimiento',
    usaADiario: 'Operaciones de crédito',
  },
  {
    apodo: 'El que corre contra el reloj',
    nombre: 'Fintech o BNPL fuera de Panamá',
    secundario: true,
    contexto:
      'Quiere salir al mercado, no construir infraestructura. Del taller: "no quiere desarrollar, no tienen la plata para contratar a un equipo, quiero ya pa ya" y "te van a demorar más de 6 meses en tener piloto". Permanece como secundario hasta que exista la regla de governance sobre a qué competidores de Tafi se les vende y a cuáles no.',
    necesidadFuncional: 'Stack completo operativo en semanas, sin equipo propio de desarrollo.',
    necesidadEmocional: 'Autonomía',
    tensionPrincipal: 'Quiere lanzar ya sin heredar deuda técnica ajena',
    momentoCritico: 'La decisión construir vs. comprar, cuando calcula el time-to-market contra su ventana de financiación.',
    quienFirma: 'CTO o founder',
    quienVeta: '—',
    usaADiario: 'Equipo de producto',
  },
]

/* ─── 05 · Comité de compra ─── */

const ROLES_COMITE = [
  {
    rol: 'SME de datos',
    que: 'Evalúa si el motor cumple los criterios técnicos del modelo. Es el subject matter expert de todo lo que sea data, y quien implementa.',
  },
  {
    rol: 'CTO',
    que: 'Da el go / no-go. Valida la compatibilidad y la integración con la arquitectura existente. Sin su visto bueno no entra nada.',
  },
  {
    rol: 'VP de Operaciones',
    que: 'Define el business logic: qué reglas y qué políticas gobiernan el motor de decisiones y cómo se usa internamente.',
  },
]

/* ─── 06 · Tensión estratégica central ─── */

function TensionStatement({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col items-start gap-[16px] rounded-[32px] bg-[#0f1e33] px-[40px] py-[48px]">
      <span className="font-bold text-[40px] leading-none text-[#4f8fd6]">&ldquo;</span>
      <p className="font-medium text-[26px] italic leading-[36px] tracking-[-0.2px] text-[#c7d2e0]">{children}</p>
    </div>
  )
}

/* ─── 07 · Implicaciones por segmento ─── */

const IMPLICACIONES: { segmento: string; prometer: string; sonar: string; actuar: string }[] = [
  {
    segmento: 'El que tiene la fila',
    prometer: 'Que puede vender a crédito sin convertirse en financiera ni asumir un riesgo que no sabe leer',
    sonar: 'Claro y sin jerga financiera. Habla de negocio y de cartera, no de arquitectura',
    actuar: 'Llega con criterio, no con un manual. Muestra números de mora reales, no funcionalidades',
  },
  {
    segmento: 'El que presta a pulso',
    prometer: 'Tecnología del nivel de un banco, dimensionada a su escala y a su bolsillo',
    sonar: 'Respetuoso, nunca condescendiente. Trata a una financiera de veinte personas como a un cliente serio',
    actuar: 'Precio transparente y sin cláusulas que ahoguen al que empieza. Implementación acompañada',
  },
  {
    segmento: 'El grande que no puede moverse',
    prometer: 'Modernizar sin detener lo que ya corre, y hacerlo en meses y no en años',
    sonar: 'Sobrio y preciso. Rigor, cumplimiento y evidencia técnica por delante',
    actuar: 'Documenta, certifica y muestra la operación real. Convive con el legacy en vez de exigir reemplazo total',
  },
  {
    segmento: 'El que corre contra el reloj',
    prometer: 'Salir al mercado con un stack probado, sin heredar deuda técnica ni contratos que aprisionen',
    sonar: 'Directo y sin ceremonia. De operador a operador',
    actuar: 'Contrato que escala con el cliente, no contra él. Solutions engineer incluido desde el día uno',
  },
]

/* ─── 08 · Lo que queda explícitamente fuera ─── */

const EXCLUSIONES: { quien: string; porque: string }[] = [
  {
    quien: 'Competidores directos de Tafi en Panamá',
    porque: 'Sin regla de governance escrita, abrir este flanco pone en riesgo el negocio que sostiene la prueba de valor',
  },
  {
    quien: 'Quien compra solo por precio',
    porque: 'Si el criterio de decisión es plumbing barato, Myntex pierde por diseño: su ventaja cuesta más y vale más',
  },
  {
    quien: 'Organizaciones sin base de clientes propia',
    porque: 'No tienen a quién prestar. El modelo asume que el cliente trae la demanda',
  },
  {
    quien: 'Bancos que solo buscan un proveedor de nicho',
    porque: 'Myntex entra por el core de crédito completo, no como pieza suelta de un ecosistema ajeno',
  },
]

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
          <p className="text-[16px] leading-[26px] text-[#33394a]">
            No se segmenta por tamaño ni por industria. Se segmenta por qué le falta a cada organización para
            prestar bien, quién firma la compra y en qué momento de negocio está. La condición que une al nicho
            no es el sector, es la carencia: al retailer le falta el criterio de riesgo, a la financiera le falta
            tecnología a su escala, al banco le falta un core que le deje moverse — tres carencias distintas, un
            mismo proveedor.
          </p>
        </section>

        {/* 02 · Foco de audiencia */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="02. Foco de audiencia" description="De lo amplio al nicho donde la marca es claramente mejor." />
          <AudienceFocusRow
            items={[
              { eyebrow: 'Audiencia amplia', value: 'Organizaciones que quieren prestar.' },
              { eyebrow: 'Cliente', value: 'Las que quieren prestar más y mejor y su tecnología no les alcanza.' },
              {
                eyebrow: 'Nicho prioritario',
                value:
                  'Retailers, financieras, cooperativas y bancos que quieren lanzar o escalar crédito y no tienen —ni van a montar— el aparato completo para hacerlo bien.',
              },
            ]}
          />
        </section>

        {/* 03 · El hallazgo que ordena la comunicación */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="03. El hallazgo que ordena la comunicación" description="" />
          <InsightCallout>
            El core se le vende a Tecnología. El motor de decisiones se le vende a Riesgo. Ningún competidor sirve
            a los dos compradores: Mambu le habla solo a Tecnología, Taktile y Provenir solo a Riesgo, Mo no
            segmenta por comprador. Myntex vende ambas piezas y puede ser el único que le hable a ambos — es un
            espacio abierto, no una copia.
          </InsightCallout>
        </section>

        {/* 04 · Segmentos prioritarios */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="04. Segmentos prioritarios" description="Cuatro segmentos, todos con la misma estructura de lectura." />
          <div className="grid grid-cols-1 gap-[20px] min-[1100px]:grid-cols-2">
            {SEGMENTOS.map((s) => (
              <SegmentCard key={s.apodo} segment={s} />
            ))}
          </div>
        </section>

        {/* 05 · Comité de compra */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader
            title="05. Comité de compra — los tres roles"
            description="No son dos interlocutores, son tres: Operaciones define las políticas de crédito, junto a Datos y Tecnología."
          />
          <Table
            headers={['Rol', 'Qué hace en la decisión']}
            rows={ROLES_COMITE.map((r) => [r.rol, r.que])}
          />
        </section>

        {/* 06 · Tensión estratégica central */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="06. Tensión estratégica central" description="" />
          <TensionStatement>
            Myntex necesita mantener la autoridad de quien presta de verdad mientras se vuelve la infraestructura
            de quien presta, sin perder la cercanía que lo hace elegible para el que no es un banco.
          </TensionStatement>
        </section>

        {/* 07 · Implicaciones por segmento */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="07. Implicaciones por segmento" description="" />
          <Table
            headers={['Segmento', 'Qué debe prometer', 'Cómo debe sonar', 'Cómo debe actuar']}
            rows={IMPLICACIONES.map((i) => [i.segmento, i.prometer, i.sonar, i.actuar])}
          />
        </section>

        {/* 08 · Lo que queda explícitamente fuera */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="08. Lo que queda explícitamente fuera" description="" />
          <Table headers={['Quién', 'Por qué']} rows={EXCLUSIONES.map((e) => [e.quien, e.porque])} />
        </section>
      </div>

      <MetaFooter label="v2.0 · Público Objetivo · Strategy · Myntex" status="Cliente" />
    </div>
  )
}
