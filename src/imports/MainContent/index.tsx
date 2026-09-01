import svgPaths from "./svg-22t4hezdmu";

function AssetsIcons() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Assets/Icons">
      <div className="absolute inset-[-6.48%]">
        <svg className="block size-full" fill="none" height="20.3337" preserveAspectRatio="none" viewBox="0 0 20.333 20.3337" width="20.333">
          <g id="Assets/Icons">
            <path d={svgPaths.p1750b100} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
      <AssetsIcons />
    </div>
  );
}

function ModuleBadgeIcon() {
  return (
    <div className="bg-[#596879] content-stretch flex items-center p-[4px] relative rounded-[12px] shrink-0 size-[32px]" data-name="ModuleBadgeIcon">
      <Icon />
    </div>
  );
}

function ModuleBadge() {
  return (
    <div className="bg-[#f6f8fa] border border-[#c4c9d4] border-solid content-stretch flex gap-[8px] items-center px-[11px] py-[8px] relative rounded-[12px] shrink-0" data-name="ModuleBadge">
      <ModuleBadgeIcon />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30.6px] not-italic relative shrink-0 text-[#465463] text-[16px] whitespace-nowrap">Color System</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#4d5965] text-[16px] w-full whitespace-pre-wrap">
        <p className="leading-[24px] mb-0">Escalas primitivas de color que forman la base del sistema.</p>
        <p className="leading-[24px] mb-0">Funcionan como fuente para construir los roles de Brand Colors y Semantic Colors sin asignar todavía una intención de uso específica.</p>
        <p className="leading-[24px] mb-0">​</p>
        <p className="leading-[24px]">HEX es la fuente de verdad; RGB y HSL se mantienen como referencia técnica para implementación.</p>
      </div>
    </div>
  );
}

function IntroCopy() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="IntroCopy">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[48px] not-italic relative shrink-0 text-[#2f3945] text-[48px] tracking-[-0.4px] whitespace-nowrap">01 Global Colors</p>
      <Container1 />
    </div>
  );
}

function IntroCard() {
  return (
    <div className="bg-[#d2d8e1] content-stretch flex flex-col gap-[32px] items-start px-[40px] py-[48px] relative rounded-[40px] shrink-0 w-full" data-name="IntroCard">
      <ModuleBadge />
      <IntroCopy />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip p-[24px] relative shrink-0 w-full" data-name="Container">
      <IntroCard />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Soft</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.22px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#EFF6FF</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">239, 246, 255</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">214°, 100%, 97%</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[92px]" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[476px]" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/blue/soft</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[234px]" data-name="Container">
      <Paragraph7 />
    </div>
  );
}

function ColorCard() {
  return (
    <div className="bg-[#eff6ff] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container3 />
      <Container4 />
      <Container7 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Default</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.93px] overflow-clip top-[12.01px] w-[70px]" data-name="Container">
      <Paragraph8 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph9 />
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#2563EB</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">37, 99, 235</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">221°, 83%, 53%</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[87px]" data-name="Container">
      <Paragraph12 />
      <Paragraph13 />
      <Paragraph14 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[476px]" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/blue/default</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.1px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[259px]" data-name="Container">
      <Paragraph15 />
    </div>
  );
}

function ColorCard1() {
  return (
    <div className="bg-[#2563eb] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container8 />
      <Container9 />
      <Container12 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Strong</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.82px] overflow-clip top-[12.01px] w-[65px]" data-name="Container">
      <Paragraph16 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph17 />
      <Paragraph18 />
      <Paragraph19 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#1E40AF</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">30, 64, 175</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">226°, 71%, 40%</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[86px]" data-name="Container">
      <Paragraph20 />
      <Paragraph21 />
      <Paragraph22 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[476px]" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/blue/strong</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.9px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[251px]" data-name="Container">
      <Paragraph23 />
    </div>
  );
}

function ColorCard2() {
  return (
    <div className="bg-[#1e40af] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container13 />
      <Container14 />
      <Container17 />
    </div>
  );
}

function CardFunctionalBlue() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="CardFunctionalBlue">
      <ColorCard />
      <ColorCard1 />
      <ColorCard2 />
    </div>
  );
}

function CardFunctionalGreen() {
  return (
    <div className="col-1 flex items-center justify-center justify-self-stretch relative row-1 self-start shrink-0">
      <div className="-scale-y-100 flex-none w-full">
        <div className="gap-x-[80px] gap-y-[80px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative w-full" data-name="CardFunctionalGreen">
          <CardFunctionalBlue />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="gap-x-[10px] gap-y-[10px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full">
      <CardFunctionalGreen />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[#16181d] text-[24px] tracking-[-0.24px] w-full">Blue</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#576175] text-[16px] w-full">Primitive azul en tres niveles de intensidad. Funciona como base cromática reusable; el rol Info se asigna posteriormente en Semantic Colors.</p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch max-w-[500px] pb-[24px] relative row-1 self-stretch shrink-0" data-name="CardHeader6">
      <Paragraph24 />
      <Paragraph25 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative w-full">
          <CardHeader />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Frame4 />
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Soft</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.22px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph26 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph27 />
      <Paragraph28 />
      <Paragraph29 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#ECFDF3</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">236, 253, 243</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">145°, 81%, 96%</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[85px]" data-name="Container">
      <Paragraph30 />
      <Paragraph31 />
      <Paragraph32 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[476px]" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/green/soft</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.2px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[242px]" data-name="Container">
      <Paragraph33 />
    </div>
  );
}

function ColorCard3() {
  return (
    <div className="bg-[#ecfdf3] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container18 />
      <Container19 />
      <Container22 />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Default</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.93px] overflow-clip top-[12.01px] w-[70px]" data-name="Container">
      <Paragraph34 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph35 />
      <Paragraph36 />
      <Paragraph37 />
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#16A34A</p>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">22, 163, 74</p>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">142°, 76%, 36%</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[87px]" data-name="Container">
      <Paragraph38 />
      <Paragraph39 />
      <Paragraph40 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[476px]" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/green/default</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.8px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[268px]" data-name="Container">
      <Paragraph41 />
    </div>
  );
}

function ColorCard4() {
  return (
    <div className="bg-[#16a34a] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container23 />
      <Container24 />
      <Container27 />
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Strong</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.82px] overflow-clip top-[12.01px] w-[65px]" data-name="Container">
      <Paragraph42 />
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph43 />
      <Paragraph44 />
      <Paragraph45 />
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#166534</p>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">22, 101, 52</p>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">143°, 64%, 24%</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[88px]" data-name="Container">
      <Paragraph46 />
      <Paragraph47 />
      <Paragraph48 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[476px]" data-name="Container">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/green/strong</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.1px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[259px]" data-name="Container">
      <Paragraph49 />
    </div>
  );
}

function ColorCard5() {
  return (
    <div className="bg-[#166534] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container28 />
      <Container29 />
      <Container32 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="col-1 flex items-center justify-center justify-self-stretch relative row-1 self-start shrink-0">
      <div className="-scale-y-100 flex-none w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
          <ColorCard3 />
          <ColorCard4 />
          <ColorCard5 />
        </div>
      </div>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Soft</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.22px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph50 />
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph51 />
      <Paragraph52 />
      <Paragraph53 />
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#FFFBEB</p>
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">255, 251, 235</p>
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">48°, 100%, 96%</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[87px]" data-name="Container">
      <Paragraph54 />
      <Paragraph55 />
      <Paragraph56 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[476px]" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/amber/soft</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.2px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[242px]" data-name="Container">
      <Paragraph57 />
    </div>
  );
}

function ColorCard6() {
  return (
    <div className="bg-[#fffbeb] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container33 />
      <Container34 />
      <Container37 />
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Default</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.93px] overflow-clip top-[12.01px] w-[70px]" data-name="Container">
      <Paragraph58 />
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph59 />
      <Paragraph60 />
      <Paragraph61 />
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#D97706</p>
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">217, 119, 6</p>
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">32°, 95%, 44%</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[82px]" data-name="Container">
      <Paragraph62 />
      <Paragraph63 />
      <Paragraph64 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[476px]" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/amber/default</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.8px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[268px]" data-name="Container">
      <Paragraph65 />
    </div>
  );
}

function ColorCard7() {
  return (
    <div className="bg-[#d97706] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container38 />
      <Container39 />
      <Container42 />
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Strong</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.82px] overflow-clip top-[12.01px] w-[65px]" data-name="Container">
      <Paragraph66 />
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph67 />
      <Paragraph68 />
      <Paragraph69 />
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#92400E</p>
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">146, 64, 14</p>
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">23°, 83%, 31%</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="Container">
      <Paragraph70 />
      <Paragraph71 />
      <Paragraph72 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[476px]" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/amber/strong</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.1px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[259px]" data-name="Container">
      <Paragraph73 />
    </div>
  );
}

function ColorCard8() {
  return (
    <div className="bg-[#92400e] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container43 />
      <Container44 />
      <Container47 />
    </div>
  );
}

function CardFunctionalAmber() {
  return (
    <div className="col-2 flex items-center justify-center justify-self-stretch relative row-1 self-start shrink-0">
      <div className="-scale-y-100 flex-none w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full" data-name="CardFunctionalAmber">
          <ColorCard6 />
          <ColorCard7 />
          <ColorCard8 />
        </div>
      </div>
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Soft</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.22px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph74 />
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph75 />
      <Paragraph76 />
      <Paragraph77 />
    </div>
  );
}

function Paragraph78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#FEF2F2</p>
    </div>
  );
}

function Paragraph79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">254, 242, 242</p>
    </div>
  );
}

function Paragraph80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">0°, 86%, 97%</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[79px]" data-name="Container">
      <Paragraph78 />
      <Paragraph79 />
      <Paragraph80 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[476px]" data-name="Container">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Paragraph81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/red/soft</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.8px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph81 />
    </div>
  );
}

function ColorCard9() {
  return (
    <div className="bg-[#fef2f2] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container48 />
      <Container49 />
      <Container52 />
    </div>
  );
}

function Paragraph82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Default</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.93px] overflow-clip top-[12.01px] w-[70px]" data-name="Container">
      <Paragraph82 />
    </div>
  );
}

function Paragraph83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph83 />
      <Paragraph84 />
      <Paragraph85 />
    </div>
  );
}

function Paragraph86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#DC2626</p>
    </div>
  );
}

function Paragraph87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">220, 38, 38</p>
    </div>
  );
}

function Paragraph88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">0°, 72%, 51%</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[71px]" data-name="Container">
      <Paragraph86 />
      <Paragraph87 />
      <Paragraph88 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[476px]" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Paragraph89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/red/default</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.9px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[251px]" data-name="Container">
      <Paragraph89 />
    </div>
  );
}

function ColorCard10() {
  return (
    <div className="bg-[#dc2626] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container53 />
      <Container54 />
      <Container57 />
    </div>
  );
}

function Paragraph90() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Strong</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.82px] overflow-clip top-[12.01px] w-[65px]" data-name="Container">
      <Paragraph90 />
    </div>
  );
}

function Paragraph91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph91 />
      <Paragraph92 />
      <Paragraph93 />
    </div>
  );
}

function Paragraph94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#991B1B</p>
    </div>
  );
}

function Paragraph95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">153, 27, 27</p>
    </div>
  );
}

function Paragraph96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">0°, 70%, 35%</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[73px]" data-name="Container">
      <Paragraph94 />
      <Paragraph95 />
      <Paragraph96 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[476px]" data-name="Container">
      <Container60 />
      <Container61 />
    </div>
  );
}

function Paragraph97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/red/strong</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.2px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[242px]" data-name="Container">
      <Paragraph97 />
    </div>
  );
}

function ColorCard11() {
  return (
    <div className="bg-[#991b1b] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container58 />
      <Container59 />
      <Container62 />
    </div>
  );
}

function CardFunctionalRed() {
  return (
    <div className="col-3 flex items-center justify-center justify-self-stretch relative row-1 self-start shrink-0">
      <div className="-scale-y-100 flex-none w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full" data-name="CardFunctionalRed">
          <ColorCard9 />
          <ColorCard10 />
          <ColorCard11 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full">
      <Frame3 />
      <CardFunctionalAmber />
      <CardFunctionalRed />
    </div>
  );
}

function Paragraph98() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[#16181d] text-[24px] tracking-[-0.24px] w-full">Green</p>
    </div>
  );
}

function Paragraph99() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#576175] text-[16px] w-full">Primitive verde en tres niveles de intensidad. Funciona como base cromática reusable; el rol Success se asigna posteriormente en Semantic Colors.</p>
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch pb-[24px] relative row-1 self-start shrink-0" data-name="CardHeader6">
      <Paragraph98 />
      <Paragraph99 />
    </div>
  );
}

function Paragraph100() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[#16181d] text-[24px] tracking-[-0.24px] w-full">Amber</p>
    </div>
  );
}

function Paragraph101() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#576175] text-[16px] w-full">Primitive ámbar en tres niveles de intensidad. Funciona como base cromática reusable; los roles Warning o Caution se asignan posteriormente en Semantic Colors.</p>
    </div>
  );
}

function CardHeader2() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch pb-[24px] relative row-1 self-start shrink-0" data-name="CardHeader6">
      <Paragraph100 />
      <Paragraph101 />
    </div>
  );
}

function Paragraph102() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[#16181d] text-[24px] tracking-[-0.24px] w-full">Red</p>
    </div>
  );
}

function Paragraph103() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#576175] text-[16px] w-full">Primitive roja en tres niveles de intensidad. Funciona como base cromática reusable; los roles Error o Danger se asignan posteriormente en Semantic Colors.</p>
    </div>
  );
}

function CardHeader3() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch pb-[24px] relative row-1 self-start shrink-0" data-name="CardHeader6">
      <Paragraph102 />
      <Paragraph103 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative w-full">
          <CardHeader1 />
          <CardHeader2 />
          <CardHeader3 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame9 />
    </div>
  );
}

function ColorScaleGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start justify-end relative shrink-0 w-full" data-name="ColorScaleGrid">
      <Frame8 />
      <Frame7 />
    </div>
  );
}

function Paragraph104() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#576175] text-[16px] w-full">Primitives cromáticos para estados funcionales del sistema. No existe un HEX universal para Success, Warning, Error o Info: estos valores son defaults neutrales del template y pueden reemplazarse por proyecto sin alterar los roles semánticos.</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="content-stretch flex flex-col gap-[12px] h-[128px] items-start relative w-full" data-name="Container">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[44px] not-italic relative shrink-0 text-[#16181d] text-[40px] whitespace-nowrap">Escalas de colores funcionales</p>
          <Paragraph104 />
        </div>
      </div>
    </div>
  );
}

function Section05FunctionalColorScales() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full" data-name="Section05FunctionalColorScales">
      <ColorScaleGrid />
      <Container63 />
    </div>
  );
}

function Container64() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="bg-[#eef2f8] h-px relative w-full" data-name="Container" />
      </div>
    </div>
  );
}

function Paragraph105() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">Gradiente 01</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">SUPERIOR</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">#0067CC</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">INFERIOR</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">#003366</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">ÁNGULO</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">180°</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container67 />
      <Container68 />
      <Container69 />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">USO</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">style/gradient/01</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-gradient-to-b col-1 content-stretch flex flex-col from-[#0067cc] h-[200px] items-start justify-between justify-self-stretch p-[20px] relative rounded-[16px] row-1 self-start shrink-0 to-[#036]" data-name="Container">
      <Paragraph105 />
      <Container66 />
      <Container70 />
    </div>
  );
}

