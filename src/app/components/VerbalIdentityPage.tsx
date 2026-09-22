import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { Note } from './Note'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Strategy · Verbal Identity — Myntex.
 *
 * Estructura fija del template, completada con el contenido verbal de
 * Notion ("🎭 Personalidad, Esencia y Territorio", Sesión C: tono de voz,
 * vocabulario y anti-personalidad) — esta capa vive acá y NO se documenta en
 * Esencia y Personalidad, por pedido explícito. Reglas de registro (5)
 * repartidas entre las secciones existentes que ya las pedían
 * (formalidad/ritmo/gramática/pronombres/principios de escritura) en vez de
 * listarlas una sola vez, para no dejar esas secciones vacías. "Reglas por
 * canal" queda sin datos: Notion no documenta reglas específicas por canal
 * para este proyecto todavía.
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

function TextBlock({ children }: { children: ReactNode }) {
  return <p className="text-[16px] leading-[26px] text-[#33394a]">{children}</p>
}

function StatementBlock({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col items-start gap-[16px] rounded-[32px] bg-[#0f1e33] px-[40px] py-[48px]">
      <span className="font-bold text-[40px] leading-none text-[#4f8fd6]">&ldquo;</span>
      <p className="font-medium text-[22px] italic leading-[32px] tracking-[-0.2px] text-[#c7d2e0]">{children}</p>
    </div>
  )
}

function Card({ children }: { children: ReactNode }) {
  return <div className="flex w-full flex-col gap-[8px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">{children}</div>
}

/* ─── 03 · Tono de voz — por eje, ejemplos enfrentados ─── */

interface TonoEje {
  eje: string
  regla: string
  ejemplos: [string, string][]
}

const TONO_EJES: TonoEje[] = [
  {
    eje: '🔬 Probado',
    regla: 'Toda afirmación trae su número y su método.',
    ejemplos: [
      [
        '"28 puntos porcentuales de diferencia en first payment default entre footprint delgado y grueso. Medido en producción, con nuestra cartera. Así lo calculamos."',
        '"Nuestra tecnología de vanguardia optimiza tus decisiones de crédito."',
      ],
      [
        '"Eso todavía no lo hemos corrido en producción. Cuando lo hagamos, te lo contamos con los números."',
        '"Está en nuestro roadmap para el próximo trimestre."',
      ],
    ],
  },
  {
    eje: '💧 Claridad',
    regla: 'Lo que no hacemos se dice antes, no después.',
    ejemplos: [
      [
        '"Este módulo no hace scoring de empresas, solo de personas. Si necesitas eso, hoy no somos tu opción."',
        '"Nuestra plataforma es altamente configurable y se adapta a múltiples casos de uso."',
      ],
      [
        '"Nos equivocamos en la estimación. Vamos tres semanas tarde y esta es la nueva fecha."',
        '"Estamos experimentando ajustes en el cronograma de despliegue."',
      ],
    ],
  },
  {
    eje: '⚡ Audaz',
    regla: 'Nombra el privilegio, no se proclama disruptor.',
    ejemplos: [
      ['"Prestar bien no debería depender de tu tamaño."', '"Somos disruptores del ecosistema fintech latinoamericano."'],
      ['"Aprobamos perfiles que la banca rechaza. No por arriesgados: porque los sabemos leer."', '"Democratizamos el acceso financiero para todos."'],
    ],
  },
]

function TonoEjeBlock({ tono }: { tono: TonoEje }) {
  return (
    <div className="flex w-full flex-col gap-[12px]">
      <p className="text-[15px] font-semibold text-[#1c212b]">
        {tono.eje} — <span className="font-normal italic text-[#576175]">{tono.regla}</span>
      </p>
      <Table
        headers={['Así sí', 'Así no']}
        rows={tono.ejemplos.map(([si, no]) => [si, no])}
      />
    </div>
  )
}

/* ─── 04 · Personalidad verbal ─── */

const ATRIBUTOS: { nombre: string; aplicacion: string }[] = [
  { nombre: 'Probado', aplicacion: 'Habla en pasado y en presente, nunca en futuro. Usa cifras con su contexto.' },
  { nombre: 'Claro', aplicacion: 'Frases cortas, sin subordinadas. Cero eufemismos. Nombra el riesgo con su nombre.' },
  { nombre: 'Audaz', aplicacion: 'Nombra el privilegio y lo cuestiona. Habla de lo que el cliente podrá hacer, no de lo que el producto tiene.' },
]

function AttributeCard({ nombre, aplicacion }: { nombre: string; aplicacion: string }) {
  return (
    <Card>
      <p className="font-bold text-[16px] leading-[22px] text-[#1c212b]">{nombre}</p>
      <div className="flex w-full flex-col gap-[4px]">
        <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">Aplicación</p>
        <p className="text-[14px] leading-[21px] text-[#1c212b]">{aplicacion}</p>
      </div>
    </Card>
  )
}

/* ─── 09 · Palabras que evitamos ─── */

const PALABRAS_EVITAR: { palabra: string; motivo: string }[] = [
  { palabra: 'disruptivo · revolucionario · innovador', motivo: 'Se proclaman en vez de demostrarse. Rompen Probado' },
  { palabra: 'solución integral · de vanguardia · best-in-class · next-gen', motivo: 'Vacías. Cualquiera las firma' },
  { palabra: 'ecosistema · sinergia · holístico · empoderar · potenciar', motivo: 'Jerga de agencia. Rompen Claridad' },
  { palabra: 'transformación digital · customer-centric', motivo: 'Categoría genérica. No dicen nada del crédito' },
  { palabra: 'lanza en semanas, no en meses', motivo: 'Es el headline de Mo. Prohibida por nombre propio' },
  { palabra: 'escalable · robusto (sin un dato al lado)', motivo: 'Adjetivos de arquitectura sin prueba' },
  { palabra: 'líder del mercado', motivo: 'Rompe el propósito: el liderazgo es consecuencia, no argumento' },
  { palabra: 'impulsado por IA (sin explicar qué hace)', motivo: 'Rompe el principio Cada decisión tiene su razón' },
  { palabra: 'consultoría · consultor', motivo: 'Myntex acompaña, implementa y entrena modelos — no consulta' },
]

/* ─── 13 · Ejemplos de aplicación — doble comprador ─── */

/* ─── 14 · Anti-personalidad verbal ─── */

const ANTI_PERSONALIDAD: { no: string; significa: string }[] = [
  { no: 'Un disruptor', significa: 'No rompe por romper. Rompe el privilegio del tamaño, no las señales de rigor que la categoría financiera exige' },
  { no: 'Un gurú', significa: 'No da lecciones ni habla desde arriba. Habla de operador a operador, entre iguales' },
  { no: 'Un vendedor de futuro', significa: 'No habla de lo que hará, ni usa la visión de producto o el roadmap como argumento de venta' },
  { no: 'Corporativa y neutral', significa: 'No esconde la opinión detrás de voz pasiva ni de lenguaje institucional' },
  { no: 'Cómplice contra el riesgo del cliente', significa: 'No aprueba lo que no debe aprobarse para cerrar una venta, ni promete cifras que dependan de relajar el criterio' },
  { no: 'Graciosa', significa: 'Hay dinero de terceros en juego. La audacia va en la posición, nunca en el chiste' },
]

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
          <TextBlock>
            El principio estratégico &ldquo;una sola voz para dos audiencias&rdquo; se resuelve así: no cambia la
            voz, cambia la evidencia. Ante Tecnología y ante Riesgo se dice la misma frase, acompañada de una
            prueba distinta.
          </TextBlock>
        </section>

        {/* 02 · Voz de marca */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="02. Voz de marca" description="Cómo suena siempre la marca, independientemente del canal." />
          <StatementBlock>
            Una sola voz para dos audiencias: no cambia la voz, cambia la evidencia que la acompaña.
          </StatementBlock>
        </section>

        {/* 03 · Tono de voz */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="03. Tono de voz" description="El tono, por eje, con ejemplos enfrentados." />
          <div className="flex w-full flex-col gap-[24px]">
            {TONO_EJES.map((t) => (
              <TonoEjeBlock key={t.eje} tono={t} />
            ))}
          </div>
        </section>

        {/* 04 · Personalidad verbal */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="04. Personalidad verbal" description="Tres rasgos verbales que ayudan a tomar decisiones de escritura — uno por eje." />
          <div className="grid grid-cols-1 gap-[16px] min-[1100px]:grid-cols-3">
            {ATRIBUTOS.map((a) => (
              <AttributeCard key={a.nombre} nombre={a.nombre} aplicacion={a.aplicacion} />
            ))}
          </div>
        </section>

        {/* 05 · Nivel de formalidad */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="05. Nivel de formalidad" description="Acompañar con ejemplos que permitan reconocer los límites." />
          <TextBlock>
            Tuteo profesional. Cercano sin ser informal. En documentación contractual y comunicación regulatoria,
            registro formal.
          </TextBlock>
        </section>

        {/* 06 · Ritmo y longitud de frases */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="06. Ritmo y longitud de frases" description="" />
          <TextBlock>Frases cortas. Una idea por frase. Si hay dos subordinadas, se parte. Nada en futuro: el futuro es de los que venden promesa.</TextBlock>
        </section>

        {/* 07 · Principios de escritura */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="07. Principios de escritura" description="Reglas de registro — cada una accionable." />
          <Table
            headers={['Regla', 'Aplicación']}
            rows={[
              ['Frases cortas', 'Una idea por frase. Si hay dos subordinadas, se parte.'],
              ['Voz activa y primera persona del plural', '"Aprobamos", no "se aprueba".'],
              ['Tuteo profesional', 'Cercano sin ser informal. Formal en documentación contractual y regulatoria.'],
              ['El número va antes del adjetivo', 'Nunca "reducción significativa"; siempre la cifra.'],
              ['Nada en futuro', 'El futuro es de los que venden promesa.'],
            ]}
          />
        </section>

        {/* 08 · Palabras que usamos */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="08. Palabras que usamos" description="Las palabras del negocio del cliente, no las de nuestra categoría." />
          <div className="flex w-full flex-wrap gap-[8px]">
            {[
              'prestar', 'criterio', 'cartera', 'mora', 'decidir', 'probado', 'en producción', 'operar', 'claro',
              'abrir', 'alcance', 'primer desembolso', 'configurar', 'explicar', 'método', 'medido', 'a quién', 'sí y no',
            ].map((palabra) => (
              <span key={palabra} className="rounded-[999px] border border-[#bac2cf] bg-white px-[14px] py-[8px] text-[13px] text-[#1c212b]">
                {palabra}
              </span>
            ))}
          </div>
        </section>

        {/* 09 · Palabras que evitamos */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="09. Palabras que evitamos" description="" />
          <Table
            headers={['Palabra / expresión', 'Motivo']}
            rows={PALABRAS_EVITAR.map((p) => [p.palabra, p.motivo])}
          />
        </section>

        {/* 10 · Gramática y estilo */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="10. Gramática y estilo" description="Mayúsculas y minúsculas, números, puntuación, emojis, abreviaturas y otras convenciones." />
          <Card>
            <TextBlock>El número va antes del adjetivo. Nunca &ldquo;reducción significativa&rdquo;; siempre la cifra.</TextBlock>
          </Card>
        </section>

        {/* 11 · Uso de pronombres */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="11. Uso de pronombres" description="Indicar en qué contextos cambia, si aplica." />
          <TextBlock>Voz activa y primera persona del plural. &ldquo;Aprobamos&rdquo;, no &ldquo;se aprueba&rdquo;.</TextBlock>
        </section>

        {/* 12 · Reglas por canal */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="12. Reglas por canal" description="Ajustes específicos donde sean necesarios (Web, RRSS, Producto, Mail, Comunicación interna)." />
          <p className="text-[14px] leading-[21px]">
            <Placeholder>No documentado todavía para este proyecto.</Placeholder>
          </p>
        </section>

        {/* 13 · Ejemplos de aplicación */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader
            title="13. Ejemplos de aplicación"
            description="Cómo se resuelve el doble comprador: no cambia la voz, cambia la evidencia."
          />
          <Table
            headers={['Ante Tecnología', 'Ante Riesgo']}
            rows={[
              [
                'La misma frase, con la prueba de arquitectura: cómo se integra, qué expone la API, cómo convive con el legacy.',
                'La misma frase, con la prueba de cartera: qué mira el modelo, cómo se explica la decisión, cómo se comporta la mora.',
              ],
            ]}
          />
          <p className="text-[13px] italic leading-[19px] text-[#8a94a8]">
            Si alguien tiene que escribir dos textos distintos para los dos, el mensaje está mal construido.
          </p>
        </section>

        {/* 14 · Anti-personalidad verbal */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="14. Anti-personalidad verbal" description="Registros, actitudes o maneras de hablar que no corresponden nunca a la marca." />
          <Table
            headers={['La marca no es…', 'Qué significa en la práctica']}
            rows={ANTI_PERSONALIDAD.map((a) => [a.no, a.significa])}
          />
          <Note>
            Pregunta filtro antes de publicar cualquier pieza: ¿esto lo puede demostrar Myntex hoy, se entiende sin
            explicación, y molesta al privilegio en vez de a la prudencia?
          </Note>
        </section>
      </div>

      <MetaFooter label="v1.0 · Verbal Identity · Strategy · Myntex" status="Cliente" />
    </div>
  )
}
