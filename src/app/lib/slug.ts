/** Convierte un texto en un id de anchor estable: minúsculas, sin acentos,
 *  separado por guiones. Usado por `searchIndex.ts` para generar los ids de
 *  DOM que el buscador del sidebar usa para saltar + resaltar un ítem. */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
