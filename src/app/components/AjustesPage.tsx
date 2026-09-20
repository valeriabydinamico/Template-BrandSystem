import { useState } from 'react'
import { Search, X } from 'lucide-react'
import { PageHeader } from './PageHeader'
import {
  CATEGORIES,
  LARGE_PRESET,
  LIGHT_PRESET,
  NONE_PRESET,
  type CategoryDef,
  type ModuleGroupDef,
  type ModuleState,
} from '../lib/moduleConfig'

/* ────────────────────────────────────────────────────────────────────────────
 * Ajustes — panel de control de módulos/sub-páginas del catálogo.
 *
 * Cada switch prende/apaga una sub-página (independiente del resto); si todas
 * las sub-páginas de un grupo quedan apagadas, el grupo entero desaparece del
 * sidebar como consecuencia natural (no hay switch de grupo aparte).
 *
 * Los presets "Large" / "Light" solo fijan un punto de partida — los switches
 * individuales se pueden seguir ajustando después de aplicar uno.
 * ────────────────────────────────────────────────────────────────────────── */

function Switch({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      className={`relative h-[24px] w-[42px] shrink-0 rounded-full transition-colors ${
        checked ? 'bg-[#004c97]' : 'bg-[#c4c9d4]'
      }`}
    >
      <span
        className={`absolute top-[3px] left-[3px] size-[18px] rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.2)] transition-transform ${
          checked ? 'translate-x-[18px]' : 'translate-x-0'
        }`}
      />
    </button>
  )
}

