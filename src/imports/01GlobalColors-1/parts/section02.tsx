import { ColorCard } from '@/app/components/ColorCard'

function CardHeader9() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="card-header">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#16181d] text-[24px] tracking-[-0.24px] w-full">Light Blue</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#576175] text-[16px] w-full">Familia cromática de apoyo que amplía la paleta base. Sus valores funcionan como primitives y pueden asignarse posteriormente a roles de marca, superficies o acentos semánticos.</p>
    </div>
  );
}

const lightBlueTones = [
  { tone: '50',  hex: 'E5F9FF', rgb: { r: 229, g: 249, b: 255 }, hsl: { h: '194°', s: '100%', l: '95%' }, token: 'color/primitive/light-blue/50'  },
  { tone: '100', hex: 'CCF1FF', rgb: { r: 204, g: 241, b: 255 }, hsl: { h: '196°', s: '100%', l: '90%' }, token: 'color/primitive/light-blue/100' },
  { tone: '200', hex: '9AE3FF', rgb: { r: 154, g: 227, b: 255 }, hsl: { h: '198°', s: '100%', l: '82%' }, token: 'color/primitive/light-blue/200' },
  { tone: '300', hex: '65D6FF', rgb: { r: 101, g: 214, b: 255 }, hsl: { h: '196°', s: '100%', l: '70%' }, token: 'color/primitive/light-blue/300' },
  { tone: '400', hex: '35C7FF', rgb: { r: 53,  g: 199, b: 255 }, hsl: { h: '197°', s: '100%', l: '60%' }, token: 'color/primitive/light-blue/400' },
  { tone: '500', hex: '15BFFF', rgb: { r: 21,  g: 191, b: 255 }, hsl: { h: '196°', s: '100%', l: '54%' }, token: 'color/primitive/light-blue/500' },
  { tone: '600', hex: '00A3E1', rgb: { r: 0,   g: 163, b: 225 }, hsl: { h: '197°', s: '100%', l: '44%' }, token: 'color/primitive/light-blue/600' },
  { tone: '700', hex: '007EAE', rgb: { r: 0,   g: 126, b: 174 }, hsl: { h: '197°', s: '100%', l: '34%' }, token: 'color/primitive/light-blue/700' },
  { tone: '800', hex: '004A67', rgb: { r: 0,   g: 74,  b: 103 }, hsl: { h: '197°', s: '100%', l: '20%' }, token: 'color/primitive/light-blue/800' },
  { tone: '900', hex: '002533', rgb: { r: 0,   g: 37,  b: 51  }, hsl: { h: '196°', s: '100%', l: '10%' }, token: 'color/primitive/light-blue/900' },
]

function Card01LightBlue() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 max-w-[500px] w-full" data-name="card-01-light-blue">
      <CardHeader9 />
      <div className="flex flex-col gap-[12px] w-full">
        {lightBlueTones.map(({ tone, hex, rgb, hsl, token }) => (
          <ColorCard key={tone} variant="tertiary" color={`#${hex}`} name={tone} hex={hex} rgb={rgb} hsl={hsl} token={token} />
        ))}
      </div>
    </div>
  );
}

function Group01SecondaryColorScales() {
  return (
    <div className="content-stretch flex items-start relative w-full" data-name="group-01-secondary-color-scales">
      <Card01LightBlue />
    </div>
  );
}

function SectionHeader4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative w-full max-w-[500px]" data-name="section-header">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[44px] relative shrink-0 text-[#16181d] text-[40px] w-full">Escalas de colores secundarios</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#576175] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Escalas cromáticas de apoyo que amplían la paleta base del sistema.</p>
        <p className="leading-[24px]">Funcionan como primitives reutilizables y pueden alimentar distintos roles de marca o semánticos según las necesidades de cada proyecto.</p>
      </div>
    </div>
  );
}

export function Section02SecondaryColorScales() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full" data-name="section-02-secondary-color-scales">
      <SectionHeader4 />
      <Group01SecondaryColorScales />
    </div>
  );
}

export function Divider2() {
  return (
    <div className="bg-[#eef2f8] h-px relative w-full" data-name="divider-03" />
  );
}
