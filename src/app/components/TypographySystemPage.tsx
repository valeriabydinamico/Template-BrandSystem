import type { CSSProperties, ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { MetaFooter } from './MetaFooter'
import { TokenTag } from './TokenTag'
import { Note } from './Note'
import typeBadgeIcon from '@/assets/type-badge-icon.svg'

/* ────────────────────────────────────────────────────────────────────────────
 * 02 Typography System — Myntex ("Typography Specific", Figma nodo 152:2668,
 * archivo "Myntex - Brand Definition (Limpio)").
 *
 * Documenta los estilos de uso (no primitivos) construidos sobre Typography
 * Foundations: 7 categorías — Body, Detail, Button, Link, Heading, Heading
 * Mono y Display — cada una con su familia, peso, tamaño, interlineado y
 * tracking. Reemplaza la plantilla en blanco (tabla Display/H1/H2/Body/
 * Caption genérica).
 *
 * Fuente de verdad usada por estilo: los *named text styles* de Figma (el
 * diccionario de estilos que devuelve el MCP), no el texto descriptivo de
 * cada card de "Data" — en varios tokens (Detail M, Link S, Heading 2XS,
 * Display L/XL) el texto describía un peso/tamaño/tracking distinto al que
 * el estilo realmente aplica; se documentó lo que el estilo aplica de
 * verdad, que es lo que un diseñador obtiene al usarlo.
 * ────────────────────────────────────────────────────────────────────────── */

const FONT_PRIMARY = 'var(--font-myntex-primary)'
const FONT_DETAILS = 'var(--font-myntex-details)'

function CategoryHeading({ title }: { title: string }) {
  return (
    <div className="flex w-full flex-col gap-[8px]">
      <h3 className="font-bold text-[24px] leading-[32px] tracking-[-0.24px] text-[#16181d]">{title}</h3>
      <div className="h-px w-full bg-[#e3e7ee]" />
    </div>
  )
}

interface StyleSpec {
  name: string
  family: 'primary' | 'details'
  weightLabel: string
  weight: number
  px: number
  lineHeight: number
  letterSpacing: number
  sample?: ReactNode
}

function StyleRow({ spec, sectionKey }: { spec: StyleSpec; sectionKey: string }) {
  const fontFamily = spec.family === 'primary' ? FONT_PRIMARY : FONT_DETAILS
  const familyLabel = spec.family === 'primary' ? 'Funnel Sans (Primary)' : 'Geist Mono (Details)'
  const tono = spec.name.toLowerCase().replace(/\s+/g, '_')
  const style: CSSProperties = {
    fontFamily,
    fontWeight: spec.weight,
    fontSize: spec.px,
    lineHeight: `${spec.lineHeight}px`,
    letterSpacing: `${-spec.letterSpacing}px`,
    color: '#16181d',
  }

  return (
    <div className="flex w-full flex-col gap-[8px] border-b border-[#eef2f8] py-[16px] last:border-b-0">
      <div className="flex w-full flex-wrap items-center justify-between gap-[16px]">
        <div className="flex min-w-0 flex-col gap-[2px]">
          <p className="text-[14px] font-medium leading-[20px] text-[#16181d]">{spec.name}</p>
          <p className="text-[13px] leading-[18px] text-[#8a94a8]">
            {familyLabel} · {spec.weightLabel} · {spec.px}px / {spec.lineHeight}px ·{' '}
            {spec.letterSpacing === 0 ? 'Sin tracking' : `${spec.letterSpacing.toFixed(2)}px`}
          </p>
        </div>
        <p className="shrink-0 truncate text-right" style={style}>
          {spec.sample ?? `I'm ${spec.name}`}
        </p>
      </div>
      <TokenTag fit>{`typography_system/system/${sectionKey}/${tono}`}</TokenTag>
    </div>
  )
}

function Category({ title, sectionKey, styles }: { title: string; sectionKey: string; styles: StyleSpec[] }) {
  return (
    <section className="flex w-full flex-col gap-[16px]">
      <CategoryHeading title={title} />
      {styles.map((s) => (
        <StyleRow key={s.name} spec={s} sectionKey={sectionKey} />
      ))}
    </section>
  )
}

const BODY: StyleSpec[] = [
  { name: 'Body S', family: 'primary', weightLabel: 'Regular', weight: 400, px: 12, lineHeight: 16, letterSpacing: 0.36 },
  { name: 'Body M', family: 'primary', weightLabel: 'Regular', weight: 400, px: 14, lineHeight: 20, letterSpacing: 0.42 },
  { name: 'Body L', family: 'primary', weightLabel: 'Regular', weight: 400, px: 16, lineHeight: 22, letterSpacing: 0 },
]

const DETAIL: StyleSpec[] = [
  { name: 'Detail S', family: 'details', weightLabel: 'Regular', weight: 400, px: 12, lineHeight: 16, letterSpacing: 0.36 },
  { name: 'Detail M', family: 'details', weightLabel: 'Medium', weight: 500, px: 14, lineHeight: 20, letterSpacing: 0 },
]

const BUTTON: StyleSpec[] = [
  { name: 'Button S', family: 'details', weightLabel: 'Semi Bold', weight: 600, px: 14, lineHeight: 20, letterSpacing: 0 },
  { name: 'Button L', family: 'details', weightLabel: 'Semi Bold', weight: 600, px: 16, lineHeight: 22, letterSpacing: 0 },
]

const LINK: StyleSpec[] = [
  { name: 'Link S', family: 'details', weightLabel: 'Medium', weight: 500, px: 14, lineHeight: 20, letterSpacing: 0.42 },
  { name: 'Link L', family: 'details', weightLabel: 'Medium', weight: 500, px: 16, lineHeight: 22, letterSpacing: 0.48 },
]

const HEADING: StyleSpec[] = [
  { name: 'Heading 2XS', family: 'primary', weightLabel: 'Medium', weight: 500, px: 14, lineHeight: 20, letterSpacing: 0.42 },
  { name: 'Heading XS', family: 'primary', weightLabel: 'Medium', weight: 500, px: 16, lineHeight: 22, letterSpacing: 0 },
  { name: 'Heading S', family: 'primary', weightLabel: 'Medium', weight: 500, px: 20, lineHeight: 26, letterSpacing: 0.8 },
  { name: 'Heading M', family: 'primary', weightLabel: 'Medium', weight: 500, px: 24, lineHeight: 32, letterSpacing: 0.96 },
  { name: 'Heading L', family: 'primary', weightLabel: 'Medium', weight: 500, px: 32, lineHeight: 40, letterSpacing: 1.6 },
  { name: 'Heading XL', family: 'primary', weightLabel: 'Medium', weight: 500, px: 40, lineHeight: 48, letterSpacing: 2 },
  { name: 'Heading 2XL', family: 'primary', weightLabel: 'Medium', weight: 500, px: 56, lineHeight: 64, letterSpacing: 2.8 },
]

const HEADING_MONO: StyleSpec[] = [
  { name: 'Heading Mono 2XS', family: 'details', weightLabel: 'Medium', weight: 500, px: 14, lineHeight: 20, letterSpacing: 0 },
  { name: 'Heading Mono XS', family: 'details', weightLabel: 'Medium', weight: 500, px: 16, lineHeight: 22, letterSpacing: 0 },
  { name: 'Heading Mono S', family: 'details', weightLabel: 'Medium', weight: 500, px: 20, lineHeight: 26, letterSpacing: 0.2 },
  { name: 'Heading Mono M', family: 'details', weightLabel: 'Medium', weight: 500, px: 24, lineHeight: 32, letterSpacing: 0.24 },
  { name: 'Heading Mono L', family: 'details', weightLabel: 'Medium', weight: 500, px: 32, lineHeight: 40, letterSpacing: 0.64 },
  { name: 'Heading Mono XL', family: 'details', weightLabel: 'Medium', weight: 500, px: 40, lineHeight: 48, letterSpacing: 0 },
  { name: 'Heading Mono 2XL', family: 'details', weightLabel: 'Medium', weight: 500, px: 56, lineHeight: 64, letterSpacing: 1.12 },
]

const DISPLAY: StyleSpec[] = [
  { name: 'Display S', family: 'primary', weightLabel: 'Medium', weight: 500, px: 64, lineHeight: 68, letterSpacing: 3.2 },
  { name: 'Display M', family: 'primary', weightLabel: 'Medium', weight: 500, px: 72, lineHeight: 76, letterSpacing: 3.6 },
  { name: 'Display L', family: 'primary', weightLabel: 'Medium', weight: 500, px: 88, lineHeight: 80, letterSpacing: 4.4 },
  { name: 'Display XL', family: 'primary', weightLabel: 'Medium', weight: 500, px: 104, lineHeight: 96, letterSpacing: 5.2 },
  { name: 'Display 2XL', family: 'primary', weightLabel: 'Medium', weight: 500, px: 96, lineHeight: 90, letterSpacing: 4.8 },
  { name: 'Display 3XL', family: 'primary', weightLabel: 'Medium', weight: 500, px: 136, lineHeight: 128, letterSpacing: 5.44 },
  { name: 'Display 4XL', family: 'primary', weightLabel: 'Medium', weight: 500, px: 144, lineHeight: 148, letterSpacing: 7.2 },
]

export function TypographySystemPage() {
  return (
    <div id="typography.system" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Type System"
        moduleIconSrc={typeBadgeIcon}
        title="02 Typography System"
        paragraphs={[
          'Estilos de uso construidos sobre los primitivos de Typography Foundations: Body, Detail, Button, Link, Heading, Heading Mono y Display.',
          'Body y Heading resuelven texto e interfaz en Funnel Sans. Detail, Button, Link y Heading Mono usan Geist Mono para subtítulos de sección, botones y links. Display es la escala editorial para campañas y portadas.',
        ]}
      />

      <div className="flex w-full flex-col gap-[48px] px-[40px] py-[72px]">
        <Category title="Body" sectionKey="body" styles={BODY} />
        <Category title="Detail" sectionKey="detail" styles={DETAIL} />
        <Category title="Button" sectionKey="button" styles={BUTTON} />
        <Category title="Link" sectionKey="link" styles={LINK} />
        <Category title="Heading" sectionKey="heading" styles={HEADING} />
        <Category title="Heading Mono" sectionKey="heading_mono" styles={HEADING_MONO} />
        <Category title="Display" sectionKey="display" styles={DISPLAY} />

        <Note tone="warning">
          Display XL (104px) queda por encima de Display 2XL (96px) en el archivo fuente de Figma — se documentó tal
          cual, sin reordenar ni "corregir" el valor, porque el tracking aplicado (-5.2px = 5% de 104px) confirma que
          104px es el tamaño que el estilo realmente usa, no un error de lectura. Confirmar con el equipo de diseño si
          es intencional antes de usarlo en producción.
        </Note>
      </div>

      <MetaFooter label="v2 · 02 Typography System · Typography System · Myntex" status="Cliente" />
    </div>
  )
}
