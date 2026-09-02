# CLAUDE.md

Guía para cualquier sesión de Claude Code que trabaje en este repo.

## Qué es

Sitio de documentación de un **design system** ("Template - BrandSystem"),
exportado desde **Figma Make**. Muestra el color system y los componentes de la
marca. Single-page app en React, sin routing real (la navegación es state en
`src/app/App.tsx`).

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

## Estructura

- `src/main.tsx` — entry point, monta `<App />`, importa `src/styles/index.css`
- `src/app/App.tsx` — shell: sidebar + área de contenido. La navegación entre
  páginas es `useState`, no URLs.
- `src/app/components/` — páginas:
  - `IntroduccionPage` — home (placeholder)
  - `GlobalColorsPage` — renderiza `src/imports/01GlobalColors-1` (generado por Figma)
  - `BrandColorsPage` — documenta "02 Brand Colors" de Figma con Tailwind +
    componentes propios (hecho, sin Astra)
  - `SemanticColorsPage` — placeholder, pendiente de contenido
  - `MisComponentesPage` — **handbook**: catálogo vivo de todos los componentes
    propios (uno rendereado por sección) para revisarlos y ajustarlos
  - `components/demo/` — demos por categoría (Buttons, Inputs, Media, Feedback,
    Navigation, Toolbar, PromptChat). Nota: hoy `App.tsx` no las enruta.
  - `components/PageHeader/` — encabezado de página (IntroCard: eyebrow de
    módulo + título + copy). Lo usan `GlobalColorsPage` y `BrandColorsPage`.
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
  - `components/Note/` — nota informativa (fondo crema + borde e icono naranja
    `#ad5301`) bajo las grillas de tokens del Color System. Traído 1:1 de Figma.
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
  el shell (`App.tsx`) todavía usa `ThemeProvider`, `AstraLogo`, `Avatar`,
  `useTheme`, y su CSS (`@figma/astraui/styles.css`) sigue importado en
  `index.css`. No romper eso sin migrarlo. Si un componente de Astra resuelve
  bien un caso, se puede usar — pero no es el camino por defecto.
- `ForceLightTheme` fuerza tema claro al montar (vía `useTheme`).
- Si en algún momento se quiere sacar Astra del todo: hay que reescribir `App.tsx`
  en Tailwind puro, quitar el import de `@figma/astraui/styles.css`, y migrar
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

- `SemanticColorsPage` es placeholder — falta traer su contenido desde Figma
  (misma estructura que `BrandColorsPage`).
- `MisComponentesPage`: sección "Módulos" vacía, se irá llenando conforme lleguen
  de Figma.
- Pendiente (opcional): migrar el shell (`App.tsx`) y las páginas restantes fuera
  de Astra hacia Tailwind puro.
- `AGENTS.md` (para Codex) duplica esta guía; mantener ambos en sync si se edita.
