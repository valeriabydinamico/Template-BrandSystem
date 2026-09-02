import { PageHeader } from './PageHeader'
import typeBadgeIcon from '@/assets/type-badge-icon.svg'

/**
 * TypographyPage — placeholder.
 *
 * Solo el encabezado por ahora; el contenido (escala, familias, estilos de
 * texto) se traerá desde Figma con la misma estructura que las páginas de color.
 */
export function TypographyPage() {
  return (
    <div className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Type System"
        moduleIconSrc={typeBadgeIcon}
        title="Typography"
        paragraphs={[
          'Escala tipográfica, familias y estilos de texto que dan voz al sistema.',
          null,
          'Pendiente de contenido — se documentará desde Figma con la misma estructura que las páginas de color.',
        ]}
      />
    </div>
  )
}
