import { ColorCard } from '@/app/components/ColorCard'

function CardHeader6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="card-header">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#16181d] text-[24px] tracking-[-0.24px] w-full">Orange</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#576175] text-[16px] w-full">Escala cálida para acentos promocionales, llamados de atención, storytelling comercial y campañas de alto impacto.</p>
    </div>
  );
}

function CardHeader7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="card-header">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#16181d] text-[24px] tracking-[-0.24px] w-full">Teal</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#576175] text-[16px] w-full">Escala de apoyo para recursos editoriales, piezas de storytelling, fondos de campaña y acentos informativos premium.</p>
    </div>
  );
}

function CardHeader8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="card-header">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#16181d] text-[24px] tracking-[-0.24px] w-full">Apple</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#576175] text-[16px] w-full">Escala fresca para recursos editoriales positivos, campañas temáticas, iniciativas sostenibles y narrativas de crecimiento.</p>
    </div>
  );
}

const orangeTones = [
  { tone: '50',  hex: 'FFF3E6', rgb: { r: 255, g: 243, b: 230 }, hsl: { h: '31°', s: '100%', l: '95%' }, token: 'color/primitive/orange/50'  },
  { tone: '100', hex: 'FFE4CC', rgb: { r: 255, g: 228, b: 204 }, hsl: { h: '28°', s: '100%', l: '90%' }, token: 'color/primitive/orange/100' },
  { tone: '200', hex: 'FFC99A', rgb: { r: 255, g: 201, b: 154 }, hsl: { h: '28°', s: '100%', l: '80%' }, token: 'color/primitive/orange/200' },
  { tone: '300', hex: 'FFB066', rgb: { r: 255, g: 176, b: 102 }, hsl: { h: '29°', s: '100%', l: '70%' }, token: 'color/primitive/orange/300' },
  { tone: '400', hex: 'FF9433', rgb: { r: 255, g: 148, b: 51  }, hsl: { h: '29°', s: '100%', l: '60%' }, token: 'color/primitive/orange/400' },
  { tone: '500', hex: 'FF7900', rgb: { r: 255, g: 121, b: 0   }, hsl: { h: '28°', s: '100%', l: '50%' }, token: 'color/primitive/orange/500' },
  { tone: '600', hex: 'CD6101', rgb: { r: 205, g: 97,  b: 1   }, hsl: { h: '28°', s: '99%',  l: '40%' }, token: 'color/primitive/orange/600' },
  { tone: '700', hex: '994A00', rgb: { r: 153, g: 74,  b: 0   }, hsl: { h: '29°', s: '100%', l: '30%' }, token: 'color/primitive/orange/700' },
  { tone: '800', hex: '663000', rgb: { r: 102, g: 48,  b: 0   }, hsl: { h: '28°', s: '100%', l: '20%' }, token: 'color/primitive/orange/800' },
  { tone: '900', hex: '341800', rgb: { r: 52,  g: 24,  b: 0   }, hsl: { h: '28°', s: '100%', l: '10%' }, token: 'color/primitive/orange/900' },
]

const tealTones = [
  { tone: '50',  hex: 'E7F8F9', rgb: { r: 231, g: 248, b: 249 }, hsl: { h: '183°', s: '60%', l: '94%' }, token: 'color/primitive/teal/50'  },
  { tone: '100', hex: 'D4F4F7', rgb: { r: 212, g: 244, b: 247 }, hsl: { h: '185°', s: '69%', l: '90%' }, token: 'color/primitive/teal/100' },
  { tone: '200', hex: 'AAE9EF', rgb: { r: 170, g: 233, b: 239 }, hsl: { h: '185°', s: '68%', l: '80%' }, token: 'color/primitive/teal/200' },
  { tone: '300', hex: '7FDFE7', rgb: { r: 127, g: 223, b: 231 }, hsl: { h: '185°', s: '70%', l: '68%' }, token: 'color/primitive/teal/300' },
  { tone: '400', hex: '53D4DF', rgb: { r: 83,  g: 212, b: 223 }, hsl: { h: '185°', s: '68%', l: '60%' }, token: 'color/primitive/teal/400' },
  { tone: '500', hex: '29C9D8', rgb: { r: 41,  g: 201, b: 216 }, hsl: { h: '185°', s: '69%', l: '50%' }, token: 'color/primitive/teal/500' },
  { tone: '600', hex: '20A5B1', rgb: { r: 32,  g: 165, b: 177 }, hsl: { h: '185°', s: '69%', l: '41%' }, token: 'color/primitive/teal/600' },
  { tone: '700', hex: '187882', rgb: { r: 24,  g: 120, b: 130 }, hsl: { h: '186°', s: '69%', l: '30%' }, token: 'color/primitive/teal/700' },
  { tone: '800', hex: '105056', rgb: { r: 16,  g: 80,  b: 86  }, hsl: { h: '185°', s: '69%', l: '20%' }, token: 'color/primitive/teal/800' },
  { tone: '900', hex: '08282C', rgb: { r: 8,   g: 40,  b: 44  }, hsl: { h: '187°', s: '69%', l: '10%' }, token: 'color/primitive/teal/900' },
]

