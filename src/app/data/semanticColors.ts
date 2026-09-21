import type { RequiredField } from '../lib/completeness'
import type { SemanticColorVariant } from '../components/SemanticColorCard'

/* ────────────────────────────────────────────────────────────────────────────
 * Datos — Semantic Colors (Figma 03 Semantic Colors).
 *
 * `role`, `color`, `token` y `reference` son datos de marca (obligatorios,
 * ver `SEMANTIC_COLOR_FIELDS`). `variant` es estructural (define cómo se
 * documenta el rol: texto / borde / fondo) y no se pide en el intake.
 *
 * `SEMANTIC_GROUPS` agrupa las filas tal como se documentan en la página,
 * para que cada grupo pueda ocultarse independientemente si queda vacío.
 * ────────────────────────────────────────────────────────────────────────── */

export interface TokenRow {
  role?: string
  color?: string
  token?: string
  reference?: string
  variant: SemanticColorVariant
}

export const SEMANTIC_COLOR_FIELDS: RequiredField<TokenRow>[] = [
  { key: 'role', label: 'Role' },
  { key: 'color', label: 'Color (HEX)' },
  { key: 'token', label: 'Token' },
  { key: 'reference', label: 'Color Reference' },
]

const CTA_PRIMARY: TokenRow[] = [
  { role: 'Primary Default', color: '#1677D8', token: 'color_system/semantic/action_support/cta_primary/primary_default', reference: 'color/primitive/blue/500', variant: 'background' },
  { role: 'Primary Pressed', color: '#004C97', token: 'color_system/semantic/action_support/cta_primary/primary_pressed', reference: 'color/primitive/blue/700', variant: 'background' },
  { role: 'Primary Disabled', color: '#E3E4EA', token: 'color_system/semantic/action_support/cta_primary/primary_disabled', reference: 'color/primitive/ink/100', variant: 'background' },
]

const CTA_SECONDARY: TokenRow[] = [
  { role: 'Secondary Default', color: '#FFFFFF', token: 'color_system/semantic/action_support/cta_secondary/secondary_default', reference: 'color/primitive/gray/50', variant: 'background' },
  { role: 'Secondary Pressed', color: '#E1F0FF', token: 'color_system/semantic/action_support/cta_secondary/secondary_pressed', reference: 'color/primitive/blue/100', variant: 'background' },
  { role: 'Secondary Disabled', color: '#E3E4EA', token: 'color_system/semantic/action_support/cta_secondary/secondary_disabled', reference: 'color/primitive/ink/100', variant: 'background' },
]

const SUPPORT_SURFACES: TokenRow[] = [
  { role: 'Highlight', color: '#F2F8FF', token: 'color_system/semantic/action_support/support_surfaces/highlight', reference: 'color/primitive/blue/50', variant: 'background' },
  { role: 'Selected', color: '#CCF1FF', token: 'color_system/semantic/action_support/support_surfaces/selected', reference: 'color/primitive/light-blue/100', variant: 'background' },
  { role: 'Active', color: '#9AE3FF', token: 'color_system/semantic/action_support/support_surfaces/active', reference: 'color/primitive/light-blue/200', variant: 'background' },
]

const BORDER_NEUTRAL: TokenRow[] = [
  { role: 'Border Default', color: '#C4C9D4', token: 'color_system/semantic/ui_structure/border_neutral/border_default', reference: 'color/primitive/ink/200', variant: 'border' },
  { role: 'Border Strong', color: '#8A94A8', token: 'color_system/semantic/ui_structure/border_neutral/border_strong', reference: 'color/primitive/ink/400', variant: 'border' },
  { role: 'Border Brand', color: '#1677D8', token: 'color_system/semantic/ui_structure/border_neutral/border_brand', reference: 'color/primitive/blue/500', variant: 'border' },
]

