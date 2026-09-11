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
import { BRAND_PRIMARY, BRAND_SECONDARY, BRAND_ACCENTS, BRAND_COLOR_FIELDS, type BrandColorEntry } from '../data/brandColors'
import { SEMANTIC_GROUPS, SEMANTIC_COLOR_FIELDS, type TokenRow } from '../data/semanticColors'

const brandColorLabel = (fallback: string) => (item: BrandColorEntry, i: number) =>
  item.name || `${fallback} ${i + 1}`

export const brandColorsReports = {
  primary: evaluateSection(
    'Brand Colors',
    'Color primario de marca',
    [BRAND_PRIMARY],
    BRAND_COLOR_FIELDS,
    brandColorLabel('Primary'),
  ),
  secondary: evaluateSection(
    'Brand Colors',
    'Colores secundarios de marca',
    BRAND_SECONDARY,
    BRAND_COLOR_FIELDS,
    brandColorLabel('Secondary'),
  ),
  accent: evaluateSection(
    'Brand Colors',
    'Colores de acento de marca',
    BRAND_ACCENTS,
    BRAND_COLOR_FIELDS,
    brandColorLabel('Accent'),
  ),
}

const tokenRowLabel = (row: TokenRow, i: number) => row.role || `Fila ${i + 1}`

export const semanticColorsReports = Object.fromEntries(
  Object.entries(SEMANTIC_GROUPS).map(([key, group]) => [
    key,
    evaluateSection('Semantic Colors', group.section, [...group.rows], SEMANTIC_COLOR_FIELDS, tokenRowLabel),
  ]),
) as Record<keyof typeof SEMANTIC_GROUPS, ReturnType<typeof evaluateSection<TokenRow>>>

export const ALL_HIDDEN_ENTRIES: HiddenEntry[] = [
  ...Object.values(brandColorsReports).flatMap((r) => r.hidden),
  ...Object.values(semanticColorsReports).flatMap((r) => r.hidden),
]

/**
 * A qué leaf de `moduleConfig.ts` pertenece cada `module` de reporte — para
 * que el Registro de completado solo evalúe módulos prendidos en Ajustes. Un
 * módulo apagado no es "oculto por falta de datos": fue una decisión manual,
 * así que no se reporta acá.
 */
export const REPORT_MODULE_TO_LEAF: Record<string, string> = {
  'Brand Colors': 'color.brand-colors',
  'Semantic Colors': 'color.semantic-colors',
}
