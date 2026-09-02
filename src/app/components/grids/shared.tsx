import type { ReactNode } from 'react'

/* ────────────────────────────────────────────────────────────────────────────
 * Piezas compartidas por las páginas de Grids (System + Application).
 * Lenguaje visual del board de Figma: títulos #1c212b · texto #59667d ·
 * bordes #bac2cf · superficies #f1f4f7 / #f7f9fb.
 * ────────────────────────────────────────────────────────────────────────── */

export function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex w-full flex-col gap-[8px]">
      <h2 className="font-bold text-[28px] leading-[34px] tracking-[-0.2px] text-[#1c212b]">
        {title}
      </h2>
      <p className="w-full font-normal text-[15px] leading-[22px] text-[#59667d]">{description}</p>
    </div>
  )
}

/** Callout "referencia configurable" (fondo claro + borde). */
export function RefNote({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex w-full flex-col gap-[8px] rounded-[12px] border border-[#bac2cf] bg-[#f7f9fb] px-[20px] py-[18px]">
      <p className="font-semibold text-[14px] leading-[20px] text-[#1c212b]">{title}</p>
      <p className="font-normal text-[13px] leading-[20px] text-[#59667d]">{children}</p>
    </div>
  )
}
