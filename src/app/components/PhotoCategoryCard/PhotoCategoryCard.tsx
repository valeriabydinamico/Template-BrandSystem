import { Image as ImageIcon } from 'lucide-react'
import { Badge } from '../Badge'

export interface PhotoCategoryCardProps {
  /** Foto real de la categoría. Si falta, se muestra un placeholder — las
   *  fotos reales llegan por upload, no se inventan ni se usan stock. */
  image?: string
  /** Nombre de la categoría, e.g. "Personas y lifestyle" */
  title: string
  description: string
  /** Texto de "Uso recomendado" */
  usage: string
  /** Texto de "Tono emocional" */
  tone: string
  /** Pills de contexto de uso, e.g. ["Campañas", "RRSS", "Hero"] */
  tags: string[]
  className?: string
}

function PhotoPlaceholder() {
  return (
    <div className="flex h-[350px] w-full shrink-0 flex-col items-center justify-center gap-[8px] rounded-[12px] border border-[rgba(0,76,151,0.1)] bg-[#eef1f5]">
      <ImageIcon className="size-[32px] text-[#8a94a8]" strokeWidth={1.5} />
      <p className="font-medium text-[13px] leading-[16px] text-[#8a94a8]">Sin foto todavía</p>
    </div>
  )
}

/**
 * PhotoCategoryCard — documenta una categoría del sistema fotográfico de
 * marca: foto de referencia + nombre, descripción, uso recomendado, tono
 * emocional y pills de contexto. Arquitectura de info tomada del board de
 * Figma "15 - Sistema Fotográfico" (nodo 16349:159), adaptada a los
 * componentes/tokens propios de este dashboard.
 *
 * `image` es opcional: las fotos reales de marca llegan por upload del
 * cliente, no se generan ni se usan fotos de stock como relleno — sin foto,
 * la card muestra un placeholder neutro en vez de una imagen inventada.
 */
export function PhotoCategoryCard({ image, title, description, usage, tone, tags, className = '' }: PhotoCategoryCardProps) {
  return (
    <div
      className={`flex w-full flex-col overflow-clip rounded-[16px] border border-[rgba(0,76,151,0.1)] bg-white p-px ${className}`}
    >
      {image ? (
        <img src={image} alt="" className="h-[350px] w-full shrink-0 rounded-[12px] object-cover" />
      ) : (
        <PhotoPlaceholder />
      )}
      <div className="flex w-full flex-col gap-[14px] p-[20px]">
        <p className="font-bold text-[24px] leading-[26px] text-[#16181d]">{title}</p>
        <p className="font-normal text-[16px] leading-[20px] text-[#576175]">{description}</p>
        <div className="flex flex-col gap-[6px]">
          <p className="font-semibold text-[13px] uppercase leading-[16.5px] tracking-[0.5px] text-[#16181d]">
            Uso recomendado
          </p>
          <p className="font-normal text-[16px] leading-[20px] text-[#576175]">{usage}</p>
        </div>
        <div className="flex flex-col gap-[6px]">
          <p className="font-semibold text-[13px] uppercase leading-[16.5px] tracking-[0.5px] text-[#16181d]">
            Tono emocional
          </p>
          <p className="font-normal italic text-[16px] leading-[20px] text-[#576175]">{tone}</p>
        </div>
        <div className="flex flex-wrap items-center gap-[6px]">
          {tags.map((tag) => (
            <Badge key={tag} size="sm">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
