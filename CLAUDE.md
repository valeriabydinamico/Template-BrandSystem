# CLAUDE.md

Guía para cualquier sesión de Claude Code que trabaje en este repo.

## Qué es

De ahora en más nos referimos a este sitio como **el dashboard**. Documenta
las decisiones estructurales de un **Brand System** ("Template -
BrandSystem"), exportado originalmente desde **Figma Make**. Single-page app
en React, sin routing real (la navegación es state en `src/app/App.tsx`).

El sidebar se organiza en **categorías** (ver
`BRAND-SYSTEM-ARQUITECTURA.md` y "Arquitectura del catálogo (categorías del
sidebar)" más abajo): **Strategy**, **Foundations** (donde viven Color
System, Typography System, Layout & Grid, Visual Styles y el resto de
fundamentos), **Components**, **Templates** y **Brand Ops**. Cada categoría
agrupa páginas — algunas con sub-páginas propias (ej. Color System), la
mayoría páginas únicas.

Cada página de documentación sigue la misma estructura traída de Figma:
`PageHeader` (IntroCard) → secciones con cards/tokens en vivo → `GovernanceFooter`
(reglas de gobernanza) → `MetaFooter`. Responsive con breakpoint **1600px** de
viewport (igual que Brand Colors).

Proyecto original en Figma:
https://www.figma.com/design/i8FTndoqsyBd5GyaRme2nR/Template---BrandSystem

## Cómo incorporar documentación/contenido nuevo

**Regla global, aplica siempre que llegue documentación nueva** (con o sin
formato, desde Figma, Notion o cualquier otra fuente). Dos conceptos que NO
son lo mismo:

- **UI** = los componentes propios y el lenguaje visual del dashboard
  (`PageHeader` → secciones → `GovernanceFooter` → `MetaFooter`, `ColorCard`,
  patrón de completitud de datos, nomenclatura de tokens/rutas, etc.).
- **Formato** = la forma de **agrupar y jerarquizar el contenido**: qué
  secciones/grupos existen, cómo se agrupan los ítems entre sí, qué orden o
  jerarquía tienen.

**Regla de UI (sin excepción por contenido):** la UI se mantiene en el
**100% de los casos**, sea cual sea la fuente y sea cual sea el formato que
se elija con las reglas de abajo — la fuente del contenido (Figma, Notion,
lo que sea) nunca la dicta. El contenido nunca se pega ni se traduce tal
cual: siempre se aplica la UI del dashboard encima. La única forma en que la
UI cambia es una **decisión explícita y separada de cambiar la UI de la
app**, nunca como efecto secundario de incorporar contenido nuevo.

**Regla de formato — misma regla para Figma y para Notion, lo único que
cambia es si la página ya tiene formato o no:**

- **Página nueva/sin formato previo** (hoy `PlaceholderPage`, sin contenido
  real): no hace falta preguntar — se usa directamente el formato que trae
  la fuente.
  - Si es una **estructura mínima de agrupación** acordada con el equipo
    (con o sin Figma): se aplica la UI y el patrón de completitud sobre ese
    formato dado, sin inventar una agrupación distinta a la acordada.
  - Si es contenido de **Notion** (no trae diseño visual, pero sí trae su
    propio formato): se **mantiene la jerarquía y estructura que ya trae
    Notion** (niveles de título H1/H2/H3, acordeones/toggles, tablas,
    listas, etc.) y se traduce cada una a su equivalente de UI del dashboard
    (ej. un H2 → `Section`, un H3 → `Group`, un toggle → un bloque
    colapsable, una tabla → una tabla o grid de cards según corresponda). No
    se aplana el documento ni se le impone la agrupación de otra página del
    sitio — solo se recurre a imitar una página similar cuando Notion no
    deja clara la jerarquía de una parte puntual.
- **Página que YA tiene contenido real documentado** (ya tiene un formato
  propio, venga de donde venga): **preguntar siempre**, antes de tocar nada,
  si se mantiene el formato actual o si se adopta el formato nuevo que trae
  el contenido — sea que venga de Figma o de Notion.

**Excepción (solo de formato):** todo lo anterior aplica siempre, **salvo
que se indique explícitamente desde el principio** que hay que aplicar un
formato nuevo — en ese caso se sigue esa instrucción directa en vez de
preguntar o de mantener el formato actual. La excepción es exclusiva del
formato: la UI **no tiene excepción acá**, sigue la regla de arriba en
todos los casos.

## Nomenclatura de tokens/rutas

**Todo `token` (o campo equivalente: "Dónde encontrarlo" en Grid
Application) sigue el esquema:**

```
<página>/<subpágina>/<sección>/<paleta si tiene>/<tono>
```

- Un solo separador entre niveles: `/`. Dentro de cada segmento, palabras
  unidas con `_` (snake_case) — nunca guion medio ni mezclar los dos.
- `<página>` = el grupo del sidebar en snake_case (`color_system`,
  `typography_system`, `layout_grids`, `visual_styles`). `<subpágina>` = la
  sub-página concreta (`global`, `brand`, `semantic`, `foundations`,
  `system`, `application`) — se omite si la página no tiene sub-páginas
  (Visual Styles).
- `<sección>` = la sección visible en la página (ej. `state`, `action_support`,
  `spacing`). `<paleta>` = la familia/grupo dentro de esa sección si existe
  más de una (ej. `cta_primary`, `brand_primary`); se omite si la sección ya
  es una única familia (ej. Focus en Semantic Colors).
- `<tono>` = el ítem puntual (el paso de escala, el rol, el tamaño…).
- **Dónde se genera:** en Semantic Colors, Typography System, Visual Styles y
  Grid Application el token sigue siendo un campo obligatorio hardcodeado en
  `src/app/data/*.ts` (cae bajo la regla de completitud de abajo), pero su
  *valor* debe construirse siguiendo este mismo esquema en vez de un nombre
  de token de diseño libre — ver esos archivos para el patrón exacto por
  sección. Si algún módulo nuevo termina generando el token en código en vez
  de pedirlo como dato, seguir el mismo esquema ahí también.
