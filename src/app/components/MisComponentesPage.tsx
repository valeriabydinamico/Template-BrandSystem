import { useEffect, useState } from 'react'
import { PageHeader } from './PageHeader'
import { ModuleBadge } from './ModuleBadge'
import { Badge } from './Badge'
import { GovernanceRule } from './GovernanceRule'
import { GovernanceFooter } from './GovernanceFooter'
import { MetaFooter } from './MetaFooter'
import { TokenTag } from './TokenTag'
import { Note } from './Note'
import { ColorCard } from './ColorCard'
import { SemanticColorCard } from './SemanticColorCard'
import { DocNote, MetaRow, SectionHeader, TypePreview } from './docs/shared'
import { FONT } from './typography/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Handbook de componentes propios del design system.
 * Cada sección muestra el componente en vivo para poder revisarlo y ajustarlo.
 * ────────────────────────────────────────────────────────────────────────── */

function Section({
  id,
  name,
  description,
  children,
}: {
  id: string
  name: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="flex scroll-mt-[24px] flex-col gap-[20px]">
      <div className="flex flex-col gap-[4px] border-b border-[#e3e7ee] pb-[12px]">
        <h2 className="font-bold text-[22px] leading-[28px] text-[#16181d]">{name}</h2>
        <p className="font-normal text-[14px] leading-[20px] text-[#5f6b78]">{description}</p>
      </div>
      {children}
    </section>
  )
}

/** Índice fijo a la derecha: navega a cada componente y marca el visible. */
function PageNav({ active, onGo }: { active: string; onGo: (id: string) => void }) {
  return (
    <nav className="sticky top-[24px] h-max max-h-[calc(100vh-48px)] w-[212px] shrink-0 overflow-y-auto max-[1080px]:hidden min-[1080px]:block">
      <p className="px-[10px] pb-[6px] font-semibold text-[11px] uppercase leading-[14px] tracking-[0.6px] text-[#8a94a8]">
        En esta página
      </p>
      <div className="flex flex-col gap-[1px]">
        {SECTIONS.map((s) => (
          <div key={s.id}>
            {s.id === 'section-header' && (
              <p className="mb-[2px] mt-[10px] border-t border-[#e3e7ee] px-[10px] pb-[4px] pt-[12px] font-semibold text-[11px] uppercase leading-[14px] tracking-[0.6px] text-[#8a94a8]">
                Helpers de doc
              </p>
            )}
            <button
              onClick={() => onGo(s.id)}
              className={`block w-full cursor-pointer rounded-[8px] px-[10px] py-[7px] text-left text-[13px] leading-[18px] transition-colors ${
                active === s.id
                  ? 'bg-[#e1f0ff] font-semibold text-[#004c97]'
                  : 'font-medium text-[#576175] hover:bg-[#eef2f8]'
              }`}
            >
              {s.name}
            </button>
          </div>
        ))}
      </div>
    </nav>
  )
}

function Example({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[10px]">
      <p className="font-mono text-[12px] uppercase tracking-[0.6px] text-[#8a94a8]">{label}</p>
      <div className="flex flex-wrap items-start gap-[16px] rounded-[12px] border border-[#e3e7ee] bg-[#f7f8fa] p-[20px]">
        {children}
      </div>
    </div>
  )
}

/** Ancho fijo para previsualizar cards (mismo formato que en las páginas reales). */
function CardSlot({ children, width = 300 }: { children: React.ReactNode; width?: number }) {
  return (
    <div style={{ width }} className="max-w-full">
      {children}
    </div>
  )
}

const SECTIONS = [
  { id: 'page-header', name: 'PageHeader' },
  { id: 'module-badge', name: 'ModuleBadge' },
  { id: 'badge', name: 'Badge' },
  { id: 'governance-rule', name: 'GovernanceRule' },
  { id: 'governance-footer', name: 'GovernanceFooter' },
  { id: 'meta-footer', name: 'MetaFooter' },
  { id: 'token-tag', name: 'TokenTag' },
  { id: 'note', name: 'Note' },
  { id: 'color-card', name: 'ColorCard' },
  { id: 'semantic-color-card', name: 'SemanticColorCard' },
  { id: 'section-header', name: 'SectionHeader' },
  { id: 'doc-note', name: 'DocNote' },
  { id: 'type-preview', name: 'TypePreview' },
  { id: 'meta-row', name: 'MetaRow' },
]

