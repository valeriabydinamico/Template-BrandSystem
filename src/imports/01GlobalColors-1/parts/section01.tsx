import { ColorCard } from '@/app/components/ColorCard'

function ParagraphContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Paragraph container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#16181d] text-[24px] tracking-[-0.24px] w-full">Blue</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#576175] text-[16px] w-full">Familia cromática utilizada como base de la escala principal. Sus valores funcionan como primitives y pueden alimentar distintos roles de marca y semánticos según el proyecto.</p>
    </div>
  );
}

const blueScaleTones = [
  { tone: '50',  hex: 'F2F8FF', rgb: { r: 242, g: 248, b: 255 }, hsl: { h: '212°', s: '100%', l: '97%'  }, token: 'color/primitive/blue/50'  },
  { tone: '100', hex: 'E1F0FF', rgb: { r: 225, g: 240, b: 255 }, hsl: { h: '210°', s: '100%', l: '94%'  }, token: 'color/primitive/blue/100' },
  { tone: '200', hex: 'BFDFFF', rgb: { r: 191, g: 223, b: 255 }, hsl: { h: '210°', s: '100%', l: '87%'  }, token: 'color/primitive/blue/200' },
  { tone: '300', hex: '8FC7FF', rgb: { r: 143, g: 199, b: 255 }, hsl: { h: '210°', s: '100%', l: '78%'  }, token: 'color/primitive/blue/300' },
  { tone: '400', hex: '5FAEFF', rgb: { r: 95,  g: 174, b: 255 }, hsl: { h: '210°', s: '100%', l: '69%'  }, token: 'color/primitive/blue/400' },
  { tone: '500', hex: '1677D8', rgb: { r: 22,  g: 119, b: 216 }, hsl: { h: '210°', s: '82%',  l: '47%'  }, token: 'color/primitive/blue/500' },
  { tone: '600', hex: '0B5FB8', rgb: { r: 11,  g: 95,  b: 184 }, hsl: { h: '211°', s: '89%',  l: '38%'  }, token: 'color/primitive/blue/600' },
  { tone: '700', hex: '004C97', rgb: { r: 0,   g: 76,  b: 151 }, hsl: { h: '210°', s: '100%', l: '30%'  }, token: 'color/primitive/blue/700' },
  { tone: '800', hex: '003882', rgb: { r: 0,   g: 56,  b: 130 }, hsl: { h: '214°', s: '100%', l: '25%'  }, token: 'color/primitive/blue/800' },
  { tone: '900', hex: '001F3F', rgb: { r: 0,   g: 31,  b: 63  }, hsl: { h: '210°', s: '100%', l: '12%'  }, token: 'color/primitive/blue/900' },
]

function InputForm() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative w-full max-w-[500px]" data-name="Input form">
      <ParagraphContainer />
      <div className="flex flex-col gap-[12px] w-full">
        {blueScaleTones.map(({ tone, hex, rgb, hsl, token }) => (
          <ColorCard
            key={tone}
            variant="tertiary"
            color={`#${hex}`}
            name={tone}
            hex={hex}
            rgb={rgb}
            hsl={hsl}
            token={token}
          />
        ))}
      </div>
    </div>
  );
}

function SectionHeader5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative w-full max-w-[500px]" data-name="section-header">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[44px] relative shrink-0 text-[#16181d] whitespace-nowrap text-[32px]">Escala de color primario</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#576175] text-[16px] w-[min-content]">
        <p className="leading-[24px] mb-0">Escala cromática principal del sistema, organizada de 50 a 900.</p>
        <p className="leading-[24px]">Funciona como primitive y sirve como fuente para construir roles de marca y tokens semánticos sin definir todavía un uso específico de interfaz.</p>
      </div>
    </div>
  );
}

export function Section01PrimaryColorScale() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full" data-name="section-01-primary-color-scale">
      <SectionHeader5 />
      <InputForm />
    </div>
  );
}