const appleTones = [
  { tone: '50',  hex: 'ECF7DF', rgb: { r: 236, g: 247, b: 223 }, hsl: { h: '87°', s: '60%', l: '92%' }, token: 'color/primitive/apple/50'  },
  { tone: '100', hex: 'DFF2CA', rgb: { r: 223, g: 242, b: 202 }, hsl: { h: '88°', s: '61%', l: '87%' }, token: 'color/primitive/apple/100' },
  { tone: '200', hex: 'C7E8A1', rgb: { r: 199, g: 232, b: 161 }, hsl: { h: '88°', s: '61%', l: '77%' }, token: 'color/primitive/apple/200' },
  { tone: '300', hex: 'AFDD79', rgb: { r: 175, g: 221, b: 121 }, hsl: { h: '88°', s: '60%', l: '67%' }, token: 'color/primitive/apple/300' },
  { tone: '400', hex: '96D350', rgb: { r: 150, g: 211, b: 80  }, hsl: { h: '88°', s: '60%', l: '57%' }, token: 'color/primitive/apple/400' },
  { tone: '500', hex: '7DC030', rgb: { r: 125, g: 192, b: 48  }, hsl: { h: '88°', s: '60%', l: '47%' }, token: 'color/primitive/apple/500' },
  { tone: '600', hex: '629726', rgb: { r: 98,  g: 151, b: 38  }, hsl: { h: '88°', s: '60%', l: '37%' }, token: 'color/primitive/apple/600' },
  { tone: '700', hex: '517A20', rgb: { r: 81,  g: 122, b: 32  }, hsl: { h: '87°', s: '58%', l: '30%' }, token: 'color/primitive/apple/700' },
  { tone: '800', hex: '365214', rgb: { r: 54,  g: 82,  b: 20  }, hsl: { h: '87°', s: '61%', l: '20%' }, token: 'color/primitive/apple/800' },
  { tone: '900', hex: '1B290A', rgb: { r: 27,  g: 41,  b: 10  }, hsl: { h: '87°', s: '61%', l: '10%' }, token: 'color/primitive/apple/900' },
]

function Card01Orange() {
  return (
    <div className="bg-white content-stretch relative w-full grid row-span-2 [grid-template-rows:subgrid]" data-name="card-01-orange">
      <CardHeader6 />
      <div className="flex flex-col gap-[24px]">
        {orangeTones.map(({ tone, hex, rgb, hsl, token }) => (
          <ColorCard key={tone} variant="tertiary" color={`#${hex}`} name={tone} hex={hex} rgb={rgb} hsl={hsl} token={token} />
        ))}
      </div>
    </div>
  );
}

function Card02Teal() {
  return (
    <div className="bg-white content-stretch relative w-full grid row-span-2 [grid-template-rows:subgrid]" data-name="card-02-teal">
      <CardHeader7 />
      <div className="flex flex-col gap-[24px]">
        {tealTones.map(({ tone, hex, rgb, hsl, token }) => (
          <ColorCard key={tone} variant="tertiary" color={`#${hex}`} name={tone} hex={hex} rgb={rgb} hsl={hsl} token={token} />
        ))}
      </div>
    </div>
  );
}

function Card03Apple() {
  return (
    <div className="bg-white content-stretch relative w-full grid row-span-2 [grid-template-rows:subgrid]" data-name="card-03-apple">
      <CardHeader8 />
      <div className="flex flex-col gap-[24px]">
        {appleTones.map(({ tone, hex, rgb, hsl, token }) => (
          <ColorCard key={tone} variant="tertiary" color={`#${hex}`} name={tone} hex={hex} rgb={rgb} hsl={hsl} token={token} />
        ))}
      </div>
    </div>
  );
}

function ColorScaleGrid3() {
  return (
    <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-x-[32px] gap-y-[32px] items-start relative w-full" data-name="color-scale-grid">
      <Card01Orange />
      <Card02Teal />
      <Card03Apple />
    </div>
  );
}

function SectionHeader3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative w-full" data-name="section-header">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[44px] relative shrink-0 text-[#16181d] text-[40px] w-full">Escalas de colores terciarios</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#576175] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Escalas cromáticas complementarias para ampliar el rango expresivo del sistema.</p>
        <p className="leading-[24px]">Su presencia y cantidad pueden variar por proyecto y deben mantenerse desacopladas de cualquier intención semántica específica.</p>
      </div>
    </div>
  );
}

export function Section03TertiaryColorScales() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full" data-name="section-03-tertiary-color-scales">
      <SectionHeader3 />
      <ColorScaleGrid3 />
    </div>
  );
}

export function Divider1() {
  return (
    <div className="bg-[#eef2f8] h-px relative w-full" data-name="divider-02" />
  );
}
