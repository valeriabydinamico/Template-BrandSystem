# Pendientes

Notas de cosas a implementar más adelante. Solo se anota acá; no se ejecuta
hasta que se pida explícitamente.

## Sidebar

- Cuando una opción del sidebar tenga sub-páginas (Color System, Typography
  System, Layout & Grid — ver `MODULE_GROUPS`/`CATEGORIES` en
  `src/app/lib/moduleConfig.ts`), el `Tooltip` de esa opción debe listar sus
  sub-páginas, no solo el nombre del grupo. Aplica sobre todo al rail
  comprimido, donde hoy el ícono del grupo solo muestra el label del grupo
  (ej. "Color System") y no se ve qué sub-páginas tiene hasta abrir el
  flyout.

## Photography

- Módulo renombrado de "Photography & Image Direction" a "Photography"
  (`foundations.photography` en `moduleConfig.ts`).
- Ya existen dos componentes con la arquitectura de info tomada de Figma
  (board "15 - Sistema Fotográfico"):
  - `PhotoCategoryCard` (nodo `16349:159`) — categoría fotográfica: foto +
    nombre, descripción, uso recomendado, tono emocional, pills.
  - `ImageCriteriaCard` (nodo `16349:266`) — criterio con imagen + Do/Don't;
    genérico, no exclusivo de fotografía (aplica a dirección visual,
    características, forma de uso).
  Falta construir la página real: cuando lleguen las fotos de marca (por
  upload del cliente), armar `src/app/data/photography.ts` con el mismo
  patrón de completitud del resto (campos opcionales + `RequiredField`,
  `image` obligatorio) y reemplazar el `PlaceholderPage` de "Photography"
  por el contenido real.
- El board completo de Figma tiene 5 secciones (Categorías fotográficas,
  Dirección visual, Uso según contexto, Integración en layouts, Stock/IA/
  gobernanza) — hoy solo se tomó la arquitectura de las primeras dos cards.
  Al construir la página real, revisar el resto del board para las demás
  secciones.
