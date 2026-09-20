import type { RequiredField } from '../lib/completeness'

/* ────────────────────────────────────────────────────────────────────────────
 * Datos — Typography System (Figma · 02 Typography System, nodo 154:8196).
 *
 * Dos sets de datos de marca:
 *   - `BRAND_STYLES` — jerarquía de marca (tabla "Style Token").
 *   - `DEVICE_GROUPS` — tokens responsive por dispositivo (Desktop/Tablet/
 *     Mobile), cada uno agrupado por categoría (Titles/Body/CTA) igual que
 *     `SEMANTIC_GROUPS` en `semanticColors.ts`. `device` y `category` son
 *     estructurales (agrupan, no se piden en el intake); las filas sí.
 *
 * `preview` es contenido de ejemplo (no dato de marca estricto): si falta,
 * la página usa el propio `token` como texto de muestra.
 * ────────────────────────────────────────────────────────────────────────── */

export interface StyleToken {
  token?: string
  preview?: string
  family?: string
  weight?: string
  size?: string
  lineHeight?: string
  letterSpacing?: string
  usage?: string
}

export const STYLE_TOKEN_FIELDS: RequiredField<StyleToken>[] = [
  { key: 'token', label: 'Style Token' },
  { key: 'family', label: 'Font Family' },
  { key: 'weight', label: 'Weight' },
  { key: 'size', label: 'Size' },
  { key: 'lineHeight', label: 'Line Height' },
  { key: 'letterSpacing', label: 'Letter Spacing' },
  { key: 'usage', label: 'Uso' },
]

export const BRAND_STYLES: StyleToken[] = [
  {
    token: 'type/brand/display/lg',
    preview: 'Build trust.',
    family: 'Manrope',
    weight: 'Semi Bold',
    size: '56 px',
    lineHeight: '64 px',
    letterSpacing: '-1%',
    usage: 'Hero · Campaigns · Titulares de alto impacto',
  },
  {
    token: 'type/brand/display/md',
    preview: 'Clear ideas.',
    family: 'Manrope',
    weight: 'Semi Bold',
    size: '48 px',
    lineHeight: '56 px',
    letterSpacing: '-0.5%',
    usage: 'Headlines editoriales · Piezas institucionales',
  },
  {
    token: 'type/brand/heading/lg',
    preview: 'Section heading',
    family: 'Manrope',
    weight: 'Semi Bold',
    size: '40 px',
    lineHeight: '48 px',
    letterSpacing: '-0.5%',
    usage: 'Heading principal · Secciones destacadas',
  },
  {
    token: 'type/brand/heading/md',
    preview: 'Section title',
    family: 'Manrope',
    weight: 'Medium',
    size: '32 px',
    lineHeight: '40 px',
    letterSpacing: '0%',
    usage: 'Heading secundario · Módulos editoriales',
  },
  {
    token: 'type/brand/subtitle',
    preview: 'Ideas deserve room to breathe.',
    family: 'Source Serif 4',
    weight: 'Medium',
    size: '24 px',
    lineHeight: '32 px',
    letterSpacing: '0%',
    usage: 'Storytelling · Quotes · Apoyo editorial',
  },
  {
    token: 'type/brand/label',
    preview: 'FEATURED',
    family: 'Manrope',
    weight: 'Semi Bold',
    size: '14 px',
    lineHeight: '20 px',
    letterSpacing: '+1%',
    usage: 'Campaign labels · Badges · Soporte breve',
  },
]

export interface DeviceRow {
  token?: string
  preview?: string
  size?: number
  lineHeight?: number
  weight?: 400 | 600
  spec?: string
}

export const DEVICE_ROW_FIELDS: RequiredField<DeviceRow>[] = [
  { key: 'token', label: 'Token' },
  { key: 'size', label: 'Size' },
  { key: 'lineHeight', label: 'Line Height' },
  { key: 'weight', label: 'Weight' },
  { key: 'spec', label: 'Spec' },
]

export interface DeviceCategoryGroup {
  label: string
  rows: DeviceRow[]
}

const t = (token: string, preview: string, size: number, lineHeight: number, weight: 400 | 600, spec: string): DeviceRow => ({
  token,
  preview,
  size,
  lineHeight,
  weight,
  spec,
})

