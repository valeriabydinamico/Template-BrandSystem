function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[#16181d] text-[24px] tracking-[-0.24px] w-full">Light Blue</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#576175] text-[16px] w-full">Familia cromática de apoyo que amplía la paleta base. Sus valores funcionan como primitives y pueden asignarse posteriormente a roles de marca, superficies o acentos semánticos.</p>
    </div>
  );
}

function ParagraphContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[24px] relative shrink-0 w-full" data-name="ParagraphContainer">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">50</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.03px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph3 />
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#E5F9FF</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">229, 249, 255</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">194°, 100%, 95%</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[93px]" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1346px]" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/light-blue/50</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.03px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[268px]" data-name="Container">
      <Paragraph9 />
    </div>
  );
}

function ColorCard() {
  return (
    <div className="bg-[#e5f9ff] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container />
      <Container1 />
      <Container4 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">100</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.22px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph10 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph11 />
      <Paragraph12 />
      <Paragraph13 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#CCF1FF</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">204, 241, 255</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">196°, 100%, 90%</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[93px]" data-name="Container">
      <Paragraph14 />
      <Paragraph15 />
      <Paragraph16 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1346px]" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/light-blue/100</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.23px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[276px]" data-name="Container">
      <Paragraph17 />
    </div>
  );
}

function ColorCard1() {
  return (
    <div className="bg-[#ccf1ff] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container5 />
      <Container6 />
      <Container9 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">200</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.24px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph18 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[25px]" data-name="Container">
      <Paragraph19 />
      <Paragraph20 />
      <Paragraph21 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#9AE3FF</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">154, 227, 255</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">198°, 100%, 82%</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[92px]" data-name="Container">
      <Paragraph22 />
      <Paragraph23 />
      <Paragraph24 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1346px]" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/light-blue/200</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.23px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[276px]" data-name="Container">
      <Paragraph25 />
    </div>
  );
}

function ColorCard2() {
  return (
    <div className="bg-[#9ae3ff] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container10 />
      <Container11 />
      <Container14 />
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">300</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.41px] overflow-clip top-[12.01px]" data-name="Container">
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

function Container17() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#65D6FF</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">101, 214, 255</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">196°, 100%, 70%</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[92px]" data-name="Container">
      <Paragraph30 />
      <Paragraph31 />
      <Paragraph32 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1346px]" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/light-blue/300</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.23px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[276px]" data-name="Container">
      <Paragraph33 />
    </div>
  );
}

function ColorCard3() {
  return (
    <div className="bg-[#65d6ff] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container15 />
      <Container16 />
      <Container19 />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">400</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.25px] overflow-clip top-[12.01px]" data-name="Container">
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

function Container22() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#35C7FF</p>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">53, 199, 255</p>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">197°, 100%, 60%</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[92px]" data-name="Container">
      <Paragraph38 />
      <Paragraph39 />
      <Paragraph40 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1346px]" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/light-blue/400</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.23px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[276px]" data-name="Container">
      <Paragraph41 />
    </div>
  );
}

function ColorCard4() {
  return (
    <div className="bg-[#35c7ff] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container20 />
      <Container21 />
      <Container24 />
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">500</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.2px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph42 />
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container27() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#15BFFF</p>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">21, 191, 255</p>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">196°, 100%, 54%</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[93px]" data-name="Container">
      <Paragraph46 />
      <Paragraph47 />
      <Paragraph48 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1346px]" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/light-blue/500</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.23px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[276px]" data-name="Container">
      <Paragraph49 />
    </div>
  );
}

function ColorCard5() {
  return (
    <div className="bg-[#15bfff] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container25 />
      <Container26 />
      <Container29 />
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">600</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.44px] overflow-clip top-[12.01px]" data-name="Container">
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

function Container32() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#00A3E1</p>
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">0, 163, 225</p>
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">197°, 100%, 44%</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[92px]" data-name="Container">
      <Paragraph54 />
      <Paragraph55 />
      <Paragraph56 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1346px]" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/light-blue/600</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.23px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[276px]" data-name="Container">
      <Paragraph57 />
    </div>
  );
}

