import { TokenTag } from '../TokenTag'
import {
  relativeLuminance,
  accessibleTextColor,
  isNearWhite,
  contrastRatio as getContrastRatio,
  wcagLevel,
  formatRatio,
  normalizeHex,
} from '../../lib/contrast'

export type CombinationBadgeTone = 'success' | 'fail' | 'conflict'

function getGradientTextColor(hexTop: string, hexBottom: string): string {
  const avg = (relativeLuminance(hexTop) + relativeLuminance(hexBottom)) / 2
  return avg > 0.179 ? '#000000' : '#ffffff'
}

export interface ColorCardProps {
  /**
   * primary     — fondo sólido, badges WCAG en extremos. Para tonos individuales.
   * secondary   — fondo sólido, badges agrupados a la izquierda. Para paletas multi-color.
   * tertiary    — swatch compacto con número de tono, HEX/RGB/HSL y token. Para escalas de tonos.
   * gradient    — fondo degradado con colores superior/inferior, ángulo y uso. Para degradados.
   * combination — swatch con muestra de texto real (fondo + color de texto) y
   *               badge de contraste calculado, o badge manual "fail"/"conflict"
   *               para pares no recomendados. Para combinaciones aprobadas.
   */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'gradient' | 'combination'
  /** Color CSS de fondo (sólido para primary/secondary/tertiary/combination, CSS gradient string para gradient) */
  color: string
  /** Nombre del color, degradado o combinación (e.g. "Combination/01") */
  name: string
  /** Descripción del token (primary/secondary) o texto de uso (gradient) */
  description?: string
  /** HEX sin el #. No requerido en variant gradient */
  hex?: string
  /** Valores RGB */
  rgb?: { r: number; g: number; b: number }
  /** Valores CMYK (primary/secondary) */
  cmyk?: { c: number; m: number; y: number; k: number }
  /** Valores HSL (tertiary) */
  hsl?: { h: string; s: string; l: string }
  /** Ruta del design token (tertiary/combination) */
  token?: string
  /** Referencia Pantone (primary/secondary) */
  pantone?: string
  /** HEX sin # del color superior del degradado (gradient) */
  colorTop?: string
  /** HEX sin # del color inferior del degradado (gradient) */
  colorBottom?: string
  /** Ángulo del degradado, e.g. "180°" (gradient) */
  angle?: string
  /** combination: color del texto de muestra sobre `color` */
  textColor?: string
  /** combination: texto de muestra mostrado sobre el swatch, e.g. "Texto / Label" */
  sampleText?: string
  /**
   * combination: tono del badge — `success` calcula el ratio real entre
   * `color` y `textColor` (AA/AAA/Fail); `fail`/`conflict` muestran
   * `badgeText` tal cual, para pares no recomendados (falla de contraste o
   * choque de marca que no es un problema de contraste).
   */
  badgeTone?: CombinationBadgeTone
  /** combination: texto del badge cuando `badgeTone` es `fail` o `conflict` */
  badgeText?: string
  className?: string
}

