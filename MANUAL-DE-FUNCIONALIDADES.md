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

- **Cambios** — cada cambio que se hace en el dashboard en sí (una
  funcionalidad, un componente, un ajuste de interfaz, un cambio de
  estructura), con su fecha y una descripción de qué se hizo y cómo funciona.
  Se registra **automáticamente** con cada cambio, sin pedirlo.
- **Pendientes** — ideas anotadas que todavía no se ejecutaron.
- **Resúmenes** — por cada página que se completó con contenido real: qué se
  hizo y qué se dejó afuera (y por qué).

Las tres tabs se muestran siempre **de lo más reciente a lo más antiguo**, y
cada una tiene su propio **buscador** arriba de la lista: ignora mayúsculas y
tildes, y encuentra las entradas que contengan todas las palabras que
escribas (en cualquier orden). Muestra cuántas coinciden ("2 de 10").

**Marcar un pendiente como listo:** cada pendiente tiene un botón **Marcar como
listo**. Al tocarlo queda tachado, con la etiqueta "Listo" y la fecha en que
se completó; el botón pasa a **Reabrir**, por si te arrepentís. Igual que
"Revertir cambio", solo funciona al correr el dashboard en tu computadora
(`npm run dev`): el cambio queda escrito en el proyecto, así que se sube a
GitHub con `/guardar` como cualquier otro.

**Revertir un cambio:** cada mejora tiene un botón **Revertir cambio**, para
cuando estás trabajando, se hizo algo y no te gustó. Al tocarlo se abre una
ventana que muestra exactamente qué se va a deshacer; si confirmás, se deshace
**solo ese cambio** y el resto de tu trabajo se conserva. La mejora desaparece
de la lista.

Funciona en estos casos:

- **El cambio todavía no está guardado** (sin commit): se deshace en los
  archivos y queda como cambio sin guardar para que lo revises. Antes se guarda
  una copia de seguridad, por si te arrepentís.
- **El cambio ya está commiteado, o ya subido a GitHub:** también se puede
  revertir. Si la mejora tiene su registro, se deshace en los archivos igual
  que arriba; si solo tiene commit, se crea un commit nuevo que lo revierte
  (no se borra el historial). Para subirlo hay que guardarlo después
  (`/guardar`).

Tené en cuenta:

- **Solo funciona al correr el dashboard en tu computadora** (`npm run dev`).
  En el sitio publicado el botón aparece deshabilitado.
- Si otros cambios posteriores tocan las mismas líneas, no se puede deshacer
  solo ese cambio sin pisar lo que vino después: el modal te avisa y no
  modifica nada.
- Las mejoras anteriores a esta función no tienen registro, así que no se
  pueden revertir desde el botón (salvo las que ya tengan un commit asociado).
  Todas las mejoras nuevas sí quedan registradas.

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

## Comandos

Atajos para trabajar con la IA en este proyecto. Se escriben con una barra
`/` pegada al nombre, **al principio del mensaje**, seguido de lo que
quieras pedir. Al escribir `/` en el chat aparece la lista con todos.

| Comando | Para qué sirve | Ejemplo |
|---|---|---|
| `/documentar` | Documentar una página con el contenido de un link (Notion/Figma) o un documento. Mantiene la estructura de la página, suma lo que no encaja como sección nueva, verifica y deja el resumen en el Informe. | `/documentar https://notion.so/... Público Objetivo` |
| `/paginanueva` | Crear una página nueva con el alta completa (sidebar, Ajustes, buscador, Registro) y su plantilla en blanco. Pregunta el nombre y el tipo: página única, grupo con sub-páginas, sub-página o categoría. | `/paginanueva Accesibilidad` |
| `/revisar` | Modo consulta: la IA responde solo en el chat y **no modifica nada** del dashboard. | `/revisar ¿esta página sigue la estructura del template?` |
| `/verificar` | Compila el proyecto y revisa en el navegador que todo se vea bien, sin modificar archivos. | `/verificar Semantic Colors` |
| `/pendiente` | Anota una idea para más adelante, sin ejecutarla. | `/pendiente Revisar el tooltip del sidebar comprimido` |
| `/guardar` | Commitea y pushea los cambios a GitHub. Si el branch es `main`, pide confirmación porque el push publica el sitio. | `/guardar` |

El detalle de cada proceso está documentado en `GUIDELINES-DE-TRABAJO.md`
(`/documentar`) y en `CLAUDE.md` (`/paginanueva`, `/verificar`, `/guardar`,
`/pendiente`). Los archivos de `.claude/commands/` son solo el
atajo que activa cada comando.

## Si no encuentro algo

- **No veo una página en el sidebar** → puede estar apagada en Ajustes.
- **Un color, token o fila no aparece en la página** → casi siempre falta un
  campo obligatorio; el Registro de completado dice cuál.
