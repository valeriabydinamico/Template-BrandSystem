import { Intro } from "./parts/intro";
import { Section06Gradients } from "./parts/section06";
import { Section05FunctionalColorScales } from "./parts/section05";
import { Section04NeutralColorScale } from "./parts/section04";
import { Section03TertiaryColorScales } from "./parts/section03";
import { Section02SecondaryColorScales } from "./parts/section02";
import { Section01PrimaryColorScale } from "./parts/section01";
import { GovernanceFooter, MetaFooter } from "./parts/governance";

function Divider() {
  return <div className="bg-[#eef2f8] h-px relative w-full" data-name="divider" />;
}

function MainContent() {
  return (
    <div className="bg-white relative w-full" data-name="main-content">
      <div className="content-stretch flex flex-col gap-[64px] items-start px-[40px] py-[80px] relative w-full">
        <Section01PrimaryColorScale />
        <Divider />
        <Section02SecondaryColorScales />
        <Divider />
        <Section03TertiaryColorScales />
        <Divider />
        <Section04NeutralColorScale />
        <Divider />
        <Section06Gradients />
        <Divider />
        <Section05FunctionalColorScales />
      </div>
    </div>
  );
}

export default function Component01GlobalColors() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="01 Global Colors">
      <Intro />
      <MainContent />
      <GovernanceFooter />
      <MetaFooter />
    </div>
  );
}
