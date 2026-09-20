export interface WireframeCardProps {
  /** Canal/familia del formato, e.g. "WEB", "SOCIAL" */
  channel: string
  /** Nombre del formato, e.g. "Desktop", "Feed Portrait" */
  format: string
  /** Medida en px, e.g. "1440×1024" */
  size: string
  /** Cantidad de columnas de la grilla — define cuántas barras dibuja el wireframe */
  cols: number
  /** Margin en px (solo texto de la leyenda, no afecta el dibujo) */
  margin: number
  /** Gutter en px (solo texto de la leyenda, no afecta el dibujo) */
  gutter: number
  className?: string
}

/**
 * WireframeCard — documenta un formato de referencia de Layout Grids: canal +
 * nombre, medida, y un wireframe neutro con la cantidad real de columnas
 * (`cols`) dibujadas como barras. Las barras de borde se tiñen distinto para
 * sugerir la zona de margin.
 *
 * El wireframe es deliberadamente neutro (sin contenido ni identidad de
 * marca) — documenta estructura de grilla, no una pieza real.
 */
export function WireframeCard({ channel, format, size, cols, margin, gutter, className = '' }: WireframeCardProps) {
  return (
    <div
      className={`flex w-full min-w-0 flex-col gap-[14px] rounded-[16px] border border-[#bac2cf] bg-white p-[20px] ${className}`}
    >
      <div className="flex flex-col gap-[2px]">
        <span className="font-semibold text-[11px] uppercase leading-[14px] tracking-[0.5px] text-[#3d5e87]">
          {channel}
        </span>
        <p className="font-bold text-[16px] leading-[22px] text-[#1c212b]">{format}</p>
      </div>
      <div className="relative w-full overflow-clip rounded-[10px] border border-[#bac2cf] bg-[#f7f9fb] pb-[56%]">
        <span className="absolute inset-x-[9%] inset-y-[13%] rounded-[2px] border-2 border-[#ccdef2]" />
        <span className="absolute inset-x-[13%] inset-y-[22%] flex gap-[2px]">
          {Array.from({ length: cols }).map((_, i) => (
            <span
              key={i}
              className="h-full flex-1 rounded-[1px]"
              style={{ backgroundColor: i === 0 || i === cols - 1 ? '#f4d7c9' : '#e0ebf7' }}
            />
          ))}
        </span>
      </div>
      <div className="flex flex-wrap gap-x-[12px] gap-y-[2px] font-mono text-[11px] leading-[15px] text-[#1c212b]">
        <span>{size}</span>
        <span className="text-[#59667d]">{`${cols} col · M${margin} · G${gutter}`}</span>
      </div>
    </div>
  )
}