function Paragraph106() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">Gradiente 02</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">SUPERIOR</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">#0067CC</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">INFERIOR</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">#004C97</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">ÁNGULO</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">180°</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container73 />
      <Container74 />
      <Container75 />
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">USO</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">style/gradient/02</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-gradient-to-b col-2 content-stretch flex flex-col from-[#0067cc] h-[200px] items-start justify-between justify-self-stretch p-[20px] relative rounded-[16px] row-1 self-start shrink-0 to-[#004c97]" data-name="Container">
      <Paragraph106 />
      <Container72 />
      <Container76 />
    </div>
  );
}

function Paragraph107() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">Gradiente 03</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">SUPERIOR</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">#FF9233</p>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text16 />
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">INFERIOR</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">#E65719</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text18 />
      <Text19 />
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">ÁNGULO</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">180°</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text20 />
      <Text21 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container79 />
      <Container80 />
      <Container81 />
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">USO</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">style/gradient/03</p>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Container">
      <Text22 />
      <Text23 />
    </div>
  );
}

function Container77() {
  return (
    <div className="bg-gradient-to-b col-3 content-stretch flex flex-col from-[#ff9233] h-[200px] items-start justify-between justify-self-stretch p-[20px] relative rounded-[16px] row-1 self-start shrink-0 to-[#e65719]" data-name="Container">
      <Paragraph107 />
      <Container78 />
      <Container82 />
    </div>
  );
}

function Paragraph108() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">Gradiente 04</p>
    </div>
  );
}

function Text24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">SUPERIOR</p>
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">#FFA14D</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text24 />
      <Text25 />
    </div>
  );
}

function Text26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">INFERIOR</p>
    </div>
  );
}

function Text27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">#FF7900</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text26 />
      <Text27 />
    </div>
  );
}

function Text28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">ÁNGULO</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">180°</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text28 />
      <Text29 />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container85 />
      <Container86 />
      <Container87 />
    </div>
  );
}

function Text30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">USO</p>
    </div>
  );
}

function Text31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">style/gradient/04</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Container">
      <Text30 />
      <Text31 />
    </div>
  );
}

function Container83() {
  return (
    <div className="bg-gradient-to-b col-1 content-stretch flex flex-col from-[#ffa14d] h-[200px] items-start justify-between justify-self-stretch p-[20px] relative rounded-[16px] row-2 self-start shrink-0 to-[#ff7900]" data-name="Container">
      <Paragraph108 />
      <Container84 />
      <Container88 />
    </div>
  );
}

function Paragraph109() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">Gradiente 05</p>
    </div>
  );
}

function Text32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">SUPERIOR</p>
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">#85CC33</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text32 />
      <Text33 />
    </div>
  );
}

function Text34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">INFERIOR</p>
    </div>
  );
}

function Text35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">#6AA329</p>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text34 />
      <Text35 />
    </div>
  );
}

function Text36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">ÁNGULO</p>
    </div>
  );
}

function Text37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">180°</p>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text36 />
      <Text37 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container91 />
      <Container92 />
      <Container93 />
    </div>
  );
}

function Text38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">USO</p>
    </div>
  );
}

function Text39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">style/gradient/05</p>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Container">
      <Text38 />
      <Text39 />
    </div>
  );
}

function Container89() {
  return (
    <div className="bg-gradient-to-b col-2 content-stretch flex flex-col from-[#85cc33] h-[200px] items-start justify-between justify-self-stretch p-[20px] relative rounded-[16px] row-2 self-start shrink-0 to-[#6aa329]" data-name="Container">
      <Paragraph109 />
      <Container90 />
      <Container94 />
    </div>
  );
}

function Paragraph110() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">Gradiente 06</p>
    </div>
  );
}

function Text40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">SUPERIOR</p>
    </div>
  );
}

function Text41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">#00B9FF</p>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text40 />
      <Text41 />
    </div>
  );
}

function Text42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">INFERIOR</p>
    </div>
  );
}

function Text43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">#0094CC</p>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text42 />
      <Text43 />
    </div>
  );
}

function Text44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">ÁNGULO</p>
    </div>
  );
}

function Text45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">180°</p>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text44 />
      <Text45 />
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container97 />
      <Container98 />
      <Container99 />
    </div>
  );
}

function Text46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">USO</p>
    </div>
  );
}

function Text47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">style/gradient/06</p>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Container">
      <Text46 />
      <Text47 />
    </div>
  );
}

function Container95() {
  return (
    <div className="bg-gradient-to-b col-3 content-stretch flex flex-col from-[#00b9ff] h-[200px] items-start justify-between justify-self-stretch p-[20px] relative rounded-[16px] row-2 self-start shrink-0 to-[#0094cc]" data-name="Container">
      <Paragraph110 />
      <Container96 />
      <Container100 />
    </div>
  );
}

function Paragraph111() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">Gradiente 07</p>
    </div>
  );
}

function Text48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">SUPERIOR</p>
    </div>
  );
}

function Text49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">#28C9D7</p>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text48 />
      <Text49 />
    </div>
  );
}

function Text50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">INFERIOR</p>
    </div>
  );
}

function Text51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">#20A1AC</p>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text50 />
      <Text51 />
    </div>
  );
}

function Text52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">ÁNGULO</p>
    </div>
  );
}

function Text53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">180°</p>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text52 />
      <Text53 />
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container103 />
      <Container104 />
      <Container105 />
    </div>
  );
}

function Text54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">USO</p>
    </div>
  );
}

function Text55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">style/gradient/07</p>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Container">
      <Text54 />
      <Text55 />
    </div>
  );
}

function Container101() {
  return (
    <div className="bg-gradient-to-b col-1 content-stretch flex flex-col from-[#28c9d7] h-[200px] items-start justify-between justify-self-stretch p-[20px] relative rounded-[16px] row-3 self-start shrink-0 to-[#20a1ac]" data-name="Container">
      <Paragraph111 />
      <Container102 />
      <Container106 />
    </div>
  );
}

function Paragraph112() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">Gradiente 08</p>
    </div>
  );
}

function Text56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">SUPERIOR</p>
    </div>
  );
}

function Text57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">#FAFCFF</p>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text56 />
      <Text57 />
    </div>
  );
}

function Text58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">INFERIOR</p>
    </div>
  );
}

function Text59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">#EBF5FF</p>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text58 />
      <Text59 />
    </div>
  );
}

function Text60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">ÁNGULO</p>
    </div>
  );
}

function Text61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">180°</p>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text60 />
      <Text61 />
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container109 />
      <Container110 />
      <Container111 />
    </div>
  );
}

function Text62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">USO</p>
    </div>
  );
}

function Text63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">style/gradient/08</p>
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Container">
      <Text62 />
      <Text63 />
    </div>
  );
}

function Container107() {
  return (
    <div className="bg-gradient-to-b col-2 content-stretch flex flex-col from-[#fafcff] h-[200px] items-start justify-between justify-self-stretch p-[20px] relative rounded-[16px] row-3 self-start shrink-0 to-[#ebf5ff]" data-name="Container">
      <Paragraph112 />
      <Container108 />
      <Container112 />
    </div>
  );
}

function GradientRow() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="gap-x-[32px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[___200px_200px_200px] h-[648px] relative w-full" data-name="GradientRow">
          <Container65 />
          <Container71 />
          <Container77 />
          <Container83 />
          <Container89 />
          <Container95 />
          <Container101 />
          <Container107 />
        </div>
      </div>
    </div>
  );
}

function Paragraph113() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[895px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#576175] text-[13px] w-[896px]">Cada gradiente se gestiona como Color Style reutilizable. Sus stops pueden vincularse a Global Colors cuando corresponda; no requiere crear un token semántico únicamente por existir.</p>
    </div>
  );
}

function GradientImplementationNote() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="bg-[#f1f2f4] border-[#e3e7ee] border-[0.917px] border-solid content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[16px] relative rounded-[12px] w-full" data-name="GradientImplementationNote">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">Implementación de gradientes</p>
          <Paragraph113 />
        </div>
      </div>
    </div>
  );
}

function Paragraph114() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#576175] text-[16px] w-full">Recursos cromáticos opcionales del sistema. El template conserva una estructura editable para documentar gradientes cuando una marca los requiera, sin asignarles un uso predeterminado.</p>
    </div>
  );
}

function Container113() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="content-stretch flex flex-col gap-[12px] h-[128px] items-start relative w-full" data-name="Container">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[44px] not-italic relative shrink-0 text-[#16181d] text-[40px] whitespace-nowrap">Gradientes</p>
          <Paragraph114 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <GradientImplementationNote />
      <Container113 />
    </div>
  );
}

function GradientContent() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full" data-name="GradientContent">
      <GradientRow />
      <Frame2 />
    </div>
  );
}

function Container114() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="bg-[#eef2f8] h-px relative w-full" data-name="Container" />
      </div>
    </div>
  );
}

function Paragraph115() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">50</p>
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.75px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph115 />
    </div>
  );
}

function Paragraph116() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph117() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph118() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph116 />
      <Paragraph117 />
      <Paragraph118 />
    </div>
  );
}

function Paragraph119() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#F1F2F4</p>
    </div>
  );
}

function Paragraph120() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">241, 242, 244</p>
    </div>
  );
}

function Paragraph121() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">220°, 12%, 95%</p>
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[86px]" data-name="Container">
      <Paragraph119 />
      <Paragraph120 />
      <Paragraph121 />
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1414px]" data-name="Container">
      <Container117 />
      <Container118 />
    </div>
  );
}

function Paragraph122() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/ink/50</p>
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.84px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[209px]" data-name="Container">
      <Paragraph122 />
    </div>
  );
}

function ColorCard12() {
  return (
    <div className="bg-[#f1f2f4] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container115 />
      <Container116 />
      <Container119 />
    </div>
  );
}

function Paragraph123() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">100</p>
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.94px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph123 />
    </div>
  );
}

function Paragraph124() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph125() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph126() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph124 />
      <Paragraph125 />
      <Paragraph126 />
    </div>
  );
}

function Paragraph127() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#E3E4EA</p>
    </div>
  );
}

function Paragraph128() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">227, 228, 234</p>
    </div>
  );
}

function Paragraph129() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">231°, 14%, 90%</p>
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[86px]" data-name="Container">
      <Paragraph127 />
      <Paragraph128 />
      <Paragraph129 />
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1414px]" data-name="Container">
      <Container122 />
      <Container123 />
    </div>
  );
}

function Paragraph130() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/ink/100</p>
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.04px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[217px]" data-name="Container">
      <Paragraph130 />
    </div>
  );
}

function ColorCard13() {
  return (
    <div className="bg-[#e3e4ea] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container120 />
      <Container121 />
      <Container124 />
    </div>
  );
}

function Paragraph131() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">200</p>
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.95px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph131 />
    </div>
  );
}

function Paragraph132() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph133() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph134() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph132 />
      <Paragraph133 />
      <Paragraph134 />
    </div>
  );
}

function Paragraph135() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#C4C9D4</p>
    </div>
  );
}

function Paragraph136() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">196, 201, 212</p>
    </div>
  );
}

function Paragraph137() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">221°, 16%, 80%</p>
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[85px]" data-name="Container">
      <Paragraph135 />
      <Paragraph136 />
      <Paragraph137 />
    </div>
  );
}

function Container126() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1414px]" data-name="Container">
      <Container127 />
      <Container128 />
    </div>
  );
}

function Paragraph138() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/ink/200</p>
    </div>
  );
}

function Container129() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.04px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[217px]" data-name="Container">
      <Paragraph138 />
    </div>
  );
}

function ColorCard14() {
  return (
    <div className="bg-[#c4c9d4] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container125 />
      <Container126 />
      <Container129 />
    </div>
  );
}

function Paragraph139() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">300</p>
    </div>
  );
}

function Container130() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.13px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph139 />
    </div>
  );
}

function Paragraph140() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph141() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph142() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph140 />
      <Paragraph141 />
      <Paragraph142 />
    </div>
  );
}

function Paragraph143() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#A8AFBE</p>
    </div>
  );
}

function Paragraph144() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">168, 175, 190</p>
    </div>
  );
}

function Paragraph145() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">221°, 14%, 70%</p>
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[84px]" data-name="Container">
      <Paragraph143 />
      <Paragraph144 />
      <Paragraph145 />
    </div>
  );
}

function Container131() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1414px]" data-name="Container">
      <Container132 />
      <Container133 />
    </div>
  );
}

function Paragraph146() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/ink/300</p>
    </div>
  );
}

function Container134() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.04px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[217px]" data-name="Container">
      <Paragraph146 />
    </div>
  );
}

function ColorCard15() {
  return (
    <div className="bg-[#a8afbe] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container130 />
      <Container131 />
      <Container134 />
    </div>
  );
}

function Paragraph147() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">400</p>
    </div>
  );
}

function Container135() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.96px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph147 />
    </div>
  );
}

function Paragraph148() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph149() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph150() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph148 />
      <Paragraph149 />
      <Paragraph150 />
    </div>
  );
}

function Paragraph151() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#8A94A8</p>
    </div>
  );
}

function Paragraph152() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">138, 148, 168</p>
    </div>
  );
}

function Paragraph153() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">220°, 14%, 60%</p>
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[87px]" data-name="Container">
      <Paragraph151 />
      <Paragraph152 />
      <Paragraph153 />
    </div>
  );
}

function Container136() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1414px]" data-name="Container">
      <Container137 />
      <Container138 />
    </div>
  );
}

function Paragraph154() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/ink/400</p>
    </div>
  );
}

function Container139() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.04px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[217px]" data-name="Container">
      <Paragraph154 />
    </div>
  );
}

function ColorCard16() {
  return (
    <div className="bg-[#8a94a8] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container135 />
      <Container136 />
      <Container139 />
    </div>
  );
}

function Paragraph155() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">500</p>
    </div>
  );
}

function Container140() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.91px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph155 />
    </div>
  );
}

function Paragraph156() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph157() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph158() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph156 />
      <Paragraph157 />
      <Paragraph158 />
    </div>
  );
}

function Paragraph159() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#6D7993</p>
    </div>
  );
}

function Paragraph160() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">109, 121, 147</p>
    </div>
  );
}

function Paragraph161() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">221°, 15%, 50%</p>
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[85px]" data-name="Container">
      <Paragraph159 />
      <Paragraph160 />
      <Paragraph161 />
    </div>
  );
}

function Container141() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1414px]" data-name="Container">
      <Container142 />
      <Container143 />
    </div>
  );
}

function Paragraph162() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/ink/500</p>
    </div>
  );
}

function Container144() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.04px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[217px]" data-name="Container">
      <Paragraph162 />
    </div>
  );
}

function ColorCard17() {
  return (
    <div className="bg-[#6d7993] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container140 />
      <Container141 />
      <Container144 />
    </div>
  );
}

function Paragraph163() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">600</p>
    </div>
  );
}

function Container145() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.15px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph163 />
    </div>
  );
}

function Paragraph164() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph165() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph166() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container147() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph164 />
      <Paragraph165 />
      <Paragraph166 />
    </div>
  );
}

function Paragraph167() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#576175</p>
    </div>
  );
}

function Paragraph168() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">87, 97, 117</p>
    </div>
  );
}

function Paragraph169() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">220°, 15%, 40%</p>
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[87px]" data-name="Container">
      <Paragraph167 />
      <Paragraph168 />
      <Paragraph169 />
    </div>
  );
}

function Container146() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1414px]" data-name="Container">
      <Container147 />
      <Container148 />
    </div>
  );
}

function Paragraph170() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/ink/600</p>
    </div>
  );
}

function Container149() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.04px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[217px]" data-name="Container">
      <Paragraph170 />
    </div>
  );
}

