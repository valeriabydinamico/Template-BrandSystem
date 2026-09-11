# Brief de datos — Nuevo Brand System

Este documento es el **checklist de contenido** para completar el sitio
(`Template-BrandSystem`) con la identidad de un cliente/proyecto nuevo.

No es documentación de código: es el **formulario** que hay que llenar con los
valores reales de marca. Una vez completado, ese contenido reemplaza los datos
de ejemplo que hoy están en el sitio (`PRIMARY`, `SECONDARY`, `ACCENTS`,
`BRAND_STYLES`, `SPACING`, etc. en `src/app/components/*.tsx`).

**Lo que NO cambia entre proyectos** (es la estructura del sistema, no un
valor de marca): los nombres de los tokens semánticos (`color/text/brand-primary`,
`type/desktop/title/lg`, `space/24`…), las categorías (Titles/Body/CTA,
Spacing/Radius/Borders/Shadows/Sizing, Columns/Margins/Gutters…), el copy de
gobernanza y el handbook de componentes ("Mis componentes"). Esas partes son
el "master" y se mantienen iguales.

**Lo que SÍ cambia por proyecto** es lo que pide este documento: valores HEX,
familias tipográficas, escalas concretas, formatos de referencia.

---

## Cómo completar este documento

Para cada tabla: llenar **todas las columnas**. Si un rol no aplica al
proyecto, dejar la fila pero escribir `N/A` — no borrarla (así se ve qué se
decidió omitir y por qué). Si un proyecto necesita **más** roles de los que
trae el master (ej. un 4° Accent), agregar una fila nueva siguiendo el mismo
patrón de nombre de token.

---

## 1 · Global Colors

*(Hoy esta página renderiza un frame estático importado de Figma —
`src/imports/01GlobalColors-1` — no está tokenizada como el resto. Si el
nuevo proyecto la va a reconstruir con componentes propios, necesito la
paleta de primitives completa.)*

Para cada familia cromática (Blue, Light Blue, Orange, Teal, Apple, Gray/Ink…
las que tenga la marca):

| Familia | Paso de escala (50/100/200…900) | HEX | Nombre del primitive |
|---|---|---|---|
| ej. Blue | 700 | `#004C97` | `color/primitive/blue/700` |

---

## 2 · Brand Colors

Roles de marca. **Primary es siempre 1 solo color.** Secondary y Accent
aceptan una lista (hoy: 2 secondary, 3 accent — la cantidad se adapta al
proyecto).

Por cada color necesito:

| Campo | Formato / ejemplo |
|---|---|
| Nombre del rol | `Primary` / `Secondary` / `Accent 01` |
| Descripción | referencia legible, ej. `Color Reference: Blue 700` |
| HEX | `004C97` (sin `#`) |
| RGB | `R 0 · G 76 · B 151` |
| CMYK | `C 100 · M 50 · Y 0 · K 41` |
| Pantone | `Pantone 2945 C` (o `N/A` si no aplica) |
| Nivel de accesibilidad | `AAA` / `AA` / `Fail` (contra el fondo de referencia, normalmente blanco) |
| Ratio de contraste | `8.47:1` |

Y por cada **sección de rol** (Primary / Secondary / Accent), la lista de
usos recomendados (chips), ej.: `CTA's · Headers · Hero surfaces · Logo`.

---

## 3 · Semantic Colors

Los **tokens y roles se mantienen** (son la estructura del sistema); lo que
cambia es el **HEX** y la **primitive de referencia** de cada uno. Necesito
completar, para cada fila, `color` (HEX) y `reference` (path a la primitive
de Global Colors) — el `role` y el `token` ya están fijados por el master:

**Superficies de acción y soporte**
- CTA Primary: Default · Pressed · Disabled
- CTA Secondary: Default · Pressed · Disabled
- Soporte: Highlight · Selected · Active

**Estructura UI**
- Bordes: Default · Strong · Brand
- Bordes de estado: Error · Success · Warning · Info
- Iconos: Brand · Default · Inverse
- Focus: Default

**Colores de fondo**
- Base: Default · Subtle · Muted · Inverse
- Marca primaria: Primary · Soft · Light · Dark
- Marca secundaria: Secondary · Soft · Light · Dark
- Accent 01/02/03 (uno por cada accent de Brand Colors): base · Soft · Light · Dark
- Estados: Error · Success · Warning · Info

**Colores de texto**
- Marca: Brand Primary · Brand Strong · Interactive · Interactive On Dark
- Neutral: Primary · Secondary · Support (+ sus versiones On Dark)
- Acento: uno por Accent
- Semántico: Error · Success · Warning · Info

Formato por fila:

| role | color (HEX) | token | reference |
|---|---|---|---|
| Primary Default | `#1677D8` | `color/surface/cta/primary/default` | `color/primitive/blue/500` |

