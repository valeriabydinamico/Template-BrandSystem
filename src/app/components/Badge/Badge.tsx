export interface BadgeProps {
  /** Texto de la etiqueta */
  children: React.ReactNode
  /** `default` (38px, Figma · 02 Brand Colors) o `sm` — versión chica para
   *  contextos más compactos, ej. pills dentro de una card (`PhotoCategoryCard`). */
  size?: 'default' | 'sm'
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

/**
 * Badge / etiqueta de uso.
 *
 * Píldora azul usada en las listas "usage-list" del Color System para enumerar
 * los casos de uso de cada rol cromático (CTA's, Headers, Backgrounds…).
 *
 * Medidas exactas del diseño (Figma · 02 Brand Colors, tamaño `default`):
 * fondo #e6f2ff · borde rgba(0,76,151,0.15) · alto 38px · padding 16/6 ·
 * radio 24px · texto Inter Bold 16px #004c97. El tamaño `sm` mantiene el
 * mismo lenguaje (fondo/borde/color) en una pastilla más chica.
 */
export function Badge({ children, size = 'default', className = '' }: BadgeProps) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center border border-[rgba(0,76,151,0.15)] bg-[#e6f2ff] ${SIZES[size]} ${className}`}
    >
      <span className={`whitespace-nowrap leading-normal text-[#004c97] ${TEXT_SIZES[size]}`}>{children}</span>
    </div>
  )
}
