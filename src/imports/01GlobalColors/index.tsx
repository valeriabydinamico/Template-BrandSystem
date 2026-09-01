import svgPaths from "./svg-fpobs6fonc";

function PageDescription() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0" data-name="Page Description">
      <p className="font-['Avenir_Next_LT_Pro:Bold',sans-serif] leading-[48px] relative shrink-0 text-[#004c97] text-[40px] tracking-[-0.4px] whitespace-nowrap">Global Colors</p>
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#16181d] text-[18px] w-[649px] whitespace-pre-wrap">
        <p className="leading-[26px] mb-0">Sistema maestro de color definido.</p>
        <p className="leading-[26px] mb-0">Este board documenta las familias cromáticas oficiales del brandsystem, incluyendo color primario, secundarios, terciarios, neutros, funcionales y degradados.</p>
        <p className="leading-[26px] mb-0">​</p>
        <p className="leading-[26px]">Su propósito es alinear branding y producto bajo una misma lógica visual, manteniendo consistencia, reconocimiento y escalabilidad en todos los puntos de contacto.</p>
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
    <div className="bg-white relative shrink-0 w-full" data-name="seccion-00-intro">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pt-[80px] px-[80px] relative size-full">
          <Header01Titulo />
        </div>
      </div>
    </div>
  );
}

function Divider1() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="bg-[#cbcbcb] h-px relative w-full" data-name="divider-02" />
      </div>
    </div>
  );
}

function Labels() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Piezas de alto impacto</p>
    </div>
  );
}

function Labels1() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Hero surfaces</p>
    </div>
  );
}

function UsosDeLosColores() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Usos de los colores">
      <Labels />
      <Labels1 />
    </div>
  );
}

function Labels2() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Campañas</p>
    </div>
  );
}

function Labels3() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Motion</p>
    </div>
  );
}

function Labels4() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Eventos</p>
    </div>
  );
}

function Labels5() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Recursos promocionales</p>
    </div>
  );
}

function UsosDeLosColores1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Usos de los colores">
      <Labels2 />
      <Labels3 />
      <Labels4 />
      <Labels5 />
    </div>
  );
}

function Grupo01UsosColores() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="grupo-01-usos-colores">
      <UsosDeLosColores />
      <UsosDeLosColores1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_274)" id="Icon">
          <path d={svgPaths.p53a39f0} id="Vector" stroke="#AD5301" />
          <path d="M8 4.5V8.5M8 10.5V11" id="Vector_2" stroke="#AD5301" strokeLinecap="round" strokeWidth="1.3" />
        </g>
        <defs>
          <clipPath id="clip0_0_274">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Grupo01IconoTexto() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[593px]" data-name="grupo-01-icono-texto">
      <Icon />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#ad5301] text-[16px] w-[561px]">Los degradados de alto contraste funcionan como recursos visuales de apoyo. No deben usarse automáticamente como fondo para texto. Antes de colocar texto sobre un degradado, validar contraste y legibilidad.</p>
    </div>
  );
}

function Nota01Restriccion() {
  return (
    <div className="bg-[#fdf6f0] content-stretch flex items-center justify-between px-[19px] py-[15px] relative rounded-[10px] shrink-0 w-[631px]" data-name="nota-01-restriccion">
      <div aria-hidden className="absolute border border-[rgba(173,83,1,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Grupo01IconoTexto />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_274)" id="Icon">
          <path d={svgPaths.p53a39f0} id="Vector" stroke="#AD5301" />
          <path d="M8 4.5V8.5M8 10.5V11" id="Vector_2" stroke="#AD5301" strokeLinecap="round" strokeWidth="1.3" />
        </g>
        <defs>
          <clipPath id="clip0_0_274">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Grupo01IconoTexto1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[593px]" data-name="grupo-01-icono-texto">
      <Icon1 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ad5301] text-[16px] w-[561px]">
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[20px]">Nota específica:</span>
        <span className="leading-[20px]">
          <br aria-hidden />
          Deep Orange no debe usarse como fondo para texto blanco sin validación de contraste. Su uso recomendado es como acento gráfico o recurso visual secundario.
        </span>
      </p>
    </div>
  );
}

function Nota01Restriccion1() {
  return (
    <div className="bg-[#fdf6f0] content-stretch flex items-center justify-between px-[19px] py-[15px] relative rounded-[10px] shrink-0 w-[631px]" data-name="nota-01-restriccion">
      <div aria-hidden className="absolute border border-[rgba(173,83,1,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Grupo01IconoTexto1 />
    </div>
  );
}

function Description() {
  return (
    <div className="flex flex-row items-end self-stretch">
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full">
          <div className="content-stretch flex flex-col gap-[24px] h-full items-start pr-[400px] relative w-[800px]" data-name="Description">
            <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[44px] not-italic relative shrink-0 text-[#16181d] text-[40px] w-[493px]">Degradados</p>
            <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[44px] not-italic relative shrink-0 text-[#16181d] text-[24px] w-[493px]">Degradados de alto contraste</p>
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#576175] text-[16px] w-[min-content]">Piezas de alto impacto, hero surfaces, campañas, eventos, motion y recursos gráficos.</p>
            <Grupo01UsosColores />
            <Nota01Restriccion />
            <Nota01Restriccion1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Value() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center justify-between leading-[0] not-italic relative shrink-0 text-[#16181d] text-[16px] w-full whitespace-nowrap" data-name="Value 1">
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">SUPERIOR</p>
        <p className="leading-[24px] mb-0">INFERIOR</p>
        <p className="leading-[24px]">ÁNGULO</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">#FAFCFF</p>
        <p className="leading-[24px] mb-0">#EBF5FF</p>
        <p className="leading-[24px]">180°</p>
      </div>
    </div>
  );
}

function ColourValuesValues() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start relative shrink-0 w-full" data-name="Colour Values/Values">
      <Value />
    </div>
  );
}

function Use() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Use">
      <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[0] min-w-px not-italic relative text-[#16181d] text-[16px]">
        <p className="leading-[24px] mb-0">USO</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px]">Fondos editoriales suaves</p>
      </div>
    </div>
  );
}

function ColorUse() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color use">
      <Use />
    </div>
  );
}

function ColorValues() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Color values">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-w-full not-italic relative shrink-0 text-[#16181d] text-[24px] w-[min-content]">Soft Neutral Blue</p>
      <ColourValuesValues />
      <ColorUse />
    </div>
  );
}

function ColourValues() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-[#fafcff] h-full min-w-px relative rounded-[16px] to-[#ebf5ff]" data-name="Colour Values">
      <div aria-hidden className="absolute border border-[#dadcde] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[20px] relative size-full">
          <ColorValues />
        </div>
      </div>
    </div>
  );
}

function ColourCards() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="content-stretch flex h-[360px] items-start relative w-full" data-name="Colour Cards">
          <ColourValues />
        </div>
      </div>
    </div>
  );
}

function Value1() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center justify-between leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full whitespace-nowrap" data-name="Value 1">
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">SUPERIOR</p>
        <p className="leading-[24px] mb-0">INFERIOR</p>
        <p className="leading-[24px]">ÁNGULO</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">#85CC33</p>
        <p className="leading-[24px] mb-0">#6AA329</p>
        <p className="leading-[24px]">180°</p>
      </div>
    </div>
  );
}