> Nota: si Brand Colors tiene más o menos de 3 accents, agregar/quitar los
> grupos "Accent 0N" correspondientes en Fondos y Texto de acento.

---

## 4 · Typography Foundations

Para cada familia:

| Campo | Tipografía primaria de marca | Tipografía secundaria (opcional) | Tipografía funcional |
|---|---|---|---|
| Familia | `Manrope` | `Source Serif 4` | `Inter` |
| Pesos aprobados | `Medium · Semi Bold · Bold` | — | — |
| Rol principal | descripción corta | | |
| Uso recomendado | `Display · Headlines · Campaigns` | | |

Y para los CTA:

| Campo | CTA de producto | CTA de comunicación |
|---|---|---|
| Familia | `Inter` | `Manrope` |
| Weight | `Semi Bold` | `Semi Bold` |
| Prioridad | | |
| Ejemplos de uso | `Buttons · Links · Tabs` | `Campaign CTA · Landing CTA` |

Si el proyecto **no usa** tipografía secundaria de marca, marcar la card como
`N/A` (el master ya la contempla como opcional).

---

## 5 · Typography System

### 5.1 Jerarquía de marca (tabla fija de 6 tokens)

Para cada uno de estos 6 tokens (los nombres NO cambian), completar familia /
weight / size / line-height / letter-spacing / uso:

`type/brand/display/lg` · `type/brand/display/md` · `type/brand/heading/lg` ·
`type/brand/heading/md` · `type/brand/subtitle` · `type/brand/label`

| token | family | weight | size | line-height | letter-spacing | uso |
|---|---|---|---|---|---|---|
| `type/brand/display/lg` | `Manrope` | `Semi Bold` | `56 px` | `64 px` | `-1%` | `Hero · Campaigns` |

### 5.2 Tokens responsive (Desktop / Tablet / Mobile)

Para cada dispositivo, 3 categorías fijas — **Titles** (`lg`/`md`/`sm`),
**Body** (`lg`/`md`/`sm`), **CTA** (`md`/`sm`) — total 8 tokens por
dispositivo. Formato por fila:

| token | size (px) | line-height (px) | weight (400 o 600) |
|---|---|---|---|
| `type/desktop/title/lg` | `32` | `40` | `600` |

*(el master usa Inter para todo lo funcional/responsive; si el proyecto usa
otra familia funcional, indicarlo una sola vez — aplica a las 24 filas)*

---

## 6 · Visual Styles

Estas escalas suelen ser **más estables entre proyectos** (son sistema, no
marca) — completar solo si el proyecto necesita otra escala. El único color
que cambia es el de las previews (`SAMPLE`, hoy `#3c5c87` — usar Primary o un
neutral de marca).

| Escala | Qué necesito |
|---|---|
| Spacing | lista de valores en px (hoy: 2,4,6,8,12,16,24,32,40,48,56,64,80,96,104) + uso por valor |
| Border Radius | lista de valores en px + `full` (9999) + uso por valor |
| Borders | lista de grosores en px (hoy: 0.6,1,2,3,4,5) + uso |
| Shadows | 3 niveles (Low/Medium/High): offset-y, blur, color+opacidad, uso |
| Sizing — alturas de componente | 4 niveles (Display/Standard/Compact/Small) en px |
| Sizing — íconos | lista de tamaños en px (hoy: 16,18,20,24,32,40,48,56,72) |

---

## 7 · Grid System

- **Anatomía de la grilla** (Columns/Margins/Gutters/Baseline/Safe Zones):
  estructural, normalmente no cambia por proyecto.
- **Baseline global**: valor en px (hoy `4 px`) — indicar si el proyecto usa otro.

---

## 8 · Grid Application

Tabla de formatos de referencia — se puede editar libremente (agregar, quitar
o modificar canales según los formatos reales que use el proyecto). Por cada
fila:

| Campo | Ejemplo |
|---|---|
| Canal | `WEB` / `SOCIAL` / `VIDEO` / `EMAIL` / `DISPLAY` |
| Formato | `Desktop`, `Feed Portrait`, … |
| Medida | `1440×1024` |
| Columnas | `12` |
| Margin | `80` |
| Gutter | `24` |
| Safe Zone | `H:80 / V:80` |
| Objetivo | frase corta de uso |

Y opcionalmente, 1 wireframe representativo por familia de canal (Web /
Social / Video / Display) con: medida + spec de grilla (`12 col · M80 · G24`).

---

## 9 · Lo que NO hace falta pedir

- **Introducción** y **handbook ("Mis componentes")**: son contenido del
  sistema en sí, no de la marca — no cambian por proyecto.
- **Nombres de tokens, categorías y copy de gobernanza**: son estructura fija
  del master.
- **`AjustesPage`**: placeholder, sin contenido.

---

*Generado para uso interno del equipo de diseño — sirve como base para,
a futuro, alimentar este formulario desde Notion y automatizar el completado
del sitio.*