- Los `id` de DOM para el buscador del sidebar (`slugify(token)`) se derivan
  automáticamente del token, así que cambiar el token también cambia el
  ancla — no hace falta tocarlos por separado.

## Regla de completitud de datos (dinámico por brief de marca)

**Regla super importante, nunca pasarla por alto:** el sitio se completa con
los datos de un `.md` de intake (ver `BRAND-SYSTEM-INTAKE.md`) por proyecto.
**Todo campo hardcodeado hoy en el master es un dato obligatorio** para que
ese ítem se muestre — lo único exento son los campos que un componente
calcula solo (ej. ratio de contraste y nivel WCAG en `ColorCard` /
`SemanticColorCard`, derivados del HEX).

- Un ítem (un color, una fila de token…) al que le falta **algún** campo
  obligatorio se oculta igual que si le faltaran todos — no se muestra "a
  medias". La diferencia es solo de **registro**: si vino *parcial* (algunos
  campos sí) queda categorizado distinto que si no vino *nada*.
- Una sección/grupo se oculta como **consecuencia natural** de que todos sus
  ítems quedaron ocultos — no hay campos obligatorios a nivel de página ni de
  módulo, solo a nivel de cada componente/ítem individual.
- Todo lo oculto queda registrado en **Registro de completado** (icon button
  entre "Mis componentes" y "Ajustes" del sidebar), separado en 🟡 *Datos
  parciales* (falta algo) y 🔴 *Sin datos* (no vino nada), con el detalle de
  qué campo falta por ítem.

**Cómo está implementado** (patrón a replicar si se suma un módulo nuevo):
- `src/app/lib/completeness.ts` — motor genérico: `evaluateSection` separa
  `visible` (items completos) de `hidden` (con motivo + campos faltantes).
- `src/app/data/<pagina>.ts` — datos de la página, con todo campo de marca
  como opcional en el tipo (`hex?: string`, no `hex: string`) + su lista de
  `RequiredField` obligatorios.
- `src/app/lib/siteCompleteness.ts` — importa los datos de cada página y
  corre `evaluateSection` una sola vez; expone los reportes por página +
  `ALL_HIDDEN_ENTRIES` (usado por `RegistroPage`). Única fuente de verdad:
  tanto la página como el registro leen de acá, así el registro no depende de
  haber visitado la página.
- La página de documentación (ej. `VisualStylesPage`) importa su reporte de
  `siteCompleteness.ts` y renderiza solo `.visible`;
  una sección/`Group` sin nada visible retorna `null` (o no se agrega al
  array de secciones a renderizar).
- **Hoy implementado en:** Visual Styles (es la única página de Foundations
  que sigue documentando una configuración de ejemplo con datos hardcodeados
  en `src/app/data/`). **Sin implementar:** el resto de Foundations —
  Global/Brand/Semantic Colors, Typography Foundations/System, Grid
  System/Application y las 5 páginas nuevas (Spacing System, Bordes & Radius,
  Elevation & Shadows, Photography & Direction, Motion Principles) son ahora
  plantillas en blanco (mismo patrón que Strategy, ver más abajo) y no pasan
  por este motor: no hay datos de marca que ocultar todavía, solo contenido
  placeholder entre corchetes a la espera del brief real del proyecto.
- **Regla en vigor desde ahora:** cuando se complete el contenido real de
  cualquier página nueva del catálogo (las que hoy son `PlaceholderPage`),
  seguir siempre este mismo patrón — nunca hardcodear los datos directo en
  el componente de la página. Ver el ejemplo completo en
  `src/app/data/gridApplication.ts` + `GridApplicationPage.tsx` (incluye el
  caso de datos derivados: los wireframes se calculan desde los formatos
  visibles, no son una lista aparte).

### Ajustes — prender/apagar módulos (capa manual, separada de la anterior)

`AjustesPage` (icon button cog del sidebar) deja prender/apagar cada página
del catálogo con un switch — **independiente** de si sus datos están
completos. Un módulo apagado desaparece del sidebar sin importar sus datos, y
el **Registro de completado NO lo evalúa** (apagado a propósito ≠ oculto por
falta de datos).

- `src/app/lib/moduleConfig.ts` — `CATEGORIES` (categoría → grupo/página →
  hoja, ver "Arquitectura del catálogo" abajo), cada hoja con un id
  namespaced (`color.brand-colors`, `strategy.posicionamiento`,
  `visual-styles.page`…), `LARGE_PRESET` (todo prendido), `LIGHT_PRESET`
  (subset **representativo** por ahora — Brand Colors, Semantic Colors,
  Typography System, Visual Styles; falta definir el set real) y
  `NONE_PRESET` (todo apagado). `useModuleConfig()` persiste en
  `localStorage` (`module-config`, por navegador, sin backend).
- `AjustesPage` tiene un buscador (filtra por nombre de grupo o de
  sub-página, case-insensitive) entre los presets y la lista de categorías —
  si el nombre del grupo matchea se muestra completo, si no, solo las
  sub-páginas cuyo nombre matchea.
- No hay switch de grupo/categoría: si todas las sub-páginas de un grupo (o
  todos los grupos de una categoría) quedan apagados, el grupo/categoría
  entero desaparece del sidebar como consecuencia natural (mismo criterio que
  las secciones sin datos).
- `App.tsx` (`Sidebar`) filtra `colorPages` / `typographyPages` / `gridPages`
  por `enabled`; si la sub-página activa se apaga desde Ajustes, redirige a
  la siguiente prendida del grupo o a Introducción. Las páginas sin
  sub-páginas (Visual Styles y toda página nueva/`PlaceholderPage`) se
  togglean por su propio id de grupo.
- `RegistroPage` recibe `enabled` y filtra `ALL_HIDDEN_ENTRIES` con
  `REPORT_MODULE_TO_LEAF` (en `siteCompleteness.ts`) — al sumar un módulo
  nuevo a la regla de completitud, agregar ahí su mapeo `module → leaf id`.

