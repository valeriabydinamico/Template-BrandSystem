import { ColorCard } from '@/app/components/ColorCard'

function CardHeader4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="card-header">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#16181d] text-[24px] tracking-[-0.24px] w-full">Ink</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#576175] text-[16px] w-full">Base neutral para texto, bordes, overlays y jerarquías editoriales. Define los niveles de contraste y opacidad del sistema para garantizar legibilidad y consistencia visual en todos los formatos.</p>
    </div>
  );
}

function CardHeader5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="card-header">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#16181d] text-[24px] tracking-[-0.24px] w-full">Gray</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#576175] text-[16px] w-full">Escala acromática de grises, desde blanco hasta tonos oscuros. Funciona como primitive neutral para construir fondos, divisores, texto inverso y otras superficies sin introducir matiz de marca.</p>
    </div>
  );
}

const inkTones = [
  { tone: '50',  hex: 'F1F2F4', rgb: { r: 241, g: 242, b: 244 }, hsl: { h: '220°', s: '12%', l: '95%' }, token: 'color/primitive/ink/50'  },
  { tone: '100', hex: 'E3E4EA', rgb: { r: 227, g: 228, b: 234 }, hsl: { h: '231°', s: '14%', l: '90%' }, token: 'color/primitive/ink/100' },
  { tone: '200', hex: 'C4C9D4', rgb: { r: 196, g: 201, b: 212 }, hsl: { h: '221°', s: '16%', l: '80%' }, token: 'color/primitive/ink/200' },
  { tone: '300', hex: 'A8AFBE', rgb: { r: 168, g: 175, b: 190 }, hsl: { h: '221°', s: '14%', l: '70%' }, token: 'color/primitive/ink/300' },
  { tone: '400', hex: '8A94A8', rgb: { r: 138, g: 148, b: 168 }, hsl: { h: '220°', s: '14%', l: '60%' }, token: 'color/primitive/ink/400' },
  { tone: '500', hex: '6D7993', rgb: { r: 109, g: 121, b: 147 }, hsl: { h: '221°', s: '15%', l: '50%' }, token: 'color/primitive/ink/500' },
  { tone: '600', hex: '576175', rgb: { r: 87,  g: 97,  b: 117 }, hsl: { h: '220°', s: '15%', l: '40%' }, token: 'color/primitive/ink/600' },
  { tone: '700', hex: '42495B', rgb: { r: 66,  g: 73,  b: 91  }, hsl: { h: '223°', s: '16%', l: '31%' }, token: 'color/primitive/ink/700' },
  { tone: '800', hex: '292E38', rgb: { r: 41,  g: 46,  b: 56  }, hsl: { h: '221°', s: '16%', l: '20%' }, token: 'color/primitive/ink/800' },
  { tone: '900', hex: '16181D', rgb: { r: 22,  g: 24,  b: 29  }, hsl: { h: '223°', s: '14%', l: '10%' }, token: 'color/primitive/ink/900' },
]

const grayTones = [
  { tone: '50',  hex: 'FFFFFF', rgb: { r: 255, g: 255, b: 255 }, hsl: { h: '0°', s: '0%', l: '100%' }, token: 'color/primitive/gray/50'  },
  { tone: '100', hex: 'F2F2F2', rgb: { r: 242, g: 242, b: 242 }, hsl: { h: '0°', s: '0%', l: '95%'  }, token: 'color/primitive/gray/100' },
  { tone: '200', hex: 'D9D9D9', rgb: { r: 217, g: 217, b: 217 }, hsl: { h: '0°', s: '0%', l: '85%'  }, token: 'color/primitive/gray/200' },
  { tone: '300', hex: 'BFBFBF', rgb: { r: 191, g: 191, b: 191 }, hsl: { h: '0°', s: '0%', l: '75%'  }, token: 'color/primitive/gray/300' },
  { tone: '400', hex: 'A6A6A6', rgb: { r: 166, g: 166, b: 166 }, hsl: { h: '0°', s: '0%', l: '65%'  }, token: 'color/primitive/gray/400' },
  { tone: '500', hex: '8C8C8C', rgb: { r: 140, g: 140, b: 140 }, hsl: { h: '0°', s: '0%', l: '55%'  }, token: 'color/primitive/gray/500' },
  { tone: '600', hex: '737373', rgb: { r: 115, g: 115, b: 115 }, hsl: { h: '0°', s: '0%', l: '45%'  }, token: 'color/primitive/gray/600' },
  { tone: '700', hex: '595959', rgb: { r: 89,  g: 89,  b: 89  }, hsl: { h: '0°', s: '0%', l: '35%'  }, token: 'color/primitive/gray/700' },
  { tone: '800', hex: '404040', rgb: { r: 64,  g: 64,  b: 64  }, hsl: { h: '0°', s: '0%', l: '25%'  }, token: 'color/primitive/gray/800' },
  { tone: '900', hex: '262626', rgb: { r: 38,  g: 38,  b: 38  }, hsl: { h: '0°', s: '0%', l: '15%'  }, token: 'color/primitive/gray/900' },
]

function Card01Ink() {
  return (
    <div className="bg-white content-stretch relative w-full grid row-span-2 [grid-template-rows:subgrid]" data-name="card-01-ink">
      <CardHeader4 />
      <div className="flex flex-col gap-[16px]">
        {inkTones.map(({ tone, hex, rgb, hsl, token }) => (
          <ColorCard key={tone} variant="tertiary" color={`#${hex}`} name={tone} hex={hex} rgb={rgb} hsl={hsl} token={token} />
        ))}
      </div>
    </div>
  );
}

function Card02Gray() {
  return (
    <div className="bg-white content-stretch relative w-full grid row-span-2 [grid-template-rows:subgrid]" data-name="card-02-gray">
      <CardHeader5 />
      <div className="flex flex-col gap-[16px]">
        {grayTones.map(({ tone, hex, rgb, hsl, token }) => (
          <ColorCard key={tone} variant="tertiary" color={`#${hex}`} name={tone} hex={hex} rgb={rgb} hsl={hsl} token={token} />
        ))}
      </div>
    </div>
  );
}

function ColorScaleGrid2() {
  return (
    <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-x-[32px] gap-y-[32px] items-start relative w-full" data-name="color-scale-grid">
      <Card01Ink />
      <Card02Gray />
    </div>
  );
}

function ColorScaleGrid1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="color-scale-grid">
      <ColorScaleGrid2 />
    </div>
  );
}

function SectionHeader2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative w-full" data-name="section-header">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[44px] relative shrink-0 text-[#16181d] text-[40px] w-full">Escala de colores neutrales</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#576175] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Escala neutral base para construir contraste, jerarquía y superficies de soporte.</p>
        <p className="leading-[24px]">Sus valores funcionan como primitives y pueden alimentar texto, bordes, fondos y otros roles semánticos en etapas posteriores.</p>
      </div>
    </div>
  );
}

export function Section04NeutralColorScale() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full" data-name="section-04-neutral-color-scale">
      <SectionHeader2 />
      <ColorScaleGrid1 />
    </div>
  );
}

export function Divider() {
  return (
    <div className="bg-[#eef2f8] h-px relative w-full" data-name="divider-01" />
  );
}