function ColorCard18() {
  return (
    <div className="bg-[#576175] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container145 />
      <Container146 />
      <Container149 />
    </div>
  );
}

function Paragraph171() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">700</p>
    </div>
  );
}

function Container150() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.82px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph171 />
    </div>
  );
}

function Paragraph172() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph173() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph174() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container152() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph172 />
      <Paragraph173 />
      <Paragraph174 />
    </div>
  );
}

function Paragraph175() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#42495B</p>
    </div>
  );
}

function Paragraph176() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">66, 73, 91</p>
    </div>
  );
}

function Paragraph177() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">223°, 16%, 31%</p>
    </div>
  );
}

function Container153() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[85px]" data-name="Container">
      <Paragraph175 />
      <Paragraph176 />
      <Paragraph177 />
    </div>
  );
}

function Container151() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1414px]" data-name="Container">
      <Container152 />
      <Container153 />
    </div>
  );
}

function Paragraph178() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/ink/700</p>
    </div>
  );
}

function Container154() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.04px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[217px]" data-name="Container">
      <Paragraph178 />
    </div>
  );
}

function ColorCard19() {
  return (
    <div className="bg-[#42495b] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container150 />
      <Container151 />
      <Container154 />
    </div>
  );
}

function Paragraph179() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">800</p>
    </div>
  );
}

function Container155() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.15px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph179 />
    </div>
  );
}

function Paragraph180() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph181() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph182() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container157() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph180 />
      <Paragraph181 />
      <Paragraph182 />
    </div>
  );
}

function Paragraph183() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#292E38</p>
    </div>
  );
}

function Paragraph184() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">41, 46, 56</p>
    </div>
  );
}

function Paragraph185() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">221°, 16%, 20%</p>
    </div>
  );
}

function Container158() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[85px]" data-name="Container">
      <Paragraph183 />
      <Paragraph184 />
      <Paragraph185 />
    </div>
  );
}

function Container156() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1414px]" data-name="Container">
      <Container157 />
      <Container158 />
    </div>
  );
}

function Paragraph186() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/ink/800</p>
    </div>
  );
}

function Container159() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.04px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[217px]" data-name="Container">
      <Paragraph186 />
    </div>
  );
}

function ColorCard20() {
  return (
    <div className="bg-[#292e38] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container155 />
      <Container156 />
      <Container159 />
    </div>
  );
}

function Paragraph187() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">900</p>
    </div>
  );
}

function Container160() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.15px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph187 />
    </div>
  );
}

function Paragraph188() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph189() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph190() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container162() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph188 />
      <Paragraph189 />
      <Paragraph190 />
    </div>
  );
}

function Paragraph191() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#16181D</p>
    </div>
  );
}

function Paragraph192() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">22, 24, 29</p>
    </div>
  );
}

function Paragraph193() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">223°, 14%, 10%</p>
    </div>
  );
}

function Container163() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[85px]" data-name="Container">
      <Paragraph191 />
      <Paragraph192 />
      <Paragraph193 />
    </div>
  );
}

function Container161() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1414px]" data-name="Container">
      <Container162 />
      <Container163 />
    </div>
  );
}

function Paragraph194() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/ink/900</p>
    </div>
  );
}

function Container164() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.04px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[217px]" data-name="Container">
      <Paragraph194 />
    </div>
  );
}

function ColorCard21() {
  return (
    <div className="bg-[#16181d] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container160 />
      <Container161 />
      <Container164 />
    </div>
  );
}

function Card01Ink() {
  return (
    <div className="col-1 flex items-center justify-center justify-self-stretch relative row-1 self-start shrink-0">
      <div className="-scale-y-100 flex-none w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative w-full" data-name="Card01Ink">
          <ColorCard12 />
          <ColorCard13 />
          <ColorCard14 />
          <ColorCard15 />
          <ColorCard16 />
          <ColorCard17 />
          <ColorCard18 />
          <ColorCard19 />
          <ColorCard20 />
          <ColorCard21 />
        </div>
      </div>
    </div>
  );
}

function Paragraph195() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">50</p>
    </div>
  );
}

function Container165() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[10.96px] overflow-clip top-[11.01px]" data-name="Container">
      <Paragraph195 />
    </div>
  );
}

function Paragraph196() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph197() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph198() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container167() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph196 />
      <Paragraph197 />
      <Paragraph198 />
    </div>
  );
}

function Paragraph199() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#FFFFFF</p>
    </div>
  );
}

function Paragraph200() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">255, 255, 255</p>
    </div>
  );
}

function Paragraph201() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">0°, 0%, 100%</p>
    </div>
  );
}

function Container168() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[78px]" data-name="Container">
      <Paragraph199 />
      <Paragraph200 />
      <Paragraph201 />
    </div>
  );
}

function Container166() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[11px] overflow-clip top-[47px] w-[1427px]" data-name="Container">
      <Container167 />
      <Container168 />
    </div>
  );
}

function Paragraph202() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/gray/50</p>
    </div>
  );
}

function Container169() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.26px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[106.99px] w-[217px]" data-name="Container">
      <Paragraph202 />
    </div>
  );
}

function ColorCard22() {
  return (
    <div className="bg-white border border-[#f2f2f2] border-solid h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container165 />
      <Container166 />
      <Container169 />
    </div>
  );
}

function Container170() {
  return <div className="absolute bg-[#f2f2f2] h-[154px] left-0 rounded-[8px] top-0 w-[1451px]" data-name="Container" />;
}

function Paragraph203() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">100</p>
    </div>
  );
}

function Container171() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.15px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph203 />
    </div>
  );
}

function Paragraph204() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph205() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph206() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container173() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph204 />
      <Paragraph205 />
      <Paragraph206 />
    </div>
  );
}

function Paragraph207() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#F2F2F2</p>
    </div>
  );
}

function Paragraph208() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">242, 242, 242</p>
    </div>
  );
}

function Paragraph209() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">0°, 0%, 95%</p>
    </div>
  );
}

function Container174() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="Container">
      <Paragraph207 />
      <Paragraph208 />
      <Paragraph209 />
    </div>
  );
}

function Container172() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1427px]" data-name="Container">
      <Container173 />
      <Container174 />
    </div>
  );
}

function Paragraph210() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/gray/100</p>
    </div>
  );
}

function Container175() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.96px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph210 />
    </div>
  );
}

function ColorCard23() {
  return (
    <div className="bg-[#f2f2f2] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container170 />
      <Container171 />
      <Container172 />
      <Container175 />
    </div>
  );
}

function Paragraph211() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">200</p>
    </div>
  );
}

function Container176() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.17px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph211 />
    </div>
  );
}

function Paragraph212() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph213() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph214() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container178() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph212 />
      <Paragraph213 />
      <Paragraph214 />
    </div>
  );
}

function Paragraph215() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#D9D9D9</p>
    </div>
  );
}

function Paragraph216() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">217, 217, 217</p>
    </div>
  );
}

function Paragraph217() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">0°, 0%, 85%</p>
    </div>
  );
}

function Container179() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[70px]" data-name="Container">
      <Paragraph215 />
      <Paragraph216 />
      <Paragraph217 />
    </div>
  );
}

function Container177() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1427px]" data-name="Container">
      <Container178 />
      <Container179 />
    </div>
  );
}

function Paragraph218() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/gray/200</p>
    </div>
  );
}

function Container180() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.96px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph218 />
    </div>
  );
}

function ColorCard24() {
  return (
    <div className="bg-[#d9d9d9] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container176 />
      <Container177 />
      <Container180 />
    </div>
  );
}

function Paragraph219() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">300</p>
    </div>
  );
}

function Container181() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.34px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph219 />
    </div>
  );
}

function Paragraph220() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph221() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph222() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container183() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph220 />
      <Paragraph221 />
      <Paragraph222 />
    </div>
  );
}

function Paragraph223() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#BFBFBF</p>
    </div>
  );
}

function Paragraph224() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">191, 191, 191</p>
    </div>
  );
}

function Paragraph225() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">0°, 0%, 75%</p>
    </div>
  );
}

function Container184() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[68px]" data-name="Container">
      <Paragraph223 />
      <Paragraph224 />
      <Paragraph225 />
    </div>
  );
}

function Container182() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1427px]" data-name="Container">
      <Container183 />
      <Container184 />
    </div>
  );
}

function Paragraph226() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/gray/300</p>
    </div>
  );
}

function Container185() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.96px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph226 />
    </div>
  );
}

function ColorCard25() {
  return (
    <div className="bg-[#bfbfbf] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container181 />
      <Container182 />
      <Container185 />
    </div>
  );
}

function Paragraph227() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">400</p>
    </div>
  );
}

function Container186() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.18px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph227 />
    </div>
  );
}

function Paragraph228() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph229() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph230() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container188() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph228 />
      <Paragraph229 />
      <Paragraph230 />
    </div>
  );
}

function Paragraph231() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#A6A6A6</p>
    </div>
  );
}

function Paragraph232() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">166, 166, 166</p>
    </div>
  );
}

function Paragraph233() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">0°, 0%, 65%</p>
    </div>
  );
}

function Container189() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[74px]" data-name="Container">
      <Paragraph231 />
      <Paragraph232 />
      <Paragraph233 />
    </div>
  );
}

function Container187() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1427px]" data-name="Container">
      <Container188 />
      <Container189 />
    </div>
  );
}

function Paragraph234() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/gray/400</p>
    </div>
  );
}

function Container190() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.96px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph234 />
    </div>
  );
}

function ColorCard26() {
  return (
    <div className="bg-[#a6a6a6] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container186 />
      <Container187 />
      <Container190 />
    </div>
  );
}

function Paragraph235() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">500</p>
    </div>
  );
}

function Container191() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.12px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph235 />
    </div>
  );
}

function Paragraph236() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph237() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph238() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container193() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph236 />
      <Paragraph237 />
      <Paragraph238 />
    </div>
  );
}

function Paragraph239() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#8C8C8C</p>
    </div>
  );
}

function Paragraph240() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">140, 140, 140</p>
    </div>
  );
}

function Paragraph241() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">0°, 0%, 55%</p>
    </div>
  );
}

function Container194() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[75px]" data-name="Container">
      <Paragraph239 />
      <Paragraph240 />
      <Paragraph241 />
    </div>
  );
}

function Container192() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1427px]" data-name="Container">
      <Container193 />
      <Container194 />
    </div>
  );
}

function Paragraph242() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/gray/500</p>
    </div>
  );
}

function Container195() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.96px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph242 />
    </div>
  );
}

function ColorCard27() {
  return (
    <div className="bg-[#8c8c8c] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container191 />
      <Container192 />
      <Container195 />
    </div>
  );
}

function Paragraph243() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">600</p>
    </div>
  );
}

function Container196() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.36px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph243 />
    </div>
  );
}

function Paragraph244() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph245() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph246() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container198() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph244 />
      <Paragraph245 />
      <Paragraph246 />
    </div>
  );
}

function Paragraph247() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#737373</p>
    </div>
  );
}

function Paragraph248() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">115, 115, 115</p>
    </div>
  );
}

function Paragraph249() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">0°, 0%, 45%</p>
    </div>
  );
}

function Container199() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[68px]" data-name="Container">
      <Paragraph247 />
      <Paragraph248 />
      <Paragraph249 />
    </div>
  );
}

function Container197() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1427px]" data-name="Container">
      <Container198 />
      <Container199 />
    </div>
  );
}

function Paragraph250() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/gray/600</p>
    </div>
  );
}

function Container200() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.96px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph250 />
    </div>
  );
}

function ColorCard28() {
  return (
    <div className="bg-[#737373] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container196 />
      <Container197 />
      <Container200 />
    </div>
  );
}

function Paragraph251() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">700</p>
    </div>
  );
}

function Container201() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.03px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph251 />
    </div>
  );
}

function Paragraph252() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph253() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph254() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container203() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph252 />
      <Paragraph253 />
      <Paragraph254 />
    </div>
  );
}

function Paragraph255() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#595959</p>
    </div>
  );
}

function Paragraph256() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">89, 89, 89</p>
    </div>
  );
}

function Paragraph257() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">0°, 0%, 35%</p>
    </div>
  );
}

function Container204() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[67px]" data-name="Container">
      <Paragraph255 />
      <Paragraph256 />
      <Paragraph257 />
    </div>
  );
}

function Container202() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1427px]" data-name="Container">
      <Container203 />
      <Container204 />
    </div>
  );
}

function Paragraph258() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/gray/700</p>
    </div>
  );
}

function Container205() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.96px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph258 />
    </div>
  );
}

function ColorCard29() {
  return (
    <div className="bg-[#595959] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container201 />
      <Container202 />
      <Container205 />
    </div>
  );
}

function Paragraph259() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">800</p>
    </div>
  );
}

function Container206() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.36px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph259 />
    </div>
  );
}

function Paragraph260() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph261() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph262() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container208() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph260 />
      <Paragraph261 />
      <Paragraph262 />
    </div>
  );
}

function Paragraph263() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#404040</p>
    </div>
  );
}

function Paragraph264() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">64, 64, 64</p>
    </div>
  );
}

function Paragraph265() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">0°, 0%, 25%</p>
    </div>
  );
}

function Container209() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[66px]" data-name="Container">
      <Paragraph263 />
      <Paragraph264 />
      <Paragraph265 />
    </div>
  );
}

function Container207() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1427px]" data-name="Container">
      <Container208 />
      <Container209 />
    </div>
  );
}

function Paragraph266() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/gray/800</p>
    </div>
  );
}

function Container210() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.96px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph266 />
    </div>
  );
}

function ColorCard30() {
  return (
    <div className="bg-[#404040] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container206 />
      <Container207 />
      <Container210 />
    </div>
  );
}

function Paragraph267() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">900</p>
    </div>
  );
}

function Container211() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.36px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph267 />
    </div>
  );
}

function Paragraph268() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph269() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph270() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container213() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph268 />
      <Paragraph269 />
      <Paragraph270 />
    </div>
  );
}

function Paragraph271() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#262626</p>
    </div>
  );
}

function Paragraph272() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">38, 38, 38</p>
    </div>
  );
}

function Paragraph273() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">0°, 0%, 15%</p>
    </div>
  );
}

function Container214() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[65px]" data-name="Container">
      <Paragraph271 />
      <Paragraph272 />
      <Paragraph273 />
    </div>
  );
}

function Container212() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1427px]" data-name="Container">
      <Container213 />
      <Container214 />
    </div>
  );
}

function Paragraph274() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/gray/900</p>
    </div>
  );
}

function Container215() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.96px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph274 />
    </div>
  );
}

function ColorCard31() {
  return (
    <div className="bg-[#262626] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container211 />
      <Container212 />
      <Container215 />
    </div>
  );
}

function Card02Gray() {
  return (
    <div className="col-2 flex items-center justify-center justify-self-stretch relative row-1 self-start shrink-0">
      <div className="-scale-y-100 flex-none w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative w-full" data-name="Card02Gray">
          <ColorCard22 />
          <ColorCard23 />
          <ColorCard24 />
          <ColorCard25 />
          <ColorCard26 />
          <ColorCard27 />
          <ColorCard28 />
          <ColorCard29 />
          <ColorCard30 />
          <ColorCard31 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full">
      <Card01Ink />
      <Card02Gray />
    </div>
  );
}

function Paragraph275() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[#16181d] text-[24px] tracking-[-0.24px] w-full">Ink</p>
    </div>
  );
}

function Paragraph276() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#576175] text-[16px] w-full">Base neutral para texto, bordes, overlays y jerarquías editoriales. Define los niveles de contraste y opacidad del sistema para garantizar legibilidad y consistencia visual en todos los formatos.</p>
    </div>
  );
}

