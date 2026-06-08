import svgPaths from "./svg-b21ftdksia";
import imgImg from "./c0cf51be02437d2d153e1452f178343609c7551a.webp";
import imgImg1 from "./3cf29ff2bf79b70ecaf1205b7e445869cc8c060f.webp";
import imgImg2 from "./ea979a9551df9cb2bb177dcc92db78341f3a976a.webp";
import imgImg3 from "./fdb13c781ed1944f57d842f6d8041ac203fdf641.webp";
import imgImg4 from "./fc7056968172f51068ce32a5047d643b0ee60e77.webp";
import imgImg5 from "./e542a5ff15b56ea80c573c4c73ce9902d04c882b.webp";
import imgImg6 from "./dbdfeab53ecfc49bb38ea2b08d65e67613650165.webp";
import imgImg7 from "./1beaac6010fb1a0baf239fe8525c592b2cde9a33.webp";

function Container() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[1024px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[512.99px] not-italic text-[#f60] text-[14px] text-center top-[1.5px] tracking-[0.5496px] uppercase whitespace-nowrap">Our Mission</p>
    </div>
  );
}

function H1() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[1024px]" data-name="h2">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[48px] left-[512.17px] not-italic text-[#003153] text-[48px] text-center top-[0.5px] tracking-[0.3516px] whitespace-nowrap">What We Believe In</p>
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-[#f60] h-[4px] left-[472px] top-[56px] w-[80px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="absolute h-[60px] left-0 top-[40px] w-[1024px]" data-name="Container">
      <H1 />
      <Container2 />
    </div>
  );
}

function P() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="p">
      <div className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[512.99px] not-italic text-[#003153] text-[24px] text-center top-[0.5px] tracking-[0.0703px] whitespace-nowrap">
        <p className="leading-[39px] mb-0">Design for Future (DeF) lab is envisioned to create visions for new design solutions</p>
        <p className="mb-0">
          <span className="leading-[39px]">{`that contribute to the `}</span>
          <span className="leading-[39px] text-[#f60]">social</span>
          <span className="leading-[39px]">,</span>
          <span className="leading-[39px] text-[#f60]">{` environmental`}</span>
          <span className="leading-[39px]">,</span>
          <span className="leading-[39px] text-[#f60]">{` `}</span>
          <span className="leading-[39px]">and</span>
          <span className="leading-[39px] text-[#f60]">{` economic benefit`}</span>
        </p>
        <p className="leading-[39px]">of new transforming India through design innovation and active research.</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[141px] items-start left-[0.5px] top-[116px] w-[1024px]" data-name="Container">
      <P />
    </div>
  );
}

function Div1() {
  return (
    <div className="h-[273px] relative shrink-0 w-full" data-name="div">
      <Container />
      <Container1 />
      <Container3 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[402px] items-start left-0 pb-px pt-[64px] px-[38.5px] top-[688px] w-[1101px]" data-name="section">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Div1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[24px] left-0 top-[49px] w-[494.5px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#f60] text-[14px] top-[1.5px] tracking-[0.5496px] uppercase whitespace-nowrap">About DeF Lab</p>
    </div>
  );
}

function H2() {
  return (
    <div className="-translate-y-1/2 absolute h-[75px] left-0 top-1/2 w-[494.5px]" data-name="h2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[75px] left-0 not-italic text-[#f60] text-[60px] top-px tracking-[0.2637px] whitespace-nowrap">Who We Are?</p>
    </div>
  );
}

function Lightbulb() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Lightbulb">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Lightbulb">
          <path d={svgPaths.p369d8300} id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M12 24H20" id="Vector_2" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M13.3333 29.3333H18.6667" id="Vector_3" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(255,102,0,0.1)] relative rounded-[16777200px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Lightbulb />
      </div>
    </div>
  );
}

