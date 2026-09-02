export interface BadgeProps {
  /** Texto de la etiqueta */
  children: React.ReactNode
  className?: string
}

/**
 * Badge / etiqueta de uso.
 *
 * Píldora azul usada en las listas "usage-list" del Color System para enumerar
 * los casos de uso de cada rol cromático (CTA's, Headers, Backgrounds…).
 *
 * Medidas exactas del diseño (Figma · 02 Brand Colors):
 * fondo #e6f2ff · borde rgba(0,76,151,0.15) · alto 38px · padding 16/6 ·
 * radio 24px · texto Inter Bold 16px #004c97.
 */
export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <div
      className={`flex h-[38px] shrink-0 items-center justify-center rounded-[24px] border border-[rgba(0,76,151,0.15)] bg-[#e6f2ff] px-[16px] py-[6px] ${className}`}
    >
      <span className="whitespace-nowrap font-bold text-[16px] leading-normal text-[#004c97]">
        {children}
      </span>
    </div>
  )
}
