import { useState, useEffect, startTransition } from 'react'
import {
  ThemeProvider,
  SidebarNavigation,
  SidebarButton,
  SecondaryNav,
  SecondaryNavItem,
  Avatar,
  AstraLogo,
  useTheme,
} from '@figma/astraui'
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
} from 'lucide-react'

import { MisComponentesPage } from './components/MisComponentesPage'
import { IntroduccionPage } from './components/IntroduccionPage'
import { GlobalColorsPage } from './components/GlobalColorsPage'
import { BrandColorsPage } from './components/BrandColorsPage'
import { SemanticColorsPage } from './components/SemanticColorsPage'

type SidebarPage = 'introduccion' | 'kit' | 'film' | 'book' | 'folder' | 'mis-componentes' | 'color'
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

function AppShell() {
  const [activePage, setActivePage] = useState<SidebarPage>('introduccion')
  const [activeSection, setActiveSection] = useState<DemoSection>('buttons')
  const [activeColorPage, setActiveColorPage] = useState<ColorPage>('global-colors')
  const [kitOpen, setKitOpen] = useState(true)
  const [colorOpen, setColorOpen] = useState(false)

  const current = sections.find(s => s.id === activeSection)!

  return (
    <div className="flex h-screen overflow-hidden bg-brand-tertiary">

      {/* Sidebar — matches Astra SecondaryNav token usage */}
      <aside className="w-[240px] shrink-0 flex flex-col bg-surface-bg border-r border-border-primary">

        {/* Logo header */}
        <div className="flex items-center gap-lg px-xl shrink-0 h-14 border-b border-border-primary">
          <AstraLogo size={20} />
          <span className="text-label text-text-primary">Astra UI Kit</span>
        </div>

        {/* Nav — same outer padding as SecondaryNav: px-xl py-lg */}
        <nav className="flex-1 overflow-y-auto px-xl py-lg flex flex-col gap-xs">

          {/* Introducción — home page */}
          <button
            onClick={() => setActivePage('introduccion')}
            className={`flex items-center gap-lg px-lg py-lg w-full rounded-corner-md transition-colors cursor-pointer text-left ${
              activePage === 'introduccion'
                ? 'bg-brand-tertiary text-brand-primary'
                : 'text-text-secondary hover:bg-bg-hover'
            }`}
          >
            <span className="size-5 shrink-0">
              <Home className="size-full" strokeWidth={1.5} />
            </span>
            <span className="text-label-sm whitespace-nowrap">Introducción</span>
          </button>

          {/* Divider */}
          <div className="h-px bg-border-primary my-xs" />

          {/* Color system — collapsible group */}
          <button
            onClick={() => setColorOpen(o => !o)}
            className={`flex items-center gap-lg px-lg py-lg w-full rounded-corner-md transition-colors cursor-pointer text-left ${
              activePage === 'color' && !colorOpen
                ? 'bg-brand-tertiary text-brand-primary'
                : activePage === 'color'
                ? 'text-text-primary'
                : 'text-text-secondary hover:bg-bg-hover'
            }`}
          >
            <span className="size-5 shrink-0">
              <Palette className="size-full" strokeWidth={1.5} />
            </span>
            <span className="text-label-sm flex-1 whitespace-nowrap">Color system</span>
            <span
              className="text-text-tertiary shrink-0 transition-transform duration-200"
              style={{ fontSize: 11, display: 'inline-block', transform: colorOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >▾</span>
          </button>

          {colorOpen && (
            <div className="ml-lg pl-md border-l border-border-secondary flex flex-col gap-[2px] pb-xs">
              {colorPages.map(p => {
                const isActive = activePage === 'color' && activeColorPage === p.id
                return (
                  <button
                    key={p.id}
                    onClick={() => startTransition(() => { setActivePage('color'); setActiveColorPage(p.id) })}
                    className={`flex items-center gap-lg px-lg py-lg w-full rounded-corner-md transition-colors cursor-pointer text-left ${
                      isActive
                        ? 'bg-brand-tertiary text-brand-primary'
                        : 'text-text-secondary hover:bg-bg-hover'
                    }`}
                  >
                    <span className="text-label-sm whitespace-nowrap">{p.label}</span>
                  </button>
                )
              })}
            </div>
          )}

        </nav>

        {/* Footer */}
        <div className="shrink-0 border-t border-border-primary px-xl py-lg flex items-center justify-between">
          <Avatar type="initial" initials="AK" size="medium" shape="circle" />
          <button
            onClick={() => setActivePage('mis-componentes')}
            title="Mis componentes"
            className={`flex items-center justify-center size-8 rounded-corner-md transition-colors ${
              activePage === 'mis-componentes'
                ? 'bg-brand-tertiary text-brand-primary'
                : 'text-text-secondary hover:bg-bg-hover'
            }`}
          >
            <Layers size={18} strokeWidth={1.5} />
          </button>
        </div>

      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0 overflow-x-hidden overflow-y-auto bg-brand-tertiary p-2xl p-[0px]">
        {activePage === 'introduccion' ? (
          <IntroduccionPage />
        ) : activePage === 'mis-componentes' ? (
          <MisComponentesPage />
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
