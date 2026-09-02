import { ModuleBadge } from '../ModuleBadge'

export interface PageHeaderProps {
  /** Etiqueta del módulo en el eyebrow, e.g. "Color System" */
  module: string
  /** Título de la página, e.g. "01 Global Colors" */
  title: string
  /**
   * Párrafos de la introducción. Un item vacío (`null` o `''`) renderiza una
   * línea en blanco de separación, igual que en el diseño de Figma.
   */
  paragraphs: Array<string | null>
  /** URL del icono del módulo. Por defecto, el icono de Color System. */
  moduleIconSrc?: string
  className?: string
}

/**
 * PageHeader — encabezado de página del design system (IntroCard).
 *
 * Tarjeta introductoria con eyebrow de módulo, título y copy. Estructura y
 * medidas del board de Figma (F01 Color System · "02 Brand Colors"):
 * contenedor padding 24 · card #d2d8e1 radio 40 · padding 40/48 · gap 32 ·
 * título Inter Bold 48/48 tracking -0.4 #2f3945 · copy Inter Regular 16/24 #4d5965.
 */
export function PageHeader({
  module,
  title,
  paragraphs,
  moduleIconSrc,
  className = '',
}: PageHeaderProps) {
  // Índice del último párrafo con texto: es el único sin margen inferior.
  const lastTextIndex = paragraphs.reduce(
    (last, p, i) => (p ? i : last),
    -1,
  )

  return (
    <div className={`w-full p-[24px] ${className}`}>
      <div className="flex w-full flex-col items-start gap-[32px] rounded-[40px] bg-[#d2d8e1] px-[40px] py-[48px]">
        <ModuleBadge label={module} iconSrc={moduleIconSrc} />

        <div className="flex w-full flex-col items-start gap-[24px]">
          <h1 className="font-bold text-[48px] leading-[48px] tracking-[-0.4px] text-[#2f3945]">
            {title}
          </h1>
          <div className="w-full font-normal text-[16px] leading-[24px] text-[#4d5965]">
            {paragraphs.map((p, i) =>
              p ? (
                <p key={i} className={i === lastTextIndex ? '' : 'mb-0'}>
                  {p}
                </p>
              ) : (
                <p key={i} className="mb-0">
                  &#8203;
                </p>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
