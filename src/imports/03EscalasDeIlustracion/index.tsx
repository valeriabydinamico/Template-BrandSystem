import svgPaths from "./svg-16lx3tsnhw";

function PageDescription() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0" data-name="Page Description">
      <p className="font-['Avenir_Next_LT_Pro:Bold',sans-serif] leading-[48px] relative shrink-0 text-[#004c97] text-[40px] tracking-[-0.4px] whitespace-nowrap">Escalas de ilustración</p>
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#16181d] text-[18px] w-[649px] whitespace-pre-wrap">
        <p className="leading-[26px] mb-0">Rampas cromáticas exclusivas para ilustración, derivadas de la paleta funcional aprobada.</p>
        <p className="leading-[26px] mb-0">​</p>
        <p className="leading-[26px] mb-0">Estas escalas documentan diez niveles por familia: 50, 100, 200, 300, 400, 500, 600, 700, 800 y 900. Cada nivel conserva los valores cromáticos aprobados para garantizar consistencia visual en las ilustraciones del sistema.</p>
        <p className="leading-[26px] mb-0">​</p>
        <p className="leading-[26px]">12 familias cromáticas × 10 niveles + 5 tonos Skin = 125 colores.</p>
      </div>
    </div>
  );
}

function Bg() {
  return (
    <div className="bg-[#004c97] content-stretch flex items-center p-[4px] relative rounded-[16px] shrink-0" data-name="bg">
      <div className="overflow-clip relative shrink-0 size-[48px]" data-name="Assets/Icons">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.86%]">
            <svg className="block size-full" fill="none" height="39.5014" preserveAspectRatio="none" viewBox="0 0 39.5 39.5014" width="39.5">
              <path d={svgPaths.p54d6a00} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header01Titulo() {
  return (
    <div className="bg-[#cce5ff] relative rounded-[40px] shrink-0 w-full" data-name="header-01-titulo">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-between pb-[180px] pt-[80px] px-[80px] relative size-full">
          <PageDescription />
          <div className="bg-white h-[88px] relative rounded-[24px] shrink-0" data-name="Foundations">
            <div aria-hidden className="absolute border-3 border-[#dcdfe4] border-solid inset-0 pointer-events-none rounded-[24px]" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
                <Bg />
                <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.7] not-italic relative shrink-0 text-[#626f86] text-[32px] whitespace-nowrap">Color System</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Seccion00Intro() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip pt-[80px] px-[80px] relative shrink-0 w-full" data-name="seccion-00-intro">
      <Header01Titulo />
    </div>
  );
}

function Description() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic overflow-clip relative shrink-0 text-[#16181d] w-full" data-name="Description">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[40px] whitespace-nowrap">Cálidos</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[16px] w-[min-content]">
        <p className="leading-[normal] mb-0">Rampas cromáticas cálidas para ilustración: rojos, melocotones y mostazas.</p>
        <p className="leading-[normal]">Estos tonos aportan energía, calidez y contraste expresivo a las composiciones ilustrativas del sistema.</p>
      </div>
    </div>
  );
}

function Description1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic overflow-clip pb-[24px] relative shrink-0 w-full" data-name="Description">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#16181d] text-[24px] w-full">Red</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#576175] text-[16px] w-full">Tonos rojos cálidos para ilustraciones que requieren energía, pasión o alerta visual.</p>
    </div>
  );
}

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

function Colourblocks() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#fce8e8] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue />
      <ValoresDeColores />
      <Tags />
    </div>
  );
}

function ColorSwatchValue3() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">100</p>
    </div>
  );
}

function ColorSwatchValue4() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue5() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#FAD1D1</p>
      <p className="relative shrink-0">250, 209, 209</p>
      <p className="relative shrink-0">0°, 80%, 90%</p>
    </div>
  );
}

function ValoresDeColores1() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue4 />
      <ColorSwatchValue5 />
    </div>
  );
}

function Tags1() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/red/100</p>
    </div>
  );
}

function Colourblocks1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#fad1d1] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue3 />
      <ValoresDeColores1 />
      <Tags1 />
    </div>
  );
}

function ColorSwatchValue6() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">200</p>
    </div>
  );
}

function ColorSwatchValue7() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue8() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#F5A3A3</p>
      <p className="relative shrink-0">245, 163, 163</p>
      <p className="relative shrink-0">0°, 80%, 80%</p>
    </div>
  );
}

function ValoresDeColores2() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue7 />
      <ColorSwatchValue8 />
    </div>
  );
}

function Tags2() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/red/200</p>
    </div>
  );
}

function Colourblocks2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#f5a3a3] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue6 />
      <ValoresDeColores2 />
      <Tags2 />
    </div>
  );
}

function ColorSwatchValue9() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">300</p>
    </div>
  );
}

function ColorSwatchValue10() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue11() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#F07575</p>
      <p className="relative shrink-0">240, 117, 117</p>
      <p className="relative shrink-0">0°, 80%, 70%</p>
    </div>
  );
}

function ValoresDeColores3() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue10 />
      <ColorSwatchValue11 />
    </div>
  );
}

function Tags3() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/red/300</p>
    </div>
  );
}

function Colourblocks3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#f07575] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue9 />
      <ValoresDeColores3 />
      <Tags3 />
    </div>
  );
}

function ColorSwatchValue12() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">400</p>
    </div>
  );
}

function ColorSwatchValue13() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue14() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#EB4747</p>
      <p className="relative shrink-0">235, 71, 71</p>
      <p className="relative shrink-0">0°, 80%, 60%</p>
    </div>
  );
}

function ValoresDeColores4() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue13 />
      <ColorSwatchValue14 />
    </div>
  );
}

function Tags4() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/red/400</p>
    </div>
  );
}

function Colourblocks4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#eb4747] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue12 />
      <ValoresDeColores4 />
      <Tags4 />
    </div>
  );
}

function ColorSwatchValue15() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">500</p>
    </div>
  );
}

function ColorSwatchValue16() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue17() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#E61919</p>
      <p className="relative shrink-0">230, 25, 25</p>
      <p className="relative shrink-0">0°, 80%, 50%</p>
    </div>
  );
}

function ValoresDeColores5() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue16 />
      <ColorSwatchValue17 />
    </div>
  );
}

function Tags5() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/red/500</p>
    </div>
  );
}