## Arquitectura del catálogo (categorías del sidebar)

Fuente: `BRAND-SYSTEM-ARQUITECTURA.md` (documento del cliente; su numeración
es solo de referencia/orden, no estructura real — no hay campos obligatorios
a nivel de categoría ni cantidad fija de páginas por categoría).

El sidebar agrupa las páginas en 5 categorías (`CATEGORIES` en
`moduleConfig.ts`), en este orden: **Strategy**, **Foundations**,
**Components**, **Templates**, **Brand Ops**. Cada categoría es un
`NavEyebrow` en el sidebar; desaparece si todas sus páginas están apagadas
desde Ajustes.

- Dentro de una categoría, un grupo puede ser:
  - **Con sub-páginas reales** (`leaves` en `ModuleGroupDef`): hoy solo
    Color System, Typography System y Layout & Grid, dentro de Foundations.
    Cada uno tiene su propio `NavGroup` hardcodeado en `Sidebar` (`App.tsx`)
    con su estado de sub-página activa (`activeColorPage`,
    `activeTypographyPage`, `activeGridPage`) y sus componentes reales.
  - **Página única** (sin `leaves`, togglable por el `id` del grupo): el
    resto — Visual Styles (contenido real) y toda página que todavía no
    tiene contenido (`PlaceholderPage`, ver abajo).
- **Páginas sin contenido real todavía**: se renderizan con
  `src/app/components/PlaceholderPage.tsx` — un `PageHeader` genérico con
  `paragraphs: ['[agregar descripción]']` hasta que se les sume contenido
  real (en ese momento se reemplaza `PlaceholderPage` por una página propia,
  mismo patrón que Brand Colors o Visual Styles). `App.tsx` las rutea todas
  por un único `SidebarPage` genérico (`'placeholder'` +
  `activePlaceholderId`, resuelto a label/categoría con `findLeafInfo()` de
  `moduleConfig.ts`) — no crear un `SidebarPage` dedicado por cada una.
- Íconos de sidebar para páginas placeholder: `LEAF_ICONS` en `App.tsx`
  (mapa `leaf id → LucideIcon`). Al construir el contenido real de una
  página, está bien mantener el mismo ícono o cambiarlo si el diseño lo pide.
- **Hoy con contenido real: el catálogo completo** — las 7 páginas de
  Strategy, las 8 de Foundations (Color System, Typography System, Layout &
  Grid, Spacing System, Bordes & Radius, Elevation & Shadows, Photography &
  Direction, Motion Principles), las 9 de Components (Logos, Buttons & CTAs,
  Content Blocks, Navigation, Cards, Forms & Inputs, Tags/Badges & Labels,
  Icons & Illustrations, Visual System), las 4 de Templates (RRSS, Web,
  Presentación, Mailers) y las 4 de Brand Ops (Governance, Training &
  Adoption, Requests & Support, Health & Evolution) — todas como plantilla
  en blanco (master template) salvo Visual Styles (Foundations), que sigue
  documentando una configuración de ejemplo con datos hardcodeados. Ya no
  quedan `PlaceholderPage` en `BRAND-SYSTEM-ARQUITECTURA.md` (el Registro de
  completado lo confirma: "Todo completo").

## Buscador del sidebar

`SidebarSearch` (en `App.tsx`, arriba del todo del sidebar, entre la marca y
la navegación) busca por **nombre/título** en todo el catálogo — no busca
texto de párrafo/descripción. Al elegir un resultado, navega a la página
correspondiente y hace scroll + resalta el ítem exacto (o la página entera
si es una `PlaceholderPage` sin ítems).

- `src/app/lib/searchIndex.ts` — arma `SEARCH_ENTRIES` a partir de las
  mismas fuentes que ya existen: `siteCompleteness.ts` (así un ítem oculto
  por falta de datos tampoco aparece en la búsqueda — mismo criterio que el
  resto del sitio), `moduleConfig.ts` (`ALL_LEAF_IDS` + `findLeafInfo` para
  una entrada por página) y `SECTIONS` de `MisComponentesPage.tsx` (para los
  componentes del handbook). Cada `SearchEntry` tiene `leafId` (a qué página
  navegar) y `anchorId` (el `id` de DOM al que hacer scroll).
- `src/app/lib/slug.ts` — `slugify()` genera los ids de anchor a partir del
  nombre/token del ítem (minúsculas, sin acentos, con guiones).
- **Cada ítem buscable necesita un `id` de DOM** en el nodo que lo
  renderiza, con el mismo esquema de slug que usa `searchIndex.ts` (ej.
  `brand-color-${slugify(name)}`, `semantic-color-${slugify(token)}`,
  `visual-style-${slugify(token)}`, `grid-format-${slugify(channel-format)}`).
  Al sumar un ítem nuevo a cualquier `src/app/data/*.ts`, agregar también su
  entrada en `searchIndex.ts` **y** el `id` correspondiente en la página que
  lo renderiza — si falta el `id`, el resultado de búsqueda navega a la
  página pero no encuentra el ancla exacta.
- Todas las páginas de contenido (reales y `PlaceholderPage`) tienen
  `id={leafId}` en su contenedor raíz, para que la entrada de "página"
  siempre tenga un ancla válida aunque el ítem específico no la tenga.
- `AppShell.navigateToLeaf(leafId)` mapea un `leafId` a la combinación de
  `setActivePage`/`setActiveColorPage`/`setColorOpen`/etc. necesaria — mismo
  criterio que ya usaba `goToArea` para los 4 accesos de Introducción, pero
  genérico para cualquier hoja del catálogo + las 4 páginas meta
  (`introduccion`, `mis-componentes`, `registro`, `ajustes`, que no son un
  leaf de `moduleConfig.ts`).
