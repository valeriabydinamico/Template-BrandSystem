import { Intro } from "./parts/intro";
import { Section06Gradients } from "./parts/section06";
import { Section05FunctionalColorScales } from "./parts/section05";
import { Section04NeutralColorScale, Divider } from "./parts/section04";
import { Section03TertiaryColorScales, Divider1 } from "./parts/section03";
import { Section02SecondaryColorScales, Divider2 } from "./parts/section02";
import { Section01PrimaryColorScale } from "./parts/section01";
import { GovernanceFooter, MetaFooter } from "./parts/governance";

function MainContent() {
  return (
    <div className="bg-white relative w-full" data-name="main-content">
      <div className="content-stretch flex flex-col gap-[64px] items-start p-[80px] relative w-full">
        <Section01PrimaryColorScale />
        <Divider2 />
        <Section02SecondaryColorScales />
        <Divider1 />
        <Section03TertiaryColorScales />
        <Divider />
        <Section04NeutralColorScale />
        <Section05FunctionalColorScales />
        <Section06Gradients />
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
