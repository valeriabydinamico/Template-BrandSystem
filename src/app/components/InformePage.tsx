import { useState } from 'react'
import { PageHeader } from './PageHeader'
import { SectionHeader } from './docs/shared'

/* ────────────────────────────────────────────────────────────────────────────
 * Informe — historial de trabajo sobre el dashboard, dividido en 3 tabs:
 *   - Mejoras: cambios estructurales/funcionales del dashboard en sí
 *     (sidebar, buscador, Ajustes, convenciones de datos…).
 *   - Pendientes: trabajo del dashboard todavía no ejecutado.
 *   - Resúmenes: por cada página de contenido de marca completada con datos
 *     reales de un proyecto (ej. Myntex), qué se hizo y qué se dejó
 *     deliberadamente afuera (para poder auditar el criterio sin tener que
 *     releer la página entera o el Notion fuente).
 * Las tres listas se actualizan a mano cada vez que se cierra un cambio
 * relevante — no se calculan de ningún reporte, a diferencia de `RegistroPage`.
 * ────────────────────────────────────────────────────────────────────────── */

interface Entry {
  title: string
  status: 'done' | 'pending'
  fecha: string
  description: string
}

const MEJORAS: Entry[] = [
  {
    title: 'Ajustes — preset "Deshabilitar todo" + buscador de módulos',
    status: 'done',
    fecha: '2026-09-20',
    description:
      'Tercer preset (apaga todo el catálogo de una) y un buscador entre los presets y la lista de categorías que filtra por nombre de grupo o de sub-página.',
  },
  {
    title: 'Buscador global del sidebar',
    status: 'done',
    fecha: '2026-09-20',
    description:
      'Campo de búsqueda arriba de toda la navegación: indexa títulos y nombres de todo el catálogo y, al elegir un resultado, navega y hace scroll + resalta el ítem exacto.',
  },
  {
    title: 'Nomenclatura única de tokens/rutas',
    status: 'done',
    fecha: '2026-09-20',
    description:
      'Esquema <página>/<subpágina>/<sección>/<paleta si tiene>/<tono> aplicado en Semantic Colors, Typography System, Visual Styles y Grid Application.',
  },
  {
    title: 'Catálogo completo construido como master template en blanco',
    status: 'done',
    fecha: '2026-09-21',
    description:
      'Strategy, Foundations, Components, Templates y Brand Ops completos (32 páginas) siguiendo los .md de estructura de presentación por categoría. Ya no queda ningún PlaceholderPage — el Registro de completado muestra "Todo completo".',
  },
  {
    title: 'Informe dividido en tabs (Mejoras / Pendientes / Resúmenes)',
    status: 'done',
    fecha: '2026-09-22',
    description:
      'Se suma la tab "Resúmenes": un resumen por página de contenido real completada con el brief de un proyecto (qué se hizo, qué se dejó afuera y por qué), separado de las mejoras del dashboard en sí.',
  },
  {
    title: 'Nueva variante "combination" en ColorCard',
    status: 'done',
    fecha: '2026-09-22',
    description:
      'Documenta pares de color (fondo + texto) con badge de contraste calculado en vivo (AA/AAA/Fail) o badge manual para pares no recomendados ("Falla AA"/"Conflicto"). Usada por la categoría "Combinaciones aprobadas" de Semantic Colors.',
  },
]

const PENDIENTES: Entry[] = [
  {
    title: 'Redistribuir y eliminar Visual Styles',
    status: 'pending',
    fecha: '2026-09-20',
    description:
      'Repartir Spacing, Border Radius, Borders, Shadows y Sizing en las páginas de Foundations correspondientes, y luego eliminar el módulo "Visual Styles" completo.',
  },
  {
    title: 'Tooltip del sidebar con sub-páginas',
    status: 'pending',
    fecha: '2026-09-20',
    description:
      'En el rail comprimido, el tooltip de un grupo con sub-páginas (Color System, Typography System, Layout & Grid) hoy solo muestra el nombre del grupo.',
  },
  {
    title: 'Página real de Photography',
    status: 'pending',
    fecha: '2026-09-20',
    description:
      'Los componentes (PhotoCategoryCard, ImageCriteriaCard, ComparisonCard, ComparisonExampleCard) ya están construidos; falta el contenido real cuando lleguen las fotos de marca.',
  },
  {
    title: 'HEX vs. HSL como fuente de verdad',
    status: 'pending',
    fecha: '2026-09-20',
    description:
      'Consultar con el equipo si conviene documentar HSL en vez de HEX — el HEX es un redondeo aproximado del HSL definido en el picker de Figma, lo que pierde precisión.',
  },
]

