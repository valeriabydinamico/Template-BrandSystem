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

import { evaluateSection, type HiddenEntry, type SectionReport } from './completeness'
import { BRAND_PRIMARY, BRAND_SECONDARY, BRAND_ACCENTS, BRAND_COLOR_FIELDS, type BrandColorEntry } from '../data/brandColors'
import { SEMANTIC_GROUPS, SEMANTIC_COLOR_FIELDS, type TokenRow } from '../data/semanticColors'
import {
  BRAND_PRIMARY as TYPE_BRAND_PRIMARY,
  BRAND_SECONDARY as TYPE_BRAND_SECONDARY,
  FUNCTIONAL,
  CTA_PRODUCT,
  CTA_COMMUNICATION,
  TYPE_SPEC_FIELDS,
  type TypeSpecEntry,
} from '../data/typographyFoundations'
import {
  BRAND_STYLES,
  STYLE_TOKEN_FIELDS,
  DEVICE_GROUPS,
  DEVICE_ROW_FIELDS,
  type StyleToken,
  type DeviceRow,
} from '../data/typographySystem'
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
import { FORMATS, FORMAT_ROW_FIELDS, type FormatRow } from '../data/gridApplication'

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

const typeSpecLabel = (fallback: string) => (item: TypeSpecEntry) => item.title || fallback

export const typographyFoundationsReports = {
  brandPrimary: evaluateSection(
    'Typography Foundations',
    'Tipografía primaria de marca',
    [TYPE_BRAND_PRIMARY],
    TYPE_SPEC_FIELDS,
    typeSpecLabel('Tipografía primaria de marca'),
  ),
  brandSecondary: evaluateSection(
    'Typography Foundations',
    'Tipografía secundaria de marca',
    [TYPE_BRAND_SECONDARY],
    TYPE_SPEC_FIELDS,
    typeSpecLabel('Tipografía secundaria de marca'),
  ),
  functional: evaluateSection(
    'Typography Foundations',
    'Tipografía funcional',
    [FUNCTIONAL],
    TYPE_SPEC_FIELDS,
    typeSpecLabel('Tipografía funcional'),
  ),
  ctaProduct: evaluateSection(
    'Typography Foundations',
    'CTA de producto',
    [CTA_PRODUCT],
    TYPE_SPEC_FIELDS,
    typeSpecLabel('CTA de producto'),
  ),
  ctaCommunication: evaluateSection(
    'Typography Foundations',
    'CTA de comunicación',
    [CTA_COMMUNICATION],
    TYPE_SPEC_FIELDS,
    typeSpecLabel('CTA de comunicación'),
  ),
}

export const typographySystemReports = {
  brandStyles: evaluateSection(
    'Typography System',
    'Jerarquía de marca',
    BRAND_STYLES,
    STYLE_TOKEN_FIELDS,
    (item: StyleToken, i) => item.token || `Estilo ${i + 1}`,
  ),
}

/** Un reporte por dispositivo × categoría (Desktop — Titles, Tablet — Body…),
 *  mismo patrón que `SEMANTIC_GROUPS`. La clave es `<device>.<categoría>`. */
export const typographyDeviceReports: Record<string, SectionReport<DeviceRow>> = Object.fromEntries(
  Object.entries(DEVICE_GROUPS).flatMap(([deviceKey, device]) =>
    device.groups.map((group) => [
      `${deviceKey}.${group.label}`,
      evaluateSection(
        'Typography System',
        `${device.title} — ${group.label}`,
        group.rows,
        DEVICE_ROW_FIELDS,
        (row: DeviceRow, i) => row.token || `Fila ${i + 1}`,
      ),
    ]),
  ),
)

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

export const gridApplicationReports = {
  formats: evaluateSection(
    'Grid Application',
    'Formatos de referencia',
    FORMATS,
    FORMAT_ROW_FIELDS,
    (item: FormatRow, i) => (item.format ? `${item.channel ?? ''} ${item.format}`.trim() : `Formato ${i + 1}`),
  ),
}

export const ALL_HIDDEN_ENTRIES: HiddenEntry[] = [
  ...Object.values(brandColorsReports).flatMap((r) => r.hidden),
  ...Object.values(semanticColorsReports).flatMap((r) => r.hidden),
  ...Object.values(typographyFoundationsReports).flatMap((r) => r.hidden),
  ...Object.values(typographySystemReports).flatMap((r) => r.hidden),
  ...Object.values(typographyDeviceReports).flatMap((r) => r.hidden),
  ...Object.values(visualStylesReports).flatMap((r) => r.hidden),
  ...Object.values(gridApplicationReports).flatMap((r) => r.hidden),
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
  'Typography Foundations': 'typography.foundations',
  'Typography System': 'typography.system',
  'Visual Styles': 'visual-styles.page',
  'Grid Application': 'grids.application',
}