function ColourValuesValues1() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start relative shrink-0 w-full" data-name="Colour Values/Values">
      <Value1 />
    </div>
  );
}

function Use1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Use">
      <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[0] min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-[24px] mb-0">USO</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px]">Énfasis de campaña / hero promocional</p>
      </div>
    </div>
  );
}

function ColorUse1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color use">
      <Use1 />
    </div>
  );
}

function ColorValues1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Color values">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-w-full not-italic relative shrink-0 text-[24px] text-white w-[min-content]">Soft Apple</p>
      <ColourValuesValues1 />
      <ColorUse1 />
    </div>
  );
}

function ColourValues1() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-[#85cc33] h-full min-w-px relative rounded-[16px] to-[#6aa329]" data-name="Colour Values">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[20px] relative size-full">
          <ColorValues1 />
        </div>
      </div>
    </div>
  );
}

function Value2() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center justify-between leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full whitespace-nowrap" data-name="Value 1">
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">SUPERIOR</p>
        <p className="leading-[24px] mb-0">INFERIOR</p>
        <p className="leading-[24px]">ÁNGULO</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">#00B9FF</p>
        <p className="leading-[24px] mb-0">#0094CC</p>
        <p className="leading-[24px]">180°</p>
      </div>
    </div>
  );
}

function ColourValuesValues2() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start relative shrink-0 w-full" data-name="Colour Values/Values">
      <Value2 />
    </div>
  );
}

function Use2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Use">
      <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[0] min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-[24px] mb-0">USO</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px]">Énfasis de campaña / hero promocional</p>
      </div>
    </div>
  );
}

function ColorUse2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color use">
      <Use2 />
    </div>
  );
}

function ColorValues2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Color values">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-w-full not-italic relative shrink-0 text-[24px] text-white w-[min-content]">Soft Light Blue</p>
      <ColourValuesValues2 />
      <ColorUse2 />
    </div>
  );
}

function ColourValues2() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-[#00b9ff] h-full min-w-px relative rounded-[16px] to-[#0094cc]" data-name="Colour Values">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[20px] relative size-full">
          <ColorValues2 />
        </div>
      </div>
    </div>
  );
}

function Value3() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center justify-between leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full whitespace-nowrap" data-name="Value 1">
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">SUPERIOR</p>
        <p className="leading-[24px] mb-0">INFERIOR</p>
        <p className="leading-[24px]">ÁNGULO</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">#28C9D7</p>
        <p className="leading-[24px] mb-0">#20A1AC</p>
        <p className="leading-[24px]">180°</p>
      </div>
    </div>
  );
}

function ColourValuesValues3() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start relative shrink-0 w-full" data-name="Colour Values/Values">
      <Value3 />
    </div>
  );
}

function Use3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Use">
      <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[0] min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-[24px] mb-0">USO</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px]">Énfasis de campaña / hero promocional</p>
      </div>
    </div>
  );
}

function ColorUse3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color use">
      <Use3 />
    </div>
  );
}

function ColorValues3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Color values">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-w-full not-italic relative shrink-0 text-[24px] text-white w-[min-content]">Soft Teal</p>
      <ColourValuesValues3 />
      <ColorUse3 />
    </div>
  );
}

function ColourValues3() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-[#28c9d7] h-full min-w-px relative rounded-[16px] to-[#20a1ac]" data-name="Colour Values">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[20px] relative size-full">
          <ColorValues3 />
        </div>
      </div>
    </div>
  );
}

function ColourCards1() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="content-stretch flex gap-[16px] h-[360px] items-start relative w-full" data-name="Colour Cards">
          <ColourValues1 />
          <ColourValues2 />
          <ColourValues3 />
        </div>
      </div>
    </div>
  );
}

function Value4() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center justify-between leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full whitespace-nowrap" data-name="Value 1">
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">SUPERIOR</p>
        <p className="leading-[24px] mb-0">INFERIOR</p>
        <p className="leading-[24px]">ÁNGULO</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">#FF9233</p>
        <p className="leading-[24px] mb-0">#E65719</p>
        <p className="leading-[24px]">180°</p>
      </div>
    </div>
  );
}

function ColourValuesValues4() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start relative shrink-0 w-full" data-name="Colour Values/Values">
      <Value4 />
    </div>
  );
}

function Use4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Use">
      <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[0] min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-[24px] mb-0">USO</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px]">Énfasis de campaña / hero promocional</p>
      </div>
    </div>
  );
}

function ColorUse4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color use">
      <Use4 />
    </div>
  );
}

function ColorValues4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Color values">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-w-full not-italic relative shrink-0 text-[24px] text-white w-[min-content]">Deep Orange</p>
      <ColourValuesValues4 />
      <ColorUse4 />
    </div>
  );
}

function ColourValues4() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-[#ff9233] h-full min-w-px relative rounded-[16px] to-[#e65719]" data-name="Colour Values">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[20px] relative size-full">
          <ColorValues4 />
        </div>
      </div>
    </div>
  );
}

function Value5() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center justify-between leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full whitespace-nowrap" data-name="Value 1">
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">SUPERIOR</p>
        <p className="leading-[24px] mb-0">INFERIOR</p>
        <p className="leading-[24px]">ÁNGULO</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">#FFA14D</p>
        <p className="leading-[24px] mb-0">#FF7900</p>
        <p className="leading-[24px]">180°</p>
      </div>
    </div>
  );
}

function ColourValuesValues5() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start relative shrink-0 w-full" data-name="Colour Values/Values">
      <Value5 />
    </div>
  );
}

function Use5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Use">
      <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[0] min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-[24px] mb-0">USO</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px]">Énfasis de campaña / hero promocional</p>
      </div>
    </div>
  );
}

function ColorUse5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color use">
      <Use5 />
    </div>
  );
}

function ColorValues5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Color values">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-w-full not-italic relative shrink-0 text-[24px] text-white w-[min-content]">Soft Orange</p>
      <ColourValuesValues5 />
      <ColorUse5 />
    </div>
  );
}

function ColourValues5() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-[#ffa14d] h-full min-w-px relative rounded-[16px] to-[#ff7900]" data-name="Colour Values">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[20px] relative size-full">
          <ColorValues5 />
        </div>
      </div>
    </div>
  );
}

function ColourCards2() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="content-stretch flex gap-[16px] h-[360px] items-start relative w-full" data-name="Colour Cards">
          <ColourValues4 />
          <ColourValues5 />
        </div>
      </div>
    </div>
  );
}

function Value6() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center justify-between leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full whitespace-nowrap" data-name="Value 1">
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">SUPERIOR</p>
        <p className="leading-[24px] mb-0">INFERIOR</p>
        <p className="leading-[24px]">ÁNGULO</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">#0067CC</p>
        <p className="leading-[24px] mb-0">#003366</p>
        <p className="leading-[24px]">180°</p>
      </div>
    </div>
  );
}

function ColourValuesValues6() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start relative shrink-0 w-full" data-name="Colour Values/Values">
      <Value6 />
    </div>
  );
}

function Use6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Use">
      <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[0] min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-[24px] mb-0">USO</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px]">Fondos hero / destacados premium</p>
      </div>
    </div>
  );
}