function Colourblocks5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#e61919] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue15 />
      <ValoresDeColores5 />
      <Tags5 />
    </div>
  );
}

function ColorSwatchValue18() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">600</p>
    </div>
  );
}

function ColorSwatchValue19() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue20() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#B81414</p>
      <p className="relative shrink-0">184, 20, 20</p>
      <p className="relative shrink-0">0°, 80%, 40%</p>
    </div>
  );
}

function ValoresDeColores6() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue19 />
      <ColorSwatchValue20 />
    </div>
  );
}

function Tags6() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/red/600</p>
    </div>
  );
}

function Colourblocks6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#b81414] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue18 />
      <ValoresDeColores6 />
      <Tags6 />
    </div>
  );
}

function ColorSwatchValue21() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">700</p>
    </div>
  );
}

function ColorSwatchValue22() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue23() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#8A0F0F</p>
      <p className="relative shrink-0">138, 15, 15</p>
      <p className="relative shrink-0">0°, 80%, 30%</p>
    </div>
  );
}

function ValoresDeColores7() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue22 />
      <ColorSwatchValue23 />
    </div>
  );
}

function Tags7() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/red/700</p>
    </div>
  );
}

function Colourblocks7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#8a0f0f] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue21 />
      <ValoresDeColores7 />
      <Tags7 />
    </div>
  );
}

function ColorSwatchValue24() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">800</p>
    </div>
  );
}

function ColorSwatchValue25() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue26() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#5C0A0A</p>
      <p className="relative shrink-0">92, 10, 10</p>
      <p className="relative shrink-0">0°, 80%, 20%</p>
    </div>
  );
}

function ValoresDeColores8() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue25 />
      <ColorSwatchValue26 />
    </div>
  );
}

function Tags8() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/red/800</p>
    </div>
  );
}

function Colourblocks8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#5c0a0a] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue24 />
      <ValoresDeColores8 />
      <Tags8 />
    </div>
  );
}

function ColorSwatchValue27() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">900</p>
    </div>
  );
}

function ColorSwatchValue28() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue29() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#2E0505</p>
      <p className="relative shrink-0">46, 5, 5</p>
      <p className="relative shrink-0">0°, 80%, 10%</p>
    </div>
  );
}

function ValoresDeColores9() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue28 />
      <ColorSwatchValue29 />
    </div>
  );
}

function Tags9() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/red/900</p>
    </div>
  );
}

function Colourblocks9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#2e0505] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue27 />
      <ValoresDeColores9 />
      <Tags9 />
    </div>
  );
}

function CardRed() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[500px]" data-name="card-red">
      <Description1 />
      <Colourblocks />
      <Colourblocks1 />
      <Colourblocks2 />
      <Colourblocks3 />
      <Colourblocks4 />
      <Colourblocks5 />
      <Colourblocks6 />
      <Colourblocks7 />
      <Colourblocks8 />
      <Colourblocks9 />
    </div>
  );
}

function Description2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic overflow-clip pb-[24px] relative shrink-0 w-full" data-name="Description">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#16181d] text-[24px] w-full">Peach</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#576175] text-[16px] w-full">Tonos melocotón suaves para ilustraciones que comunican cercanía, calidez humana y ternura.</p>
    </div>
  );
}

function ColorSwatchValue30() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">50</p>
    </div>
  );
}

function ColorSwatchValue31() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue32() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#FCEEE8</p>
      <p className="relative shrink-0">252, 238, 232</p>
      <p className="relative shrink-0">18°, 77%, 95%</p>
    </div>
  );
}

function ValoresDeColores10() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue31 />
      <ColorSwatchValue32 />
    </div>
  );
}

function Tags10() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/peach/50</p>
    </div>
  );
}

function Colourblocks10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#fceee8] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue30 />
      <ValoresDeColores10 />
      <Tags10 />
    </div>
  );
}

function ColorSwatchValue33() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">100</p>
    </div>
  );
}

function ColorSwatchValue34() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue35() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#FADDD1</p>
      <p className="relative shrink-0">250, 221, 209</p>
      <p className="relative shrink-0">18°, 80%, 90%</p>
    </div>
  );
}

function ValoresDeColores11() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue34 />
      <ColorSwatchValue35 />
    </div>
  );
}

function Tags11() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/peach/100</p>
    </div>
  );
}

function Colourblocks11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#faddd1] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue33 />
      <ValoresDeColores11 />
      <Tags11 />
    </div>
  );
}

function ColorSwatchValue36() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">200</p>
    </div>
  );
}

function ColorSwatchValue37() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue38() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#F5BCA3</p>
      <p className="relative shrink-0">245, 188, 163</p>
      <p className="relative shrink-0">18°, 80%, 80%</p>
    </div>
  );
}

function ValoresDeColores12() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue37 />
      <ColorSwatchValue38 />
    </div>
  );
}

function Tags12() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/peach/200</p>
    </div>
  );
}

function Colourblocks12() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#f5bca3] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue36 />
      <ValoresDeColores12 />
      <Tags12 />
    </div>
  );
}

function ColorSwatchValue39() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">300</p>
    </div>
  );
}

function ColorSwatchValue40() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue41() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#F09A75</p>
      <p className="relative shrink-0">240, 154, 117</p>
      <p className="relative shrink-0">18°, 80%, 70%</p>
    </div>
  );
}

function ValoresDeColores13() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue40 />
      <ColorSwatchValue41 />
    </div>
  );
}

function Tags13() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/peach/300</p>
    </div>
  );
}

function Colourblocks13() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#f09a75] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue39 />
      <ValoresDeColores13 />
      <Tags13 />
    </div>
  );
}

function ColorSwatchValue42() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">400</p>
    </div>
  );
}

function ColorSwatchValue43() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue44() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#EB7847</p>
      <p className="relative shrink-0">235, 120, 71</p>
      <p className="relative shrink-0">18°, 80%, 60%</p>
    </div>
  );
}

function ValoresDeColores14() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue43 />
      <ColorSwatchValue44 />
    </div>
  );
}

function Tags14() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/peach/400</p>
    </div>
  );
}

function Colourblocks14() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#eb7847] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue42 />
      <ValoresDeColores14 />
      <Tags14 />
    </div>
  );
}

function ColorSwatchValue45() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">500</p>
    </div>
  );
}