export function MisComponentesPage() {
  const [active, setActive] = useState(SECTIONS[0].id)

  function go(id: string) {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Scrollspy: marca en el índice la sección visible más arriba.
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    )
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-12% 0px -78% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Handbook"
        title="Mis componentes"
        paragraphs={[
          'Catálogo vivo de los componentes propios que vamos creando para documentar el design system.',
          'Sirve para visualizar cómo se ve cada uno, revisar su comportamiento y decidir ajustes antes de usarlos en las páginas.',
        ]}
      />

      <div className="flex w-full items-start gap-[40px] px-[40px] pb-[80px] pt-[16px]">
        <div className="flex min-w-0 flex-1 flex-col gap-[48px]">
        <Section
          id="page-header"
          name="PageHeader"
          description="Encabezado de página: eyebrow de módulo + título + copy. Lo usan Global Colors, Brand Colors y esta página."
        >
          <Example label="module + title + paragraphs (con línea en blanco)">
            <div className="w-full max-w-[720px] rounded-[12px] border border-[#e3e7ee] bg-white">
              <PageHeader
                module="Color System"
                title="01 Global Colors"
                paragraphs={[
                  'Escalas primitivas de color que forman la base del sistema.',
                  null,
                  'HEX es la fuente de verdad; RGB y HSL se mantienen como referencia técnica.',
                ]}
              />
            </div>
          </Example>
        </Section>

        <Section
          id="module-badge"
          name="ModuleBadge"
          description="Eyebrow con icono que identifica el módulo del sistema al que pertenece una página."
        >
          <Example label="label + icono por defecto (Color System)">
            <ModuleBadge label="Color System" />
            <ModuleBadge label="Handbook" />
          </Example>
        </Section>

        <Section
          id="badge"
          name="Badge"
          description="Píldora de etiqueta de uso. Se usa en listas para enumerar los casos de uso de un rol cromático."
        >
          <Example label="varias etiquetas">
            <Badge>CTA's</Badge>
            <Badge>Headers</Badge>
            <Badge>Hero surfaces</Badge>
            <Badge>Backgrounds</Badge>
            <Badge>Bloques secundarios de contenido</Badge>
          </Example>
        </Section>

        <Section
          id="governance-rule"
          name="GovernanceRule"
          description="Fila numerada para los bloques de “Gobernanza” al pie de las páginas de color."
        >
          <Example label="number + texto">
            <div className="flex w-full max-w-[720px] flex-col gap-[12px]">
              <GovernanceRule number={1}>
                Los roles de Brand Colors deben construirse siempre a partir de primitives existentes;
                no se deben crear valores HEX aislados directamente en esta capa.
              </GovernanceRule>
              <GovernanceRule number={2}>
                Primary debe mantener la mayor jerarquía de marca. Secondary y Accent funcionan como
                apoyo.
              </GovernanceRule>
            </div>
          </Example>
        </Section>

        <Section
          id="governance-footer"
          name="GovernanceFooter"
          description="Bloque completo de “Gobernanza” al pie de las páginas del Color System: encabezado (icono + eyebrow + título) + lista de reglas numeradas. Recibe `title` y `rules: string[]`."
        >
          <Example label="title + rules">
            <div className="w-full max-w-[860px] overflow-hidden rounded-[12px] border border-[#e3e7ee]">
              <GovernanceFooter
                title="Gobernanza del color de marca"
                rules={[
                  'Los roles deben construirse siempre a partir de primitives existentes; no se deben crear valores HEX aislados directamente en esta capa.',
                  'Primary debe mantener la mayor jerarquía de marca. Secondary y Accent funcionan como apoyo.',
                  'Cada rol debe conservar una relación trazable con Global Colors mediante una referencia, no por duplicación del valor.',
                ]}
              />
            </div>
          </Example>
        </Section>

        <Section
          id="meta-footer"
          name="MetaFooter"
          description="Barra final de las páginas del Color System: metadato de versión + pastilla de estado. Recibe `label` y `status` (por defecto “Master”)."
        >
          <Example label="label + status">
            <div className="w-full max-w-[860px] overflow-hidden rounded-[12px] border border-[#e3e7ee]">
              <MetaFooter label="v1 · 03 Semantic Colors · Master Template" />
            </div>
          </Example>
        </Section>

        <Section
          id="token-tag"
          name="TokenTag"
          description="Píldora gris de ruta/token. Si el texto no entra, se recorta con “…” y muestra el texto completo en un tooltip al pasar el cursor."
        >
          <Example label="tone default / plain">
            <div className="flex w-[240px] flex-col gap-[8px]">
              <TokenTag>color/primitive/blue/500</TokenTag>
              <TokenTag tone="plain">color/primitive/blue/500</TokenTag>
            </div>
          </Example>
          <Example label="texto que excede el ancho → recorte + tooltip">
            <div className="w-[200px]">
              <TokenTag>color/primitive/very-long-namespace/blue/subtone/900</TokenTag>
            </div>
          </Example>
        </Section>

        <Section
          id="note"
          name="Note"
          description="Nota informativa que aparece bajo las grillas de tokens del Color System para aclarar decisiones de diseño (qué puede cambiar por proyecto, cómo se comporta un estado…)."
        >
          <Example label="icono + texto">
            <div className="w-full max-w-[720px]">
              <Note>
                El rol de acción principal debe apuntar al color de marca configurado para cada
                proyecto. Su valor puede cambiar sin alterar el nombre ni la intención del token
                semántico.
              </Note>
            </div>
          </Example>
        </Section>

        <Section
          id="color-card"
          name="ColorCard"
          description="Documenta un tono de color individual (primitive). 4 variantes: primary, secondary, tertiary y gradient."
        >
          <Example label="primary — badges en los extremos">
            <CardSlot>
              <ColorCard
                variant="primary"
                color="#004C97"
                name="Primary"
                description="Color Reference: Blue 700"
                hex="004C97"
                rgb={{ r: 0, g: 76, b: 151 }}
                cmyk={{ c: 100, m: 50, y: 0, k: 41 }}
                pantone="Pantone 2945 C"
                accessibilityRating="AAA"
                contrastRatio="8.47:1"
              />
            </CardSlot>
          </Example>
          <Example label="secondary — badges agrupados a la izquierda">
            <CardSlot>
              <ColorCard
                variant="secondary"
                color="#00A3E1"
                name="Secondary"
                description="Color Reference: Light Blue 600"
                hex="00A3E1"
                rgb={{ r: 0, g: 163, b: 225 }}
                cmyk={{ c: 100, m: 28, y: 0, k: 12 }}
                pantone="Pantone 2995 C"
                accessibilityRating="AA"
                contrastRatio="4.73:1"
              />
            </CardSlot>
          </Example>
          <Example label="tertiary — swatch compacto de escala (stroke auto si es casi blanco)">
            <CardSlot width={460}>
              <div className="flex flex-col gap-[16px]">
                <ColorCard
                  variant="tertiary"
                  color="#1677D8"
                  name="500"
                  hex="1677D8"
                  rgb={{ r: 22, g: 119, b: 216 }}
                  hsl={{ h: '210°', s: '82%', l: '47%' }}
                  token="color/primitive/blue/500"
                />
                <ColorCard
                  variant="tertiary"
                  color="#FFFFFF"
                  name="50"
                  hex="FFFFFF"
                  rgb={{ r: 255, g: 255, b: 255 }}
                  hsl={{ h: '0°', s: '0%', l: '100%' }}
                  token="color/primitive/gray/50"
                />
              </div>
            </CardSlot>
          </Example>
          <Example label="gradient">
            <CardSlot>
              <ColorCard
                variant="gradient"
                color="linear-gradient(to left, #00A3E1, #004C97)"
                name="Gradiente 01"
                colorTop="00A3E1"
                colorBottom="004C97"
                angle="180°"
                token="style/gradient/01"
              />
            </CardSlot>
          </Example>
        </Section>

        <Section
          id="semantic-color-card"
          name="SemanticColorCard"
          description="Documenta un token de color semántico. 4 variantes: text, border, background y background + border. Las pastillas de contraste se calculan solas; si la ruta del token contiene “disabled” se muestra “N/A”."
        >
          <Example label="text — el color se muestra escrito como texto">
            <CardSlot>
              <SemanticColorCard
                variant="text"
                role="Brand Primary"
                color="#004C97"
                token="color/text/brand-primary"
                reference="color/primitive/blue/700"
              />
            </CardSlot>
            <CardSlot>
              <SemanticColorCard
                variant="text"
                role="Interactive On Dark"
                color="#9AE3FF"
                token="color/text/brand-interactive-on-dark"
                reference="color/primitive/light-blue/200"
              />
            </CardSlot>
          </Example>
          <Example label="border — el color como contorno (panel se oscurece si es casi blanco)">
            <CardSlot>
              <SemanticColorCard
                variant="border"
                role="Border Default"
                color="#C4C9D4"
                token="color/ui/border/default"
                reference="color/primitive/ink/200"
              />
            </CardSlot>
            <CardSlot>
              <SemanticColorCard
                variant="border"
                role="Icon Inverse"
                color="#FFFFFF"
                token="color/ui/icon/inverse"
                reference="color/primitive/gray/50"
              />
            </CardSlot>
          </Example>
          <Example label="background — el color como relleno (card se tiñe si es blanco puro)">
            <CardSlot>
              <SemanticColorCard
                variant="background"
                role="Primary"
                color="#004C97"
                token="color/background/brand-primary"
                reference="color/primitive/blue/700"
              />
            </CardSlot>
            <CardSlot>
              <SemanticColorCard
                variant="background"
                role="Default"
                color="#FFFFFF"
                token="color/background/default"
                reference="color/primitive/gray/50"
              />
            </CardSlot>
          </Example>
          <Example label="background + border — fondo suave + contorno del mismo color">
            <CardSlot>
              <SemanticColorCard
                variant="background-border"
                role="Error"
                color="#DC2626"
                token="color/ui/border/error"
                reference="color/primitive/red/default"
              />
            </CardSlot>
          </Example>
          <Example label="N/A — token disabled">
            <CardSlot>
              <SemanticColorCard
                variant="background"
                role="Primary Disabled"
                color="#E3E4EA"
                token="color/surface/cta/primary/disabled"
                reference="color/primitive/ink/100"
              />
            </CardSlot>
          </Example>
        </Section>

        {/* ── Helpers de las páginas de documentación (components/docs/shared.tsx) ── */}
        <div className="flex w-full flex-col gap-[6px] border-t border-[#e3e7ee] pt-[24px]">
          <p className="font-bold text-[16px] leading-[22px] text-[#16181d]">
            Helpers de documentación
          </p>
          <p className="font-normal text-[13px] leading-[19px] text-[#5f6b78]">
            Piezas de layout compartidas por las páginas de la doc (Typography, Visual Styles,
            Grids). Viven en <span className="font-mono">components/docs/shared.tsx</span>; no son
            componentes del design system que se documenta.
          </p>
        </div>

        <Section
          id="section-header"
          name="SectionHeader"
          description="Cabecera de sección: título (bold 28) + descripción (15). Abre cada bloque dentro de una página de documentación."
        >
          <Example label="title + description">
            <div className="w-full max-w-[720px]">
              <SectionHeader
                title="01. Anatomía de la grilla"
                description="Cinco elementos definen la estructura base. Se combinan según el formato, pero mantienen una intención consistente dentro del sistema."
              />
            </div>
          </Example>
        </Section>

        <Section
          id="doc-note"
          name="DocNote"
          description="Callout aclaratorio bajo una sección (QA interno, relación con otra escala, “referencia configurable”…). Fondo claro + borde, sin color de acento. Recibe `title` + contenido."
        >
          <Example label="title + texto">
            <div className="w-full max-w-[720px]">
              <DocNote title="Relación con Spacing">
                El baseline de 4 px puede utilizarse como referencia de precisión. Las separaciones
                estructurales deben resolverse con la escala oficial de Spacing.
              </DocNote>
            </div>
          </Example>
        </Section>

        <Section
          id="type-preview"
          name="TypePreview"
          description="Caja de vista previa de un estilo tipográfico: label + muestra renderizada con el `style` que se le pase. La usa Typography."
        >
          <Example label="label + text + style">
            <div className="flex w-full max-w-[720px] flex-col gap-[12px]">
              <TypePreview
                text="Build trust through every interaction."
                style={{ fontFamily: FONT.brand, fontWeight: 600, fontSize: 30, lineHeight: '38px' }}
              />
              <TypePreview
                label="Body — Inter Regular 16/24"
                text="Clear, readable interfaces for every task."
                style={{ fontFamily: FONT.functional, fontWeight: 400, fontSize: 16, lineHeight: '24px' }}
              />
            </div>
          </Example>
        </Section>

        <Section
          id="meta-row"
          name="MetaRow"
          description="Fila etiqueta + valor dentro de una card de especificación (label 180px + valor). El valor acepta `valueStyle` para renderizarlo en su fuente real."
        >
          <Example label="label + value (+ valueStyle)">
            <div className="flex w-full max-w-[720px] flex-col gap-[8px]">
              <MetaRow
                label="Familia configurada"
                value="Manrope"
                valueStyle={{ fontFamily: FONT.brand, fontWeight: 600 }}
              />
              <MetaRow label="Pesos aprobados" value="Medium · Semi Bold · Bold" />
              <MetaRow label="Uso recomendado" value="Display · Headlines · Campaigns · Storytelling" />
            </div>
          </Example>
        </Section>
        </div>

        <PageNav active={active} onGo={go} />
      </div>
    </div>
  )
}
