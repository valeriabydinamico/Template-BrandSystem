import { useLayoutEffect, useRef, useState } from 'react'

export interface TokenTagProps {
  /** Ruta o token a mostrar (texto mono) */
  children: string
  /** Fondo de la píldora: `default` (#e6eef8) o `plain` (blanco) */
  tone?: 'default' | 'plain'
  className?: string
}

/**
 * TokenTag — etiqueta gris de ruta/token (aparece al pie de las ColorCards).
 *
 * Si el texto no entra en el ancho disponible se recorta con "…" y, al pasar
 * el cursor, muestra el texto completo en un tooltip. El tooltip solo aparece
 * cuando el texto está realmente recortado.
 *
 * Medidas: fondo #e6eef8 · radio 6 · padding 8/12 · alto 38 · sin sombra ·
 * texto Inter mono 12/14 #16181d.
 */
export function TokenTag({ children, tone = 'default', className = '' }: TokenTagProps) {
  const textRef = useRef<HTMLParagraphElement>(null)
  const [isTruncated, setIsTruncated] = useState(false)

  useLayoutEffect(() => {
    const el = textRef.current
    if (!el) return
    const check = () => setIsTruncated(el.scrollWidth > el.clientWidth + 1)
    check()
    const ro = new ResizeObserver(check)
    ro.observe(el)
    return () => ro.disconnect()
  }, [children])

  return (
    <div
      className={`flex h-[38px] w-full shrink-0 flex-col items-start justify-center rounded-[6px] px-[8px] py-[12px] ${
        tone === 'plain' ? 'bg-white' : 'bg-[#e6eef8]'
      } ${className}`}
    >
      <p
        ref={textRef}
        title={isTruncated ? children : undefined}
        className="w-full truncate font-mono font-normal text-[12px] leading-[14px] text-[#16181d]"
      >
        {children}
      </p>
    </div>
  )
}