interface ResumenEntry {
  pagina: string
  categoria: string
  proyecto: string
  fecha: string
  hecho: string[]
  afuera: string[]
}

const RESUMENES: ResumenEntry[] = [
  {
    pagina: 'Público Objetivo',
    categoria: 'Strategy',
    proyecto: 'Myntex',
    fecha: '2026-09-22',
    hecho: [
      'Se completaron las 5 secciones base del template (Contexto, Foco de audiencia, Segmentos prioritarios, Tensión estratégica, Implicaciones) con datos reales del brief de Notion.',
      'Se agregaron 3 secciones nuevas para contenido de Notion que no encajaba en el formato existente, manteniendo la UI del dashboard: "El hallazgo que ordena la comunicación", "Comité de compra" (los 3 roles, según el Ajuste v2.0) y "Lo que queda explícitamente fuera".',
      'Los 4 segmentos (el template traía 3 como referencia) incorporan los campos nuevos que trajo Notion: Quién firma, Quién veta y Usa a diario; el segmento 4 (secundario) lleva el badge "Secundario".',
      'El MetaFooter pasó de "Master Template" a "v2.0 · Público Objetivo · Strategy · Myntex" con pastilla de estado "Cliente".',
    ],
    afuera: [
      'Vacíos de investigación pendientes de validar (quién firma en un retailer, regla de governance Myntex↔Tafi, ciclos de venta/ticket promedio, caracterización del inbound) — son research status, no definición de audiencia.',
      'El listado de fuentes de la definición (transcripciones, benchmarks, links) — es trazabilidad metodológica, no contenido de marca.',
      'El historial del Ajuste v2.0 como changelog visible — se integró directamente la versión vigente de cada dato (ej. el segmento 2 "afinado", el comité de compra de 3 roles) en vez de mostrar las dos versiones superpuestas.',
    ],
  },
  {
    pagina: 'Enfoque de Marca',
    categoria: 'Strategy',
    proyecto: 'Myntex',
    fecha: '2026-09-22',
    hecho: [
      'Se completaron las 8 secciones del template con datos reales de Notion, usando siempre la versión vigente cuando el documento tenía varios ajustes: propósito → Ajuste v2.0 (se retira la palabra "privilegio"); los 5 mecanismos de "Cómo lo hacemos" → Ajuste v3.1, reescritos como principios de acción con servicio nombrado (Myntex Model, Setup, Connect, Deploy, Review).',
      'Misión de marca, Golden Circle y Principios estratégicos (secciones opcionales del template) ahora tienen contenido real en vez de quedar solo con la nota de "opcional".',
      'Se agregó una tabla de los 6 productos insignia dentro de "Qué hacemos" — dato nuevo de Notion sin casillero propio en el template.',
    ],
    afuera: [
      'Las tablas de "Opciones exploradas" para propósito, visión y territorio (candidatas descartadas y por qué) — es proceso de decisión, no el resultado vigente.',
      'Los vacíos declarados y el listado de fuentes de la definición.',
      'La dependencia de producción sobre distinción visual entre productos y servicios (F3) — es una nota para diseño, no contenido de Enfoque.',
    ],
  },
  {
    pagina: 'Principios de Marca',
    categoria: 'Strategy',
    proyecto: 'Myntex',
    fecha: '2026-09-22',
    hecho: [
      'Se pasó de 4 a 5 principios (PRINCIPLE_COUNT actualizado) para reflejar los 5 reales de Notion.',
      'Se agregó el campo "Lo que cuesta" a cada principio — dato nuevo de Notion sin casillero en el template.',
      '"Acompañamiento real" dejó de mostrar el badge "Aspiracional": el Ajuste v2.0 le da mecanismo (5 piezas de servicio). Se anota en el campo "Ejemplo visible" que su prueba en cliente externo sigue pendiente, en vez de mantener el badge.',
    ],
    afuera: [
      'Las tablas de "Opciones exploradas" (evolución de nombres, alternativas para los principios 4 y 5) y el principio evaluado y no incorporado.',
      'Los valores del taller que no se usaron (registrados en Notion como descarte).',
      'Las decisiones de proceso (migración del principio 4 desde el módulo 2, nota sobre el registro mixto) y el listado de fuentes.',
    ],
  },
  {
    pagina: 'Posicionamiento',
    categoria: 'Strategy',
    proyecto: 'Myntex',
    fecha: '2026-09-22',
    hecho: [
      'Se completaron las 9 secciones del template con datos reales, más 2 secciones nuevas sin casillero propio: "06. El Claim" y "09. Hero" — ambas piezas vigentes de copy sin lugar en la estructura original.',
      'Se usó siempre la versión vigente: claim y beneficio funcional → Ajuste v2.0; hero y jerarquía de líneas → Ajuste v2.1; descriptor de categoría → cambio del 25 ago 2026 ("el sistema operativo del crédito").',
      'El benchmark competitivo (3 competidores) y los tres beneficios únicos quedaron con datos reales completos; "A quién renunciamos" se completó con el "Test del no" de Notion.',
    ],
    afuera: [
      'El benchmark ampliado de Defacto (fuera de categoría, solo referencia de permiso visual) y el "Análisis del triángulo" completo (lo que quieren / lo que hacemos mejor / lo que hacen mejor ellos) — se resumió lo esencial dentro de las secciones existentes en vez de agregar una sección aparte.',
      'Las tablas de opciones evaluadas y descartadas (rutas de categoría, calificadores, claims, declaraciones) y los tests de validación del método (test del competidor, de las 15 palabras, etc.).',
      'Los vacíos declarados y el listado de fuentes.',
    ],
  },
  {
    pagina: 'Esencia y Personalidad',
    categoria: 'Strategy',
    proyecto: 'Myntex',
    fecha: '2026-09-22',
    hecho: [
      'Se completaron los 3 ejes (Probado, Claridad, Audaz) con origen, límite, comportamiento, narrativa, experiencia y expresión visual reales; el puente visual y la matriz intención × eje quedaron con sus tablas completas.',
      'El territorio conceptual usa la versión vigente del Ajuste v2.0 ("Del querer al poder"); se retiró "El privilegio de prestar", que en Notion queda marcado como reemplazado.',
      'Se agregó una sección nueva, "08. Pilares temáticos" (4 pilares con su eje y tensión), contenido de resultado final sin casillero en el template.',
      'Por pedido explícito, el tono de voz, las palabras a favorecer/evitar, la anti-personalidad verbal, las reglas de registro y los ejemplos "Así sí / Así no" (Sesión C de la misma página de Notion) NO se documentaron acá — se enviaron a Verbal Identity (ver esa entrada).',
    ],
    afuera: [
      'El test de estrés del territorio y los tests de la Sesión A (validación del método).',
      'Las opciones exploradas para nombres de ejes, para el territorio y para la nomenclatura de dimensiones.',
      'Las "pruebas de ocupación" del territorio (9 señales operativas) — se dejaron afuera por volumen, quedan pendientes si se necesitan más adelante.',
      'El listado de fuentes.',
    ],
  },
  {
    pagina: 'Concepto Creativo',
    categoria: 'Strategy',
    proyecto: 'Myntex',
    fecha: '2026-09-22',
    hecho: [
      'Se completó el concepto Threshold / El umbral: nombre, mecanismo, los 3 elementos (vano/secuencia/corte) y los 5 principios visuales (no 3–4 como sugería la guía genérica — se usaron los 5 reales de Notion).',
      'Se agregó una sección nueva, "07. Material y color" (acero corten, territorio cromático, las 2 cautelas para F3) — resultado final sin casillero en el template.',
      'Se anotó la coincidencia estructural (5 arcos = 5 principios de marca + 5 etapas del ciclo) como nota dentro de la sección de elementos, sin crear una sección aparte para no fragmentar demasiado.',
    ],
    afuera: [
      'Las dos direcciones alternativas exploradas ("Sin letra pequeña", "La medida") y por qué no ganaron — ya excluido por diseño original de esta página.',
      'El paquete de entrega a F3 (tabla de qué alimenta qué) y los tests del módulo — son bitácora de traspaso a producción, no el concepto en sí.',
      'Los criterios de calidad y errores comunes del método, y el listado de fuentes.',
    ],
  },
  {
    pagina: 'Verbal Identity',
    categoria: 'Strategy',
    proyecto: 'Myntex',
    fecha: '2026-09-22',
    hecho: [
      'Se completaron las 14 secciones del template con el contenido verbal de la Sesión C de "Personalidad, Esencia y Territorio" (tono de voz, vocabulario, anti-personalidad) — por pedido explícito, ese contenido vive acá y no en Esencia y Personalidad.',
      'Las 5 reglas de registro de Notion se repartieron entre las secciones existentes que ya las pedían (formalidad, ritmo, gramática, pronombres) además de listarse completas en "07. Principios de escritura", en vez de dejarlas sueltas o duplicar una sección nueva.',
      '"13. Ejemplos de aplicación" se completó con la tabla "Ante Tecnología / Ante Riesgo" (cómo se resuelve el doble comprador) — encajaba mejor ahí que crear una sección aparte.',
      '"12. Reglas por canal" quedó con una nota de "no documentado" en vez de placeholder entre corchetes: Notion no trae reglas específicas por canal para este proyecto todavía.',
    ],
    afuera: [
      'Nada del contenido de la Sesión C quedó afuera — se repartió íntegro entre las 14 secciones existentes del template.',
      'El listado de fuentes de la definición (compartido con Esencia y Personalidad, ya registrado en esa entrada).',
    ],
  },
  {
    pagina: 'Global Colors',
    categoria: 'Foundations',
    proyecto: 'Master Template',
    fecha: '2026-09-22',
    hecho: [
      'Se reestructuró la página en 3 grupos según el frame de Figma "Como entregar los global colors" (nodo 16353:5983): Básicos (White/Black), Paleta cromática (Blue, Light Blue, Orange, Teal, Apple, Ink, Gray) y Colores de sistema (Green/Amber/Red/Blue funcionales) — antes eran 6 secciones separadas (Primary/Secondary/Tertiary/Neutral/Functional/Gradients).',
      'Los valores HEX/RGB/HSL y los tokens (`color_system/global/...`) se mantuvieron sin cambios — se verificaron contra Figma y coinciden con los que ya estaban en `src/imports/01GlobalColors-1`. Solo cambió el agrupamiento visual, no el dato ni el componente (`ColorCard`).',
      'Se agregó un nuevo par "Básicos" (White #FFFFFF, Black #16181D) que no existía como grupo propio antes — reutiliza el HEX ya definido de Gray/50 e Ink/900, con token nuevo bajo `color_system/global/basicos/*`.',
    ],
    afuera: [
      'La sección de Gradientes (8 degradados) se sacó de la página: no forma parte del frame de referencia que definió esta reestructuración. Sigue en el historial de git si hace falta recuperarla.',
      'Nota de contexto: esta página pasó primero por una confusión — se había restaurado usando otro nodo de Figma ("01 Global Colors" completo) antes de que el usuario aclarara que el nodo correcto era "Como entregar los global colors". Este resumen documenta el resultado final ya corregido.',
    ],
  },
  {
    pagina: 'Semantic Colors',
    categoria: 'Foundations',
    proyecto: 'Master Template',
    fecha: '2026-09-22',
    hecho: [
      'Se reestructuró la página en 7 grupos según el frame de Figma "Specific Light/Dark Color" (nodo 16407:16841): Content, Content State, Background, Background State, Border, Semantic y Semantic State — antes eran 4 secciones (Superficies de acción y soporte / Estructura UI / Fondos / Texto).',
      'Se mantuvo el componente `SemanticColorCard` (con sus pastillas de contraste/WCAG calculadas solas) y el esquema de tokens del dashboard (`color_system/semantic/<sección>/<rol>`); solo se tomaron del frame los nombres de grupo y de rol (Content 1/2/3/Inverse, Background 1/2/3/Inverse, Border 1/2/3/Inverse, Semantic Highlight/Secondary/Danger/Warning/Success).',
      'Los valores HEX son primitives reales del master (Ink, Gray, Blue, Light Blue, funcionales) en vez de los del ejemplo de Figma (que usaba Cyan/Lime/Red/Yellow/Green de otra paleta) — mapeo hecho a criterio: Content 1/2/3 = Ink 900/600/400, Background 1/2/3 = White/Ink 50/Ink 100, Border 1/2/3 = Ink 700/300/100, Semantic Highlight/Secondary = Blue/Light Blue 500, Danger/Warning/Success = funcionales Default.',
      '"Semantic State" solo documenta Danger y Highlight (como en el frame) porque son los únicos roles semánticos con estados de interacción en el ejemplo; Danger Hover/Active usan Default/Strong de la escala funcional (que solo tiene 3 pasos) en vez de inventar un cuarto valor.',
    ],
    afuera: [
      'Ninguna sección del contenido anterior se descartó por completo — se remapeó a la nueva agrupación (ej. lo que antes vivía en "Colores de fondo" ahora es "Background"/"Background State").',
      'Nota: el mapeo de qué primitive exacto usa cada rol (ej. por qué Content 2 = Ink/600 y no Ink/500) es una decisión de criterio propia, no algo que el frame de Figma especificara — avisar si algún rol debería apuntar a otro tono.',
    ],
  },
  {
    pagina: 'Semantic Colors — Combinaciones aprobadas',
    categoria: 'Foundations',
    proyecto: 'Myntex',
    fecha: '2026-09-22',
    hecho: [
      'Se agregó una categoría nueva dentro de Semantic Colors, "Combinaciones aprobadas", siguiendo el frame de Figma "Color Combinations" (nodo 16353:6727). A diferencia de los dos frames anteriores (que eran estructuras genéricas para rellenar con el master), este trae copy y valores reales de Myntex — se usaron tal cual, sin sustituir por primitives del master.',
      'Incluye la barra de proporción de marca (40% Neutral · 30% Highlight · 20% Secondary Accent · 10% Anchor = Gray/20, Cyan/60, Lime/60, Blue/90), 5 combinaciones aprobadas y 3 no recomendadas (2 fallas de contraste + 1 conflicto de marca).',
      'Se creó la variante nueva `combination` en `ColorCard` (fondo + color de texto real + muestra de texto), pedida explícitamente: con `badgeTone="success"` calcula el ratio de contraste real entre los dos colores (usando `contrastRatio`/`wcagLevel` de `lib/contrast.ts`, igual que el resto del dashboard); con `badgeTone="fail"`/`"conflict"` muestra un badge manual ("Falla AA"/"Conflicto") en vez de calcularlo.',
      'Los ratios calculados coinciden con los declarados en Figma con diferencias mínimas de redondeo (ej. 6.49:1 vs 6.46:1 declarado) — se verificaron los 2 casos "Falla AA" a mano antes de implementar (contraste real ~1.2–2.1:1, confirmado que efectivamente fallan).',
    ],
    afuera: [
      'No se crearon entradas nuevas en Global Colors para Cyan/60, Lime/60, Blue/90, Gray/20 y Gray/10 — quedaron como HEX literales dentro de esta sección. Si estos colores se vuelven a usar en otras páginas, conviene darlos de alta como primitives propios en vez de repetir el HEX suelto.',
      'El resto de la página (Content/Background/Border/Semantic) sigue con los primitives genéricos del master — solo esta categoría nueva es 100% Myntex. El MetaFooter se actualizó a "Master Template + Myntex" para reflejar esa mezcla.',
    ],
  },
  {
    pagina: 'Typography Foundations',
    categoria: 'Foundations',
    proyecto: 'Myntex',
    fecha: '2026-09-22',
    hecho: [
      'Se reemplazó por completo la configuración de ejemplo del master (Manrope/Source Serif 4/JetBrains Mono) por los primitivos reales de Myntex, siguiendo el frame de Figma "Typography Global" (nodo 182:7687, archivo "Myntex - Brand Definition (Limpio)") — un archivo de Figma distinto al usado para Global/Semantic Colors.',
      'Cuatro secciones: Font Family (Primary = Funnel Sans para títulos/encabezados/body; Details/Contrast = Geist Mono para subtítulos de sección, botones y links), Font Weight (Regular 400, Medium 500), Letter Spacing (Narrow -3%, Narrower -4%, Narrowest -5%) y Font Size — la escala completa de 24 pasos (10px a 144px) con su line-height real por paso.',
      'Se cargaron las fuentes reales en `src/styles/fonts.css` (`--font-myntex-primary`, `--font-myntex-details`) sin tocar las variables `--font-brand`/`--font-brand-editorial` del ejemplo del master, que siguen en uso en el handbook (Mis Componentes).',
      'Cada fila usa un componente `TokenRow` nuevo y local a la página (no reutilizable todavía) con muestra en vivo renderizada en la tipografía/peso/tracking/tamaño real, más el `TokenTag` con el token `typography_system/foundations/<sección>/<tono>`.',
    ],
    afuera: [
      'Un tercer Font Weight existe en Figma pero está marcado como oculto (hidden) en el frame — no se documentó por no tener valor visible que copiar, no por decisión propia.',
      'Los 9 pasos finales de la escala (Font Size 16 a 24, de 80px a 144px) declaran line-height "normal" en Figma en vez de un valor en px — se documentó tal cual (lineHeight: "normal") en vez de inventar un valor.',
      'Typography System (la otra sub-página del grupo, uso por contexto) recibió su propio brief real de Myntex por separado — ver la entrada "Typography System" en este mismo listado.',
    ],
  },
  {
    pagina: 'Typography System',
    categoria: 'Foundations',
    proyecto: 'Myntex',
    fecha: '2026-09-22',
    hecho: [
      'Se reemplazó la tabla genérica de plantilla (Display/H1/H2/Body/Caption) por los 28 estilos de uso reales de Myntex, siguiendo el frame de Figma "Typography Specific" (nodo 152:2668, mismo archivo "Myntex - Brand Definition (Limpio)" que Typography Foundations): 7 categorías — Body (3), Detail (2), Button (2), Link (2), Heading (7), Heading Mono (7) y Display (7) — cada una con familia, peso, tamaño, interlineado y tracking, más una muestra en vivo renderizada en el estilo real.',
      'Para cada estilo se usó como fuente de verdad el diccionario de *named text styles* de Figma (lo que un diseñador obtiene al aplicar ese estilo), no el texto descriptivo escrito a mano en cada card — se encontraron varias inconsistencias entre ambos (Detail M, Link S, Heading 2XS y Display L/XL describían un peso, tamaño o tracking distinto al que el estilo realmente aplica) y en todos los casos se verificó cuál era el correcto comparando el tracking declarado (siempre un % exacto del tamaño) contra el tamaño en px — el % siempre confirmó el valor del estilo aplicado, nunca el de la descripción escrita.',
      'Se documentó una anomalía del archivo fuente sin corregirla: Display XL mide 104px, más grande que Display 2XL (96px) — fuera de orden en la escala. El tracking de XL (-5.2px = 5% de 104px) confirma que 104px es el valor real del estilo, no un error de lectura de nuestra parte. Se dejó una nota visible en la página (`Note tone="warning"`) en vez de reordenar o promediar el valor.',
    ],
    afuera: [
      'El specimen de ejemplo de uso combinado (Heading Mono + Display + Body + botón, sobre fondo beige, con "measure lines" marcando cada tamaño) que cierra el frame de Figma — es una pieza de layout ilustrativo del documento fuente, no una tabla de tokens; se puede sumar más adelante como sección "Ejemplo de uso" si se pide explícitamente.',
      'No se creó un componente reutilizable para las filas de estilo — `StyleRow` vive local a esta página, igual que `TokenRow` en Typography Foundations (mismo criterio que el resto de Foundations: no abstraer hasta que un segundo caso lo pida).',
    ],
  },
]