function CardHeader4() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch pb-[24px] relative row-1 self-start shrink-0" data-name="CardHeader6">
      <Paragraph275 />
      <Paragraph276 />
    </div>
  );
}

function Paragraph277() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[#16181d] text-[24px] tracking-[-0.24px] w-full">Gray</p>
    </div>
  );
}

function CardHeader5() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch pb-[24px] relative row-1 self-start shrink-0" data-name="CardHeader7">
      <Paragraph277 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#576175] text-[16px] w-full">Escala acromática de grises, desde blanco hasta tonos oscuros. Funciona como primitive neutral para construir fondos, divisores, texto inverso y otras superficies sin introducir matiz de marca.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative w-full">
          <CardHeader4 />
          <CardHeader5 />
        </div>
      </div>
    </div>
  );
}

function ColorScaleGrid1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="ColorScaleGrid3">
      <Frame1 />
      <Frame />
    </div>
  );
}

function Paragraph278() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#576175] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Escala neutral base para construir contraste, jerarquía y superficies de soporte.</p>
        <p className="leading-[24px]">Sus valores funcionan como primitives y pueden alimentar texto, bordes, fondos y otros roles semánticos en etapas posteriores.</p>
      </div>
    </div>
  );
}

function Container216() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="content-stretch flex flex-col gap-[12px] h-[128px] items-start relative w-full" data-name="Container">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[44px] not-italic relative shrink-0 text-[#16181d] text-[40px] whitespace-nowrap">Escala de colores neutrales</p>
          <Paragraph278 />
        </div>
      </div>
    </div>
  );
}

function Section04NeutralColorScale() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full" data-name="Section04NeutralColorScale">
      <ColorScaleGrid1 />
      <Container216 />
    </div>
  );
}

function Container218() {
  return <div className="bg-[#eef2f8] h-px relative shrink-0 w-full" data-name="Container" />;
}

function Container217() {
  return (
    <div className="absolute flex h-px items-center justify-center left-0 top-0 w-[935px]">
      <div className="-scale-y-100 flex-none">
        <div className="content-stretch flex flex-col h-px items-start relative w-[935px]" data-name="Container">
          <Container218 />
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="content-stretch flex flex-col h-px items-start relative shrink-0 w-[935px]" data-name="Divider">
      <Container217 />
    </div>
  );
}

function Paragraph279() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">50</p>
    </div>
  );
}

function Container219() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.59px] overflow-clip top-[12.01px] w-[26px]" data-name="Container">
      <Paragraph279 />
    </div>
  );
}

function Paragraph280() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph281() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph282() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container221() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph280 />
      <Paragraph281 />
      <Paragraph282 />
    </div>
  );
}

function Paragraph283() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#FFF3E6</p>
    </div>
  );
}

function Paragraph284() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">255, 243, 230</p>
    </div>
  );
}

function Paragraph285() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">31°, 100%, 95%</p>
    </div>
  );
}

function Container222() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[85px]" data-name="Container">
      <Paragraph283 />
      <Paragraph284 />
      <Paragraph285 />
    </div>
  );
}

function Container220() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[853px]" data-name="Container">
      <Container221 />
      <Container222 />
    </div>
  );
}

function Paragraph286() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/orange/50</p>
    </div>
  );
}

function Container223() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.78px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[234px]" data-name="Container">
      <Paragraph286 />
    </div>
  );
}

function ColorCard32() {
  return (
    <div className="bg-[#fff3e6] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container219 />
      <Container220 />
      <Container223 />
    </div>
  );
}

function Paragraph287() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">100</p>
    </div>
  );
}

function Container224() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.78px] overflow-clip top-[12.01px] w-[35px]" data-name="Container">
      <Paragraph287 />
    </div>
  );
}

function Paragraph288() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph289() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph290() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container226() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph288 />
      <Paragraph289 />
      <Paragraph290 />
    </div>
  );
}

function Paragraph291() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#FFE4CC</p>
    </div>
  );
}

function Paragraph292() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">255, 228, 204</p>
    </div>
  );
}

function Paragraph293() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">28°, 100%, 90%</p>
    </div>
  );
}

function Container227() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[87px]" data-name="Container">
      <Paragraph291 />
      <Paragraph292 />
      <Paragraph293 />
    </div>
  );
}

function Container225() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[853px]" data-name="Container">
      <Container226 />
      <Container227 />
    </div>
  );
}

function Paragraph294() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/orange/100</p>
    </div>
  );
}

function Container228() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.98px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[242px]" data-name="Container">
      <Paragraph294 />
    </div>
  );
}

function ColorCard33() {
  return (
    <div className="bg-[#ffe4cc] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container224 />
      <Container225 />
      <Container228 />
    </div>
  );
}

function Paragraph295() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">200</p>
    </div>
  );
}

function Container229() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.79px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph295 />
    </div>
  );
}

function Paragraph296() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph297() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph298() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container231() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph296 />
      <Paragraph297 />
      <Paragraph298 />
    </div>
  );
}

function Paragraph299() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#FFC99A</p>
    </div>
  );
}

function Paragraph300() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">255, 201, 154</p>
    </div>
  );
}

function Paragraph301() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">28°, 100%, 80%</p>
    </div>
  );
}

function Container232() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[87px]" data-name="Container">
      <Paragraph299 />
      <Paragraph300 />
      <Paragraph301 />
    </div>
  );
}

function Container230() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[853px]" data-name="Container">
      <Container231 />
      <Container232 />
    </div>
  );
}

function Paragraph302() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/orange/200</p>
    </div>
  );
}

function Container233() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.98px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[242px]" data-name="Container">
      <Paragraph302 />
    </div>
  );
}

function ColorCard34() {
  return (
    <div className="bg-[#ffc99a] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container229 />
      <Container230 />
      <Container233 />
    </div>
  );
}

function Paragraph303() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">300</p>
    </div>
  );
}

function Container234() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.97px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph303 />
    </div>
  );
}

function Paragraph304() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph305() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph306() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container236() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph304 />
      <Paragraph305 />
      <Paragraph306 />
    </div>
  );
}

function Paragraph307() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#FFB066</p>
    </div>
  );
}

function Paragraph308() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">255, 176, 102</p>
    </div>
  );
}

function Paragraph309() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">29°, 100%, 70%</p>
    </div>
  );
}

function Container237() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[86px]" data-name="Container">
      <Paragraph307 />
      <Paragraph308 />
      <Paragraph309 />
    </div>
  );
}

function Container235() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[853px]" data-name="Container">
      <Container236 />
      <Container237 />
    </div>
  );
}

function Paragraph310() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/orange/300</p>
    </div>
  );
}

function Container238() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.98px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[242px]" data-name="Container">
      <Paragraph310 />
    </div>
  );
}

function ColorCard35() {
  return (
    <div className="bg-[#ffb066] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container234 />
      <Container235 />
      <Container238 />
    </div>
  );
}

function Paragraph311() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">400</p>
    </div>
  );
}

function Container239() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.8px] overflow-clip top-[12.01px] w-[40px]" data-name="Container">
      <Paragraph311 />
    </div>
  );
}

function Paragraph312() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph313() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph314() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container241() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph312 />
      <Paragraph313 />
      <Paragraph314 />
    </div>
  );
}

function Paragraph315() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#FF9433</p>
    </div>
  );
}

function Paragraph316() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">255, 148, 51</p>
    </div>
  );
}

function Paragraph317() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">29°, 100%, 60%</p>
    </div>
  );
}

function Container242() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[87px]" data-name="Container">
      <Paragraph315 />
      <Paragraph316 />
      <Paragraph317 />
    </div>
  );
}

function Container240() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[853px]" data-name="Container">
      <Container241 />
      <Container242 />
    </div>
  );
}

function Paragraph318() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/orange/400</p>
    </div>
  );
}

function Container243() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.98px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[242px]" data-name="Container">
      <Paragraph318 />
    </div>
  );
}

function ColorCard36() {
  return (
    <div className="bg-[#ff9433] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container239 />
      <Container240 />
      <Container243 />
    </div>
  );
}

function Paragraph319() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">500</p>
    </div>
  );
}

function Container244() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.75px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph319 />
    </div>
  );
}

function Paragraph320() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph321() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph322() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container246() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph320 />
      <Paragraph321 />
      <Paragraph322 />
    </div>
  );
}

function Paragraph323() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#FF7900</p>
    </div>
  );
}

function Paragraph324() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">255, 121, 0</p>
    </div>
  );
}

function Paragraph325() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">28°, 100%, 50%</p>
    </div>
  );
}

function Container247() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[87px]" data-name="Container">
      <Paragraph323 />
      <Paragraph324 />
      <Paragraph325 />
    </div>
  );
}

function Container245() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[853px]" data-name="Container">
      <Container246 />
      <Container247 />
    </div>
  );
}

function Paragraph326() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/orange/500</p>
    </div>
  );
}

function Container248() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.98px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[242px]" data-name="Container">
      <Paragraph326 />
    </div>
  );
}

function ColorCard37() {
  return (
    <div className="bg-[#ff7900] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container244 />
      <Container245 />
      <Container248 />
    </div>
  );
}

function Paragraph327() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">600</p>
    </div>
  );
}

function Container249() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.99px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph327 />
    </div>
  );
}

function Paragraph328() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph329() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph330() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container251() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph328 />
      <Paragraph329 />
      <Paragraph330 />
    </div>
  );
}

function Paragraph331() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#CD6101</p>
    </div>
  );
}

function Paragraph332() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">205, 97, 1</p>
    </div>
  );
}

function Paragraph333() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">28°, 99%, 40%</p>
    </div>
  );
}

function Container252() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[82px]" data-name="Container">
      <Paragraph331 />
      <Paragraph332 />
      <Paragraph333 />
    </div>
  );
}

function Container250() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[853px]" data-name="Container">
      <Container251 />
      <Container252 />
    </div>
  );
}

function Paragraph334() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/orange/600</p>
    </div>
  );
}

function Container253() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.98px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[242px]" data-name="Container">
      <Paragraph334 />
    </div>
  );
}

function ColorCard38() {
  return (
    <div className="bg-[#cd6101] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container249 />
      <Container250 />
      <Container253 />
    </div>
  );
}

function Paragraph335() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">700</p>
    </div>
  );
}

function Container254() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.66px] overflow-clip top-[12.01px] w-[38px]" data-name="Container">
      <Paragraph335 />
    </div>
  );
}

function Paragraph336() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph337() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph338() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container256() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph336 />
      <Paragraph337 />
      <Paragraph338 />
    </div>
  );
}

function Paragraph339() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#994A00</p>
    </div>
  );
}

function Paragraph340() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">153, 74, 0</p>
    </div>
  );
}

function Paragraph341() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">29°, 100%, 30%</p>
    </div>
  );
}

function Container257() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[87px]" data-name="Container">
      <Paragraph339 />
      <Paragraph340 />
      <Paragraph341 />
    </div>
  );
}

function Container255() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[853px]" data-name="Container">
      <Container256 />
      <Container257 />
    </div>
  );
}

function Paragraph342() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/orange/700</p>
    </div>
  );
}

function Container258() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.98px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[242px]" data-name="Container">
      <Paragraph342 />
    </div>
  );
}

function ColorCard39() {
  return (
    <div className="bg-[#994a00] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container254 />
      <Container255 />
      <Container258 />
    </div>
  );
}

function Paragraph343() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">800</p>
    </div>
  );
}

function Container259() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.99px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph343 />
    </div>
  );
}

function Paragraph344() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph345() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph346() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container261() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph344 />
      <Paragraph345 />
      <Paragraph346 />
    </div>
  );
}

function Paragraph347() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#663000</p>
    </div>
  );
}

function Paragraph348() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">102, 48, 0</p>
    </div>
  );
}

function Paragraph349() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">28°, 100%, 20%</p>
    </div>
  );
}

function Container262() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[87px]" data-name="Container">
      <Paragraph347 />
      <Paragraph348 />
      <Paragraph349 />
    </div>
  );
}

function Container260() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[853px]" data-name="Container">
      <Container261 />
      <Container262 />
    </div>
  );
}

function Paragraph350() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/orange/800</p>
    </div>
  );
}

function Container263() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.98px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[242px]" data-name="Container">
      <Paragraph350 />
    </div>
  );
}

function ColorCard40() {
  return (
    <div className="bg-[#663000] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container259 />
      <Container260 />
      <Container263 />
    </div>
  );
}

function Paragraph351() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">900</p>
    </div>
  );
}

function Container264() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.99px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph351 />
    </div>
  );
}

function Paragraph352() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph353() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph354() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container266() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph352 />
      <Paragraph353 />
      <Paragraph354 />
    </div>
  );
}

function Paragraph355() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#341800</p>
    </div>
  );
}

function Paragraph356() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">52, 24, 0</p>
    </div>
  );
}

function Paragraph357() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">28°, 100%, 10%</p>
    </div>
  );
}

function Container267() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[85px]" data-name="Container">
      <Paragraph355 />
      <Paragraph356 />
      <Paragraph357 />
    </div>
  );
}

function Container265() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[853px]" data-name="Container">
      <Container266 />
      <Container267 />
    </div>
  );
}

function Paragraph358() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/orange/900</p>
    </div>
  );
}

function Container268() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.98px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[242px]" data-name="Container">
      <Paragraph358 />
    </div>
  );
}

function ColorCard41() {
  return (
    <div className="bg-[#341800] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container264 />
      <Container265 />
      <Container268 />
    </div>
  );
}

function Card01Orange() {
  return (
    <div className="flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="-scale-y-100 flex-none w-full">
        <div className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip relative w-full" data-name="Card01Orange">
          <ColorCard32 />
          <ColorCard33 />
          <ColorCard34 />
          <ColorCard35 />
          <ColorCard36 />
          <ColorCard37 />
          <ColorCard38 />
          <ColorCard39 />
          <ColorCard40 />
          <ColorCard41 />
        </div>
      </div>
    </div>
  );
}

function Container269() {
  return <div className="absolute bg-[#e7f8f9] h-[154px] left-0 rounded-[8px] top-0 w-[894px]" data-name="Container" />;
}

function Paragraph359() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">50</p>
    </div>
  );
}

function Container270() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.01px] overflow-clip top-[12.01px] w-[26px]" data-name="Container">
      <Paragraph359 />
    </div>
  );
}

function Paragraph360() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph361() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph362() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container272() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph360 />
      <Paragraph361 />
      <Paragraph362 />
    </div>
  );
}

function Paragraph363() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#E7F8F9</p>
    </div>
  );
}

function Paragraph364() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">231, 248, 249</p>
    </div>
  );
}

function Paragraph365() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">183°, 60%, 94%</p>
    </div>
  );
}

function Container273() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[88px]" data-name="Container">
      <Paragraph363 />
      <Paragraph364 />
      <Paragraph365 />
    </div>
  );
}

function Container271() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[870px]" data-name="Container">
      <Container272 />
      <Container273 />
    </div>
  );
}

function Paragraph366() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/teal/50</p>
    </div>
  );
}

function Container274() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.3px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[217px]" data-name="Container">
      <Paragraph366 />
    </div>
  );
}

function ColorCard42() {
  return (
    <div className="bg-[#e7f8f9] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container269 />
      <Container270 />
      <Container271 />
      <Container274 />
    </div>
  );
}

function Container275() {
  return <div className="absolute bg-[#d4f4f7] h-[154px] left-0 rounded-[8px] top-0 w-[894px]" data-name="Container" />;
}

function Paragraph367() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">100</p>
    </div>
  );
}