function ColorUse6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color use">
      <Use6 />
    </div>
  );
}

function ColorValues6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Color values">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-w-full not-italic relative shrink-0 text-[24px] text-white w-[min-content]">Deep Blue</p>
      <ColourValuesValues6 />
      <ColorUse6 />
    </div>
  );
}

function ColourValues6() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-[#0067cc] h-full min-w-px relative rounded-[16px] to-[#036]" data-name="Colour Values">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[20px] relative size-full">
          <ColorValues6 />
        </div>
      </div>
    </div>
  );
}

function Value7() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center justify-between leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full whitespace-nowrap" data-name="Value 1">
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">SUPERIOR</p>
        <p className="leading-[24px] mb-0">INFERIOR</p>
        <p className="leading-[24px]">ÁNGULO</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">#0067CC</p>
        <p className="leading-[24px] mb-0">#004C97</p>
        <p className="leading-[24px]">180°</p>
      </div>
    </div>
  );
}

function ColourValuesValues7() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start relative shrink-0 w-full" data-name="Colour Values/Values">
      <Value7 />
    </div>
  );
}

function Use7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Use">
      <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[0] min-w-px not-italic relative text-[16px] text-white">
        <p className="leading-[24px] mb-0">USO</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px]">Storytelling digital / superficies motion</p>
      </div>
    </div>
  );
}

function ColorUse7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Color use">
      <Use7 />
    </div>
  );
}

function ColorValues7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Color values">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-w-full not-italic relative shrink-0 text-[24px] text-white w-[min-content]">Soft Blue</p>
      <ColourValuesValues7 />
      <ColorUse7 />
    </div>
  );
}

function ColourValues7() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-[#0067cc] h-full min-w-px relative rounded-[16px] to-[#004c97]" data-name="Colour Values">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[20px] relative size-full">
          <ColorValues7 />
        </div>
      </div>
    </div>
  );
}

function ColourCards3() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="content-stretch flex gap-[16px] h-[360px] items-start relative w-full" data-name="Colour Cards">
          <ColourValues6 />
          <ColourValues7 />
        </div>
      </div>
    </div>
  );
}

function Grupo01ColourCards() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-end justify-center min-w-px relative" data-name="grupo-01-colour-cards">
      <ColourCards />
      <ColourCards1 />
      <ColourCards2 />
      <ColourCards3 />
    </div>
  );
}

function Seccion02Degradados() {
  return (
    <div className="content-stretch flex items-end py-[80px] relative shrink-0 w-full" data-name="seccion-02-degradados">
      <Description />
      <Grupo01ColourCards />
    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="bg-[#cbcbcb] h-px relative w-full" data-name="divider-02" />
      </div>
    </div>
  );
}

function Labels6() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Headings</p>
    </div>
  );
}

function Labels7() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Links</p>
    </div>
  );
}

function Labels8() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Long reading</p>
    </div>
  );
}

function Labels9() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">CTA labels</p>
    </div>
  );
}

function UsosDeLosColores2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Usos de los colores">
      <Labels6 />
      <Labels7 />
      <Labels8 />
      <Labels9 />
    </div>
  );
}

function Labels10() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Premium dark surfaces</p>
    </div>
  );
}

function Labels11() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Body text</p>
    </div>
  );
}

function Labels12() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Hero overlays</p>
    </div>
  );
}

function UsosDeLosColores3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Usos de los colores">
      <Labels10 />
      <Labels11 />
      <Labels12 />
    </div>
  );
}

function Labels13() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Inverse text</p>
    </div>
  );
}

function UsosDeLosColores4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Usos de los colores">
      <Labels13 />
    </div>
  );
}

function Labels14() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Texto de alto contraste institucional</p>
    </div>
  );
}

function UsosDeLosColores5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Usos de los colores">
      <Labels14 />
    </div>
  );
}

function Grupo02UsosColores() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="grupo-02-usos-colores">
      <UsosDeLosColores4 />
      <UsosDeLosColores5 />
    </div>
  );
}

function Labels15() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Legal</p>
    </div>
  );
}

function Labels16() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Metadata</p>
    </div>
  );
}

function Labels17() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Formularios y UI content</p>
    </div>
  );
}

function UsosDeLosColores6() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Usos de los colores">
      <Labels15 />
      <Labels16 />
      <Labels17 />
    </div>
  );
}

function Grupo01UsosColores1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="grupo-01-usos-colores">
      <UsosDeLosColores2 />
      <UsosDeLosColores3 />
      <Grupo02UsosColores />
      <UsosDeLosColores6 />
    </div>
  );
}

function Description1() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none">
        <div className="content-stretch flex flex-col gap-[24px] items-start pr-[400px] relative w-[800px]" data-name="Description">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[44px] not-italic relative shrink-0 text-[#1b1819] text-[40px] w-[493px]">Sistema de color para texto</p>
          <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#6b6164] text-[16px] w-[min-content] whitespace-pre-wrap">
            <p className="leading-[24px] mb-0">Define los tokens de color para contenido textual en distintos contextos.</p>
            <p className="leading-[24px]">
              <br aria-hidden />
              Garantiza jerarquía, legibilidad y accesibilidad en todos los niveles de interfaz y comunicación.
            </p>
          </div>
          <Grupo01UsosColores1 />
        </div>
      </div>
    </div>
  );
}

function Tags() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[10px] relative rounded-[28px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">AAA</p>
    </div>
  );
}

function Tags1() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[10px] relative rounded-[28px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">8.47:1</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Tags />
      <Tags1 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[6px] items-start not-italic relative shrink-0 text-white w-full">
      <p className="leading-[28px] min-w-full relative shrink-0 text-[24px] w-[min-content]">BG Blue</p>
      <p className="leading-[24px] relative shrink-0 text-[16px] whitespace-nowrap">Brand Default: BG Blue 700</p>
    </div>
  );
}

function Value8() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-name="Value 1">
      <p className="relative shrink-0">HEX #</p>
      <p className="relative shrink-0">004C97</p>
    </div>
  );
}

function ColourValuesValues8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Colour Values/Values">
      <Value8 />
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

function Value9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value 1">
      <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">primary brand text</p>
    </div>
  );
}

function ColourValuesValues9() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Colour Values/Values">
      <Value9 />
    </div>
  );
}

function ColorValues8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Color values">
      <Frame />
      <Frame25 />
      <ColourValuesValues8 />
      <Frame1 />
      <ColourValuesValues9 />
    </div>
  );
}

function CardBgBlue1() {
  return (
    <div className="bg-[#004c97] flex-[1_0_0] h-[360px] min-w-px relative rounded-[16px]" data-name="card-bg-blue-700">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[20px] relative size-full">
          <ColorValues8 />
        </div>
      </div>
    </div>
  );
}

function Tags2() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[10px] relative rounded-[28px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">AAA</p>
    </div>
  );
}

function Tags3() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[10px] relative rounded-[28px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">11.12:1</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Tags2 />
      <Tags3 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[6px] items-start not-italic relative shrink-0 text-white w-full">
      <p className="leading-[28px] min-w-full relative shrink-0 text-[24px] w-[min-content]">BG Blue</p>
      <p className="leading-[24px] relative shrink-0 text-[16px] whitespace-nowrap">Brand Default: BG Blue 800</p>
    </div>
  );
}

