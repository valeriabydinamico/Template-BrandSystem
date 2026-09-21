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
  - `ComparisonCard` (nodo `16349:437`) — forma correcta e incorrecta de
    usar algo (logo, foto, color…), dos imágenes lado a lado con pills
    Correcto/Evitar. También genérico.
  - `ComparisonExampleCard` (mismo nodo, "IntegrationCard" completo) —
    `ComparisonCard` + título/descripción/banner de advertencia, todo junto.
  Falta construir la página real: cuando lleguen las fotos de marca (por
  upload del cliente), armar `src/app/data/photography.ts` con el mismo
  patrón de completitud del resto (campos opcionales + `RequiredField`,
  `image` obligatorio) y reemplazar el `PlaceholderPage` de "Photography"
  por el contenido real.
- El board completo de Figma tiene 5 secciones (Categorías fotográficas,
  Dirección visual, Uso según contexto, Integración en layouts, Stock/IA/
  gobernanza) — hoy solo se tomó la arquitectura de cuatro cards
  (`PhotoCategoryCard`, `ImageCriteriaCard`, `ComparisonCard`,
  `ComparisonExampleCard`). Al construir la página real, revisar el resto
  del board para las demás secciones.
- `Badge` y `Note` ahora tienen tonos `error`/`success`(/`warning` en
  `Badge`) — reusarlos en vez de inventar estilos nuevos cuando la página
  real de Photography necesite pills o banners de estado.

## Visual Styles

- Redistribuir el contenido de la página real "Visual Styles" (Spacing,
  Border Radius, Borders, Shadows, Sizing) a donde corresponde según
  `BRAND-SYSTEM-ARQUITECTURA.md` — hoy Foundations ya tiene items propios
  para esto como `PlaceholderPage` separados ("Spacing System", "Bordes &
  Radius", "Elevation & Shadows"), y "Visual Styles" quedó como un módulo
  aparte que en realidad no está en la arquitectura del cliente.
- Una vez redistribuido, eliminar la página/módulo "Visual Styles"
  (`visual-styles.page` en `moduleConfig.ts`, `VisualStylesPage.tsx`,
  `visualStyles.ts`, su entrada en `siteCompleteness.ts`/`searchIndex.ts`,
  el ícono del sidebar y las referencias en `App.tsx` — `IntroTarget`
  incluido).
