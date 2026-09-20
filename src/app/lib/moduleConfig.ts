import { useEffect, useState } from 'react'

/**
 * Configuración de módulos/páginas — controla qué partes del catálogo están
 * prendidas. Es una capa de control MANUAL, separada de la regla de
 * completitud de datos (`completeness.ts` / `siteCompleteness.ts`): un
 * módulo apagado acá se oculta sin importar si sus datos están completos, y
 * el Registro de completado directamente no lo evalúa (no está "oculto por
 * falta de datos", está apagado a propósito).
 *
 * Árbol completo (ver `BRAND-SYSTEM-ARQUITECTURA.md`, la numeración del
 * documento es solo de referencia, no estructura real):
 *   Categoría (Strategy / Foundations / Components / Templates / Brand Ops)
 *     → grupo/página (algunos con sub-páginas propias, ej. "Color System";
 *       el resto son una página única, ej. "Visual Styles" o cualquier
 *       página nueva sin construir todavía)
 *       → hoja togglable individual.
 *
 * Los ids namespaced (`color.brand-colors`, `strategy.posicionamiento`…) son
 * la clave persistida en `localStorage` y la que usa `RegistroPage` — no
 * renombrar un id existente sin migrar `REPORT_MODULE_TO_LEAF` (en
 * `siteCompleteness.ts`) y sin que el usuario pierda su configuración
 * guardada.
 *
 * Página de control: `AjustesPage`. Persistencia: `localStorage` (por
 * navegador, sin backend — igual que `sidebar-collapsed`).
 */

export interface LeafModule {
  id: string
  label: string
}

export interface ModuleGroupDef {
  /**
   * Id del grupo. Si el grupo NO tiene `leaves`, este id también es el id de
   * toggle (página única, ej. `visual-styles.page`, `strategy.posicionamiento`).
   */
  id: string
  label: string
  /** Presente solo cuando el grupo tiene sub-páginas reales (Color System,
   *  Typography System, Layout & Grid). Si falta, el grupo es una página
   *  única togglable por su propio `id`. */
  leaves?: LeafModule[]
}

export interface CategoryDef {
  id: string
  label: string
  groups: ModuleGroupDef[]
}

export const CATEGORIES: CategoryDef[] = [
  {
    id: 'strategy',
    label: 'Strategy',
    groups: [
      { id: 'strategy.publico-objetivo', label: 'Público Objetivo' },
      { id: 'strategy.enfoque-de-marca', label: 'Enfoque de marca' },
      { id: 'strategy.principios-de-marca', label: 'Principios de Marca' },
      { id: 'strategy.posicionamiento', label: 'Posicionamiento' },
      { id: 'strategy.esencia-personalidad', label: 'Esencia y personalidad' },
      { id: 'strategy.concepto-creativo', label: 'Concepto creativo' },
      { id: 'strategy.verbal-identity', label: 'Verbal Identity' },
    ],
  },
  {
    id: 'foundations',
    label: 'Foundations',
    groups: [
      {
        id: 'color',
        label: 'Color System',
        leaves: [
          { id: 'color.global-colors', label: 'Global Colors' },
          { id: 'color.brand-colors', label: 'Brand Colors' },
          { id: 'color.semantic-colors', label: 'Semantic Colors' },
        ],
      },
      {
        id: 'typography',
        label: 'Typography System',
        leaves: [
          { id: 'typography.foundations', label: 'Typography Foundations' },
          { id: 'typography.system', label: 'Typography System' },
        ],
      },
      {
        id: 'grids',
        label: 'Layout & Grid',
        leaves: [
          { id: 'grids.system', label: 'Grid System' },
          { id: 'grids.application', label: 'Grid Application' },
        ],
      },
      { id: 'visual-styles.page', label: 'Visual Styles' },
      { id: 'foundations.spacing-system', label: 'Spacing System' },
      { id: 'foundations.bordes-radius', label: 'Bordes & Radius' },
      { id: 'foundations.elevation-shadows', label: 'Elevation & Shadows' },
      { id: 'foundations.photography', label: 'Photography & Image Direction' },
      { id: 'foundations.motion-principles', label: 'Motion Principles' },
    ],
  },
  {
    id: 'components',
    label: 'Components',
    groups: [
      { id: 'components.logos', label: 'Logos' },
      { id: 'components.buttons-ctas', label: 'Buttons & CTAs' },
      { id: 'components.content-blocks', label: 'Content Blocks' },
      { id: 'components.navigation', label: 'Navigation' },
      { id: 'components.cards', label: 'Cards' },
      { id: 'components.forms-inputs', label: 'Forms & Inputs' },
      { id: 'components.tags-badges-labels', label: 'Tags, Badges & Labels' },
      { id: 'components.visual-system', label: 'Visual system' },
      { id: 'components.icons-illustrations', label: 'Icons & Illustrations' },
    ],
  },
  {
    id: 'templates',
    label: 'Templates',
    groups: [
      { id: 'templates.rrss', label: 'RRSS' },
      { id: 'templates.web', label: 'WEB' },
      { id: 'templates.presentacion', label: 'Presentación' },
      { id: 'templates.mailers', label: 'Mailers' },
    ],
  },
  {
    id: 'brand-ops',
    label: 'Brand Ops',
    groups: [
      { id: 'brand-ops.governance', label: 'Governance' },
      { id: 'brand-ops.training-adoption', label: 'Training & Adoption' },
      { id: 'brand-ops.requests-support', label: 'Requests & Support' },
      { id: 'brand-ops.health-evolution', label: 'Health & Evolution' },
    ],
  },
]

