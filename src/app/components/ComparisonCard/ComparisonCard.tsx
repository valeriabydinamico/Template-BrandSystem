import { Image as ImageIcon } from 'lucide-react'
import { Badge } from '../Badge'

export interface ComparisonCardProps {
  /** Imagen del lado correcto — logo, foto, color, lo que corresponda documentar.
   *  Opcional: sin imagen todavía se muestra un placeholder neutro. */
  correctImage?: string
  /** Imagen del lado a evitar. Misma regla: opcional, con placeholder si falta. */
  incorrectImage?: string
  className?: string
}

function Placeholder() {
  return (
    <div className="flex aspect-square w-full items-center justify-center rounded-[12px] border border-[rgba(0,76,151,0.1)] bg-[#eef1f5]">
      <ImageIcon className="size-[28px] text-[#8a94a8]" strokeWidth={1.5} />
    </div>
  )
}

function Side({ tone, image }: { tone: 'success' | 'error'; image?: string }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center gap-[10px]">
      <Badge tone={tone}>{tone === 'success' ? 'Correcto' : 'Evitar'}</Badge>
      {image ? (
        <img
          src={image}
          alt=""
          className="aspect-square w-full rounded-[12px] border border-[rgba(0,76,151,0.1)] bg-white object-contain"
        />
      ) : (
        <Placeholder />
      )}
    </div>
  )
}

/**
 * ComparisonCard — documenta la forma correcta e incorrecta de usar algo
 * (un logo, una foto, un color, un componente…) comparando dos imágenes lado
 * a lado, cada una con su pill "Correcto" (verde) / "Evitar" (rojo).
 * Arquitectura de info tomada del board de Figma "15 - Sistema Fotográfico"
 * → "04. Integración fotográfica en layouts" (nodo 16349:437), generalizada:
 * en Figma son mockups de producto; acá siempre son dos imágenes, sin
 * asumir de qué tipo de asset se trata.
 *
 * Ambas imágenes son opcionales — sin ellas todavía se muestra el mismo
 * placeholder neutro que el resto de las cards de imagen (`PhotoCategoryCard`,
 * `ImageCriteriaCard`): nunca assets inventados o de stock como relleno.
 *
 * Para agregar contexto de "por qué evitarlo", combinar con `<Note tone="error">`
 * debajo de la card (ver handbook de `Note`).
 */
export function ComparisonCard({ correctImage, incorrectImage, className = '' }: ComparisonCardProps) {
  return (
    <div className={`flex w-full items-start gap-[32px] rounded-[12px] bg-[#e6eef8] p-[32px] ${className}`}>
      <Side tone="success" image={correctImage} />
      <Side tone="error" image={incorrectImage} />
    </div>
  )
}
