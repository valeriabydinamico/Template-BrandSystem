export interface BadgeProps {
  /** Texto de la etiqueta */
  children: React.ReactNode
  /** `default` (38px, Figma · 02 Brand Colors) o `sm` — versión chica para
   *  contextos más compactos, ej. pills dentro de una card (`PhotoCategoryCard`). */
  size?: 'default' | 'sm'
  /** `brand` (por defecto, azul) | `error` | `success` | `warning` — mismos
   *  colores semánticos que Semantic Colors (roles de texto/fondo de estado).
   *  Usado por `ComparisonCard` para las pills "Correcto" (success) / "Evitar" (error). */
  tone?: 'brand' | 'error' | 'success' | 'warning'
  className?: string
}

const SIZES = {
  default: 'h-[38px] rounded-[24px] px-[16px] py-[6px]',
  sm: 'h-[28px] rounded-[999px] px-[12px] py-[5px]',
} as const

const TEXT_SIZES = {
  default: 'text-[16px] font-bold',
  sm: 'text-[13px] font-semibold',
} as const

const TONES = {
  brand: { border: 'border-[rgba(0,76,151,0.15)]', bg: 'bg-[#e6f2ff]', text: 'text-[#004c97]' },
  error: { border: 'border-[rgba(208,2,27,0.15)]', bg: 'bg-[rgba(208,2,27,0.04)]', text: 'text-[#d0021b]' },
  success: { border: 'border-[rgba(0,153,80,0.3)]', bg: 'bg-[rgba(0,153,80,0.12)]', text: 'text-[#009950]' },
  warning: { border: 'border-[rgba(146,64,14,0.3)]', bg: 'bg-[rgba(146,64,14,0.08)]', text: 'text-[#92400e]' },
} as const

/**
 * Badge / etiqueta de uso.
 *
 * Píldora azul usada en las listas "usage-list" del Color System para enumerar
 * los casos de uso de cada rol cromático (CTA's, Headers, Backgrounds…).
 *
 * Medidas exactas del diseño (Figma · 02 Brand Colors, tamaño `default`,
 * tono `brand`): fondo #e6f2ff · borde rgba(0,76,151,0.15) · alto 38px ·
 * padding 16/6 · radio 24px · texto Inter Bold 16px #004c97. El tamaño `sm`
 * mantiene el mismo lenguaje en una pastilla más chica.
 *
 * Tonos `error`/`success`/`warning` (Figma · 15 Sistema Fotográfico, pills
 * "Correcto"/"Evitar" del nodo 16349:437): mismos colores que los roles de
 * estado de Semantic Colors (`#d0021b`, `#009950`, `#92400e`).
 */
export function Badge({ children, size = 'default', tone = 'brand', className = '' }: BadgeProps) {
  const t = TONES[tone]
  return (
    <div className={`flex shrink-0 items-center justify-center border ${t.border} ${t.bg} ${SIZES[size]} ${className}`}>
      <span className={`whitespace-nowrap leading-normal ${t.text} ${TEXT_SIZES[size]}`}>{children}</span>
    </div>
  )
}
