import svgPaths from "../svg-0ms03mowh5";

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

export function GovernanceFooter() {
  return (
    <div className="bg-[#d2d8e1] relative shrink-0 w-full" data-name="governance-footer">
      <div className="content-stretch flex flex-col items-start px-[40px] py-[48px] relative size-full">
        <GovernanceContainer />
      </div>
    </div>
  );
}

function StatusBadge() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0" data-name="status-badge">
      <div className="content-stretch flex items-start overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#44515f] text-[12px] whitespace-nowrap">Master</p>
      </div>
      <div aria-hidden className="absolute border border-[#b9c3ce] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

export function MetaFooter() {
  return (
    <div className="bg-[#44515f] h-[72px] relative shrink-0 w-full" data-name="meta-footer">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[80px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic opacity-72 relative shrink-0 text-[13px] text-white whitespace-nowrap">v1 · 01 Global Colors · Master Template</p>
          <StatusBadge />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#c6d0da] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

