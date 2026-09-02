/**
 * Utilidades de contraste / accesibilidad compartidas.
 * Las usan `ColorCard` y `SemanticColorCard` para no desincronizarse.
 */

/** Luminancia relativa (WCAG) de un color HEX, 0–1. */
export function relativeLuminance(hex: string): number {
  const bare = hex.replace(/^#/, '')
  const r = parseInt(bare.slice(0, 2), 16) / 255
  const g = parseInt(bare.slice(2, 4), 16) / 255
  const b = parseInt(bare.slice(4, 6), 16) / 255
  const lin = (c: number) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4))
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)
}

/** Negro o blanco — el que mejor contraste tenga sobre `hex`. */
export function accessibleTextColor(hex: string): '#000000' | '#ffffff' {
  return relativeLuminance(hex) > 0.179 ? '#000000' : '#ffffff'
}

/** Ratio de contraste WCAG entre dos colores HEX (1–21). */
export function contrastRatio(hexA: string, hexB: string): number {
  const l1 = relativeLuminance(hexA)
  const l2 = relativeLuminance(hexB)
  const hi = Math.max(l1, l2)
  const lo = Math.min(l1, l2)
  return (hi + 0.05) / (lo + 0.05)
}

export type WcagLevel = 'AAA' | 'AA' | 'AA Large' | 'Fail'

/** Nivel WCAG (texto normal) a partir de un ratio de contraste. */
export function wcagLevel(ratio: number): WcagLevel {
  if (ratio >= 7) return 'AAA'
  if (ratio >= 4.5) return 'AA'
  if (ratio >= 3) return 'AA Large'
  return 'Fail'
}

/** Formatea un ratio como "4.50:1". */
export function formatRatio(ratio: number): string {
  return `${ratio.toFixed(2)}:1`
}

/** Brillo (L de HSL) en 0–100 a partir del HEX. */
export function hslLightness(hex: string): number {
  const bare = hex.replace(/^#/, '')
  if (bare.length < 6) return NaN
  const r = parseInt(bare.slice(0, 2), 16) / 255
  const g = parseInt(bare.slice(2, 4), 16) / 255
  const b = parseInt(bare.slice(4, 6), 16) / 255
  return ((Math.max(r, g, b) + Math.min(r, g, b)) / 2) * 100
}

/** Tono casi blanco: L entre 98 y 100. */
export function isNearWhite(hex: string): boolean {
  const l = hslLightness(hex)
  return !Number.isNaN(l) && l >= 98 && l <= 100
}

/** Devuelve el color HEX como `rgba(r, g, b, alpha)`. */
export function withAlpha(hex: string, alpha: number): string {
  const bare = hex.replace(/^#/, '')
  const r = parseInt(bare.slice(0, 2), 16)
  const g = parseInt(bare.slice(2, 4), 16)
  const b = parseInt(bare.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

/** Normaliza a `#RRGGBB` en mayúsculas. */
export function normalizeHex(input: string): string {
  const bare = input.replace(/^#/, '').toUpperCase()
  return `#${bare}`
}
