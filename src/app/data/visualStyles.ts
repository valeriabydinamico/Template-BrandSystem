import type { RequiredField } from '../lib/completeness'

/* ────────────────────────────────────────────────────────────────────────────
 * Datos — Visual Styles (Figma · 01 Visual Styles, nodo 214:2446).
 *
 * Cuatro escalas de marca: Spacing, Border Radius, Borders, Shadows, más las
 * alturas de componente de Sizing. Los tamaños de ícono (`ICON_SIZES`) NO
 * están acá: son una escala técnica fija (no una decisión de marca por
 * ítem), se mantienen hardcodeados en `VisualStylesPage`.
 * ────────────────────────────────────────────────────────────────────────── */

export interface ScaleToken {
  value?: number
  token?: string
  usage?: string
}

export const SCALE_TOKEN_FIELDS: RequiredField<ScaleToken>[] = [
  { key: 'value', label: 'Valor' },
  { key: 'token', label: 'Token' },
  { key: 'usage', label: 'Uso' },
]

export const SPACING: ScaleToken[] = [
  { value: 2, token: 'visual_styles/spacing/2', usage: 'micro gaps · icon/text' },
  { value: 4, token: 'visual_styles/spacing/4', usage: 'micro gaps · icon/text' },
  { value: 6, token: 'visual_styles/spacing/6', usage: 'micro gaps · icon/text' },
  { value: 8, token: 'visual_styles/spacing/8', usage: 'micro gaps · icon/text' },
  { value: 12, token: 'visual_styles/spacing/12', usage: 'controles compactos · metadata' },
  { value: 16, token: 'visual_styles/spacing/16', usage: 'controles compactos · metadata' },
  { value: 24, token: 'visual_styles/spacing/24', usage: 'cards · módulos · padding' },
  { value: 32, token: 'visual_styles/spacing/32', usage: 'cards · módulos · padding' },
  { value: 40, token: 'visual_styles/spacing/40', usage: 'bloques de contenido · secciones' },
  { value: 48, token: 'visual_styles/spacing/48', usage: 'bloques de contenido · secciones' },
  { value: 56, token: 'visual_styles/spacing/56', usage: 'bloques de contenido · secciones' },
  { value: 64, token: 'visual_styles/spacing/64', usage: 'bloques de contenido · secciones' },
  { value: 80, token: 'visual_styles/spacing/80', usage: 'hero · layouts amplios' },
  { value: 96, token: 'visual_styles/spacing/96', usage: 'hero · layouts amplios' },
  { value: 104, token: 'visual_styles/spacing/104', usage: 'hero · layouts amplios' },
]

export interface LabeledScaleToken extends ScaleToken {
  label?: string
}

export const LABELED_SCALE_TOKEN_FIELDS: RequiredField<LabeledScaleToken>[] = [
  { key: 'value', label: 'Valor' },
  { key: 'label', label: 'Etiqueta' },
  { key: 'token', label: 'Token' },
  { key: 'usage', label: 'Uso' },
]

export const RADIUS: LabeledScaleToken[] = [
  { value: 4, label: '4px', token: 'visual_styles/radius/4', usage: 'inputs · controles compactos' },
  { value: 8, label: '8px', token: 'visual_styles/radius/8', usage: 'inputs · controles compactos' },
  { value: 12, label: '12px', token: 'visual_styles/radius/12', usage: 'inputs · controles compactos' },
  { value: 16, label: '16px', token: 'visual_styles/radius/16', usage: 'cards · componentes' },
  { value: 20, label: '20px', token: 'visual_styles/radius/20', usage: 'cards · componentes' },
  { value: 24, label: '24px', token: 'visual_styles/radius/24', usage: 'cards · componentes' },
  { value: 32, label: '32px', token: 'visual_styles/radius/32', usage: 'contenedores · módulos' },
  { value: 48, label: '48px', token: 'visual_styles/radius/48', usage: 'contenedores · módulos' },
  { value: 72, label: '72px', token: 'visual_styles/radius/72', usage: 'shapes expresivos · hero' },
  { value: 96, label: '96px', token: 'visual_styles/radius/96', usage: 'shapes expresivos · hero' },
  { value: 9999, label: 'Full · 9999 px', token: 'visual_styles/radius/full', usage: 'pills · avatars · círculos' },
]

export const BORDERS: LabeledScaleToken[] = [
  { value: 0.6, label: '0.6px', token: 'visual_styles/borders/0_6', usage: 'hairline óptico · tablas' },
  { value: 1, label: '1px', token: 'visual_styles/borders/1', usage: 'divisores · cards sutiles' },
  { value: 2, label: '2px', token: 'visual_styles/borders/2', usage: 'inputs · cards · UI' },
  { value: 3, label: '3px', token: 'visual_styles/borders/3', usage: 'destacados · overlays' },
  { value: 4, label: '4px', token: 'visual_styles/borders/4', usage: 'énfasis fuerte · recursos gráficos' },
  { value: 5, label: '5px', token: 'visual_styles/borders/5', usage: 'énfasis fuerte · recursos gráficos' },
]

export interface ShadowToken {
  name?: string
  token?: string
  spec?: string
  shadow?: string
  usage?: string
}

export const SHADOW_TOKEN_FIELDS: RequiredField<ShadowToken>[] = [
  { key: 'name', label: 'Nombre' },
  { key: 'token', label: 'Token' },
  { key: 'spec', label: 'Spec' },
  { key: 'shadow', label: 'Valor CSS' },
  { key: 'usage', label: 'Uso' },
]

export const SHADOWS: ShadowToken[] = [
  {
    name: 'Low',
    token: 'visual_styles/shadows/low',
    spec: '0 / 6px / 16px / 0 · neutral blue-grey',
    shadow: '0px 6px 16px 0px rgba(62,73,88,0.12)',
    usage: 'chips · cards pequeñas',
  },
  {
    name: 'Medium',
    token: 'visual_styles/shadows/medium',
    spec: '0 / 12px / 28px / 0 · neutral blue-grey',
    shadow: '0px 12px 28px 0px rgba(62,73,88,0.16)',
    usage: 'cards · overlays · dropdowns',
  },
  {
    name: 'High',
    token: 'visual_styles/shadows/high',
    spec: '0 / 20px / 48px / 0 · neutral blue-grey',
    shadow: '0px 20px 48px 0px rgba(62,73,88,0.2)',
    usage: 'panels · modales · hero flotante',
  },
]

export interface ComponentHeight {
  token?: string
  value?: string
  usage?: string
}

export const COMPONENT_HEIGHT_FIELDS: RequiredField<ComponentHeight>[] = [
  { key: 'token', label: 'Token' },
  { key: 'value', label: 'Valor' },
  { key: 'usage', label: 'Uso' },
]

export const COMPONENT_HEIGHTS: ComponentHeight[] = [
  { token: 'visual_styles/sizing/button/display', value: '72px', usage: 'Button Display · Input Display cuando corresponda' },
  { token: 'visual_styles/sizing/button/standard', value: '56px', usage: 'Button Standard · Input Standard cuando corresponda' },
  { token: 'visual_styles/sizing/button/compact', value: '48px', usage: 'Button Compact · Input Compact cuando corresponda' },
  { token: 'visual_styles/sizing/button/small', value: '36px', usage: 'Button Small · Input Small cuando corresponda' },
]
