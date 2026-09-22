import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Strategy · Esencia y Personalidad — Myntex.
 *
 * Estructura fija del template, completada con datos reales de Notion
 * ("🎭 Personalidad, Esencia y Territorio", Sesiones A y B). El territorio
 * usa la versión vigente del Ajuste v2.0 ("Del querer al poder"; se retira
 * "El privilegio de prestar"). Se agregó una sección nueva (08 Pilares
 * temáticos) porque es contenido de resultado final sin casillero en el
 * template. Tono de voz, palabras a favorecer/evitar, anti-personalidad y
 * "Así sí/Así no" (Sesión C) NO se documentan acá por pedido explícito —
 * viven en Verbal Identity. Se dejaron afuera los tests de validación del
 * método, las opciones exploradas/descartadas y el listado de fuentes.
 * ────────────────────────────────────────────────────────────────────────── */

const TH = 'px-[14px] py-[12px] text-left font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]'
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

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex w-full flex-col gap-[4px]">
      <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">{label}</p>
      <p className="text-[14px] leading-[21px] text-[#1c212b]">{children}</p>
    </div>
  )
}

function Quote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="w-full rounded-[10px] border-l-[3px] border-[#1677d8] bg-[#f7f9fb] px-[16px] py-[12px] text-[14px] italic leading-[21px]">
      {children}
    </blockquote>
  )
}

