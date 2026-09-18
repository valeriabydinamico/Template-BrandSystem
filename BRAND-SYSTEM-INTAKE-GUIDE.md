# Guía de intake — cómo traducir un Brand System a datos del sitio

Este documento **no es un intake ya completado** — es el instructivo que le das
a una IA (Claude, ChatGPT, etc.) junto con documentación cruda de un Brand
System real (Notion, Figma, PDFs, decks) para que esa IA extraiga los datos y
te devuelva un `.md` de intake ya completado, listo para pegar en una
conversación con Claude Code y que este repo lo cargue en
`src/app/data/*.ts`.

## Instrucciones para la IA que arma el intake

1. Leé la documentación de marca que te compartan (Notion, Figma, PDF, lo que
   sea) y extraé **solo** los campos listados en este documento, con el
   nombre exacto de campo indicado (columna "Campo").
2. Si un dato no aparece en la fuente, **no lo inventes ni lo dejes en
   blanco con un placeholder** ("TBD", "N/A", "-") — directamente omitilo.
   Un campo faltante no es un error: el sitio está diseñado para ocultar
   automáticamente cualquier ítem al que le falte un campo obligatorio (ver
   "Regla de completitud" abajo). Inventar un valor rompe esa lógica.
3. Devolvé el intake completado como una lista de bloques `key: value` por
   ítem (un color, una fila de token, un estilo tipográfico…), agrupados por
   sección, en el mismo orden en que aparecen en este documento. No hace
   falta que generes TypeScript — texto plano estructurado alcanza, Claude
   Code lo convierte a los archivos de datos.
4. Cuando un campo tenga una lista cerrada de valores válidos (por ejemplo
   `variant` en Semantic Colors), asigná el valor usando la heurística de
   mapeo indicada, no lo dejes a criterio libre.
