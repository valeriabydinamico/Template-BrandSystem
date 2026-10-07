# Cómo trabajo en este dashboard — guía para diseñadores

Este documento resume los criterios que sigo (Claude) al armar o actualizar
contenido en el dashboard del Brand System, para que cualquier diseñador que
trabaje conmigo en el proyecto sepa qué esperar y qué información conviene
darme para avanzar más rápido.

Es el **único documento de reglas de trabajo**. Para saber qué hace cada
herramienta del dashboard (Ajustes, Registro, Informe, buscador…) ver
`MANUAL-DE-FUNCIONALIDADES.md`; para cómo está construido, `CLAUDE.md`.

## 1. La UI nunca cambia por el contenido

El dashboard tiene un lenguaje visual propio: encabezado de página, secciones
con cards en vivo, bloque de gobernanza al final, barra de metadato — y una
librería de componentes propios (tarjetas de color, tags de token, badges,
notas, etc.).

**Regla:** esa UI se mantiene en el 100% de los casos, sin importar de dónde
venga el contenido nuevo (Figma, Notion, un documento, lo que sea). No
copio el diseño o el formato visual de la fuente — siempre traduzco el
contenido a los componentes que ya existen acá.

La única forma en que la UI cambia es si en algún momento se decide,
explícita y aparte, **rediseñar** el dashboard. Eso nunca pasa como efecto
secundario de subir contenido nuevo.

## 2. El formato (cómo se agrupa el contenido) sí puede variar

"Formato" es distinto de "UI": es la forma de **agrupar y jerarquizar** el
contenido — qué secciones hay, cómo se agrupan los ítems, en qué orden. Acá
sí hay lugar para decisión, y depende de si la página es nueva o ya existe:

- **Página nueva, sin contenido todavía:** uso directamente el formato que
  llega con el contenido, sin preguntar.
  - Si viene como una estructura acordada con el equipo (con o sin Figma),
    respeto esa agrupación tal cual.
  - Si viene de **Notion** (o de un documento con títulos y tablas),
    mantengo su propia jerarquía — títulos H1/H2/H3, acordeones/toggles,
    tablas, listas — y la traduzco a su equivalente de UI (un H2 se vuelve
    una sección, un H3 un grupo, una tabla se queda como tabla o pasa a
    grid de cards según lo que muestre, etc.). No aplano el documento ni le
    impongo la estructura de otra página del sitio.
- **Página que ya tiene contenido real documentado:** antes de tocar nada,
  **siempre pregunto** si mantenemos el formato actual de esa página o
  adoptamos el formato nuevo que trae el contenido — sea que venga de Figma,
  de Notion o de un documento. Si la fuente trae datos que no entran en el
  formato actual, los sumo como secciones nuevas, siempre con la UI del
  dashboard. La UI se mantiene igual elijamos lo que elijamos.

**Excepción:** si desde el principio me indican explícitamente que hay que
aplicar un formato nuevo, sigo esa instrucción directa en vez de preguntar.
Esto es solo sobre formato — la UI nunca entra en esta excepción.

## 3. Todo campo de marca hardcodeado es un dato obligatorio

Las páginas que siguen la regla de completitud (hoy Visual Styles)
documentan datos reales de marca (un HEX, un nombre de fuente, un valor de
spacing…). La regla es simple pero importante:

- **Si falta algún dato obligatorio de un ítem, ese ítem no se muestra** —
  no se muestra "a medias". Solo se exceptúan los campos que un componente
  calcula solo (por ejemplo, el ratio de contraste de un color, que se
  deriva del HEX).
- Todo lo que queda oculto por falta de datos se registra en **Registro de
  completado**, con el detalle exacto de qué falta.
- Una sección entera desaparece si todos sus ítems quedaron ocultos — es una
  consecuencia natural, no una regla aparte.

**Para diseñadores:** si un color, un token o una fila no aparece en el
sitio después de pasarme datos, casi siempre es porque falta un campo
puntual — revisen el Registro de completado para ver exactamente cuál.

## 4. Nomenclatura de tokens/rutas

Todo token de marca (el identificador que aparece bajo cada card, ej.
`color_system/global/primary/700`) y todo campo equivalente (como "Dónde
encontrarlo" en Grid Application) sigue siempre el mismo esquema:

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

Esto hace que cualquiera pueda ubicar de dónde sale un valor solo con leer
su ruta, sin tener que abrir la página. No es algo que los diseñadores
tengan que armar a mano — yo lo genero o lo ajusto siguiendo este esquema.
El buscador del sidebar deriva sus anclas del token, así que cambiar un token
también cambia su ancla.

## 5. Cómo pasarme el contenido

La fuente del contenido **depende de cada cliente**: puede venir de una sola
o de varias a la vez. Estas son las que sé leer hoy:

- **Link de Notion** — lo leo directo por MCP, con su jerarquía (títulos,
  toggles, tablas, listas).
- **Link de Figma** — lo leo por MCP (estructura, valores, capturas del
  nodo). Requiere que la app de escritorio de Figma esté abierta con el
  archivo. Si el frame es solo una referencia de estructura (colores de
  ejemplo), tomo la estructura y los nombres; si trae contenido real de la
  marca (valores y textos propios), uso esos valores tal cual.
- **Documentos adjuntos** — PDF, Word, Markdown, texto u otros. Los leo
  completos y aplico las mismas reglas de arriba.

Para ir más rápido, ayuda pasarme:

- **Página nueva:** el link o documento de la fuente, o una estructura mínima
  (qué secciones/grupos tiene, qué campo lleva cada ítem).
- **Página existente que se actualiza:** de qué fuente viene el contenido
  nuevo — les voy a preguntar si mantenemos el formato actual o adoptamos el
  nuevo, salvo que ya me digan cuál usar.
- **Datos de color/tipografía/spacing:** el valor puntual (HEX, tamaño,
  nombre de fuente…) — yo calculo lo derivable (RGB, HSL, ratio de
  contraste) y armo el token/ruta correspondiente.

**Después de cada página completada** dejo un resumen en la tab Resúmenes del
Informe: qué se hizo y qué quedó afuera (y por qué). Si la página ya tenía
resumen, el cambio nuevo se suma a ese mismo en vez de crear uno aparte.