function Value10() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-name="Value 1">
      <p className="relative shrink-0">HEX #</p>
      <p className="relative shrink-0">003882</p>
    </div>
  );
}

function ColourValuesValues10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Colour Values/Values">
      <Value10 />
    </div>
  );
}

function Value11() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 1">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">R</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">0</p>
    </div>
  );
}

function Value12() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 2">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">G</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">56</p>
    </div>
  );
}

function Value13() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 3">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">B</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">130</p>
    </div>
  );
}

function ColourValuesValues11() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Colour Values/Values">
      <Value11 />
      <Value12 />
      <Value13 />
    </div>
  );
}

function Value14() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 1">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">C</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">100</p>
    </div>
  );
}

function Value15() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 2">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">M</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">50</p>
    </div>
  );
}

function Value16() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 3">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">Y</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">0</p>
    </div>
  );
}

function Value17() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 4">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">K</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">60</p>
    </div>
  );
}

function ColourValuesValues12() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Colour Values/Values">
      <Value14 />
      <Value15 />
      <Value16 />
      <Value17 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[20px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] text-white">
      <ColourValuesValues11 />
      <ColourValuesValues12 />
    </div>
  );
}

function Value18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value 1">
      <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">secondary brand text</p>
    </div>
  );
}

function ColourValuesValues13() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Colour Values/Values">
      <Value18 />
    </div>
  );
}

function ColorValues9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Color values">
      <Frame2 />
      <Frame26 />
      <ColourValuesValues10 />
      <Frame3 />
      <ColourValuesValues13 />
    </div>
  );
}

function CardBgBlue2() {
  return (
    <div className="bg-[#003882] flex-[1_0_0] h-[360px] min-w-px relative rounded-[16px]" data-name="card-bg-blue-800">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[20px] relative size-full">
          <ColorValues9 />
        </div>
      </div>
    </div>
  );
}

function Grupo01TextoAzul() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="grupo-01-texto-azul">
      <CardBgBlue1 />
      <CardBgBlue2 />
    </div>
  );
}

function Tags4() {
  return (
    <div className="bg-black content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[10px] relative rounded-[28px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">AAA</p>
    </div>
  );
}

function Tags5() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[10px] relative rounded-[28px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">13.6:1</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Tags4 />
      <Tags5 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[6px] items-start not-italic relative shrink-0 text-white w-full">
      <p className="leading-[28px] min-w-full relative shrink-0 text-[24px] w-[min-content]">Ink</p>
      <p className="leading-[24px] relative shrink-0 text-[16px] whitespace-nowrap">Brand Default: Ink 800</p>
    </div>
  );
}

function Value19() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-name="Value 1">
      <p className="relative shrink-0">HEX #</p>
      <p className="relative shrink-0">292E38</p>
    </div>
  );
}

function ColourValuesValues14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Colour Values/Values">
      <Value19 />
    </div>
  );
}

function Value20() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 1">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">R</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">41</p>
    </div>
  );
}

function Value21() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 2">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">G</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">46</p>
    </div>
  );
}

function Value22() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 3">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">B</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">56</p>
    </div>
  );
}

function ColourValuesValues15() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Colour Values/Values">
      <Value20 />
      <Value21 />
      <Value22 />
    </div>
  );
}

function Value23() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 1">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">C</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">27</p>
    </div>
  );
}

function Value24() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 2">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">M</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">18</p>
    </div>
  );
}

function Value25() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 3">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">Y</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">0</p>
    </div>
  );
}

function Value26() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 4">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">K</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">78</p>
    </div>
  );
}

function ColourValuesValues16() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Colour Values/Values">
      <Value23 />
      <Value24 />
      <Value25 />
      <Value26 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[20px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] text-white">
      <ColourValuesValues15 />
      <ColourValuesValues16 />
    </div>
  );
}

function Value27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value 1">
      <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">{`primary text neutral `}</p>
    </div>
  );
}

function ColourValuesValues17() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Colour Values/Values">
      <Value27 />
    </div>
  );
}

function ColorValues10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Color values">
      <Frame4 />
      <Frame27 />
      <ColourValuesValues14 />
      <Frame5 />
      <ColourValuesValues17 />
    </div>
  );
}

function CardInk() {
  return (
    <div className="bg-[#292e38] flex-[1_0_0] h-[360px] min-w-px relative rounded-[16px]" data-name="card-ink-800">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[20px] relative size-full">
          <ColorValues10 />
        </div>
      </div>
    </div>
  );
}

function Tags6() {
  return (
    <div className="bg-black content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[10px] relative rounded-[28px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">AA</p>
    </div>
  );
}

function Tags7() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[10px] relative rounded-[28px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">6.23:1</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Tags6 />
      <Tags7 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[6px] items-start not-italic relative shrink-0 text-white w-full">
      <p className="leading-[28px] min-w-full relative shrink-0 text-[24px] w-[min-content]">Ink</p>
      <p className="leading-[24px] relative shrink-0 text-[16px] whitespace-pre">{`Brand Default:  Ink 600`}</p>
    </div>
  );
}

function Value28() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-name="Value 1">
      <p className="relative shrink-0">HEX #</p>
      <p className="relative shrink-0">576175</p>
    </div>
  );
}

function ColourValuesValues18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Colour Values/Values">
      <Value28 />
    </div>
  );
}

function Value29() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 1">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">R</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">87</p>
    </div>
  );
}

function Value30() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 2">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">G</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">97</p>
    </div>
  );
}

function Value31() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 3">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">B</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">117</p>
    </div>
  );
}

function ColourValuesValues19() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Colour Values/Values">
      <Value29 />
      <Value30 />
      <Value31 />
    </div>
  );
}

function Value32() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 1">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">C</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">26</p>
    </div>
  );
}

function Value33() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 2">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">M</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">17</p>
    </div>
  );
}

function Value34() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 3">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">Y</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">0</p>
    </div>
  );
}

function Value35() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 4">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">K</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">54</p>
    </div>
  );
}

function ColourValuesValues20() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Colour Values/Values">
      <Value32 />
      <Value33 />
      <Value34 />
      <Value35 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[20px] items-start leading-[24px] not-italic relative shrink-0 text-[16px] text-white">
      <ColourValuesValues19 />
      <ColourValuesValues20 />
    </div>
  );
}

function Value36() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value 1">
      <p className="[word-break:break-word] capitalize font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">secondary text neutral</p>
    </div>
  );
}

function ColourValuesValues21() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Colour Values/Values">
      <Value36 />
    </div>
  );
}

function ColorValues11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Color values">
      <Frame6 />
      <Frame28 />
      <ColourValuesValues18 />
      <Frame7 />
      <ColourValuesValues21 />
    </div>
  );
}

function CardConcrete() {
  return (
    <div className="bg-[#576175] flex-[1_0_0] h-[360px] min-w-px relative rounded-[16px]" data-name="card-concrete">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[20px] relative size-full">
          <ColorValues11 />
        </div>
      </div>
    </div>
  );
}