function Users() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Users">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Users">
          <path d={svgPaths.p27a3200} id="Vector" stroke="var(--stroke-0, #003153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2ee517c0} id="Vector_2" stroke="var(--stroke-0, #003153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p18f42980} id="Vector_3" stroke="var(--stroke-0, #003153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p37b568c0} id="Vector_4" stroke="var(--stroke-0, #003153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[rgba(0,49,83,0.1)] relative rounded-[16777200px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Users />
      </div>
    </div>
  );
}

function Rocket() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Rocket">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Rocket">
          <path d={svgPaths.p3ae45f00} id="Vector" stroke="var(--stroke-0, #003153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1936bd80} id="Vector_2" stroke="var(--stroke-0, #003153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.pb9e700} id="Vector_3" stroke="var(--stroke-0, #003153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2f8d9f80} id="Vector_4" stroke="var(--stroke-0, #003153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[rgba(125,249,255,0.2)] relative rounded-[16777200px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Rocket />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[64px] items-start left-0 top-[178px] w-[494.5px]" data-name="Container">
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container5() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container6 />
      <H2 />
      <Container7 />
    </div>
  );
}

function P1() {
  return (
    <div className="h-[87.75px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#666] text-[0px] top-[0.5px] tracking-[-0.4395px] w-[476px]">
        <span className="leading-[29.25px] text-[18px]">{`We are dedicated to `}</span>
        <span className="font-['Inter:Medium',sans-serif] font-medium leading-[29.25px] text-[#003153] text-[18px]">exploring and experimenting</span>
        <span className="leading-[29.25px] text-[18px]">{` with new mobility and automotive solutions through the synthesis of design and research.`}</span>
      </p>
    </div>
  );
}

function P2() {
  return (
    <div className="h-[87.75px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#666] text-[0px] top-[0.5px] tracking-[-0.4395px] w-[482px]">
        <span className="leading-[29.25px] text-[18px]">{`DeF lab provides comprehensive support to designers and researchers to `}</span>
        <span className="font-['Inter:Medium',sans-serif] font-medium leading-[29.25px] text-[#003153] text-[18px]">envision, conceptualize, create, digitize</span>
        <span className="leading-[29.25px] text-[18px]">{`, and `}</span>
        <span className="font-['Inter:Medium',sans-serif] font-medium leading-[29.25px] text-[#003153] text-[18px]">simulate creative ideas</span>
        <span className="leading-[29.25px] text-[18px]">.</span>
      </p>
    </div>
  );
}

function Container11() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[16px] h-[191.5px] items-start justify-self-stretch relative row-1 self-end shrink-0" data-name="Container">
      <P1 />
      <P2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[251px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container11 />
    </div>
  );
}

function Container14() {
  return <div className="absolute bg-[#f60] left-[20px] rounded-[16777200px] size-[8px] top-[25px]" data-name="Container" />;
}

function P3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#003153] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Digital Prototyping</p>
    </div>
  );
}

function P4() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[175px]">Transforming physical concepts into digital reality</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[68px] items-start left-[40px] top-[17px] w-[190.25px]" data-name="Container">
      <P3 />
      <P4 />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f60] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none rounded-[10px]" />
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return <div className="absolute bg-[#f60] left-[20px] rounded-[16777200px] size-[8px] top-[25px]" data-name="Container" />;
}

function P5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#003153] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Emerging Technologies</p>
    </div>
  );
}

function P6() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[159px]">Integrating cutting-edge tools and methods</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[68px] items-start left-[40px] top-[17px] w-[190.25px]" data-name="Container">
      <P5 />
      <P6 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f60] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none rounded-[10px]" />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return <div className="absolute bg-[#f60] left-[20px] rounded-[16777200px] size-[8px] top-[25px]" data-name="Container" />;
}

function P7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#003153] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Creative Visualization</p>
    </div>
  );
}

function P8() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[187px]">Bringing innovative concepts to life</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[68px] items-start left-[40px] top-[17px] w-[190.25px]" data-name="Container">
      <P7 />
      <P8 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f60] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none rounded-[10px]" />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return <div className="absolute bg-[#f60] left-[20px] rounded-[16777200px] size-[8px] top-[25px]" data-name="Container" />;
}

