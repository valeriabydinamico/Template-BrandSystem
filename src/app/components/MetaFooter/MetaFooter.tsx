export interface MetaFooterProps {
  /** Texto de versión/página, e.g. "v1 · 03 Semantic Colors · Master Template" */
  label: string
  /** Texto de la pastilla de estado (por defecto "Master") */
  status?: string
  className?: string
}

/**
 * MetaFooter — barra final de las páginas del Color System: metadato de versión
 * a la izquierda y pastilla de estado a la derecha.
 *
 * Medidas exactas (Figma · meta-footer):
 * alto 72 · banda #44515f · borde-sup #c6d0da · padding-x 80 · metadato Inter
 * Medium 13 #fff opacidad 72% · pastilla blanca borde #b9c3ce radio 999
 * padding 16/8 · texto Inter Semi Bold 12 #44515f.
 */
export function MetaFooter({ label, status = 'Master', className = '' }: MetaFooterProps) {
  return (
    <div
      className={`flex h-[72px] w-full items-center justify-between border-t border-[#c6d0da] bg-[#44515f] px-[80px] ${className}`}
    >
      <p className="whitespace-nowrap font-medium text-[13px] text-white opacity-[0.72]">{label}</p>
      <div className="rounded-[999px] border border-[#b9c3ce] bg-white px-[16px] py-[8px]">
        <p className="whitespace-nowrap font-semibold text-[12px] text-[#44515f]">{status}</p>
      </div>
    </div>
  )
}