function Tags8() {
  return (
    <div className="bg-black content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[10px] relative rounded-[28px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">AAA</p>
    </div>
  );
}

function Tags9() {
  return (
    <div className="bg-[rgba(154,160,172,0.3)] content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[10px] relative rounded-[28px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#1b1819] text-[16px] whitespace-nowrap">13.62:1</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Tags8 />
      <Tags9 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[6px] items-start leading-[24px] not-italic relative shrink-0 w-full">
      <p className="min-w-full relative shrink-0 text-[#1b1819] text-[24px] w-[min-content]">White</p>
      <p className="relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">Brand Default: White 50</p>
    </div>
  );
}

function Value37() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center leading-[24px] not-italic relative shrink-0 text-[16px] whitespace-nowrap" data-name="Value 1">
      <p className="relative shrink-0 text-[#1b1819]">HEX #</p>
      <p className="relative shrink-0 text-black">FFFFFF</p>
    </div>
  );
}

function ColourValuesValues22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Colour Values/Values">
      <Value37 />
    </div>
  );
}

function Value38() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 1">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">R</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">255</p>
    </div>
  );
}

function Value39() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 2">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">G</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">255</p>
    </div>
  );
}

function Value40() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 3">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">B</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">255</p>
    </div>
  );
}

function ColourValuesValues23() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Colour Values/Values">
      <Value38 />
      <Value39 />
      <Value40 />
    </div>
  );
}

function Value41() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 1">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">C</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">0</p>
    </div>
  );
}

function Value42() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 2">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">M</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">0</p>
    </div>
  );
}

function Value43() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 3">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">Y</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">0</p>
    </div>
  );
}

function Value44() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Value 4">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[17px]">K</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 whitespace-nowrap">0</p>
    </div>
  );
}

function ColourValuesValues24() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Colour Values/Values">
      <Value41 />
      <Value42 />
      <Value43 />
      <Value44 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[20px] items-start leading-[24px] not-italic relative shrink-0 text-[#1b1819] text-[16px]">
      <ColourValuesValues23 />
      <ColourValuesValues24 />
    </div>
  );
}

function Value45() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Value 1">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">Paper White</p>
    </div>
  );
}

function ColourValuesValues25() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Colour Values/Values">
      <Value45 />
    </div>
  );
}

function ColorValues12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Color values">
      <Frame8 />
      <Frame29 />
      <ColourValuesValues22 />
      <Frame9 />
      <ColourValuesValues25 />
    </div>
  );
}

function CardWhite() {
  return (
    <div className="bg-white flex-[1_0_0] h-[360px] min-w-px relative rounded-[16px]" data-name="card-white">
      <div aria-hidden className="absolute border border-[#dadcde] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[20px] relative size-full">
          <ColorValues12 />
        </div>
      </div>
    </div>
  );
}

function Grupo02TextoNeutral() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="grupo-02-texto-neutral">
      <CardInk />
      <CardConcrete />
      <CardWhite />
    </div>
  );
}

function ColourCards4() {
  return (
    <div className="flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="-scale-y-100 flex-none w-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full" data-name="Colour Cards">
          <Grupo01TextoAzul />
          <Grupo02TextoNeutral />
        </div>
      </div>
    </div>
  );
}

function Seccion04ColoresTextos() {
  return (
    <div className="content-stretch flex items-end py-[80px] relative shrink-0 w-full" data-name="seccion-04-colores-textos">
      <Description1 />
      <ColourCards4 />
    </div>
  );
}

function Divider2() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="bg-[#cbcbcb] h-px relative w-full" data-name="divider-04" />
      </div>
    </div>
  );
}

function Labels18() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Promociones</p>
    </div>
  );
}

function Labels19() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">CTA’s</p>
    </div>
  );
}

function Labels20() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Información puntual</p>
    </div>
  );
}

function UsosDeLosColores7() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Usos de los colores">
      <Labels18 />
      <Labels19 />
      <Labels20 />
    </div>
  );
}

function Labels21() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Bloques secundarios de contenido</p>
    </div>
  );
}

function Labels22() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Contraste Visual</p>
    </div>
  );
}

function UsosDeLosColores8() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Usos de los colores">
      <Labels21 />
      <Labels22 />
    </div>
  );
}

function Grupo01UsosColores2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="grupo-01-usos-colores">
      <UsosDeLosColores7 />
      <UsosDeLosColores8 />
    </div>
  );
}

function Description2() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full">
          <div className="content-stretch flex flex-col gap-[24px] h-full items-start pr-[400px] relative w-[800px]" data-name="Description">
            <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[44px] not-italic relative shrink-0 text-[#16181d] text-[40px] w-[493px]">Colores terciarios</p>
            <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#576175] text-[16px] w-[min-content] whitespace-pre-wrap">
              <p className="leading-[24px] mb-0">Los colores terciarios están reservados para campañas, contenidos especiales y necesidades narrativas puntuales.</p>
              <p className="leading-[24px] mb-0">​</p>
              <p className="leading-[24px] mb-0">Su uso debe ser intencional, medido y siempre subordinado al sistema primario y secundario.</p>
              <p className="leading-[24px] mb-0">​</p>
              <p className="leading-[24px]">Se recomiendan para destacar momentos promocionales, categorías temporales o recursos editoriales de alto impacto.</p>
            </div>
            <Grupo01UsosColores2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Tags10() {
  return (
    <div className="bg-[#16181d] content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[10px] relative rounded-[28px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">AA</p>
    </div>
  );
}

function Tags11() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[10px] relative rounded-[28px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">5.31:1</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Tags10 />
      <Tags11 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[6px] items-start not-italic relative shrink-0 text-[#16181d] w-full">
      <p className="leading-[28px] min-w-full relative shrink-0 text-[24px] w-[min-content]">Orange</p>
      <p className="leading-[24px] relative shrink-0 text-[16px] whitespace-nowrap">Brand Default: Orange 500</p>
    </div>
  );
}

function Value46() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center leading-[24px] not-italic relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap" data-name="Value 1">
      <p className="relative shrink-0">HEX #</p>
      <p className="relative shrink-0">FF7900</p>
    </div>
  );
}

function ColourValuesValues26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Colour Values/Values">
      <Value46 />
    </div>
  );
}

function ColorValues14() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold gap-[20px] items-start leading-[0] not-italic relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap" data-name="Color values">
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">R 255</p>
        <p className="leading-[24px] mb-0">G 121</p>
        <p className="leading-[24px]">B 0</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">C 0</p>
        <p className="leading-[24px] mb-0">M 53</p>
        <p className="leading-[24px] mb-0">Y 100</p>
        <p className="leading-[24px]">K 0</p>
      </div>
    </div>
  );
}

function Value47() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[24px] not-italic relative shrink-0 text-[#16181d] text-[16px] w-full whitespace-nowrap" data-name="Value 1">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0">P</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">Pantone 144 C</p>
    </div>
  );
}

function ColourValuesValues27() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Colour Values/Values">
      <Value47 />
    </div>
  );
}

function ColorValues13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Color values">
      <Frame10 />
      <Frame22 />
      <ColourValuesValues26 />
      <ColorValues14 />
      <ColourValuesValues27 />
    </div>
  );
}