const BORDER_STATE: TokenRow[] = [
  { role: 'Error', color: '#DC2626', token: 'color_system/semantic/ui_structure/border_state/error', reference: 'color/primitive/red/default', variant: 'background-border' },
  { role: 'Success', color: '#16A34A', token: 'color_system/semantic/ui_structure/border_state/success', reference: 'color/primitive/green/default', variant: 'background-border' },
  { role: 'Warning', color: '#92400E', token: 'color_system/semantic/ui_structure/border_state/warning', reference: 'color/primitive/amber/strong', variant: 'background-border' },
  { role: 'Info', color: '#1E40AF', token: 'color_system/semantic/ui_structure/border_state/info', reference: 'color/primitive/blue/strong', variant: 'background-border' },
]

const ICONS: TokenRow[] = [
  { role: 'Icon Brand', color: '#1677D8', token: 'color_system/semantic/ui_structure/icons/icon_brand', reference: 'color/primitive/blue/500', variant: 'border' },
  { role: 'Icon Default', color: '#576175', token: 'color_system/semantic/ui_structure/icons/icon_default', reference: 'color/primitive/ink/600', variant: 'border' },
  { role: 'Icon Inverse', color: '#FFFFFF', token: 'color_system/semantic/ui_structure/icons/icon_inverse', reference: 'color/primitive/gray/50', variant: 'border' },
]

const FOCUS: TokenRow[] = [
  { role: 'Focus', color: '#8FC7FF', token: 'color_system/semantic/ui_structure/focus/focus', reference: 'color/primitive/blue/300', variant: 'border' },
]

const BG_BASE: TokenRow[] = [
  { role: 'Default', color: '#FFFFFF', token: 'color_system/semantic/backgrounds/base/default', reference: 'color/primitive/gray/50', variant: 'background' },
  { role: 'Subtle', color: '#F1F2F4', token: 'color_system/semantic/backgrounds/base/subtle', reference: 'color/primitive/ink/50', variant: 'background' },
  { role: 'Muted', color: '#E3E4EA', token: 'color_system/semantic/backgrounds/base/muted', reference: 'color/primitive/ink/100', variant: 'background' },
  { role: 'Inverse', color: '#16181D', token: 'color_system/semantic/backgrounds/base/inverse', reference: 'color/primitive/ink/900', variant: 'background' },
]

const BG_BRAND_PRIMARY: TokenRow[] = [
  { role: 'Primary', color: '#004C97', token: 'color_system/semantic/backgrounds/brand_primary/primary', reference: 'color/primitive/blue/700', variant: 'background' },
  { role: 'Primary Soft', color: '#8FC7FF', token: 'color_system/semantic/backgrounds/brand_primary/primary_soft', reference: 'color/primitive/blue/300', variant: 'background' },
  { role: 'Primary Light', color: '#E1F0FF', token: 'color_system/semantic/backgrounds/brand_primary/primary_light', reference: 'color/primitive/blue/100', variant: 'background' },
  { role: 'Primary Dark', color: '#003882', token: 'color_system/semantic/backgrounds/brand_primary/primary_dark', reference: 'color/primitive/blue/800', variant: 'background' },
]

const BG_BRAND_SECONDARY: TokenRow[] = [
  { role: 'Secondary', color: '#00A3E1', token: 'color_system/semantic/backgrounds/brand_secondary/secondary', reference: 'color/primitive/light-blue/600', variant: 'background' },
  { role: 'Secondary Soft', color: '#65D6FF', token: 'color_system/semantic/backgrounds/brand_secondary/secondary_soft', reference: 'color/primitive/light-blue/300', variant: 'background' },
  { role: 'Secondary Light', color: '#E5F9FF', token: 'color_system/semantic/backgrounds/brand_secondary/secondary_light', reference: 'color/primitive/light-blue/50', variant: 'background' },
  { role: 'Secondary Dark', color: '#004A67', token: 'color_system/semantic/backgrounds/brand_secondary/secondary_dark', reference: 'color/primitive/light-blue/800', variant: 'background' },
]