export const ALL_LEAF_IDS: string[] = CATEGORIES.flatMap((c) =>
  c.groups.flatMap((g) => (g.leaves ? g.leaves.map((l) => l.id) : [g.id])),
)

/**
 * Hojas con contenido real (una página propia, no `PlaceholderPage`). El
 * resto de `ALL_LEAF_IDS` se renderiza con `PlaceholderPage` (solo
 * `PageHeader` + "[agregar descripción]") — ver "Arquitectura del catálogo"
 * en `CLAUDE.md`. Actualizar esta lista al construir el contenido real de
 * una página nueva.
 */
export const LEAVES_WITH_CONTENT = new Set<string>([
  'color.global-colors',
  'color.brand-colors',
  'color.semantic-colors',
  'typography.foundations',
  'typography.system',
  'grids.system',
  'grids.application',
  'visual-styles.page',
])

export interface EmptyLeaf {
  id: string
  label: string
  categoryLabel: string
}

/** Hojas prendidas (`enabled`) que hoy no tienen contenido real — ver
 *  `LEAVES_WITH_CONTENT`. El `PageHeader` no cuenta como contenido: una
 *  página con solo `PageHeader` sigue "sin contenido". Usado por
 *  `RegistroPage`. */
export function emptyLeaves(enabled: ModuleState): EmptyLeaf[] {
  const result: EmptyLeaf[] = []
  for (const category of CATEGORIES) {
    for (const group of category.groups) {
      const leaves = group.leaves ?? [{ id: group.id, label: group.label }]
      for (const leaf of leaves) {
        if (LEAVES_WITH_CONTENT.has(leaf.id)) continue
        if (enabled[leaf.id] === false) continue
        result.push({ id: leaf.id, label: leaf.label, categoryLabel: category.label })
      }
    }
  }
  return result
}

/** Info de una hoja (dato de la categoría/grupo, usado por `PlaceholderPage` y
 *  por cualquier página que solo necesite saber "dónde vive" un id). */
export function findLeafInfo(id: string): { categoryLabel: string; label: string } | undefined {
  for (const category of CATEGORIES) {
    for (const group of category.groups) {
      if (group.leaves) {
        const leaf = group.leaves.find((l) => l.id === id)
        if (leaf) return { categoryLabel: category.label, label: leaf.label }
      } else if (group.id === id) {
        return { categoryLabel: category.label, label: group.label }
      }
    }
  }
  return undefined
}

/**
 * Preset "Light" — representativo por ahora (a definir el set real más
 * adelante): deja prendido solo lo mínimo para mostrar un Brand System chico.
 */
export const LIGHT_PRESET_IDS: string[] = [
  'color.brand-colors',
  'color.semantic-colors',
  'typography.system',
  'visual-styles.page',
]

export type ModuleState = Record<string, boolean>

function presetFrom(enabledIds: string[]): ModuleState {
  return Object.fromEntries(ALL_LEAF_IDS.map((id) => [id, enabledIds.includes(id)]))
}

export const LARGE_PRESET: ModuleState = presetFrom(ALL_LEAF_IDS)
export const LIGHT_PRESET: ModuleState = presetFrom(LIGHT_PRESET_IDS)

const STORAGE_KEY = 'module-config'

function loadInitial(): ModuleState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return LARGE_PRESET
    const parsed = JSON.parse(raw) as ModuleState
    // Completa con `true` cualquier leaf nuevo que no exista todavía en lo guardado.
    return { ...LARGE_PRESET, ...parsed }
  } catch {
    return LARGE_PRESET
  }
}

export function useModuleConfig() {
  const [enabled, setEnabled] = useState<ModuleState>(loadInitial)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(enabled))
    } catch {
      /* almacenamiento no disponible */
    }
  }, [enabled])

  const toggle = (id: string) => setEnabled((prev) => ({ ...prev, [id]: !prev[id] }))
  const applyPreset = (preset: ModuleState) => setEnabled(preset)
  const isEnabled = (id: string) => enabled[id] !== false

  return { enabled, toggle, applyPreset, isEnabled }
}
