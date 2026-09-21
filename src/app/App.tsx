import { useState, useEffect, useRef, startTransition } from 'react'
import { createPortal } from 'react-dom'
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
  Type,
  Shapes,
  Grid3x3,
  BookOpen,
  ChevronDown,
  PanelLeftClose,
  PanelLeftOpen,
  ClipboardList,
  FileText,
  Search,
  X,
  Target,
  Compass,
  ScrollText,
  MapPin,
  Sparkles,
  Wand2,
  MessageCircle,
  Ruler,
  Square,
  Sun,
  Camera,
  PlayCircle,
  Award,
  MousePointerClick,
  LayoutList,
  Navigation,
  CreditCard,
  FormInput,
  Tag,
  Component,
  Image,
  Share2,
  Globe,
  Presentation,
  Mail,
  ShieldCheck,
  GraduationCap,
  LifeBuoy,
  HeartPulse,
  type LucideIcon,
} from 'lucide-react'

import { MisComponentesPage } from './components/MisComponentesPage'
import { RegistroPage } from './components/RegistroPage'
import { InformePage } from './components/InformePage'
import { PlaceholderPage } from './components/PlaceholderPage'
import { Tooltip } from './components/Tooltip'
import {
  CATEGORIES,
  findLeafInfo,
  useModuleConfig,
  type ModuleGroupDef,
  type ModuleState,
} from './lib/moduleConfig'
import { SEARCH_ENTRIES, type SearchEntry } from './lib/searchIndex'
import { IntroduccionPage, type IntroTarget } from './components/IntroduccionPage'
import { GlobalColorsPage } from './components/GlobalColorsPage'
import { BrandColorsPage } from './components/BrandColorsPage'
import { SemanticColorsPage } from './components/SemanticColorsPage'
import { TypographyFoundationsPage } from './components/TypographyFoundationsPage'
import { TypographySystemPage } from './components/TypographySystemPage'
import { VisualStylesPage } from './components/VisualStylesPage'
import { GridSystemPage } from './components/GridSystemPage'
import { GridApplicationPage } from './components/GridApplicationPage'
import { AjustesPage } from './components/AjustesPage'
import brandMarkIcon from '@/assets/color-system-badge-icon.svg'

type SidebarPage =
  | 'introduccion'
  | 'kit'
  | 'film'
  | 'book'
  | 'folder'
  | 'mis-componentes'
  | 'registro'
  | 'informe'
  | 'ajustes'
  | 'typography'
  | 'visual-styles'
  | 'grids'
  | 'color'
  | 'placeholder'
type ColorPage = 'global-colors' | 'brand-colors' | 'semantic-colors'
type TypographyPageId = 'foundations' | 'system'
type GridPageId = 'system' | 'application'
type DemoSection =
  | 'buttons'
  | 'inputs'
  | 'media'
  | 'feedback'
  | 'navigation'
  | 'toolbar'
  | 'prompt'

const colorPages: { id: ColorPage; label: string }[] = [
  { id: 'global-colors', label: 'Global' },
  { id: 'brand-colors', label: 'Brand' },
  { id: 'semantic-colors', label: 'Semantic' },
]

const typographyPages: { id: TypographyPageId; label: string }[] = [
  { id: 'foundations', label: 'Foundations' },
  { id: 'system', label: 'System' },
]

const gridPages: { id: GridPageId; label: string }[] = [
  { id: 'system', label: 'System' },
  { id: 'application', label: 'Application' },
]

/** Icono por leaf id — cubre "Visual Styles" y toda página nueva sin
 *  contenido real todavía (ver `moduleConfig.ts` → `CATEGORIES`). */