function ColorSwatchValue46() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue47() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#E65719</p>
      <p className="relative shrink-0">230, 87, 25</p>
      <p className="relative shrink-0">18°, 80%, 50%</p>
    </div>
  );
}

function ValoresDeColores15() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue46 />
      <ColorSwatchValue47 />
    </div>
  );
}

function Tags15() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/peach/500</p>
    </div>
  );
}

function Colourblocks15() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#e65719] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue45 />
      <ValoresDeColores15 />
      <Tags15 />
    </div>
  );
}

function ColorSwatchValue48() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">600</p>
    </div>
  );
}

function ColorSwatchValue49() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue50() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#B84614</p>
      <p className="relative shrink-0">184, 70, 20</p>
      <p className="relative shrink-0">18°, 80%, 40%</p>
    </div>
  );
}

function ValoresDeColores16() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue49 />
      <ColorSwatchValue50 />
    </div>
  );
}

function Tags16() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/peach/600</p>
    </div>
  );
}

function Colourblocks16() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#b84614] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue48 />
      <ValoresDeColores16 />
      <Tags16 />
    </div>
  );
}

function ColorSwatchValue51() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">700</p>
    </div>
  );
}

function ColorSwatchValue52() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue53() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#8A340F</p>
      <p className="relative shrink-0">138, 52, 15</p>
      <p className="relative shrink-0">18°, 80%, 30%</p>
    </div>
  );
}

function ValoresDeColores17() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue52 />
      <ColorSwatchValue53 />
    </div>
  );
}

function Tags17() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/peach/700</p>
    </div>
  );
}

function Colourblocks17() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#8a340f] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue51 />
      <ValoresDeColores17 />
      <Tags17 />
    </div>
  );
}

function ColorSwatchValue54() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">800</p>
    </div>
  );
}

function ColorSwatchValue55() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue56() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#5C230A</p>
      <p className="relative shrink-0">92, 35, 10</p>
      <p className="relative shrink-0">18°, 80%, 20%</p>
    </div>
  );
}

function ValoresDeColores18() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue55 />
      <ColorSwatchValue56 />
    </div>
  );
}

function Tags18() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/peach/800</p>
    </div>
  );
}

function Colourblocks18() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#5c230a] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue54 />
      <ValoresDeColores18 />
      <Tags18 />
    </div>
  );
}

function ColorSwatchValue57() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">900</p>
    </div>
  );
}

function ColorSwatchValue58() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue59() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#2E1105</p>
      <p className="relative shrink-0">46, 17, 5</p>
      <p className="relative shrink-0">18°, 80%, 10%</p>
    </div>
  );
}

function ValoresDeColores19() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue58 />
      <ColorSwatchValue59 />
    </div>
  );
}

function Tags19() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/peach/900</p>
    </div>
  );
}

function Colourblocks19() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#2e1105] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue57 />
      <ValoresDeColores19 />
      <Tags19 />
    </div>
  );
}

function CardPeach() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[500px]" data-name="card-peach">
      <Description2 />
      <Colourblocks10 />
      <Colourblocks11 />
      <Colourblocks12 />
      <Colourblocks13 />
      <Colourblocks14 />
      <Colourblocks15 />
      <Colourblocks16 />
      <Colourblocks17 />
      <Colourblocks18 />
      <Colourblocks19 />
    </div>
  );
}

function Description3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic overflow-clip pb-[24px] relative shrink-0 w-full" data-name="Description">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#16181d] text-[24px] w-full">Mustard</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#576175] text-[16px] w-full">Tonos mostaza para ilustraciones que evocan tradición, riqueza y contraste terroso.</p>
    </div>
  );
}

function ColorSwatchValue60() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">50</p>
    </div>
  );
}

function ColorSwatchValue61() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue62() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#FDF4E8</p>
      <p className="relative shrink-0">253, 244, 232</p>
      <p className="relative shrink-0">34°, 84%, 95%</p>
    </div>
  );
}

function ValoresDeColores20() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue61 />
      <ColorSwatchValue62 />
    </div>
  );
}

function Tags20() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/mustard/50</p>
    </div>
  );
}

function Colourblocks20() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#fdf4e8] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue60 />
      <ValoresDeColores20 />
      <Tags20 />
    </div>
  );
}

function ColorSwatchValue63() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">100</p>
    </div>
  );
}

function ColorSwatchValue64() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue65() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#FAEAD1</p>
      <p className="relative shrink-0">250, 234, 209</p>
      <p className="relative shrink-0">37°, 80%, 90%</p>
    </div>
  );
}

function ValoresDeColores21() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue64 />
      <ColorSwatchValue65 />
    </div>
  );
}

function Tags21() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/mustard/100</p>
    </div>
  );
}

function Colourblocks21() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#faead1] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue63 />
      <ValoresDeColores21 />
      <Tags21 />
    </div>
  );
}

function ColorSwatchValue66() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">200</p>
    </div>
  );
}

function ColorSwatchValue67() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue68() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#F6D5A2</p>
      <p className="relative shrink-0">246, 213, 162</p>
      <p className="relative shrink-0">36°, 82%, 80%</p>
    </div>
  );
}

function ValoresDeColores22() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue67 />
      <ColorSwatchValue68 />
    </div>
  );
}

function Tags22() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/mustard/200</p>
    </div>
  );
}

function Colourblocks22() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#f6d5a2] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue66 />
      <ValoresDeColores22 />
      <Tags22 />
    </div>
  );
}

function ColorSwatchValue69() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">300</p>
    </div>
  );
}

function ColorSwatchValue70() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue71() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#F1BF74</p>
      <p className="relative shrink-0">241, 191, 116</p>
      <p className="relative shrink-0">36°, 82%, 70%</p>
    </div>
  );
}

function ValoresDeColores23() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue70 />
      <ColorSwatchValue71 />
    </div>
  );
}

function Tags23() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/mustard/300</p>
    </div>
  );
}

function Colourblocks23() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#f1bf74] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue69 />
      <ValoresDeColores23 />
      <Tags23 />
    </div>
  );
}

function ColorSwatchValue72() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">400</p>
    </div>
  );
}

function ColorSwatchValue73() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue74() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#EDAA45</p>
      <p className="relative shrink-0">237, 170, 69</p>
      <p className="relative shrink-0">36°, 82%, 60%</p>
    </div>
  );
}

