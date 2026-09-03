# CLAUDE.md

Guía para cualquier sesión de Claude Code que trabaje en este repo.

## Qué es

Sitio de documentación de un **design system** ("Template - BrandSystem"),
exportado desde **Figma Make**. Documenta las decisiones estructurales de la
marca — **Color System** (Global / Brand / Semantic), **Typography**
(Foundations / System), **Visual Styles** y **Layout Grids** (System /
Application) — más una **Introducción** y un **handbook** de componentes propios.
Single-page app en React, sin routing real (la navegación es state en
`src/app/App.tsx`).

Cada página de documentación sigue la misma estructura traída de Figma:
`PageHeader` (IntroCard) → secciones con cards/tokens en vivo → `GovernanceFooter`
(reglas de gobernanza) → `MetaFooter`. Responsive con breakpoint **1600px** de
viewport (igual que Brand Colors).

Proyecto original en Figma:
https://www.figma.com/design/i8FTndoqsyBd5GyaRme2nR/Template---BrandSystem

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
- Requiere que en el repo esté activado *Settings → Pages → Source: GitHub Actions*.

## Estructura

- `src/main.tsx` — entry point, monta `<App />`, importa `src/styles/index.css`
- `src/app/App.tsx` — shell: sidebar + área de contenido. La navegación entre
  páginas es `useState`, no URLs.
