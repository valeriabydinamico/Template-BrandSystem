import svgPaths from "../svg-0ms03mowh5";

function IntroCopy() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-start not-italic relative w-full"
      data-name="intro-copy"
    >
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[48px] text-[#2f3945] tracking-[-0.4px] text-[32px]">
        01 Global Colors
      </p>

      <div className="font-['Inter:Regular',sans-serif] font-normal text-[#4d5965] w-full max-w-[649px] min-w-0">
        <p className="w-full max-w-full whitespace-normal break-words leading-[32px] mb-0 text-[16px]">
          Escalas primitivas de color que forman la base del sistema.
        </p>

        <p className="w-full max-w-full whitespace-normal break-words leading-[32px] mb-0 text-[16px]">
          Funcionan como fuente para construir los roles de Brand Colors y
          Semantic Colors sin asignar todavía una intención de uso específica.
        </p>

        <p className="w-full leading-[32px] mb-0">​</p>

        <p className="w-full max-w-full whitespace-normal break-words leading-[32px] text-[16px]">
          HEX es la fuente de verdad; RGB y HSL se mantienen como referencia
          técnica para implementación.
        </p>
      </div>
    </div>
  );
}

function AssetsIcons() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Assets/Icons">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 48 48" width="32">
        <g id="Assets/Icons">
          <path d={svgPaths.p202e76f0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
        </g>
      </svg>
    </div>
  );
}

function ModuleBadgeIcon() {
  return (
    <div className="bg-[#596879] content-stretch flex items-center p-[4px] relative rounded-[16px] shrink-0" data-name="module-badge-icon">
      <AssetsIcons />
    </div>
  );
}

function ModuleBadge() {
  return (
    <div className="bg-[#f6f8fa] content-stretch flex gap-[8px] h-fit items-center p-[12px] relative rounded-[12px] shrink-0" data-name="module-badge">
      <div aria-hidden className="absolute border border-[#b9c3ce] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <ModuleBadgeIcon />
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.7] not-italic relative shrink-0 text-[#465463] whitespace-nowrap text-[18px]">Color System</p>
    </div>
  );
}

function IntroCard() {
  return (
    <div className="bg-[#d2d8e1] h-fit relative rounded-[40px] shrink-0 w-full" data-name="intro-card">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-between relative size-full px-[40px] py-[48px]">
          <IntroCopy />
          <ModuleBadge />
        </div>
      </div>
    </div>
  );
}

export function Intro() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="intro">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start relative size-full p-[32px]">
          <IntroCard />
        </div>
      </div>
    </div>
  );
}