function Container276() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.2px] overflow-clip top-[12.01px] w-[35px]" data-name="Container">
      <Paragraph367 />
    </div>
  );
}

function Paragraph368() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph369() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph370() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container278() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph368 />
      <Paragraph369 />
      <Paragraph370 />
    </div>
  );
}

function Paragraph371() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#D4F4F7</p>
    </div>
  );
}

function Paragraph372() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">212, 244, 247</p>
    </div>
  );
}

function Paragraph373() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">185°, 69%, 90%</p>
    </div>
  );
}

function Container279() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[87px]" data-name="Container">
      <Paragraph371 />
      <Paragraph372 />
      <Paragraph373 />
    </div>
  );
}

function Container277() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[870px]" data-name="Container">
      <Container278 />
      <Container279 />
    </div>
  );
}

function Paragraph374() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/teal/100</p>
    </div>
  );
}

function Container280() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph374 />
    </div>
  );
}

function ColorCard43() {
  return (
    <div className="bg-[#d4f4f7] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container275 />
      <Container276 />
      <Container277 />
      <Container280 />
    </div>
  );
}

function Container281() {
  return <div className="absolute bg-[#aae9ef] h-[154px] left-0 rounded-[8px] top-0 w-[894px]" data-name="Container" />;
}

function Paragraph375() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">200</p>
    </div>
  );
}

function Container282() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.22px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph375 />
    </div>
  );
}

function Paragraph376() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph377() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph378() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container284() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph376 />
      <Paragraph377 />
      <Paragraph378 />
    </div>
  );
}

function Paragraph379() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#AAE9EF</p>
    </div>
  );
}

function Paragraph380() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">170, 233, 239</p>
    </div>
  );
}

function Paragraph381() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">185°, 68%, 80%</p>
    </div>
  );
}

function Container285() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[87px]" data-name="Container">
      <Paragraph379 />
      <Paragraph380 />
      <Paragraph381 />
    </div>
  );
}

function Container283() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[870px]" data-name="Container">
      <Container284 />
      <Container285 />
    </div>
  );
}

function Paragraph382() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/teal/200</p>
    </div>
  );
}

function Container286() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph382 />
    </div>
  );
}

function ColorCard44() {
  return (
    <div className="bg-[#aae9ef] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container281 />
      <Container282 />
      <Container283 />
      <Container286 />
    </div>
  );
}

function Container287() {
  return <div className="absolute bg-[#7fdfe7] h-[154px] left-0 rounded-[8px] top-0 w-[894px]" data-name="Container" />;
}

function Paragraph383() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">300</p>
    </div>
  );
}

function Container288() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.39px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph383 />
    </div>
  );
}

function Paragraph384() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph385() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph386() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container290() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph384 />
      <Paragraph385 />
      <Paragraph386 />
    </div>
  );
}

function Paragraph387() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#7FDFE7</p>
    </div>
  );
}

function Paragraph388() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">127, 223, 231</p>
    </div>
  );
}

function Paragraph389() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">185°, 70%, 68%</p>
    </div>
  );
}

function Container291() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[86px]" data-name="Container">
      <Paragraph387 />
      <Paragraph388 />
      <Paragraph389 />
    </div>
  );
}

function Container289() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[870px]" data-name="Container">
      <Container290 />
      <Container291 />
    </div>
  );
}

function Paragraph390() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/teal/300</p>
    </div>
  );
}

function Container292() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph390 />
    </div>
  );
}

function ColorCard45() {
  return (
    <div className="bg-[#7fdfe7] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container287 />
      <Container288 />
      <Container289 />
      <Container292 />
    </div>
  );
}

function Container293() {
  return <div className="absolute bg-[#53d4df] h-[154px] left-0 rounded-[8px] top-0 w-[894px]" data-name="Container" />;
}

function Paragraph391() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">400</p>
    </div>
  );
}

function Container294() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.22px] overflow-clip top-[12.01px] w-[40px]" data-name="Container">
      <Paragraph391 />
    </div>
  );
}

function Paragraph392() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph393() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph394() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container296() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph392 />
      <Paragraph393 />
      <Paragraph394 />
    </div>
  );
}

function Paragraph395() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#53D4DF</p>
    </div>
  );
}

function Paragraph396() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">83, 212, 223</p>
    </div>
  );
}

function Paragraph397() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">185°, 68%, 60%</p>
    </div>
  );
}

function Container297() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[87px]" data-name="Container">
      <Paragraph395 />
      <Paragraph396 />
      <Paragraph397 />
    </div>
  );
}

function Container295() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[870px]" data-name="Container">
      <Container296 />
      <Container297 />
    </div>
  );
}

function Paragraph398() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/teal/400</p>
    </div>
  );
}

function Container298() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph398 />
    </div>
  );
}

function ColorCard46() {
  return (
    <div className="bg-[#53d4df] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container293 />
      <Container294 />
      <Container295 />
      <Container298 />
    </div>
  );
}

function Container299() {
  return <div className="absolute bg-[#29c9d8] h-[154px] left-0 rounded-[8px] top-0 w-[894px]" data-name="Container" />;
}

function Paragraph399() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">500</p>
    </div>
  );
}

function Container300() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.17px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph399 />
    </div>
  );
}

function Paragraph400() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph401() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph402() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container302() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph400 />
      <Paragraph401 />
      <Paragraph402 />
    </div>
  );
}

function Paragraph403() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#29C9D8</p>
    </div>
  );
}

function Paragraph404() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">41, 201, 216</p>
    </div>
  );
}

function Paragraph405() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">185°, 69%, 50%</p>
    </div>
  );
}

function Container303() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[87px]" data-name="Container">
      <Paragraph403 />
      <Paragraph404 />
      <Paragraph405 />
    </div>
  );
}

function Container301() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[870px]" data-name="Container">
      <Container302 />
      <Container303 />
    </div>
  );
}

function Paragraph406() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/teal/500</p>
    </div>
  );
}

function Container304() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph406 />
    </div>
  );
}

function ColorCard47() {
  return (
    <div className="bg-[#29c9d8] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container299 />
      <Container300 />
      <Container301 />
      <Container304 />
    </div>
  );
}

function Container305() {
  return <div className="absolute bg-[#20a5b1] h-[154px] left-0 rounded-[8px] top-0 w-[894px]" data-name="Container" />;
}

function Paragraph407() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">600</p>
    </div>
  );
}

function Container306() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.41px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph407 />
    </div>
  );
}

function Paragraph408() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph409() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph410() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container308() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph408 />
      <Paragraph409 />
      <Paragraph410 />
    </div>
  );
}

function Paragraph411() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#20A5B1</p>
    </div>
  );
}

function Paragraph412() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">32, 165, 177</p>
    </div>
  );
}

function Paragraph413() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">185°, 69%, 41%</p>
    </div>
  );
}

function Container309() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[85px]" data-name="Container">
      <Paragraph411 />
      <Paragraph412 />
      <Paragraph413 />
    </div>
  );
}

function Container307() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[870px]" data-name="Container">
      <Container308 />
      <Container309 />
    </div>
  );
}

function Paragraph414() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/teal/600</p>
    </div>
  );
}

function Container310() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph414 />
    </div>
  );
}

function ColorCard48() {
  return (
    <div className="bg-[#20a5b1] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container305 />
      <Container306 />
      <Container307 />
      <Container310 />
    </div>
  );
}

function Container311() {
  return <div className="absolute bg-[#187882] h-[154px] left-0 rounded-[8px] top-0 w-[894px]" data-name="Container" />;
}

function Paragraph415() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">700</p>
    </div>
  );
}

function Container312() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.08px] overflow-clip top-[12.01px] w-[38px]" data-name="Container">
      <Paragraph415 />
    </div>
  );
}

function Paragraph416() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph417() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph418() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container314() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph416 />
      <Paragraph417 />
      <Paragraph418 />
    </div>
  );
}

function Paragraph419() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#187882</p>
    </div>
  );
}

function Paragraph420() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">24, 120, 130</p>
    </div>
  );
}

function Paragraph421() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">186°, 69%, 30%</p>
    </div>
  );
}

function Container315() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[87px]" data-name="Container">
      <Paragraph419 />
      <Paragraph420 />
      <Paragraph421 />
    </div>
  );
}

function Container313() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[870px]" data-name="Container">
      <Container314 />
      <Container315 />
    </div>
  );
}

function Paragraph422() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/teal/700</p>
    </div>
  );
}

function Container316() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph422 />
    </div>
  );
}

function ColorCard49() {
  return (
    <div className="bg-[#187882] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container311 />
      <Container312 />
      <Container313 />
      <Container316 />
    </div>
  );
}

function Container317() {
  return <div className="absolute bg-[#105056] h-[154px] left-0 rounded-[8px] top-0 w-[894px]" data-name="Container" />;
}

function Paragraph423() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">800</p>
    </div>
  );
}

function Container318() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.41px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph423 />
    </div>
  );
}

function Paragraph424() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph425() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph426() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container320() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph424 />
      <Paragraph425 />
      <Paragraph426 />
    </div>
  );
}

function Paragraph427() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#105056</p>
    </div>
  );
}

function Paragraph428() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">16, 80, 86</p>
    </div>
  );
}

function Paragraph429() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">185°, 69%, 20%</p>
    </div>
  );
}

function Container321() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[87px]" data-name="Container">
      <Paragraph427 />
      <Paragraph428 />
      <Paragraph429 />
    </div>
  );
}

function Container319() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[870px]" data-name="Container">
      <Container320 />
      <Container321 />
    </div>
  );
}

function Paragraph430() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/teal/800</p>
    </div>
  );
}

function Container322() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph430 />
    </div>
  );
}

function ColorCard50() {
  return (
    <div className="bg-[#105056] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container317 />
      <Container318 />
      <Container319 />
      <Container322 />
    </div>
  );
}

function Container323() {
  return <div className="absolute bg-[#08282c] h-[154px] left-0 rounded-[8px] top-0 w-[894px]" data-name="Container" />;
}

function Paragraph431() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">900</p>
    </div>
  );
}

function Container324() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.41px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph431 />
    </div>
  );
}

function Paragraph432() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph433() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph434() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container326() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph432 />
      <Paragraph433 />
      <Paragraph434 />
    </div>
  );
}

function Paragraph435() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#08282C</p>
    </div>
  );
}

function Paragraph436() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">8, 40, 44</p>
    </div>
  );
}

function Paragraph437() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">187°, 69%, 10%</p>
    </div>
  );
}

function Container327() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[85px]" data-name="Container">
      <Paragraph435 />
      <Paragraph436 />
      <Paragraph437 />
    </div>
  );
}

function Container325() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[870px]" data-name="Container">
      <Container326 />
      <Container327 />
    </div>
  );
}

function Paragraph438() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/teal/900</p>
    </div>
  );
}

function Container328() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph438 />
    </div>
  );
}

function ColorCard51() {
  return (
    <div className="bg-[#08282c] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container323 />
      <Container324 />
      <Container325 />
      <Container328 />
    </div>
  );
}

function Card02Teal() {
  return (
    <div className="flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="-scale-y-100 flex-none w-full">
        <div className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip relative w-full" data-name="Card02Teal">
          <ColorCard42 />
          <ColorCard43 />
          <ColorCard44 />
          <ColorCard45 />
          <ColorCard46 />
          <ColorCard47 />
          <ColorCard48 />
          <ColorCard49 />
          <ColorCard50 />
          <ColorCard51 />
        </div>
      </div>
    </div>
  );
}

function Paragraph439() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">900</p>
    </div>
  );
}

function Container329() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.23px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph439 />
    </div>
  );
}

function Paragraph440() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph441() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph442() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container331() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph440 />
      <Paragraph441 />
      <Paragraph442 />
    </div>
  );
}

function Paragraph443() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#1B290A</p>
    </div>
  );
}

function Paragraph444() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">27, 41, 10</p>
    </div>
  );
}

function Paragraph445() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">87°, 61%, 10%</p>
    </div>
  );
}

function Container332() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[77px]" data-name="Container">
      <Paragraph443 />
      <Paragraph444 />
      <Paragraph445 />
    </div>
  );
}

function Container330() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[892px]" data-name="Container">
      <Container331 />
      <Container332 />
    </div>
  );
}

function Paragraph446() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/apple/900</p>
    </div>
  );
}

function Container333() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.02px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[234px]" data-name="Container">
      <Paragraph446 />
    </div>
  );
}

function ColorCard52() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="bg-[#1b290a] h-[154px] overflow-clip relative rounded-[8px] w-full" data-name="ColorCard">
          <Container329 />
          <Container330 />
          <Container333 />
        </div>
      </div>
    </div>
  );
}

function Paragraph447() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">800</p>
    </div>
  );
}

function Container334() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.23px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph447 />
    </div>
  );
}

function Paragraph448() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph449() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph450() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container336() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph448 />
      <Paragraph449 />
      <Paragraph450 />
    </div>
  );
}

function Paragraph451() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#365214</p>
    </div>
  );
}

function Paragraph452() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">54, 82, 20</p>
    </div>
  );
}

function Paragraph453() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">87°, 61%, 20%</p>
    </div>
  );
}

function Container337() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[79px]" data-name="Container">
      <Paragraph451 />
      <Paragraph452 />
      <Paragraph453 />
    </div>
  );
}

function Container335() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[892px]" data-name="Container">
      <Container336 />
      <Container337 />
    </div>
  );
}

function Paragraph454() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/apple/800</p>
    </div>
  );
}

function Container338() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.02px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[234px]" data-name="Container">
      <Paragraph454 />
    </div>
  );
}

function ColorCard53() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="bg-[#365214] h-[154px] overflow-clip relative rounded-[8px] w-full" data-name="ColorCard">
          <Container334 />
          <Container335 />
          <Container338 />
        </div>
      </div>
    </div>
  );
}

function Paragraph455() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">700</p>
    </div>
  );
}

function Container339() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.9px] overflow-clip top-[12.01px] w-[38px]" data-name="Container">
      <Paragraph455 />
    </div>
  );
}

function Paragraph456() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph457() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph458() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container341() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph456 />
      <Paragraph457 />
      <Paragraph458 />
    </div>
  );
}

function Paragraph459() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#517A20</p>
    </div>
  );
}

function Paragraph460() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">81, 122, 32</p>
    </div>
  );
}

function Paragraph461() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">87°, 58%, 30%</p>
    </div>
  );
}

function Container342() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[81px]" data-name="Container">
      <Paragraph459 />
      <Paragraph460 />
      <Paragraph461 />
    </div>
  );
}

function Container340() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[892px]" data-name="Container">
      <Container341 />
      <Container342 />
    </div>
  );
}

function Paragraph462() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/apple/700</p>
    </div>
  );
}

function Container343() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.02px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[234px]" data-name="Container">
      <Paragraph462 />
    </div>
  );
}

function ColorCard54() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="bg-[#517a20] h-[154px] overflow-clip relative rounded-[8px] w-full" data-name="ColorCard">
          <Container339 />
          <Container340 />
          <Container343 />
        </div>
      </div>
    </div>
  );
}

function Paragraph463() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">600</p>
    </div>
  );
}

function Container344() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.23px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph463 />
    </div>
  );
}

function Paragraph464() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph465() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph466() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container346() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph464 />
      <Paragraph465 />
      <Paragraph466 />
    </div>
  );
}

function Paragraph467() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#629726</p>
    </div>
  );
}

function Paragraph468() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">98, 151, 38</p>
    </div>
  );
}

function Paragraph469() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">88°, 60%, 37%</p>
    </div>
  );
}

