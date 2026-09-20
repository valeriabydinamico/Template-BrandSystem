import type { RequiredField } from '../lib/completeness'

/* ────────────────────────────────────────────────────────────────────────────
 * Datos — Typography Foundations (Figma · 01 Typography Foundations,
 * nodo 196:6664).
 *
 * Cada entrada es un rol tipográfico (familia de marca, funcional, CTA…).
 * Todos los campos son opcionales a nivel de tipo porque pueden faltar en el
 * .md de intake — `TYPE_SPEC_FIELDS` define cuáles son obligatorios para que
 * el rol se muestre (ver `src/app/lib/completeness.ts`).
 *
 * `optional` es estructural (marca el badge "Opcional" en la card, una nota
 * de gobernanza de marca) y no es un campo del intake ni afecta si el rol se
 * muestra — eso lo decide únicamente `TYPE_SPEC_FIELDS`.
 * ────────────────────────────────────────────────────────────────────────── */

export interface TypeSpecEntry {
  title?: string
  description?: string
  family?: string
  weights?: string
  role?: string
  usage?: string
  optional?: boolean
}

export const TYPE_SPEC_FIELDS: RequiredField<TypeSpecEntry>[] = [
  { key: 'title', label: 'Nombre del rol' },
  { key: 'description', label: 'Descripción' },
  { key: 'family', label: 'Familia configurada' },
  { key: 'weights', label: 'Pesos aprobados' },
  { key: 'role', label: 'Rol principal' },
  { key: 'usage', label: 'Uso recomendado' },
]

export const BRAND_PRIMARY: TypeSpecEntry = {
  title: 'Tipografía primaria de marca',
  description:
    'Familia principal para titulares de marca, campañas, storytelling y comunicación editorial.',
  family: 'Manrope',
  weights: 'Medium · Semi Bold · Bold',
  role: 'Marca / Jerarquía editorial',
  usage: 'Display · Headlines · Campaigns · Storytelling',
}

export const BRAND_SECONDARY: TypeSpecEntry = {
  title: 'Tipografía secundaria de marca',
  optional: true,
  description:
    'Familia complementaria para ampliar la expresión de marca sin competir con la primaria.',
  family: 'Source Serif 4',
  weights: 'Regular · Medium · Semi Bold',
  role: 'Editorial / Storytelling complementario',
  usage: 'Subtitles · Quotes · Editorial moments',
}

export const FUNCTIONAL: TypeSpecEntry = {
  title: 'Tipografía funcional',
  description:
    'Tipografía obligatoria para contenido funcional y lectura continua. Puede coincidir o no con la tipografía de marca.',
  family: 'Inter',
  weights: 'Regular · Medium · Semi Bold · Bold',
  role: 'UI / Lectura / Producto',
  usage: 'Body · Forms · Tables · Metadata · Disclaimers · Navigation',
}

export const CTA_PRODUCT: TypeSpecEntry = {
  title: 'CTA de producto',
  description: 'Acciones funcionales dentro de producto, navegación, formularios y flujos digitales.',
  family: 'Inter',
  weights: 'Semi Bold',
  role: 'Legibilidad y claridad de acción',
  usage: 'Buttons · Links · Tabs · Navigation',
}

export const CTA_COMMUNICATION: TypeSpecEntry = {
  title: 'CTA de comunicación',
  description: 'Acciones en landings, campañas y piezas digitales de comunicación.',
  family: 'Manrope',
  weights: 'Semi Bold',
  role: 'Expresión de marca + legibilidad',
  usage: 'Campaign CTA · Landing CTA · Promotional links',
}