function ValoresDeColores24() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue73 />
      <ColorSwatchValue74 />
    </div>
  );
}

function Tags24() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/mustard/400</p>
    </div>
  );
}

function Colourblocks24() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#edaa45] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue72 />
      <ValoresDeColores24 />
      <Tags24 />
    </div>
  );
}

function ColorSwatchValue75() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">500</p>
    </div>
  );
}

function ColorSwatchValue76() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue77() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#E89517</p>
      <p className="relative shrink-0">232, 149, 23</p>
      <p className="relative shrink-0">36°, 82%, 50%</p>
    </div>
  );
}

function ValoresDeColores25() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue76 />
      <ColorSwatchValue77 />
    </div>
  );
}

function Tags25() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/mustard/500</p>
    </div>
  );
}

function Colourblocks25() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#e89517] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue75 />
      <ValoresDeColores25 />
      <Tags25 />
    </div>
  );
}

function ColorSwatchValue78() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">600</p>
    </div>
  );
}

function ColorSwatchValue79() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue80() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#BA7712</p>
      <p className="relative shrink-0">186, 119, 18</p>
      <p className="relative shrink-0">36°, 82%, 40%</p>
    </div>
  );
}

function ValoresDeColores26() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue79 />
      <ColorSwatchValue80 />
    </div>
  );
}

function Tags26() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/mustard/600</p>
    </div>
  );
}

function Colourblocks26() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#ba7712] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue78 />
      <ValoresDeColores26 />
      <Tags26 />
    </div>
  );
}

function ColorSwatchValue81() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">700</p>
    </div>
  );
}

function ColorSwatchValue82() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue83() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#8B590E</p>
      <p className="relative shrink-0">139, 89, 14</p>
      <p className="relative shrink-0">36°, 82%, 30%</p>
    </div>
  );
}

function ValoresDeColores27() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue82 />
      <ColorSwatchValue83 />
    </div>
  );
}

function Tags27() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/mustard/700</p>
    </div>
  );
}

function Colourblocks27() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#8b590e] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue81 />
      <ValoresDeColores27 />
      <Tags27 />
    </div>
  );
}

function ColorSwatchValue84() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">800</p>
    </div>
  );
}

function ColorSwatchValue85() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue86() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#5D3C09</p>
      <p className="relative shrink-0">93, 60, 9</p>
      <p className="relative shrink-0">36°, 82%, 20%</p>
    </div>
  );
}

function ValoresDeColores28() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue85 />
      <ColorSwatchValue86 />
    </div>
  );
}

function Tags28() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/mustard/800</p>
    </div>
  );
}

function Colourblocks28() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#5d3c09] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue84 />
      <ValoresDeColores28 />
      <Tags28 />
    </div>
  );
}

function ColorSwatchValue87() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">900</p>
    </div>
  );
}

function ColorSwatchValue88() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue89() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#2E1E05</p>
      <p className="relative shrink-0">46, 30, 5</p>
      <p className="relative shrink-0">37°, 80%, 10%</p>
    </div>
  );
}

function ValoresDeColores29() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue88 />
      <ColorSwatchValue89 />
    </div>
  );
}

function Tags29() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/mustard/900</p>
    </div>
  );
}

function Colourblocks29() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#2e1e05] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue87 />
      <ValoresDeColores29 />
      <Tags29 />
    </div>
  );
}

function CardMustard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[500px]" data-name="card-mustard">
      <Description3 />
      <Colourblocks20 />
      <Colourblocks21 />
      <Colourblocks22 />
      <Colourblocks23 />
      <Colourblocks24 />
      <Colourblocks25 />
      <Colourblocks26 />
      <Colourblocks27 />
      <Colourblocks28 />
      <Colourblocks29 />
    </div>
  );
}

function Grupo01ColourBlocks() {
  return (
    <div className="content-stretch flex gap-[30px] items-start overflow-clip relative shrink-0 w-full" data-name="grupo-01-colour-blocks">
      <CardRed />
      <CardPeach />
      <CardMustard />
    </div>
  );
}

function Seccion01Calidos() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start overflow-clip relative shrink-0 w-full" data-name="seccion-01-calidos">
      <Description />
      <Grupo01ColourBlocks />
    </div>
  );
}

function Divider() {
  return <div className="bg-[#eef2f8] h-px relative shrink-0 w-full" data-name="divider-01" />;
}

function Description4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic overflow-clip relative shrink-0 text-[#16181d] w-full" data-name="Description">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[40px] whitespace-nowrap">Naturales</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[16px] w-[min-content]">
        <p className="leading-[normal] mb-0">Rampas cromáticas naturales para ilustración: amarillos, verdes y bosque.</p>
        <p className="leading-[normal]">Estos tonos refuerzan narrativas de crecimiento, frescura y conexión con la naturaleza.</p>
      </div>
    </div>
  );
}

function Description5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic overflow-clip pb-[24px] relative shrink-0 w-full" data-name="Description">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#16181d] text-[24px] w-full">Yellow</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#576175] text-[16px] w-full">Tonos amarillos vibrantes para ilustraciones que transmiten optimismo, luz y atención.</p>
    </div>
  );
}

function ColorSwatchValue90() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">50</p>
    </div>
  );
}

function ColorSwatchValue91() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue92() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#FFF6E5</p>
      <p className="relative shrink-0">255, 246, 229</p>
      <p className="relative shrink-0">39°, 100%, 95%</p>
    </div>
  );
}

function ValoresDeColores30() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue91 />
      <ColorSwatchValue92 />
    </div>
  );
}

function Tags30() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/yellow/50</p>
    </div>
  );
}

function Colourblocks30() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#fff6e5] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue90 />
      <ValoresDeColores30 />
      <Tags30 />
    </div>
  );
}

function ColorSwatchValue93() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">100</p>
    </div>
  );
}

function ColorSwatchValue94() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue95() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#FFEECC</p>
      <p className="relative shrink-0">255, 238, 204</p>
      <p className="relative shrink-0">40°, 100%, 90%</p>
    </div>
  );
}

function ValoresDeColores31() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue94 />
      <ColorSwatchValue95 />
    </div>
  );
}

function Tags31() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/yellow/100</p>
    </div>
  );
}

function Colourblocks31() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#fec] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue93 />
      <ValoresDeColores31 />
      <Tags31 />
    </div>
  );
}

