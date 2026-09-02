import { useState, useEffect, startTransition } from 'react'
import { ThemeProvider, AstraLogo, useTheme } from '@figma/astraui'
import {
  Home,
  Film,
  Book,
  Folder,
  Settings,
  Zap,
  MousePointer,
  LayoutGrid,
  Bell,
  MessageSquare,
  Layers,
  Palette,
  BookOpen,
  ChevronDown,
  PanelLeftClose,
  PanelLeftOpen,
  type LucideIcon,
} from 'lucide-react'

import { MisComponentesPage } from './components/MisComponentesPage'
import { IntroduccionPage } from './components/IntroduccionPage'
import { GlobalColorsPage } from './components/GlobalColorsPage'
import { BrandColorsPage } from './components/BrandColorsPage'
import { SemanticColorsPage } from './components/SemanticColorsPage'
import { AjustesPage } from './components/AjustesPage'
import brandMarkIcon from '@/assets/color-system-badge-icon.svg'

type SidebarPage =
  | 'introduccion'
  | 'kit'
  | 'film'
  | 'book'
  | 'folder'
  | 'mis-componentes'
  | 'ajustes'
  | 'color'
type ColorPage = 'global-colors' | 'brand-colors' | 'semantic-colors'
type DemoSection =
  | 'buttons'
  | 'inputs'
  | 'media'
  | 'feedback'
  | 'navigation'
  | 'toolbar'
  | 'prompt'

const colorPages: { id: ColorPage; label: string }[] = [
  { id: 'global-colors', label: 'Global colors' },
  { id: 'brand-colors', label: 'Brand colors' },
  { id: 'semantic-colors', label: 'Semantic colors' },
]

const sections: { id: DemoSection; label: string; icon: React.ReactNode }[] = [
  { id: 'buttons', label: 'Buttons & Actions', icon: <Zap className="size-full" strokeWidth={1.5} /> },
  { id: 'inputs', label: 'Inputs & Forms', icon: <LayoutGrid className="size-full" strokeWidth={1.5} /> },
  { id: 'media', label: 'Media & Content', icon: <Film className="size-full" strokeWidth={1.5} /> },
  { id: 'feedback', label: 'Feedback & Status', icon: <Bell className="size-full" strokeWidth={1.5} /> },
  { id: 'navigation', label: 'Navigation', icon: <MousePointer className="size-full" strokeWidth={1.5} /> },
  { id: 'toolbar', label: 'Toolbar', icon: <Settings className="size-full" strokeWidth={1.5} /> },
  { id: 'prompt', label: 'AI / Prompt Chat', icon: <MessageSquare className="size-full" strokeWidth={1.5} /> },
]



function MisComponentesHeader() {
  return (
    <div className="flex items-center gap-md mb-xs">
      <Layers size={24} className="text-text-primary" />
      <h1 className="text-title text-text-primary">Mis componentes</h1>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────────────
 * Sidebar — Tailwind puro, alineado con la UI de la documentación
 * (mismo lenguaje que PageHeader / GovernanceFooter):
 *   superficie #fafbfc · borde #e3e7ee · headings #2f3945 · texto #576175 ·
 *   labels apagados #8a94a8 · caja de icono #596879 · activo = pastilla brand
 *   #e1f0ff / texto #004c97 (tokens reales de Brand Colors).
 * ────────────────────────────────────────────────────────────────────────── */

const NAV_ITEM =
  'flex w-full items-center gap-[12px] rounded-[10px] px-[12px] py-[9px] text-[13px] leading-[18px] transition-colors cursor-pointer text-left'

function navItemClass(active: boolean) {
  return `${NAV_ITEM} ${
    active
      ? 'bg-[#e1f0ff] font-semibold text-[#004c97]'
      : 'font-medium text-[#576175] hover:bg-[#eef2f8]'
  }`
}

function IconButton({
  label,
  active,
  onClick,
  className = '',
  children,
}: {
  label: string
  active: boolean
  onClick: () => void
  className?: string
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={label}
      aria-pressed={active}
      className={`flex size-[34px] shrink-0 items-center justify-center rounded-[10px] transition-colors ${
        active
          ? 'bg-[#e1f0ff] text-[#004c97]'
          : 'text-[#8a94a8] hover:bg-[#eef2f8] hover:text-[#576175]'
      } ${className}`}
    >
      {children}
    </button>
  )
}

function NavEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="px-[12px] pb-[4px] pt-[6px] font-semibold text-[11px] uppercase leading-[14px] tracking-[0.6px] text-[#8a94a8]">
      {children}
    </p>
  )
}

