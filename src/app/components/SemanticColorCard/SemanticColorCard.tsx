import type { CSSProperties } from 'react'
import { TokenTag } from '../TokenTag'
import {
  accessibleTextColor,
  contrastRatio,
  formatRatio,
  normalizeHex,
  wcagLevel,
  withAlpha,
} from '../../lib/contrast'

export type SemanticColorVariant = 'text' | 'border' | 'background' | 'background-border'

export interface SemanticColorCardProps {
  /**
   * Cómo se documenta el color:
   * - `text` — el color se muestra escrito como texto sobre un panel neutro
   * - `border` — el color como contorno sobre un panel neutro
   * - `background` — el color como relleno del panel
   * - `background-border` — el color como fondo suave + contorno
   */
  variant: SemanticColorVariant
  /** Nombre funcional del rol, e.g. "Brand Primary" */
  role: string
  /** HEX del valor documentado (con o sin #) */
  color: string
  /** Ruta completa del token, e.g. `color/text/brand-primary` */
  token: string
  /** Ruta del primitive que da el valor, e.g. `color/primitive/blue/700` */
  reference: string
  /**
   * Solo `text`: usa una superficie oscura (para tokens pensados para fondos
   * oscuros). Por defecto se deduce de la ruta (`on-dark` / `inverse`).
   */
  onDark?: boolean
  className?: string
}

/* Superficies neutras del sistema (Figma · 03 Semantic Colors) */
const NEUTRAL = '#EEF1F5'
const NEUTRAL_DARK = '#D2D9DF'
const TEXT_DARK_SURFACE = '#16181D'
const CARD_BORDER = '#B9C3CE'
const PANEL_TEXT_ON_NEUTRAL = '#292E38'

const isDisabledToken = (token: string) => /(^|\/)disabled(\/|$)/.test(token)
const isOnDarkToken = (token: string) => /on-dark|inverse/.test(token)

type BadgeSpec =
  | { kind: 'na' }
  | { kind: 'level'; text: string }
  | { kind: 'ratio'; text: string }

interface Resolved {
  cardStyle: CSSProperties
  panelStyle: CSSProperties
  panelText: string
  panelIsDark: boolean
  chipTone: 'default' | 'plain'
  badges: BadgeSpec[]
}

function resolve({ variant, color, token, onDark }: SemanticColorCardProps): Resolved {
  const hex = normalizeHex(color)
  const disabled = isDisabledToken(token)

  const withLevel = (ratio: number): BadgeSpec[] =>
    disabled
      ? [{ kind: 'na' }]
      : [
          { kind: 'level', text: wcagLevel(ratio) },
          { kind: 'ratio', text: formatRatio(ratio) },
        ]
  const ratioOnly = (ratio: number): BadgeSpec[] =>
    disabled ? [{ kind: 'na' }] : [{ kind: 'ratio', text: formatRatio(ratio) }]

  switch (variant) {
    case 'background': {
      const pureWhite = hex === '#FFFFFF'
      const onColor = accessibleTextColor(hex)
      return {
        cardStyle: {
          backgroundColor: pureWhite ? NEUTRAL : '#FFFFFF',
          border: pureWhite ? undefined : `1px solid ${CARD_BORDER}`,
        },
        panelStyle: { backgroundColor: hex },
        panelText: onColor,
        panelIsDark: onColor === '#ffffff',
        chipTone: pureWhite ? 'plain' : 'default',
        badges: withLevel(contrastRatio(hex, onColor)),
      }
    }
    case 'background-border': {
      return {
        cardStyle: { backgroundColor: NEUTRAL },
        panelStyle: { backgroundColor: withAlpha(hex, 0.08), border: `2px solid ${hex}` },
        panelText: PANEL_TEXT_ON_NEUTRAL,
        panelIsDark: false,
        chipTone: 'plain',
        badges: ratioOnly(contrastRatio(hex, '#FFFFFF')),
      }
    }
    case 'border': {
      const needsDark = contrastRatio(hex, NEUTRAL) < 3
      return {
        cardStyle: { backgroundColor: needsDark ? NEUTRAL_DARK : NEUTRAL },
        panelStyle: {
          backgroundColor: needsDark ? NEUTRAL_DARK : 'transparent',
          border: `1px solid ${hex}`,
        },
        panelText: PANEL_TEXT_ON_NEUTRAL,
        panelIsDark: false,
        chipTone: 'plain',
        badges: ratioOnly(contrastRatio(hex, '#FFFFFF')),
      }
    }
    case 'text':
    default: {
      const dark = onDark ?? isOnDarkToken(token)
      const surface = dark ? TEXT_DARK_SURFACE : NEUTRAL
      return {
        cardStyle: { backgroundColor: '#FFFFFF', border: `1px solid ${CARD_BORDER}` },
        panelStyle: { backgroundColor: surface },
        panelText: hex,
        panelIsDark: dark,
        chipTone: 'default',
        badges: withLevel(contrastRatio(hex, surface)),
      }
    }
  }
}