5. Si la fuente usa terminología distinta a la de este documento (ej. "Hex
   value" en vez de "HEX", "Reference color" en vez de "Color Reference"),
   mapealo al nombre de campo de este documento — la columna "Sinónimos
   frecuentes" te da pistas, pero no es una lista cerrada.

## Regla de completitud (por qué esto importa)

**Todo campo hardcodeado en el master es obligatorio** para que ese ítem se
muestre en el sitio — la única excepción son los campos que un componente
calcula solo a partir de otro dato (ej. ratio de contraste y nivel WCAG, que
se calculan desde el HEX y por eso no se piden acá).

- Si a un ítem le falta **algún** campo obligatorio, se oculta igual que si
  le faltaran todos — no se muestra "a medias" en el sitio. Sí queda
  registrado distinto puertas adentro: **parcial** (llegaron algunos campos)
  vs. **sin datos** (no llegó ninguno).
- Una sección entera se oculta solo como consecuencia de que **todos** sus
  ítems quedaron ocultos — no hay campos obligatorios a nivel de página o de
  módulo.
- Todo lo que el sitio termina ocultando por esto queda listado en **Registro
  de completado** dentro del sitio, para que quien complete el intake después
  pueda ver exactamente qué falta.

Por eso, mientras más completo venga este intake, menos módulos aparecen
vacíos en el sitio — pero un módulo incompleto **nunca** debe rellenarse con
datos inventados: mejor omitirlo y que quede registrado como pendiente.

---

## 1. Color System — Global Colors

Hoy esta página todavía renderiza el frame de Figma sin el motor de
completitud (pendiente de migrar). No forma parte de este intake por ahora.

## 2. Color System — Brand Colors

Un color de marca (primario, secundarios, acentos). Repetir el bloque por
cada color.

| Campo | Sinónimos frecuentes | Formato esperado | Obligatorio |
|---|---|---|---|
| `name` | Nombre, Label | texto corto, ej. "Primary", "Accent 01" | sí |
| `description` | Descripción, Color Reference (a veces se confunde con `reference`) | texto libre, ej. "Color Reference: Blue 700" | sí |
| `hex` | HEX, Hex value, Color | 6 dígitos hex sin `#`, ej. `004C97` | sí |
| `rgb` | RGB, RGB value | tres enteros 0-255, ej. `0, 76, 151` | sí |
| `cmyk` | CMYK | cuatro enteros 0-100, ej. `100, 50, 0, 41` | sí |
| `pantone` | Pantone, Pantone code | ej. "Pantone 2945 C" | sí |

**No pedir:** nivel WCAG / ratio de contraste — `ColorCard` los calcula solo
desde el `hex`.

Grupos a completar: **Primary** (1 color), **Secondary** (lista, hoy 2:
Neutral + Secondary), **Accents** (lista, hoy 3: Accent 01/02/03). Si el
proyecto tiene más o menos acentos/secundarios que el master, ajustar la
cantidad de bloques — no hay un número fijo obligatorio de colores por grupo,
solo campos obligatorios por color individual.

## 3. Color System — Semantic Colors

Una fila de token semántico (un rol funcional de color: CTA, borde, fondo,
texto…). Repetir el bloque por cada fila, agrupado en una de las secciones
de la tabla de abajo.

| Campo | Sinónimos frecuentes | Formato esperado | Obligatorio |
|---|---|---|---|
| `role` | Role, Nombre del rol | texto corto, ej. "Primary Default", "Error" | sí |
| `color` | Color, HEX, Value | 6 dígitos hex con o sin `#`, ej. `#1677D8` | sí |
| `token` | Token, Token path, Nombre técnico | ruta con `/`, ej. `color/surface/cta/primary/default` | sí |
| `reference` | Color Reference, Primitive, Source | ruta al primitive de origen, ej. `color/primitive/blue/500` | sí |

**No pedir:** `variant` — es estructural, no un dato de marca (ver abajo).
**No pedir:** nivel WCAG / ratio de contraste — se calculan solos desde
`color`.

### Cómo determinar el `variant` de cada fila (no se lo preguntes a la fuente)

`variant` es uno de `text` / `border` / `background` / `background-border` y
define **cómo** `SemanticColorCard` documenta visualmente el rol (como
texto, como contorno, como relleno, o como relleno suave + contorno). No es
un dato que Notion/Figma declare con esa palabra — se infiere así:

1. **Por el grupo/sección** (mapeo por defecto, usar salvo excepción clara):

   | Sección | `variant` |
   |---|---|
   | CTA & Buttons — Primary / Secondary | `background` |
   | Superficies de soporte | `background` |
   | Bordes y contornos — Neutral | `border` |
   | Bordes y contornos — Estado (Error/Success/Warning/Info) | `background-border` |
   | Iconos | `border` |
   | Focus | `border` |
   | Fondos (Base, Marca Primaria/Secundaria, Accent 01/02/03, Estados) | `background` |
   | Texto (Marca, Neutral, Accent, Semántico) | `text` |

2. **Por el nombre del token, si la fuente no encaja en una sección
   conocida** (heurística de respaldo):
   - `token` contiene `text/` → `text`
   - `token` contiene `border/` o `icon/` → `border`
   - `token` contiene `background/` y el rol es un color sólido/plano → `background`
   - El rol se describe como "fondo tenue + contorno marcado" (típicamente
     estados de alerta/badge) → `background-border`

Si la fuente introduce una sección que no está en la tabla, elegí el
`variant` con la heurística #2 y avisá en el intake qué sección es nueva
(Claude Code tiene que sumarla a `SEMANTIC_GROUPS` en
`src/app/data/semanticColors.ts`).

Secciones a completar (hoy 18, se puede ajustar la cantidad de filas por
sección, no la lista de secciones sin avisar): CTA Primary, CTA Secondary,
Superficies de soporte, Bordes Neutral, Bordes Estado, Iconos, Focus, Fondos
Base, Fondos Marca Primaria, Fondos Marca Secundaria, Fondos Accent 01/02/03,
Fondos de Estados, Texto de Marca, Texto Neutral, Texto Accent, Texto
Semántico.

---

## 4. Typography — Foundations

⚠️ Todavía **no** tiene el motor de completitud implementado (pendiente,
ver `CLAUDE.md` → "Trabajo en curso"). Documentar igual la estructura para
que el intake ya venga listo cuando se migre.

Un "spec" tipográfico (rol de familia o de CTA). Repetir por cada uno:
Primaria de marca, Secundaria de marca (opcional), Funcional, CTA de
producto, CTA de comunicación.

| Campo | Sinónimos frecuentes | Formato esperado |
|---|---|---|
| `title` | Nombre del rol | ej. "Tipografía primaria de marca" |
| `description` | Descripción / uso | texto libre, 1-2 líneas |
| `family` | Familia configurada, Font family | nombre de la familia, ej. "Manrope" |
| `weights` | Pesos aprobados, Weights | lista separada por `·`, ej. "Medium · Semi Bold · Bold" |
| `role` | Rol principal | texto corto |
| `usage` | Uso recomendado, Ejemplos | lista separada por `·` |

La familia **Secundaria de marca** es la única marcada `optional` en el
código hoy — pero bajo la regla de completitud, en cuanto se migre, esto
deja de ser una marca especial y pasa a ser "se oculta si falta cualquier
campo", igual que el resto.

## 5. Typography — System

⚠️ Pendiente de migrar al motor de completitud (igual que Foundations).

Una fila de jerarquía tipográfica (token de escala). Repetir por cada token.

| Campo | Sinónimos frecuentes | Formato esperado |
|---|---|---|
| `token` | Token, Nombre técnico | ruta, ej. `type/brand/display/lg` |
| `family` | Familia, Font family | ej. "Manrope" |
| `weight` | Weight, Peso | ej. "Semi Bold" |
| `size` | Font size, Tamaño | en px, ej. "56 px" |
| `lineHeight` | Line height, Interlineado | en px, ej. "64 px" |
| `letterSpacing` | Letter spacing, Tracking | en %, ej. "-1%" |
| `usage` | Uso, Ejemplos | texto libre |

`preview` (texto de muestra tipo "Build trust.") es contenido de ejemplo
editorial, no un dato de marca estricto — se puede omitir y Claude Code
genera uno representativo del rol.

## 6. Visual Styles

⚠️ Pendiente de migrar al motor de completitud.

Cinco sub-bloques, cada uno una lista de tokens de escala:

**Spacing / Border Radius / Borders** — misma forma:

| Campo | Formato |
|---|---|
| `value` | número (px) |
| `token` | ej. `space/24`, `radius/8`, `border/2` |
| `usage` | texto libre, casos de uso |

**Shadows:**

| Campo | Formato |
|---|---|
| `name` | ej. "Low", "Medium", "High" |
| `token` | ej. `shadow/low` |
| `spec` | offset-x / offset-y / blur / spread + color, ej. "0 / 6px / 16px / 0 · neutral blue-grey" |
| `shadow` | valor CSS `box-shadow` completo |
| `usage` | texto libre |

**Sizing:**

- Alturas de componentes: lista de `{ token, value, usage }` (ej.
  `size/button/standard` = `56px`).
- Tamaños de íconos: lista simple de valores en px (ej. 16, 18, 20, 24, 32,
  40, 48, 56, 72).

## 7. Grids — System

⚠️ Pendiente de migrar al motor de completitud. Esta página es mayormente
**estructural/educativa** (anatomía de columns/margins/gutters/baseline/safe
zones + reglas de gobernanza) — no suele necesitar datos de marca específicos
salvo que el proyecto redefina la anatomía o el baseline (hoy fijo en 4px).

## 8. Grids — Application

⚠️ Pendiente de migrar al motor de completitud.

Una fila de la tabla de formatos de referencia. Repetir por cada
canal/formato (Web, Social, Video, Email, Display…):

| Campo | Sinónimos frecuentes | Formato esperado |
|---|---|---|
| `channel` | Canal | ej. "WEB", "SOCIAL" |
| `format` | Formato, Nombre | ej. "Desktop", "Feed Portrait" |
| `size` | Medida, Dimensiones | `ancho×alto`, ej. "1440×1024" |
| `cols` | Columnas | entero |
| `margin` | Margin | px |
| `gutter` | Gutter | px |
| `safe` | Safe Zone | `H:x / V:y` |
| `token` | Token, Dónde encontrarlo | ej. "Layout Grid / Reference / Web / Desktop" |
| `goal` | Objetivo, Uso | texto libre |

Más un set reducido de **wireframes** (subset representativo de las filas de
arriba) con `{ channel, title, size, gridSpec }` — `gridSpec` es un resumen
tipo "12 col · M80 · G24", derivable de `cols`/`margin`/`gutter` de la fila
correspondiente, no hace falta pedirlo aparte.

---

## Formato de entrega del intake completado

Para cada sección de este documento que sí tenga datos disponibles en la
fuente, devolver un bloque así (ejemplo con Brand Colors):

```
## Brand Colors — Primary
name: Primary
description: Color Reference: Blue 700
hex: 004C97
rgb: 0, 76, 151
cmyk: 100, 50, 0, 41
pantone: Pantone 2945 C

## Brand Colors — Secondary #1
name: Neutral
description: Color Reference: Gray 50
hex: FFFFFF
...
```

Si una sección completa no tiene datos en la fuente, omitirla del intake
en vez de dejarla con campos vacíos — eso ya le indica a Claude Code que ese
módulo queda pendiente.
