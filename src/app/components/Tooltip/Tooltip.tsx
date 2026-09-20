import { useEffect, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

export type TooltipPlacement = 'top' | 'right'

export interface TooltipProps {
  /** Texto del tooltip. */
  label: string
  /** `top` (por defecto, centrado arriba) o `right` (a la derecha, vertical
   *  centrado — usado por el sidebar, donde arriba/abajo choca con otros
   *  ítems del rail). */
  placement?: TooltipPlacement
  /** Clases del `span` que envuelve el trigger (ej. `w-full` para que un
   *  hijo con `w-full` no pierda su ancho al quedar dentro de un `inline-flex`). */
  wrapperClassName?: string
  children: ReactNode
}

/**
 * Tooltip — reemplaza el `title` nativo del navegador en todo el dashboard
 * (ej. `TokenTag` cuando el texto se recorta, `IconButton` del sidebar).
 * Mismo diseño en toda la app, sobre fondo claro u oscuro: fondo `#1c1f26`,
 * borde `#262b35`, texto `#e3e7ee`.
 *
 * Portal a `body` + `position: fixed` (posición calculada con
 * `getBoundingClientRect`) para no quedar recortado por un ancestro con
 * `overflow: hidden` (ej. el `nav` del sidebar).
 */
export function Tooltip({ label, placement = 'top', wrapperClassName = '', children }: TooltipProps) {
  const [show, setShow] = useState(false)
  const [pos, setPos] = useState({ top: 0, left: 0 })
  const wrapRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!show) return
    const r = wrapRef.current?.getBoundingClientRect()
    if (!r) return
    setPos(
      placement === 'right'
        ? { top: r.top + r.height / 2, left: r.right + 10 }
        : { top: r.top - 8, left: r.left + r.width / 2 },
    )
  }, [show, placement])

  return (
    <span
      ref={wrapRef}
      className={`inline-flex ${wrapperClassName}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}
      {show &&
        createPortal(
          <span
            role="tooltip"
            style={{
              position: 'fixed',
              top: pos.top,
              left: pos.left,
              transform: placement === 'right' ? 'translateY(-50%)' : 'translate(-50%, -100%)',
            }}
            className="pointer-events-none z-[9999] whitespace-nowrap rounded-[8px] border border-[#262b35] bg-[#1c1f26] px-[10px] py-[6px] text-[12px] font-medium text-[#e3e7ee] shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
          >
            {label}
          </span>,
          document.body,
        )}
    </span>
  )
}
