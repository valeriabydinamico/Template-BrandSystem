import type { RequiredField } from '../lib/completeness'

/* ────────────────────────────────────────────────────────────────────────────
 * Datos — Brand Colors (Figma · F01 Color System · "02 Brand Colors")
 * HEX es la fuente de verdad; RGB / CMYK / Pantone son referencia técnica.
 *
 * Todos los campos son opcionales a nivel de tipo porque pueden faltar en el
 * .md de intake — `BRAND_COLOR_FIELDS` define cuáles son obligatorios para
 * que un color se muestre (ver `src/app/lib/completeness.ts`). El nivel WCAG
 * y el ratio de contraste NO están acá: los calcula `ColorCard` a partir del
 * HEX, así que no son datos que haya que pedir.
 * ────────────────────────────────────────────────────────────────────────── */

export interface BrandColorEntry {
  name?: string
  description?: string
  hex?: string
  rgb?: { r: number; g: number; b: number }
  cmyk?: { c: number; m: number; y: number; k: number }
  pantone?: string
}

export const BRAND_COLOR_FIELDS: RequiredField<BrandColorEntry>[] = [
  { key: 'name', label: 'Nombre' },
  { key: 'description', label: 'Descripción' },
  { key: 'hex', label: 'HEX' },
  { key: 'rgb', label: 'RGB' },
  { key: 'cmyk', label: 'CMYK' },
  { key: 'pantone', label: 'Pantone' },
]

export const BRAND_PRIMARY: BrandColorEntry = {
  name: 'Primary',
  description: 'Color Reference: Blue 700',
  hex: '004C97',
  rgb: { r: 0, g: 76, b: 151 },
  cmyk: { c: 100, m: 50, y: 0, k: 41 },
  pantone: 'Pantone 2945 C',
}

export const BRAND_SECONDARY: BrandColorEntry[] = [
  {
    name: 'Neutral',
    description: 'Color Reference: Gray 50',
    hex: 'FFFFFF',
    rgb: { r: 255, g: 255, b: 255 },
    cmyk: { c: 0, m: 0, y: 0, k: 0 },
    pantone: 'Paper White / Digital White',
  },
  {
    name: 'Secondary',
    description: 'Color Reference: Light Blue 600',
    hex: '00A3E1',
    rgb: { r: 0, g: 163, b: 225 },
    cmyk: { c: 100, m: 28, y: 0, k: 12 },
    pantone: 'Pantone 2995 C',
  },
]

export const BRAND_ACCENTS: BrandColorEntry[] = [
  {
    name: 'Accent 01',
    description: 'Color Reference: Orange 500',
    hex: 'FF7900',
    rgb: { r: 255, g: 121, b: 0 },
    cmyk: { c: 0, m: 53, y: 100, k: 0 },
    pantone: 'Pantone 144 C',
  },
  {
    name: 'Accent 02',
    description: 'Color Reference: Teal 600',
    hex: '20A5B1',
    rgb: { r: 32, g: 165, b: 177 },
    cmyk: { c: 82, m: 7, y: 0, k: 31 },
    pantone: 'Pantone 7710 C',
  },
  {
    name: 'Accent 03',
    description: 'Color Reference: Apple 500',
    hex: '7DC030',
    rgb: { r: 125, g: 192, b: 48 },
    cmyk: { c: 35, m: 0, y: 75, k: 25 },
    pantone: 'Pantone 376 C',
  },
]
