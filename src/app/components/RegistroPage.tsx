import { PageHeader } from './PageHeader'
import { TokenTag } from './TokenTag'
import { SectionHeader } from './docs/shared'
import { ALL_HIDDEN_ENTRIES, REPORT_MODULE_TO_LEAF } from '../lib/siteCompleteness'
import { emptyLeaves, type EmptyLeaf, type ModuleState } from '../lib/moduleConfig'
import type { HiddenEntry } from '../lib/completeness'

/* ────────────────────────────────────────────────────────────────────────────
 * Registro de completado — historial de qué se ocultó del sitio por falta de
 * datos de marca, y qué falta para completarlo.
 *
 * Lee `ALL_HIDDEN_ENTRIES` (calculado en `src/app/lib/siteCompleteness.ts` a
 * partir de los mismos datos que consume cada página) — no depende de haber
 * visitado las páginas de documentación.
 *
 * Dos categorías (ver "Regla de completitud de datos" en CLAUDE.md):
 *   - parcial → se proporcionaron algunos campos del ítem, pero no todos.
 *   - missing → no se proporcionó ningún campo del ítem.
 * ────────────────────────────────────────────────────────────────────────── */

function groupByModule(entries: HiddenEntry[]) {
  const map = new Map<string, Map<string, HiddenEntry[]>>()
  for (const e of entries) {
    if (!map.has(e.module)) map.set(e.module, new Map())
    const bySection = map.get(e.module)!
    if (!bySection.has(e.section)) bySection.set(e.section, [])
    bySection.get(e.section)!.push(e)
  }
  return map
}

function EntryRow({ entry }: { entry: HiddenEntry }) {
  return (
    <div className="flex w-full flex-col gap-[10px] rounded-[12px] border border-[#e3e7ee] bg-white p-[16px]">
      <p className="font-semibold text-[14px] leading-[20px] text-[#16181d]">{entry.item}</p>
      <div className="flex flex-wrap items-center gap-[8px]">
        <span className="font-medium text-[12px] leading-[16px] text-[#8a94a8]">Falta:</span>
        {entry.missingFields.map((f) => (
          <TokenTag key={f} fit>
            {f}
          </TokenTag>
        ))}
      </div>
    </div>
  )
}

