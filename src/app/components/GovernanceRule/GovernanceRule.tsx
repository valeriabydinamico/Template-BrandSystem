export interface GovernanceRuleProps {
  /** Número de la regla (se muestra en el círculo) */
  number: number
  /** Texto de la regla */
  children: React.ReactNode
  className?: string
}

/**
 * GovernanceRule — fila numerada dentro del bloque "Gobernanza del color de marca".
 *
 * Medidas exactas (Figma · 02 Brand Colors):
 * fondo #f1f4f7 · borde #dce3ea · gap 16px · padding 21/19 · radio 12px ·
 * círculo #596879 26px · número Inter Semi Bold 13px #fff leading 19.5px ·
 * cuerpo Inter Regular 16px #4d5965 leading 24px.
 */
export function GovernanceRule({ number, children, className = '' }: GovernanceRuleProps) {
  return (
    <div
      className={`flex w-full shrink-0 items-center gap-[16px] rounded-[12px] border border-[#dce3ea] bg-[#f1f4f7] px-[21px] py-[19px] ${className}`}
    >
      <div className="flex size-[26px] shrink-0 items-center justify-center rounded-[999px] bg-[#596879]">
        <span className="whitespace-nowrap font-semibold text-[13px] leading-[19.5px] text-white">
          {number}
        </span>
      </div>
      <p className="flex-1 font-normal text-[16px] leading-[24px] text-[#4d5965]">{children}</p>
    </div>
  )
}