- El resaltado (`.search-highlight` en `globals.css`, animación
  `search-pulse`) se aplica **imperativamente** vía `classList` en un
  `useEffect` de `AppShell` (`pendingAnchor` state) — no como prop de React,
  para no tener que pasarle un flag de "resaltado" a cada card de cada
  página del sitio.
- El dropdown de resultados se porta a `body` (`createPortal`, mismo patrón
  que el flyout de `NavGroup`) — el listener de "click afuera" chequea tanto
  el wrapper del buscador como el dropdown portado (si solo chequeara el
  wrapper, un click en un resultado se leería como "afuera" y cerraría el
  dropdown antes de que el `onClick` del botón llegue a dispararse).

## Stack

- React 18 + TypeScript
- Vite 6 (`@vitejs/plugin-react` + `@tailwindcss/vite`)
- Tailwind CSS v4 (config en CSS, no `tailwind.config.js`) — **es la base de estilado**
- `@figma/astraui` + `@figma/astraui-kit` (paquetes de Figma) — instalados y usados
  por el shell (`App.tsx`), pero **ya no son obligatorios** (ver "Estilado")
- `lucide-react` para iconos, `motion`, `recharts`

## Cómo levantar la página

```bash
npm install   # solo la primera vez o si falta node_modules
npm run dev    # Vite en http://localhost:5173
```

Config del dev server para el panel Browser: `.claude/launch.json` (nombre `dev`).

`npm run build` genera el build de producción en `dist/`.

## Deploy

Publicado en **GitHub Pages**: https://valeriabydinamico.github.io/Template-BrandSystem/

- Workflow: `.github/workflows/deploy.yml` — build + deploy en cada push a `main`.
- `vite.config.ts` usa `base: '/Template-BrandSystem/'` **solo en build**
  (`command === 'build'`); en `npm run dev` sigue en la raíz.
- Pages está activado (*Settings → Pages → Source: GitHub Actions*) y el repo es
  **público** (Pages con repo privado necesita plan de pago).

## Estructura

- `src/main.tsx` — entry point, monta `<App />`, importa `src/styles/index.css`
- `src/app/App.tsx` — shell: sidebar + área de contenido. La navegación entre
  páginas es `useState`, no URLs.
