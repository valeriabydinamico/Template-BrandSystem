import { ComparisonCard } from '../ComparisonCard'
import { Note } from '../Note'

export interface ComparisonExampleCardProps {
  /** Título del criterio, e.g. "1. Foco y recorte" */
  title: string
  description: string
  /** Texto del banner de advertencia (Note tone="error") debajo de la
   *  comparación — no incluir el prefijo "Evitar:", ya lo agrega la card. */
  warning: string
  /** Imagen del lado correcto. Opcional — placeholder si falta. */
  correctImage?: string
  /** Imagen del lado a evitar. Opcional — placeholder si falta. */
  incorrectImage?: string
  className?: string
}

/**
 * ComparisonExampleCard — la card completa de "así sí / así no": arriba la
 * comparación de dos imágenes (`ComparisonCard`), abajo el título del
 * criterio, su descripción y un banner de advertencia (`Note tone="error"`)
 * explicando qué evitar. Arquitectura de info tomada del board de Figma
 * "15 - Sistema Fotográfico" → "04. Integración fotográfica en layouts"
 * (nodo `16349:437`, "IntegrationCard").
 *
 * Para usar solo la comparación de imágenes sin el título/descripción/nota
 * (ej. dentro de otro layout ya armado), usar `ComparisonCard` directamente.
 */
export function ComparisonExampleCard({
  title,
  description,
  warning,
  correctImage,
  incorrectImage,
  className = '',
}: ComparisonExampleCardProps) {
  return (
    <div
      className={`flex w-full flex-col items-stretch overflow-clip rounded-[16px] border border-[rgba(0,76,151,0.1)] bg-white py-px ${className}`}
    >
      <ComparisonCard correctImage={correctImage} incorrectImage={incorrectImage} />
      <div className="flex w-full flex-col gap-[14px] p-[20px]">
        <p className="font-bold text-[16px] leading-[22px] text-[#16181d]">{title}</p>
        <p className="font-normal text-[13px] leading-[20px] text-[#576175]">{description}</p>
        <Note tone="error">
          <strong className="font-bold">Evitar:</strong> {warning}
        </Note>
      </div>
    </div>
  )
}