function P9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#003153] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Future Empowerment</p>
    </div>
  );
}

function P10() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[172px]">Preparing next-gen designers and researchers</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[68px] items-start left-[40px] top-[17px] w-[190.25px]" data-name="Container">
      <P9 />
      <P10 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white col-4 justify-self-stretch relative rounded-[10px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f60] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none rounded-[10px]" />
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container12() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[102px] relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container16 />
      <Container19 />
      <Container22 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[48px] h-[445px] items-start left-0 px-[32px] top-[1090px] w-[1101px]" data-name="Section">
      <Container4 />
      <Container12 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[519.34px] not-italic text-[#f60] text-[14px] text-center top-[1.5px] tracking-[0.5496px] uppercase whitespace-nowrap">What We Do</p>
    </div>
  );
}

function H3() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="h2">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[40px] left-[518.73px] not-italic text-[#003153] text-[36px] text-center top-[0.5px] tracking-[0.3691px] whitespace-nowrap">DeF lab offers three main facilities</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <H3 />
    </div>
  );
}

function Glasses() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Glasses">
      <div className="absolute inset-[45.83%_58.33%_20.83%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path d={svgPaths.pc2f8c00} id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_8.33%_20.83%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path d={svgPaths.pc2f8c00} id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[54.17%_41.67%_37.5%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-50%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 5.33333">
            <path d={svgPaths.p2316100} id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_66.67%_45.83%_10.42%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-18.18%_-12.5%_-18.19%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0003 13.3337">
            <path d={svgPaths.p316ea000} id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_10.42%_45.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-18.19%_-12.5%_-18.18%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0003 13.3337">
            <path d={svgPaths.pafa2200} id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[32px] pr-[226.328px] top-[32px] w-[258.328px]" data-name="Container">
      <Glasses />
    </div>
  );
}

function H4() {
  return (
    <div className="absolute h-[56px] left-[32px] top-[80px] w-[258.328px]" data-name="h3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#003153] text-[20px] top-0 tracking-[-0.4492px] w-[233px]">Design for Future concept generation</p>
    </div>
  );
}

function P11() {
  return (
    <div className="absolute h-[72px] left-[32px] top-[148px] w-[258.328px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#666] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[225px]">Creating innovative visions and concepts for future design solutions</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[254px] left-0 rounded-[14px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[324.328px]" data-name="Container">
      <Container29 />
      <H4 />
      <P11 />
    </div>
  );
}

function Cpu() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Cpu">
      <div className="absolute inset-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p24cf3100} id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
            <path d={svgPaths.p262c2e00} id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_37.5%_83.33%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-50%_-1.33px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 5.33333">
            <path d="M1.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[83.33%_37.5%_8.33%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-50%_-1.33px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 5.33333">
            <path d="M1.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_83.33%_37.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-1.33px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 2.66667">
            <path d="M1.33333 1.33333H4" id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_83.33%_62.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-1.33px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 2.66667">
            <path d="M1.33333 1.33333H4" id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_8.33%_37.5%_83.33%]" data-name="Vector">
        <div className="absolute inset-[-1.33px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 2.66667">
            <path d="M1.33333 1.33333H4" id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_8.33%_62.5%_83.33%]" data-name="Vector">
        <div className="absolute inset-[-1.33px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 2.66667">
            <path d="M1.33333 1.33333H4" id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_62.5%_83.33%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-50%_-1.33px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 5.33333">
            <path d="M1.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[83.33%_62.5%_8.33%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-50%_-1.33px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 5.33333">
            <path d="M1.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[32px] pr-[226.336px] top-[32px] w-[258.336px]" data-name="Container">
      <Cpu />
    </div>
  );
}

function H5() {
  return (
    <div className="absolute h-[56px] left-[32px] top-[80px] w-[258.336px]" data-name="h3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#003153] text-[20px] top-0 tracking-[-0.4492px] w-[202px]">Digitisation of physical artefacts</p>
    </div>
  );
}

