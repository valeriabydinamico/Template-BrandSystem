import { PageHeader } from './PageHeader'
import { GovernanceFooter } from './GovernanceFooter'
import { MetaFooter } from './MetaFooter'
import { ColorCard } from './ColorCard'

/* ────────────────────────────────────────────────────────────────────────────
 * 01 Global Colors.
 *
 * Reestructurada siguiendo el frame de referencia de Figma "Como entregar los
 * global colors" (nodo 16353:5983): 3 grupos — Básicos, Paleta cromática y
 * Colores de sistema — en vez de la agrupación anterior (Primary/Secondary/
 * Tertiary/Neutral/Functional/Gradients). Se mantiene la UI del dashboard
 * (ColorCard, PageHeader, GovernanceFooter, MetaFooter) y los valores reales
 * del master template — solo cambia el agrupamiento/nombres, no el
 * componente ni los datos. Los degradados no forman parte de ese frame de
 * referencia y se sacaron de la página (quedan en git history si hace falta
 * recuperarlos).
 * ────────────────────────────────────────────────────────────────────────── */

interface Tone {
  tone: string
  hex: string
  rgb: { r: number; g: number; b: number }
  hsl: { h: string; s: string; l: string }
  token: string
}

/* ─── Básicos ─── */

const BASICOS: Tone[] = [
  { tone: 'White', hex: 'FFFFFF', rgb: { r: 255, g: 255, b: 255 }, hsl: { h: '0°', s: '0%', l: '100%' }, token: 'color_system/global/basicos/white' },
  { tone: 'Black', hex: '16181D', rgb: { r: 22, g: 24, b: 29 }, hsl: { h: '223°', s: '14%', l: '10%' }, token: 'color_system/global/basicos/black' },
]

/* ─── Paleta cromática ─── */

const BLUE: Tone[] = [
  { tone: '50', hex: 'F2F8FF', rgb: { r: 242, g: 248, b: 255 }, hsl: { h: '212°', s: '100%', l: '97%' }, token: 'color_system/global/primary/50' },
  { tone: '100', hex: 'E1F0FF', rgb: { r: 225, g: 240, b: 255 }, hsl: { h: '210°', s: '100%', l: '94%' }, token: 'color_system/global/primary/100' },
  { tone: '200', hex: 'BFDFFF', rgb: { r: 191, g: 223, b: 255 }, hsl: { h: '210°', s: '100%', l: '87%' }, token: 'color_system/global/primary/200' },
  { tone: '300', hex: '8FC7FF', rgb: { r: 143, g: 199, b: 255 }, hsl: { h: '210°', s: '100%', l: '78%' }, token: 'color_system/global/primary/300' },
  { tone: '400', hex: '5FAEFF', rgb: { r: 95, g: 174, b: 255 }, hsl: { h: '210°', s: '100%', l: '69%' }, token: 'color_system/global/primary/400' },
  { tone: '500', hex: '1677D8', rgb: { r: 22, g: 119, b: 216 }, hsl: { h: '210°', s: '82%', l: '47%' }, token: 'color_system/global/primary/500' },
  { tone: '600', hex: '0B5FB8', rgb: { r: 11, g: 95, b: 184 }, hsl: { h: '211°', s: '89%', l: '38%' }, token: 'color_system/global/primary/600' },
  { tone: '700', hex: '004C97', rgb: { r: 0, g: 76, b: 151 }, hsl: { h: '210°', s: '100%', l: '30%' }, token: 'color_system/global/primary/700' },
  { tone: '800', hex: '003882', rgb: { r: 0, g: 56, b: 130 }, hsl: { h: '214°', s: '100%', l: '25%' }, token: 'color_system/global/primary/800' },
  { tone: '900', hex: '001F3F', rgb: { r: 0, g: 31, b: 63 }, hsl: { h: '210°', s: '100%', l: '12%' }, token: 'color_system/global/primary/900' },
]

