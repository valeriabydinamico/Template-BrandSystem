import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { GovernanceFooter } from './GovernanceFooter'
import { MetaFooter } from './MetaFooter'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Foundations · Color System — 02 Brand Colors — plantilla en blanco
 * (master template).
 *
 * Estructura tomada de "Foundations — Estructura de presentación v2" (sección
 * "Sistema de color"), secciones 02 (Escalas de tonos), 04 (Uso de color por
 * etapa del journey) y 05 (Do/Don't) — mismo grupo del sidebar que Global
 * Colors y Semantic Colors, pero centrado en los roles propios de marca
 * (primario/secundario/acentos/neutros) y su aplicación. La parte de
 * Gobernanza (06) referida a colores semánticos vive en Semantic Colors.
 * ────────────────────────────────────────────────────────────────────────── */

const TH =
  'px-[14px] py-[12px] text-left font-semibold text-[12px] uppercase leading-[16px] tracking-[0.4px] text-[#59667d]'
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

const GOVERNANCE_RULES = [
  'El color primario debe mantenerse como ancla principal de marca.',
  'Los colores secundarios y terciarios deben reforzar la intención, no competir con la marca.',
  'Los degradados funcionan como apoyo visual, no como fondo automático.',
  'Los acentos deben aplicarse con intención narrativa o funcional.',
  'Toda aplicación debe validar contraste, legibilidad y contexto de uso.',
  'Las proporciones por journey orientan el peso visual, pero deben adaptarse según formato, canal, presencia de producto y necesidad de lectura.',
]

/* ─── 02 · Escalas de tonos ─── */

const FAMILIAS = ['Primaria', 'Secundaria', 'Acentos', 'Neutros']

function ScaleCard({ familia }: { familia: string }) {
  return (
    <div className="flex w-full flex-col gap-[12px] rounded-[16px] border border-[#bac2cf] bg-white p-[24px]">
      <p className="text-[18px] font-bold leading-[24px] text-[#1c212b]">{familia}</p>
      <div className="flex w-full items-stretch gap-[4px]">
        {['50', '100', '300', '500', '700', '900'].map((step) => (
          <div
            key={step}
            className="flex h-[56px] flex-1 flex-col items-center justify-end gap-[4px] rounded-[8px] border border-dashed border-[#c4c9d4] bg-[#f7f8fa] pb-[6px]"
          >
            <span className="font-mono text-[10px] text-[#8a94a8]">{step}</span>
          </div>
        ))}
      </div>
      <p className="text-[12px] leading-[18px] text-[#8a94a8]">
        <Placeholder>50 = tono más claro · 900 = tono más profundo.</Placeholder>
      </p>
    </div>
  )
}

/* ─── 4.1 · Etapas del journey ─── */

const ETAPAS: { etapa: string; objetivo: string }[] = [
  { etapa: 'Conciencia', objetivo: 'Dar a conocer y generar interés' },
  { etapa: 'Consideración', objetivo: 'Informar y demostrar valor' },
  { etapa: 'Adquisición', objetivo: 'Motivar la acción y facilitar la decisión' },
  { etapa: 'Servicio', objetivo: 'Acompañar y generar confianza continua' },
  { etapa: 'Lealtad', objetivo: 'Fidelizar y promover la recomendación' },
]

/* ─── 4.4 · Configuraciones ─── */

const CONFIG_PRINCIPALES = [
  'Institucional / Marca',
  'Producto / Conversión',
  'Informativa / Consideración',
  'Promocional / Campaña',
]

const CONFIG_VARIABLES = [
  'Espacio blanco / Lectura rápida',
  'Producto / Variante limpia',
  'Producto digital / Mockup',
  'Lifestyle / Acento visual',
]

function ConfigCard({ nombre }: { nombre: string }) {
  return (
    <div className="flex w-full flex-col gap-[10px] rounded-[16px] border border-[#bac2cf] bg-white p-[20px]">
      <p className="text-[15px] font-bold leading-[20px] text-[#1c212b]">{nombre}</p>
      <div className="grid grid-cols-2 gap-[8px]">
        {['Primario', 'Secundario', 'Neutral', 'Acento'].map((rol) => (
          <div key={rol} className="rounded-[8px] bg-[#f7f9fb] p-[8px]">
            <p className="text-[11px] uppercase tracking-[0.4px] text-[#8a94a8]">{rol}</p>
            <p className="text-[13px]">
              <Placeholder>[0%]</Placeholder>
            </p>
          </div>
        ))}
      </div>
      <p className="text-[13px] leading-[19px]">
        <Placeholder>Uso: en qué piezas o momentos se aplica esta configuración.</Placeholder>
      </p>
    </div>
  )
}

/* ─── Do / Don't (base fijo de la guía) ─── */

const DO_DONT: [string, string][] = [
  ['Usar el color primario como ancla principal de marca.', 'No usar acentos como protagonistas por defecto.'],
  ['Usar el color secundario como apoyo visual.', 'No crear colores manuales fuera de la escala.'],
  ['Usar neutrales para lectura, estructura y aire visual.', 'No usar colores semánticos como branding o decoración.'],
  ['Usar acentos con intención clara.', 'No usar degradados detrás de texto sin validar contraste.'],
  [
    'Validar contraste en titulares, CTAs, legales y textos sobre fotografía.',
    'No depender solo del color para comunicar estados.',
  ],
  [
    'Aplicar proporciones como guía flexible.',
    'No alterar proporciones sin revisar intención, canal y legibilidad.',
  ],
]

export function BrandColorsPage() {
  return (
    <div id="color.brand-colors" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Color System"
        title="02 Brand Colors"
        paragraphs={[
          'Escalas tonales y reglas de aplicación de los roles cromáticos de marca (primario, secundario, acentos y neutros), construidas a partir de las primitives de Global Colors.',
        ]}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[80px]">
        {/* 02 · Escalas de tonos */}
        <section className="flex w-full flex-col gap-[24px]">
          <SectionHeader
            title="02. Escalas de tonos"
            description="Permiten crear profundidad, contraste, jerarquía y estados sin generar colores fuera del sistema aprobado. Por cada tono se documentan los datos que existan en el proyecto (HEX, muestra, token, RGB, HSL, rol, uso, estado); ninguno es obligatorio salvo lo que el proyecto provea."
          />
          <div className="grid grid-cols-1 gap-[16px] min-[1100px]:grid-cols-2">
            {FAMILIAS.map((f) => (
              <ScaleCard key={f} familia={f} />
            ))}
          </div>
        </section>

        {/* 04 · Uso de color por etapa del journey */}
        <section className="flex w-full flex-col gap-[32px]">
          <SectionHeader
            title="04. Uso de color por etapa del journey"
            description="Cómo se ajusta la proporción de color según el objetivo de cada etapa, manteniendo los atributos generales de marca."
          />

          {/* 4.1 Etapas */}
          <div className="flex w-full flex-col gap-[12px]">
            <p className="text-[15px] font-semibold text-[#1c212b]">4.1 Etapas</p>
            <Table
              headers={['Etapa', 'Objetivo', 'Intención cromática']}
              rows={ETAPAS.map((e) => [
                e.etapa,
                e.objetivo,
                <Placeholder key="i">Intención cromática para esta etapa.</Placeholder>,
              ])}
            />
          </div>

          {/* 4.2 Cómo leer las proporciones */}
          <div className="flex w-full flex-col gap-[12px]">
            <p className="text-[15px] font-semibold text-[#1c212b]">4.2 Cómo leer las proporciones</p>
            <Table
              headers={['Color', 'Rol']}
              rows={[
                [<Placeholder key="p">Primario</Placeholder>, 'Color principal de marca'],
                [<Placeholder key="s">Secundario</Placeholder>, 'Color secundario de marca'],
                ['Neutral', 'Fondos claros, superficies y aire visual'],
                ['Acentos', 'Colores flexibles por intención'],
              ]}
            />
          </div>

          {/* 4.3 Acentos disponibles */}
          <div className="flex w-full flex-col gap-[12px]">
            <p className="text-[15px] font-semibold text-[#1c212b]">4.3 Acentos disponibles</p>
            <Table
              headers={['Token / ID', 'Nombre', 'HEX', 'Rol', 'Uso', 'Estado']}
              rows={[1, 2].map((i) => [
                <Placeholder key="t">accent_{i}</Placeholder>,
                <Placeholder key="n">Nombre del acento {i}</Placeholder>,
                <Placeholder key="h">#HEXHEX</Placeholder>,
                <Placeholder key="r">Rol</Placeholder>,
                <Placeholder key="u">Uso</Placeholder>,
                <Placeholder key="e">Estado</Placeholder>,
              ])}
            />
          </div>

          {/* 4.4 Proporciones y configuraciones */}
          <div className="flex w-full flex-col gap-[16px]">
            <p className="text-[15px] font-semibold text-[#1c212b]">4.4 Proporciones y configuraciones</p>
            <div className="flex flex-col gap-[12px]">
              <p className="text-[13px] font-semibold uppercase tracking-[0.4px] text-[#59667d]">Principales</p>
              <div className="grid grid-cols-1 gap-[12px] min-[1100px]:grid-cols-2">
                {CONFIG_PRINCIPALES.map((c) => (
                  <ConfigCard key={c} nombre={c} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[12px]">
              <p className="text-[13px] font-semibold uppercase tracking-[0.4px] text-[#59667d]">Variables</p>
              <div className="grid grid-cols-1 gap-[12px] min-[1100px]:grid-cols-2">
                {CONFIG_VARIABLES.map((c) => (
                  <ConfigCard key={c} nombre={c} />
                ))}
              </div>
            </div>
            <p className="text-[13px] italic leading-[19px] text-[#8a94a8]">
              Las proporciones son referenciales y consideran el uso de colores del sistema, no el peso total de
              la fotografía.
            </p>
          </div>
        </section>

        {/* 05 · Do / Don't */}
        <section className="flex w-full flex-col gap-[16px]">
          <SectionHeader title="05. Do / Don't" description="" />
          <Table headers={['Do', "Don't"]} rows={DO_DONT.map(([d, dn]) => [d, dn])} />
        </section>
      </div>

      <GovernanceFooter title="Gobernanza del color de marca" rules={GOVERNANCE_RULES} />

      <MetaFooter label="v1 · 02 Brand Colors · Color System · Master Template" />
    </div>
  )
}
