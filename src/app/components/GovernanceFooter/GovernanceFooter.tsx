import { GovernanceRule } from '../GovernanceRule'
import governanceIcon from '@/assets/governance-icon.svg'

export interface GovernanceFooterProps {
  /** Texto pequeño sobre el título */
  eyebrow?: string
  /** Título del bloque */
  title: string
  /** Reglas numeradas (una por fila) */
  rules: string[]
  className?: string
}

/**
 * GovernanceFooter — bloque "Gobernanza" al pie de las páginas del Color System.
 *
 * Encabezado (icono + eyebrow + título) sobre una línea divisoria y, debajo, la
 * lista de reglas numeradas (`GovernanceRule`).
 *
 * Medidas exactas (Figma · governance-footer):
 * banda #d2d8e1 padding 48/40 · card #fafbfc borde #b9c3ce radio 24 · interior
 * padding 32 gap 18 · header gap 14 divisoria rgba(170,182,194,0.35) pb 29 ·
 * contenedor de icono 40 radio 10 borde 1.5 #596879 fondo #e8edf2 · icono 20 ·
 * eyebrow Inter Medium 14 uppercase tracking .65 #596879 · título Inter Bold 24 #2f3945.
 */
export function GovernanceFooter({
  eyebrow = 'Guías de uso',
  title,
  rules,
  className = '',
}: GovernanceFooterProps) {
  return (
    <div
      className={`flex w-full flex-col items-start bg-[#d2d8e1] px-[40px] py-[48px] ${className}`}
    >
      <div className="w-full rounded-[24px] border border-[#b9c3ce] bg-[#fafbfc]">
        <div className="flex flex-col items-start gap-[18px] p-[32px]">
          {/* governance-header */}
          <div className="flex w-full items-center gap-[14px] border-b border-[rgba(170,182,194,0.35)] pb-[29px]">
            <div className="flex size-[40px] shrink-0 items-center justify-center rounded-[10px] border-[1.5px] border-[#596879] bg-[#e8edf2]">
              <img src={governanceIcon} alt="" className="block size-[20px]" />
            </div>
            <div className="flex flex-col items-start gap-[2px]">
              <p className="font-medium text-[14px] uppercase leading-[19.5px] tracking-[0.65px] text-[#596879]">
                {eyebrow}
              </p>
              <p className="font-bold text-[24px] leading-[26.4px] text-[#2f3945]">{title}</p>
            </div>
          </div>

          {rules.map((rule, i) => (
            <GovernanceRule key={i} number={i + 1}>
              {rule}
            </GovernanceRule>
          ))}
        </div>
      </div>
    </div>
  )
}