export function ColorCard({
  variant = 'primary',
  color,
  name,
  description,
  hex = '',
  rgb,
  cmyk,
  hsl,
  token,
  pantone,
  colorTop,
  colorBottom,
  angle,
  textColor: sampleTextColor,
  sampleText,
  badgeTone,
  badgeText,
  className = '',
}: ColorCardProps) {
  const bareHex = hex.replace(/^#/, '')
  const textColor = accessibleTextColor(hex)
  const autoStroke = isNearWhite(bareHex || color) ? 'border border-[#DADCDE]' : ''

  /* ─── Combination ─── */
  if (variant === 'combination') {
    const bg = normalizeHex(color)
    const sample = normalizeHex(sampleTextColor ?? accessibleTextColor(bg))
    const pillText = accessibleTextColor(sample)
    const showsRatio = badgeTone === 'success' || !badgeTone
    const ratio = showsRatio ? getContrastRatio(bg, sample) : null
    const level = ratio !== null ? wcagLevel(ratio) : null
    const failed = badgeTone === 'fail' || (showsRatio && level === 'Fail')
    const isConflict = badgeTone === 'conflict'

    const badgeClass = isConflict
      ? 'bg-[#fef3c7] text-[#92400e]'
      : failed
        ? 'bg-[#fee2e2] text-[#991b1b]'
        : 'bg-[#1fad8a] text-white'
    const badgeLabel = isConflict || badgeTone === 'fail' ? (badgeText ?? '') : `${formatRatio(ratio ?? 0)} ${level}`

    return (
      <div className={`flex w-full flex-col overflow-clip rounded-[16px] border border-[#e3e7ee] bg-white ${className}`}>
        <div className="flex h-[80px] w-full items-center justify-center" style={{ backgroundColor: bg }}>
          <span
            className="rounded-[8px] px-[16px] py-[8px] font-semibold text-[14px] leading-[20px]"
            style={{ color: pillText, backgroundColor: sample }}
          >
            {sampleText ?? 'Texto / Label'}
          </span>
        </div>
        <div className="flex w-full flex-col gap-[8px] p-[12px]">
          <div className="flex w-full flex-wrap items-center justify-between gap-[8px]">
            <p className="font-bold text-[14px] leading-[18px] text-[#16181d]">{name}</p>
            <span className={`shrink-0 rounded-[999px] px-[10px] py-[3px] font-semibold text-[11px] leading-[14px] whitespace-nowrap ${badgeClass}`}>
              {badgeLabel}
            </span>
          </div>
          {description && <p className="text-[12px] leading-[17px] text-[#576175]">{description}</p>}
          {token && <TokenTag fit>{token}</TokenTag>}
        </div>
      </div>
    )
  }

  /* ─── Gradient ─── */
  if (variant === 'gradient') {
    const gradientTextColor = colorTop && colorBottom
      ? getGradientTextColor(colorTop, colorBottom)
      : '#000000'

    const gradientBg = colorTop && colorBottom
      ? `linear-gradient(to left, #${colorTop}, #${colorBottom})`
      : color

    return (
      <div
        className={`flex flex-col items-start overflow-clip p-[2px] rounded-[8px] h-fit  ${className}`}
        style={{ background: gradientBg }}
      >
        {/* Top content: name + color info */}
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[12px] relative shrink-0 w-full">
          <p className="font-bold text-[20px] leading-normal shrink-0 whitespace-nowrap" style={{ color: gradientTextColor }}>
            {name}
          </p>

          {/* Labels | Values */}
          <div className="flex gap-[16px] h-[44px] items-start overflow-clip w-full">
            <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[42px] font-bold text-[12px] leading-[12px]" style={{ color: gradientTextColor }}>
              <p>LEFT</p>
              <p>RIGHT</p>
              <p>ANGLE</p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[87px] font-normal text-[12px] leading-[12px]" style={{ color: gradientTextColor }}>
              <p className="whitespace-nowrap">#{colorBottom ?? '—'}</p>
              <p className="whitespace-nowrap">#{colorTop ?? '—'}</p>
              <p className="whitespace-nowrap">{angle ?? '—'}</p>
            </div>
          </div>
        </div>

        {/* Token tag */}
        <TokenTag>{token ?? 'token'}</TokenTag>
      </div>
    )
  }

  /* ─── Tertiary ─── */
  if (variant === 'tertiary') {
    return (
      <div
        className={`flex flex-col items-center overflow-clip p-[2px] rounded-[8px] shrink-0 w-full ${autoStroke} ${className}`}
        style={{ backgroundColor: color }}
      >
        {/* Top: name + color values */}
        <div className="flex flex-col gap-[16px] items-start p-[12px] w-full">
          <p className="font-bold leading-normal text-[20px] whitespace-nowrap" style={{ color: textColor }}>{name}</p>

          {/* Labels | Values */}
          <div className="flex gap-[16px] h-[44px] items-start overflow-clip w-full">
            <div className="flex flex-col gap-[4px] items-start overflow-clip w-[25px] font-bold text-[12px] leading-[12px]" style={{ color: textColor }}>
              <p>HEX</p>
              {rgb && <p>RGB</p>}
              {hsl && <p>HSL</p>}
            </div>
            <div className="flex flex-col gap-[4px] items-start overflow-clip font-normal text-[12px] leading-[12px]" style={{ color: textColor }}>
              <p className="whitespace-nowrap">#{bareHex}</p>
              {rgb && <p className="whitespace-nowrap">{rgb.r}, {rgb.g}, {rgb.b}</p>}
              {hsl && <p className="whitespace-nowrap">{hsl.h}, {hsl.s}, {hsl.l}</p>}
            </div>
          </div>
        </div>

        {/* Token tag */}
        {token && <TokenTag>{token}</TokenTag>}
      </div>
    )
  }

  /* ─── Primary & Secondary ─── */
  const isPrimary = variant === 'primary'

  // Pastillas de contraste — mismo estilo que en SemanticColorCard: rating
  // (nivel) = suave · ratio = sólida · colores según la luminancia del color.
  // Se calculan solas a partir del HEX (no son dato de marca a completar).
  const ratio = bareHex ? getContrastRatio(`#${bareHex}`, textColor) : null
  const accessibilityRating = ratio !== null ? wcagLevel(ratio) : null
  const contrastRatio = ratio !== null ? formatRatio(ratio) : null
  const panelIsDark = textColor === '#ffffff'
  const badgeBase =
    'flex items-center justify-center rounded-[20px] px-[12px] py-[8px] font-semibold text-[14px] leading-[16px] whitespace-nowrap'
  const softBadge = panelIsDark
    ? 'bg-[rgba(255,255,255,0.5)] text-[#16181d]'
    : 'bg-[rgba(22,24,29,0.1)] text-[#16181d]'
  const solidBadge = panelIsDark ? 'bg-white text-[#16181d]' : 'bg-[#16181d] text-white'

  return (
    <div
      className={`relative flex w-full flex-col rounded-[16px] p-[20px] ${autoStroke} ${className}`}
      style={{ backgroundColor: color }}
    >
      <div className="flex w-full flex-col gap-[32px]" style={{ color: textColor }}>

        {/* Pastillas + nombre */}
        <div className="flex w-full flex-col gap-[24px]">
          <div
            className={
              isPrimary
                ? 'flex w-full items-start justify-between'
                : 'flex items-start gap-[8px]'
            }
          >
            {accessibilityRating ? (
              <span className={`${badgeBase} ${softBadge}`}>{accessibilityRating}</span>
            ) : (
              <span />
            )}
            {contrastRatio && <span className={`${badgeBase} ${solidBadge}`}>{contrastRatio}</span>}
          </div>

          <div className="flex w-full flex-col gap-[6px] font-bold">
            <p className="text-[24px] leading-[28px]">{name}</p>
            {/* Altura reservada para 2 líneas (24px × 2) para que las cards
                queden alineadas aunque la descripción sea de 1 sola línea. */}
            {description && (
              <p className="min-h-[48px] text-[16px] leading-[24px]">{description}</p>
            )}
          </div>
        </div>

        {/* HEX / RGB / CMYK — etiqueta + valor en dos columnas */}
        <div className="flex gap-[16px]">
          <div className="flex flex-col gap-[16px] font-bold text-[16px] leading-[12px]">
            <p>HEX</p>
            {rgb && <p>RGB</p>}
            {cmyk && <p>CMYK</p>}
          </div>
          <div className="flex flex-col gap-[16px] font-normal text-[14px] leading-[12px]">
            <p className="whitespace-nowrap">#{bareHex}</p>
            {rgb && (
              <p className="whitespace-nowrap">
                {rgb.r}, {rgb.g}, {rgb.b}
              </p>
            )}
            {cmyk && (
              <p className="whitespace-nowrap">
                {cmyk.c}, {cmyk.m}, {cmyk.y}, {cmyk.k}
              </p>
            )}
          </div>
        </div>

        {/* Pantone */}
        {pantone && (
          <div className="flex items-center gap-[8px] text-[16px] leading-[24px] whitespace-nowrap">
            <span className="font-bold">P</span>
            <span className="font-normal">{pantone}</span>
          </div>
        )}
      </div>
    </div>
  )
}
