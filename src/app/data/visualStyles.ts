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
  { value: 2, token: 'space/2', usage: 'micro gaps · icon/text' },
  { value: 4, token: 'space/4', usage: 'micro gaps · icon/text' },
  { value: 6, token: 'space/6', usage: 'micro gaps · icon/text' },
  { value: 8, token: 'space/8', usage: 'micro gaps · icon/text' },
  { value: 12, token: 'space/12', usage: 'controles compactos · metadata' },
  { value: 16, token: 'space/16', usage: 'controles compactos · metadata' },
  { value: 24, token: 'space/24', usage: 'cards · módulos · padding' },
  { value: 32, token: 'space/32', usage: 'cards · módulos · padding' },
  { value: 40, token: 'space/40', usage: 'bloques de contenido · secciones' },
  { value: 48, token: 'space/48', usage: 'bloques de contenido · secciones' },
  { value: 56, token: 'space/56', usage: 'bloques de contenido · secciones' },
  { value: 64, token: 'space/64', usage: 'bloques de contenido · secciones' },
  { value: 80, token: 'space/80', usage: 'hero · layouts amplios' },
  { value: 96, token: 'space/96', usage: 'hero · layouts amplios' },
  { value: 104, token: 'space/104', usage: 'hero · layouts amplios' },
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
  { value: 4, label: '4px', token: 'radius/4', usage: 'inputs · controles compactos' },
  { value: 8, label: '8px', token: 'radius/8', usage: 'inputs · controles compactos' },
  { value: 12, label: '12px', token: 'radius/12', usage: 'inputs · controles compactos' },
  { value: 16, label: '16px', token: 'radius/16', usage: 'cards · componentes' },
  { value: 20, label: '20px', token: 'radius/20', usage: 'cards · componentes' },
  { value: 24, label: '24px', token: 'radius/24', usage: 'cards · componentes' },
  { value: 32, label: '32px', token: 'radius/32', usage: 'contenedores · módulos' },
  { value: 48, label: '48px', token: 'radius/48', usage: 'contenedores · módulos' },
  { value: 72, label: '72px', token: 'radius/72', usage: 'shapes expresivos · hero' },
  { value: 96, label: '96px', token: 'radius/96', usage: 'shapes expresivos · hero' },
  { value: 9999, label: 'Full · 9999 px', token: 'radius/full', usage: 'pills · avatars · círculos' },
]

export const BORDERS: LabeledScaleToken[] = [
  { value: 0.6, label: '0.6px', token: 'border/0-6', usage: 'hairline óptico · tablas' },
  { value: 1, label: '1px', token: 'border/1', usage: 'divisores · cards sutiles' },
  { value: 2, label: '2px', token: 'border/2', usage: 'inputs · cards · UI' },
  { value: 3, label: '3px', token: 'border/3', usage: 'destacados · overlays' },
  { value: 4, label: '4px', token: 'border/4', usage: 'énfasis fuerte · recursos gráficos' },
  { value: 5, label: '5px', token: 'border/5', usage: 'énfasis fuerte · recursos gráficos' },
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
    token: 'shadow/low',
    spec: '0 / 6px / 16px / 0 · neutral blue-grey',
    shadow: '0px 6px 16px 0px rgba(62,73,88,0.12)',
    usage: 'chips · cards pequeñas',
  },
  {
    name: 'Medium',
    token: 'shadow/medium',
    spec: '0 / 12px / 28px / 0 · neutral blue-grey',
    shadow: '0px 12px 28px 0px rgba(62,73,88,0.16)',
    usage: 'cards · overlays · dropdowns',
  },
  {
    name: 'High',
    token: 'shadow/high',
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
  { token: 'size/button/display', value: '72px', usage: 'Button Display · Input Display cuando corresponda' },
  { token: 'size/button/standard', value: '56px', usage: 'Button Standard · Input Standard cuando corresponda' },
  { token: 'size/button/compact', value: '48px', usage: 'Button Compact · Input Compact cuando corresponda' },
  { token: 'size/button/small', value: '36px', usage: 'Button Small · Input Small cuando corresponda' },
]