const LIGHT_BLUE: Tone[] = [
  { tone: '50', hex: 'E5F9FF', rgb: { r: 229, g: 249, b: 255 }, hsl: { h: '194°', s: '100%', l: '95%' }, token: 'color_system/global/secondary/50' },
  { tone: '100', hex: 'CCF1FF', rgb: { r: 204, g: 241, b: 255 }, hsl: { h: '196°', s: '100%', l: '90%' }, token: 'color_system/global/secondary/100' },
  { tone: '200', hex: '9AE3FF', rgb: { r: 154, g: 227, b: 255 }, hsl: { h: '198°', s: '100%', l: '82%' }, token: 'color_system/global/secondary/200' },
  { tone: '300', hex: '65D6FF', rgb: { r: 101, g: 214, b: 255 }, hsl: { h: '196°', s: '100%', l: '70%' }, token: 'color_system/global/secondary/300' },
  { tone: '400', hex: '35C7FF', rgb: { r: 53, g: 199, b: 255 }, hsl: { h: '197°', s: '100%', l: '60%' }, token: 'color_system/global/secondary/400' },
  { tone: '500', hex: '15BFFF', rgb: { r: 21, g: 191, b: 255 }, hsl: { h: '196°', s: '100%', l: '54%' }, token: 'color_system/global/secondary/500' },
  { tone: '600', hex: '00A3E1', rgb: { r: 0, g: 163, b: 225 }, hsl: { h: '197°', s: '100%', l: '44%' }, token: 'color_system/global/secondary/600' },
  { tone: '700', hex: '007EAE', rgb: { r: 0, g: 126, b: 174 }, hsl: { h: '197°', s: '100%', l: '34%' }, token: 'color_system/global/secondary/700' },
  { tone: '800', hex: '004A67', rgb: { r: 0, g: 74, b: 103 }, hsl: { h: '197°', s: '100%', l: '20%' }, token: 'color_system/global/secondary/800' },
  { tone: '900', hex: '002533', rgb: { r: 0, g: 37, b: 51 }, hsl: { h: '196°', s: '100%', l: '10%' }, token: 'color_system/global/secondary/900' },
]

const ORANGE: Tone[] = [
  { tone: '50', hex: 'FFF3E6', rgb: { r: 255, g: 243, b: 230 }, hsl: { h: '31°', s: '100%', l: '95%' }, token: 'color_system/global/tertiary/orange/50' },
  { tone: '100', hex: 'FFE4CC', rgb: { r: 255, g: 228, b: 204 }, hsl: { h: '28°', s: '100%', l: '90%' }, token: 'color_system/global/tertiary/orange/100' },
  { tone: '200', hex: 'FFC99A', rgb: { r: 255, g: 201, b: 154 }, hsl: { h: '28°', s: '100%', l: '80%' }, token: 'color_system/global/tertiary/orange/200' },
  { tone: '300', hex: 'FFB066', rgb: { r: 255, g: 176, b: 102 }, hsl: { h: '29°', s: '100%', l: '70%' }, token: 'color_system/global/tertiary/orange/300' },
  { tone: '400', hex: 'FF9433', rgb: { r: 255, g: 148, b: 51 }, hsl: { h: '29°', s: '100%', l: '60%' }, token: 'color_system/global/tertiary/orange/400' },
  { tone: '500', hex: 'FF7900', rgb: { r: 255, g: 121, b: 0 }, hsl: { h: '28°', s: '100%', l: '50%' }, token: 'color_system/global/tertiary/orange/500' },
  { tone: '600', hex: 'CD6101', rgb: { r: 205, g: 97, b: 1 }, hsl: { h: '28°', s: '99%', l: '40%' }, token: 'color_system/global/tertiary/orange/600' },
  { tone: '700', hex: '994A00', rgb: { r: 153, g: 74, b: 0 }, hsl: { h: '29°', s: '100%', l: '30%' }, token: 'color_system/global/tertiary/orange/700' },
  { tone: '800', hex: '663000', rgb: { r: 102, g: 48, b: 0 }, hsl: { h: '28°', s: '100%', l: '20%' }, token: 'color_system/global/tertiary/orange/800' },
  { tone: '900', hex: '341800', rgb: { r: 52, g: 24, b: 0 }, hsl: { h: '28°', s: '100%', l: '10%' }, token: 'color_system/global/tertiary/orange/900' },
]