function P12() {
  return (
    <div className="absolute h-[72px] left-[32px] top-[148px] w-[258.336px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#666] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[232px]">Converting physical objects into digital formats for analysis and preservation</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[254px] left-[356.33px] rounded-[14px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[324.336px]" data-name="Container">
      <Container31 />
      <H5 />
      <P12 />
    </div>
  );
}

function Zap() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Zap">
      <div className="absolute inset-[8.32%_12.49%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6758 29.3403">
            <path d={svgPaths.p293703f0} id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[32px] pr-[226.336px] top-[32px] w-[258.336px]" data-name="Container">
      <Zap />
    </div>
  );
}

function H6() {
  return (
    <div className="absolute h-[56px] left-[32px] top-[80px] w-[258.336px]" data-name="h3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#003153] text-[20px] top-0 tracking-[-0.4492px] w-[196px]">Digital visualisation of creative concepts</p>
    </div>
  );
}

function P13() {
  return (
    <div className="absolute h-[72px] left-[32px] top-[148px] w-[258.336px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#666] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[225px]">Bringing creative ideas to life through advanced visualization techniques</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[254px] left-[712.66px] rounded-[14px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[324.336px]" data-name="Container">
      <Container33 />
      <H6 />
      <P13 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[254px] relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container30 />
      <Container32 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[48px] h-[542px] items-start left-0 pt-[80px] px-[32px] top-[1571px] w-[1101px]" data-name="Section">
      <Container25 />
      <Container27 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[1037px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[519.09px] not-italic text-[#f60] text-[14px] text-center top-[1.5px] tracking-[0.5496px] uppercase whitespace-nowrap">Gallery</p>
    </div>
  );
}

function H7() {
  return (
    <div className="absolute h-[40px] left-0 top-[40px] w-[1037px]" data-name="h2">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[40px] left-[519.44px] not-italic text-[#003153] text-[36px] text-center top-[0.5px] tracking-[0.3691px] whitespace-nowrap">Lab in Action</p>
    </div>
  );
}

function P14() {
  return (
    <div className="absolute h-[28px] left-0 top-[96px] w-[1037px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[518.44px] not-italic text-[#666] text-[18px] text-center top-0 tracking-[-0.4395px] whitespace-nowrap">Glimpses from our research and innovation space</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[124px] left-[32px] top-[46px] w-[1037px]" data-name="Container">
      <Container35 />
      <H7 />
      <P14 />
    </div>
  );
}

function Img() {
  return (
    <div className="h-[185.43px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[185.43px] items-start left-0 overflow-clip rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[329.664px]" data-name="Container">
      <Img />
    </div>
  );
}

function Img1() {
  return (
    <div className="h-[185.43px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg1} />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[185.43px] items-start left-[353.66px] overflow-clip rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[329.664px]" data-name="Container">
      <Img1 />
    </div>
  );
}

function Img2() {
  return (
    <div className="h-[185.43px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg2} />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[185.43px] items-start left-[707.33px] overflow-clip rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[329.664px]" data-name="Container">
      <Img2 />
    </div>
  );
}

function Img3() {
  return (
    <div className="h-[185.43px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg3} />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[185.43px] items-start left-0 overflow-clip rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[209.43px] w-[329.664px]" data-name="Container">
      <Img3 />
    </div>
  );
}

function Img4() {
  return (
    <div className="h-[185.43px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg4} />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[185.43px] items-start left-[353.66px] overflow-clip rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[209.43px] w-[329.664px]" data-name="Container">
      <Img4 />
    </div>
  );
}

function Img5() {
  return (
    <div className="h-[185.43px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg5} />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[185.43px] items-start left-[707.33px] overflow-clip rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[209.43px] w-[329.664px]" data-name="Container">
      <Img5 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[394.859px] left-[32px] top-[222px] w-[1037px]" data-name="Container">
      <Container37 />
      <Container38 />
      <Container39 />
      <Container40 />
      <Container41 />
      <Container42 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute bg-[#f9fafb] h-[669px] left-0 top-[2143px] w-[1101px]" data-name="Section">
      <Container34 />
      <Container36 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[518.98px] not-italic text-[#f60] text-[14px] text-center top-[1.5px] tracking-[0.5496px] uppercase whitespace-nowrap">{`News & Updates`}</p>
    </div>
  );
}

function H8() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="h2">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[40px] left-[518.51px] not-italic text-[#003153] text-[36px] text-center top-[0.5px] tracking-[0.3691px] whitespace-nowrap">Latest Happenings</p>
    </div>
  );
}

function P15() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[518.98px] not-italic text-[#666] text-[18px] text-center top-0 tracking-[-0.4395px] whitespace-nowrap">Stay updated with our recent activities and achievements</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[124px] items-start left-[32px] top-[80px] w-[1037px]" data-name="Container">
      <Container44 />
      <H8 />
      <P15 />
    </div>
  );
}

function Span() {
  return (
    <div className="bg-[rgba(255,102,0,0.1)] h-[24px] relative rounded-[16777200px] shrink-0 w-[79.219px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[#f60] text-[12px] top-[5px] tracking-[0.6px] whitespace-nowrap">Facilities</p>
      </div>
    </div>
  );
}

function Span1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[94.047px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">March 5, 2026</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[24px] top-[24px] w-[274.328px]" data-name="Container">
      <Span />
      <Span1 />
    </div>
  );
}

function H9() {
  return (
    <div className="absolute h-[56px] left-[24px] top-[64px] w-[274.328px]" data-name="h3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#003153] text-[20px] top-0 tracking-[-0.4492px] w-[202px]">New VR Equipment Installation Completed</p>
    </div>
  );
}

function P16() {
  return (
    <div className="absolute h-[72px] left-[24px] top-[132px] w-[274.328px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#666] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[241px]">State-of-the-art VR systems now operational for immersive design research</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[230px] left-0 rounded-[14px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[324.328px]" data-name="Container">
      <Container47 />
      <H9 />
      <P16 />
    </div>
  );
}

function Span2() {
  return (
    <div className="bg-[rgba(255,102,0,0.1)] h-[24px] relative rounded-[16777200px] shrink-0 w-[81.25px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[#f60] text-[12px] top-[5px] tracking-[0.6px] whitespace-nowrap">Research</p>
      </div>
    </div>
  );
}

function Span3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[119.859px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">February 28, 2026</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[24px] top-[24px] w-[274.336px]" data-name="Container">
      <Span2 />
      <Span3 />
    </div>
  );
}

function H10() {
  return (
    <div className="absolute h-[56px] left-[24px] top-[64px] w-[274.336px]" data-name="h3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#003153] text-[20px] top-0 tracking-[-0.4492px] w-[255px]">Research Paper Published in Design Journal</p>
    </div>
  );
}

function P17() {
  return (
    <div className="absolute h-[72px] left-[24px] top-[132px] w-[274.336px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#666] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[269px]">Our work on future mobility concepts featured in leading international journal</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[230px] left-[356.33px] rounded-[14px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[324.336px]" data-name="Container">
      <Container49 />
      <H10 />
      <P17 />
    </div>
  );
}

function Span4() {
  return (
    <div className="bg-[rgba(255,102,0,0.1)] h-[24px] relative rounded-[16777200px] shrink-0 w-[85.531px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[#f60] text-[12px] top-[5px] tracking-[0.6px] whitespace-nowrap">Workshop</p>
      </div>
    </div>
  );
}

function Span5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[119.664px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">February 20, 2026</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[24px] top-[24px] w-[274.336px]" data-name="Container">
      <Span4 />
      <Span5 />
    </div>
  );
}

function H11() {
  return (
    <div className="absolute h-[56px] left-[24px] top-[64px] w-[274.336px]" data-name="h3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#003153] text-[20px] top-0 tracking-[-0.4492px] w-[180px]">Workshop on Digital Prototyping</p>
    </div>
  );
}

function P18() {
  return (
    <div className="absolute h-[72px] left-[24px] top-[132px] w-[274.336px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#666] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[237px]">Successful completion of 3-day intensive workshop with industry experts</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[230px] left-[712.66px] rounded-[14px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-0 w-[324.336px]" data-name="Container">
      <Container51 />
      <H11 />
      <P18 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[230px] left-[32px] top-[252px] w-[1037px]" data-name="Container">
      <Container46 />
      <Container48 />
      <Container50 />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="absolute left-[177.59px] size-[20px] top-[2px]" data-name="ArrowRight">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ArrowRight">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[24px] left-[451.7px] top-[530px] w-[197.594px]" data-name="Link">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[85.5px] not-italic text-[#f60] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">{`View All News & Events`}</p>
      <ArrowRight />
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute bg-white h-[634px] left-0 top-[2839.86px] w-[1101px]" data-name="Section">
      <Container43 />
      <Container45 />
      <Link />
    </div>
  );
}

function Span6() {
  return (
    <div className="absolute bg-[rgba(125,249,255,0.2)] content-stretch flex h-[32.5px] items-start left-0 px-[16px] py-[8px] rounded-[16777200px] top-[-3.5px] w-[216.938px]" data-name="span">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#003153] text-[14px] tracking-[0.5496px] whitespace-nowrap">DESIGN FOR FUTURE LAB</p>
    </div>
  );
}

function H() {
  return (
    <div className="absolute h-[300px] left-0 top-[56px] w-[494.5px]" data-name="h1">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[75px] left-0 not-italic text-[#003153] text-[60px] top-px tracking-[0.2637px] w-[444px]">{`Designing Future Mobility & Immersive Innovation`}</p>
    </div>
  );
}

function P19() {
  return (
    <div className="absolute h-[56px] left-0 top-[388px] w-[494.5px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#666] text-[18px] top-0 tracking-[-0.4395px] w-[490px]">A research space exploring VR, immersive simulations, digital prototyping, and future mobility design at IIT Bombay.</p>
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="absolute left-[157.62px] size-[20px] top-[16px]" data-name="ArrowRight">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ArrowRight">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute bg-[#f60] h-[52px] left-0 rounded-[10px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-0 w-[201.617px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[16px] text-white top-[13.5px] tracking-[-0.3125px] whitespace-nowrap">Explore Research</p>
      <ArrowRight1 />
    </div>
  );
}

function ArrowRight2() {
  return (
    <div className="absolute left-[94.3px] size-[20px] top-[14px]" data-name="ArrowRight">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ArrowRight">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #003153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, #003153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute bg-white border-2 border-[#003153] border-solid h-[52px] left-[217.62px] rounded-[10px] top-0 w-[142.305px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#003153] text-[16px] top-[11.5px] tracking-[-0.3125px] whitespace-nowrap">Visit Lab</p>
      <ArrowRight2 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[52px] left-0 top-[476px] w-[494.5px]" data-name="Container">
      <Link1 />
      <Link2 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[528px] left-0 top-0 w-[494.5px]" data-name="Container">
      <Span6 />
      <H />
      <P19 />
      <Container53 />
    </div>
  );
}

function Container55() {
  return <div className="absolute bg-[rgba(125,249,255,0.2)] blur-[64px] left-[222.5px] rounded-[16777200px] size-[288px] top-[-16px]" data-name="Container" />;
}

function Container56() {
  return <div className="absolute bg-[rgba(255,102,0,0.2)] blur-[64px] left-[-16px] rounded-[16777200px] size-[256px] top-[254.5px]" data-name="Container" />;
}

function Img6() {
  return (
    <div className="h-[494.5px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg6} />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-0 overflow-clip rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-[494.5px] top-0" data-name="Container">
      <Img6 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute left-[542.5px] size-[494.5px] top-[16.75px]" data-name="Container">
      <Container55 />
      <Container56 />
      <Container57 />
    </div>
  );
}

function Div2() {
  return (
    <div className="h-[528px] relative shrink-0 w-full" data-name="div">
      <Container52 />
      <Container54 />
    </div>
  );
}

function Section5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[688px] items-start left-0 overflow-clip pt-[80px] px-[32px] top-0 w-[1101px]" data-name="section" style={{ backgroundImage: "linear-gradient(147.999deg, rgb(255, 255, 255) 0%, rgb(249, 250, 251) 100%)" }}>
      <Div2 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="h-[3473.859px] relative shrink-0 w-[1101px]" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Section />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
    </div>
  );
}

function Img7() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[66.188px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg7} />
    </div>
  );
}

function P20() {
  return (
    <div className="absolute h-[40px] left-0 top-[64px] w-[324.328px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[310px]">Design for Future Lab - Exploring VR, immersive simulations, and future mobility design.</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute h-[148px] left-0 top-0 w-[324.328px]" data-name="Container">
      <Img7 />
      <P20 />
    </div>
  );
}

function H12() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="h3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[18px] text-white top-0 tracking-[-0.4395px] whitespace-nowrap">Quick Links</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">About</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Team</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Research</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Contact</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[104px] items-start relative shrink-0 w-full" data-name="Container">
      <Link3 />
      <Link4 />
      <Link5 />
      <Link6 />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[148px] items-start left-[356.33px] top-0 w-[324.336px]" data-name="Container">
      <H12 />
      <Container61 />
    </div>
  );
}