function StatementBlock({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col items-start gap-[16px] rounded-[32px] bg-[#0f1e33] px-[40px] py-[48px]">
      <span className="font-bold text-[40px] leading-none text-[#4f8fd6]">&ldquo;</span>
      <p className="font-medium text-[26px] italic leading-[36px] tracking-[-0.2px] text-[#c7d2e0]">{children}</p>
    </div>
  )
}

/* ─── 02 · Los tres ejes de personalidad ─── */

interface Eje {
  dimension: string
  nombre: string
  frase: string
  origen: string
  limite: string
  comportamiento: string
  narrativa: string
  experiencia: string
  visual: string
}

function AxisCard({ eje }: { eje: Eje }) {
  return (
    <div className="flex w-full flex-col gap-[14px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
      <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">{eje.dimension}</p>
      <div className="flex flex-col gap-[2px]">
        <p className="font-bold text-[20px] leading-[26px] text-[#1c212b]">{eje.nombre}</p>
        <p className="text-[14px] italic leading-[20px] text-[#1c212b]">{eje.frase}</p>
      </div>
      <Field label="Origen">{eje.origen}</Field>
      <Quote>{eje.limite}</Quote>
      <Field label="Comportamiento">{eje.comportamiento}</Field>
      <Field label="Narrativa">{eje.narrativa}</Field>
      <Field label="Experiencia">{eje.experiencia}</Field>
      <Field label="Expresión visual">{eje.visual}</Field>
    </div>
  )
}

const EJES: Eje[] = [
  {
    dimension: 'Criterio',
    nombre: 'Probado',
    frase: 'No lo creemos, lo hemos corrido.',
    origen: '28 puntos porcentuales de diferencia en first payment default por huella digital, medidos en producción, y un stack que corre la cartera real de Tafi todos los días.',
    limite: 'Límite: probado no es infalible, es verificable. No prometemos que nunca falla. Prometemos que todo lo que decimos se puede comprobar.',
    comportamiento: 'Muestra números antes que funcionalidades · no ofrece lo que está en roadmap · publica el método, no solo el resultado · acepta que lo auditen.',
    narrativa: 'Habla en pasado y en presente, nunca en futuro · usa cifras con su contexto · cita la operación propia como fuente.',
    experiencia: 'El primer contacto trae un dato, no un folleto · la demo es el producto real · el reporte llega sin pedirlo.',
    visual: 'Retícula visible · cifra grande con su unidad · marcas de medición. Rol cromático: el color de mayor autoridad del sistema.',
  },
  {
    dimension: 'Relación',
    nombre: 'Claridad',
    frase: 'Lo complejo se explica, no se esconde.',
    origen: 'El cuadrante de experiencias negativas del taller — el proveedor que trabó a Tafi con un pool de 60.000 créditos. El 100% del sector usa lenguaje corporativo y solo el 30% muestra personas.',
    limite: 'Límite: claridad no es simplificar de más, es no dejar nada oculto. Se puede explicar un modelo de riesgo sin infantilizarlo; lo que no se puede es dejar la mala noticia para el año dos.',
    comportamiento: 'Dice lo que el producto no hace · pone el precio y sus límites antes de la propuesta · avisa del problema antes de que el cliente lo note.',
    narrativa: 'Frases cortas, sin subordinadas · cero eufemismos de agencia · nombra el riesgo con su nombre.',
    experiencia: 'Un solutions engineer con nombre, no una cola de tickets · documentación que empieza por las limitaciones.',
    visual: 'Espacio en blanco generoso · tipografía grande y hablada · presencia humana real · cero ornamento.',
  },
  {
    dimension: 'Energía',
    nombre: 'Audaz',
    frase: 'Lo que siempre fue de unos pocos, ahora es de cualquiera.',
    origen: 'El propósito — que dar crédito deje de ser privilegio — y la decisión de romper los códigos cromáticos del sector manteniendo intactas las señales de rigor.',
    limite: 'Límite crítico: audaz no es arriesgado, es no conformarse con cómo se ha hecho siempre. Este eje no se usa nunca sin su frase de límite, y tiene tope de densidad.',
    comportamiento: 'Le da a una financiera pequeña lo que solo tenía un banco · dice que no a lo que la categoría da por normal · elimina pasos en vez de documentarlos.',
    narrativa: 'Nombra el privilegio y lo cuestiona · habla de lo que el cliente podrá hacer, no de lo que el producto tiene.',
    experiencia: 'Configuración en vez de proyecto · sin mínimos que castiguen al que empieza · del primer contacto a la decisión sin fricción.',
    visual: 'Contraste alto · escala expresiva · diagonal y progresión · el acento que rompe el azul del sector.',
  },
]

/* ─── 06 · Territorio conceptual ─── */

function TerritoryBlock() {
  return (
    <div className="flex w-full flex-col gap-[20px] rounded-[32px] bg-[#0f1e33] px-[40px] py-[48px]">
      <div>
        <p className="font-bold text-[32px] leading-[40px] tracking-[-0.2px] text-white">Del querer al poder</p>
        <p className="text-[15px] leading-[22px] text-[#c7d2e0]">El espacio entre decidir que quieres prestar y poder hacerlo.</p>
      </div>
      <div className="flex flex-col gap-[4px]">
        <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#8fa3c2]">Momento humano</p>
        <p className="text-[15px] leading-[22px] text-[#c7d2e0]">
          Alguien tiene enfrente a un cliente que quiere comprar en cuotas, o una solicitud esperando respuesta.
          Tiene los datos delante y no sabe qué significan. Sabe que decidir bien es lo que separa a los que
          prestan de los que solo venden — y sabe que esa capacidad, hasta hoy, venía con el tamaño.
        </p>
      </div>
      <blockquote className="w-full rounded-[10px] border-l-[3px] border-[#4f8fd6] bg-white/5 px-[16px] py-[12px] text-[15px] italic leading-[22px] text-[#c7d2e0]">
        La gente viene a nosotros para sentir que ya no le falta nada cuando está a punto de decir que sí.
      </blockquote>
      <div className="flex flex-col gap-[4px]">
        <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#8fa3c2]">Enemigo</p>
        <p className="text-[15px] leading-[22px] text-[#c7d2e0]">
          El tamaño como requisito — la idea de que para prestar bien hay que ser grande. Su consecuencia diaria:
          la decisión a ciegas, decir que sí o que no sin saber por qué.
        </p>
      </div>
      <div className="flex flex-col gap-[4px]">
        <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#8fa3c2]">Rol de la marca</p>
        <p className="text-[15px] leading-[22px] text-[#c7d2e0]">Probar · Explicar · Abrir</p>
      </div>
    </div>
  )
}

/* ─── 08 · Pilares temáticos ─── */

const PILARES: { pilar: string; eje: string; tension: string }[] = [
  { pilar: 'Cómo se decide bien', eje: 'Probado', tension: 'Intuición vs. criterio' },
  { pilar: 'Lo que nadie te cuenta del crédito', eje: 'Claridad', tension: 'Opacidad vs. entender' },
  { pilar: 'Quién puede prestar', eje: 'Audaz', tension: 'Privilegio vs. acceso' },
  { pilar: 'El sí que sostiene un negocio', eje: 'Conector', tension: 'Vender hoy vs. cobrar mañana' },
]

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
          <p className="text-[16px] leading-[26px] text-[#33394a]">
            Tres ejes, no cuatro: es el máximo que un sistema visual puede gobernar sin volverse ambiguo. Cada uno
            se ancla a uno de los tres beneficios del posicionamiento y responde una pregunta distinta del
            comprador.
          </p>
        </section>

        {/* 02 · Los tres ejes de personalidad */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="02. Los tres ejes de personalidad" description="Criterio, Relación y Energía — el nombre visible de cada eje es propio de la marca." />
          <div className="grid grid-cols-1 gap-[16px] min-[1100px]:grid-cols-3">
            {EJES.map((eje) => (
              <AxisCard key={eje.dimension} eje={eje} />
            ))}
          </div>
        </section>

        {/* 03 · Puente visual */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="03. Puente visual" description="Traduce los tres ejes en una base para el sistema visual — conexión entre Strategy y el sistema visual." />
          <Table
            headers={['Eje', 'Familia de formas', 'Se siente como', 'Recursos secundarios', 'Densidad', 'Rol del recurso', 'Contextos de uso']}
            rows={[
              ['Probado', 'Evidencia', 'Preciso · sólido · verificable · sobrio', 'Retícula · marcas de medición · cifra con unidad', 'Baja', 'Guía de jerarquía → contenedor', 'Educación · servicio · documentación'],
              ['Claridad', 'Aire', 'Abierto · legible · honesto · sin adornos', 'Espacio en blanco · jerarquía tipográfica · retrato real', 'Baja', 'Atmósfera → contenedor', 'Onboarding · precio · documentación'],
              ['Audaz', 'Ruptura', 'Vivo · contrastado · con posición · en movimiento', 'Diagonal · corte · progresión antes/después', 'Media', 'Firma → guía', 'Marca · campaña · conversión'],
            ]}
          />
        </section>

        {/* 04 · Matriz intención × eje */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="04. Matriz intención × eje" description="Qué eje debe dominar según el contexto de comunicación." />
          <Table
            headers={['Contexto', 'Eje dominante', 'Familia visual', 'Densidad']}
            rows={[
              ['Marca / campaña', 'Audaz', 'Ruptura', 'Media'],
              ['Educación / explicación', 'Probado', 'Evidencia', 'Baja'],
              ['Precio / contrato / onboarding', 'Claridad', 'Aire', 'Baja'],
              ['Conversión / oferta', 'Audaz + Probado', 'Ruptura con datos', 'Baja'],
              ['Servicio / soporte', 'Claridad + Probado', 'Aire con evidencia', 'Baja'],
            ]}
          />
        </section>

        {/* 05 · Esencia de marca */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="05. Esencia de marca" description="Frase única que sintetiza los tres ejes — no una idea independiente." />
          <StatementBlock>Probado en producción, claro en cada letra, audaz en abrir el crédito.</StatementBlock>
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
              ['Operadores que productizaron lo que saben', 'No somos consultores: no cobramos por recomendar lo que no vamos a operar'],
              ['Claros hasta en el precio', 'No escondemos el costo real en el año dos ni en una cláusula de mínimos'],
              ['Rigurosos con el riesgo', 'No aprobamos volumen a costa de la cartera del cliente'],
              ['Audaces con el privilegio', 'No somos temerarios con el dinero ajeno: la audacia va en la marca, no en el modelo'],
              ['Compañeros de implementación', 'No entregamos documentación y desaparecemos'],
            ]}
          />
        </section>

        {/* 08 · Pilares temáticos */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="08. Pilares temáticos" description="Cada pilar trabaja una tensión del territorio y se ancla a un eje." />
          <Table
            headers={['Pilar', 'Eje', 'Tensión que trabaja']}
            rows={PILARES.map((p) => [p.pilar, p.eje, p.tension])}
          />
        </section>

        {/* 09 · Evolución de la percepción (opcional) */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader
            title="09. Evolución de la percepción"
            description="Opcional — solo en marcas con historia y una percepción previa relevante que documentar."
          />
        </section>
      </div>

      <MetaFooter label="v2.0 · Esencia y Personalidad · Strategy · Myntex" status="Cliente" />
    </div>
  )
}