function NavItem({
  Icon,
  label,
  active,
  onClick,
  collapsed,
}: {
  Icon: LucideIcon
  label: string
  active: boolean
  onClick: () => void
  collapsed: boolean
}) {
  if (collapsed) {
    return (
      <IconButton label={label} active={active} onClick={onClick}>
        <Icon className="size-[18px]" strokeWidth={1.75} />
      </IconButton>
    )
  }
  return (
    <button onClick={onClick} className={navItemClass(active)}>
      <Icon className="size-[18px] shrink-0" strokeWidth={1.75} />
      <span className="flex-1 whitespace-nowrap">{label}</span>
    </button>
  )
}

function Sidebar({
  activePage,
  setActivePage,
  activeColorPage,
  setActiveColorPage,
  colorOpen,
  setColorOpen,
  collapsed,
  setCollapsed,
}: {
  activePage: SidebarPage
  setActivePage: (p: SidebarPage) => void
  activeColorPage: ColorPage
  setActiveColorPage: (p: ColorPage) => void
  colorOpen: boolean
  setColorOpen: (fn: (o: boolean) => boolean) => void
  collapsed: boolean
  setCollapsed: (fn: (c: boolean) => boolean) => void
}) {
  const colorGroupActive = activePage === 'color'

  // En modo comprimido, tocar "Color system" primero expande el sidebar.
  const onColorGroup = () => {
    if (collapsed) {
      setCollapsed(() => false)
      setColorOpen(() => true)
    } else {
      setColorOpen((o) => !o)
    }
  }

  return (
    <aside
      className={`flex shrink-0 flex-col border-r border-[#e3e7ee] bg-[#fafbfc] transition-[width] duration-200 ${
        collapsed ? 'w-[64px]' : 'w-[264px]'
      }`}
    >
      {/* Marca */}
      <div
        className={`flex shrink-0 items-center border-b border-[#eef2f8] py-[20px] ${
          collapsed ? 'justify-center px-0' : 'gap-[12px] px-[20px]'
        }`}
      >
        <div className="flex size-[36px] shrink-0 items-center justify-center rounded-[10px] bg-[#596879]">
          <img src={brandMarkIcon} alt="" className="block size-[20px]" />
        </div>
        {!collapsed && (
          <div className="flex min-w-0 flex-col">
            <span className="font-semibold text-[11px] uppercase leading-[14px] tracking-[0.6px] text-[#8a94a8]">
              Design System
            </span>
            <span className="truncate font-bold text-[15px] leading-[20px] text-[#2f3945]">
              BrandSystem
            </span>
          </div>
        )}
      </div>

      {/* Navegación */}
      <nav
        className={`flex flex-1 flex-col gap-[2px] overflow-y-auto px-[12px] py-[16px] ${
          collapsed ? 'items-center' : ''
        }`}
      >
        {!collapsed && <NavEyebrow>Contenido</NavEyebrow>}

        <NavItem
          Icon={Home}
          label="Introducción"
          active={activePage === 'introduccion'}
          onClick={() => setActivePage('introduccion')}
          collapsed={collapsed}
        />

        {/* Grupo Color system */}
        {collapsed ? (
          <IconButton label="Color system" active={colorGroupActive} onClick={onColorGroup}>
            <Palette className="size-[18px]" strokeWidth={1.75} />
          </IconButton>
        ) : (
          <button
            onClick={onColorGroup}
            className={`${NAV_ITEM} ${
              colorGroupActive && !colorOpen
                ? 'bg-[#e1f0ff] font-semibold text-[#004c97]'
                : colorGroupActive
                  ? 'font-semibold text-[#004c97] hover:bg-[#eef2f8]'
                  : 'font-medium text-[#576175] hover:bg-[#eef2f8]'
            }`}
          >
            <Palette className="size-[18px] shrink-0" strokeWidth={1.75} />
            <span className="flex-1 whitespace-nowrap">Color system</span>
            <ChevronDown
              className={`size-[14px] shrink-0 text-[#8a94a8] transition-transform duration-200 ${
                colorOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
        )}

        {!collapsed && colorOpen && (
          <div className="my-[2px] ml-[27px] flex flex-col gap-[1px] border-l border-[#e3e7ee] pl-[11px]">
            {colorPages.map((p) => {
              const isActive = activePage === 'color' && activeColorPage === p.id
              return (
                <button
                  key={p.id}
                  onClick={() =>
                    startTransition(() => {
                      setActivePage('color')
                      setActiveColorPage(p.id)
                    })
                  }
                  className={`w-full cursor-pointer rounded-[8px] px-[12px] py-[7px] text-left text-[13px] leading-[18px] transition-colors ${
                    isActive
                      ? 'bg-[#e1f0ff] font-semibold text-[#004c97]'
                      : 'font-medium text-[#576175] hover:bg-[#eef2f8]'
                  }`}
                >
                  {p.label}
                </button>
              )
            })}
          </div>
        )}
      </nav>

      {/* Utilidades */}
      <div
        className={`flex shrink-0 gap-[4px] border-t border-[#eef2f8] px-[12px] py-[12px] ${
          collapsed ? 'flex-col items-center' : 'items-center'
        }`}
      >
        <IconButton
          label="Mis componentes"
          active={activePage === 'mis-componentes'}
          onClick={() => setActivePage('mis-componentes')}
        >
          <Layers className="size-[18px]" strokeWidth={1.75} />
        </IconButton>
        <IconButton
          label="Ajustes"
          active={activePage === 'ajustes'}
          onClick={() => setActivePage('ajustes')}
        >
          <Settings className="size-[18px]" strokeWidth={1.75} />
        </IconButton>
        <IconButton
          label={collapsed ? 'Expandir menú' : 'Comprimir menú'}
          active={false}
          onClick={() => setCollapsed((c) => !c)}
          className={collapsed ? '' : 'ml-auto'}
        >
          {collapsed ? (
            <PanelLeftOpen className="size-[18px]" strokeWidth={1.75} />
          ) : (
            <PanelLeftClose className="size-[18px]" strokeWidth={1.75} />
          )}
        </IconButton>
      </div>
    </aside>
  )
}

function AppShell() {
  const [activePage, setActivePage] = useState<SidebarPage>('introduccion')
  const [activeSection, setActiveSection] = useState<DemoSection>('buttons')
  const [activeColorPage, setActiveColorPage] = useState<ColorPage>('global-colors')
  const [colorOpen, setColorOpen] = useState(true)
  const [collapsed, setCollapsed] = useState(() => {
    try {
      return localStorage.getItem('sidebar-collapsed') === '1'
    } catch {
      return false
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('sidebar-collapsed', collapsed ? '1' : '0')
    } catch {
      /* almacenamiento no disponible */
    }
  }, [collapsed])

  const current = sections.find(s => s.id === activeSection)!

  return (
    <div className="flex h-screen overflow-hidden bg-[#f1f4f7]">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        activeColorPage={activeColorPage}
        setActiveColorPage={setActiveColorPage}
        colorOpen={colorOpen}
        setColorOpen={setColorOpen}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      {/* Main content */}
      <main className="min-w-0 flex-1 overflow-y-auto overflow-x-hidden bg-white">
        {activePage === 'introduccion' ? (
          <IntroduccionPage />
        ) : activePage === 'mis-componentes' ? (
          <MisComponentesPage />
        ) : activePage === 'ajustes' ? (
          <AjustesPage />
        ) : activePage === 'color' ? (
          <div className="flex flex-col gap-xs">
            {activeColorPage === 'global-colors' && <GlobalColorsPage />}
            {activeColorPage === 'brand-colors' && <BrandColorsPage />}
            {activeColorPage === 'semantic-colors' && <SemanticColorsPage />}
          </div>
        ) : (
          <>
            <div className="mb-xl">
              <div className="flex items-center gap-md mb-xs">
                <AstraLogo size={24} />
                <h1 className="text-title text-text-primary">Astra UI — Demo Kit</h1>
              </div>
              <p className="text-label-sm text-text-secondary">
                {current.label} — interactive showcase of all design system components
              </p>
            </div>
            
          </>
        )}
      </main>

    </div>
  )
}

function ForceLightTheme({ children }: { children: React.ReactNode }) {
  const { setTheme } = useTheme()
  useEffect(() => { setTheme('light') }, [])
  return <>{children}</>
}

export default function App() {
  return (
    <ThemeProvider>
      <ForceLightTheme>
        <AppShell />
      </ForceLightTheme>
    </ThemeProvider>
  )
}