function ModuleBlock({
  module,
  sections,
  tone,
}: {
  module: string
  sections: Map<string, HiddenEntry[]>
  tone: 'partial' | 'missing'
}) {
  return (
    <div className="flex w-full flex-col gap-[20px] rounded-[16px] border border-[#e3e7ee] bg-[#fafbfc] p-[24px]">
      <p className="font-bold text-[20px] leading-[26px] text-[#16181d]">{module}</p>
      <div className="flex w-full flex-col gap-[16px]">
        {[...sections.entries()].map(([section, entries]) => (
          <div key={section} className="flex w-full flex-col gap-[10px]">
            <p className="font-semibold text-[13px] uppercase leading-[16px] tracking-[0.4px] text-[#576175]">
              {section}
            </p>
            <div className="flex w-full flex-col gap-[8px]">
              {entries.map((e) => (
                <EntryRow key={`${tone}-${section}-${e.item}`} entry={e} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function EmptyState() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-[8px] rounded-[16px] border border-dashed border-[#c4c9d4] bg-[#f7f8fa] p-[48px] text-center">
      <p className="font-semibold text-[16px] text-[#16181d]">Todo completo</p>
      <p className="max-w-[420px] font-normal text-[14px] leading-[20px] text-[#576175]">
        No hay módulos ocultos por falta de datos ni páginas sin contenido. Todo lo documentado en
        el sitio tiene sus campos obligatorios completos.
      </p>
    </div>
  )
}

function groupByCategory(leaves: EmptyLeaf[]) {
  const map = new Map<string, EmptyLeaf[]>()
  for (const l of leaves) {
    if (!map.has(l.categoryLabel)) map.set(l.categoryLabel, [])
    map.get(l.categoryLabel)!.push(l)
  }
  return map
}

function EmptyPagesBlock({ category, leaves }: { category: string; leaves: EmptyLeaf[] }) {
  return (
    <div className="flex w-full flex-col gap-[16px] rounded-[16px] border border-[#e3e7ee] bg-[#fafbfc] p-[24px]">
      <p className="font-bold text-[20px] leading-[26px] text-[#16181d]">{category}</p>
      <div className="flex w-full flex-wrap gap-[8px]">
        {leaves.map((l) => (
          <span
            key={l.id}
            className="rounded-[999px] border border-[#e3e7ee] bg-white px-[14px] py-[8px] font-medium text-[13px] leading-[18px] text-[#16181d]"
          >
            {l.label}
          </span>
        ))}
      </div>
    </div>
  )
}

export function RegistroPage({ enabled }: { enabled: ModuleState }) {
  // Solo se evalúan los módulos prendidos en Ajustes — uno apagado fue una
  // decisión manual, no "oculto por falta de datos", así que no se reporta.
  const evaluated = ALL_HIDDEN_ENTRIES.filter((e) => {
    const leaf = REPORT_MODULE_TO_LEAF[e.module]
    return leaf ? enabled[leaf] !== false : true
  })
  const partial = evaluated.filter((e) => e.status === 'partial')
  const missing = evaluated.filter((e) => e.status === 'missing')
  const partialByModule = groupByModule(partial)
  const missingByModule = groupByModule(missing)

  // Páginas prendidas que todavía no tienen contenido real (solo
  // PageHeader) — el PageHeader no cuenta como contenido.
  const withoutContent = emptyLeaves(enabled)
  const withoutContentByCategory = groupByCategory(withoutContent)

  return (
    <div id="registro" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Sistema"
        title="Registro de completado"
        paragraphs={[
          'Historial de lo que el sitio ocultó por falta de datos en el brief de marca, y qué falta para completarlo.',
          'Solo evalúa los módulos prendidos en Ajustes — uno apagado fue una decisión manual, no un dato faltante, y no aparece acá.',
        ]}
      />

      <div className="flex w-full flex-col gap-[48px] px-[40px] py-[72px]">
        {evaluated.length === 0 && withoutContent.length === 0 && <EmptyState />}

        {withoutContent.length > 0 && (
          <section className="flex w-full flex-col gap-[24px]">
            <SectionHeader
              title="📄 Páginas sin contenido"
              description="El módulo está prendido pero todavía no tiene contenido real — solo muestra el encabezado (PageHeader), que no cuenta como contenido."
            />
            <div className="flex w-full flex-col gap-[16px]">
              {[...withoutContentByCategory.entries()].map(([category, leaves]) => (
                <EmptyPagesBlock key={category} category={category} leaves={leaves} />
              ))}
            </div>
          </section>
        )}

        {partial.length > 0 && (
          <section className="flex w-full flex-col gap-[24px]">
            <SectionHeader
              title="🟡 Datos parciales"
              description="Se proporcionaron algunos campos de estos ítems, pero no todos los necesarios — por eso se ocultan igual. Se detalla qué falta para completarlos."
            />
            <div className="flex w-full flex-col gap-[16px]">
              {[...partialByModule.entries()].map(([module, sections]) => (
                <ModuleBlock key={module} module={module} sections={sections} tone="partial" />
              ))}
            </div>
          </section>
        )}

        {missing.length > 0 && (
          <section className="flex w-full flex-col gap-[24px]">
            <SectionHeader
              title="🔴 Sin datos"
              description="No se proporcionó ningún dato para estos ítems — no hay nada que mostrar todavía."
            />
            <div className="flex w-full flex-col gap-[16px]">
              {[...missingByModule.entries()].map(([module, sections]) => (
                <ModuleBlock key={module} module={module} sections={sections} tone="missing" />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