const LEAF_ICONS: Record<string, LucideIcon> = {
  'visual-styles.page': Shapes,
  'foundations.spacing-system': Ruler,
  'foundations.bordes-radius': Square,
  'foundations.elevation-shadows': Sun,
  'foundations.photography': Camera,
  'foundations.motion-principles': PlayCircle,
  'strategy.publico-objetivo': Target,
  'strategy.enfoque-de-marca': Compass,
  'strategy.principios-de-marca': ScrollText,
  'strategy.posicionamiento': MapPin,
  'strategy.esencia-personalidad': Sparkles,
  'strategy.concepto-creativo': Wand2,
  'strategy.verbal-identity': MessageCircle,
  'components.logos': Award,
  'components.buttons-ctas': MousePointerClick,
  'components.content-blocks': LayoutList,
  'components.navigation': Navigation,
  'components.cards': CreditCard,
  'components.forms-inputs': FormInput,
  'components.tags-badges-labels': Tag,
  'components.visual-system': Component,
  'components.icons-illustrations': Image,
  'templates.rrss': Share2,
  'templates.web': Globe,
  'templates.presentacion': Presentation,
  'templates.mailers': Mail,
  'brand-ops.governance': ShieldCheck,
  'brand-ops.training-adoption': GraduationCap,
  'brand-ops.requests-support': LifeBuoy,
  'brand-ops.health-evolution': HeartPulse,
}

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
 * Sidebar — Tailwind puro. Es la única superficie **dark** del dashboard (el
 * resto de las páginas siguen en claro): fondo #16181d (mismo token
 * `color/background/inverse` que usa `SemanticColorCard` para "on-dark") ·
 * borde #262b35 · texto #aab3c2 · labels apagados #8a94a8 · caja de icono de
 * marca #596879 (neutro, funciona igual en claro/oscuro) · activo = pastilla
 * azul translúcida `#1677d8`/20 con texto #8fc7ff (blue/300, token real de
 * Brand/Semantic Colors para estados "on-dark").
 * ────────────────────────────────────────────────────────────────────────── */

const NAV_ITEM =
  'flex w-full items-center gap-[12px] rounded-[10px] px-[12px] py-[9px] text-[13px] leading-[18px] transition-colors cursor-pointer text-left'