function Container347() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[81px]" data-name="Container">
      <Paragraph467 />
      <Paragraph468 />
      <Paragraph469 />
    </div>
  );
}

function Container345() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[892px]" data-name="Container">
      <Container346 />
      <Container347 />
    </div>
  );
}

function Paragraph470() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/apple/600</p>
    </div>
  );
}

function Container348() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.02px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[234px]" data-name="Container">
      <Paragraph470 />
    </div>
  );
}

function ColorCard55() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="bg-[#629726] h-[154px] overflow-clip relative rounded-[8px] w-full" data-name="ColorCard">
          <Container344 />
          <Container345 />
          <Container348 />
        </div>
      </div>
    </div>
  );
}

function Paragraph471() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">500</p>
    </div>
  );
}

function Container349() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.99px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph471 />
    </div>
  );
}

function Paragraph472() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph473() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph474() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container351() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph472 />
      <Paragraph473 />
      <Paragraph474 />
    </div>
  );
}

function Paragraph475() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#7DC030</p>
    </div>
  );
}

function Paragraph476() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">125, 192, 48</p>
    </div>
  );
}

function Paragraph477() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">88°, 60%, 47%</p>
    </div>
  );
}

function Container352() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[81px]" data-name="Container">
      <Paragraph475 />
      <Paragraph476 />
      <Paragraph477 />
    </div>
  );
}

function Container350() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[892px]" data-name="Container">
      <Container351 />
      <Container352 />
    </div>
  );
}

function Paragraph478() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/apple/500</p>
    </div>
  );
}

function Container353() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.02px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[234px]" data-name="Container">
      <Paragraph478 />
    </div>
  );
}

function ColorCard56() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="bg-[#7dc030] h-[154px] overflow-clip relative rounded-[8px] w-full" data-name="ColorCard">
          <Container349 />
          <Container350 />
          <Container353 />
        </div>
      </div>
    </div>
  );
}

function Paragraph479() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">400</p>
    </div>
  );
}

function Container354() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.04px] overflow-clip top-[12.01px] w-[40px]" data-name="Container">
      <Paragraph479 />
    </div>
  );
}

function Paragraph480() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph481() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph482() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container356() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph480 />
      <Paragraph481 />
      <Paragraph482 />
    </div>
  );
}

function Paragraph483() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#96D350</p>
    </div>
  );
}

function Paragraph484() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">150, 211, 80</p>
    </div>
  );
}

function Paragraph485() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">88°, 60%, 57%</p>
    </div>
  );
}

function Container357() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[81px]" data-name="Container">
      <Paragraph483 />
      <Paragraph484 />
      <Paragraph485 />
    </div>
  );
}

function Container355() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[892px]" data-name="Container">
      <Container356 />
      <Container357 />
    </div>
  );
}

function Paragraph486() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/apple/400</p>
    </div>
  );
}

function Container358() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.02px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[234px]" data-name="Container">
      <Paragraph486 />
    </div>
  );
}

function ColorCard57() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="bg-[#96d350] h-[154px] overflow-clip relative rounded-[8px] w-full" data-name="ColorCard">
          <Container354 />
          <Container355 />
          <Container358 />
        </div>
      </div>
    </div>
  );
}

function Paragraph487() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">300</p>
    </div>
  );
}

function Container359() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.21px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph487 />
    </div>
  );
}

function Paragraph488() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph489() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph490() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container361() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph488 />
      <Paragraph489 />
      <Paragraph490 />
    </div>
  );
}

function Paragraph491() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#AFDD79</p>
    </div>
  );
}

function Paragraph492() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">175, 221, 121</p>
    </div>
  );
}

function Paragraph493() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">88°, 60%, 67%</p>
    </div>
  );
}

function Container362() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[81px]" data-name="Container">
      <Paragraph491 />
      <Paragraph492 />
      <Paragraph493 />
    </div>
  );
}

function Container360() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[892px]" data-name="Container">
      <Container361 />
      <Container362 />
    </div>
  );
}

function Paragraph494() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/apple/300</p>
    </div>
  );
}

function Container363() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.02px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[234px]" data-name="Container">
      <Paragraph494 />
    </div>
  );
}

function ColorCard58() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="bg-[#afdd79] h-[154px] overflow-clip relative rounded-[8px] w-full" data-name="ColorCard">
          <Container359 />
          <Container360 />
          <Container363 />
        </div>
      </div>
    </div>
  );
}

function Paragraph495() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">200</p>
    </div>
  );
}

function Container364() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.03px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph495 />
    </div>
  );
}

function Paragraph496() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph497() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph498() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container366() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph496 />
      <Paragraph497 />
      <Paragraph498 />
    </div>
  );
}

function Paragraph499() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#C7E8A1</p>
    </div>
  );
}

function Paragraph500() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">199, 232, 161</p>
    </div>
  );
}

function Paragraph501() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">88°, 61%, 77%</p>
    </div>
  );
}

function Container367() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[79px]" data-name="Container">
      <Paragraph499 />
      <Paragraph500 />
      <Paragraph501 />
    </div>
  );
}

function Container365() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[892px]" data-name="Container">
      <Container366 />
      <Container367 />
    </div>
  );
}

function Paragraph502() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/apple/200</p>
    </div>
  );
}

function Container368() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.02px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[234px]" data-name="Container">
      <Paragraph502 />
    </div>
  );
}

function ColorCard59() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="bg-[#c7e8a1] h-[154px] overflow-clip relative rounded-[8px] w-full" data-name="ColorCard">
          <Container364 />
          <Container365 />
          <Container368 />
        </div>
      </div>
    </div>
  );
}

function Paragraph503() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">100</p>
    </div>
  );
}

function Container369() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.02px] overflow-clip top-[12.01px] w-[35px]" data-name="Container">
      <Paragraph503 />
    </div>
  );
}

function Paragraph504() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph505() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph506() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container371() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph504 />
      <Paragraph505 />
      <Paragraph506 />
    </div>
  );
}

function Paragraph507() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#DFF2CA</p>
    </div>
  );
}

function Paragraph508() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">223, 242, 202</p>
    </div>
  );
}

function Paragraph509() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">88°, 61%, 87%</p>
    </div>
  );
}

function Container372() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[79px]" data-name="Container">
      <Paragraph507 />
      <Paragraph508 />
      <Paragraph509 />
    </div>
  );
}

function Container370() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[892px]" data-name="Container">
      <Container371 />
      <Container372 />
    </div>
  );
}

function Paragraph510() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/apple/100</p>
    </div>
  );
}

function Container373() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.02px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[234px]" data-name="Container">
      <Paragraph510 />
    </div>
  );
}

function ColorCard60() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="bg-[#dff2ca] h-[154px] overflow-clip relative rounded-[8px] w-full" data-name="ColorCard">
          <Container369 />
          <Container370 />
          <Container373 />
        </div>
      </div>
    </div>
  );
}

function Paragraph511() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">50</p>
    </div>
  );
}

function Container374() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.83px] overflow-clip top-[12.01px] w-[26px]" data-name="Container">
      <Paragraph511 />
    </div>
  );
}

function Paragraph512() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph513() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph514() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container376() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph512 />
      <Paragraph513 />
      <Paragraph514 />
    </div>
  );
}

function Paragraph515() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#ECF7DF</p>
    </div>
  );
}

function Paragraph516() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">236, 247, 223</p>
    </div>
  );
}

function Paragraph517() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">87°, 60%, 92%</p>
    </div>
  );
}

function Container377() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[81px]" data-name="Container">
      <Paragraph515 />
      <Paragraph516 />
      <Paragraph517 />
    </div>
  );
}

function Container375() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[892px]" data-name="Container">
      <Container376 />
      <Container377 />
    </div>
  );
}

function Paragraph518() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/apple/50</p>
    </div>
  );
}

function Container378() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.82px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph518 />
    </div>
  );
}

function ColorCard61() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="bg-[#ecf7df] h-[154px] overflow-clip relative rounded-[8px] w-full" data-name="ColorCard">
          <Container374 />
          <Container375 />
          <Container378 />
        </div>
      </div>
    </div>
  );
}

function Card01X() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-w-px relative" data-name="Card01X">
      <ColorCard52 />
      <ColorCard53 />
      <ColorCard54 />
      <ColorCard55 />
      <ColorCard56 />
      <ColorCard57 />
      <ColorCard58 />
      <ColorCard59 />
      <ColorCard60 />
      <ColorCard61 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <Card01Orange />
      <Card02Teal />
      <Card01X />
    </div>
  );
}

function Paragraph519() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[#16181d] text-[24px] tracking-[-0.24px] w-full">Orange</p>
    </div>
  );
}

function Paragraph520() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#576175] text-[16px] w-full">Escala cálida para acentos promocionales, llamados de atención, storytelling comercial y campañas de alto impacto.</p>
    </div>
  );
}

function CardHeader6() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch pb-[24px] relative row-1 self-start shrink-0" data-name="CardHeader6">
      <Paragraph519 />
      <Paragraph520 />
    </div>
  );
}

function Paragraph521() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[#16181d] text-[24px] tracking-[-0.24px] w-full">Teal</p>
    </div>
  );
}

function CardHeader7() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch pb-[24px] relative row-1 self-start shrink-0" data-name="CardHeader7">
      <Paragraph521 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#576175] text-[16px] w-full">Escala de apoyo para recursos editoriales, piezas de storytelling, fondos de campaña y acentos informativos premium.</p>
    </div>
  );
}

function Paragraph522() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[#16181d] text-[24px] tracking-[-0.24px] w-full">Apple</p>
    </div>
  );
}

function CardHeader8() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch pb-[24px] relative row-1 self-start shrink-0" data-name="CardHeader8">
      <Paragraph522 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#576175] text-[16px] w-full">Escala fresca para recursos editoriales positivos, campañas temáticas, iniciativas sostenibles y narrativas de crecimiento.</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative w-full">
          <CardHeader6 />
          <CardHeader7 />
          <CardHeader8 />
        </div>
      </div>
    </div>
  );
}

function ColorScaleGrid2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="ColorScaleGrid3">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Paragraph523() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#576175] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Escalas cromáticas complementarias para ampliar el rango expresivo del sistema.</p>
        <p className="leading-[24px]">Su presencia y cantidad pueden variar por proyecto y deben mantenerse desacopladas de cualquier intención semántica específica.</p>
      </div>
    </div>
  );
}

function Container379() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="content-stretch flex flex-col gap-[12px] h-[128px] items-start relative w-full" data-name="Container">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[44px] not-italic relative shrink-0 text-[#16181d] text-[40px] whitespace-nowrap">Escalas de colores terciarios</p>
          <Paragraph523 />
        </div>
      </div>
    </div>
  );
}

function Section03TertiaryColorScales() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full" data-name="Section03TertiaryColorScales">
      <ColorScaleGrid2 />
      <Container379 />
    </div>
  );
}

function Container381() {
  return <div className="bg-[#eef2f8] h-px relative shrink-0 w-full" data-name="Container" />;
}

function Container380() {
  return (
    <div className="absolute flex h-px items-center justify-center left-0 top-0 w-[935px]">
      <div className="-scale-y-100 flex-none">
        <div className="content-stretch flex flex-col h-px items-start relative w-[935px]" data-name="Container">
          <Container381 />
        </div>
      </div>
    </div>
  );
}

function Divider1() {
  return (
    <div className="content-stretch flex flex-col h-px items-start relative shrink-0 w-[935px]" data-name="Divider1">
      <Container380 />
    </div>
  );
}

function Paragraph524() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[#16181d] text-[24px] tracking-[-0.24px] w-full">Light Blue</p>
    </div>
  );
}

function Paragraph525() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#576175] text-[16px] w-full">Familia cromática de apoyo que amplía la paleta base. Sus valores funcionan como primitives y pueden asignarse posteriormente a roles de marca, superficies o acentos semánticos.</p>
    </div>
  );
}

function ParagraphContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[24px] relative shrink-0 w-full" data-name="ParagraphContainer">
      <Paragraph524 />
      <Paragraph525 />
    </div>
  );
}

function Paragraph526() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">50</p>
    </div>
  );
}

function Container382() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.03px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph526 />
    </div>
  );
}

function Paragraph527() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph528() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph529() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container384() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph527 />
      <Paragraph528 />
      <Paragraph529 />
    </div>
  );
}

function Paragraph530() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#E5F9FF</p>
    </div>
  );
}

function Paragraph531() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">229, 249, 255</p>
    </div>
  );
}

function Paragraph532() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">194°, 100%, 95%</p>
    </div>
  );
}

function Container385() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[93px]" data-name="Container">
      <Paragraph530 />
      <Paragraph531 />
      <Paragraph532 />
    </div>
  );
}

function Container383() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1346px]" data-name="Container">
      <Container384 />
      <Container385 />
    </div>
  );
}

function Paragraph533() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/light-blue/50</p>
    </div>
  );
}

function Container386() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.03px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[268px]" data-name="Container">
      <Paragraph533 />
    </div>
  );
}

function ColorCard62() {
  return (
    <div className="bg-[#e5f9ff] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container382 />
      <Container383 />
      <Container386 />
    </div>
  );
}

function Paragraph534() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">100</p>
    </div>
  );
}

function Container387() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.22px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph534 />
    </div>
  );
}

function Paragraph535() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph536() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph537() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container389() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph535 />
      <Paragraph536 />
      <Paragraph537 />
    </div>
  );
}

function Paragraph538() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#CCF1FF</p>
    </div>
  );
}

function Paragraph539() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">204, 241, 255</p>
    </div>
  );
}

function Paragraph540() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">196°, 100%, 90%</p>
    </div>
  );
}

function Container390() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[93px]" data-name="Container">
      <Paragraph538 />
      <Paragraph539 />
      <Paragraph540 />
    </div>
  );
}

function Container388() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1346px]" data-name="Container">
      <Container389 />
      <Container390 />
    </div>
  );
}

function Paragraph541() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/light-blue/100</p>
    </div>
  );
}

function Container391() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.23px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[276px]" data-name="Container">
      <Paragraph541 />
    </div>
  );
}

function ColorCard63() {
  return (
    <div className="bg-[#ccf1ff] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container387 />
      <Container388 />
      <Container391 />
    </div>
  );
}

function Paragraph542() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">200</p>
    </div>
  );
}

function Container392() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.24px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph542 />
    </div>
  );
}

function Paragraph543() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph544() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph545() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container394() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph543 />
      <Paragraph544 />
      <Paragraph545 />
    </div>
  );
}

function Paragraph546() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#9AE3FF</p>
    </div>
  );
}

function Paragraph547() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">154, 227, 255</p>
    </div>
  );
}

function Paragraph548() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">198°, 100%, 82%</p>
    </div>
  );
}

function Container395() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[92px]" data-name="Container">
      <Paragraph546 />
      <Paragraph547 />
      <Paragraph548 />
    </div>
  );
}

function Container393() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1346px]" data-name="Container">
      <Container394 />
      <Container395 />
    </div>
  );
}

function Paragraph549() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/light-blue/200</p>
    </div>
  );
}

function Container396() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.23px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[276px]" data-name="Container">
      <Paragraph549 />
    </div>
  );
}

function ColorCard64() {
  return (
    <div className="bg-[#9ae3ff] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container392 />
      <Container393 />
      <Container396 />
    </div>
  );
}

function Paragraph550() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">300</p>
    </div>
  );
}

function Container397() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.41px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph550 />
    </div>
  );
}

function Paragraph551() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph552() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph553() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container399() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph551 />
      <Paragraph552 />
      <Paragraph553 />
    </div>
  );
}

function Paragraph554() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#65D6FF</p>
    </div>
  );
}