function CardOrange() {
  return (
    <div className="bg-[#ff7900] flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="card-orange">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[20px] relative size-full">
          <ColorValues13 />
        </div>
      </div>
    </div>
  );
}

function Tags12() {
  return (
    <div className="bg-[#16181d] content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[10px] relative rounded-[28px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">AA</p>
    </div>
  );
}

function Tags13() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[10px] relative rounded-[28px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">4.52:1</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Tags12 />
      <Tags13 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[6px] items-start not-italic relative shrink-0 text-[#16181d] w-full">
      <p className="leading-[28px] min-w-full relative shrink-0 text-[24px] w-[min-content]">Teal</p>
      <p className="leading-[24px] relative shrink-0 text-[16px] whitespace-nowrap">Brand Default: Teal 600</p>
    </div>
  );
}

function Value48() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center leading-[24px] not-italic relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap" data-name="Value 1">
      <p className="relative shrink-0">HEX #</p>
      <p className="relative shrink-0">20A5B1</p>
    </div>
  );
}

function ColourValuesValues28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Colour Values/Values">
      <Value48 />
    </div>
  );
}

function ColorValues16() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold gap-[20px] items-start leading-[0] not-italic relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap" data-name="Color values">
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">R 32</p>
        <p className="leading-[24px] mb-0">G 165</p>
        <p className="leading-[24px]">B 177</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">C 82</p>
        <p className="leading-[24px] mb-0">M 7</p>
        <p className="leading-[24px] mb-0">Y 0</p>
        <p className="leading-[24px]">K 31</p>
      </div>
    </div>
  );
}

function Value49() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[24px] not-italic relative shrink-0 text-[#16181d] text-[16px] w-full whitespace-nowrap" data-name="Value 1">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0">P</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">Pantone 7710 C</p>
    </div>
  );
}

function ColourValuesValues29() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Colour Values/Values">
      <Value49 />
    </div>
  );
}

function ColorValues15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Color values">
      <Frame11 />
      <Frame23 />
      <ColourValuesValues28 />
      <ColorValues16 />
      <ColourValuesValues29 />
    </div>
  );
}

function CardTeal() {
  return (
    <div className="bg-[#20a5b1] flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="card-teal">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[20px] relative size-full">
          <ColorValues15 />
        </div>
      </div>
    </div>
  );
}

function Tags14() {
  return (
    <div className="bg-[#16181d] content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[10px] relative rounded-[28px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">AAA</p>
    </div>
  );
}

function Tags15() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[10px] relative rounded-[28px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">7.18:1</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Tags14 />
      <Tags15 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[6px] items-start not-italic relative shrink-0 text-[#16181d] w-full">
      <p className="leading-[28px] min-w-full relative shrink-0 text-[24px] w-[min-content]">Apple</p>
      <p className="leading-[24px] relative shrink-0 text-[16px] whitespace-nowrap">Brand Default: Apple 500</p>
    </div>
  );
}

function Value50() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center leading-[24px] not-italic relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap" data-name="Value 1">
      <p className="relative shrink-0">HEX #</p>
      <p className="relative shrink-0">7DC030</p>
    </div>
  );
}

function ColourValuesValues30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Colour Values/Values">
      <Value50 />
    </div>
  );
}

function ColorValues18() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold gap-[20px] items-start leading-[0] not-italic relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap" data-name="Color values">
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">R 125</p>
        <p className="leading-[24px] mb-0">G 192</p>
        <p className="leading-[24px]">B 48</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">C 35</p>
        <p className="leading-[24px] mb-0">M 0</p>
        <p className="leading-[24px] mb-0">Y 75</p>
        <p className="leading-[24px]">K 25</p>
      </div>
    </div>
  );
}

function Value51() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[24px] not-italic relative shrink-0 text-[#16181d] text-[16px] w-full whitespace-nowrap" data-name="Value 1">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0">P</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">Pantone 376 C</p>
    </div>
  );
}

function ColourValuesValues31() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Colour Values/Values">
      <Value51 />
    </div>
  );
}

function ColorValues17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Color values">
      <Frame12 />
      <Frame24 />
      <ColourValuesValues30 />
      <ColorValues18 />
      <ColourValuesValues31 />
    </div>
  );
}

function CardApple() {
  return (
    <div className="bg-[#7dc030] flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="card-apple">
      <div aria-hidden className="absolute border border-[#dadcde] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[20px] relative size-full">
          <ColorValues17 />
        </div>
      </div>
    </div>
  );
}

function ColourCards5() {
  return (
    <div className="flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="-scale-y-100 flex-none w-full">
        <div className="content-stretch flex gap-[16px] h-[360px] items-start relative w-full" data-name="Colour Cards">
          <CardOrange />
          <CardTeal />
          <CardApple />
        </div>
      </div>
    </div>
  );
}

function Seccion05ColoresTerciarios() {
  return (
    <div className="content-stretch flex items-center py-[80px] relative shrink-0 w-full" data-name="seccion-05-colores-terciarios">
      <Description2 />
      <ColourCards5 />
    </div>
  );
}

function Divider3() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="bg-[#cbcbcb] h-px relative w-full" data-name="divider-05" />
      </div>
    </div>
  );
}

function Labels23() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Fondos</p>
    </div>
  );
}

function Labels24() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Estados interactivos</p>
    </div>
  );
}

function Labels25() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Diferenciación modular</p>
    </div>
  );
}

function UsosDeLosColores9() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Usos de los colores">
      <Labels23 />
      <Labels24 />
      <Labels25 />
    </div>
  );
}

function Labels26() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Apoyo Editorial</p>
    </div>
  );
}

function Labels27() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Iconos</p>
    </div>
  );
}

function UsosDeLosColores10() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Usos de los colores">
      <Labels26 />
      <Labels27 />
    </div>
  );
}

function Grupo01UsosColores3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="grupo-01-usos-colores">
      <UsosDeLosColores9 />
      <UsosDeLosColores10 />
    </div>
  );
}

function Description3() {
  return (
    <div className="flex items-center justify-center relative self-stretch shrink-0">
      <div className="-scale-y-100 flex-none h-full">
        <div className="content-stretch flex flex-col gap-[24px] h-full items-start pr-[400px] relative w-[800px]" data-name="Description">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[44px] not-italic relative shrink-0 text-[#16181d] text-[40px] w-[493px]">Colores secundarios</p>
          <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#576175] text-[16px] w-[min-content] whitespace-pre-wrap">
            <p className="leading-[24px] mb-0">Los colores secundarios amplían la flexibilidad del sistema a partir del BG Blue.</p>
            <p className="leading-[24px] mb-0">​</p>
            <p className="leading-[24px] mb-0">Se utilizan para generar jerarquía visual, profundidad de superficies, estados interactivos, diferenciación modular y apoyo en sistemas editoriales.</p>
            <p className="leading-[24px] mb-0">​</p>
            <p className="leading-[24px]">Nunca deben competir con el color primario como protagonista de marca.</p>
          </div>
          <Grupo01UsosColores3 />
        </div>
      </div>
    </div>
  );
}

function Tags16() {
  return (
    <div className="bg-[#16181d] content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[10px] relative rounded-[28px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">AA</p>
    </div>
  );
}

function Tags17() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[10px] relative rounded-[28px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">4.73:1</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Tags16 />
      <Tags17 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[6px] items-start not-italic relative shrink-0 text-[#16181d] w-full">
      <p className="leading-[28px] min-w-full relative shrink-0 text-[24px] w-[min-content]">BG Light Blue</p>
      <p className="leading-[24px] relative shrink-0 text-[16px] whitespace-nowrap">Brand Default: BG Light Blue 600</p>
    </div>
  );
}

function Value52() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center leading-[24px] not-italic relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap" data-name="Value 1">
      <p className="relative shrink-0">HEX #</p>
      <p className="relative shrink-0">00A3E1</p>
    </div>
  );
}

