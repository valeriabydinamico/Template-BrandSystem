import { useEffect, useState } from 'react'

/**
 * Configuración de módulos/sub-páginas — controla qué partes del catálogo
 * están prendidas. Es una capa de control MANUAL, separada de la regla de
 * completitud de datos (`completeness.ts` / `siteCompleteness.ts`): un
 * módulo apagado acá se oculta sin importar si sus datos están completos, y
 * el Registro de completado directamente no lo evalúa (no está "oculto por
 * falta de datos", está apagado a propósito).
 *
 * Página de control: `AjustesPage`. Persistencia: `localStorage` (por
 * navegador, sin backend — igual que `sidebar-collapsed`).
 */

export interface LeafModule {
  /** Id único, namespaced por grupo (`color.brand-colors`, `visual-styles.page`…). */
  id: string
  label: string
}

export interface ModuleGroupDef {
  id: string
  label: string
  leaves: LeafModule[]
}

export const MODULE_GROUPS: ModuleGroupDef[] = [
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
    label: 'Typography',
    leaves: [
      { id: 'typography.foundations', label: 'Typography Foundations' },
      { id: 'typography.system', label: 'Typography System' },
    ],
  },
  {
    id: 'visual-styles',
    label: 'Visual Styles',
    leaves: [{ id: 'visual-styles.page', label: 'Visual Styles' }],
  },
  {
    id: 'grids',
    label: 'Grids',
    leaves: [
      { id: 'grids.system', label: 'Grid System' },
      { id: 'grids.application', label: 'Grid Application' },
    ],
  },
]

export const ALL_LEAF_IDS: string[] = MODULE_GROUPS.flatMap((g) => g.leaves.map((l) => l.id))

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