function ColorSwatchValue96() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">200</p>
    </div>
  );
}

function ColorSwatchValue97() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue98() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#FFDD99</p>
      <p className="relative shrink-0">255, 221, 153</p>
      <p className="relative shrink-0">40°, 100%, 80%</p>
    </div>
  );
}

function ValoresDeColores32() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue97 />
      <ColorSwatchValue98 />
    </div>
  );
}

function Tags32() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/yellow/200</p>
    </div>
  );
}

function Colourblocks32() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#fd9] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue96 />
      <ValoresDeColores32 />
      <Tags32 />
    </div>
  );
}

function ColorSwatchValue99() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">300</p>
    </div>
  );
}

function ColorSwatchValue100() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue101() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#FFCC66</p>
      <p className="relative shrink-0">255, 204, 102</p>
      <p className="relative shrink-0">40°, 100%, 70%</p>
    </div>
  );
}

function ValoresDeColores33() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue100 />
      <ColorSwatchValue101 />
    </div>
  );
}

function Tags33() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/yellow/300</p>
    </div>
  );
}

function Colourblocks33() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#fc6] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue99 />
      <ValoresDeColores33 />
      <Tags33 />
    </div>
  );
}

function ColorSwatchValue102() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">400</p>
    </div>
  );
}

function ColorSwatchValue103() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue104() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#FFBB33</p>
      <p className="relative shrink-0">255, 187, 51</p>
      <p className="relative shrink-0">40°, 100%, 60%</p>
    </div>
  );
}

function ValoresDeColores34() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue103 />
      <ColorSwatchValue104 />
    </div>
  );
}

function Tags34() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/yellow/400</p>
    </div>
  );
}

function Colourblocks34() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#fb3] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue102 />
      <ValoresDeColores34 />
      <Tags34 />
    </div>
  );
}

function ColorSwatchValue105() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">500</p>
    </div>
  );
}

function ColorSwatchValue106() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue107() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#FFAA00</p>
      <p className="relative shrink-0">255, 170, 0</p>
      <p className="relative shrink-0">40°, 100%, 50%</p>
    </div>
  );
}

function ValoresDeColores35() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue106 />
      <ColorSwatchValue107 />
    </div>
  );
}

function Tags35() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/yellow/500</p>
    </div>
  );
}

function Colourblocks35() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#fa0] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue105 />
      <ValoresDeColores35 />
      <Tags35 />
    </div>
  );
}

function ColorSwatchValue108() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">600</p>
    </div>
  );
}

function ColorSwatchValue109() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue110() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#CC8800</p>
      <p className="relative shrink-0">204, 136, 0</p>
      <p className="relative shrink-0">40°, 100%, 40%</p>
    </div>
  );
}

function ValoresDeColores36() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue109 />
      <ColorSwatchValue110 />
    </div>
  );
}

function Tags36() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/yellow/600</p>
    </div>
  );
}

function Colourblocks36() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#c80] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue108 />
      <ValoresDeColores36 />
      <Tags36 />
    </div>
  );
}

function ColorSwatchValue111() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">700</p>
    </div>
  );
}

function ColorSwatchValue112() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue113() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#996600</p>
      <p className="relative shrink-0">153, 102, 0</p>
      <p className="relative shrink-0">40°, 100%, 30%</p>
    </div>
  );
}

function ValoresDeColores37() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue112 />
      <ColorSwatchValue113 />
    </div>
  );
}

function Tags37() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/yellow/700</p>
    </div>
  );
}

function Colourblocks37() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#960] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue111 />
      <ValoresDeColores37 />
      <Tags37 />
    </div>
  );
}

function ColorSwatchValue114() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">800</p>
    </div>
  );
}

function ColorSwatchValue115() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue116() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#664400</p>
      <p className="relative shrink-0">102, 68, 0</p>
      <p className="relative shrink-0">40°, 100%, 20%</p>
    </div>
  );
}

function ValoresDeColores38() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue115 />
      <ColorSwatchValue116 />
    </div>
  );
}

function Tags38() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/yellow/800</p>
    </div>
  );
}

function Colourblocks38() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#640] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue114 />
      <ValoresDeColores38 />
      <Tags38 />
    </div>
  );
}

function ColorSwatchValue117() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">900</p>
    </div>
  );
}

function ColorSwatchValue118() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue119() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#332200</p>
      <p className="relative shrink-0">51, 34, 0</p>
      <p className="relative shrink-0">40°, 100%, 10%</p>
    </div>
  );
}

function ValoresDeColores39() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue118 />
      <ColorSwatchValue119 />
    </div>
  );
}

function Tags39() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/yellow/900</p>
    </div>
  );
}

function Colourblocks39() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#320] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue117 />
      <ValoresDeColores39 />
      <Tags39 />
    </div>
  );
}

function CardYellow() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[500px]" data-name="card-yellow">
      <Description5 />
      <Colourblocks30 />
      <Colourblocks31 />
      <Colourblocks32 />
      <Colourblocks33 />
      <Colourblocks34 />
      <Colourblocks35 />
      <Colourblocks36 />
      <Colourblocks37 />
      <Colourblocks38 />
      <Colourblocks39 />
    </div>
  );
}

function Description6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic overflow-clip pb-[24px] relative shrink-0 w-full" data-name="Description">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#16181d] text-[24px] w-full">Green</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#576175] text-[16px] w-full">Tonos verdes para ilustraciones que comunican crecimiento, salud y equilibrio natural.</p>
    </div>
  );
}

function ColorSwatchValue120() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">50</p>
    </div>
  );
}

function ColorSwatchValue121() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue122() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#ECF8F1</p>
      <p className="relative shrink-0">236, 248, 241</p>
      <p className="relative shrink-0">145°, 46%, 95%</p>
    </div>
  );
}

function ValoresDeColores40() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue121 />
      <ColorSwatchValue122 />
    </div>
  );
}

function Tags40() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/green/50</p>
    </div>
  );
}

function Colourblocks40() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#ecf8f1] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue120 />
      <ValoresDeColores40 />
      <Tags40 />
    </div>
  );
}

function ColorSwatchValue123() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">100</p>
    </div>
  );
}

function ColorSwatchValue124() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue125() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#D9F2E3</p>
      <p className="relative shrink-0">217, 242, 227</p>
      <p className="relative shrink-0">144°, 49%, 90%</p>
    </div>
  );
}