const BG_ACCENT_01: TokenRow[] = [
  { role: 'Accent 01', color: '#FF7900', token: 'color_system/semantic/backgrounds/accent_01/accent_01', reference: 'color/primitive/orange/500', variant: 'background' },
  { role: 'Accent 01 Soft', color: '#FFC99A', token: 'color_system/semantic/backgrounds/accent_01/accent_01_soft', reference: 'color/primitive/orange/200', variant: 'background' },
  { role: 'Accent 01 Light', color: '#FFF3E6', token: 'color_system/semantic/backgrounds/accent_01/accent_01_light', reference: 'color/primitive/orange/50', variant: 'background' },
  { role: 'Accent 01 Dark', color: '#663000', token: 'color_system/semantic/backgrounds/accent_01/accent_01_dark', reference: 'color/primitive/orange/800', variant: 'background' },
]

const BG_ACCENT_02: TokenRow[] = [
  { role: 'Accent 02', color: '#20A5B1', token: 'color_system/semantic/backgrounds/accent_02/accent_02', reference: 'color/primitive/teal/600', variant: 'background' },
  { role: 'Accent 02 Soft', color: '#7FDFE7', token: 'color_system/semantic/backgrounds/accent_02/accent_02_soft', reference: 'color/primitive/teal/300', variant: 'background' },
  { role: 'Accent 02 Light', color: '#E7F8F9', token: 'color_system/semantic/backgrounds/accent_02/accent_02_light', reference: 'color/primitive/teal/50', variant: 'background' },
  { role: 'Accent 02 Dark', color: '#105056', token: 'color_system/semantic/backgrounds/accent_02/accent_02_dark', reference: 'color/primitive/teal/800', variant: 'background' },
]

const BG_ACCENT_03: TokenRow[] = [
  { role: 'Accent 03', color: '#7DC030', token: 'color_system/semantic/backgrounds/accent_03/accent_03', reference: 'color/primitive/apple/500', variant: 'background' },
  { role: 'Accent 03 Soft', color: '#C7E8A1', token: 'color_system/semantic/backgrounds/accent_03/accent_03_soft', reference: 'color/primitive/apple/200', variant: 'background' },
  { role: 'Accent 03 Light', color: '#ECF7DF', token: 'color_system/semantic/backgrounds/accent_03/accent_03_light', reference: 'color/primitive/apple/50', variant: 'background' },
  { role: 'Accent 03 Dark', color: '#365214', token: 'color_system/semantic/backgrounds/accent_03/accent_03_dark', reference: 'color/primitive/apple/800', variant: 'background' },
]

const BG_STATE: TokenRow[] = [
  { role: 'Error', color: '#FEF2F2', token: 'color_system/semantic/backgrounds/state/error', reference: 'color/primitive/red/soft', variant: 'background' },
  { role: 'Success', color: '#ECFDF3', token: 'color_system/semantic/backgrounds/state/success', reference: 'color/primitive/green/soft', variant: 'background' },
  { role: 'Warning', color: '#FFFBEB', token: 'color_system/semantic/backgrounds/state/warning', reference: 'color/primitive/amber/soft', variant: 'background' },
  { role: 'Info', color: '#EFF6FF', token: 'color_system/semantic/backgrounds/state/info', reference: 'color/primitive/blue/soft', variant: 'background' },
]

const TEXT_BRAND: TokenRow[] = [
  { role: 'Brand Primary', color: '#004C97', token: 'color_system/semantic/text_colors/brand/brand_primary', reference: 'color/primitive/blue/700', variant: 'text' },
  { role: 'Brand Strong', color: '#003882', token: 'color_system/semantic/text_colors/brand/brand_strong', reference: 'color/primitive/blue/800', variant: 'text' },
  { role: 'Interactive', color: '#1677D8', token: 'color_system/semantic/text_colors/brand/interactive', reference: 'color/primitive/blue/500', variant: 'text' },
  { role: 'Interactive On Dark', color: '#9AE3FF', token: 'color_system/semantic/text_colors/brand/interactive_on_dark', reference: 'color/primitive/light-blue/200', variant: 'text' },
]

