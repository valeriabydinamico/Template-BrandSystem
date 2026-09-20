import { Check, X } from 'lucide-react'
import noteIcon from '@/assets/note-info-icon.svg'

export interface NoteProps {
  /** Texto de la nota */
  children: React.ReactNode
  /** `warning` (por defecto, tono original naranja) | `error` | `success` */
  tone?: 'warning' | 'error' | 'success'
  className?: string
}

const TONES = {
  warning: {
    border: 'border-[rgba(173,83,1,0.5)]',
    bg: 'bg-[#fdf6f0]',
    text: 'text-[#ad5301]',
  },
  error: {
    border: 'border-[rgba(208,2,27,0.15)]',
    bg: 'bg-[rgba(208,2,27,0.04)]',
    text: 'text-[#d0021b]',
  },
  success: {
    border: 'border-[rgba(0,153,80,0.2)]',
    bg: 'bg-[rgba(0,153,80,0.08)]',
    text: 'text-[#009950]',
  },
} as const

function ToneIcon({ tone }: { tone: NonNullable<NoteProps['tone']> }) {
  if (tone === 'error') return <X className="size-[16px] text-[#d0021b]" strokeWidth={2.5} />
  if (tone === 'success') return <Check className="size-[16px] text-[#009950]" strokeWidth={2.5} />
  return <img src={noteIcon} alt="" className="block size-[16px]" />
}

/**
 * Note — nota informativa (aparece bajo las grillas de tokens del Color System
 * para aclarar decisiones de diseño: qué puede cambiar por proyecto, cómo se
 * comporta un estado, etc.). También se usa como banner de advertencia dentro
 * de cards de "así sí / así no" (ej. `ComparisonCard`), con tono `error`.
 *
 * Medidas exactas del diseño (Figma · 02 Brand Colors, tono `warning`):
 * radio 10 · padding 12 · icono 16 · gap 8 · texto Inter Regular 14/20.
 * `error`/`success` mantienen la misma estructura, solo cambian color + ícono
 * (Figma · 15 Sistema Fotográfico, banner "Evitar" del nodo 16349:554).
 *
 * El icono se alinea a la primera línea del texto: va dentro de una caja de
 * `leading` (20px) centrada, y el contenedor usa `items-start`. Con una sola
 * línea, esa caja ocupa todo el alto y el icono queda centrado.
 */
export function Note({ children, tone = 'warning', className = '' }: NoteProps) {
  const t = TONES[tone]
  return (
    <div
      className={`flex w-full items-start justify-between rounded-[10px] border ${t.border} ${t.bg} p-[12px] ${className}`}
    >
      <div className="flex min-w-0 flex-1 items-start gap-[8px]">
        <span className="flex h-[20px] shrink-0 items-center">
          <ToneIcon tone={tone} />
        </span>
        <p className={`min-w-0 flex-1 font-normal text-[14px] leading-[20px] [word-break:break-word] ${t.text}`}>
          {children}
        </p>
      </div>
    </div>
  )
}
