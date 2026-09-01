export function BrandColorsPage() {
  return (
    <div className="flex flex-col gap-2xl">
      <div className="flex flex-col gap-xs pb-lg border-b border-border-primary">
        <h2 className="text-heading text-text-primary">Brand colors</h2>
        <p className="text-label-sm text-text-secondary">
          Colores de marca: primarios, secundarios y degradados con sus valores WCAG.
        </p>
      </div>
      <div className="flex items-center justify-center min-h-[320px]">
        <p className="text-label-sm text-text-tertiary">
          Agrega aquí los colores de marca con sus variantes primary, secondary y gradient.
        </p>
      </div>
    </div>
  )
}