const TEAL: Tone[] = [
  { tone: '50', hex: 'E7F8F9', rgb: { r: 231, g: 248, b: 249 }, hsl: { h: '183°', s: '60%', l: '94%' }, token: 'color_system/global/tertiary/teal/50' },
  { tone: '100', hex: 'D4F4F7', rgb: { r: 212, g: 244, b: 247 }, hsl: { h: '185°', s: '69%', l: '90%' }, token: 'color_system/global/tertiary/teal/100' },
  { tone: '200', hex: 'AAE9EF', rgb: { r: 170, g: 233, b: 239 }, hsl: { h: '185°', s: '68%', l: '80%' }, token: 'color_system/global/tertiary/teal/200' },
  { tone: '300', hex: '7FDFE7', rgb: { r: 127, g: 223, b: 231 }, hsl: { h: '185°', s: '70%', l: '68%' }, token: 'color_system/global/tertiary/teal/300' },
  { tone: '400', hex: '53D4DF', rgb: { r: 83, g: 212, b: 223 }, hsl: { h: '185°', s: '68%', l: '60%' }, token: 'color_system/global/tertiary/teal/400' },
  { tone: '500', hex: '29C9D8', rgb: { r: 41, g: 201, b: 216 }, hsl: { h: '185°', s: '69%', l: '50%' }, token: 'color_system/global/tertiary/teal/500' },
  { tone: '600', hex: '20A5B1', rgb: { r: 32, g: 165, b: 177 }, hsl: { h: '185°', s: '69%', l: '41%' }, token: 'color_system/global/tertiary/teal/600' },
  { tone: '700', hex: '187882', rgb: { r: 24, g: 120, b: 130 }, hsl: { h: '186°', s: '69%', l: '30%' }, token: 'color_system/global/tertiary/teal/700' },
  { tone: '800', hex: '105056', rgb: { r: 16, g: 80, b: 86 }, hsl: { h: '185°', s: '69%', l: '20%' }, token: 'color_system/global/tertiary/teal/800' },
  { tone: '900', hex: '08282C', rgb: { r: 8, g: 40, b: 44 }, hsl: { h: '187°', s: '69%', l: '10%' }, token: 'color_system/global/tertiary/teal/900' },
]

const APPLE: Tone[] = [
  { tone: '50', hex: 'ECF7DF', rgb: { r: 236, g: 247, b: 223 }, hsl: { h: '87°', s: '60%', l: '92%' }, token: 'color_system/global/tertiary/apple/50' },
  { tone: '100', hex: 'DFF2CA', rgb: { r: 223, g: 242, b: 202 }, hsl: { h: '88°', s: '61%', l: '87%' }, token: 'color_system/global/tertiary/apple/100' },
  { tone: '200', hex: 'C7E8A1', rgb: { r: 199, g: 232, b: 161 }, hsl: { h: '88°', s: '61%', l: '77%' }, token: 'color_system/global/tertiary/apple/200' },
  { tone: '300', hex: 'AFDD79', rgb: { r: 175, g: 221, b: 121 }, hsl: { h: '88°', s: '60%', l: '67%' }, token: 'color_system/global/tertiary/apple/300' },
  { tone: '400', hex: '96D350', rgb: { r: 150, g: 211, b: 80 }, hsl: { h: '88°', s: '60%', l: '57%' }, token: 'color_system/global/tertiary/apple/400' },
  { tone: '500', hex: '7DC030', rgb: { r: 125, g: 192, b: 48 }, hsl: { h: '88°', s: '60%', l: '47%' }, token: 'color_system/global/tertiary/apple/500' },
  { tone: '600', hex: '629726', rgb: { r: 98, g: 151, b: 38 }, hsl: { h: '88°', s: '60%', l: '37%' }, token: 'color_system/global/tertiary/apple/600' },
  { tone: '700', hex: '517A20', rgb: { r: 81, g: 122, b: 32 }, hsl: { h: '87°', s: '58%', l: '30%' }, token: 'color_system/global/tertiary/apple/700' },
  { tone: '800', hex: '365214', rgb: { r: 54, g: 82, b: 20 }, hsl: { h: '87°', s: '61%', l: '20%' }, token: 'color_system/global/tertiary/apple/800' },
  { tone: '900', hex: '1B290A', rgb: { r: 27, g: 41, b: 10 }, hsl: { h: '87°', s: '61%', l: '10%' }, token: 'color_system/global/tertiary/apple/900' },
]