function Paragraph555() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">101, 214, 255</p>
    </div>
  );
}

function Paragraph556() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">196°, 100%, 70%</p>
    </div>
  );
}

function Container400() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[92px]" data-name="Container">
      <Paragraph554 />
      <Paragraph555 />
      <Paragraph556 />
    </div>
  );
}

function Container398() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1346px]" data-name="Container">
      <Container399 />
      <Container400 />
    </div>
  );
}

function Paragraph557() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/light-blue/300</p>
    </div>
  );
}

function Container401() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.23px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[276px]" data-name="Container">
      <Paragraph557 />
    </div>
  );
}

function ColorCard65() {
  return (
    <div className="bg-[#65d6ff] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container397 />
      <Container398 />
      <Container401 />
    </div>
  );
}

function Paragraph558() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">400</p>
    </div>
  );
}

function Container402() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.25px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph558 />
    </div>
  );
}

function Paragraph559() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph560() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph561() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container404() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph559 />
      <Paragraph560 />
      <Paragraph561 />
    </div>
  );
}

function Paragraph562() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#35C7FF</p>
    </div>
  );
}

function Paragraph563() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">53, 199, 255</p>
    </div>
  );
}

function Paragraph564() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">197°, 100%, 60%</p>
    </div>
  );
}

function Container405() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[92px]" data-name="Container">
      <Paragraph562 />
      <Paragraph563 />
      <Paragraph564 />
    </div>
  );
}

function Container403() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1346px]" data-name="Container">
      <Container404 />
      <Container405 />
    </div>
  );
}

function Paragraph565() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/light-blue/400</p>
    </div>
  );
}

function Container406() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.23px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[276px]" data-name="Container">
      <Paragraph565 />
    </div>
  );
}

function ColorCard66() {
  return (
    <div className="bg-[#35c7ff] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container402 />
      <Container403 />
      <Container406 />
    </div>
  );
}

function Paragraph566() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">500</p>
    </div>
  );
}

function Container407() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.2px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph566 />
    </div>
  );
}

function Paragraph567() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph568() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph569() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container409() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph567 />
      <Paragraph568 />
      <Paragraph569 />
    </div>
  );
}

function Paragraph570() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#15BFFF</p>
    </div>
  );
}

function Paragraph571() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">21, 191, 255</p>
    </div>
  );
}

function Paragraph572() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">196°, 100%, 54%</p>
    </div>
  );
}

function Container410() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[93px]" data-name="Container">
      <Paragraph570 />
      <Paragraph571 />
      <Paragraph572 />
    </div>
  );
}

function Container408() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1346px]" data-name="Container">
      <Container409 />
      <Container410 />
    </div>
  );
}

function Paragraph573() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/light-blue/500</p>
    </div>
  );
}

function Container411() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.23px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[276px]" data-name="Container">
      <Paragraph573 />
    </div>
  );
}

function ColorCard67() {
  return (
    <div className="bg-[#15bfff] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container407 />
      <Container408 />
      <Container411 />
    </div>
  );
}

function Paragraph574() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">600</p>
    </div>
  );
}

function Container412() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.44px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph574 />
    </div>
  );
}

function Paragraph575() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph576() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph577() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container414() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph575 />
      <Paragraph576 />
      <Paragraph577 />
    </div>
  );
}

function Paragraph578() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#00A3E1</p>
    </div>
  );
}

function Paragraph579() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">0, 163, 225</p>
    </div>
  );
}

function Paragraph580() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">197°, 100%, 44%</p>
    </div>
  );
}

function Container415() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[92px]" data-name="Container">
      <Paragraph578 />
      <Paragraph579 />
      <Paragraph580 />
    </div>
  );
}

function Container413() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1346px]" data-name="Container">
      <Container414 />
      <Container415 />
    </div>
  );
}

function Paragraph581() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/light-blue/600</p>
    </div>
  );
}

function Container416() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.23px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[276px]" data-name="Container">
      <Paragraph581 />
    </div>
  );
}

function ColorCard68() {
  return (
    <div className="bg-[#00a3e1] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container412 />
      <Container413 />
      <Container416 />
    </div>
  );
}

function Paragraph582() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">700</p>
    </div>
  );
}

function Container417() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.1px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph582 />
    </div>
  );
}

function Paragraph583() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph584() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph585() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container419() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph583 />
      <Paragraph584 />
      <Paragraph585 />
    </div>
  );
}

function Paragraph586() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#007EAE</p>
    </div>
  );
}

function Paragraph587() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">0, 126, 174</p>
    </div>
  );
}

function Paragraph588() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">197°, 100%, 34%</p>
    </div>
  );
}

function Container420() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[92px]" data-name="Container">
      <Paragraph586 />
      <Paragraph587 />
      <Paragraph588 />
    </div>
  );
}

function Container418() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1346px]" data-name="Container">
      <Container419 />
      <Container420 />
    </div>
  );
}

function Paragraph589() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/light-blue/700</p>
    </div>
  );
}

function Container421() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.23px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[276px]" data-name="Container">
      <Paragraph589 />
    </div>
  );
}

function ColorCard69() {
  return (
    <div className="bg-[#007eae] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container417 />
      <Container418 />
      <Container421 />
    </div>
  );
}

function Paragraph590() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">800</p>
    </div>
  );
}

function Container422() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.44px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph590 />
    </div>
  );
}

function Paragraph591() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph592() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph593() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container424() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph591 />
      <Paragraph592 />
      <Paragraph593 />
    </div>
  );
}

function Paragraph594() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#004A67</p>
    </div>
  );
}

function Paragraph595() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">0, 74, 103</p>
    </div>
  );
}

function Paragraph596() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">197°, 100%, 20%</p>
    </div>
  );
}

function Container425() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[92px]" data-name="Container">
      <Paragraph594 />
      <Paragraph595 />
      <Paragraph596 />
    </div>
  );
}

function Container423() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1346px]" data-name="Container">
      <Container424 />
      <Container425 />
    </div>
  );
}

function Paragraph597() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/light-blue/800</p>
    </div>
  );
}

function Container426() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.23px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[276px]" data-name="Container">
      <Paragraph597 />
    </div>
  );
}

function ColorCard70() {
  return (
    <div className="bg-[#004a67] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container422 />
      <Container423 />
      <Container426 />
    </div>
  );
}

function Paragraph598() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">900</p>
    </div>
  );
}

function Container427() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.44px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph598 />
    </div>
  );
}

function Paragraph599() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph600() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph601() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container429() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph599 />
      <Paragraph600 />
      <Paragraph601 />
    </div>
  );
}

function Paragraph602() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#002533</p>
    </div>
  );
}

function Paragraph603() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">0, 37, 51</p>
    </div>
  );
}

function Paragraph604() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">196°, 100%, 10%</p>
    </div>
  );
}

function Container430() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[91px]" data-name="Container">
      <Paragraph602 />
      <Paragraph603 />
      <Paragraph604 />
    </div>
  );
}

function Container428() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1346px]" data-name="Container">
      <Container429 />
      <Container430 />
    </div>
  );
}

function Paragraph605() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/light-blue/900</p>
    </div>
  );
}

function Container431() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.23px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[276px]" data-name="Container">
      <Paragraph605 />
    </div>
  );
}

function ColorCard71() {
  return (
    <div className="bg-[#002533] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container427 />
      <Container428 />
      <Container431 />
    </div>
  );
}

function Card01LightBlue() {
  return (
    <div className="flex items-center justify-center max-w-[500px] relative shrink-0">
      <div className="-scale-y-100 flex-none">
        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative w-[500px]" data-name="Card01LightBlue">
          <ParagraphContainer />
          <ColorCard62 />
          <ColorCard63 />
          <ColorCard64 />
          <ColorCard65 />
          <ColorCard66 />
          <ColorCard67 />
          <ColorCard68 />
          <ColorCard69 />
          <ColorCard70 />
          <ColorCard71 />
        </div>
      </div>
    </div>
  );
}

function Paragraph606() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#576175] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Escalas cromáticas de apoyo que amplían la paleta base del sistema.</p>
        <p className="leading-[24px]">Funcionan como primitives reutilizables y pueden alimentar distintos roles de marca o semánticos según las necesidades de cada proyecto.</p>
      </div>
    </div>
  );
}

function Container432() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="content-stretch flex flex-col gap-[12px] h-[128px] items-start relative w-full" data-name="Container">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[44px] not-italic relative shrink-0 text-[#16181d] text-[40px] whitespace-nowrap">Escalas de colores secundarios</p>
          <Paragraph606 />
        </div>
      </div>
    </div>
  );
}

function Section02SecondaryColorScales() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full" data-name="Section02SecondaryColorScales">
      <Card01LightBlue />
      <Container432 />
    </div>
  );
}

function Container434() {
  return <div className="bg-[#eef2f8] h-px relative shrink-0 w-full" data-name="Container" />;
}

function Container433() {
  return (
    <div className="absolute flex h-px items-center justify-center left-0 top-0 w-[935px]">
      <div className="-scale-y-100 flex-none">
        <div className="content-stretch flex flex-col h-px items-start relative w-[935px]" data-name="Container">
          <Container434 />
        </div>
      </div>
    </div>
  );
}

function Divider2() {
  return (
    <div className="content-stretch flex flex-col h-px items-start relative shrink-0 w-[935px]" data-name="Divider2">
      <Container433 />
    </div>
  );
}

function Paragraph607() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[#16181d] text-[24px] tracking-[-0.24px] w-full">Blue</p>
    </div>
  );
}

function Paragraph608() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#576175] text-[16px] w-full">Familia cromática utilizada como base de la escala principal. Sus valores funcionan como primitives y pueden alimentar distintos roles de marca y semánticos según el proyecto.</p>
    </div>
  );
}

function ParagraphContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[24px] relative shrink-0 w-full" data-name="ParagraphContainer">
      <Paragraph607 />
      <Paragraph608 />
    </div>
  );
}

function Paragraph609() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">50</p>
    </div>
  );
}

function Container436() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.64px] overflow-clip top-[12.01px] w-[26px]" data-name="Container">
      <Paragraph609 />
    </div>
  );
}

function Paragraph610() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph611() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph612() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container438() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph610 />
      <Paragraph611 />
      <Paragraph612 />
    </div>
  );
}

function Paragraph613() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#F2F8FF</p>
    </div>
  );
}

function Paragraph614() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">242, 248, 255</p>
    </div>
  );
}

function Paragraph615() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">212°, 100%, 97%</p>
    </div>
  );
}

function Container439() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[92px]" data-name="Container">
      <Paragraph613 />
      <Paragraph614 />
      <Paragraph615 />
    </div>
  );
}

function Container437() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[911px]" data-name="Container">
      <Container438 />
      <Container439 />
    </div>
  );
}

function Paragraph616() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/blue/50</p>
    </div>
  );
}

function Container440() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.93px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[217px]" data-name="Container">
      <Paragraph616 />
    </div>
  );
}

function ColorCard72() {
  return (
    <div className="bg-[#f2f8ff] h-[154px] relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container436 />
      <Container437 />
      <Container440 />
    </div>
  );
}

function Paragraph617() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">100</p>
    </div>
  );
}

function Container441() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.83px] overflow-clip top-[12.01px] w-[35px]" data-name="Container">
      <Paragraph617 />
    </div>
  );
}

function Paragraph618() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph619() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph620() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container443() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph618 />
      <Paragraph619 />
      <Paragraph620 />
    </div>
  );
}

function Paragraph621() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#E1F0FF</p>
    </div>
  );
}

function Paragraph622() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">225, 240, 255</p>
    </div>
  );
}

function Paragraph623() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">210°, 100%, 94%</p>
    </div>
  );
}

function Container444() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[93px]" data-name="Container">
      <Paragraph621 />
      <Paragraph622 />
      <Paragraph623 />
    </div>
  );
}

function Container442() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[911px]" data-name="Container">
      <Container443 />
      <Container444 />
    </div>
  );
}

function Paragraph624() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/blue/100</p>
    </div>
  );
}

function Container445() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.63px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph624 />
    </div>
  );
}

function ColorCard73() {
  return (
    <div className="bg-[#e1f0ff] h-[154px] relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container441 />
      <Container442 />
      <Container445 />
    </div>
  );
}

function Paragraph625() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">200</p>
    </div>
  );
}

function Container446() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.84px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph625 />
    </div>
  );
}

function Paragraph626() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph627() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph628() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container448() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph626 />
      <Paragraph627 />
      <Paragraph628 />
    </div>
  );
}

function Paragraph629() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#BFDFFF</p>
    </div>
  );
}

function Paragraph630() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">191, 223, 255</p>
    </div>
  );
}

function Paragraph631() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">210°, 100%, 87%</p>
    </div>
  );
}

function Container449() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[92px]" data-name="Container">
      <Paragraph629 />
      <Paragraph630 />
      <Paragraph631 />
    </div>
  );
}

function Container447() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[911px]" data-name="Container">
      <Container448 />
      <Container449 />
    </div>
  );
}

function Paragraph632() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/blue/200</p>
    </div>
  );
}

function Container450() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.63px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph632 />
    </div>
  );
}

function ColorCard74() {
  return (
    <div className="bg-[#bfdfff] h-[154px] relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container446 />
      <Container447 />
      <Container450 />
    </div>
  );
}

function Paragraph633() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">300</p>
    </div>
  );
}

function Container451() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.02px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph633 />
    </div>
  );
}

function Paragraph634() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph635() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph636() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container453() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph634 />
      <Paragraph635 />
      <Paragraph636 />
    </div>
  );
}

function Paragraph637() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#8FC7FF</p>
    </div>
  );
}

function Paragraph638() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">143, 199, 255</p>
    </div>
  );
}

function Paragraph639() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">210°, 100%, 78%</p>
    </div>
  );
}

function Container454() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[92px]" data-name="Container">
      <Paragraph637 />
      <Paragraph638 />
      <Paragraph639 />
    </div>
  );
}

function Container452() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[911px]" data-name="Container">
      <Container453 />
      <Container454 />
    </div>
  );
}

function Paragraph640() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/blue/300</p>
    </div>
  );
}

function Container455() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.63px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph640 />
    </div>
  );
}

function ColorCard75() {
  return (
    <div className="bg-[#8fc7ff] h-[154px] relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container451 />
      <Container452 />
      <Container455 />
    </div>
  );
}

function Paragraph641() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">400</p>
    </div>
  );
}

function Container456() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.85px] overflow-clip top-[12.01px] w-[40px]" data-name="Container">
      <Paragraph641 />
    </div>
  );
}

function Paragraph642() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph643() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph644() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container458() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph642 />
      <Paragraph643 />
      <Paragraph644 />
    </div>
  );
}

function Paragraph645() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#5FAEFF</p>
    </div>
  );
}

function Paragraph646() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">95, 174, 255</p>
    </div>
  );
}

function Paragraph647() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">210°, 100%, 69%</p>
    </div>
  );
}

function Container459() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[93px]" data-name="Container">
      <Paragraph645 />
      <Paragraph646 />
      <Paragraph647 />
    </div>
  );
}

function Container457() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[911px]" data-name="Container">
      <Container458 />
      <Container459 />
    </div>
  );
}

function Paragraph648() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/blue/400</p>
    </div>
  );
}

function Container460() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.63px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph648 />
    </div>
  );
}

function ColorCard76() {
  return (
    <div className="bg-[#5faeff] h-[154px] relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container456 />
      <Container457 />
      <Container460 />
    </div>
  );
}

function Paragraph649() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">500</p>
    </div>
  );
}

function Container461() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.8px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph649 />
    </div>
  );
}

