/**
 * Fuente única de verdad de qué se muestra y qué se oculta en el sitio por
 * falta de datos de marca. Cada página de documentación importa su propio
 * reporte de acá (no recalcula nada) y `RegistroPage` lee `ALL_HIDDEN_ENTRIES`
 * para armar el historial — así el registro es correcto sin depender de que
 * el usuario haya visitado cada página.
 *
 * Para sumar una página nueva a este sistema: extraer sus datos a
 * `src/app/data/<pagina>.ts` con los campos opcionales + su lista de
 * `RequiredField`, y agregar acá el/los `evaluateSection(...)` correspondientes.
 */

import { evaluateSection, type HiddenEntry } from './completeness'
import {
  SPACING,
  RADIUS,
  BORDERS,
  SHADOWS,
  COMPONENT_HEIGHTS,
  SCALE_TOKEN_FIELDS,
  LABELED_SCALE_TOKEN_FIELDS,
  SHADOW_TOKEN_FIELDS,
  COMPONENT_HEIGHT_FIELDS,
  type ScaleToken,
  type LabeledScaleToken,
  type ShadowToken,
  type ComponentHeight,
} from '../data/visualStyles'

export const visualStylesReports = {
  spacing: evaluateSection('Visual Styles', 'Spacing', SPACING, SCALE_TOKEN_FIELDS, (item: ScaleToken, i) => item.token || `Token ${i + 1}`),
  radius: evaluateSection('Visual Styles', 'Border Radius', RADIUS, LABELED_SCALE_TOKEN_FIELDS, (item: LabeledScaleToken, i) => item.token || `Token ${i + 1}`),
  borders: evaluateSection('Visual Styles', 'Borders', BORDERS, LABELED_SCALE_TOKEN_FIELDS, (item: LabeledScaleToken, i) => item.token || `Token ${i + 1}`),
  shadows: evaluateSection('Visual Styles', 'Shadows', SHADOWS, SHADOW_TOKEN_FIELDS, (item: ShadowToken, i) => item.name || `Shadow ${i + 1}`),
  componentHeights: evaluateSection(
    'Visual Styles',
    'Sizing — Alturas de componentes',
    COMPONENT_HEIGHTS,
    COMPONENT_HEIGHT_FIELDS,
    (item: ComponentHeight, i) => item.token || `Altura ${i + 1}`,
  ),
}

export const ALL_HIDDEN_ENTRIES: HiddenEntry[] = [
  ...Object.values(visualStylesReports).flatMap((r) => r.hidden),
]

/**
 * A qué leaf de `moduleConfig.ts` pertenece cada `module` de reporte — para
 * que el Registro de completado solo evalúe módulos prendidos en Ajustes. Un
 * módulo apagado no es "oculto por falta de datos": fue una decisión manual,
 * así que no se reporta acá.
 */
export const REPORT_MODULE_TO_LEAF: Record<string, string> = {
  'Visual Styles': 'visual-styles.page',
}