const INK: Tone[] = [
  { tone: '50', hex: 'F1F2F4', rgb: { r: 241, g: 242, b: 244 }, hsl: { h: '220°', s: '12%', l: '95%' }, token: 'color_system/global/neutral/ink/50' },
  { tone: '100', hex: 'E3E4EA', rgb: { r: 227, g: 228, b: 234 }, hsl: { h: '231°', s: '14%', l: '90%' }, token: 'color_system/global/neutral/ink/100' },
  { tone: '200', hex: 'C4C9D4', rgb: { r: 196, g: 201, b: 212 }, hsl: { h: '221°', s: '16%', l: '80%' }, token: 'color_system/global/neutral/ink/200' },
  { tone: '300', hex: 'A8AFBE', rgb: { r: 168, g: 175, b: 190 }, hsl: { h: '221°', s: '14%', l: '70%' }, token: 'color_system/global/neutral/ink/300' },
  { tone: '400', hex: '8A94A8', rgb: { r: 138, g: 148, b: 168 }, hsl: { h: '220°', s: '14%', l: '60%' }, token: 'color_system/global/neutral/ink/400' },
  { tone: '500', hex: '6D7993', rgb: { r: 109, g: 121, b: 147 }, hsl: { h: '221°', s: '15%', l: '50%' }, token: 'color_system/global/neutral/ink/500' },
  { tone: '600', hex: '576175', rgb: { r: 87, g: 97, b: 117 }, hsl: { h: '220°', s: '15%', l: '40%' }, token: 'color_system/global/neutral/ink/600' },
  { tone: '700', hex: '42495B', rgb: { r: 66, g: 73, b: 91 }, hsl: { h: '223°', s: '16%', l: '31%' }, token: 'color_system/global/neutral/ink/700' },
  { tone: '800', hex: '292E38', rgb: { r: 41, g: 46, b: 56 }, hsl: { h: '221°', s: '16%', l: '20%' }, token: 'color_system/global/neutral/ink/800' },
  { tone: '900', hex: '16181D', rgb: { r: 22, g: 24, b: 29 }, hsl: { h: '223°', s: '14%', l: '10%' }, token: 'color_system/global/neutral/ink/900' },
]

const GRAY: Tone[] = [
  { tone: '50', hex: 'FFFFFF', rgb: { r: 255, g: 255, b: 255 }, hsl: { h: '0°', s: '0%', l: '100%' }, token: 'color_system/global/neutral/gray/50' },
  { tone: '100', hex: 'F2F2F2', rgb: { r: 242, g: 242, b: 242 }, hsl: { h: '0°', s: '0%', l: '95%' }, token: 'color_system/global/neutral/gray/100' },
  { tone: '200', hex: 'D9D9D9', rgb: { r: 217, g: 217, b: 217 }, hsl: { h: '0°', s: '0%', l: '85%' }, token: 'color_system/global/neutral/gray/200' },
  { tone: '300', hex: 'BFBFBF', rgb: { r: 191, g: 191, b: 191 }, hsl: { h: '0°', s: '0%', l: '75%' }, token: 'color_system/global/neutral/gray/300' },
  { tone: '400', hex: 'A6A6A6', rgb: { r: 166, g: 166, b: 166 }, hsl: { h: '0°', s: '0%', l: '65%' }, token: 'color_system/global/neutral/gray/400' },
  { tone: '500', hex: '8C8C8C', rgb: { r: 140, g: 140, b: 140 }, hsl: { h: '0°', s: '0%', l: '55%' }, token: 'color_system/global/neutral/gray/500' },
  { tone: '600', hex: '737373', rgb: { r: 115, g: 115, b: 115 }, hsl: { h: '0°', s: '0%', l: '45%' }, token: 'color_system/global/neutral/gray/600' },
  { tone: '700', hex: '595959', rgb: { r: 89, g: 89, b: 89 }, hsl: { h: '0°', s: '0%', l: '35%' }, token: 'color_system/global/neutral/gray/700' },
  { tone: '800', hex: '404040', rgb: { r: 64, g: 64, b: 64 }, hsl: { h: '0°', s: '0%', l: '25%' }, token: 'color_system/global/neutral/gray/800' },
  { tone: '900', hex: '262626', rgb: { r: 38, g: 38, b: 38 }, hsl: { h: '0°', s: '0%', l: '15%' }, token: 'color_system/global/neutral/gray/900' },
]

interface Family {
  name: string
  description: string
  tones: Tone[]
}