function Paragraph650() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph651() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph652() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container463() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph650 />
      <Paragraph651 />
      <Paragraph652 />
    </div>
  );
}

function Paragraph653() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#1677D8</p>
    </div>
  );
}

function Paragraph654() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">22, 119, 216</p>
    </div>
  );
}

function Paragraph655() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">210°, 82%, 47%</p>
    </div>
  );
}

function Container464() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[86px]" data-name="Container">
      <Paragraph653 />
      <Paragraph654 />
      <Paragraph655 />
    </div>
  );
}

function Container462() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[911px]" data-name="Container">
      <Container463 />
      <Container464 />
    </div>
  );
}

function Paragraph656() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/blue/500</p>
    </div>
  );
}

function Container465() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.63px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph656 />
    </div>
  );
}

function ColorCard77() {
  return (
    <div className="bg-[#1677d8] h-[154px] relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container461 />
      <Container462 />
      <Container465 />
    </div>
  );
}

function Paragraph657() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">600</p>
    </div>
  );
}

function Container466() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.04px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph657 />
    </div>
  );
}

function Paragraph658() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph659() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph660() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container468() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph658 />
      <Paragraph659 />
      <Paragraph660 />
    </div>
  );
}

function Paragraph661() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#0B5FB8</p>
    </div>
  );
}

function Paragraph662() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">11, 95, 184</p>
    </div>
  );
}

function Paragraph663() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">211°, 89%, 38%</p>
    </div>
  );
}

function Container469() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[85px]" data-name="Container">
      <Paragraph661 />
      <Paragraph662 />
      <Paragraph663 />
    </div>
  );
}

function Container467() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[911px]" data-name="Container">
      <Container468 />
      <Container469 />
    </div>
  );
}

function Paragraph664() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/blue/600</p>
    </div>
  );
}

function Container470() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.63px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph664 />
    </div>
  );
}

function ColorCard78() {
  return (
    <div className="bg-[#0b5fb8] h-[154px] relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container466 />
      <Container467 />
      <Container470 />
    </div>
  );
}

function Paragraph665() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">700</p>
    </div>
  );
}

function Container471() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[11.71px] overflow-clip top-[12.01px] w-[38px]" data-name="Container">
      <Paragraph665 />
    </div>
  );
}

function Paragraph666() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph667() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph668() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container473() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph666 />
      <Paragraph667 />
      <Paragraph668 />
    </div>
  );
}

function Paragraph669() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#004C97</p>
    </div>
  );
}

function Paragraph670() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">0, 76, 151</p>
    </div>
  );
}

function Paragraph671() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">210°, 100%, 30%</p>
    </div>
  );
}

function Container474() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[93px]" data-name="Container">
      <Paragraph669 />
      <Paragraph670 />
      <Paragraph671 />
    </div>
  );
}

function Container472() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[911px]" data-name="Container">
      <Container473 />
      <Container474 />
    </div>
  );
}

function Paragraph672() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/blue/700</p>
    </div>
  );
}

function Container475() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.63px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph672 />
    </div>
  );
}

function ColorCard79() {
  return (
    <div className="bg-[#004c97] h-[154px] relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container471 />
      <Container472 />
      <Container475 />
    </div>
  );
}

function Paragraph673() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">800</p>
    </div>
  );
}

function Container476() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.04px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph673 />
    </div>
  );
}

function Paragraph674() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph675() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph676() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container478() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph674 />
      <Paragraph675 />
      <Paragraph676 />
    </div>
  );
}

function Paragraph677() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#003882</p>
    </div>
  );
}

function Paragraph678() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">0, 56, 130</p>
    </div>
  );
}

function Paragraph679() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">214°, 100%, 25%</p>
    </div>
  );
}

function Container479() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[92px]" data-name="Container">
      <Paragraph677 />
      <Paragraph678 />
      <Paragraph679 />
    </div>
  );
}

function Container477() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[911px]" data-name="Container">
      <Container478 />
      <Container479 />
    </div>
  );
}

function Paragraph680() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/blue/800</p>
    </div>
  );
}

function Container480() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.63px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph680 />
    </div>
  );
}

function ColorCard80() {
  return (
    <div className="bg-[#003882] h-[154px] relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container476 />
      <Container477 />
      <Container480 />
    </div>
  );
}

function Paragraph681() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">900</p>
    </div>
  );
}

function Container481() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.04px] overflow-clip top-[12.01px] w-[39px]" data-name="Container">
      <Paragraph681 />
    </div>
  );
}

function Paragraph682() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph683() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph684() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container483() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph682 />
      <Paragraph683 />
      <Paragraph684 />
    </div>
  );
}

function Paragraph685() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#001F3F</p>
    </div>
  );
}

function Paragraph686() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">0, 31, 63</p>
    </div>
  );
}

function Paragraph687() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">210°, 100%, 12%</p>
    </div>
  );
}

function Container484() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[91px]" data-name="Container">
      <Paragraph685 />
      <Paragraph686 />
      <Paragraph687 />
    </div>
  );
}

function Container482() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[911px]" data-name="Container">
      <Container483 />
      <Container484 />
    </div>
  );
}

function Paragraph688() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/blue/900</p>
    </div>
  );
}

function Container485() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[11.63px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[226px]" data-name="Container">
      <Paragraph688 />
    </div>
  );
}

function ColorCard81() {
  return (
    <div className="bg-[#001f3f] h-[154px] relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container481 />
      <Container482 />
      <Container485 />
    </div>
  );
}

function Container435() {
  return (
    <div className="flex items-center justify-center max-w-[500px] relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="bg-white content-stretch flex flex-col gap-[24px] items-end overflow-clip relative w-full" data-name="Container">
          <ParagraphContainer1 />
          <ColorCard72 />
          <ColorCard73 />
          <ColorCard74 />
          <ColorCard75 />
          <ColorCard76 />
          <ColorCard77 />
          <ColorCard78 />
          <ColorCard79 />
          <ColorCard80 />
          <ColorCard81 />
        </div>
      </div>
    </div>
  );
}

function Paragraph689() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#576175] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Escala cromática principal del sistema, organizada de 50 a 900.</p>
        <p className="leading-[24px]">Funciona como primitive y sirve como fuente para construir roles de marca y tokens semánticos sin definir todavía un uso específico de interfaz.</p>
      </div>
    </div>
  );
}

function Container486() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="content-stretch flex flex-col gap-[12px] h-[128px] items-start relative w-full" data-name="Container">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[44px] not-italic relative shrink-0 text-[#16181d] text-[40px] whitespace-nowrap">Escala de color primario</p>
          <Paragraph689 />
        </div>
      </div>
    </div>
  );
}

function Section01PrimaryColorScale() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full" data-name="Section01PrimaryColorScale">
      <Container435 />
      <Container486 />
    </div>
  );
}

function Container2() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start justify-end overflow-clip px-[40px] py-[80px] relative w-full" data-name="Container">
          <Section05FunctionalColorScales />
          <Container64 />
          <GradientContent />
          <Container114 />
          <Section04NeutralColorScale />
          <Divider />
          <Section03TertiaryColorScales />
          <Divider1 />
          <Section02SecondaryColorScales />
          <Divider2 />
          <Section01PrimaryColorScale />
        </div>
      </div>
    </div>
  );
}

function GovernanceIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="governance-icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="governance-icon">
          <path d={svgPaths.p20337900} fill="#596879" id="Vector" />
          <path d={svgPaths.p2c33e080} fill="#596879" id="Vector_2" opacity="0.5" />
          <path d={svgPaths.p2f125d00} fill="#596879" id="Vector_3" opacity="0.5" />
          <path d={svgPaths.pcbc6280} fill="#596879" id="Vector_4" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function GovernanceContainer1() {
  return (
    <div className="bg-[#e8edf2] relative rounded-[10px] shrink-0 size-[40px]" data-name="governance-container">
      <div aria-hidden className="absolute border-[#596879] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] py-[1.5px] relative size-full">
        <GovernanceIcon />
      </div>
    </div>
  );
}

function GovernanceEyebrowWrap() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[261.023px]" data-name="governance-eyebrow-wrap">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#596879] text-[14px] top-px tracking-[0.65px] uppercase whitespace-nowrap">GUÍAS DE USO</p>
      </div>
    </div>
  );
}

function GovernanceTitleWrap() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[261.023px]" data-name="governance-title-wrap">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[26.4px] left-0 not-italic text-[#2f3945] text-[24px] top-[0.5px] whitespace-nowrap">Gobernanza del color</p>
      </div>
    </div>
  );
}

function GovernanceContainer2() {
  return (
    <div className="h-[47.898px] relative shrink-0" data-name="governance-container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <GovernanceEyebrowWrap />
        <GovernanceTitleWrap />
      </div>
    </div>
  );
}

function GovernanceHeader() {
  return (
    <div className="content-stretch flex gap-[14px] items-center pb-[29px] relative shrink-0 w-full" data-name="governance-header">
      <div aria-hidden className="absolute border-[rgba(170,182,194,0.35)] border-b border-solid inset-0 pointer-events-none" />
      <GovernanceContainer1 />
      <GovernanceContainer2 />
    </div>
  );
}

function RuleNumberWrap() {
  return (
    <div className="bg-[#596879] relative rounded-[999px] shrink-0 size-[26px]" data-name="rule-number-wrap">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function RuleTextWrap() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="rule-text-wrap">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4d5965] text-[16px] w-full">Las escalas globales funcionan como primitives. No deben asignar por sí mismas intención de marca, componente o estado semántico.</p>
        </div>
      </div>
    </div>
  );
}

function GovernanceRule() {
  return (
    <div className="bg-[#f1f4f7] relative rounded-[12px] shrink-0 w-full" data-name="governance-rule-01">
      <div aria-hidden className="absolute border border-[#dce3ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[21px] py-[19px] relative size-full">
          <RuleNumberWrap />
          <RuleTextWrap />
        </div>
      </div>
    </div>
  );
}

function RuleNumberWrap1() {
  return (
    <div className="bg-[#596879] relative rounded-[999px] shrink-0 size-[26px]" data-name="rule-number-wrap">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function RuleTextWrap1() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="rule-text-wrap">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4d5965] text-[16px] w-full">Los roles de Brand Colors y Semantic Colors deben referenciar estos valores mediante referencias, evitando duplicar valores HEX.</p>
        </div>
      </div>
    </div>
  );
}

function GovernanceRule1() {
  return (
    <div className="bg-[#f1f4f7] relative rounded-[12px] shrink-0 w-full" data-name="governance-rule-02">
      <div aria-hidden className="absolute border border-[#dce3ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[21px] py-[19px] relative size-full">
          <RuleNumberWrap1 />
          <RuleTextWrap1 />
        </div>
      </div>
    </div>
  );
}

function RuleNumberWrap2() {
  return (
    <div className="bg-[#596879] relative rounded-[999px] shrink-0 size-[26px]" data-name="rule-number-wrap">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function RuleTextWrap2() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="rule-text-wrap">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4d5965] text-[16px] w-full">Las familias funcionales se mantienen como primitives mínimos (Soft, Default, Strong); su significado final se define en Semantic Colors.</p>
        </div>
      </div>
    </div>
  );
}

function GovernanceRule2() {
  return (
    <div className="bg-[#f1f4f7] relative rounded-[12px] shrink-0 w-full" data-name="governance-rule-03">
      <div aria-hidden className="absolute border border-[#dce3ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[21px] py-[19px] relative size-full">
          <RuleNumberWrap2 />
          <RuleTextWrap2 />
        </div>
      </div>
    </div>
  );
}

function RuleNumberWrap3() {
  return (
    <div className="bg-[#596879] relative rounded-[999px] shrink-0 size-[26px]" data-name="rule-number-wrap">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function RuleTextWrap3() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="rule-text-wrap">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4d5965] text-[16px] w-full">Los valores de este board constituyen la capa global de color del template y deben mantenerse independientes de la identidad de un cliente específico.</p>
        </div>
      </div>
    </div>
  );
}

function GovernanceRule3() {
  return (
    <div className="bg-[#f1f4f7] relative rounded-[12px] shrink-0 w-full" data-name="governance-rule-04">
      <div aria-hidden className="absolute border border-[#dce3ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[21px] py-[19px] relative size-full">
          <RuleNumberWrap3 />
          <RuleTextWrap3 />
        </div>
      </div>
    </div>
  );
}

function RuleNumberWrap4() {
  return (
    <div className="bg-[#596879] relative rounded-[999px] shrink-0 size-[26px]" data-name="rule-number-wrap">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function RuleTextWrap4() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="rule-text-wrap">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4d5965] text-[16px] w-full">HEX es la fuente de verdad del sistema digital; RGB y HSL pueden utilizarse como referencia técnica cuando sea necesario.</p>
        </div>
      </div>
    </div>
  );
}

function GovernanceRule4() {
  return (
    <div className="bg-[#f1f4f7] relative rounded-[12px] shrink-0 w-full" data-name="governance-rule-05">
      <div aria-hidden className="absolute border border-[#dce3ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[21px] py-[19px] relative size-full">
          <RuleNumberWrap4 />
          <RuleTextWrap4 />
        </div>
      </div>
    </div>
  );
}

function GovernanceContainer() {
  return (
    <div className="bg-[#fafbfc] relative rounded-[24px] shrink-0 w-full" data-name="governance-container">
      <div aria-hidden className="absolute border border-[#b9c3ce] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[18px] items-start p-[32px] relative size-full">
        <GovernanceHeader />
        <GovernanceRule />
        <GovernanceRule1 />
        <GovernanceRule2 />
        <GovernanceRule3 />
        <GovernanceRule4 />
      </div>
    </div>
  );
}

function GovernanceFooter() {
  return (
    <div className="bg-[#d2d8e1] content-stretch flex flex-col items-start px-[40px] py-[48px] relative shrink-0 w-full" data-name="governance-footer">
      <GovernanceContainer />
    </div>
  );
}

function Paragraph690() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-72 relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">v1 · 01 Global Colors · Master Template</p>
    </div>
  );
}

function Paragraph691() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#44515f] text-[12px] whitespace-nowrap">Master</p>
    </div>
  );
}

function Container488() {
  return (
    <div className="content-stretch flex h-[30.218px] items-start overflow-clip px-[16px] py-[8px] relative rounded-[999px] shrink-0 w-[72.721px]" data-name="Container">
      <Paragraph691 />
    </div>
  );
}

function Container489() {
  return <div className="absolute border-[#b9c3ce] border-[0.917px] border-solid h-[30.218px] left-0 rounded-[999px] top-0 w-[72.721px]" data-name="Container" />;
}

function StatusBadge() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[999px] shrink-0" data-name="StatusBadge">
      <Container488 />
      <Container489 />
    </div>
  );
}

function Container487() {
  return (
    <div className="content-stretch flex h-[71.997px] items-center justify-between overflow-clip px-[80px] relative shrink-0 w-full" data-name="Container">
      <Paragraph690 />
      <StatusBadge />
    </div>
  );
}

function Container490() {
  return <div className="absolute border-[#c6d0da] border-solid border-t-[0.917px] h-[71.997px] left-0 top-[-1px] w-[1095.327px]" data-name="Container" />;
}

function MetaFooter() {
  return (
    <div className="bg-[#44515f] border-[#c6d0da] border-solid border-t content-stretch flex flex-col h-[71.997px] items-center justify-between px-[80px] relative shrink-0 w-full" data-name="MetaFooter">
      <Container487 />
      <Container490 />
    </div>
  );
}

export default function MainContent() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Main Content">
      <Container />
      <Container2 />
      <GovernanceFooter />
      <MetaFooter />
    </div>
  );
}