- `src/app/components/` — páginas:
  - `IntroduccionPage` — home: `PageHeader` con sinopsis del sitio + "Cómo leer
    este sistema" (principios) + "Cómo está organizado" (4 module cards
    clicables → `onNavigate` cablea a color / typography / visual-styles / grids).
    En Tailwind puro. Icono en `src/assets/brand-system-badge-icon.svg`.
  - `GlobalColorsPage` / `BrandColorsPage` / `SemanticColorsPage` — grupo
    "Color System" del sidebar. Reescritas como **plantilla en blanco** (mismo
    patrón que Strategy, ver más abajo) siguiendo
    "Foundations — Estructura de presentación v2": Global Colors documenta
    grupos/familias + colores puntuales (Nombre + HEX); Brand Colors reúne
    las escalas de tonos (primaria/secundaria/acentos/neutros), el uso de
    color por etapa del journey (4.1–4.4) y el Do/Don't; Semantic Colors
    documenta las funciones semánticas (texto/fondos/bordes/iconos/focus/
    estados/superficies) y su regla principal. La Gobernanza del `.md` se
    repartió entre Brand Colors (reglas de primario/secundario/acentos) y
    Semantic Colors (regla de colores semánticos). Ya NO pasan por el motor
    de completitud (`siteCompleteness.ts`) ni por `data/brandColors.ts` /
    `data/semanticColors.ts` — esos archivos se borraron. `GlobalColorsPage`
    ya no renderiza `src/imports/01GlobalColors-1` (import crudo de Figma).
  - `TypographyFoundationsPage` — grupo "Typography System" del sidebar
    (icono `Type`). Reescrita con datos reales de Myntex desde el frame de
    Figma "Typography Global" (nodo 182:7687, archivo **distinto**
    `byVt6mFiP9ODnvbaEi5fEH` "Myntex - Brand Definition (Limpio)", no el
    master `muVJlf3hw1JM155GJlUnTd` usado por Global/Semantic Colors):
    Font Family (Primary Funnel Sans / Details·Contrast Geist Mono), Font
    Weight (Regular 400 / Medium 500), Letter Spacing (Narrow -3% / Narrower
    -4% / Narrowest -5%) y Font Size (escala completa de 24 pasos, 10px a
    144px, con line-height real por paso). Fuentes cargadas en
    `src/styles/fonts.css` como `--font-myntex-primary` /
    `--font-myntex-details`, sin tocar `--font-brand`/`--font-brand-editorial`
    (siguen siendo el ejemplo del master, en uso por `MisComponentesPage`).
    Ya no pasa por el motor de completitud (era plantilla en blanco antes de
    esto). `TypographySystemPage` — grupo "Typography System" del sidebar,
    también reescrita con datos reales de Myntex desde el frame "Typography
    Specific" (mismo archivo Figma, nodo 152:2668): 7 categorías de estilos
    de uso construidos sobre los primitivos de Foundations — Body (3),
    Detail (2), Button (2), Link (2), Heading (7), Heading Mono (7) y
    Display (7) — cada una con familia/peso/tamaño/interlineado/tracking y
    muestra en vivo. Reemplaza la tabla genérica Display/H1/H2/Body/Caption.
    Usa como fuente de verdad los *named text styles* de Figma en vez del
    texto descriptivo de cada card (varios no coincidían: Detail M, Link S,
    Heading 2XS, Display L/XL). Documenta sin corregir una anomalía del
    archivo fuente: Display XL (104px) es más grande que Display 2XL
    (96px) — nota visible en la página en vez de reordenar el valor.
    `data/typographyFoundations.ts` / `data/typographySystem.ts`
    (borrados); `components/typography/shared.tsx` conserva solo `FONT` (lo
    sigue usando `MisComponentesPage`). Icono de módulo en
    `src/assets/type-badge-icon.svg`.
  - `VisualStylesPage` — ítem "Visual Styles" del sidebar (icono `Shapes`).
    Traída de Figma (nodo 214:2446). Documenta spacing / border radius /
    borders / shadows / sizing con token cards (preview + valor + `TokenTag`
    + uso). Datos de marca en `src/app/data/visualStyles.ts` + reporte de
    completitud — renderiza solo `.visible`; los tamaños de ícono
    (`ICON_SIZES`) quedan estructurales (escala técnica fija, no decisión de
    marca por ítem). Reutiliza `PageHeader` / `GovernanceFooter` /
    `MetaFooter` / `TokenTag`. Icono de módulo en
    `src/assets/visual-styles-badge-icon.svg`. Responsive 1600. **Es la única
    página de Foundations que sigue el patrón de completitud** (ver "Regla de
    completitud de datos" arriba) — el resto ya es plantilla en blanco.
  - `GridSystemPage` / `GridApplicationPage` — grupo "Layout & Grid" del
    sidebar (icono `Grid3x3`). Reescritas como plantilla en blanco siguiendo
    el `.md` v2: System documenta la parte estructural (grid principal,
    contenedores y anchos máximos, breakpoints, responsive behavior,
    alineación y jerarquía espacial); Application documenta la tabla de
    grids por contexto (Web/Producto/Presentación/RRSS) y las reglas de
    composición. Ya no pasan por el motor de completitud ni por
    `data/gridApplication.ts` (borrado); `WireframeCard` sigue existiendo y
    documentado en el handbook aunque ninguna página lo use por ahora.
    Icono de módulo en `src/assets/layout-grids-badge-icon.svg`.
  - `SpacingSystemPage` / `BordesRadiusPage` / `ElevationShadowsPage` /
    `PhotographyDirectionPage` / `MotionPrinciplesPage` — resto de
    Foundations, construidas como plantilla en blanco siguiendo el `.md` v2
    (una página cada una, sin sub-páginas, tal como pide el documento). Cada
    una vive bajo su propio leaf id de `moduleConfig.ts`
    (`foundations.spacing-system`, `foundations.bordes-radius`,
    `foundations.elevation-shadows`, `foundations.photography`,
    `foundations.motion-principles`).
  - `LogosPage` / `ButtonsCtasPage` / `ContentBlocksPage` / `NavigationPage` /
    `CardsPage` / `FormsInputsPage` / `TagsBadgesLabelsPage` /
    `IconsIllustrationsPage` / `VisualSystemPage` — las 9 páginas de
    Components, construidas como plantilla en blanco siguiendo
    "Components — Estructura de presentación v2" (mismo criterio que
    Foundations v2: cada guía de Notion = una sola página del dashboard, sin
    fragmentar en sub-páginas). Cada una vive bajo su propio leaf id
    (`components.logos`, `components.buttons-ctas`,
    `components.content-blocks`, `components.navigation`,
    `components.cards`, `components.forms-inputs`,
    `components.tags-badges-labels`, `components.icons-illustrations`,
    `components.visual-system`).
  - `RRSSPage` / `WebPage` / `PresentacionPage` / `MailersPage` — las 4
    páginas de Templates, construidas como plantilla en blanco siguiendo
    "Templates — Estructura de presentación" (mismo criterio: cada guía de
    Notion = una sola página del dashboard). Reglas dadas como cita literal
    en el `.md` (ej. "Un solo CTA principal por pantalla" en Web, "Un solo
    CTA principal" en Mailers) se muestran tal cual, no como placeholder.
    Cada una vive bajo su propio leaf id (`templates.rrss`, `templates.web`,
    `templates.presentacion`, `templates.mailers`).
  - `GovernancePage` / `TrainingAdoptionPage` / `RequestsSupportPage` /
    `HealthEvolutionPage` — las 4 páginas de Brand Ops (última categoría del
    catálogo), construidas como plantilla en blanco siguiendo
    "Brand Ops — Estructura de presentación" (mismo criterio: cada guía de
    Notion = una sola página del dashboard). Cada una vive bajo su propio
    leaf id (`brand-ops.governance`, `brand-ops.training-adoption`,
    `brand-ops.requests-support`, `brand-ops.health-evolution`). Con estas 4
    páginas, **el catálogo completo del dashboard tiene contenido** (real o
    plantilla en blanco) — el Registro de completado muestra "Todo completo".
  - `components/docs/shared.tsx` — helpers de layout de TODAS las páginas de
    documentación (NO son componentes del sistema): `SectionHeader`, `DocNote`
    (callout aclaratorio), `TypePreview`, `MetaRow`. En el handbook bajo
    "Helpers de documentación". `components/typography/shared.tsx` ya solo tiene
    `FONT`.
  - `MisComponentesPage` — **handbook**: catálogo vivo de los componentes propios
    (PageHeader, ModuleBadge, Badge, GovernanceRule, GovernanceFooter, MetaFooter,
    TokenTag, Note, ColorCard, SemanticColorCard) + una sección "Helpers de
    documentación" (SectionHeader, DocNote, TypePreview, MetaRow). Cada uno
    rendereado en vivo. Índice de navegación fijo (`sticky`) a la derecha
    (`PageNav`, ≥1080px) con scrollspy (IntersectionObserver); click = scroll a
    esa sección. Se entra por el icon button (Layers) del pie del sidebar.
  - `RegistroPage` — **Registro de completado**: historial de lo que se ocultó
    por falta de datos de marca (ver "Regla de completitud de datos") y de
    qué páginas todavía no tienen su brief real cargado. Dividido en 2 tabs
    (`TabBar`, estado local `useState`, sin persistir — mismo patrón que
    `InformePage`):
    - **Por documentar**: 📄 "Páginas sin contenido real de documentación"
      (módulos prendidos cuya página, aunque existe — ya no hay
      `PlaceholderPage` en ningún leaf activo —, todavía muestra la
      plantilla en blanco del master) + 🔴 "Sin datos" (ítems de
      `ALL_HIDDEN_ENTRIES` sin ningún campo).
    - **Contenido parcial**: 🟡 "Contenido real parcial" (páginas que
      mezclan plantilla + alguna sección real, ver
      `LEAVES_WITH_PARTIAL_REAL_CONTENT`) + 🟡 "Datos parciales" (ítems de
      `ALL_HIDDEN_ENTRIES` con algunos campos pero no todos).
    Las páginas usan `leavesWithoutRealContent()` de
    `src/app/lib/moduleConfig.ts` (separa `ALL_LEAF_IDS` en missing/partial
    contra `LEAVES_WITH_REAL_CONTENT` / `LEAVES_WITH_PARTIAL_REAL_CONTENT`);
    los ítems usan `ALL_HIDDEN_ENTRIES` de `src/app/lib/siteCompleteness.ts`.
    Actualizar esos sets (y `RESUMENES` de `InformePage.tsx`) al completar el
    brief real de una página nueva. Se entra por el icon button
    (ClipboardList) del pie del sidebar, entre "Mis componentes" e "Informe".
  - `InformePage` — **Informe**: historial de trabajo sobre el dashboard,
    dividido en 3 tabs (`TabBar`, estado local `useState`, sin persistir):
    **Mejoras** (cambios estructurales/funcionales del dashboard en sí —
    sidebar, buscador, Ajustes, convenciones de datos…), **Pendientes**
    (trabajo del dashboard todavía no ejecutado) y **Resúmenes** (por cada
    página de contenido de marca completada con datos reales de un proyecto,
    ej. Myntex: qué se hizo y qué se dejó deliberadamente afuera, para poder
    auditar el criterio sin releer la página ni el Notion fuente). Las tres
    listas (`MEJORAS`/`PENDIENTES`/`RESUMENES`) están hardcodeadas en el
    propio componente y se actualizan a mano cada vez que se cierra un
    cambio relevante — no se calculan de ningún reporte, a diferencia de
    `RegistroPage` (que reporta completitud de datos, no features ni
    resúmenes de contenido). Se entra por el icon button (FileText) del pie
    del sidebar, entre "Registro de completado" y "Ajustes". **Regla en
    vigor:** cada vez que se complete o modifique el contenido de una página
    con datos reales de un proyecto (como Público Objetivo → Myntex),
    registrar qué se hizo y qué se dejó afuera y por qué en `RESUMENES` —
    **si la página ya tiene una entrada, sumar el cambio nuevo a esa misma
    entrada** (nuevos ítems en `hecho`/`afuera`, actualizando `fecha` a la
    del cambio más reciente) en vez de crear una entrada aparte; una página
    solo tiene más de una entrada en `RESUMENES` si corresponde a una
    categoría/proyecto distinto (ej. "Semantic Colors" vs. "Semantic Colors
    — Combinaciones aprobadas").
  - `AjustesPage` — panel de control de módulos (ver "Ajustes — prender/apagar
    módulos"). Se entra por el icon button (cog) del pie del sidebar.
  - `PlaceholderPage` — página genérica para cualquier módulo del catálogo sin
    contenido real todavía (ver "Arquitectura del catálogo"). Un solo
    componente reutilizado por todas las páginas pendientes.
  - `components/demo/` — demos por categoría (Buttons, Inputs, Media, Feedback,
    Navigation, Toolbar, PromptChat). Nota: hoy `App.tsx` no las enruta.
  - `components/PageHeader/` — encabezado de página (IntroCard: eyebrow de
    módulo + título + copy). Props `{module, title, paragraphs, moduleIconSrc?}`
    (`null` en `paragraphs` = línea en blanco). Lo usan TODAS las páginas de
    documentación.
  - `components/ColorCard/` — documenta un **primitive** (variantes primary/
    secondary/tertiary/gradient). Ratio y nivel WCAG (primary/secondary) se
    calculan solos desde el HEX — no son dato de marca a completar.
  - `components/SemanticColorCard/` — documenta un **token semántico**
    (`color/text/*`, `color/ui/border/*`, `color/background/*`…). Variantes
    `text` / `border` / `background` / `background-border`. Ratios y nivel WCAG
    se calculan solos; ruta con `disabled` → pastilla `N/A`.
  - `components/Badge/` — píldora de etiqueta de uso. Prop `size`: `default`
    (38px, Figma · 02 Brand Colors) o `sm` (28px) — la usan las pills de
    `PhotoCategoryCard`. Prop `tone`: `brand` (por defecto, azul) / `error` /
    `success` / `warning` — mismos colores que los roles de estado de
    Semantic Colors; las pills "Correcto"/"Evitar" de `ComparisonCard` usan
    `tone="success"` / `tone="error"`.
  - `components/TokenTag/` — píldora gris de ruta/token; recorta con "…" y,
    si está recortado, envuelve la píldora en `Tooltip` para mostrar el texto
    completo. Usar siempre para ese tipo de etiqueta. Prop `tone`: `default`
    (#e6eef8) / `plain` (blanco).
  - `components/Tooltip/` — tooltip propio del dashboard (reemplaza el
    `title` nativo del navegador en TODA la app, no solo el sidebar): fondo
    `#1c1f26`, borde `#262b35`, texto `#e3e7ee` — mismo lenguaje dark que el
    sidebar, se ve igual sobre página clara u oscura. Portal a `body` +
    `position: fixed` (posición calculada con `getBoundingClientRect`) para
    no quedar recortado por un ancestro con `overflow: hidden`. Prop
    `placement`: `top` (por defecto) o `right` (usado por `IconButton` del
    sidebar). Lo usan `TokenTag` (cuando el texto se recorta) e `IconButton`
    del sidebar (`App.tsx`). Al agregar un tooltip nuevo en cualquier página,
    usar este componente — no el atributo `title` nativo.
  - `components/WireframeCard/` — documenta un formato de referencia de
    Layout Grids: canal + nombre, medida y un wireframe neutro con la
    cantidad real de columnas (`cols`) dibujadas como barras — nunca un
    número fijo. Las barras de borde se tiñen distinto sugiriendo el margin.
    La usa `GridApplicationPage`.
  - `components/PhotoCategoryCard/` — documenta una categoría del sistema
    fotográfico de marca: foto + nombre, descripción, uso recomendado, tono
    emocional y pills de contexto. Arquitectura de info tomada del board de
    Figma "15 - Sistema Fotográfico" (fileKey `muVJlf3hw1JM155GJlUnTd`, nodo
    `16349:159`). `image` es opcional — sin foto todavía muestra un
    placeholder neutro (ícono + "Sin foto todavía"); **nunca** usar fotos de
    stock como relleno, las fotos reales de marca llegan por upload del
    cliente. Pendiente: página real "Photography" (hoy
    `PlaceholderPage`) — cuando lleguen las fotos, armar
    `src/app/data/photography.ts` con el mismo patrón de completitud que el
    resto (campos opcionales + `RequiredField`, `image` incluido como
    obligatorio ya que es un campo de marca, no algo que el componente
    calcule solo).
  - `components/ImageCriteriaCard/` — documenta un criterio con imagen
    (dirección visual, características, forma de uso…): nombre +
    descripción, foto de referencia y un par de tags Do (verde) / Don't
    (rojo). Genérico — no exclusivo de fotografía, cualquier sección que
    necesite "así sí / así no" con imagen puede reusarlo. Arquitectura de
    info del mismo board de Figma que `PhotoCategoryCard`, sección "02.
    Dirección visual" (nodo `16349:266`). `image` opcional con el mismo
    placeholder neutro —
    mismo criterio: nunca fotos de stock de relleno.
- `src/app/data/` — datos de marca de las páginas que ya siguen la regla de
  completitud (`brandColors.ts`, `semanticColors.ts`, `typographyFoundations.ts`,
  `typographySystem.ts`, `visualStyles.ts`, `gridApplication.ts`): campos
  opcionales + su lista de `RequiredField`. Ver "Regla de completitud de
  datos" — **este es el patrón a seguir siempre** que se complete el
  contenido real de una página nueva.
- `src/app/lib/completeness.ts` — motor genérico de completitud
  (`evaluateSection`, `evaluateItem`).
- `src/app/lib/siteCompleteness.ts` — agrega los reportes de completitud de
  cada página (fuente única para las páginas y para `RegistroPage`).
- `src/app/lib/contrast.ts` — helpers de contraste/accesibilidad WCAG
  compartidos (`relativeLuminance`, `accessibleTextColor`, `contrastRatio`,
  `wcagLevel`, `isNearWhite`, …). Los usan `ColorCard` y `SemanticColorCard`.
- `src/app/lib/searchIndex.ts` / `src/app/lib/slug.ts` — índice y helper de
  slugs del buscador del sidebar. Ver "Buscador del sidebar" arriba.
  - `components/ModuleBadge/` — eyebrow con icono del módulo
  - `components/GovernanceRule/` — fila numerada de regla de gobernanza
  - `components/GovernanceFooter/` — bloque completo de "Gobernanza" (header +
    reglas). Props `title` + `rules: string[]`. Lo usan Brand / Semantic /
    Typography (×2) / Visual Styles / Grids (×2).
  - `components/MetaFooter/` — barra final (metadato de versión + pastilla de
    estado). Props `label` + `status`. Lo usan las mismas páginas que
    `GovernanceFooter`.
  - `components/Note/` — nota/banner informativo (texto regular 14/20,
    padding 12, gap 8). Prop `tone`: `warning` (por defecto, fondo crema +
    icono naranja `#ad5301`, bajo las grillas de tokens del Color System),
    `error` (rojo, ✕) o `success` (verde, ✓) — mismo lenguaje, cambia
    color/ícono. El icono se alinea a la 1ª línea (centrado si es 1 línea).
  - `components/ComparisonCard/` — documenta la forma correcta e incorrecta
    de usar algo (logo, foto, color…) comparando dos imágenes lado a lado,
    cada una con su pill "Correcto" (`Badge tone="success"`) / "Evitar"
    (`Badge tone="error"`). Arquitectura de info del board de Figma "15 -
    Sistema Fotográfico" → "04. Integración fotográfica en layouts" (nodo
    `16349:437`, "IntegrationCard"), generalizada — en Figma son mockups de
    producto, acá siempre son dos imágenes sin asumir el tipo de asset.
    Ambas imágenes opcionales, mismo placeholder neutro que el resto.
  - `components/ComparisonExampleCard/` — la card completa del mismo
    "IntegrationCard" de Figma: `ComparisonCard` arriba + título del
    criterio, descripción y un banner `Note tone="error"` abajo explicando
    qué evitar (todo dentro de un único card blanco). Usar `ComparisonCard`
    solo (sin este wrapper) cuando no haga falta título/descripción/nota —
    ej. dentro de un layout ya armado.
- `src/imports/` — **código generado por Figma Make**. Frames, SVGs (`svg-*.ts`) e
  imágenes. No editar a mano salvo necesidad puntual; se re-genera desde Figma.
- `src/assets/` — assets propios / exportados de Figma (SVGs, imágenes)
- `src/styles/`:
  - `index.css` — importa `fonts.css`, `tailwind.css`, `@figma/astraui/styles.css`
    (este último se puede quitar cuando se migre el shell)
  - `tailwind.css` — `@import 'tailwindcss'` + `@source '../**/*.{js,ts,jsx,tsx}'`
  - `theme.css` — variables CSS (paleta shadcn base, oklch)
  - `fonts.css` — Inter desde Google Fonts, override de `--font-sans`
  - `globals.css` — vacío

## Estilado y design system

**Decisión (2026-09): Tailwind es la base. Astra deja de ser determinante.**

- **Diseñar con Tailwind + los componentes propios** (`ColorCard`, `Badge`,
  `ModuleBadge`, `GovernanceRule`, …). Está OK usar valores px/hex exactos cuando
  se traduce un diseño de Figma con fidelidad (`text-[48px]`, `gap-[72px]`,
  `bg-[#004c97]`); no es obligatorio pasar por tokens de Astra.
- **Astra sigue disponible** como base opcional: los paquetes están instalados y
  el shell (`App.tsx`) todavía usa `ThemeProvider`, `AstraLogo` (solo en la rama
  de demos, no enrutada) y `useTheme`, y su CSS (`@figma/astraui/styles.css`)
  sigue importado en `index.css`. No romper eso sin migrarlo. Si un componente de
  Astra resuelve bien un caso, se puede usar — pero no es el camino por defecto.
- `ForceLightTheme` fuerza tema claro al montar (vía `useTheme`) — aplica al
  contenido (`main`), no al sidebar (ver debajo).
- **El sidebar (`Sidebar` en `App.tsx`) ya está en Tailwind puro** y es la
  **única superficie dark** del dashboard (todo el resto sigue en claro):
  fondo `#16181d` (mismo token `color/background/inverse` que usa
  `SemanticColorCard` para "on-dark"), borde `#262b35`, texto inactivo
  `#aab3c2`, labels apagados `#8a94a8`, caja de icono de marca `#596879`
  (neutro, funciona en claro y oscuro), activo = pastilla `#1677d8`/20 con
  texto `#8fc7ff` (blue/300 — token real de Brand/Semantic Colors para
  "on-dark"). `main` es `bg-white`. El pie del sidebar son icon buttons: "Mis
  componentes" (Layers), "Registro de completado" (ClipboardList), "Ajustes"
  (cog) y comprimir/expandir (`PanelLeftClose`/`Open`). Comprimido = rail de
  64px (solo iconos); el estado se guarda en `localStorage` (`sidebar-collapsed`).
  Comprimido, los grupos (`NavGroup`: Color System / Typography System /
  Layout & Grid) abren un
  **menú flotante** (`createPortal` a `body`, `position: fixed`, también
  dark) con sus sub-páginas; cierra al elegir una, click fuera o Escape. Al
  cambiar de página el `<main>` vuelve a `scrollTop 0`.
- Si en algún momento se quiere sacar Astra del todo: falta reescribir el
  `ThemeProvider`/`ForceLightTheme` y la rama de demos de `App.tsx`, quitar el
  import de `@figma/astraui/styles.css`, y migrar
  `IntroduccionPage`, `MisComponentesPage` y los 7
  `components/demo/` (todos usan clases de tokens de Astra: `bg-brand-*`,
  `text-text-*`, `gap-xl`, `rounded-corner-md`…). Los demos hoy no se enrutan.
- NO agregar reglas `@source` para `@figma/astraui` en Tailwind: su CSS ya viene
  pre-compilado.
- Para leer archivos dentro de `node_modules/@figma/*` (pnpm/symlinks): no usar
  `find`/glob, usar `ls`, `cat`, lectura por ruta exacta.

### Traer diseños de Figma

- MCP local **Figma Dev Mode** (`figma-dev-mode`, `http://127.0.0.1:3845/mcp`)
  conectado. Requiere la app de escritorio de Figma abierta con el archivo.
- Flujo: seleccionar el nodo en Figma (o pasar link) → `get_design_context` /
  `get_metadata` / `get_variable_defs` / `get_screenshot` → adaptar a Tailwind +
  componentes propios (no pegar el código crudo) → verificar en el navegador.
- Assets (iconos/imágenes) exportados de Figma se descargan y commitean en
  `src/assets/` (las URLs `localhost:3845/assets/...` expiran en ~7 días).

## Git / flujo de trabajo

- Repo **público** en GitHub: `valeriabydinamico/Template-BrandSystem`
  (se hizo público para poder usar GitHub Pages gratis — ver "Deploy").
- `gh` CLI ya autenticado como `valeriabydinamico`.
- Rama principal: `main`. Hasta ahora se trabaja directo sobre `main`.
- `node_modules/`, `dist/` y logs están en `.gitignore`. `package-lock.json` SÍ
  se commitea (el proyecto se instala con **npm**, aunque tenga
  `pnpm-workspace.yaml` heredado de Figma).
- Recordatorio: commitear **y** `git push` los cambios para respaldarlos en
  GitHub; si no, viven solo en el disco local.

## Trabajo en curso

- **Catálogo completo**: las 7 páginas de Strategy, las 8 de Foundations,
  las 9 de Components, las 4 de Templates y las 4 de Brand Ops tienen
  contenido real (todas como plantilla en blanco / master template, ver
  "Cómo incorporar documentación/contenido nuevo"), más Introducción y el
  handbook. Ya no quedan `PlaceholderPage` — ver "Arquitectura del
  catálogo".
- Regla de completitud de datos (ver sección arriba): hoy solo la usa Visual
  Styles. El resto de Foundations pasó a plantilla en blanco (mismo patrón
  que Strategy) y ya no depende de `siteCompleteness.ts` ni de datos
  hardcodeados en `src/app/data/` — se completará con el brief real de cada
  proyecto más adelante, no antes.
- `AjustesPage` ya tiene el panel de módulos (presets Large/Light + switches
  por sub-página). Pendiente: definir el set real del preset Light (hoy es
  representativo).
- Fuentes de ejemplo del Type System (Manrope / Source Serif 4 / JetBrains Mono)
  se cargan en `src/styles/fonts.css`; vars `--font-brand` /
  `--font-brand-editorial`.
- Pendiente (opcional): migrar el shell (`App.tsx` — `ThemeProvider` + rama de
  demos), `MisComponentesPage` y los 7 `components/demo/` fuera de Astra a
  Tailwind puro; entonces se puede quitar `@figma/astraui/styles.css`.
- ⚠️ `AGENTS.md` (para Codex) está **desactualizado** — se commiteó por error hace
  varias sesiones y no se mantuvo. Si se retoma Codex, reescribirlo desde este
  archivo.