function ColorCard6() {
  return (
    <div className="bg-[#00a3e1] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container30 />
      <Container31 />
      <Container34 />
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">700</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.1px] overflow-clip top-[12.01px]" data-name="Container">
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

function Container37() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">#007EAE</p>
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">0, 126, 174</p>
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">197°, 100%, 34%</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[92px]" data-name="Container">
      <Paragraph62 />
      <Paragraph63 />
      <Paragraph64 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1346px]" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/light-blue/700</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.23px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[276px]" data-name="Container">
      <Paragraph65 />
    </div>
  );
}

function ColorCard7() {
  return (
    <div className="bg-[#007eae] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container35 />
      <Container36 />
      <Container39 />
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">800</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.44px] overflow-clip top-[12.01px]" data-name="Container">
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

function Container42() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#004A67</p>
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">0, 74, 103</p>
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">197°, 100%, 20%</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[92px]" data-name="Container">
      <Paragraph70 />
      <Paragraph71 />
      <Paragraph72 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1346px]" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/light-blue/800</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.23px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[276px]" data-name="Container">
      <Paragraph73 />
    </div>
  );
}

function ColorCard8() {
  return (
    <div className="bg-[#004a67] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container40 />
      <Container41 />
      <Container44 />
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">900</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[12.44px] overflow-clip top-[12.01px]" data-name="Container">
      <Paragraph74 />
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HEX</p>
    </div>
  );
}

function Paragraph76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">RGB</p>
    </div>
  );
}

function Paragraph77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">HSL</p>
    </div>
  );
}

function Container47() {
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">#002533</p>
    </div>
  );
}

function Paragraph79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">0, 37, 51</p>
    </div>
  );
}

function Paragraph80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">196°, 100%, 10%</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[44px] items-start overflow-clip relative shrink-0 w-[91px]" data-name="Container">
      <Paragraph78 />
      <Paragraph79 />
      <Paragraph80 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[44px] items-start left-[12px] overflow-clip top-[48px] w-[1346px]" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Paragraph81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#16181d] text-[14px] whitespace-nowrap">color/primitive/light-blue/900</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute bg-[#e6eef8] content-stretch flex h-[34px] items-start left-[12.23px] overflow-clip px-[12px] py-[10px] rounded-[6px] top-[107.99px] w-[276px]" data-name="Container">
      <Paragraph81 />
    </div>
  );
}

function ColorCard9() {
  return (
    <div className="bg-[#002533] h-[154px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="ColorCard">
      <Container45 />
      <Container46 />
      <Container49 />
    </div>
  );
}

function Card01LightBlue() {
  return (
    <div className="flex items-center justify-center max-w-[500px] relative shrink-0">
      <div className="-scale-y-100 flex-none">
        <div className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip relative w-[500px]" data-name="Card01LightBlue">
          <ParagraphContainer />
          <ColorCard />
          <ColorCard1 />
          <ColorCard2 />
          <ColorCard3 />
          <ColorCard4 />
          <ColorCard5 />
          <ColorCard6 />
          <ColorCard7 />
          <ColorCard8 />
          <ColorCard9 />
        </div>
      </div>
    </div>
  );
}

function Paragraph82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#576175] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Escalas cromáticas de apoyo que amplían la paleta base del sistema.</p>
        <p className="leading-[24px]">Funcionan como primitives reutilizables y pueden alimentar distintos roles de marca o semánticos según las necesidades de cada proyecto.</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="content-stretch flex flex-col gap-[12px] h-[128px] items-start relative w-full" data-name="Container">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[44px] not-italic relative shrink-0 text-[#16181d] text-[40px] whitespace-nowrap">Escalas de colores secundarios</p>
          <Paragraph82 />
        </div>
      </div>
    </div>
  );
}

export default function Section02SecondaryColorScales() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative size-full" data-name="Section02SecondaryColorScales">
      <Card01LightBlue />
      <Container50 />
    </div>
  );
}