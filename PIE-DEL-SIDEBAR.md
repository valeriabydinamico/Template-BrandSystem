# Pie del sidebar — qué es cada página y para qué sirve

Guía rápida para diseñadores que trabajan en el dashboard. En la parte de
abajo del sidebar hay 4 botones (íconos) que no son parte del catálogo de
marca — son herramientas de trabajo del dashboard en sí.

## 📚 Mis componentes

Catálogo vivo de todos los componentes propios del dashboard (PageHeader,
Badge, GovernanceRule, ColorCard, SemanticColorCard, TokenTag, Note, etc.),
cada uno renderizado en vivo con sus variantes.

**Para qué sirve:** es la referencia de "con qué piezas está construido el
dashboard" — antes de armar una página nueva o pedir un cambio, conviene
revisar acá qué componente ya existe para no duplicar algo parecido con otro
nombre o estilo.

## ✅ Registro de completado

Historial de qué se ocultó del sitio por falta de datos de marca, separado
en dos categorías:
- 🟡 **Datos parciales** — vino algo del ítem, pero no todo lo obligatorio.
- 🔴 **Sin datos** — no vino nada de ese ítem todavía.

También lista las páginas que están prendidas en Ajustes pero todavía no
tienen contenido real (siguen como placeholder).

**Para qué sirve:** es el checklist de "qué le falta al brief de marca para
que el sitio se vea completo" — cada fila dice exactamente qué campo falta
por ítem, así se puede ir a buscar ese dato puntual en vez de adivinar qué
quedó afuera.

## 📄 Informe

Historial de mejoras **estructurales y funcionales del dashboard en sí**
(sidebar, buscador, Ajustes, convenciones de nomenclatura…) — separado del
contenido de marca que documenta cada página, y separado del Registro de
completado (que reporta datos faltantes, no funcionalidades).

**Para qué sirve:** para que cualquiera que entre al proyecto entienda qué
se construyó recientemente en el dashboard y qué queda pendiente de decidir
o implementar, sin tener que leer el historial de git.

## ⚙️ Ajustes

Panel de control para prender o apagar cada página/módulo del catálogo con
un switch — independiente de si esa página tiene datos completos o no.
Incluye 3 presets de partida (Large = todo prendido, Light = un set
reducido, Deshabilitar todo = todo apagado) y un buscador para encontrar un
módulo puntual por nombre.

**Para qué sirve:** cada proyecto de cliente no necesariamente usa todas las
páginas del catálogo maestro — acá se arma qué partes del dashboard aplican
a ese proyecto en particular, sin borrar ni tocar el contenido de las
páginas que se apagan (quedan ahí por si se vuelven a necesitar).

---

*Nota: el botón de comprimir/expandir el sidebar (flecha) no es una página,
solo cambia el ancho del panel de navegación.*
