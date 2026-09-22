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
      { id: 'foundations.photography', label: 'Photography & Direction' },
      { id: 'foundations.motion-principles', label: 'Motion Principles' },
    ],
  },
  {
    id: 'components',
    label: 'Components',
    groups: [
      { id: 'components.visual-system', label: 'Visual system' },
      { id: 'components.icons-illustrations', label: 'Icons & Illustrations' },
      { id: 'components.tags-badges-labels', label: 'Tags, Badges & Labels' },
      { id: 'components.forms-inputs', label: 'Forms & Inputs' },
      { id: 'components.cards', label: 'Cards' },
      { id: 'components.navigation', label: 'Navigation' },
      { id: 'components.content-blocks', label: 'Content Blocks' },
      { id: 'components.buttons-ctas', label: 'Buttons & CTAs' },
      { id: 'components.logos', label: 'Logos' },
    ],
  },
  {
    id: 'templates',
    label: 'Templates',
    groups: [
      { id: 'templates.mailers', label: 'Mailers' },
      { id: 'templates.presentacion', label: 'Presentación' },
      { id: 'templates.web', label: 'Web' },
      { id: 'templates.rrss', label: 'RRSS' },
    ],
  },
  {
    id: 'brand-ops',
    label: 'Brand Ops',
    groups: [
      { id: 'brand-ops.health-evolution', label: 'Health & Evolution' },
      { id: 'brand-ops.requests-support', label: 'Requests & Support' },
      { id: 'brand-ops.training-adoption', label: 'Training & Adoption' },
      { id: 'brand-ops.governance', label: 'Governance' },
    ],
  },
]

export const ALL_LEAF_IDS: string[] = CATEGORIES.flatMap((c) =>
  c.groups.flatMap((g) => (g.leaves ? g.leaves.map((l) => l.id) : [g.id])),
)

/**
 * Hojas con contenido real de DOCUMENTACIÓN — valores concretos y completos
 * (del brief de un proyecto, o de los primitives reales del master), no la
 * plantilla en blanco genérica ("[agregar contenido]" / componente local
 * `Placeholder` con texto tipo "Cómo se aplica X en este caso"). Lo que
 * importa es si la página está efectivamente completada, no si el dato es
 * específico de un proyecto — Visual Styles, por ejemplo, está 100%
 * completa con una configuración de ejemplo hardcodeada (no usa
 * `Placeholder` en absoluto) aunque no venga de ningún brief de cliente.
 *
 * Se verifica por ausencia del componente local `Placeholder` en el archivo
 * de la página (grep `function Placeholder` en `src/app/components/*.tsx` —
 * si no aparece, la página está completa). Distinta de si la hoja tiene un
 * componente propio (`PlaceholderPage` ya no se usa en ningún leaf activo,
 * así que esa distinción quedó vacía) — esto mide si el CONTENIDO es real,
 * no si la página existe.
 */
export const LEAVES_WITH_REAL_CONTENT = new Set<string>(['visual-styles.page'])

/**
 * Hojas que mezclan plantilla en blanco con alguna sección de contenido
 * real. Vacío por ahora — actualizar si una página nueva queda a mitad de
 * camino (algunas secciones completas, otras con `Placeholder` genérico).
 * Se reportan aparte en `RegistroPage` (🟡, no 🔴) — no se ocultan del todo
 * como "sin contenido real" porque parte de la página sí lo tiene.
 */
export const LEAVES_WITH_PARTIAL_REAL_CONTENT = new Set<string>([])

export interface EmptyLeaf {
  id: string
  label: string
  categoryLabel: string
}

/** Hojas prendidas (`enabled`) que hoy NO tienen contenido real de
 *  documentación — separadas en `missing` (plantilla en blanco / master
 *  template completa) y `partial` (mezcla plantilla + alguna sección real,
 *  ver `LEAVES_WITH_PARTIAL_REAL_CONTENT`). El `PageHeader` no cuenta como
 *  contenido. Usado por `RegistroPage`. */
export function leavesWithoutRealContent(enabled: ModuleState): { missing: EmptyLeaf[]; partial: EmptyLeaf[] } {
  const missing: EmptyLeaf[] = []
  const partial: EmptyLeaf[] = []
  for (const category of CATEGORIES) {
    for (const group of category.groups) {
      const leaves = group.leaves ?? [{ id: group.id, label: group.label }]
      for (const leaf of leaves) {
        if (enabled[leaf.id] === false) continue
        if (LEAVES_WITH_REAL_CONTENT.has(leaf.id)) continue
        const entry: EmptyLeaf = { id: leaf.id, label: leaf.label, categoryLabel: category.label }
        if (LEAVES_WITH_PARTIAL_REAL_CONTENT.has(leaf.id)) partial.push(entry)
        else missing.push(entry)
      }
    }
  }
  return { missing, partial }
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
/** Preset "Deshabilitar todo" — apaga todo el catálogo de una. */
export const NONE_PRESET: ModuleState = presetFrom([])

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
