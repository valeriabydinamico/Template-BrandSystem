function ColorSwatchValue() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">50</p>
    </div>
  );
}

function ColorSwatchValue1() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue2() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#FCE8E8</p>
      <p className="relative shrink-0">252, 232, 232</p>
      <p className="relative shrink-0">0°, 77%, 95%</p>
    </div>
  );
}

function ValoresDeColores() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue1 />
      <ColorSwatchValue2 />
    </div>
  );
}

function Tags() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/red/50</p>
    </div>
  );
}

export default function Colourblocks() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[12px] relative rounded-[12px] size-full" data-name="Colourblocks">
      <div className="absolute bg-[#fce8e8] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue />
      <ValoresDeColores />
      <Tags />
    </div>
  );
}