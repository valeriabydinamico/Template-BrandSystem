import type { CSSProperties } from 'react'

/* ────────────────────────────────────────────────────────────────────────────
 * Piezas compartidas por las páginas de Typography (Foundations + System).
 *
 * Lenguaje visual: mismo que el resto de la documentación —
 *   títulos #2f3945 · texto #5f6b78 · bordes #b9c3ce / #e3e7ee ·
 *   superficies #f1f4f7 / #f7f9fb · radios 10/12/16.
 *
 * FONT = configuración de ejemplo del master (se sustituye por proyecto).
 * Las variables CSS viven en `src/styles/fonts.css`.
 * ────────────────────────────────────────────────────────────────────────── */

export const FONT = {
  /** Manrope — tipografía primaria de marca */
  brand: "'Manrope', 'Inter', sans-serif",
  /** Source Serif 4 — apoyo editorial */
  editorial: "'Source Serif 4', Georgia, serif",
  /** Inter — tipografía funcional / producto */
  functional: "'Inter', sans-serif",
}

/** Cabecera de sección (título + descripción). */
export function SectionHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="flex w-full flex-col gap-[8px]">
      <h2 className="font-bold text-[28px] leading-[34px] tracking-[-0.2px] text-[#2f3945]">
        {title}
      </h2>
      <p className="w-full font-normal text-[15px] leading-[22px] text-[#5f6b78]">{description}</p>
    </div>
  )
}

/** Caja de vista previa de un estilo tipográfico. */
export function TypePreview({
  label = 'Ejemplo configurado',
  text,
  style,
  className = '',
}: {
  label?: string
  text: string
  style: CSSProperties
  className?: string
}) {
  return (
    <div
      className={`flex w-full flex-col gap-[8px] overflow-hidden rounded-[12px] bg-[#f1f4f7] px-[18px] py-[14px] ${className}`}
    >
      <p className="font-medium text-[12px] leading-[15px] text-[#5f6b78]">{label}</p>
      <p className="truncate text-[#2f3945]" style={style}>
        {text}
      </p>
    </div>
  )
}

/** Fila etiqueta + valor dentro de una card de especificación. */
export function MetaRow({
  label,
  value,
  valueStyle,
}: {
  label: string
  value: string
  valueStyle?: CSSProperties
}) {
  return (
    <div className="flex w-full flex-wrap items-baseline gap-x-[16px] gap-y-[2px] rounded-[10px] bg-[#f1f4f7] p-[14px]">
      <p className="w-[180px] max-w-full shrink-0 font-medium text-[13px] leading-[18px] text-[#5f6b78]">
        {label}
      </p>
      <p
        className="min-w-0 flex-1 font-medium text-[14px] leading-[19px] text-[#2f3945]"
        style={valueStyle}
      >
        {value}
      </p>
    </div>
  )
}

/** Callout de QA interno (no es una regla visual para el cliente). */
export function QANote({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col gap-[6px] rounded-[12px] border border-[#b9c3ce] bg-[#f7f9fb] p-[18px]">
      <p className="font-semibold text-[14px] leading-[20px] text-[#465463]">{title}</p>
      <p className="font-normal text-[14px] leading-[20px] text-[#5f6b78]">{children}</p>
    </div>
  )
}
