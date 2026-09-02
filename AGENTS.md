# AGENTS.md

Guía para cualquier sesión de Codex que trabaje en este repo.

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
- Tailwind CSS v4 (config en CSS, no `tailwind.config.js`)
- Design system: **`@figma/astraui`** + **`@figma/astraui-kit`** (paquetes de Figma)
- `lucide-react` para iconos, `motion`, `recharts`

## Cómo levantar la página

```bash
npm install   # solo la primera vez o si falta node_modules
npm run dev    # Vite en http://localhost:5173
```

Config del dev server para el panel Browser: `.Codex/launch.json` (nombre `dev`).

`npm run build` genera el build de producción en `dist/`.

## Estructura

- `src/main.tsx` — entry point, monta `<App />`, importa `src/styles/index.css`
- `src/app/App.tsx` — shell: sidebar + área de contenido. La navegación entre
  páginas es `useState`, no URLs.
- `src/app/components/` — páginas:
  - `IntroduccionPage` — home (placeholder)
  - `GlobalColorsPage` — renderiza `src/imports/01GlobalColors-1` (generado por Figma)
  - `BrandColorsPage`, `SemanticColorsPage` — placeholders, pendientes de contenido
  - `MisComponentesPage` — showcase de componentes propios (Color cards, módulos)
  - `components/demo/` — demos por categoría (Buttons, Inputs, Media, Feedback,
    Navigation, Toolbar, PromptChat). Nota: hoy `App.tsx` no las enruta.
  - `components/ColorCard/` — componente propio
- `src/imports/` — **código generado por Figma Make**. Frames, SVGs (`svg-*.ts`) e
  imágenes. No editar a mano salvo necesidad puntual; se re-genera desde Figma.
- `src/styles/`:
  - `index.css` — importa `fonts.css`, `tailwind.css`, `@figma/astraui/styles.css`
  - `tailwind.css` — `@import 'tailwindcss'` + `@source '../**/*.{js,ts,jsx,tsx}'`
  - `theme.css` — variables CSS (paleta shadcn base, oklch)
  - `fonts.css` — Inter desde Google Fonts, override de `--font-sans`
  - `globals.css` — vacío

## Reglas del design system (de astraui-kit/guidelines)

- `@figma/astraui` y `@figma/astraui-kit` van como dependencias directas en
  `package.json` (ya están).
- La app va envuelta en `<ThemeProvider>` de `@figma/astraui` (ver `App.tsx`).
  Actualmente `ForceLightTheme` fuerza tema claro al montar.
- Usar **tokens de Astra vía clases Tailwind** (`bg-brand-tertiary`, `gap-xl`,
  `text-text-primary`, `rounded-corner-md`, `py-lg`…), **no** valores arbitrarios
  ni hex sueltos.
- NO agregar reglas `@source` para `@figma/astraui` en la config de Tailwind: el
  paquete ya trae el CSS pre-compilado.
- Antes de escribir código nuevo con el kit, leer por ruta exacta:
  `node_modules/@figma/astraui-kit/guidelines/Guidelines.md` y `setup.md`
  (pnpm/symlinks: no usar `find`/glob, usar `ls`, `cat`, lectura por ruta).

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

- `BrandColorsPage` y `SemanticColorsPage` son placeholders — falta traer su
  contenido (probablemente desde Figma).
- `MisComponentesPage`: sección "Módulos" vacía, se irá llenando conforme lleguen
  de Figma.
