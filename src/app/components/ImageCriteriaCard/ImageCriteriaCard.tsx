import { Check, X, Image as ImageIcon } from 'lucide-react'

export interface ImageCriteriaCardProps {
  /** Foto de referencia del criterio. Si falta, se muestra un placeholder —
   *  las fotos reales llegan por upload, no se inventan ni se usan stock. */
  image?: string
  /** Nombre del criterio, e.g. "Paleta de luz", "Encuadres" */
  title: string
  description: string
  /** Texto del tag verde (✓) — qué sí hacer */
  recommended: string
  /** Texto del tag rojo (✕) — qué evitar */
  avoid: string
  className?: string
}

function PhotoPlaceholder() {
  return (
    <div className="flex h-[300px] w-full shrink-0 flex-col items-center justify-center gap-[8px] rounded-[12px] border border-[rgba(0,76,151,0.1)] bg-[#eef1f5]">
      <ImageIcon className="size-[28px] text-[#8a94a8]" strokeWidth={1.5} />
      <p className="font-medium text-[12px] leading-[15px] text-[#8a94a8]">Sin foto todavía</p>
    </div>
  )
}

function Tag({ tone, children }: { tone: 'do' | 'dont'; children: string }) {
  const isDo = tone === 'do'
  return (
    <div
      className={`flex h-[48px] flex-1 items-center gap-[12px] rounded-[8px] border px-[11px] py-[6px] ${
        isDo
          ? 'border-[rgba(0,153,80,0.3)] bg-[rgba(0,153,80,0.12)]'
          : 'border-[rgba(208,2,27,0.3)] bg-[rgba(208,2,27,0.1)]'
      }`}
    >
      {isDo ? (
        <Check className="size-[14px] shrink-0 text-[#009950]" strokeWidth={2.5} />
      ) : (
        <X className="size-[14px] shrink-0 text-[#d0021b]" strokeWidth={2.5} />
      )}
      <p className={`font-medium text-[12px] leading-[14px] ${isDo ? 'text-[#009950]' : 'text-[#d0021b]'}`}>
        {children}
      </p>
    </div>
  )
}

/**
 * ImageCriteriaCard — documenta un criterio (dirección visual, característica,
 * forma de uso…) con nombre + descripción, foto de referencia y un par de
 * tags Do/Don't. Genérico: no es exclusivo de fotografía — cualquier sección
 * que necesite documentar "así sí / así no" con imagen puede reusarlo.
 * Arquitectura de info tomada del board de Figma "15 - Sistema Fotográfico"
 * → "02. Dirección visual" (nodo 16349:266).
 *
 * `image` es opcional: sin foto todavía se muestra un placeholder neutro —
 * igual criterio que `PhotoCategoryCard`, nunca fotos de stock de relleno.
 */
export function ImageCriteriaCard({
  image,
  title,
  description,
  recommended,
  avoid,
  className = '',
}: ImageCriteriaCardProps) {
  return (
    <div
      className={`flex w-full flex-col gap-[24px] rounded-[16px] border border-[#e0e7f0] bg-white p-[24px] ${className}`}
    >
      <div className="flex flex-col gap-[12px]">
        <p className="font-semibold text-[16px] leading-[21px] text-[#16181d]">{title}</p>
        <p className="font-normal text-[13px] leading-[19px] text-[#576175]">{description}</p>
      </div>
      {image ? (
        <img src={image} alt="" className="h-[300px] w-full shrink-0 rounded-[12px] object-cover" />
      ) : (
        <PhotoPlaceholder />
      )}
      <div className="flex w-full items-stretch gap-[8px]">
        <Tag tone="do">{recommended}</Tag>
        <Tag tone="dont">{avoid}</Tag>
      </div>
    </div>
  )
}
