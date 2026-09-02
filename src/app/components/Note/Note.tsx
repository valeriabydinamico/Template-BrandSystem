import noteIcon from '@/assets/note-info-icon.svg'

export interface NoteProps {
  /** Texto de la nota */
  children: React.ReactNode
  className?: string
}

/**
 * Note — nota informativa (aparece bajo las grillas de tokens del Color System
 * para aclarar decisiones de diseño: qué puede cambiar por proyecto, cómo se
 * comporta un estado, etc.).
 *
 * Medidas exactas del diseño (Figma · 03 Semantic Colors · `nota-01-*`):
 * fondo #fdf6f0 · borde rgba(173,83,1,0.5) · radio 10 · padding 15/19 ·
 * icono 16 · gap 16 · texto Inter Medium 16/20 #ad5301.
 */
export function Note({ children, className = '' }: NoteProps) {
  return (
    <div
      className={`flex w-full items-center justify-between rounded-[10px] border border-[rgba(173,83,1,0.5)] bg-[#fdf6f0] px-[19px] py-[15px] ${className}`}
    >
      <div className="flex min-w-0 flex-1 items-center gap-[16px]">
        <img src={noteIcon} alt="" className="block size-[16px] shrink-0" />
        <p className="min-w-0 flex-1 font-medium text-[16px] leading-[20px] text-[#ad5301] [word-break:break-word]">
          {children}
        </p>
      </div>
    </div>
  )
}
