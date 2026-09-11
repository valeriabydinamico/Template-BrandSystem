import { Fragment } from 'react'
import { ColorCard } from './ColorCard'
import { Badge } from './Badge'
import { PageHeader } from './PageHeader'
import { GovernanceFooter } from './GovernanceFooter'
import { MetaFooter } from './MetaFooter'
import type { BrandColorEntry } from '../data/brandColors'
import { brandColorsReports } from '../lib/siteCompleteness'

/* ────────────────────────────────────────────────────────────────────────────
 * Los datos viven en `src/app/data/brandColors.ts`. Acá solo queda el layout:
 * qué secciones se arman con qué reporte de `brandColorsReports` (calculado en
 * `src/app/lib/siteCompleteness.ts`). Una sección sin colores completos NO se
 * renderiza — ver "Regla de completitud de datos" en CLAUDE.md.
 *
 * Responsive — breakpoint único en 1600px de ancho de viewport (incluye sidebar):
 *   < 1600px  → apilado: contenido arriba, grilla de cards abajo
 *   ≥ 1600px  → horizontal: contenido a la izquierda (600), cards a la derecha
 * En ambos casos la grilla agrupa máximo 2 cards por fila.
 * (max-[1600px] / min-[1600px] son mutuamente excluyentes a propósito: evitan
 *  el problema de orden en la cascada entre `flex-col` y el variant responsive.)
 * ────────────────────────────────────────────────────────────────────────── */

const GOVERNANCE_RULES = [
  'Los roles de Brand Colors deben construirse siempre a partir de primitives existentes; no se deben crear valores HEX aislados directamente en esta capa.',
  'Primary debe mantener la mayor jerarquía de marca. Secondary y Accent funcionan como apoyo y no deben competir sistemáticamente con el rol principal.',
  'Evitar el uso simultáneo de múltiples terciarios dentro de una misma pieza, salvo storytelling editorial o visualizaciones.',
  'Cada rol debe documentar su referencia de color y conservar una relación trazable con Global Colors. Si cambia la primitive referenciada, el rol debe actualizarse mediante una referencia y no mediante duplicación manual del valor.',
  'Los equivalentes RGB, CMYK y referencias Pantone funcionan como guía de implementación editorial, impresión y alineación cross-team con producto.',
  'Los tokens de texto no deben redefinirse por canal.',
]

/* ────────────────────────────────────────────────────────────────────────────
 * Sub-componentes de página
 * ────────────────────────────────────────────────────────────────────────── */

function BrandCard({ data }: { data: BrandColorEntry }) {
  return (
    <ColorCard
      variant={data.name === 'Primary' ? 'primary' : 'secondary'}
      color={`#${data.hex}`}
      name={data.name!}
      description={data.description}
      hex={data.hex}
      rgb={data.rgb}
      cmyk={data.cmyk}
      pantone={data.pantone}
    />
  )
}

/**
 * Grilla de color cards.
 * - 1 card: ancho máx 500. Alineada a la izquierda en apilado; pegada a la
 *   derecha de su columna en ≥1600 (caso Primary).
 * - 2+ cards: 2 por fila, cada una `(100% − 16px) / 2`; el resto pasa a filas
 *   siguientes conservando ese ancho (la card suelta no se estira — caso Accent).
 */
function CardGrid({ cards }: { cards: BrandColorEntry[] }) {
  if (cards.length === 1) {
    return (
      <div className="flex w-full min-[1600px]:justify-end">
        <div className="w-full max-w-[500px]">
          <BrandCard data={cards[0]} />
        </div>
      </div>
    )
  }
  return (
    <div className="flex w-full flex-wrap gap-[16px]">
      {cards.map((c, i) => (
        <div key={c.name ?? i} className="w-[calc(50%_-_8px)] min-w-[280px] max-w-[500px]">
          <BrandCard data={c} />
        </div>
      ))}
    </div>
  )
}