function navItemClass(active: boolean) {
  return `${NAV_ITEM} ${
    active
      ? 'bg-[#1677d8]/20 font-semibold text-[#8fc7ff]'
      : 'font-medium text-[#aab3c2] hover:bg-white/[0.06]'
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
    <Tooltip label={label} placement="right" wrapperClassName={className}>
      <button
        type="button"
        onClick={onClick}
        aria-label={label}
        aria-pressed={active}
        className={`flex size-[34px] shrink-0 items-center justify-center rounded-[10px] transition-colors ${
          active
            ? 'bg-[#1677d8]/20 text-[#8fc7ff]'
            : 'text-[#8a94a8] hover:bg-white/[0.06] hover:text-[#e3e7ee]'
        }`}
      >
        {children}
      </button>
    </Tooltip>
  )
}

function NavEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="px-[12px] pb-[6px] pt-[10px] font-semibold text-[11px] uppercase leading-[14px] tracking-[0.6px] text-[#8a94a8]">
      {children}
    </p>
  )
}

/**
 * SidebarSearch — buscador global por nombre/título (no busca texto de
 * párrafo, ver "Buscador del sidebar" en CLAUDE.md). Al elegir un resultado
 * navega a la página correspondiente y pide un scroll + resaltado del ítem
 * exacto (ver `onSelect` / `pendingAnchor` en `AppShell`).
 */
function SidebarSearch({
  collapsed,
  onExpand,
  onSelect,
}: {
  collapsed: boolean
  onExpand: () => void
  onSelect: (entry: SearchEntry) => void
}) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      const t = e.target as Node
      // El dropdown de resultados vive en un portal a `body` — no es
      // descendiente de `wrapRef` en el DOM real, hay que chequearlo aparte
      // (mismo patrón que el flyout de `NavGroup`) o un click en un
      // resultado se trataría como "click afuera" y cerraría el dropdown
      // antes de que el onClick del botón llegue a dispararse.
      if (!wrapRef.current?.contains(t) && !resultsRef.current?.contains(t)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  if (collapsed) {
    return (
      <div className="flex w-full justify-center border-b border-[#262b35] px-[12px] py-[12px]">
        <IconButton label="Buscar" active={false} onClick={onExpand}>
          <Search className="size-[18px]" strokeWidth={1.75} />
        </IconButton>
      </div>
    )
  }

  const q = query.trim().toLowerCase()
  const results = q ? SEARCH_ENTRIES.filter((e) => e.label.toLowerCase().includes(q)).slice(0, 20) : []

  return (
    <div ref={wrapRef} className="relative w-full border-b border-[#262b35] px-[12px] py-[12px]">
      <div className="relative flex items-center">
        <Search className="pointer-events-none absolute left-[10px] size-[14px] text-[#8a94a8]" strokeWidth={2} />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          placeholder="Buscar en el sitio…"
          className="w-full rounded-[10px] border border-[#262b35] bg-[#1c1f26] py-[8px] pl-[30px] pr-[26px] font-normal text-[13px] leading-[18px] text-[#e3e7ee] outline-none placeholder:text-[#8a94a8] focus:border-[#1677d8]"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('')
              setOpen(false)
            }}
            aria-label="Limpiar búsqueda"
            className="absolute right-[8px] flex size-[18px] items-center justify-center text-[#8a94a8] hover:text-[#e3e7ee]"
          >
            <X className="size-[14px]" strokeWidth={2} />
          </button>
        )}
      </div>

      {open &&
        q &&
        createPortal(
          <div
            ref={resultsRef}
            style={
              wrapRef.current
                ? {
                    position: 'fixed',
                    top: wrapRef.current.getBoundingClientRect().bottom + 6,
                    left: wrapRef.current.getBoundingClientRect().left,
                    width: wrapRef.current.getBoundingClientRect().width,
                  }
                : undefined
            }
            className="z-[70] max-h-[360px] overflow-y-auto rounded-[12px] border border-[#262b35] bg-[#1c1f26] p-[6px] shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
          >
            {results.length === 0 ? (
              <p className="px-[10px] py-[10px] font-normal text-[13px] text-[#8a94a8]">Sin resultados</p>
            ) : (
              results.map((r, i) => (
                <button
                  key={`${r.anchorId}-${i}`}
                  type="button"
                  onClick={() => {
                    onSelect(r)
                    setOpen(false)
                    setQuery('')
                  }}
                  className="flex w-full flex-col items-start gap-[1px] rounded-[8px] px-[10px] py-[7px] text-left transition-colors hover:bg-white/[0.06]"
                >
                  <span className="font-medium text-[13px] leading-[18px] text-[#e3e7ee]">{r.label}</span>
                  <span className="font-normal text-[11px] leading-[15px] text-[#8a94a8]">{r.categoryLabel}</span>
                </button>
              ))
            )}
          </div>,
          document.body,
        )}
    </div>
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

/**
 * Grupo colapsable de la navegación (Color system, Typography…).
 * - Expandido: fila con chevron + sublista.
 * - Comprimido: icono que abre un menú flotante con las sub-páginas.
 */
function NavGroup({
  Icon,
  label,
  groupActive,
  open,
  onToggle,
  collapsed,
  children,
}: {
  Icon: LucideIcon
  label: string
  groupActive: boolean
  open: boolean
  onToggle: () => void
  collapsed: boolean
  children: React.ReactNode
}) {
  const [flyout, setFlyout] = useState(false)
  const [pos, setPos] = useState({ top: 0, left: 0 })
  const wrapRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  // Cerrar el flyout al expandir el sidebar.
  useEffect(() => {
    if (!collapsed) setFlyout(false)
  }, [collapsed])

  // Cerrar al hacer click fuera o con Escape.
  useEffect(() => {
    if (!flyout) return
    const onPointerDown = (e: PointerEvent) => {
      const t = e.target as Node
      if (!wrapRef.current?.contains(t) && !panelRef.current?.contains(t)) setFlyout(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFlyout(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [flyout])

  if (collapsed) {
    const toggleFlyout = () => {
      const r = wrapRef.current?.getBoundingClientRect()
      if (r) setPos({ top: r.top, left: r.right + 8 })
      setFlyout((v) => !v)
    }
    return (
      <div ref={wrapRef} className="relative">
        <IconButton label={label} active={groupActive || flyout} onClick={toggleFlyout}>
          <Icon className="size-[18px]" strokeWidth={1.75} />
        </IconButton>
        {flyout &&
          createPortal(
            <div
              ref={panelRef}
              style={{ position: 'fixed', top: pos.top, left: pos.left }}
              className="z-[60] flex min-w-[184px] flex-col gap-[1px] rounded-[12px] border border-[#262b35] bg-[#16181d] p-[6px] shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
            >
              <p className="px-[10px] pb-[4px] pt-[6px] font-semibold text-[11px] uppercase leading-[14px] tracking-[0.6px] text-[#8a94a8]">
                {label}
              </p>
              <div onClick={() => setFlyout(false)} className="flex flex-col gap-[1px]">
                {children}
              </div>
            </div>,
            document.body,
          )}
      </div>
    )
  }
  return (
    <>
      <button
        onClick={onToggle}
        className={`${NAV_ITEM} ${
          groupActive && !open
            ? 'bg-[#1677d8]/20 font-semibold text-[#8fc7ff]'
            : groupActive
              ? 'font-semibold text-[#8fc7ff] hover:bg-white/[0.06]'
              : 'font-medium text-[#aab3c2] hover:bg-white/[0.06]'
        }`}
      >
        <Icon className="size-[18px] shrink-0" strokeWidth={1.75} />
        <span className="flex-1 whitespace-nowrap">{label}</span>
        <ChevronDown
          className={`size-[14px] shrink-0 text-[#8a94a8] transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <div className="my-[2px] ml-[27px] flex flex-col gap-[1px] border-l border-[#262b35] pl-[11px]">
          {children}
        </div>
      )}
    </>
  )
}

