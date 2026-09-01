function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Gradiente 03</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">LEFT</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RIGHT</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">ANGLE</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[42px]" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#E65719</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#FF9233</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">90°</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[87px]" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[44px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function ColorCard() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[12px] relative shrink-0 w-full" data-name="ColorCard">
      <Container />
      <Container1 />
    </div>
  );
}

function Token() {
  return (
    <div className="bg-[#e6eef8] content-stretch drop-shadow-[0px_4px_2px_rgba(0,39,90,0.1)] flex flex-col h-[38px] items-start justify-center px-[8px] py-[12px] relative rounded-[6px] shrink-0 w-full" data-name="token">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[12px] whitespace-nowrap">style/gradient/03</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-gradient-to-l content-stretch flex flex-col from-[#ff9233] items-start overflow-clip p-[2px] relative rounded-[8px] size-full to-[#e65719]">
      <ColorCard />
      <Token />
    </div>
  );
}