- `src/app/components/` — páginas:
  - `IntroduccionPage` — home: `PageHeader` con sinopsis del sitio + "Cómo leer
    este sistema" (principios) + "Cómo está organizado" (4 module cards
    clicables → `onNavigate` cablea a color / typography / visual-styles / grids).
    En Tailwind puro. Icono en `src/assets/brand-system-badge-icon.svg`.
  - `GlobalColorsPage` — renderiza `src/imports/01GlobalColors-1` (generado por Figma)
  - `BrandColorsPage` — documenta "02 Brand Colors" de Figma con Tailwind +
    componentes propios (hecho, sin Astra)
  - `SemanticColorsPage` — documentada (secciones + gobernanza + meta-footer)
  - `TypographyFoundationsPage` / `TypographySystemPage` — grupo "Typography" del
    sidebar (icono `Type`). Traídas de Figma (nodos 196:6664 / 154:8196).
    Documentan la **configuración de ejemplo** del Type System (Manrope /
    Source Serif 4 / Inter). Reutilizan `PageHeader`, `GovernanceFooter`,
    `MetaFooter`, `TokenTag` + los helpers de `components/docs/shared.tsx`. Icono
    de módulo en `src/assets/type-badge-icon.svg`. Responsive con breakpoint 1600
    (+ la tabla de jerarquía colapsa a cards por debajo de 1180).
  - `VisualStylesPage` — ítem "Visual styles" del sidebar (icono `Shapes`).
    Traída de Figma (nodo 214:2446). Documenta spacing / border radius / borders
    / shadows / sizing con token cards (preview + valor + `TokenTag` + uso).
    Reutiliza `PageHeader` / `GovernanceFooter` / `MetaFooter` / `TokenTag`.
    Icono de módulo en `src/assets/visual-styles-badge-icon.svg`. Responsive 1600.
  - `GridSystemPage` / `GridApplicationPage` — grupo "Grids" del sidebar (icono
    `Grid3x3`, módulo "Layout Grids"). Traídas de Figma (nodos 2162:33104 /
    2162:33595). System = anatomía de la grilla + baseline global; Application =
    tabla de formatos de referencia (scroll-x en su contenedor), wireframes por
    familia y reglas de alineación (`GovernanceRule`). Icono de módulo en
    `src/assets/layout-grids-badge-icon.svg`. Responsive 1600.
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
  - `AjustesPage` — placeholder vacío. Se entra por el icon button (cog) del pie
    del sidebar.
  - `components/demo/` — demos por categoría (Buttons, Inputs, Media, Feedback,
    Navigation, Toolbar, PromptChat). Nota: hoy `App.tsx` no las enruta.
  - `components/PageHeader/` — encabezado de página (IntroCard: eyebrow de
    módulo + título + copy). Props `{module, title, paragraphs, moduleIconSrc?}`
    (`null` en `paragraphs` = línea en blanco). Lo usan TODAS las páginas de
    documentación.
  - `components/ColorCard/` — documenta un **primitive** (variantes primary/
    secondary/tertiary/gradient)
  - `components/SemanticColorCard/` — documenta un **token semántico**
    (`color/text/*`, `color/ui/border/*`, `color/background/*`…). Variantes
    `text` / `border` / `background` / `background-border`. Ratios y nivel WCAG
    se calculan solos; ruta con `disabled` → pastilla `N/A`.
  - `components/Badge/` — píldora de etiqueta de uso
  - `components/TokenTag/` — píldora gris de ruta/token; recorta con "…" +
    tooltip con el texto completo si no entra. Usar siempre para ese tipo de
    etiqueta. Prop `tone`: `default` (#e6eef8) / `plain` (blanco).
- `src/app/lib/contrast.ts` — helpers de contraste/accesibilidad WCAG
  compartidos (`relativeLuminance`, `accessibleTextColor`, `contrastRatio`,
  `wcagLevel`, `isNearWhite`, …). Los usan `ColorCard` y `SemanticColorCard`.
  - `components/ModuleBadge/` — eyebrow con icono del módulo
  - `components/GovernanceRule/` — fila numerada de regla de gobernanza
  - `components/GovernanceFooter/` — bloque completo de "Gobernanza" (header +
    reglas). Props `title` + `rules: string[]`. Lo usan Brand / Semantic /
    Typography (×2) / Visual Styles / Grids (×2).
  - `components/MetaFooter/` — barra final (metadato de versión + pastilla de
    estado). Props `label` + `status`. Lo usan las mismas páginas que
    `GovernanceFooter`.
  - `components/Note/` — nota informativa (fondo crema + borde e icono naranja
    `#ad5301`, texto regular 14/20, padding 12, gap 8) bajo las grillas de tokens
    del Color System. El icono se alinea a la 1ª línea (centrado si es 1 línea).
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
- `ForceLightTheme` fuerza tema claro al montar (vía `useTheme`).
- **El sidebar (`Sidebar` en `App.tsx`) ya está en Tailwind puro**, alineado con
  la UI de la documentación (superficie `#fafbfc`, borde `#e3e7ee`, caja de icono
  `#596879`, activo = pastilla `#e1f0ff` / texto `#004c97`). `main` es `bg-white`.
  El pie del sidebar son icon buttons: "Mis componentes" (Layers), "Ajustes"
  (cog) y comprimir/expandir (`PanelLeftClose`/`Open`). Comprimido = rail de
  64px (solo iconos); el estado se guarda en `localStorage` (`sidebar-collapsed`).
  Comprimido, los grupos (`NavGroup`: Color system / Typography / Grids) abren un
  **menú flotante** (`createPortal` a `body`, `position: fixed`) con sus
  sub-páginas; cierra al elegir una, click fuera o Escape. Al cambiar de página
  el `<main>` vuelve a `scrollTop 0`.
- Si en algún momento se quiere sacar Astra del todo: falta reescribir el
  `ThemeProvider`/`ForceLightTheme` y la rama de demos de `App.tsx`, quitar el
  import de `@figma/astraui/styles.css`, y migrar
  `IntroduccionPage`, `SemanticColorsPage`, `MisComponentesPage` y los 7
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

- Repo privado en GitHub: `valeriabydinamico/Template-BrandSystem`
- `gh` CLI ya autenticado como `valeriabydinamico`.
- Rama principal: `main`. Hasta ahora se trabaja directo sobre `main`.
- `node_modules/`, `dist/` y logs están en `.gitignore`. `package-lock.json` SÍ
  se commitea (el proyecto se instala con **npm**, aunque tenga
  `pnpm-workspace.yaml` heredado de Figma).
- Recordatorio: commitear **y** `git push` los cambios para respaldarlos en
  GitHub; si no, viven solo en el disco local.

## Trabajo en curso

- Documentadas: Global / Brand / Semantic Colors, Typography (×2), Visual Styles,
  Grids (×2), Introducción, handbook.
- `AjustesPage` es placeholder vacío (icon button "cog" del sidebar).
- `GlobalColorsPage` sigue renderizando el frame crudo de `src/imports/` (no
  re-hecho con componentes propios como el resto).
- Fuentes de ejemplo del Type System (Manrope / Source Serif 4 / JetBrains Mono)
  se cargan en `src/styles/fonts.css`; vars `--font-brand` /
  `--font-brand-editorial`.
- Pendiente (opcional): migrar el shell (`App.tsx` — `ThemeProvider` + rama de
  demos), `MisComponentesPage` y los 7 `components/demo/` fuera de Astra a
  Tailwind puro; entonces se puede quitar `@figma/astraui/styles.css`.
- ⚠️ `AGENTS.md` (para Codex) está **desactualizado** — se commiteó por error hace
  varias sesiones y no se mantuvo. Si se retoma Codex, reescribirlo desde este
  archivo.