function ValoresDeColores41() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue124 />
      <ColorSwatchValue125 />
    </div>
  );
}

function Tags41() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/green/100</p>
    </div>
  );
}

function Colourblocks41() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#d9f2e3] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue123 />
      <ValoresDeColores41 />
      <Tags41 />
    </div>
  );
}

function ColorSwatchValue126() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">200</p>
    </div>
  );
}

function ColorSwatchValue127() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue128() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#B3E5C8</p>
      <p className="relative shrink-0">179, 229, 200</p>
      <p className="relative shrink-0">145°, 49%, 80%</p>
    </div>
  );
}

function ValoresDeColores42() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue127 />
      <ColorSwatchValue128 />
    </div>
  );
}

function Tags42() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/green/200</p>
    </div>
  );
}

function Colourblocks42() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#b3e5c8] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue126 />
      <ValoresDeColores42 />
      <Tags42 />
    </div>
  );
}

function ColorSwatchValue129() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">300</p>
    </div>
  );
}

function ColorSwatchValue130() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue131() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#8CD9AC</p>
      <p className="relative shrink-0">140, 217, 172</p>
      <p className="relative shrink-0">145°, 50%, 70%</p>
    </div>
  );
}

function ValoresDeColores43() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue130 />
      <ColorSwatchValue131 />
    </div>
  );
}

function Tags43() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/green/300</p>
    </div>
  );
}

function Colourblocks43() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#8cd9ac] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue129 />
      <ValoresDeColores43 />
      <Tags43 />
    </div>
  );
}

function ColorSwatchValue132() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">400</p>
    </div>
  );
}

function ColorSwatchValue133() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue134() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#66CC91</p>
      <p className="relative shrink-0">102, 204, 145</p>
      <p className="relative shrink-0">145°, 50%, 60%</p>
    </div>
  );
}

function ValoresDeColores44() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue133 />
      <ColorSwatchValue134 />
    </div>
  );
}

function Tags44() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/green/400</p>
    </div>
  );
}

function Colourblocks44() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#66cc91] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue132 />
      <ValoresDeColores44 />
      <Tags44 />
    </div>
  );
}

function ColorSwatchValue135() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">500</p>
    </div>
  );
}

function ColorSwatchValue136() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue137() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#40BF75</p>
      <p className="relative shrink-0">64, 191, 117</p>
      <p className="relative shrink-0">145°, 50%, 50%</p>
    </div>
  );
}

function ValoresDeColores45() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue136 />
      <ColorSwatchValue137 />
    </div>
  );
}

function Tags45() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/green/500</p>
    </div>
  );
}

function Colourblocks45() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#40bf75] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue135 />
      <ValoresDeColores45 />
      <Tags45 />
    </div>
  );
}

function ColorSwatchValue138() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">600</p>
    </div>
  );
}

function ColorSwatchValue139() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue140() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#33995D</p>
      <p className="relative shrink-0">51, 153, 93</p>
      <p className="relative shrink-0">145°, 50%, 40%</p>
    </div>
  );
}

function ValoresDeColores46() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue139 />
      <ColorSwatchValue140 />
    </div>
  );
}

function Tags46() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/green/600</p>
    </div>
  );
}

function Colourblocks46() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#33995d] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue138 />
      <ValoresDeColores46 />
      <Tags46 />
    </div>
  );
}

function ColorSwatchValue141() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">700</p>
    </div>
  );
}

function ColorSwatchValue142() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue143() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#267346</p>
      <p className="relative shrink-0">38, 115, 70</p>
      <p className="relative shrink-0">145°, 50%, 30%</p>
    </div>
  );
}

function ValoresDeColores47() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue142 />
      <ColorSwatchValue143 />
    </div>
  );
}

function Tags47() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/green/700</p>
    </div>
  );
}

function Colourblocks47() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#267346] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue141 />
      <ValoresDeColores47 />
      <Tags47 />
    </div>
  );
}

function ColorSwatchValue144() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">800</p>
    </div>
  );
}

function ColorSwatchValue145() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue146() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#1A4C2F</p>
      <p className="relative shrink-0">26, 76, 47</p>
      <p className="relative shrink-0">145°, 49%, 20%</p>
    </div>
  );
}

function ValoresDeColores48() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue145 />
      <ColorSwatchValue146 />
    </div>
  );
}

function Tags48() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/green/800</p>
    </div>
  );
}

function Colourblocks48() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#1a4c2f] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue144 />
      <ValoresDeColores48 />
      <Tags48 />
    </div>
  );
}

function ColorSwatchValue147() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">900</p>
    </div>
  );
}

function ColorSwatchValue148() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue149() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#0D2617</p>
      <p className="relative shrink-0">13, 38, 23</p>
      <p className="relative shrink-0">144°, 49%, 10%</p>
    </div>
  );
}

function ValoresDeColores49() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue148 />
      <ColorSwatchValue149 />
    </div>
  );
}

function Tags49() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/green/900</p>
    </div>
  );
}

function Colourblocks49() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#0d2617] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue147 />
      <ValoresDeColores49 />
      <Tags49 />
    </div>
  );
}

function CardGreen() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[500px]" data-name="card-green">
      <Description6 />
      <Colourblocks40 />
      <Colourblocks41 />
      <Colourblocks42 />
      <Colourblocks43 />
      <Colourblocks44 />
      <Colourblocks45 />
      <Colourblocks46 />
      <Colourblocks47 />
      <Colourblocks48 />
      <Colourblocks49 />
    </div>
  );
}

function Description7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic overflow-clip pb-[24px] relative shrink-0 w-full" data-name="Description">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#16181d] text-[24px] w-full">Forest</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#576175] text-[16px] w-full">Tonos bosque profundos para ilustraciones que evocan estabilidad, naturaleza y madurez.</p>
    </div>
  );
}

function ColorSwatchValue150() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">50</p>
    </div>
  );
}

function ColorSwatchValue151() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue152() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#EFF6F3</p>
      <p className="relative shrink-0">239, 246, 243</p>
      <p className="relative shrink-0">154°, 28%, 95%</p>
    </div>
  );
}

function ValoresDeColores50() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue151 />
      <ColorSwatchValue152 />
    </div>
  );
}

function Tags50() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/forest/50</p>
    </div>
  );
}

