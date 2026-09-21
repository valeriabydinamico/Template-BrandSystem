/**
 * Índice de búsqueda del buscador del sidebar. Busca por nombre/título
 * (no por texto de párrafo) — ver "Buscador del sidebar" en CLAUDE.md.
 *
 * Se arma a partir de las mismas fuentes que ya existen: `siteCompleteness`
 * (para que un ítem oculto por falta de datos tampoco aparezca en la
 * búsqueda — mismo criterio que el resto del sitio) y `moduleConfig`/
 * `MisComponentesPage` para las entradas de página y de componentes del
 * handbook.
 *
 * Cada entrada apunta a un `leafId` (a qué página navegar) y un `anchorId`
 * (el `id` de DOM exacto al que hacer scroll + resaltar). Si se agrega un
 * ítem nuevo en cualquier página de datos, agregarle un `id={...}` al nodo
 * que lo renderiza usando el mismo esquema de slug que acá (ver `slug.ts`).
 */

import { slugify } from './slug'
import { ALL_LEAF_IDS, findLeafInfo } from './moduleConfig'
import { SECTIONS as HANDBOOK_SECTIONS } from '../components/MisComponentesPage'
import {
  brandColorsReports,
  semanticColorsReports,
  typographyFoundationsReports,
  typographySystemReports,
  typographyDeviceReports,
  visualStylesReports,
  gridApplicationReports,
  REPORT_MODULE_TO_LEAF,
} from './siteCompleteness'

export interface SearchEntry {
  label: string
  categoryLabel: string
  leafId: string
  anchorId: string
}

const entries: SearchEntry[] = []

function add(label: string | undefined, categoryLabel: string, leafId: string | undefined, anchorId: string) {
  if (!label || !leafId) return
  entries.push({ label, categoryLabel, leafId, anchorId })
}

/* ─── Páginas meta (sin leaf en moduleConfig) ─── */
add('Introducción', 'Sistema', 'introduccion', 'introduccion')
add('Mis componentes', 'Sistema', 'mis-componentes', 'mis-componentes')
add('Registro de completado', 'Sistema', 'registro', 'registro')
add('Informe', 'Sistema', 'informe', 'informe')
add('Ajustes', 'Sistema', 'ajustes', 'ajustes')

/* ─── Todas las páginas del catálogo (nivel página) ─── */
for (const leafId of ALL_LEAF_IDS) {
  const info = findLeafInfo(leafId)
  if (info) add(info.label, info.categoryLabel, leafId, leafId)
}

/* ─── Handbook — componentes propios ─── */
for (const s of HANDBOOK_SECTIONS) {
  add(s.name, 'Mis componentes', 'mis-componentes', s.id)
}

/* ─── Brand Colors ─── */
const brandColorsLeaf = REPORT_MODULE_TO_LEAF['Brand Colors']
for (const item of [
  ...brandColorsReports.primary.visible,
  ...brandColorsReports.secondary.visible,
  ...brandColorsReports.accent.visible,
]) {
  add(item.name, 'Brand Colors', brandColorsLeaf, `brand-color-${slugify(item.name!)}`)
}

/* ─── Semantic Colors ─── */
const semanticColorsLeaf = REPORT_MODULE_TO_LEAF['Semantic Colors']
for (const report of Object.values(semanticColorsReports)) {
  for (const item of report.visible) {
    add(item.role, report.section, semanticColorsLeaf, `semantic-color-${slugify(item.token!)}`)
  }
}

/* ─── Typography Foundations ─── */
const typographyFoundationsLeaf = REPORT_MODULE_TO_LEAF['Typography Foundations']
for (const report of Object.values(typographyFoundationsReports)) {
  for (const item of report.visible) {
    add(item.title, report.section, typographyFoundationsLeaf, `type-foundation-${slugify(item.title!)}`)
  }
}

/* ─── Typography System ─── */
const typographySystemLeaf = REPORT_MODULE_TO_LEAF['Typography System']
for (const item of typographySystemReports.brandStyles.visible) {
  add(item.token, typographySystemReports.brandStyles.section, typographySystemLeaf, `type-style-${slugify(item.token!)}`)
}
for (const report of Object.values(typographyDeviceReports)) {
  for (const item of report.visible) {
    add(item.token, report.section, typographySystemLeaf, `type-device-${slugify(item.token!)}`)
  }
}

/* ─── Visual Styles ─── */
const visualStylesLeaf = REPORT_MODULE_TO_LEAF['Visual Styles']
for (const item of visualStylesReports.spacing.visible) {
  add(item.token, 'Spacing', visualStylesLeaf, `visual-style-${slugify(item.token!)}`)
}
for (const item of visualStylesReports.radius.visible) {
  add(item.token, 'Border Radius', visualStylesLeaf, `visual-style-${slugify(item.token!)}`)
}
for (const item of visualStylesReports.borders.visible) {
  add(item.token, 'Borders', visualStylesLeaf, `visual-style-${slugify(item.token!)}`)
}
for (const item of visualStylesReports.shadows.visible) {
  add(item.name, 'Shadows', visualStylesLeaf, `visual-style-${slugify(item.token!)}`)
}
for (const item of visualStylesReports.componentHeights.visible) {
  add(item.token, 'Sizing', visualStylesLeaf, `visual-style-${slugify(item.token!)}`)
}

/* ─── Grid Application ─── */
const gridApplicationLeaf = REPORT_MODULE_TO_LEAF['Grid Application']
for (const item of gridApplicationReports.formats.visible) {
  add(
    `${item.channel} ${item.format}`,
    'Formatos de referencia',
    gridApplicationLeaf,
    `grid-format-${slugify(`${item.channel}-${item.format}`)}`,
  )
}

export const SEARCH_ENTRIES: SearchEntry[] = entries
