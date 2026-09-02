import type { CSSProperties, ReactNode } from 'react'

/* ────────────────────────────────────────────────────────────────────────────
 * Piezas compartidas por las páginas de documentación (Typography, Visual
 * Styles, Grids…). No son componentes del design system que se documenta:
 * son utilidades de layout de las páginas de la doc.
 *
 * Paleta: títulos #1c212b · texto #59667d · bordes #b9c3ce / #bac2cf ·
 * superficies #f1f4f7 / #f7f9fb · radios 10/12/16.
 * ────────────────────────────────────────────────────────────────────────── */

/** Cabecera de sección: título + descripción. */
export function SectionHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="flex w-full flex-col gap-[8px]">
      <h2 className="font-bold text-[28px] leading-[34px] tracking-[-0.2px] text-[#1c212b]">
        {title}
      </h2>
      <p className="w-full font-normal text-[15px] leading-[22px] text-[#59667d]">{description}</p>
    </div>
  )
}

/**
 * Callout aclaratorio bajo una sección (QA interno, relación con otra escala,
 * "referencia configurable"…). Fondo claro + borde, sin color de acento.
 */
export function DocNote({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex w-full flex-col gap-[8px] rounded-[12px] border border-[#bac2cf] bg-[#f7f9fb] px-[20px] py-[18px]">
      <p className="font-semibold text-[14px] leading-[20px] text-[#1c212b]">{title}</p>
      <p className="font-normal text-[13px] leading-[20px] text-[#59667d]">{children}</p>
    </div>
  )
}

/** Caja de vista previa de un estilo tipográfico (label + muestra). */
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