const PALETA_CROMATICA: Family[] = [
  { name: 'Blue', description: 'Familia cromática utilizada como base de la escala principal.', tones: BLUE },
  { name: 'Light Blue', description: 'Familia cromática de apoyo que amplía la paleta base.', tones: LIGHT_BLUE },
  { name: 'Orange', description: 'Escala cálida para acentos promocionales y campañas de alto impacto.', tones: ORANGE },
  { name: 'Teal', description: 'Escala de apoyo para recursos editoriales y acentos informativos premium.', tones: TEAL },
  { name: 'Apple', description: 'Escala fresca para recursos editoriales positivos y narrativas de crecimiento.', tones: APPLE },
  { name: 'Ink', description: 'Base neutral para texto, bordes, overlays y jerarquías editoriales.', tones: INK },
  { name: 'Gray', description: 'Escala acromática de grises, desde blanco hasta tonos oscuros.', tones: GRAY },
]

/* ─── Colores de sistema ─── */

const GREEN: Tone[] = [
  { tone: 'Soft', hex: 'ECFDF3', rgb: { r: 236, g: 253, b: 243 }, hsl: { h: '145°', s: '81%', l: '96%' }, token: 'color_system/global/functional/green/soft' },
  { tone: 'Default', hex: '16A34A', rgb: { r: 22, g: 163, b: 74 }, hsl: { h: '142°', s: '76%', l: '36%' }, token: 'color_system/global/functional/green/default' },
  { tone: 'Strong', hex: '166534', rgb: { r: 22, g: 101, b: 52 }, hsl: { h: '143°', s: '64%', l: '24%' }, token: 'color_system/global/functional/green/strong' },
]

const AMBER: Tone[] = [
  { tone: 'Soft', hex: 'FFFBEB', rgb: { r: 255, g: 251, b: 235 }, hsl: { h: '48°', s: '100%', l: '96%' }, token: 'color_system/global/functional/amber/soft' },
  { tone: 'Default', hex: 'D97706', rgb: { r: 217, g: 119, b: 6 }, hsl: { h: '32°', s: '95%', l: '44%' }, token: 'color_system/global/functional/amber/default' },
  { tone: 'Strong', hex: '92400E', rgb: { r: 146, g: 64, b: 14 }, hsl: { h: '23°', s: '83%', l: '31%' }, token: 'color_system/global/functional/amber/strong' },
]

const RED: Tone[] = [
  { tone: 'Soft', hex: 'FEF2F2', rgb: { r: 254, g: 242, b: 242 }, hsl: { h: '0°', s: '86%', l: '97%' }, token: 'color_system/global/functional/red/soft' },
  { tone: 'Default', hex: 'DC2626', rgb: { r: 220, g: 38, b: 38 }, hsl: { h: '0°', s: '72%', l: '51%' }, token: 'color_system/global/functional/red/default' },
  { tone: 'Strong', hex: '991B1B', rgb: { r: 153, g: 27, b: 27 }, hsl: { h: '0°', s: '70%', l: '35%' }, token: 'color_system/global/functional/red/strong' },
]

const FUNCTIONAL_BLUE: Tone[] = [
  { tone: 'Soft', hex: 'EFF6FF', rgb: { r: 239, g: 246, b: 255 }, hsl: { h: '214°', s: '100%', l: '97%' }, token: 'color_system/global/functional/blue/soft' },
  { tone: 'Default', hex: '2563EB', rgb: { r: 37, g: 99, b: 235 }, hsl: { h: '221°', s: '83%', l: '53%' }, token: 'color_system/global/functional/blue/default' },
  { tone: 'Strong', hex: '1E40AF', rgb: { r: 30, g: 64, b: 175 }, hsl: { h: '226°', s: '71%', l: '40%' }, token: 'color_system/global/functional/blue/strong' },
]

const COLORES_SISTEMA: Family[] = [
  { name: 'Green', description: 'Rol Success — se asigna en Semantic Colors.', tones: GREEN },
  { name: 'Amber', description: 'Rol Warning / Caution — se asigna en Semantic Colors.', tones: AMBER },
  { name: 'Red', description: 'Rol Error / Danger — se asigna en Semantic Colors.', tones: RED },
  { name: 'Blue', description: 'Rol Info — se asigna en Semantic Colors.', tones: FUNCTIONAL_BLUE },
]

