function getRelativeLuminance(hex: string): number {
  const bare = hex.replace(/^#/, '')
  const r = parseInt(bare.slice(0, 2), 16) / 255
  const g = parseInt(bare.slice(2, 4), 16) / 255
  const b = parseInt(bare.slice(4, 6), 16) / 255
  const toLinear = (c: number) => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b)
}

function getAccessibleTextColor(hex: string): string {
  return getRelativeLuminance(hex) > 0.179 ? '#000000' : '#ffffff'
}

function getGradientTextColor(hexTop: string, hexBottom: string): string {
  const avg = (getRelativeLuminance(hexTop) + getRelativeLuminance(hexBottom)) / 2
  return avg > 0.179 ? '#000000' : '#ffffff'
}

/**
 * Tonos casi blancos (brillo/L de HSL entre 98 y 100) necesitan un stroke sutil
 * de 1px (#F2F2F2) para separarse del fondo blanco de la página.
 */
function needsLightStroke(hsl?: { l: string }): boolean {
  if (!hsl) return false
  const l = parseFloat(hsl.l)
  return !Number.isNaN(l) && l >= 98 && l <= 100
}

export interface ColorCardProps {
  /**
   * primary   — fondo sólido, badges WCAG en extremos. Para tonos individuales.
   * secondary — fondo sólido, badges agrupados a la izquierda. Para paletas multi-color.
   * tertiary  — swatch compacto con número de tono, HEX/RGB/HSL y token. Para escalas de tonos.
   * gradient  — fondo degradado con colores superior/inferior, ángulo y uso. Para degradados.
   */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'gradient'
  /** Color CSS de fondo (sólido para primary/secondary/tertiary, CSS gradient string para gradient) */
  color: string
  /** Nombre del color o degradado */
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
  /** Ruta del design token (tertiary) */
  token?: string
  /** Referencia Pantone (primary/secondary) */
  pantone?: string
  /** Nivel WCAG (primary/secondary) */
  accessibilityRating?: string
  /** Ratio de contraste (primary/secondary) */
  contrastRatio?: string
  /** HEX sin # del color superior del degradado (gradient) */
  colorTop?: string
  /** HEX sin # del color inferior del degradado (gradient) */
  colorBottom?: string
  /** Ángulo del degradado, e.g. "180°" (gradient) */
  angle?: string
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
  accessibilityRating,
  contrastRatio,
  colorTop,
  colorBottom,
  angle,
  className = '',
}: ColorCardProps) {
  const bareHex = hex.replace(/^#/, '')
  const textColor = getAccessibleTextColor(hex)
  const autoStroke = needsLightStroke(hsl) ? 'border border-[#F2F2F2]' : ''

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
        <div className="bg-[#e6eef8] content-stretch drop-shadow-[0px_4px_2px_rgba(0,39,90,0.1)] flex flex-col h-[38px] items-start justify-center px-[8px] py-[12px] relative rounded-[6px] shrink-0 w-full">
          <p className="font-normal font-mono leading-[14px] text-[#16181d] text-[12px] whitespace-nowrap">
            {token ?? 'token'}
          </p>
        </div>
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
        {token && (
          <div className="bg-[#e6eef8] drop-shadow-[0px_4px_2px_rgba(0,39,90,0.1)] flex flex-col items-start justify-center px-[8px] py-[12px] rounded-[6px] shrink-0 w-full h-[38px]">
            <p className="font-normal font-mono leading-[14px] text-[#16181d] text-[12px] whitespace-nowrap">
              {token ?? description ?? 'token'}
            </p>
          </div>
        )}
      </div>
    )
  }

  /* ─── Primary & Secondary ─── */
  const isPrimary = variant === 'primary'

  const badgeRowLayout = isPrimary
    ? 'flex items-start justify-between w-full'
    : 'flex items-start gap-[10px]'

  // Badge bg is the inverse of the computed text color for max contrast
  const badgeBg = textColor === '#ffffff' ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)'
  const badgeTextColor = textColor === '#ffffff' ? '#000000' : '#ffffff'

  return (
    <div
      className={`relative rounded-[16px] p-[20px] flex flex-col w-full h-full ${autoStroke} ${className}`}
      style={{ backgroundColor: color }}
    >
      {/* Badge row */}
      <div className={`shrink-0 ${badgeRowLayout}`}>
        {accessibilityRating ? (
          <div className="flex items-center justify-center gap-[10px] px-[14px] py-[10px] rounded-[28px]" style={{ backgroundColor: badgeBg }}>
            <span className="font-semibold leading-none text-[16px] whitespace-nowrap" style={{ color: badgeTextColor }}>
              {accessibilityRating}
            </span>
          </div>
        ) : <span />}
        {contrastRatio && (
          <div
            className="flex items-center justify-center gap-[10px] px-[14px] py-[10px] rounded-[28px]"
            style={{ backgroundColor: badgeBg }}
          >
            <span className="font-semibold leading-none text-[16px] whitespace-nowrap" style={{ color: badgeTextColor }}>
              {contrastRatio}
            </span>
          </div>
        )}
      </div>

      {/* Color info */}
      <div className="flex flex-col flex-1 items-start justify-between min-h-0 mt-[20px] w-full" style={{ color: textColor }}>

        <div className="flex flex-col gap-[6px] w-full shrink-0">
          <p className="font-bold text-[24px] leading-[28px] w-full">{name}</p>
          {description && (
            <p className="font-bold text-[16px] leading-[24px]">{description}</p>
          )}
        </div>

        <div className="flex font-bold text-[16px] leading-[24px] whitespace-nowrap shrink-0 py-[8px]">
          <span>HEX #</span>
          <span>{bareHex}</span>
        </div>

        {(rgb || cmyk) && (
          <div className="flex gap-[20px] font-bold text-[16px] leading-[0] whitespace-nowrap shrink-0">
            {rgb && (
              <div>
                <p className="leading-[24px] mb-0">R {rgb.r}</p>
                <p className="leading-[24px] mb-0">G {rgb.g}</p>
                <p className="leading-[24px]">B {rgb.b}</p>
              </div>
            )}
            {cmyk && (
              <div>
                <p className="leading-[24px] mb-0">C {cmyk.c}</p>
                <p className="leading-[24px] mb-0">M {cmyk.m}</p>
                <p className="leading-[24px] mb-0">Y {cmyk.y}</p>
                <p className="leading-[24px]">K {cmyk.k}</p>
              </div>
            )}
          </div>
        )}

        {pantone && (
          <div className="flex items-center gap-[8px] text-[16px] leading-[24px] whitespace-nowrap shrink-0">
            <span className="font-bold">P</span>
            <span className="font-normal">{pantone}</span>
          </div>
        )}
      </div>
    </div>
  )
}