function H13() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="h3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[18px] text-white top-0 tracking-[-0.4395px] whitespace-nowrap">Contact Us</p>
    </div>
  );
}

function Mail() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Mail">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Mail">
          <path d={svgPaths.p17070980} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p120c8200} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span7() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[238.469px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">mobilityvehicledesigniitb@gmail.com</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Mail />
      <Span7 />
    </div>
  );
}

function Phone() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Phone">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_70_302)" id="Phone">
          <path d={svgPaths.p2a44c680} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_70_302">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Span8() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[116.367px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">+91 98648 01504</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Phone />
      <Span8 />
    </div>
  );
}

function MapPin() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="MapPin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="MapPin">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span9() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[237.234px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">DeF Lab, IIT Bombay, Powai, Mumbai</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <MapPin />
      <Span9 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[84px] items-start relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[148px] items-start left-[712.66px] top-0 w-[324.336px]" data-name="Container">
      <H13 />
      <Container63 />
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[148px] relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Container60 />
      <Container62 />
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#364153] border-solid border-t inset-0 pointer-events-none" />
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[518.5px] not-italic text-[#99a1af] text-[14px] text-center top-[25.5px] tracking-[-0.1504px] whitespace-nowrap">© 2026 DeF Lab - Design for Future Lab. All rights reserved.</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#003153] h-[321px] relative shrink-0 w-[1101px]" data-name="Footer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start pt-[48px] px-[32px] relative size-full">
        <Container58 />
        <Container67 />
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[836px] items-start left-0 pt-[81px] top-0 w-[1101px]" data-name="div">
      <MainContent />
      <Footer />
    </div>
  );
}

function Img8() {
  return (
    <div className="h-[48px] relative shrink-0 w-[66.188px]" data-name="img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg7} />
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.813px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">About</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[34.813px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Team</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[55.922px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Facilities</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[53.266px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Courses</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[59.992px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Research</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Workshops</p>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[43.203px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Events</p>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.281px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Contact</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[20px] relative shrink-0 w-[633.445px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Link7 />
        <Link8 />
        <Link9 />
        <Link10 />
        <Link11 />
        <Link12 />
        <Link13 />
        <Link14 />
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-between relative shrink-0 w-full" data-name="div">
      <Img8 />
      <Container68 />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[81px] items-start left-0 pb-px px-[32px] top-0 w-[1101px]" data-name="nav">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Div3 />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white relative size-full" data-name="HOME">
      <Div />
      <Nav />
    </div>
  );
}