function Colourblocks50() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#eff6f3] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue150 />
      <ValoresDeColores50 />
      <Tags50 />
    </div>
  );
}

function ColorSwatchValue153() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">100</p>
    </div>
  );
}

function ColorSwatchValue154() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue155() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#DFECE7</p>
      <p className="relative shrink-0">223, 236, 231</p>
      <p className="relative shrink-0">157°, 25%, 90%</p>
    </div>
  );
}

function ValoresDeColores51() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue154 />
      <ColorSwatchValue155 />
    </div>
  );
}

function Tags51() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/forest/100</p>
    </div>
  );
}

function Colourblocks51() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#dfece7] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue153 />
      <ValoresDeColores51 />
      <Tags51 />
    </div>
  );
}

function ColorSwatchValue156() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">200</p>
    </div>
  );
}

function ColorSwatchValue157() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue158() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#BFD9CE</p>
      <p className="relative shrink-0">191, 217, 206</p>
      <p className="relative shrink-0">155°, 25%, 80%</p>
    </div>
  );
}

function ValoresDeColores52() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue157 />
      <ColorSwatchValue158 />
    </div>
  );
}

function Tags52() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/forest/200</p>
    </div>
  );
}

function Colourblocks52() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#bfd9ce] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue156 />
      <ValoresDeColores52 />
      <Tags52 />
    </div>
  );
}

function ColorSwatchValue159() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">300</p>
    </div>
  );
}

function ColorSwatchValue160() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue161() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#9EC7B6</p>
      <p className="relative shrink-0">158, 199, 182</p>
      <p className="relative shrink-0">155°, 27%, 70%</p>
    </div>
  );
}

function ValoresDeColores53() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-black w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue160 />
      <ColorSwatchValue161 />
    </div>
  );
}

function Tags53() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/forest/300</p>
    </div>
  );
}

function Colourblocks53() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#9ec7b6] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue159 />
      <ValoresDeColores53 />
      <Tags53 />
    </div>
  );
}

function ColorSwatchValue162() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">400</p>
    </div>
  );
}

function ColorSwatchValue163() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue164() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#7EB49E</p>
      <p className="relative shrink-0">126, 180, 158</p>
      <p className="relative shrink-0">156°, 26%, 60%</p>
    </div>
  );
}

function ValoresDeColores54() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue163 />
      <ColorSwatchValue164 />
    </div>
  );
}

function Tags54() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/forest/400</p>
    </div>
  );
}

function Colourblocks54() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#7eb49e] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue162 />
      <ValoresDeColores54 />
      <Tags54 />
    </div>
  );
}

function ColorSwatchValue165() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">500</p>
    </div>
  );
}

function ColorSwatchValue166() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue167() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#5EA185</p>
      <p className="relative shrink-0">94, 161, 133</p>
      <p className="relative shrink-0">155°, 26%, 50%</p>
    </div>
  );
}

function ValoresDeColores55() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue166 />
      <ColorSwatchValue167 />
    </div>
  );
}

function Tags55() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/forest/500</p>
    </div>
  );
}

function Colourblocks55() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#5ea185] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue165 />
      <ValoresDeColores55 />
      <Tags55 />
    </div>
  );
}

function ColorSwatchValue168() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">600</p>
    </div>
  );
}

function ColorSwatchValue169() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue170() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#4B816B</p>
      <p className="relative shrink-0">75, 129, 107</p>
      <p className="relative shrink-0">156°, 26%, 40%</p>
    </div>
  );
}

function ValoresDeColores56() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue169 />
      <ColorSwatchValue170 />
    </div>
  );
}

function Tags56() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/forest/600</p>
    </div>
  );
}

function Colourblocks56() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#4b816b] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue168 />
      <ValoresDeColores56 />
      <Tags56 />
    </div>
  );
}

function ColorSwatchValue171() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">700</p>
    </div>
  );
}

function ColorSwatchValue172() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue173() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#386150</p>
      <p className="relative shrink-0">56, 97, 80</p>
      <p className="relative shrink-0">155°, 27%, 30%</p>
    </div>
  );
}

function ValoresDeColores57() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue172 />
      <ColorSwatchValue173 />
    </div>
  );
}

function Tags57() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/forest/700</p>
    </div>
  );
}

function Colourblocks57() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#386150] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue171 />
      <ValoresDeColores57 />
      <Tags57 />
    </div>
  );
}

function ColorSwatchValue174() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">800</p>
    </div>
  );
}

function ColorSwatchValue175() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue176() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#264035</p>
      <p className="relative shrink-0">38, 64, 53</p>
      <p className="relative shrink-0">155°, 25%, 20%</p>
    </div>
  );
}

function ValoresDeColores58() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue175 />
      <ColorSwatchValue176 />
    </div>
  );
}

function Tags58() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/forest/800</p>
    </div>
  );
}

function Colourblocks58() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#264035] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue174 />
      <ValoresDeColores58 />
      <Tags58 />
    </div>
  );
}

function ColorSwatchValue177() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">900</p>
    </div>
  );
}

function ColorSwatchValue178() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">HEX</p>
      <p className="relative shrink-0">RGB</p>
      <p className="relative shrink-0">HSL</p>
    </div>
  );
}

function ColorSwatchValue179() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start overflow-clip relative shrink-0" data-name="ColorSwatch Value">
      <p className="relative shrink-0">#13201B</p>
      <p className="relative shrink-0">19, 32, 27</p>
      <p className="relative shrink-0">157°, 25%, 10%</p>
    </div>
  );
}

function ValoresDeColores59() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-none not-italic overflow-clip relative shrink-0 text-[12px] text-white w-full whitespace-nowrap" data-name="valores de colores">
      <ColorSwatchValue178 />
      <ColorSwatchValue179 />
    </div>
  );
}

function Tags59() {
  return (
    <div className="bg-[#e6eef8] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">color/illustration/forest/900</p>
    </div>
  );
}

function Colourblocks59() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[150px] items-start overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Colourblocks">
      <div className="absolute bg-[#13201b] inset-0 rounded-[8px]" data-name="ColorSwatch" />
      <ColorSwatchValue177 />
      <ValoresDeColores59 />
      <Tags59 />
    </div>
  );
}