function ColourValuesValues32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Colour Values/Values">
      <Value52 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold gap-[20px] items-start leading-[0] not-italic relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">R 0</p>
        <p className="leading-[24px] mb-0">G 163</p>
        <p className="leading-[24px]">B 225</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">C 100</p>
        <p className="leading-[24px] mb-0">M 28</p>
        <p className="leading-[24px] mb-0">Y 0</p>
        <p className="leading-[24px]">K 12</p>
      </div>
    </div>
  );
}

function Value53() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[24px] not-italic relative shrink-0 text-[#16181d] text-[16px] w-full whitespace-nowrap" data-name="Value 1">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0">P</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">Pantone 2995 C</p>
    </div>
  );
}

function ColourValuesValues33() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Colour Values/Values">
      <Value53 />
    </div>
  );
}

function ColorValues19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Color values">
      <Frame13 />
      <Frame20 />
      <ColourValuesValues32 />
      <Frame14 />
      <ColourValuesValues33 />
    </div>
  );
}

function CardBgLightBlue() {
  return (
    <div className="bg-[#00a3e1] flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="card-bg-light-blue">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[20px] relative size-full">
          <ColorValues19 />
        </div>
      </div>
    </div>
  );
}

function Tags18() {
  return (
    <div className="bg-[#16181d] content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[10px] relative rounded-[28px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">AAA</p>
    </div>
  );
}

function Tags19() {
  return (
    <div className="bg-[rgba(159,154,172,0.3)] content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[10px] relative rounded-[28px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">13.56:1</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Tags18 />
      <Tags19 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[6px] items-start not-italic relative shrink-0 text-[#16181d] w-full">
      <p className="leading-[28px] min-w-full relative shrink-0 text-[24px] w-[min-content]">White</p>
      <p className="leading-[24px] relative shrink-0 text-[16px] whitespace-nowrap">Brand Default: White 50</p>
    </div>
  );
}

function Value54() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center leading-[24px] not-italic relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap" data-name="Value 1">
      <p className="relative shrink-0">HEX #</p>
      <p className="relative shrink-0">FFFFFF</p>
    </div>
  );
}

function ColourValuesValues34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Colour Values/Values">
      <Value54 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold gap-[20px] items-start leading-[0] not-italic relative shrink-0 text-[#16181d] text-[16px] whitespace-nowrap">
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">R 255</p>
        <p className="leading-[24px] mb-0">G 255</p>
        <p className="leading-[24px]">B 255</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[24px] mb-0">C 0</p>
        <p className="leading-[24px] mb-0">M 0</p>
        <p className="leading-[24px] mb-0">Y 0</p>
        <p className="leading-[24px]">K 0</p>
      </div>
    </div>
  );
}

function Value55() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[24px] not-italic relative shrink-0 text-[#16181d] text-[16px] w-full whitespace-nowrap" data-name="Value 1">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0">P</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">Paper White / Digital White</p>
    </div>
  );
}

function ColourValuesValues35() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Colour Values/Values">
      <Value55 />
    </div>
  );
}

function ColorValues20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Color values">
      <Frame15 />
      <Frame21 />
      <ColourValuesValues34 />
      <Frame16 />
      <ColourValuesValues35 />
    </div>
  );
}

function CardWhite1() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="card-white">
      <div aria-hidden className="absolute border border-[#dadcde] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[20px] relative size-full">
          <ColorValues20 />
        </div>
      </div>
    </div>
  );
}

function Grupo01CardsSecundarios() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="content-stretch flex gap-[16px] h-[360px] items-start relative w-full" data-name="grupo-01-cards-secundarios">
          <CardBgLightBlue />
          <CardWhite1 />
        </div>
      </div>
    </div>
  );
}

function Grupo01ColourCards1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="grupo-01-colour-cards">
      <Grupo01CardsSecundarios />
    </div>
  );
}

function Seccion06ColoresSecundarios() {
  return (
    <div className="content-stretch flex items-start py-[80px] relative shrink-0 w-full" data-name="seccion-06-colores-secundarios">
      <Description3 />
      <Grupo01ColourCards1 />
    </div>
  );
}

function Divider4() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="bg-[#cbcbcb] h-px relative w-full" data-name="divider-06" />
      </div>
    </div>
  );
}

function Labels28() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">CTA’s</p>
    </div>
  );
}

function Labels29() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Headers</p>
    </div>
  );
}

function Labels30() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Hero surfaces</p>
    </div>
  );
}

function UsosDeLosColores11() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Usos de los colores">
      <Labels28 />
      <Labels29 />
      <Labels30 />
    </div>
  );
}

function Labels31() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Logo</p>
    </div>
  );
}

function Labels32() {
  return (
    <div className="bg-[#e6f2ff] content-stretch flex h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="labels">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#004c97] text-[16px] whitespace-nowrap">Elementos</p>
    </div>
  );
}

function UsosDeLosColores12() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Usos de los colores">
      <Labels31 />
      <Labels32 />
    </div>
  );
}

function Grupo01UsosColores4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="grupo-01-usos-colores">
      <UsosDeLosColores11 />
      <UsosDeLosColores12 />
    </div>
  );
}

function Description4() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none">
        <div className="content-stretch flex flex-col gap-[24px] h-[360px] items-start pr-[400px] relative w-[800px]" data-name="Description">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[44px] min-w-full not-italic relative shrink-0 text-[#16181d] text-[40px] w-[min-content]">Color primario</p>
          <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#576175] text-[16px] w-[min-content] whitespace-pre-wrap">
            <p className="leading-[24px] mb-0">El azul institucional representa la trayectoria, confianza y solidez de Banco General.</p>
            <p className="leading-[24px] mb-0">​</p>
            <p className="leading-[24px]">Es el color principal del sistema y debe liderar la identidad visual en piezas clave como CTAs, headers, superficies hero, recursos de marca y elementos de alto reconocimiento.</p>
          </div>
          <Grupo01UsosColores4 />
        </div>
      </div>
    </div>
  );
}

function Tags20() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[10px] relative rounded-[28px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#292e3b] text-[16px] whitespace-nowrap">AAA</p>
    </div>
  );
}

function Tags21() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[10px] relative rounded-[28px] shrink-0" data-name="Tags">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#292e3b] text-[16px] whitespace-nowrap">8.47:1</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Tags20 />
      <Tags21 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[6px] items-start not-italic relative shrink-0 text-white w-full">
      <p className="leading-[28px] min-w-full relative shrink-0 text-[24px] w-[min-content]">BG Blue</p>
      <p className="leading-[24px] relative shrink-0 text-[16px] whitespace-nowrap">Brand Default: BG Blue 700</p>
    </div>
  );
}

