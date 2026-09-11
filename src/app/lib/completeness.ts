/**
 * Motor de completitud de datos — implementa la regla:
 * "todo campo hardcodeado (dato manual de marca) es obligatorio; lo único
 * que no lo es, son los campos que el propio componente calcula solo
 * (ej. ratio de contraste / nivel WCAG)".
 *
 * Un item con TODOS sus campos obligatorios presentes se muestra. Si falta
 * alguno (parcial) o todos (sin datos), se oculta — y queda registrado acá
 * para que `RegistroPage` lo liste con el detalle de qué falta.
 *
 * Usado por `src/app/lib/siteCompleteness.ts`, que centraliza los reportes de
 * cada página para que tanto la página en sí como el registro lean del mismo
 * cálculo.
 */

export type FieldStatus = 'complete' | 'partial' | 'missing'

export interface RequiredField<T> {
  key: keyof T
  label: string
}

export interface HiddenEntry {
  module: string
  section: string
  item: string
  status: 'partial' | 'missing'
  missingFields: string[]
}

export interface SectionReport<T> {
  module: string
  section: string
  visible: T[]
  hidden: HiddenEntry[]
}

function isEmpty(value: unknown): boolean {
  if (value === undefined || value === null) return true
  if (typeof value === 'string') return value.trim() === ''
  return false
}

/** Evalúa un item contra su lista de campos obligatorios. */
export function evaluateItem<T extends object>(
  item: T,
  fields: RequiredField<T>[],
): { status: FieldStatus; missing: string[] } {
  const missing = fields.filter((f) => isEmpty(item[f.key])).map((f) => f.label)
  if (missing.length === 0) return { status: 'complete', missing: [] }
  if (missing.length === fields.length) return { status: 'missing', missing }
  return { status: 'partial', missing }
}

/**
 * Evalúa una lista de items de una sección: separa los completos (se
 * muestran, en `visible`) de los incompletos (se ocultan, quedan en
 * `hidden` con motivo + campos faltantes).
 */
export function evaluateSection<T extends object>(
  module: string,
  section: string,
  items: T[],
  fields: RequiredField<T>[],
  labelOf: (item: T, index: number) => string,
): SectionReport<T> {
  const visible: T[] = []
  const hidden: HiddenEntry[] = []
  items.forEach((item, i) => {
    const { status, missing } = evaluateItem(item, fields)
    if (status === 'complete') {
      visible.push(item)
    } else {
      hidden.push({ module, section, item: labelOf(item, i), status, missingFields: missing })
    }
  })
  return { module, section, visible, hidden }
}