const TEXT_NEUTRAL: TokenRow[] = [
  { role: 'Primary', color: '#292E38', token: 'color_system/semantic/text_colors/neutral/primary', reference: 'color/primitive/ink/800', variant: 'text' },
  { role: 'Secondary', color: '#576175', token: 'color_system/semantic/text_colors/neutral/secondary', reference: 'color/primitive/ink/600', variant: 'text' },
  { role: 'Support', color: '#576175', token: 'color_system/semantic/text_colors/neutral/support', reference: 'color/primitive/ink/600', variant: 'text' },
  { role: 'Primary On Dark', color: '#FFFFFF', token: 'color_system/semantic/text_colors/neutral/primary_on_dark', reference: 'color/primitive/gray/50', variant: 'text' },
  { role: 'Secondary On Dark', color: '#FFFFFF', token: 'color_system/semantic/text_colors/neutral/secondary_on_dark', reference: 'color/primitive/gray/50 + opacity/80', variant: 'text' },
  { role: 'Support On Dark', color: '#FFFFFF', token: 'color_system/semantic/text_colors/neutral/support_on_dark', reference: 'color/primitive/gray/50 + opacity/70', variant: 'text' },
]

const TEXT_ACCENT: TokenRow[] = [
  { role: 'Accent 01', color: '#994A00', token: 'color_system/semantic/text_colors/accent/accent_01', reference: 'color/primitive/orange/700', variant: 'text' },
  { role: 'Accent 02', color: '#187882', token: 'color_system/semantic/text_colors/accent/accent_02', reference: 'color/primitive/teal/700', variant: 'text' },
  { role: 'Accent 03', color: '#517A20', token: 'color_system/semantic/text_colors/accent/accent_03', reference: 'color/primitive/apple/700', variant: 'text' },
]

const TEXT_SEMANTIC: TokenRow[] = [
  { role: 'Error', color: '#991B1B', token: 'color_system/semantic/text_colors/semantic/error', reference: 'color/primitive/red/strong', variant: 'text' },
  { role: 'Success', color: '#166534', token: 'color_system/semantic/text_colors/semantic/success', reference: 'color/primitive/green/strong', variant: 'text' },
  { role: 'Warning', color: '#92400E', token: 'color_system/semantic/text_colors/semantic/warning', reference: 'color/primitive/amber/strong', variant: 'text' },
  { role: 'Info', color: '#1E40AF', token: 'color_system/semantic/text_colors/semantic/info', reference: 'color/primitive/blue/strong', variant: 'text' },
]

/** Un grupo por cada `Group` que arma la página; el `key` identifica al grupo
 *  para poder recuperar su reporte de completitud desde `SemanticColorsPage`. */
export const SEMANTIC_GROUPS = {
  ctaPrimary: { section: 'CTA & Buttons — Primary', rows: CTA_PRIMARY },
  ctaSecondary: { section: 'CTA & Buttons — Secondary', rows: CTA_SECONDARY },
  supportSurfaces: { section: 'Superficies de soporte', rows: SUPPORT_SURFACES },
  borderNeutral: { section: 'Bordes y contornos — Neutral', rows: BORDER_NEUTRAL },
  borderState: { section: 'Bordes y contornos — Estado', rows: BORDER_STATE },
  icons: { section: 'Iconos', rows: ICONS },
  focus: { section: 'Focus', rows: FOCUS },
  bgBase: { section: 'Fondos base', rows: BG_BASE },
  bgBrandPrimary: { section: 'Fondos primarios de marca', rows: BG_BRAND_PRIMARY },
  bgBrandSecondary: { section: 'Fondos secundarios de marca', rows: BG_BRAND_SECONDARY },
  bgAccent01: { section: 'Fondos de acento — Accent 01', rows: BG_ACCENT_01 },
  bgAccent02: { section: 'Fondos de acento — Accent 02', rows: BG_ACCENT_02 },
  bgAccent03: { section: 'Fondos de acento — Accent 03', rows: BG_ACCENT_03 },
  bgState: { section: 'Fondos de estados', rows: BG_STATE },
  textBrand: { section: 'Texto de marca', rows: TEXT_BRAND },
  textNeutral: { section: 'Texto neutral', rows: TEXT_NEUTRAL },
  textAccent: { section: 'Texto de acento', rows: TEXT_ACCENT },
  textSemantic: { section: 'Texto semántico', rows: TEXT_SEMANTIC },
} as const

export type SemanticGroupKey = keyof typeof SEMANTIC_GROUPS
