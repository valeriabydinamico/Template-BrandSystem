import { ColorCard } from '@/app/components/ColorCard'

function SectionHeader() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic overflow-clip pb-[24px] relative shrink-0 w-full" data-name="section-header">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#16181d] text-[40px] whitespace-nowrap">Gradientes</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#576175] text-[16px] w-full">Recursos cromáticos opcionales del sistema. El template conserva una estructura editable para documentar gradientes cuando una marca los requiera, sin asignarles un uso predeterminado.</p>
    </div>
  );
}

const gradients = [
  { name: 'Gradiente 01', colorTop: '0067CC', colorBottom: '003366', token: 'style/gradient/01' },
  { name: 'Gradiente 02', colorTop: '0067CC', colorBottom: '004C97', token: 'style/gradient/02' },
  { name: 'Gradiente 03', colorTop: 'FF9233', colorBottom: 'E65719', token: 'style/gradient/03' },
  { name: 'Gradiente 04', colorTop: 'FFA14D', colorBottom: 'FF7900', token: 'style/gradient/04' },
  { name: 'Gradiente 05', colorTop: '85CC33', colorBottom: '6AA329', token: 'style/gradient/05' },
  { name: 'Gradiente 06', colorTop: '00B9FF', colorBottom: '0094CC', token: 'style/gradient/06' },
  { name: 'Gradiente 07', colorTop: '28C9D7', colorBottom: '20A1AC', token: 'style/gradient/07' },
  { name: 'Gradiente 08', colorTop: 'FAFCFF', colorBottom: 'EBF5FF', token: 'style/gradient/08' },
]

function GradientGrid() {
  return (
    <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-x-[32px] gap-y-[32px] relative w-full" data-name="gradient-grid">
      {gradients.map(({ name, colorTop, colorBottom, token }) => (
        <div key={token} className="w-full h-[200px]">
          <ColorCard
            variant="gradient"
            color={`linear-gradient(to left, #${colorTop}, #${colorBottom})`}
            name={name}
            colorTop={colorTop}
            colorBottom={colorBottom}
            angle="90°"
            token={token}
          />
        </div>
      ))}
    </div>
  );
}

function GradientImplementationNote() {
  return (
    <div className="bg-[#f7f8fa] min-h-[80px] relative rounded-[12px] shrink-0 w-full" data-name="gradient-implementation-note">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic px-[20px] py-[16px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">Implementación de gradientes</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#576175] text-[13px] w-[min-content]">Cada gradiente se gestiona como Color Style reutilizable. Sus stops pueden vincularse a Global Colors cuando corresponda; no requiere crear un token semántico únicamente por existir.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e7ee] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function GradientContent() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative w-full" data-name="gradient-content">
      <SectionHeader />
      <GradientImplementationNote />
      <GradientGrid />
    </div>
  );
}

export function Section06Gradients() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="section-06-gradients">
      <GradientContent />
    </div>
  );
}
