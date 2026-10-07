# Manual de funcionalidades — qué hace cada herramienta del dashboard

Guía para quien trabaja en el dashboard: qué hace cada cosa y para qué sirve.
Las reglas de cómo se arma el contenido están en `GUIDELINES-DE-TRABAJO.md`;
cómo está construido por dentro, en `CLAUDE.md`.

## Sidebar

Agrupa las páginas del catálogo en 5 categorías: **Strategy**, **Foundations**,
**Components**, **Templates** y **Brand Ops**. Algunas páginas tienen
sub-páginas (Color System, Typography System, Layout & Grid).

- **Comprimir / expandir:** la flecha de abajo del todo achica el panel a una
  columna de íconos. Comprimido, los grupos con sub-páginas abren un menú
  flotante al hacer click.
- Al cambiar de página, el contenido vuelve siempre arriba de todo.

## Buscador

El campo arriba de la navegación busca por **nombre o título** en todo el
catálogo (no busca texto de párrafo). Al elegir un resultado salta a esa
página y resalta el ítem exacto un momento. Un ítem oculto por falta de datos
tampoco aparece acá.

## Botones del pie del sidebar

No son contenido de marca: son herramientas de trabajo del dashboard.

### Mis componentes

Catálogo vivo de los componentes propios del dashboard (PageHeader, Badge,
ColorCard, TokenTag, Note, etc.), cada uno con sus variantes en vivo.

**Para qué sirve:** es la referencia de "con qué piezas está construido".
Antes de armar una página nueva o pedir un cambio, conviene revisar qué
componente ya existe para no duplicar algo parecido.

### Registro de completado

Dice qué le falta al sitio para estar completo. Tiene dos tabs:

- **Por documentar** — páginas que están prendidas pero todavía muestran la
  plantilla en blanco del master (sin el contenido real del proyecto), e
  ítems a los que no llegó ningún dato (🔴 *sin datos*).
- **Contenido parcial** — páginas con solo una parte del contenido real, e
  ítems a los que llegaron algunos datos pero no todos los obligatorios
  (🟡 *datos parciales*), con el detalle de qué campo falta.

Solo evalúa los módulos prendidos en Ajustes.

**Para qué sirve:** es el checklist de "qué falta pedirle al cliente" — cada
fila dice exactamente qué falta, así se busca ese dato puntual en vez de
adivinar.

### Informe

Historial de trabajo sobre el dashboard, con tres tabs:

- **Mejoras** — funcionalidades que se construyeron en el dashboard (con
  fecha).
- **Pendientes** — ideas anotadas que todavía no se ejecutaron.
- **Resúmenes** — por cada página que se completó con contenido real: qué se
  hizo y qué se dejó afuera (y por qué).

**Para qué sirve:** que cualquiera que entre al proyecto entienda qué se
construyó y qué quedó pendiente, sin leer el historial de git.

### Ajustes

Panel para prender o apagar cada página del catálogo con un switch,
independiente de si tiene datos completos. Trae 3 presets de partida
(**Large** = todo prendido, **Light** = un set reducido, **Deshabilitar
todo** = todo apagado) y un buscador para encontrar un módulo por nombre.

Apagar un módulo:

- Lo oculta del sidebar, pero **no borra ni modifica su contenido**.
- Hace que no aparezca en el Registro de completado (apagado a propósito ≠
  oculto por falta de datos).
- Si apagás todas las páginas de un grupo, el grupo desaparece del sidebar.

**Para qué sirve:** cada cliente no usa todo el catálogo maestro; acá se arma
qué partes aplican a ese proyecto. La configuración se guarda en tu navegador.

## Si no encuentro algo

- **No veo una página en el sidebar** → puede estar apagada en Ajustes.
- **Un color, token o fila no aparece en la página** → casi siempre falta un
  campo obligatorio; el Registro de completado dice cuál.
