import { useState, useRef, useEffect } from 'react'
import { ColorCard } from './ColorCard'

type Tab = 'componentes' | 'modulos'

interface NavItem {
  id: string
  label: string
}

const componentesNav: NavItem[] = [
  { id: 'color-cards', label: 'Color cards' },
]

const modulosNav: NavItem[] = [
  // Se agregan aquí los módulos conforme lleguen de Figma
]

function SectionHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="flex flex-col gap-xs pb-lg border-b border-border-primary">
      <h2 className="text-heading text-text-primary">{title}</h2>
      {description && (
        <p className="text-label-sm text-text-secondary">{description}</p>
      )}
    </div>
  )
}

function SubSidebar({
  items,
  activeId,
  onSelect,
}: {
  items: NavItem[]
  activeId: string
  onSelect: (id: string) => void
}) {
  if (items.length === 0) return null
  return (
    <aside className="w-[180px] shrink-0 sticky top-0 self-start flex flex-col gap-[2px]">
      {items.map(item => (
        <button
          key={item.id}
          onClick={() => onSelect(item.id)}
          className={`text-left px-lg py-md rounded-corner-md text-label-sm transition-colors w-full cursor-pointer ${
            activeId === item.id
              ? 'bg-brand-tertiary text-brand-primary font-semibold'
              : 'text-text-secondary hover:bg-bg-hover hover:text-text-primary'
          }`}
        >
          {item.label}
        </button>
      ))}
    </aside>
  )
}

function ComponentesContent({
  sectionRefs,
}: {
  sectionRefs: React.MutableRefObject<Record<string, HTMLElement | null>>
}) {
  return (
    <div className="flex flex-col gap-3xl flex-1 min-w-0">

      {/* Color cards */}
      <section
        ref={el => { sectionRefs.current['color-cards'] = el }}
        className="flex flex-col gap-xl"
      >
        <SectionHeader
          title="Color cards"
          description="Tarjetas para representar tonos de color individuales dentro de una paleta. Muestran nombre, token, HEX, RGB, CMYK, Pantone y nivel de accesibilidad WCAG."
        />

        {/* Primary */}
        <div className="bg-surface-bg rounded-corner-lg p-xl">
          <h2 className="text-label text-text-primary font-semibold mb-lg">
            Color card — Primary
          </h2>
          <div className="flex flex-wrap gap-lg items-start">
            <div className="w-[280px]">
              <ColorCard
                variant="primary"
                color="#004C97"
                name="BG Blue"
                description="Brand Default: BG Blue 700"
                hex="004C97"
                rgb={{ r: 0, g: 76, b: 151 }}
                cmyk={{ c: 100, m: 50, y: 0, k: 41 }}
                pantone="Pantone 2945 C"
                accessibilityRating="AAA"
                contrastRatio="8.47:1"
              />
            </div>
          </div>
        </div>

        {/* Secondary */}
        <div className="bg-surface-bg rounded-corner-lg p-xl">
          <h2 className="text-label text-text-primary font-semibold mb-lg">
            Color card — Secondary
          </h2>
          <div className="flex flex-wrap gap-lg items-start">
            <div className="w-[280px]">
              <ColorCard
                variant="secondary"
                color="#00A3E1"
                name="BG Light Blue"
                description="Brand Default: BG Light Blue 600"
                hex="00A3E1"
                rgb={{ r: 0, g: 163, b: 225 }}
                cmyk={{ c: 100, m: 28, y: 0, k: 12 }}
                pantone="Pantone 2995 C"
                accessibilityRating="AA"
                contrastRatio="4.73:1"
              />
            </div>
          </div>
        </div>

        {/* Tertiary */}
        <div className="bg-surface-bg rounded-corner-lg p-xl">
          <h2 className="text-label text-text-primary font-semibold mb-lg">
            Color card — Tertiary
          </h2>
          <div className="flex flex-col gap-lg items-start">
            <ColorCard
              variant="tertiary"
              color="#FCE8E8"
              name="50"
              hex="FCE8E8"
              rgb={{ r: 252, g: 232, b: 232 }}
              hsl={{ h: "0°", s: "77%", l: "95%" }}
              token="color/illustration/red/50"
            />
          </div>
        </div>

        {/* Gradient */}
        <div className="bg-surface-bg rounded-corner-lg p-xl">
          <h2 className="text-label text-text-primary font-semibold mb-lg">
            Color card — Gradient
          </h2>
          <div className="flex flex-wrap gap-lg items-start">
            <div className="w-[280px] h-[320px]">
              <ColorCard
                variant="gradient"
                color="linear-gradient(180deg, #00A3E1 0%, #004C97 100%)"
                name="BG Blue Gradient"
                colorTop="00A3E1"
                colorBottom="004C97"
                angle="180°"
                description="Fondos principales y elementos destacados de marca"
              />
            </div>
          </div>
        </div>

      </section>

    </div>
  )
}

function ModulosContent({
  sectionRefs,
}: {
  sectionRefs: React.MutableRefObject<Record<string, HTMLElement | null>>
}) {
  if (modulosNav.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[320px]">
        <p className="text-label-sm text-text-tertiary">
          Los módulos se agregarán aquí conforme lleguen de Figma.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3xl flex-1 min-w-0">
      {modulosNav.map(({ id, label }) => (
        <section
          key={id}
          ref={el => { sectionRefs.current[id] = el }}
          className="flex flex-col gap-xl"
        >
          <SectionHeader title={label} />
          {/* Contenido del módulo se inserta aquí */}
        </section>
      ))}
    </div>
  )
}

export function MisComponentesPage() {
  const [activeTab, setActiveTab] = useState<Tab>('componentes')
  const [activeSection, setActiveSection] = useState('color-cards')
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  const navItems = activeTab === 'componentes' ? componentesNav : modulosNav

  function handleNavSelect(id: string) {
    setActiveSection(id)
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Reset active section when switching tabs
  useEffect(() => {
    if (activeTab === 'componentes' && componentesNav.length > 0) {
      setActiveSection(componentesNav[0].id)
    } else if (activeTab === 'modulos' && modulosNav.length > 0) {
      setActiveSection(modulosNav[0].id)
    }
  }, [activeTab])

  const tabs: { id: Tab; label: string }[] = [
    { id: 'componentes', label: 'Componentes' },
    { id: 'modulos', label: 'Módulos' },
  ]

  return (
    <div className="flex flex-col gap-xl">

      {/* Page header */}
      <div className="flex flex-col gap-xs">
        <h1 className="text-title text-text-primary">Mis componentes</h1>
        <p className="text-label-sm text-text-secondary">
          Componentes personalizados organizados por categoría
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border-primary gap-xs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-lg pb-md text-label cursor-pointer transition-colors border-b-2 -mb-px ${
              activeTab === tab.id
                ? 'border-brand-primary text-brand-primary font-semibold'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Body: sub-sidebar + content */}
      <div className="flex gap-2xl items-start">
        <SubSidebar
          items={navItems}
          activeId={activeSection}
          onSelect={handleNavSelect}
        />
        {activeTab === 'componentes'
          ? <ComponentesContent sectionRefs={sectionRefs} />
          : <ModulosContent sectionRefs={sectionRefs} />
        }
      </div>

    </div>
  )
}
