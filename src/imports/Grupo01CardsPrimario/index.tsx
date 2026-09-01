function Tags() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[10px] relative rounded-[28px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#292e3b] text-[16px] whitespace-nowrap">AAA</p>
    </div>
  );
}

function Tags1() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[10px] relative rounded-[28px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#292e3b] text-[16px] whitespace-nowrap">8.47:1</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Tags />
      <Tags1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[6px] items-start not-italic relative shrink-0 text-white w-full">
      <p className="leading-[28px] min-w-full relative shrink-0 text-[24px] w-[min-content]">BG Blue</p>
      <p className="leading-[24px] relative shrink-0 text-[16px] whitespace-nowrap">Brand Default: BG Blue 700</p>
    </div>
  );
}

function Value() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-name="Value 1">
      <p className="relative shrink-0">HEX #</p>
      <p className="relative shrink-0">004C97</p>
    </div>
  );
}

function ColourValuesValues() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Colour Values/Values">
      <Value />
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold gap-[20px] items-start leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">R 0</p>
        <p className="leading-[24px] mb-0">G 76</p>
        <p className="leading-[24px]">B 151</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">C 100</p>
        <p className="leading-[24px] mb-0">M 50</p>
        <p className="leading-[24px] mb-0">Y 0</p>
        <p className="leading-[24px]">K 41</p>
      </div>
    </div>
  );
}

function Value1() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-full whitespace-nowrap" data-name="Value 1">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0">P</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">Pantone 2945 C</p>
    </div>
  );
}

function ColourValuesValues1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Colour Values/Values">
      <Value1 />
    </div>
  );
}

function ColorValues() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Color values">
      <Frame />
      <Frame2 />
      <ColourValuesValues />
      <Frame1 />
      <ColourValuesValues1 />
    </div>
  );
}

function CardBgBlue() {
  return (
    <div className="bg-[#004c97] flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="card-bg-blue">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[20px] relative size-full">
          <ColorValues />
        </div>
      </div>
    </div>
  );
}

export default function Grupo01CardsPrimario() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="grupo-01-cards-primario">
      <CardBgBlue />
    </div>
  );
}