const GOVERNANCE_RULES = [
  'Las escalas globales funcionan como primitives. No deben asignar por sí mismas intención de marca, componente o estado semántico.',
  'Los roles de Brand Colors y Semantic Colors deben referenciar estos valores mediante referencias, evitando duplicar valores HEX.',
  'Las familias funcionales se mantienen como primitives mínimos (Soft, Default, Strong); su significado final se define en Semantic Colors.',
  'Los valores de este board constituyen la capa global de color del template y deben mantenerse independientes de la identidad de un cliente específico.',
  'HEX es la fuente de verdad del sistema digital; RGB y HSL pueden utilizarse como referencia técnica cuando sea necesario.',
]

function ToneGrid({ tones }: { tones: Tone[] }) {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      {tones.map((t) => (
        <ColorCard key={t.tone} variant="tertiary" color={`#${t.hex}`} name={t.tone} hex={t.hex} rgb={t.rgb} hsl={t.hsl} token={t.token} />
      ))}
    </div>
  )
}

function FamilyCard({ family }: { family: Family }) {
  return (
    <div className="flex w-full min-w-0 flex-col gap-[16px]">
      <div className="flex flex-col gap-[4px]">
        <p className="font-bold text-[20px] leading-[26px] tracking-[-0.24px] text-[#16181d]">{family.name}</p>
        <p className="text-[13px] leading-[19px] text-[#576175]">{family.description}</p>
      </div>
      <ToneGrid tones={family.tones} />
    </div>
  )
}

export function GlobalColorsPage() {
  return (
    <div id="color.global-colors" className="flex w-full flex-col items-start bg-white">
      <PageHeader
        module="Color System"
        title="01 Global Colors"
        paragraphs={[
          'Escalas primitivas de color que forman la base del sistema.',
          'Funcionan como fuente para construir los roles de Brand Colors y Semantic Colors sin asignar todavía una intención de uso específica.',
          null,
          'HEX es la fuente de verdad; RGB y HSL se mantienen como referencia técnica para implementación.',
        ]}
      />

      <div className="flex w-full flex-col gap-[64px] px-[40px] py-[80px]">
        {/* Básicos */}
        <section className="flex w-full flex-col gap-[24px]">
          <div className="flex flex-col gap-[4px]">
            <h2 className="font-bold text-[40px] leading-[44px] tracking-[-0.4px] text-[#16181d]">Básicos</h2>
            <p className="text-[16px] leading-[24px] text-[#576175]">Colores base del sistema.</p>
          </div>
          <div className="grid grid-cols-1 gap-[16px] min-[700px]:grid-cols-2 max-w-[600px]">
            {BASICOS.map((t) => (
              <ColorCard key={t.tone} variant="tertiary" color={`#${t.hex}`} name={t.tone} hex={t.hex} rgb={t.rgb} hsl={t.hsl} token={t.token} />
            ))}
          </div>
        </section>

        {/* Paleta cromática */}
        <section className="flex w-full flex-col gap-[24px]">
          <div className="flex flex-col gap-[4px]">
            <h2 className="font-bold text-[40px] leading-[44px] tracking-[-0.4px] text-[#16181d]">Paleta cromática</h2>
            <p className="text-[16px] leading-[24px] text-[#576175]">Todos los colores del sistema, organizados de 50 a 900.</p>
          </div>
          <div className="grid grid-cols-1 gap-x-[32px] gap-y-[48px] min-[900px]:grid-cols-2 min-[1400px]:grid-cols-3">
            {PALETA_CROMATICA.map((f) => (
              <FamilyCard key={f.name} family={f} />
            ))}
          </div>
        </section>

        {/* Colores de sistema */}
        <section className="flex w-full flex-col gap-[24px]">
          <div className="flex flex-col gap-[4px]">
            <h2 className="font-bold text-[40px] leading-[44px] tracking-[-0.4px] text-[#16181d]">Colores de sistema</h2>
            <p className="text-[16px] leading-[24px] text-[#576175]">
              Colores de error, success, warning e info. No existe un HEX universal para estos estados: son
              defaults neutrales del template y pueden reemplazarse por proyecto sin alterar los roles semánticos.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-[32px] gap-y-[48px] min-[900px]:grid-cols-2 min-[1400px]:grid-cols-4">
            {COLORES_SISTEMA.map((f) => (
              <FamilyCard key={f.name} family={f} />
            ))}
          </div>
        </section>
      </div>

      <GovernanceFooter title="Gobernanza del color" rules={GOVERNANCE_RULES} />
      <MetaFooter label="v2 · 01 Global Colors · Color System · Master Template" />
    </div>
  )
}