function ContrastBadge({ badge, panelIsDark }: { badge: BadgeSpec; panelIsDark: boolean }) {
  const soft = panelIsDark
    ? 'bg-[rgba(255,255,255,0.5)] text-[#16181d]'
    : 'bg-[rgba(22,24,29,0.1)] text-[#16181d]'
  const solid = panelIsDark ? 'bg-white text-[#16181d]' : 'bg-[#16181d] text-white'

  // La pastilla N/A comparte el estilo sólido de la pastilla de ratio.
  const cls = badge.kind === 'level' ? soft : solid

  return (
    <span
      className={`flex items-center justify-center rounded-[20px] px-[12px] py-[8px] font-semibold text-[12px] leading-[16px] whitespace-nowrap ${cls}`}
    >
      {badge.kind === 'na' ? 'N/A' : badge.text}
    </span>
  )
}

function Field({
  label,
  value,
  tone,
}: {
  label: string
  value: string
  tone: 'default' | 'plain'
}) {
  return (
    <div className="flex w-full flex-col gap-[8px]">
      <p className="font-semibold text-[14px] leading-[22px] text-[#16181d]">{label}</p>
      <TokenTag tone={tone}>{value}</TokenTag>
    </div>
  )
}

/**
 * SemanticColorCard — documenta UN token de color semántico (`color/text/*`,
 * `color/ui/border/*`, `color/background/*`, …). Los primitives se documentan
 * con `ColorCard`.
 *
 * Las pastillas de contraste (ratio + nivel WCAG) y el color de la fuente sobre
 * el panel se calculan solos con las mismas reglas que `ColorCard`
 * (`src/app/lib/contrast.ts`). Si la ruta del token contiene `disabled`, se
 * muestra una sola pastilla `N/A`.
 */
export function SemanticColorCard(props: SemanticColorCardProps) {
  const { role, token, reference, className = '' } = props
  const hex = normalizeHex(props.color)
  const r = resolve(props)

  return (
    <div
      className={`flex w-full flex-col gap-[8px] rounded-[16px] p-[8px] ${className}`}
      style={r.cardStyle}
    >
      {/* color-panel */}
      <div
        className="flex h-[120px] shrink-0 flex-col justify-between rounded-[12px] p-[16px]"
        style={r.panelStyle}
      >
        <div className="flex min-w-0 flex-col gap-[2px]" style={{ color: r.panelText }}>
          <p className="truncate font-bold text-[16px] leading-[20px]">{role}</p>
          <p className="font-normal text-[12px] leading-[16px]">{hex}</p>
        </div>
        <div className="flex shrink-0 items-center gap-[8px]">
          {r.badges.map((b, i) => (
            <ContrastBadge key={i} badge={b} panelIsDark={r.panelIsDark} />
          ))}
        </div>
      </div>

      {/* card-body */}
      <div className="flex w-full flex-col gap-[8px] p-[8px]">
        <Field label="Token" value={token} tone={r.chipTone} />
        <Field label="Color Reference" value={reference} tone={r.chipTone} />
      </div>
    </div>
  )
}