/** Sección de rol cromático: encabezado + lista de uso, y grilla de cards. */
function BrandSection({
  title,
  paragraphs,
  usage,
  cards,
}: {
  title: string
  paragraphs: string[]
  usage: string[]
  cards: BrandColorEntry[]
}) {
  return (
    <section className="flex w-full items-start gap-[72px] max-[1600px]:flex-col min-[1600px]:flex-row">
      {/* section-header */}
      <div className="flex flex-col items-start gap-[24px] max-[1600px]:w-full min-[1600px]:w-[600px] min-[1600px]:shrink-0">
        <h3 className="w-full font-bold text-[40px] leading-[44px] text-[#16181d]">{title}</h3>
        <div className="w-full font-normal text-[16px] leading-[24px] text-[#576175]">
          {paragraphs.map((p, i) => (
            <p key={i} className={i < paragraphs.length - 1 ? 'mb-0' : ''}>
              {p}
            </p>
          ))}
        </div>
        {/* usage-list */}
        <div className="flex w-full flex-wrap items-start gap-[12px]">
          {usage.map((u) => (
            <Badge key={u}>{u}</Badge>
          ))}
        </div>
      </div>

      {/* color-card-grid */}
      <div className="max-[1600px]:w-full min-[1600px]:flex-1 min-[1600px]:min-w-0">
        <CardGrid cards={cards} />
      </div>
    </section>
  )
}

function Divider() {
  return <div className="h-px w-full shrink-0 bg-[#eef2f8]" />
}

/* ────────────────────────────────────────────────────────────────────────────
 * Página
 * ────────────────────────────────────────────────────────────────────────── */

interface SectionDef {
  key: string
  title: string
  paragraphs: string[]
  usage: string[]
  cards: BrandColorEntry[]
}

export function BrandColorsPage() {
  const sections: SectionDef[] = [
    brandColorsReports.primary.visible.length > 0 && {
      key: 'primary',
      title: 'Color primario de marca',
      paragraphs: [
        'Rol cromático principal de la identidad.',
        'Debe concentrar el mayor reconocimiento de marca y utilizarse como referencia para los momentos de mayor jerarquía visual. La familia y el tono asignados pueden cambiar según el proyecto.',
      ],
      usage: ['CTA’s', 'Headers', 'Hero surfaces', 'Logo', 'Elementos'],
      cards: brandColorsReports.primary.visible,
    },
    brandColorsReports.secondary.visible.length > 0 && {
      key: 'secondary',
      title: 'Colores secundarios de marca',
      paragraphs: [
        'Roles cromáticos de apoyo que amplían la identidad sin competir con Primary.',
        'Pueden utilizarse para construir jerarquía, profundidad, superficies auxiliares y diferenciación visual. La cantidad de roles secundarios puede variar según cada marca.',
      ],
      usage: [
        'Backgrounds',
        'Estados interactivos',
        'Diferenciación modular',
        'Apoyo Editorial',
        'Iconos',
      ],
      cards: brandColorsReports.secondary.visible,
    },
    brandColorsReports.accent.visible.length > 0 && {
      key: 'accent',
      title: 'Colores de acento de marca',
      paragraphs: [
        'Roles cromáticos complementarios para ampliar el rango expresivo de la marca.',
        'Se utilizan de forma intencional para campañas, categorías, storytelling o momentos específicos sin desplazar los roles Primary y Secondary. La cantidad de accents debe responder a las necesidades reales del proyecto.',
      ],
      usage: [
        'Promociones',
        'CTA’s',
        'Contraste Visual',
        'Información puntual',
        'Bloques secundarios de contenido',
      ],
      cards: brandColorsReports.accent.visible,
    },
  ].filter(Boolean) as SectionDef[]

  return (
    <div className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Color System"
        title="02 Brand Colors"
        paragraphs={[
          'Roles cromáticos de marca construidos a partir de las primitives definidas en Global Colors.',
          'Este board traduce familias cromáticas en decisiones de identidad como Primary, Secondary, Neutral y Accent sin duplicar valores base.',
          null,
          'Cada rol debe mantener una referencia de color clara hacia su primitive para facilitar consistencia, mantenimiento e implementación.',
        ]}
      />

      {/* Secciones de roles — solo las que tienen datos completos */}
      <div className="flex w-full flex-col items-start gap-[64px] px-[40px] py-[80px]">
        {sections.map((s) => (
          <Fragment key={s.key}>
            <Divider />
            <BrandSection {...s} />
          </Fragment>
        ))}
      </div>

      <GovernanceFooter title="Gobernanza del color de marca" rules={GOVERNANCE_RULES} />

      <MetaFooter label="v1 · 02 Brand Colors · Master Template" />
    </div>
  )
}
