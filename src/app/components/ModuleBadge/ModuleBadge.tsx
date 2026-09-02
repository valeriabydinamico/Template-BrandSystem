import colorSystemIcon from '@/assets/color-system-badge-icon.svg'

export interface ModuleBadgeProps {
  /** Nombre del módulo, e.g. "Color System" */
  label: string
  /** URL del icono (24×24). Por defecto, el icono del módulo Color System. */
  iconSrc?: string
  className?: string
}

/**
 * ModuleBadge — eyebrow con icono que identifica el módulo del design system
 * al que pertenece la página (aparece dentro del IntroCard).
 *
 * Medidas exactas (Figma · 02 Brand Colors):
 * fondo #f6f8fa · borde #c4c9d4 · gap 8px · padding 11/8 · radio 12px ·
 * caja de icono #596879 32px radio 12px padding 4px · icono 24px ·
 * texto Inter Semi Bold 16px #465463 leading 30.6px.
 */
export function ModuleBadge({ label, iconSrc = colorSystemIcon, className = '' }: ModuleBadgeProps) {
  return (
    <div
      className={`flex shrink-0 items-center gap-[8px] rounded-[12px] border border-[#c4c9d4] bg-[#f6f8fa] px-[11px] py-[8px] ${className}`}
    >
      <div className="flex size-[32px] shrink-0 items-center justify-center rounded-[12px] bg-[#596879] p-[4px]">
        <img src={iconSrc} alt="" className="block size-[24px]" />
      </div>
      <p className="whitespace-nowrap font-semibold text-[16px] leading-[30.6px] text-[#465463]">
        {label}
      </p>
    </div>
  )
}
