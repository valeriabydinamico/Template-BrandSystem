import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { Note } from './Note'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Strategy · Posicionamiento — Myntex.
 *
 * Estructura fija del template, completada con datos reales de Notion
 * ("📍 Posicionamiento"), usando siempre la versión vigente: claim y
 * beneficio funcional → Ajuste v2.0; hero y jerarquía de líneas → Ajuste
 * v2.1; descriptor de categoría → cambio del 25 ago 2026 ("el sistema
 * operativo del crédito").
 *
 * Se agregaron 2 secciones nuevas que no encajaban en el template (06 El
 * Claim, 09 Hero) porque son piezas vigentes sin casillero propio. Se
 * dejaron afuera las opciones exploradas/descartadas, los tests de
 * validación del método, los vacíos de investigación y el listado de
 * fuentes — mismo criterio que el resto de Strategy.
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

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex w-full flex-col gap-[4px]">
      <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">{label}</p>
      <p className="text-[14px] leading-[21px] text-[#1c212b]">{children}</p>
    </div>
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

/* ─── 02 · Benchmark competitivo ─── */

interface Competidor {
  nombre: string
  diferenciadores: string
  fortalezas: string
  brechas: string
  patronConfianza: string
}

function CompetitorCard({ c }: { c: Competidor }) {
  return (
    <div className="flex w-full flex-col gap-[12px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
      <p className="font-bold text-[18px] leading-[24px] text-[#1c212b]">{c.nombre}</p>
      <Field label="Diferenciadores">{c.diferenciadores}</Field>
      <Field label="Fortalezas">{c.fortalezas}</Field>
      <Field label="Debilidades / brechas">{c.brechas}</Field>
      <Field label="Patrón de confianza">{c.patronConfianza}</Field>
    </div>
  )
}

const COMPETIDORES: Competidor[] = [
  {
    nombre: 'Mo · Colombia — el dueño de la categoría en LATAM',
    diferenciadores: 'Configurabilidad como bandera (+200 parámetros) · segmentación por producto de crédito, no por cliente',
    fortalezas: 'El nombre que aparece primero en la región · credibilidad de la fundadora (ex-Bain, ex-Mastercard) · logos tier-1 · promesa clara y de una sola línea',
    brechas: 'Su copy le devuelve el riesgo al cliente · sin arquitectura de audiencias · sin testimonios con cargo · el relato es de producto, no de origen · sin voz para Riesgo',
    patronConfianza: 'Logos + credenciales de la fundadora + certificaciones',
  },
  {
    nombre: 'Mambu · Global, con presencia en Panamá — el incumbente',
    diferenciadores: 'Arquitectura de audiencias ejemplar: seis segmentos con página propia · ruta de migración explícita',
    fortalezas: 'Marca madura y reconocible · caso local con cargo (VP of Technology, Towerbank) · ecosistema de partners',
    brechas: 'Percibido como caro antes de la primera reunión · le habla solo a Tecnología, jamás a Riesgo · genérico por diseño · sin relato de criterio',
    patronConfianza: 'Casos con cargo + escala global + informes de industria',
  },
  {
    nombre: 'HES FinTech · Global — el que más se acerca a vender el criterio',
    diferenciadores: 'Es el único que pone el motor de decisiones al frente del relato · segmenta por vertical y por país',
    fortalezas: 'Habla el idioma del negocio, no solo el de TI · testimonios con cargo real (Head of Loan Management) · más de doce años de recorrido',
    brechas: 'Te da la herramienta para que tú construyas tu scoring · identidad visual datada · sin especialización en no bancarizados · marca poco reconocida en LATAM',
    patronConfianza: 'Testimonios con cargo + años de trayectoria + amplitud de catálogo',
  },
]

export function PosicionamientoPage() {
  return (
    <div id="strategy.posicionamiento" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Strategy"
        title="Posicionamiento"
        paragraphs={['Qué espacio competitivo puede ocupar la marca, por qué puede defenderlo y cómo se traduce en una declaración clara.']}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[72px]">
        {/* 01 · Contexto */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="01. Contexto" description="" />
          <p className="text-[16px] leading-[26px] text-[#33394a]">
            Myntex tiene demanda entrante y nada que venderle: no necesita crear mercado, necesita convertirlo. No
            se creó una categoría propia porque el comprador ya busca el término en su idioma — el descriptor{' '}
            <em>el sistema operativo del crédito</em> es la traducción literal de <em>Credit OS</em>, sin que el
            español tenga que explicar el inglés.
          </p>
        </section>

        {/* 02 · Benchmark competitivo */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="02. Benchmark competitivo" description="Tres referencias competitivas principales, mismas dimensiones para cada una." />
          <div className="grid grid-cols-1 gap-[16px] min-[1100px]:grid-cols-3">
            {COMPETIDORES.map((c) => (
              <CompetitorCard key={c.nombre} c={c} />
            ))}
          </div>
          <Note>
            Las tres referencias construyen confianza igual: logos, escala y trayectoria. Myntex no tiene ninguno
            de los tres por ahora — su patrón de confianza tiene que ser otro: la operación propia y sus números.
            La prueba sustituye a la escala.
          </Note>
        </section>

        {/* 03 · Mapa de territorio */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="03. Mapa de territorio" description="Dos variables relevantes para la categoría; los ejes surgen del análisis competitivo." />
          <div className="flex w-full flex-col items-center gap-[8px]">
            <p className="text-[13px] leading-[18px] text-[#576175]">Especialización: genérico/global ↔ LATAM thin-file</p>
            <div className="relative aspect-square w-full max-w-[420px] rounded-[16px] border border-[#bac2cf] bg-[#f7f9fb]">
              <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#d5dadf]" />
              <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#d5dadf]" />
              <div className="flex size-full items-center justify-center p-[24px] text-center">
                <p className="text-[13px] leading-[19px] text-[#1c212b]">
                  Cuadrante vacío: <strong>inteligencia operada × especializado LATAM</strong>. Mo y Mambu venden
                  infraestructura genérica/global; HES vende una herramienta de scoring, no criterio operado.
                </p>
              </div>
            </div>
            <p className="text-[13px] leading-[18px] text-[#576175]">Qué se vende: infraestructura ↔ inteligencia operada</p>
          </div>
        </section>

        {/* 04 · Oportunidad / espacio en blanco */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="04. Oportunidad / espacio en blanco" description="" />
          <div className="flex w-full flex-col gap-[16px] rounded-[16px] border border-[#bac2cf] bg-[#f7f9fb] p-[24px]">
            <Field label="Espacio disponible">Inteligencia operada × especializado LATAM.</Field>
            <Field label="Por qué la marca puede ocuparlo">
              Cuatro de cinco afirmaciones tienen respaldo duro: opera un negocio de crédito real (Tafi,
              ~$7.2M en desembolsos), su criterio funciona (28 pp de diferencia en first payment default), sabe
              aprobar no bancarizados (modelo con data panameña real) y cubre el ciclo completo. La quinta —que el
              criterio sea transferible fuera de Tafi— es el supuesto más riesgoso del proyecto y se declara, no
              se esconde.
            </Field>
          </div>
        </section>

        {/* 05 · Categoría / marco competitivo */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="05. Categoría / marco competitivo" description="" />
          <Table
            headers={['Capa', 'Contenido', 'Dónde vive']}
            rows={[
              ['Categoría, corta', 'Credit OS', 'Metadatos, SEO, pitch en inglés, nombre de producto'],
              ['Categoría, descriptor', 'El sistema operativo del crédito', 'Web, deck, ventas'],
            ]}
          />
        </section>

        {/* 06 · El Claim */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="06. El Claim" description="" />
          <StatementBlock>
            Tu crédito, en marcha.
            <br />
            Por quienes ya lo hacen.
          </StatementBlock>
          <p className="text-[13px] leading-[19px] text-[#8a94a8]">
            El vocabulario viene del cliente: &ldquo;montar&rdquo; y &ldquo;poner en marcha&rdquo; son sus propias
            palabras. No promete cartera, promete quién lo monta.
          </p>
        </section>

        {/* 07 · Declaración de posicionamiento */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="07. Declaración de posicionamiento" description="Breve, y expresa una diferencia defendible (máximo 15 palabras)." />
          <StatementBlock>El único Credit OS que corre su propio negocio de crédito.</StatementBlock>
        </section>

        {/* 08 · Posicionamiento extendido */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="08. Posicionamiento extendido" description="" />
          <p className="text-[16px] leading-[26px] text-[#33394a]">
            Para retailers, financieras y bancos que quieren lanzar o escalar crédito y no tienen la estructura
            para hacerlo bien, Myntex es el sistema operativo del crédito, que ofrece un negocio de crédito
            funcionando (no una plataforma para que lo construyas) — cada componente que entregamos lo usamos
            todos los días para operar Tafi, a diferencia de las plataformas que te dan el motor y te devuelven el
            riesgo.
          </p>
        </section>

        {/* 09 · Hero */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="09. Hero" description="Explica qué es Myntex a quien llega por primera vez; no compite con el claim, se turnan." />
          <StatementBlock>
            Myntex Credit OS
            <br />
            Todas las piezas para prestar, en un solo sistema.
            <br />
            Origina, decide, cobra y reporta.
          </StatementBlock>
          <p className="text-[13px] leading-[19px] text-[#8a94a8]">
            Frase de soporte: &ldquo;Core, motor de decisiones, contabilidad y recaudo. Los mismos con los que
            operamos Tafi todos los días.&rdquo;
          </p>
        </section>

        {/* 10 · Tres beneficios únicos */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader title="10. Tres beneficios únicos" description="Uno por cada nivel de promesa." />
          <div className="grid grid-cols-1 gap-[16px] min-[1100px]:grid-cols-3">
            <div className="flex w-full flex-col gap-[10px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
              <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">Beneficio funcional</p>
              <p className="text-[15px] leading-[22px] text-[#1c212b]">Empiezas con el modelo puesto.</p>
              <Field label="Pilar asociado">Pilar 1 — Eje Probado</Field>
            </div>
            <div className="flex w-full flex-col gap-[10px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
              <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">Beneficio emocional</p>
              <p className="text-[15px] leading-[22px] text-[#1c212b]">La cartera deja de quitarte el sueño.</p>
              <Field label="Pilar asociado">Pilar 2 — Eje Claridad</Field>
            </div>
            <div className="flex w-full flex-col gap-[10px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
              <p className="font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]">Beneficio aspiracional</p>
              <p className="text-[15px] leading-[22px] text-[#1c212b]">Prestas como un banco sin tener que ser uno.</p>
              <Field label="Pilar asociado">Pilar 3 — Eje Audaz</Field>
            </div>
          </div>
        </section>

        {/* 11 · A quién renunciamos */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="11. A quién renunciamos" description="" />
          <div className="flex w-full flex-col gap-[16px] rounded-[16px] border border-[#e3e7ec] bg-[#fafbfc] p-[24px]">
            <Field label="Renuncia">Quien busca la plataforma más barata y flexible del mercado.</Field>
            <Field label="Motivo">
              Si el criterio de decisión es plumbing barato, Myntex pierde por diseño: su ventaja cuesta más y
              vale más.
            </Field>
          </div>
        </section>
      </div>

      <MetaFooter label="v2.1 · Posicionamiento · Strategy · Myntex" status="Cliente" />
    </div>
  )
}