function NavSubItem({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full cursor-pointer rounded-[8px] px-[12px] py-[7px] text-left text-[13px] leading-[18px] transition-colors ${
        active
          ? 'bg-[#1677d8]/20 font-semibold text-[#8fc7ff]'
          : 'font-medium text-[#aab3c2] hover:bg-white/[0.06]'
      }`}
    >
      {label}
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
  activeTypographyPage,
  setActiveTypographyPage,
  typographyOpen,
  setTypographyOpen,
  activeGridPage,
  setActiveGridPage,
  gridsOpen,
  setGridsOpen,
  collapsed,
  setCollapsed,
  enabled,
  activePlaceholderId,
  setActivePlaceholderId,
  onSearchSelect,
}: {
  activePage: SidebarPage
  setActivePage: (p: SidebarPage) => void
  activeColorPage: ColorPage
  setActiveColorPage: (p: ColorPage) => void
  enabled: ModuleState
  activePlaceholderId: string | null
  setActivePlaceholderId: (id: string) => void
  onSearchSelect: (entry: SearchEntry) => void
  colorOpen: boolean
  setColorOpen: (fn: (o: boolean) => boolean) => void
  activeTypographyPage: TypographyPageId
  setActiveTypographyPage: (p: TypographyPageId) => void
  typographyOpen: boolean
  setTypographyOpen: (fn: (o: boolean) => boolean) => void
  activeGridPage: GridPageId
  setActiveGridPage: (p: GridPageId) => void
  gridsOpen: boolean
  setGridsOpen: (fn: (o: boolean) => boolean) => void
  collapsed: boolean
  setCollapsed: (fn: (c: boolean) => boolean) => void
}) {
  // En modo comprimido, tocar un grupo primero expande el sidebar.
  const toggleGroup =
    (setOpen: (fn: (o: boolean) => boolean) => void) => () => {
      if (collapsed) {
        setCollapsed(() => false)
        setOpen(() => true)
      } else {
        setOpen((o) => !o)
      }
    }

  // Ajustes: un módulo apagado desaparece del sidebar. Si un grupo se queda
  // sin ninguna sub-página prendida, el grupo entero desaparece (consecuencia
  // natural, no hay switch de grupo aparte).
  const visibleColorPages = colorPages.filter((p) => enabled[`color.${p.id}`] !== false)
  const visibleTypographyPages = typographyPages.filter((p) => enabled[`typography.${p.id}`] !== false)
  const visibleGridPages = gridPages.filter((p) => enabled[`grids.${p.id}`] !== false)
  const visualStylesEnabled = enabled['visual-styles.page'] !== false

  return (
    <aside
      className={`flex shrink-0 flex-col border-r border-[#262b35] bg-[#16181d] transition-[width] duration-200 ${
        collapsed ? 'w-[68px]' : 'w-[264px]'
      }`}
    >
      {/* Marca */}
      <div
        className={`flex shrink-0 items-center border-b border-[#262b35] py-[20px] ${
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
            <span className="truncate font-bold text-[15px] leading-[20px] text-[#f1f4f7]">
              BrandSystem
            </span>
          </div>
        )}
      </div>

      <SidebarSearch collapsed={collapsed} onExpand={() => setCollapsed(() => false)} onSelect={onSearchSelect} />

      {/* Navegación */}
      <nav
        className={`sidebar-scroll flex flex-1 flex-col gap-[2px] overflow-x-hidden overflow-y-auto px-[12px] py-[16px] ${
          collapsed ? 'items-center' : ''
        }`}
      >
        <NavItem
          Icon={Home}
          label="Introducción"
          active={activePage === 'introduccion'}
          onClick={() => setActivePage('introduccion')}
          collapsed={collapsed}
        />

        {CATEGORIES.map((category) => {
          const isGroupVisible = (group: ModuleGroupDef) => {
            if (group.id === 'color') return visibleColorPages.length > 0
            if (group.id === 'typography') return visibleTypographyPages.length > 0
            if (group.id === 'grids') return visibleGridPages.length > 0
            if (group.leaves) return group.leaves.some((l) => enabled[l.id] !== false)
            return enabled[group.id] !== false
          }
          if (!category.groups.some(isGroupVisible)) return null

          return (
            <div key={category.id} className="contents">
              <div className={`my-[16px] h-px shrink-0 bg-[#262b35] ${collapsed ? 'w-[32px]' : 'w-full'}`} />
              {!collapsed && <NavEyebrow>{category.label}</NavEyebrow>}

              {category.groups.map((group) => {
                if (!isGroupVisible(group)) return null

                if (group.id === 'color') {
                  return (
                    <NavGroup
                      key={group.id}
                      Icon={Palette}
                      label={group.label}
                      groupActive={activePage === 'color'}
                      open={colorOpen}
                      onToggle={toggleGroup(setColorOpen)}
                      collapsed={collapsed}
                    >
                      {visibleColorPages.map((p) => (
                        <NavSubItem
                          key={p.id}
                          label={p.label}
                          active={activePage === 'color' && activeColorPage === p.id}
                          onClick={() =>
                            startTransition(() => {
                              setActivePage('color')
                              setActiveColorPage(p.id)
                            })
                          }
                        />
                      ))}
                    </NavGroup>
                  )
                }

                if (group.id === 'typography') {
                  return (
                    <NavGroup
                      key={group.id}
                      Icon={Type}
                      label={group.label}
                      groupActive={activePage === 'typography'}
                      open={typographyOpen}
                      onToggle={toggleGroup(setTypographyOpen)}
                      collapsed={collapsed}
                    >
                      {visibleTypographyPages.map((p) => (
                        <NavSubItem
                          key={p.id}
                          label={p.label}
                          active={activePage === 'typography' && activeTypographyPage === p.id}
                          onClick={() =>
                            startTransition(() => {
                              setActivePage('typography')
                              setActiveTypographyPage(p.id)
                            })
                          }
                        />
                      ))}
                    </NavGroup>
                  )
                }

                if (group.id === 'grids') {
                  return (
                    <NavGroup
                      key={group.id}
                      Icon={Grid3x3}
                      label={group.label}
                      groupActive={activePage === 'grids'}
                      open={gridsOpen}
                      onToggle={toggleGroup(setGridsOpen)}
                      collapsed={collapsed}
                    >
                      {visibleGridPages.map((p) => (
                        <NavSubItem
                          key={p.id}
                          label={p.label}
                          active={activePage === 'grids' && activeGridPage === p.id}
                          onClick={() =>
                            startTransition(() => {
                              setActivePage('grids')
                              setActiveGridPage(p.id)
                            })
                          }
                        />
                      ))}
                    </NavGroup>
                  )
                }

                if (group.id === 'visual-styles.page') {
                  return (
                    <NavItem
                      key={group.id}
                      Icon={Shapes}
                      label={group.label}
                      active={activePage === 'visual-styles'}
                      onClick={() => setActivePage('visual-styles')}
                      collapsed={collapsed}
                    />
                  )
                }

                // Página genérica sin contenido real todavía (`PlaceholderPage`).
                const Icon = LEAF_ICONS[group.id] ?? BookOpen
                return (
                  <NavItem
                    key={group.id}
                    Icon={Icon}
                    label={group.label}
                    active={activePage === 'placeholder' && activePlaceholderId === group.id}
                    onClick={() => {
                      setActivePage('placeholder')
                      setActivePlaceholderId(group.id)
                    }}
                    collapsed={collapsed}
                  />
                )
              })}
            </div>
          )
        })}
      </nav>

      {/* Utilidades */}
      <div
        className={`flex shrink-0 gap-[4px] border-t border-[#262b35] px-[12px] py-[12px] ${
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
          label="Registro de completado"
          active={activePage === 'registro'}
          onClick={() => setActivePage('registro')}
        >
          <ClipboardList className="size-[18px]" strokeWidth={1.75} />
        </IconButton>
        <IconButton
          label="Informe"
          active={activePage === 'informe'}
          onClick={() => setActivePage('informe')}
        >
          <FileText className="size-[18px]" strokeWidth={1.75} />
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
  const { enabled, toggle, applyPreset } = useModuleConfig()
  const [activePage, setActivePage] = useState<SidebarPage>('introduccion')
  const [activeSection, setActiveSection] = useState<DemoSection>('buttons')
  const [activeColorPage, setActiveColorPage] = useState<ColorPage>('global-colors')
  // Los grupos del sidebar arrancan plegados.
  const [colorOpen, setColorOpen] = useState(false)
  const [activeTypographyPage, setActiveTypographyPage] = useState<TypographyPageId>('foundations')
  const [typographyOpen, setTypographyOpen] = useState(false)
  const [activeGridPage, setActiveGridPage] = useState<GridPageId>('system')
  const [gridsOpen, setGridsOpen] = useState(false)
  const [activePlaceholderId, setActivePlaceholderId] = useState<string | null>(null)
  const [pendingAnchor, setPendingAnchor] = useState<string | null>(null)
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

  // Al abrir cualquier página, el scroll arranca arriba del todo.
  const mainRef = useRef<HTMLElement>(null)
  useEffect(() => {
    mainRef.current?.scrollTo(0, 0)
  }, [activePage, activeColorPage, activeTypographyPage, activeGridPage])

  // Si desde Ajustes se apaga la sub-página (o el grupo entero) que está
  // activa en este momento, redirige a la primera que siga prendida — o a
  // Introducción si el grupo entero quedó sin nada prendido.
  useEffect(() => {
    if (activePage === 'color' && enabled[`color.${activeColorPage}`] === false) {
      const next = colorPages.find((p) => enabled[`color.${p.id}`] !== false)
      next ? setActiveColorPage(next.id) : setActivePage('introduccion')
    }
    if (activePage === 'typography' && enabled[`typography.${activeTypographyPage}`] === false) {
      const next = typographyPages.find((p) => enabled[`typography.${p.id}`] !== false)
      next ? setActiveTypographyPage(next.id) : setActivePage('introduccion')
    }
    if (activePage === 'grids' && enabled[`grids.${activeGridPage}`] === false) {
      const next = gridPages.find((p) => enabled[`grids.${p.id}`] !== false)
      next ? setActiveGridPage(next.id) : setActivePage('introduccion')
    }
    if (activePage === 'visual-styles' && enabled['visual-styles.page'] === false) {
      setActivePage('introduccion')
    }
    if (activePage === 'placeholder' && activePlaceholderId && enabled[activePlaceholderId] === false) {
      setActivePage('introduccion')
    }
  }, [enabled, activePage, activeColorPage, activeTypographyPage, activeGridPage, activePlaceholderId])

  const current = sections.find(s => s.id === activeSection)!

  function goToArea(target: IntroTarget) {
    startTransition(() => {
      if (target === 'color') {
        setActivePage('color')
        setColorOpen(() => true)
      } else if (target === 'typography') {
        setActivePage('typography')
        setTypographyOpen(() => true)
      } else if (target === 'grids') {
        setActivePage('grids')
        setGridsOpen(() => true)
      } else {
        setActivePage('visual-styles')
      }
    })
  }

  // Navega a la página dueña de un `leafId` del buscador — mismo mapeo que
  // usa el sidebar para sus propios ids namespaced, más las 4 páginas meta
  // que no son un leaf de moduleConfig.ts.
  function navigateToLeaf(leafId: string) {
    if (
      leafId === 'introduccion' ||
      leafId === 'mis-componentes' ||
      leafId === 'registro' ||
      leafId === 'informe' ||
      leafId === 'ajustes'
    ) {
      setActivePage(leafId)
      return
    }
    if (leafId.startsWith('color.')) {
      setActivePage('color')
      setColorOpen(() => true)
      setActiveColorPage(leafId.split('.')[1] as ColorPage)
      return
    }
    if (leafId.startsWith('typography.')) {
      setActivePage('typography')
      setTypographyOpen(() => true)
      setActiveTypographyPage(leafId.split('.')[1] as TypographyPageId)
      return
    }
    if (leafId.startsWith('grids.')) {
      setActivePage('grids')
      setGridsOpen(() => true)
      setActiveGridPage(leafId.split('.')[1] as GridPageId)
      return
    }
    if (leafId === 'visual-styles.page') {
      setActivePage('visual-styles')
      return
    }
    setActivePage('placeholder')
    setActivePlaceholderId(leafId)
  }

  function handleSearchSelect(entry: SearchEntry) {
    navigateToLeaf(entry.leafId)
    setPendingAnchor(entry.anchorId)
  }

  // Después de navegar desde el buscador, hace scroll al ítem exacto y lo
  // resalta un momento. Se aplica imperativamente (classList), no como prop
  // de React, para no tener que pasarle un flag de "resaltado" a cada card
  // de cada página — ver `.search-highlight` en globals.css.
  useEffect(() => {
    if (!pendingAnchor) return
    const id = pendingAnchor
    const raf = requestAnimationFrame(() => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        el.classList.add('search-highlight')
        setTimeout(() => el.classList.remove('search-highlight'), 1600)
      }
      setPendingAnchor(null)
    })
    return () => cancelAnimationFrame(raf)
  }, [pendingAnchor, activePage, activeColorPage, activeTypographyPage, activeGridPage, activePlaceholderId])

  return (
    <div className="flex h-screen overflow-hidden bg-[#f1f4f7]">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        activeColorPage={activeColorPage}
        setActiveColorPage={setActiveColorPage}
        colorOpen={colorOpen}
        setColorOpen={setColorOpen}
        activeTypographyPage={activeTypographyPage}
        setActiveTypographyPage={setActiveTypographyPage}
        typographyOpen={typographyOpen}
        setTypographyOpen={setTypographyOpen}
        activeGridPage={activeGridPage}
        setActiveGridPage={setActiveGridPage}
        gridsOpen={gridsOpen}
        setGridsOpen={setGridsOpen}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        enabled={enabled}
        activePlaceholderId={activePlaceholderId}
        setActivePlaceholderId={setActivePlaceholderId}
        onSearchSelect={handleSearchSelect}
      />

      {/* Main content */}
      <main ref={mainRef} className="min-w-0 flex-1 overflow-y-auto overflow-x-hidden bg-white">
        {activePage === 'introduccion' ? (
          <IntroduccionPage onNavigate={goToArea} />
        ) : activePage === 'mis-componentes' ? (
          <MisComponentesPage />
        ) : activePage === 'registro' ? (
          <RegistroPage enabled={enabled} />
        ) : activePage === 'informe' ? (
          <InformePage />
        ) : activePage === 'ajustes' ? (
          <AjustesPage enabled={enabled} toggle={toggle} applyPreset={applyPreset} />
        ) : activePage === 'placeholder' && activePlaceholderId ? (
          (() => {
            const info = findLeafInfo(activePlaceholderId)
            return (
              <PlaceholderPage
                id={activePlaceholderId}
                module={info?.categoryLabel ?? 'Sistema'}
                title={info?.label ?? ''}
              />
            )
          })()
        ) : activePage === 'typography' ? (
          <div className="flex flex-col gap-xs">
            {activeTypographyPage === 'foundations' && <TypographyFoundationsPage />}
            {activeTypographyPage === 'system' && <TypographySystemPage />}
          </div>
        ) : activePage === 'visual-styles' ? (
          <VisualStylesPage />
        ) : activePage === 'grids' ? (
          <div className="flex flex-col gap-xs">
            {activeGridPage === 'system' && <GridSystemPage />}
            {activeGridPage === 'application' && <GridApplicationPage />}
          </div>
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
