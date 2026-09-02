import { ColorCard } from '@/app/components/ColorCard'

function CardHeader() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="card-header">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#16181d] text-[24px] tracking-[-0.24px] w-full">Green</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#576175] text-[16px] w-full">Primitive verde en tres niveles de intensidad. Funciona como base cromática reusable; el rol Success se asigna posteriormente en Semantic Colors.</p>
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="card-header">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#16181d] text-[24px] tracking-[-0.24px] w-full">Amber</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#576175] text-[16px] w-full">Primitive ámbar en tres niveles de intensidad. Funciona como base cromática reusable; los roles Warning o Caution se asignan posteriormente en Semantic Colors.</p>
    </div>
  );
}

function CardHeader2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="card-header">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#16181d] text-[24px] tracking-[-0.24px] w-full">Red</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#576175] text-[16px] w-full">Primitive roja en tres niveles de intensidad. Funciona como base cromática reusable; los roles Error o Danger se asignan posteriormente en Semantic Colors.</p>
    </div>
  );
}

function CardHeader3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="card-header">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#16181d] text-[24px] tracking-[-0.24px] w-full">Blue</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#576175] text-[16px] w-full">Primitive azul en tres niveles de intensidad. Funciona como base cromática reusable; el rol Info se asigna posteriormente en Semantic Colors.</p>
    </div>
  );
}

const greenTones = [
  { tone: 'Soft',    hex: 'ECFDF3', rgb: { r: 236, g: 253, b: 243 }, hsl: { h: '145°', s: '81%', l: '96%' }, token: 'color/primitive/green/soft'    },
  { tone: 'Default', hex: '16A34A', rgb: { r: 22,  g: 163, b: 74  }, hsl: { h: '142°', s: '76%', l: '36%' }, token: 'color/primitive/green/default' },
  { tone: 'Strong',  hex: '166534', rgb: { r: 22,  g: 101, b: 52  }, hsl: { h: '143°', s: '64%', l: '24%' }, token: 'color/primitive/green/strong'  },
]

const amberTones = [
  { tone: 'Soft',    hex: 'FFFBEB', rgb: { r: 255, g: 251, b: 235 }, hsl: { h: '48°', s: '100%', l: '96%' }, token: 'color/primitive/amber/soft'    },
  { tone: 'Default', hex: 'D97706', rgb: { r: 217, g: 119, b: 6   }, hsl: { h: '32°', s: '95%',  l: '44%' }, token: 'color/primitive/amber/default' },
  { tone: 'Strong',  hex: '92400E', rgb: { r: 146, g: 64,  b: 14  }, hsl: { h: '23°', s: '83%',  l: '31%' }, token: 'color/primitive/amber/strong'  },
]

const redTones = [
  { tone: 'Soft',    hex: 'FEF2F2', rgb: { r: 254, g: 242, b: 242 }, hsl: { h: '0°', s: '86%', l: '97%' }, token: 'color/primitive/red/soft'    },
  { tone: 'Default', hex: 'DC2626', rgb: { r: 220, g: 38,  b: 38  }, hsl: { h: '0°', s: '72%', l: '51%' }, token: 'color/primitive/red/default' },
  { tone: 'Strong',  hex: '991B1B', rgb: { r: 153, g: 27,  b: 27  }, hsl: { h: '0°', s: '70%', l: '35%' }, token: 'color/primitive/red/strong'  },
]

const blueTones = [
  { tone: 'Soft',    hex: 'EFF6FF', rgb: { r: 239, g: 246, b: 255 }, hsl: { h: '214°', s: '100%', l: '97%' }, token: 'color/primitive/blue/soft'    },
  { tone: 'Default', hex: '2563EB', rgb: { r: 37,  g: 99,  b: 235 }, hsl: { h: '221°', s: '83%',  l: '53%' }, token: 'color/primitive/blue/default' },
  { tone: 'Strong',  hex: '1E40AF', rgb: { r: 30,  g: 64,  b: 175 }, hsl: { h: '226°', s: '71%',  l: '40%' }, token: 'color/primitive/blue/strong'  },
]

function CardFunctionalGreen() {
  return (
    <div className="bg-white content-stretch relative w-full grid row-span-2 [grid-template-rows:subgrid]" data-name="card-functional-green">
      <CardHeader />
      <div className="flex flex-col gap-[24px]">
        {greenTones.map(({ tone, hex, rgb, hsl, token }) => (
          <ColorCard key={tone} variant="tertiary" color={`#${hex}`} name={tone} hex={hex} rgb={rgb} hsl={hsl} token={token} />
        ))}
      </div>
    </div>
  );
}

function CardFunctionalAmber() {
  return (
    <div className="bg-white content-stretch relative w-full grid row-span-2 [grid-template-rows:subgrid]" data-name="card-functional-amber">
      <CardHeader1 />
      <div className="flex flex-col gap-[24px]">
        {amberTones.map(({ tone, hex, rgb, hsl, token }) => (
          <ColorCard key={tone} variant="tertiary" color={`#${hex}`} name={tone} hex={hex} rgb={rgb} hsl={hsl} token={token} />
        ))}
      </div>
    </div>
  );
}

function CardFunctionalRed() {
  return (
    <div className="bg-white content-stretch relative w-full grid row-span-2 [grid-template-rows:subgrid]" data-name="card-functional-red">
      <CardHeader2 />
      <div className="flex flex-col gap-[24px]">
        {redTones.map(({ tone, hex, rgb, hsl, token }) => (
          <ColorCard key={tone} variant="tertiary" color={`#${hex}`} name={tone} hex={hex} rgb={rgb} hsl={hsl} token={token} />
        ))}
      </div>
    </div>
  );
}

function CardFunctionalBlue() {
  return (
    <div className="bg-white content-stretch relative w-full grid row-span-2 [grid-template-rows:subgrid]" data-name="card-functional-blue">
      <CardHeader3 />
      <div className="flex flex-col gap-[24px]">
        {blueTones.map(({ tone, hex, rgb, hsl, token }) => (
          <ColorCard key={tone} variant="tertiary" color={`#${hex}`} name={tone} hex={hex} rgb={rgb} hsl={hsl} token={token} />
        ))}
      </div>
    </div>
  );
}

function FunctionalRow() {
  return (
    <div className="flex flex-col gap-[80px] relative w-full" data-name="functional-row-1">
      <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-x-[32px] gap-y-[32px] items-start w-full">
        <CardFunctionalGreen />
        <CardFunctionalAmber />
        <CardFunctionalRed />
      </div>
      <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-x-[32px] gap-y-[32px] items-start w-full">
        <CardFunctionalBlue />
      </div>
    </div>
  );
}

function ColorScaleGrid() {
  return (
    <div className="content-stretch flex flex-col items-start relative w-full" data-name="color-scale-grid">
      <FunctionalRow />
    </div>
  );
}

function SectionHeader1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative w-full" data-name="section-header">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[44px] relative shrink-0 text-[#16181d] text-[40px] w-full">Escalas de colores funcionales</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#576175] text-[16px] w-full">Primitives cromáticos para estados funcionales del sistema. No existe un HEX universal para Success, Warning, Error o Info: estos valores son defaults neutrales del template y pueden reemplazarse por proyecto sin alterar los roles semánticos.</p>
    </div>
  );
}

export function Section05FunctionalColorScales() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full" data-name="section-05-functional-color-scales">
      <SectionHeader1 />
      <ColorScaleGrid />
    </div>
  );
}