function CardForest() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[500px]" data-name="card-forest">
      <Description7 />
      <Colourblocks50 />
      <Colourblocks51 />
      <Colourblocks52 />
      <Colourblocks53 />
      <Colourblocks54 />
      <Colourblocks55 />
      <Colourblocks56 />
      <Colourblocks57 />
      <Colourblocks58 />
      <Colourblocks59 />
    </div>
  );
}

function Grupo01ColourBlocks1() {
  return (
    <div className="content-stretch flex gap-[30px] items-start overflow-clip relative shrink-0 w-full" data-name="grupo-01-colour-blocks">
      <CardYellow />
      <CardGreen />
      <CardForest />
    </div>
  );
}

function Seccion02Naturales() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start overflow-clip relative shrink-0 w-full" data-name="seccion-02-naturales">
      <Description4 />
      <Grupo01ColourBlocks1 />
    </div>
  );
}

function Divider1() {
  return <div className="bg-[#eef2f8] h-px relative shrink-0 w-full" data-name="divider-02" />;
}

function Divider2() {
  return <div className="bg-[#eef2f8] h-px relative shrink-0 w-full" data-name="divider-03" />;
}

function Divider3() {
  return <div className="bg-[#eef2f8] h-px relative shrink-0 w-full" data-name="divider-04" />;
}

function Divider4() {
  return <div className="bg-[#eef2f8] h-px relative shrink-0 w-full" data-name="divider-05" />;
}

function GrupoCuerpoPrincipal() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start overflow-clip p-[80px] relative shrink-0 w-full" data-name="grupo-cuerpo-principal">
      <Seccion01Calidos />
      <Divider />
      <Seccion02Naturales />
      <Divider1 />
      <Divider2 />
      <Divider3 />
      <Divider4 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Icon">
          <path d={svgPaths.p20337900} fill="#004C97" id="Vector" />
          <path d={svgPaths.p2c33e080} fill="#004C97" id="Vector_2" opacity="0.5" />
          <path d={svgPaths.p2f125d00} fill="#004C97" id="Vector_3" opacity="0.5" />
          <path d={svgPaths.pcbc6280} fill="#004C97" id="Vector_4" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden className="absolute border-[#004c97] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] py-[1.5px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[261.023px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-px tracking-[0.65px] uppercase whitespace-nowrap">Norma de uso</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[261.023px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[26.4px] left-0 not-italic text-[22px] text-white top-[0.5px] whitespace-nowrap">Gobernanza de la paleta de ilustración</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[47.898px] relative shrink-0 w-[261.023px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function BoardHeader() {
  return (
    <div className="content-stretch flex gap-[14px] h-[76.898px] items-center pb-[29px] relative shrink-0 w-full" data-name="BoardHeader">
      <div aria-hidden className="absolute border-[rgba(0,76,151,0.35)] border-b border-solid inset-0 pointer-events-none" />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex h-[26px] items-center justify-center overflow-clip relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">1</p>
    </div>
  );
}

function RuleRow() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex gap-[16px] items-center overflow-clip px-[20px] py-[18px] relative rounded-[12px] shrink-0 w-full" data-name="RuleRow">
      <Text2 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[16px] text-[rgba(255,255,255,0.8)]">Las rampas documentadas son exclusivas para ilustraciones vectoriales, personajes, objetos e iconos ilustrados. No deben sustituir los tokens funcionales del sistema de diseño de producto.</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex h-[26px] items-center justify-center overflow-clip relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">2</p>
    </div>
  );
}

function RuleRow1() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex gap-[16px] items-center overflow-clip px-[20px] py-[18px] relative rounded-[12px] shrink-0 w-full" data-name="RuleRow">
      <Text3 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[16px] text-[rgba(255,255,255,0.8)]">Cada familia debe conservar la progresión tonal documentada. La selección de niveles dependerá de la profundidad, jerarquía y contraste interno requerido por cada ilustración.</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex h-[26px] items-center justify-center overflow-clip relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">3</p>
    </div>
  );
}

function RuleRow2() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex gap-[16px] items-center overflow-clip px-[20px] py-[18px] relative rounded-[12px] shrink-0 w-full" data-name="RuleRow">
      <Text4 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[16px] text-[rgba(255,255,255,0.8)]">Los valores HEX documentados constituyen la referencia cromática aprobada para ilustración. Cualquier variación, adaptación o incorporación de nuevos colores requiere validación del equipo de marca.</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex h-[26px] items-center justify-center overflow-clip relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">4</p>
    </div>
  );
}

function RuleRow3() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex gap-[16px] items-center overflow-clip px-[20px] py-[18px] relative rounded-[12px] shrink-0 w-full" data-name="RuleRow">
      <Text5 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[16px] text-[rgba(255,255,255,0.8)]">Las implementaciones deben referenciar los naming paths documentados para garantizar trazabilidad y mantenimiento. Los equivalentes RGB y HSL funcionan como guía para herramientas de ilustración, exportación editorial y alineación entre equipos.</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex h-[26px] items-center justify-center overflow-clip relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">5</p>
    </div>
  );
}

function RuleRow4() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex gap-[16px] items-center overflow-clip px-[20px] py-[18px] relative rounded-[12px] shrink-0 w-full" data-name="RuleRow">
      <Text6 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[16px] text-[rgba(255,255,255,0.8)]">Los valores Skin son independientes y deben utilizarse exclusivamente para representar piel en personajes. No deben interpretarse como niveles de una misma escala tonal.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <BoardHeader />
      <RuleRow />
      <RuleRow1 />
      <RuleRow2 />
      <RuleRow3 />
      <RuleRow4 />
    </div>
  );
}

function Footer01Notas() {
  return (
    <div className="bg-[#00122a] content-stretch flex flex-col items-start overflow-clip px-[40px] py-[48px] relative shrink-0 w-full" data-name="footer-01-notas">
      <Container />
    </div>
  );
}

function S08Footer() {
  return (
    <div className="bg-[#004c97] content-stretch flex h-[64px] items-center overflow-clip px-[80px] relative shrink-0 w-full" data-name="s08-footer">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-pre">{`v1  ·  03 — Escalas de ilustración  ·  BG Brand System  ·  Cerrado  ·  2026-08-12`}</p>
    </div>
  );
}

export default function Component03EscalasDeIlustracion() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="03 - Escalas de ilustración">
      <Seccion00Intro />
      <GrupoCuerpoPrincipal />
      <Footer01Notas />
      <S08Footer />
    </div>
  );
}