function PresetButton({
  label,
  description,
  onClick,
  active,
}: {
  label: string
  description: string
  onClick: () => void
  active: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full flex-col items-start gap-[4px] rounded-[16px] border p-[20px] text-left transition-colors ${
        active
          ? 'border-[#004c97] bg-[#f2f8ff]'
          : 'border-[#e3e7ee] bg-white hover:border-[#b9c3ce]'
      }`}
    >
      <span className="font-bold text-[18px] leading-[22px] text-[#16181d]">{label}</span>
      <span className="font-normal text-[13px] leading-[19px] text-[#576175]">{description}</span>
    </button>
  )
}

function moduleStateEquals(a: ModuleState, b: ModuleState) {
  return Object.keys(b).every((k) => (a[k] !== false) === (b[k] !== false))
}

/** Filtra un grupo por nombre: si el nombre del grupo matchea, se devuelve
 *  completo; si no, solo con las sub-páginas cuyo nombre matchea (o `null`
 *  si ninguna). Grupos sin `leaves` (página única) solo matchean por su
 *  propio nombre. */
function filterGroup(group: ModuleGroupDef, query: string): ModuleGroupDef | null {
  if (!query) return group
  const q = query.toLowerCase()
  if (group.label.toLowerCase().includes(q)) return group
  if (!group.leaves) return null
  const leaves = group.leaves.filter((leaf) => leaf.label.toLowerCase().includes(q))
  return leaves.length > 0 ? { ...group, leaves } : null
}

function filterCategory(category: CategoryDef, query: string): ModuleGroupDef[] {
  return category.groups
    .map((group) => filterGroup(group, query))
    .filter((group): group is ModuleGroupDef => group !== null)
}

/** Card de un grupo. Si tiene sub-páginas reales, el título va solo arriba y
 *  cada sub-página es una fila con su switch. Si es una página única (sin
 *  `leaves`), el switch va directo al lado del título — no hay sub-página
 *  que nombrar dos veces. */
function GroupCard({
  group,
  enabled,
  toggle,
}: {
  group: ModuleGroupDef
  enabled: ModuleState
  toggle: (id: string) => void
}) {
  if (!group.leaves) {
    return (
      <div className="flex w-full items-center justify-between gap-[16px] rounded-[16px] border border-[#e3e7ee] bg-[#fafbfc] px-[20px] py-[16px]">
        <p className="font-bold text-[16px] leading-[20px] text-[#16181d]">{group.label}</p>
        <Switch
          checked={enabled[group.id] !== false}
          onChange={() => toggle(group.id)}
          label={group.label}
        />
      </div>
    )
  }

  return (
    <div className="flex w-full flex-col gap-[12px] rounded-[16px] border border-[#e3e7ee] bg-[#fafbfc] p-[20px]">
      <p className="font-bold text-[16px] leading-[20px] text-[#16181d]">{group.label}</p>
      <div className="flex w-full flex-col gap-[8px]">
        {group.leaves.map((leaf) => (
          <div
            key={leaf.id}
            className="flex w-full items-center justify-between gap-[16px] rounded-[10px] bg-white px-[16px] py-[12px]"
          >
            <span className="font-medium text-[14px] leading-[20px] text-[#292e38]">
              {leaf.label}
            </span>
            <Switch
              checked={enabled[leaf.id] !== false}
              onChange={() => toggle(leaf.id)}
              label={leaf.label}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function AjustesPage({
  enabled,
  toggle,
  applyPreset,
}: {
  enabled: ModuleState
  toggle: (id: string) => void
  applyPreset: (preset: ModuleState) => void
}) {
  const isLarge = moduleStateEquals(enabled, LARGE_PRESET)
  const isLight = moduleStateEquals(enabled, LIGHT_PRESET)
  const isNone = moduleStateEquals(enabled, NONE_PRESET)
  const [query, setQuery] = useState('')

  const filteredCategories = CATEGORIES.map((category) => ({
    category,
    groups: filterCategory(category, query.trim()),
  })).filter(({ groups }) => groups.length > 0)

  return (
    <div className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Sistema"
        title="Ajustes"
        paragraphs={[
          'Prendé o apagá los módulos y sub-páginas que este Brand System necesita documentar.',
          'Un módulo apagado se oculta del sidebar sin importar si sus datos están completos — es una decisión manual, separada del Registro de completado.',
        ]}
      />

      <div className="flex w-full flex-col gap-[48px] px-[40px] py-[72px]">
        <section className="flex w-full flex-col gap-[16px]">
          <div className="flex flex-col gap-[4px]">
            <h2 className="font-bold text-[22px] leading-[28px] text-[#16181d]">Presets</h2>
            <p className="font-normal text-[14px] leading-[20px] text-[#576175]">
              Un punto de partida — después se puede seguir ajustando módulo por módulo.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-[16px] min-[640px]:grid-cols-3">
            <PresetButton
              label="Large"
              description="Prende todos los módulos y sub-páginas del catálogo."
              active={isLarge}
              onClick={() => applyPreset(LARGE_PRESET)}
            />
            <PresetButton
              label="Light"
              description="Prende solo un set reducido (representativo por ahora: Brand Colors, Semantic Colors, Typography System y Visual Styles)."
              active={isLight}
              onClick={() => applyPreset(LIGHT_PRESET)}
            />
            <PresetButton
              label="Deshabilitar todo"
              description="Apaga todos los módulos y sub-páginas del catálogo de una sola vez."
              active={isNone}
              onClick={() => applyPreset(NONE_PRESET)}
            />
          </div>
        </section>

        <div className="h-px w-full shrink-0 bg-[#eef2f8]" />

        <div className="relative flex w-full items-center">
          <Search className="pointer-events-none absolute left-[14px] size-[16px] text-[#8a94a8]" strokeWidth={2} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar módulo por nombre…"
            className="w-full rounded-[12px] border border-[#e3e7ee] bg-[#fafbfc] py-[12px] pl-[40px] pr-[40px] font-normal text-[14px] leading-[20px] text-[#16181d] outline-none placeholder:text-[#8a94a8] focus:border-[#004c97]"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Limpiar búsqueda"
              className="absolute right-[10px] flex size-[24px] items-center justify-center rounded-[8px] text-[#8a94a8] hover:bg-[#eef2f8] hover:text-[#576175]"
            >
              <X className="size-[16px]" strokeWidth={2} />
            </button>
          )}
        </div>

        {filteredCategories.length === 0 && (
          <div className="flex w-full flex-col items-center justify-center gap-[8px] rounded-[16px] border border-dashed border-[#c4c9d4] bg-[#f7f8fa] p-[48px] text-center">
            <p className="font-semibold text-[16px] text-[#16181d]">Sin resultados</p>
            <p className="max-w-[420px] font-normal text-[14px] leading-[20px] text-[#576175]">
              Ningún módulo o sub-página coincide con "{query}".
            </p>
          </div>
        )}

        {filteredCategories.map(({ category, groups }) => (
          <section key={category.id} className="flex w-full flex-col gap-[24px]">
            <div className="flex flex-col gap-[4px]">
              <h2 className="font-bold text-[22px] leading-[28px] text-[#16181d]">{category.label}</h2>
              <p className="font-normal text-[14px] leading-[20px] text-[#576175]">
                Control fino por página.
              </p>
            </div>

            <div className="flex w-full flex-col gap-[16px]">
              {groups.map((group) => (
                <GroupCard key={group.id} group={group} enabled={enabled} toggle={toggle} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
