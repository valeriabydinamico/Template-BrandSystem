import { useState } from 'react'
import { PageHeader } from './PageHeader'
import { TokenTag } from './TokenTag'
import { SectionHeader } from './docs/shared'
import { ALL_HIDDEN_ENTRIES, REPORT_MODULE_TO_LEAF } from '../lib/siteCompleteness'
import { leavesWithoutRealContent, type EmptyLeaf, type ModuleState } from '../lib/moduleConfig'
import type { HiddenEntry } from '../lib/completeness'

/* ────────────────────────────────────────────────────────────────────────────
 * Registro de completado — historial de qué se ocultó del sitio por falta de
 * datos de marca, y qué falta para completarlo.
 *
 * Dividido en 2 tabs (`TabBar`, estado local `useState`, sin persistir —
 * mismo patrón que `InformePage`):
 *   - Por documentar: nada de contenido — páginas enteras sin brief real
 *     (plantilla en blanco del master) + ítems sin ningún dato de marca.
 *   - Contenido parcial: algo de contenido, pero no todo — páginas que
 *     mezclan plantilla + alguna sección real + ítems con algunos campos
 *     completos pero no todos.
 *
 * Lee `ALL_HIDDEN_ENTRIES` (calculado en `src/app/lib/siteCompleteness.ts` a
 * partir de los mismos datos que consume cada página) y
 * `leavesWithoutRealContent()` (`src/app/lib/moduleConfig.ts`) — no depende
 * de haber visitado las páginas de documentación.
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

function EmptyState({ label }: { label: string }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-[8px] rounded-[16px] border border-dashed border-[#c4c9d4] bg-[#f7f8fa] p-[48px] text-center">
      <p className="font-semibold text-[16px] text-[#16181d]">Todo completo</p>
      <p className="max-w-[420px] font-normal text-[14px] leading-[20px] text-[#576175]">{label}</p>
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

function EmptyPagesBlock({
  category,
  leaves,
  tone = 'missing',
}: {
  category: string
  leaves: EmptyLeaf[]
  tone?: 'missing' | 'partial'
}) {
  return (
    <div className="flex w-full flex-col gap-[16px] rounded-[16px] border border-[#e3e7ee] bg-[#fafbfc] p-[24px]">
      <p className="font-bold text-[20px] leading-[26px] text-[#16181d]">{category}</p>
      <div className="flex w-full flex-wrap gap-[8px]">
        {leaves.map((l) => (
          <span
            key={l.id}
            className={`rounded-[999px] border px-[14px] py-[8px] font-medium text-[13px] leading-[18px] ${
              tone === 'partial'
                ? 'border-[#fde68a] bg-[#fffbeb] text-[#92400e]'
                : 'border-[#e3e7ee] bg-white text-[#16181d]'
            }`}
          >
            {l.label}
          </span>
        ))}
      </div>
    </div>
  )
}

type Tab = 'por-documentar' | 'contenido-parcial'

const TABS: { id: Tab; label: string }[] = [
  { id: 'por-documentar', label: 'Por documentar' },
  { id: 'contenido-parcial', label: 'Contenido parcial' },
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

export function RegistroPage({ enabled }: { enabled: ModuleState }) {
  const [tab, setTab] = useState<Tab>('por-documentar')

  // Solo se evalúan los módulos prendidos en Ajustes — uno apagado fue una
  // decisión manual, no "oculto por falta de datos", así que no se reporta.
  const evaluated = ALL_HIDDEN_ENTRIES.filter((e) => {
    const leaf = REPORT_MODULE_TO_LEAF[e.module]
    return leaf ? enabled[leaf] !== false : true
  })
  const partialData = evaluated.filter((e) => e.status === 'partial')
  const missingData = evaluated.filter((e) => e.status === 'missing')
  const partialDataByModule = groupByModule(partialData)
  const missingDataByModule = groupByModule(missingData)

  // Páginas prendidas que todavía no tienen contenido REAL de
  // documentación (el brief del proyecto) — separadas de si tienen o no su
  // propia página: casi todas ya tienen página propia, pero muchas siguen
  // mostrando la plantilla en blanco del master en vez de datos reales.
  const { missing: withoutRealContent, partial: partialRealContent } = leavesWithoutRealContent(enabled)
  const withoutRealContentByCategory = groupByCategory(withoutRealContent)
  const partialRealContentByCategory = groupByCategory(partialRealContent)

  const porDocumentarEmpty = withoutRealContent.length === 0 && missingData.length === 0
  const contenidoParcialEmpty = partialRealContent.length === 0 && partialData.length === 0

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

      <div className="flex w-full flex-col gap-[32px] px-[40px] py-[72px]">
        <TabBar active={tab} onChange={setTab} />

        {tab === 'por-documentar' && (
          <div className="flex w-full flex-col gap-[48px]">
            {porDocumentarEmpty && (
              <EmptyState label="No hay páginas ni ítems totalmente sin documentar. Todo lo prendido tiene al menos algo de contenido real." />
            )}

            {withoutRealContent.length > 0 && (
              <section className="flex w-full flex-col gap-[16px]">
                <p className="w-full font-normal text-[15px] leading-[22px] text-[#59667d]">
                  Páginas cuyo módulo está prendido y tiene su propia página, pero todavía muestra la plantilla en
                  blanco del master (valores de ejemplo genéricos, sin el brief real del proyecto).
                </p>
                <div className="flex w-full flex-col gap-[16px]">
                  {[...withoutRealContentByCategory.entries()].map(([category, leaves]) => (
                    <EmptyPagesBlock key={category} category={category} leaves={leaves} />
                  ))}
                </div>
              </section>
            )}

            {missingData.length > 0 && (
              <section className="flex w-full flex-col gap-[24px]">
                <SectionHeader
                  title="🔴 Sin datos"
                  description="No se proporcionó ningún dato para estos ítems — no hay nada que mostrar todavía."
                />
                <div className="flex w-full flex-col gap-[16px]">
                  {[...missingDataByModule.entries()].map(([module, sections]) => (
                    <ModuleBlock key={module} module={module} sections={sections} tone="missing" />
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {tab === 'contenido-parcial' && (
          <div className="flex w-full flex-col gap-[48px]">
            {contenidoParcialEmpty && (
              <EmptyState label="No hay páginas ni ítems con contenido parcial. Todo lo prendido está o bien completo, o bien sin documentar todavía." />
            )}

            {partialRealContent.length > 0 && (
              <section className="flex w-full flex-col gap-[16px]">
                <p className="w-full font-normal text-[15px] leading-[22px] text-[#59667d]">
                  Páginas donde parte del contenido ya tiene el brief real del proyecto, pero el resto todavía es
                  plantilla en blanco del master.
                </p>
                <div className="flex w-full flex-col gap-[16px]">
                  {[...partialRealContentByCategory.entries()].map(([category, leaves]) => (
                    <EmptyPagesBlock key={category} category={category} leaves={leaves} tone="partial" />
                  ))}
                </div>
              </section>
            )}

            {partialData.length > 0 && (
              <section className="flex w-full flex-col gap-[24px]">
                <SectionHeader
                  title="🟡 Datos parciales"
                  description="Se proporcionaron algunos campos de estos ítems, pero no todos los necesarios — por eso se ocultan igual. Se detalla qué falta para completarlos."
                />
                <div className="flex w-full flex-col gap-[16px]">
                  {[...partialDataByModule.entries()].map(([module, sections]) => (
                    <ModuleBlock key={module} module={module} sections={sections} tone="partial" />
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