function Value56() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-name="Value 1">
      <p className="relative shrink-0">HEX #</p>
      <p className="relative shrink-0">004C97</p>
    </div>
  );
}

function ColourValuesValues36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Colour Values/Values">
      <Value56 />
    </div>
  );
}

function Frame18() {
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

function Value57() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-full whitespace-nowrap" data-name="Value 1">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0">P</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">Pantone 2945 C</p>
    </div>
  );
}

function ColourValuesValues37() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Colour Values/Values">
      <Value57 />
    </div>
  );
}

function ColorValues21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="Color values">
      <Frame17 />
      <Frame19 />
      <ColourValuesValues36 />
      <Frame18 />
      <ColourValuesValues37 />
    </div>
  );
}

function CardBgBlue() {
  return (
    <div className="bg-[#004c97] flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="card-bg-blue">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[20px] relative size-full">
          <ColorValues21 />
        </div>
      </div>
    </div>
  );
}

function Grupo01CardsPrimario() {
  return (
    <div className="flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="-scale-y-100 flex-none w-full">
        <div className="content-stretch flex h-[360px] items-start relative w-full" data-name="grupo-01-cards-primario">
          <CardBgBlue />
        </div>
      </div>
    </div>
  );
}

function Seccion07ColorPrimario() {
  return (
    <div className="content-stretch flex items-start py-[80px] relative shrink-0 w-full" data-name="seccion-07-color-primario">
      <Description4 />
      <Grupo01CardsPrimario />
    </div>
  );
}

function GrupoCuerpoPrincipal() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="-scale-y-100 flex-none w-full">
        <div className="bg-white relative w-full" data-name="grupo-cuerpo-principal">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[64px] items-start p-[80px] relative size-full">
              <Divider1 />
              <Seccion02Degradados />
              <Divider />
              <Seccion04ColoresTextos />
              <Divider2 />
              <Seccion05ColoresTerciarios />
              <Divider3 />
              <Seccion06ColoresSecundarios />
              <Divider4 />
              <Seccion07ColorPrimario />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
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

function Container() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden className="absolute border-[#004c97] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] py-[1.5px] relative size-full">
        <Icon2 />
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
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[26.4px] left-0 not-italic text-[22px] text-white top-[0.5px] whitespace-nowrap">Gobernanza de Colores</p>
      </div>
    </div>
  );
}

function Container1() {
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
      <Container />
      <Container1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#004c97] relative rounded-[13px] shrink-0 size-[26px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[524.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.8)] top-[-1px] whitespace-nowrap">{`Los colores de estados semánticos y degradados no deben reinterpretarse fuera de sus casos de uso definidos. `}</p>
      </div>
    </div>
  );
}

function RuleRow() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] h-[64px] relative rounded-[12px] shrink-0 w-full" data-name="RuleRow">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.18)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[21px] py-[19px] relative size-full">
          <Text2 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#004c97] relative rounded-[13px] shrink-0 size-[26px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[287.164px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.8)] top-[-1px] whitespace-nowrap">Los colores terciarios están reservados para campañas, storytelling y momentos promocionales de alto impacto.</p>
      </div>
    </div>
  );
}

function RuleRow1() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] h-[64px] relative rounded-[12px] shrink-0 w-full" data-name="RuleRow">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.18)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[21px] py-[19px] relative size-full">
          <Text4 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-[#004c97] relative rounded-[13px] shrink-0 size-[26px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[233.648px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.8)] top-[-1px] whitespace-nowrap">Evitar el uso simultáneo de múltiples terciarios dentro de una misma pieza, salvo storytelling editorial o visualizaciones.</p>
      </div>
    </div>
  );
}

function RuleRow2() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] h-[64px] relative rounded-[12px] shrink-0 w-full" data-name="RuleRow">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.18)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[21px] py-[19px] relative size-full">
          <Text6 />
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[#004c97] relative rounded-[13px] shrink-0 size-[26px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[417.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.8)] top-[-1px] whitespace-nowrap">Todos los valores cromáticos documentados en este board constituyen la referencia aprobada del Brand System. Su implementación como tokens debe respetar las nomenclaturas y estructuras definidas.</p>
      </div>
    </div>
  );
}

function RuleRow3() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] h-[64px] relative rounded-[12px] shrink-0 w-full" data-name="RuleRow">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.18)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[21px] py-[19px] relative size-full">
          <Text8 />
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="bg-[#004c97] relative rounded-[13px] shrink-0 size-[26px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[437.992px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.8)] top-[-1px] whitespace-nowrap">Los equivalentes RGB, CMYK y referencias Pantone funcionan como guía de implementación editorial, impresión y alineación cross-team con producto.</p>
      </div>
    </div>
  );
}

function RuleRow4() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] h-[64px] relative rounded-[12px] shrink-0 w-full" data-name="RuleRow">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.18)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[21px] py-[19px] relative size-full">
          <Text10 />
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="bg-[#004c97] relative rounded-[13px] shrink-0 size-[26px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">6</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[437.992px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.8)] top-[-1px] whitespace-nowrap">Los tokens de texto no deben redefinirse por canal.</p>
      </div>
    </div>
  );
}

function RuleRow5() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] h-[64px] relative rounded-[12px] shrink-0 w-full" data-name="RuleRow">
      <div aria-hidden className="absolute border border-[rgba(0,76,151,0.18)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[21px] py-[19px] relative size-full">
          <Text12 />
          <Text13 />
        </div>
      </div>
    </div>
  );
}

function Grupo01GobernanzaColores() {
  return (
    <div className="bg-[#001a33] relative rounded-[20px] shrink-0 w-full" data-name="grupo-01-gobernanza-colores">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[18px] items-start p-[32px] relative size-full">
        <BoardHeader />
        <RuleRow />
        <RuleRow1 />
        <RuleRow2 />
        <RuleRow3 />
        <RuleRow4 />
        <RuleRow5 />
      </div>
    </div>
  );
}

function Footer01Notas() {
  return (
    <div className="bg-[#00122a] relative shrink-0 w-full" data-name="footer-01-notas">
      <div className="content-stretch flex flex-col items-start px-[40px] py-[48px] relative size-full">
        <Grupo01GobernanzaColores />
      </div>
    </div>
  );
}

function StatusBadge() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] content-stretch flex items-start overflow-clip px-[10px] py-[5px] relative rounded-[4px] shrink-0" data-name="status-badge">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">Cerrado</p>
    </div>
  );
}

function S08Footer() {
  return (
    <div className="bg-[#004c97] h-[64px] relative shrink-0 w-full" data-name="s08-footer">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[80px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic opacity-72 relative shrink-0 text-[11px] text-white whitespace-nowrap">v1.1 · 01 — Global Colors · BG Brand System · Cerrado · 2026-08-12</p>
          <StatusBadge />
        </div>
      </div>
    </div>
  );
}

export default function Component01GlobalColors() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="01 - Global Colors">
      <Seccion00Intro />
      <GrupoCuerpoPrincipal />
      <Footer01Notas />
      <S08Footer />
    </div>
  );
}