function EntryCard({ entry }: { entry: Entry }) {
  return (
    <div className="flex w-full flex-col gap-[8px] rounded-[16px] border border-[#e3e7ee] bg-[#fafbfc] p-[20px]">
      <div className="flex w-full flex-wrap items-start justify-between gap-[12px]">
        <p className="font-bold text-[16px] leading-[22px] text-[#16181d]">{entry.title}</p>
        <div className="flex shrink-0 items-center gap-[8px]">
          <span className="rounded-[999px] bg-[#eef2f8] px-[10px] py-[4px] font-semibold text-[11px] text-[#44515f]">
            {entry.fecha}
          </span>
          <span
            className={`rounded-[999px] px-[10px] py-[4px] font-semibold text-[11px] uppercase leading-[14px] tracking-[0.03em] ${
              entry.status === 'done' ? 'bg-[#ecfdf3] text-[#166534]' : 'bg-[#fffbeb] text-[#92400e]'
            }`}
          >
            {entry.status === 'done' ? 'Hecho' : 'Pendiente'}
          </span>
        </div>
      </div>
      <p className="font-normal text-[14px] leading-[20px] text-[#576175]">{entry.description}</p>
    </div>
  )
}

function ResumenCard({ entry }: { entry: ResumenEntry }) {
  return (
    <div className="flex w-full flex-col gap-[16px] rounded-[16px] border border-[#e3e7ee] bg-[#fafbfc] p-[20px]">
      <div className="flex w-full flex-wrap items-start justify-between gap-[12px]">
        <div className="flex flex-col gap-[2px]">
          <p className="font-bold text-[16px] leading-[22px] text-[#16181d]">{entry.pagina}</p>
          <p className="font-medium text-[12px] uppercase tracking-[0.4px] text-[#8a94a8]">
            {entry.categoria} · {entry.proyecto}
          </p>
        </div>
        <span className="shrink-0 rounded-[999px] bg-[#eef2f8] px-[10px] py-[4px] font-semibold text-[11px] text-[#44515f]">
          {entry.fecha}
        </span>
      </div>

      <div className="flex flex-col gap-[8px]">
        <p className="font-semibold text-[12px] uppercase tracking-[0.4px] text-[#166534]">Qué se hizo</p>
        <ul className="flex flex-col gap-[6px] pl-[18px]">
          {entry.hecho.map((h, i) => (
            <li key={i} className="list-disc font-normal text-[14px] leading-[20px] text-[#576175]">
              {h}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-[8px]">
        <p className="font-semibold text-[12px] uppercase tracking-[0.4px] text-[#92400e]">Qué quedó afuera</p>
        <ul className="flex flex-col gap-[6px] pl-[18px]">
          {entry.afuera.map((a, i) => (
            <li key={i} className="list-disc font-normal text-[14px] leading-[20px] text-[#576175]">
              {a}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

type Tab = 'mejoras' | 'pendientes' | 'resumenes'

const TABS: { id: Tab; label: string }[] = [
  { id: 'mejoras', label: 'Mejoras' },
  { id: 'pendientes', label: 'Pendientes' },
  { id: 'resumenes', label: 'Resúmenes' },
]

function TabBar({ active, onChange }: { active: Tab; onChange: (tab: Tab) => void }) {
  return (
    <div className="flex w-full max-w-fit items-center gap-[4px] rounded-[999px] border border-[#e3e7ee] bg-[#f4f5f7] p-[4px]">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={`rounded-[999px] px-[18px] py-[8px] font-semibold text-[13px] leading-[16px] transition-colors ${
            active === tab.id ? 'bg-[#004c97] text-white' : 'text-[#576175] hover:text-[#16181d]'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export function InformePage() {
  const [tab, setTab] = useState<Tab>('mejoras')

  return (
    <div id="informe" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Sistema"
        title="Informe"
        paragraphs={[
          'Historial de trabajo sobre el dashboard: mejoras estructurales y funcionales, pendientes, y un resumen por página de contenido real completada con el brief de cada proyecto.',
          'Se actualiza a mano cada vez que se cierra un cambio relevante.',
        ]}
      />

      <div className="flex w-full flex-col gap-[32px] px-[40px] py-[72px]">
        <TabBar active={tab} onChange={setTab} />

        {tab === 'mejoras' && (
          <section className="flex w-full flex-col gap-[24px]">
            <SectionHeader title="Mejoras" description="De lo primero a lo más reciente." />
            <div className="flex w-full flex-col gap-[12px]">
              {MEJORAS.map((entry) => (
                <EntryCard key={entry.title} entry={entry} />
              ))}
            </div>
          </section>
        )}

        {tab === 'pendientes' && (
          <section className="flex w-full flex-col gap-[24px]">
            <SectionHeader title="Pendientes" description="Nada de esto se ejecuta hasta que se pida explícitamente." />
            <div className="flex w-full flex-col gap-[12px]">
              {PENDIENTES.map((entry) => (
                <EntryCard key={entry.title} entry={entry} />
              ))}
            </div>
          </section>
        )}

        {tab === 'resumenes' && (
          <section className="flex w-full flex-col gap-[24px]">
            <SectionHeader
              title="Resúmenes"
              description="Por cada página de contenido real: qué se completó y qué se dejó afuera deliberadamente, para poder auditar el criterio sin releer la página ni el Notion fuente."
            />
            <div className="flex w-full flex-col gap-[12px]">
              {RESUMENES.map((entry) => (
                <ResumenCard key={`${entry.categoria}-${entry.pagina}`} entry={entry} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
