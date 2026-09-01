export function SemanticColorsPage() {
  return (
    <div className="flex flex-col gap-2xl">
      <div className="flex flex-col gap-xs pb-lg border-b border-border-primary">
        <h2 className="text-heading text-text-primary">Semantic colors</h2>
        <p className="text-label-sm text-text-secondary">
          Tokens semánticos: colores con significado funcional (estado, feedback, superficie, texto, borde).
        </p>
      </div>
      <div className="flex items-center justify-center min-h-[320px]">
        <p className="text-label-sm text-text-tertiary">
          Agrega aquí los tokens semánticos agrupados por categoría.
        </p>
      </div>
    </div>
  )
}
