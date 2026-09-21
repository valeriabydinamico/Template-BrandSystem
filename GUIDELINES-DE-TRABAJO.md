# Cómo trabajo en este dashboard — guía para diseñadores

Este documento resume los criterios que sigo (Claude) al armar o actualizar
contenido en el dashboard del Brand System, para que cualquier diseñador que
trabaje conmigo en el proyecto sepa qué esperar y qué información conviene
darme para avanzar más rápido.

## 1. La UI nunca cambia por el contenido

El dashboard tiene un lenguaje visual propio: encabezado de página, secciones
con cards en vivo, bloque de gobernanza al final, barra de metadato — y una
librería de componentes propios (tarjetas de color, tags de token, badges,
notas, etc.).

**Regla:** esa UI se mantiene en el 100% de los casos, sin importar de dónde
venga el contenido nuevo (Figma, Notion, un doc de texto, lo que sea). No
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
  - Si viene de **Notion**, mantengo su propia jerarquía — títulos H1/H2/H3,
    acordeones/toggles, tablas, listas — y la traduzco a su equivalente de
    UI (un H2 se vuelve una sección, un H3 un grupo, una tabla se queda como
    tabla o pasa a grid de cards según lo que muestre, etc.). No aplano el
    documento ni le impongo la estructura de otra página del sitio.
- **Página que ya tiene contenido real documentado:** antes de tocar nada,
  **siempre pregunto** si mantenemos el formato actual de esa página o
  adoptamos el formato nuevo que trae el contenido — sea que venga de Figma
  o de Notion. La UI se mantiene igual elijamos lo que elijamos.

**Excepción:** si desde el principio me indican explícitamente que hay que
aplicar un formato nuevo, sigo esa instrucción directa en vez de preguntar.
Esto es solo sobre formato — la UI nunca entra en esta excepción.

## 3. Todo campo de marca hardcodeado es un dato obligatorio

Cada página documenta datos reales de marca (un HEX, un nombre de fuente, un
valor de spacing…). La regla es simple pero importante:

- **Si falta algún dato obligatorio de un ítem, ese ítem no se muestra** —
  no se muestra "a medias". Solo se exceptúan los campos que un componente
  calcula solo (por ejemplo, el ratio de contraste de un color, que se
  deriva del HEX).
- Todo lo que queda oculto por falta de datos se registra en **Registro de
  completado** (uno de los botones del pie del sidebar), separado en 🟡
  *datos parciales* y 🔴 *sin datos*, con el detalle exacto de qué falta.
- Una sección entera desaparece si todos sus ítems quedaron ocultos — es una
  consecuencia natural, no una regla aparte.

**Para diseñadores:** si un color, un token o una fila no aparece en el
sitio después de pasarme datos, casi siempre es porque falta un campo
puntual — revisen el Registro de completado para ver exactamente cuál.

## 4. Nomenclatura de tokens/rutas

Todo token de marca (el identificador que aparece bajo cada card, ej.
`color_system/global/primary/700`) sigue siempre el mismo esquema:

```
<página>/<subpágina>/<sección>/<paleta si tiene>/<tono>
```

Esto hace que cualquiera pueda ubicar de dónde sale un valor solo con leer
su ruta, sin tener que abrir la página. No es algo que los diseñadores
tengan que armar a mano — yo lo genero o lo ajusto siguiendo este esquema.

## 5. Ajustes — no todo proyecto usa todo el catálogo

El catálogo maestro documenta mucho más de lo que un cliente puntual
necesita. Desde **Ajustes** (pie del sidebar) se puede prender o apagar
cada página/módulo con un switch, con 3 presets de partida (todo prendido,
un set reducido, o todo apagado). Apagar un módulo:

- Lo oculta del sidebar, pero **no borra ni modifica su contenido**.
- No lo hace aparecer en el Registro de completado (apagado a propósito ≠
  oculto por falta de datos).

**Para diseñadores:** si buscan una página y no la ven en el sidebar, puede
estar simplemente apagada en Ajustes para ese proyecto — no significa que no
exista.

## 6. Buscador global del sidebar

El campo de búsqueda arriba de toda la navegación busca por **nombre o
título** en todo el catálogo (no busca texto de párrafo). Al elegir un
resultado, salta directo a esa página y resalta el ítem exacto un momento.
Un ítem oculto por falta de datos tampoco aparece acá — mismo criterio que
el resto del sitio.

## 7. Las páginas del pie del sidebar

Mis componentes, Registro de completado, Informe y Ajustes son herramientas
del dashboard, no contenido de marca — ver el documento aparte
`PIE-DEL-SIDEBAR.md` con el detalle de cada una.

## 8. Cómo pedirme cambios

Para ir más rápido, ayuda pasarme:

- **Página nueva:** una estructura mínima (qué secciones/grupos tiene, qué
  campo lleva cada ítem) — o directamente un documento de Notion/Figma, que
  ya sé leer su jerarquía.
- **Página existente que se actualiza:** de qué fuente viene el contenido
  nuevo (Figma/Notion/otro) — les voy a preguntar si mantenemos el formato
  actual o adoptamos el nuevo, salvo que ya me digan cuál usar.
- **Datos de color/tipografía/spacing:** el valor puntual (HEX, tamaño,
  nombre de fuente…) — yo calculo lo derivable (RGB, HSL, ratio de
  contraste) y armo el token/ruta correspondiente.