export const DEVICE_GROUPS: Record<'desktop' | 'tablet' | 'mobile', { title: string; groups: DeviceCategoryGroup[] }> = {
  desktop: {
    title: 'Desktop',
    groups: [
      {
        label: 'Titles',
        rows: [
          t('type/desktop/title/lg', 'Build trust.', 32, 40, 600, 'Primary title · Inter · Semi Bold · 32/40 · -0.5%'),
          t('type/desktop/title/md', 'Clear hierarchy', 28, 36, 600, 'Section title · Inter · Semi Bold · 28/36 · -0.25%'),
          t('type/desktop/title/sm', 'Module title', 24, 32, 600, 'Module title · Inter · Semi Bold · 24/32 · 0%'),
        ],
      },
      {
        label: 'Body',
        rows: [
          t('type/desktop/body/lg', 'Lead content for context.', 18, 28, 400, 'Lead / intro · Inter · Regular · 18/28 · 0%'),
          t('type/desktop/body/md', 'Clear, readable content.', 16, 24, 400, 'Default body · Inter · Regular · 16/24 · 0%'),
          t('type/desktop/body/sm', 'Supporting details.', 14, 20, 400, 'Supporting copy · Inter · Regular · 14/20 · 0%'),
        ],
      },
      {
        label: 'CTA',
        rows: [
          t('type/desktop/cta/md', 'Continue', 16, 20, 600, 'Primary actions · Inter · Semi Bold · 16/20 · 0%'),
          t('type/desktop/cta/sm', 'Learn more', 14, 18, 600, 'Compact actions · Inter · Semi Bold · 14/18 · 0%'),
        ],
      },
    ],
  },
  tablet: {
    title: 'Tablet',
    groups: [
      {
        label: 'Titles',
        rows: [
          t('type/tablet/title/lg', 'Build trust.', 28, 36, 600, 'Primary title · Inter · Semi Bold · 28/36 · -0.25%'),
          t('type/tablet/title/md', 'Clear hierarchy', 24, 32, 600, 'Section title · Inter · Semi Bold · 24/32 · -0.25%'),
          t('type/tablet/title/sm', 'Module title', 20, 28, 600, 'Module title · Inter · Semi Bold · 20/28 · 0%'),
        ],
      },
      {
        label: 'Body',
        rows: [
          t('type/tablet/body/lg', 'Lead content for context.', 18, 28, 400, 'Lead / intro · Inter · Regular · 18/28 · 0%'),
          t('type/tablet/body/md', 'Clear, readable content.', 16, 24, 400, 'Default body · Inter · Regular · 16/24 · 0%'),
          t('type/tablet/body/sm', 'Supporting details.', 14, 20, 400, 'Supporting copy · Inter · Regular · 14/20 · 0%'),
        ],
      },
      {
        label: 'CTA',
        rows: [
          t('type/tablet/cta/md', 'Continue', 15, 20, 600, 'Primary actions · Inter · Semi Bold · 15/20 · 0%'),
          t('type/tablet/cta/sm', 'Learn more', 14, 18, 600, 'Compact actions · Inter · Semi Bold · 14/18 · 0%'),
        ],
      },
    ],
  },
  mobile: {
    title: 'Mobile',
    groups: [
      {
        label: 'Titles',
        rows: [
          t('type/mobile/title/lg', 'Build trust.', 24, 32, 600, 'Primary title · Inter · Semi Bold · 24/32 · 0%'),
          t('type/mobile/title/md', 'Clear hierarchy', 22, 28, 600, 'Section title · Inter · Semi Bold · 22/28 · 0%'),
          t('type/mobile/title/sm', 'Module title', 18, 24, 600, 'Module title · Inter · Semi Bold · 18/24 · 0%'),
        ],
      },
      {
        label: 'Body',
        rows: [
          t('type/mobile/body/lg', 'Lead content for context.', 16, 24, 400, 'Lead / intro · Inter · Regular · 16/24 · 0%'),
          t('type/mobile/body/md', 'Clear, readable content.', 14, 20, 400, 'Default body · Inter · Regular · 14/20 · 0%'),
          t('type/mobile/body/sm', 'Supporting details.', 14, 18, 400, 'Supporting copy · Inter · Regular · 14/18 · 0%'),
        ],
      },
      {
        label: 'CTA',
        rows: [
          t('type/mobile/cta/md', 'Continue', 16, 20, 600, 'Primary actions · Inter · Semi Bold · 16/20 · 0%'),
          t('type/mobile/cta/sm', 'Learn more', 14, 18, 600, 'Compact actions · Inter · Semi Bold · 14/18 · 0%'),
        ],
      },
    ],
  },
}
