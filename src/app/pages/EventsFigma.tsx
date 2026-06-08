import svgPaths from "../../imports/Events/svg-zf6phw8csl";
import imgImg from "../../imports/Events/d3aed7537a93b27db628187b474a489f77626ed1.webp";
import imgImg1 from "../../imports/Events/d6b81ce084b5d891f283ad24b7118065326a848c.webp";
import imgImg2 from "../../imports/Events/2d24e019631a7b9ae2b0bf063eeba43ad525f8b1.webp";
import imgImg3 from "../../imports/Events/95b11a16d2bfdbf37864363434e1b464dddec7b3.webp";
import imgImg4 from "../../imports/Events/43e8718aad9608335b023f2682017f78c01bc3f6.webp";
import imgImg5 from "../../imports/Events/d0f1c5100abcea3662aa308b703dc16f4f10c286.webp";
import imgImg6 from "../../imports/Events/02cf1d82969abaaafc2ec0f566091188ada0e382.webp";
import imgImg7 from "../../imports/Events/1beaac6010fb1a0baf239fe8525c592b2cde9a33.webp";
import { PageHeader } from "../components/PageHeader";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

type FilterType = "All Events" | "Upcoming" | "Past Events";

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function FilterButton({ label, isActive, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 h-[36px] rounded-full text-[14px] font-medium transition-all cursor-pointer ${
        isActive
          ? "bg-[#FF6600] text-white shadow-md"
          : "bg-[#f3f4f6] text-[#666] hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
}

// Animated wrapper for event cards
function AnimatedEventCard({ children, index }: { children: React.ReactNode; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div
      ref={ref}
      style={{
        animation: isVisible ? `cardPopUp 0.6s ease-out ${index * 0.1}s both` : 'none',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(30px) scale(0.95)',
      }}
    >
      {children}
    </div>
  );
}

function Img() {
  return (
    <div className="h-[240px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col h-[240px] items-start left-0 overflow-clip top-0 w-[345px]" data-name="Container">
      <Img />
    </div>
  );
}

function Span() {
  return (
    <div className="absolute bg-[rgba(255,102,0,0.1)] h-[24px] left-0 rounded-[16777200px] top-0 w-[89.438px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[#f60] text-[12px] top-[5px] whitespace-nowrap">Conference</p>
    </div>
  );
}

function Span1() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[24px] left-[97.44px] rounded-[16777200px] top-0 w-[85.836px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[#666] text-[12px] top-[5px] whitespace-nowrap">Completed</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[32px] w-[626px]" data-name="Container">
      <Span />
      <Span1 />
    </div>
  );
}

function H1() {
  return (
    <div className="absolute h-[32px] left-[32px] top-[72px] w-[626px]" data-name="h3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-0 not-italic text-[#003153] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">India HCI 2025 Exhibition</p>
    </div>
  );
}

function P1() {
  return (
    <div className="absolute h-[56px] left-[32px] top-[116px] w-[626px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#666] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[583px]">{`Showcasing our latest VR research and interactive installations at India's premier Human-Computer Interaction conference.`}</p>
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Calendar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span2() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">December 15-18, 2025</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-0 top-0 w-[172.219px]" data-name="Container">
      <Calendar />
      <Span2 />
    </div>
  );
}

function MapPin() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="MapPin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="MapPin">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span3() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">IIT Bombay</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-[188.22px] top-0 w-[96.109px]" data-name="Container">
      <MapPin />
      <Span3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[20px] left-[32px] top-[188px] w-[626px]" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[240px] left-[345px] top-0 w-[690px]" data-name="Container">
      <Container8 />
      <H1 />
      <P1 />
      <Container9 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[240px] relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white h-[242px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Img1() {
  return (
    <div className="h-[240px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg1} />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col h-[240px] items-start left-0 overflow-clip top-0 w-[345px]" data-name="Container">
      <Img1 />
    </div>
  );
}

function Span4() {
  return (
    <div className="absolute bg-[rgba(125,249,255,0.1)] h-[24px] left-0 rounded-[16777200px] top-0 w-[79.219px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[#7df9ff] text-[12px] top-[5px] whitespace-nowrap">Exhibition</p>
    </div>
  );
}

function Span5() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[24px] left-[87.22px] rounded-[16777200px] top-0 w-[85.836px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[#666] text-[12px] top-[5px] whitespace-nowrap">Completed</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[32px] w-[626px]" data-name="Container">
      <Span4 />
      <Span5 />
    </div>
  );
}

function H2() {
  return (
    <div className="absolute h-[32px] left-[32px] top-[72px] w-[626px]" data-name="h3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-0 not-italic text-[#003153] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">Animela 2025</p>
    </div>
  );
}

function P2() {
  return (
    <div className="absolute h-[56px] left-[32px] top-[116px] w-[626px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#666] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[585px]">{`Participating in India's largest animation and immersive media festival with VR art installations and demonstrations.`}</p>
    </div>
  );
}

function Calendar1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Calendar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span6() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">January 20-22, 2025</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-0 top-0 w-[160.438px]" data-name="Container">
      <Calendar1 />
      <Span6 />
    </div>
  );
}

function MapPin1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="MapPin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="MapPin">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span7() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Mumbai</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-[176.44px] top-0 w-[75.469px]" data-name="Container">
      <MapPin1 />
      <Span7 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[20px] left-[32px] top-[188px] w-[626px]" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[240px] left-[345px] top-0 w-[690px]" data-name="Container">
      <Container16 />
      <H2 />
      <P2 />
      <Container17 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[240px] relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white h-[242px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container13 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Img2() {
  return (
    <div className="h-[240px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg2} />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col h-[240px] items-start left-0 overflow-clip top-0 w-[345px]" data-name="Container">
      <Img2 />
    </div>
  );
}

function Span8() {
  return (
    <div className="absolute bg-[rgba(0,49,83,0.1)] h-[24px] left-0 rounded-[16777200px] top-0 w-[98.344px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[#003153] text-[12px] top-[5px] whitespace-nowrap">Industry Visit</p>
    </div>
  );
}

function Span9() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[24px] left-[106.34px] rounded-[16777200px] top-0 w-[85.836px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[#666] text-[12px] top-[5px] whitespace-nowrap">Completed</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[32px] w-[626px]" data-name="Container">
      <Span8 />
      <Span9 />
    </div>
  );
}

function H3() {
  return (
    <div className="absolute h-[32px] left-[32px] top-[72px] w-[626px]" data-name="h3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-0 not-italic text-[#003153] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">Autodesk India Visit</p>
    </div>
  );
}

function P3() {
  return (
    <div className="absolute h-[56px] left-[32px] top-[116px] w-[626px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#666] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[596px]">Hosted Autodesk team for collaboration discussions on future design tools and VR integration in automotive design workflows.</p>
    </div>
  );
}

function Calendar2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Calendar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span10() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">February 5, 2025</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-0 top-0 w-[135.016px]" data-name="Container">
      <Calendar2 />
      <Span10 />
    </div>
  );
}

function MapPin2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="MapPin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="MapPin">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span11() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">DeF Lab</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-[151.02px] top-0 w-[77.688px]" data-name="Container">
      <MapPin2 />
      <Span11 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[20px] left-[32px] top-[188px] w-[626px]" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[240px] left-[345px] top-0 w-[690px]" data-name="Container">
      <Container24 />
      <H3 />
      <P3 />
      <Container25 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[240px] relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white h-[242px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container21 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Img3() {
  return (
    <div className="h-[240px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg3} />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col h-[240px] items-start left-0 overflow-clip top-0 w-[345px]" data-name="Container">
      <Img3 />
    </div>
  );
}

function Span12() {
  return (
    <div className="absolute bg-[rgba(0,49,83,0.1)] h-[24px] left-0 rounded-[16777200px] top-0 w-[98.344px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[#003153] text-[12px] top-[5px] whitespace-nowrap">Industry Visit</p>
    </div>
  );
}

function Span13() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[24px] left-[106.34px] rounded-[16777200px] top-0 w-[85.836px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[#666] text-[12px] top-[5px] whitespace-nowrap">Completed</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[32px] w-[626px]" data-name="Container">
      <Span12 />
      <Span13 />
    </div>
  );
}

function H4() {
  return (
    <div className="absolute h-[32px] left-[32px] top-[72px] w-[626px]" data-name="h3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-0 not-italic text-[#003153] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">Sony Research Collaboration</p>
    </div>
  );
}

function P4() {
  return (
    <div className="absolute h-[56px] left-[32px] top-[116px] w-[626px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#666] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[615px]">Meeting with Sony Research team to explore collaborative opportunities in immersive entertainment and VR experiences.</p>
    </div>
  );
}

function Calendar3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Calendar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span14() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">February 18, 2025</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-0 top-0 w-[141.641px]" data-name="Container">
      <Calendar3 />
      <Span14 />
    </div>
  );
}

function MapPin3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="MapPin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="MapPin">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span15() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">DeF Lab</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-[157.64px] top-0 w-[77.688px]" data-name="Container">
      <MapPin3 />
      <Span15 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[20px] left-[32px] top-[188px] w-[626px]" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[240px] left-[345px] top-0 w-[690px]" data-name="Container">
      <Container32 />
      <H4 />
      <P4 />
      <Container33 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[240px] relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-white h-[242px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container29 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Img4() {
  return (
    <div className="h-[240px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg4} />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col h-[240px] items-start left-0 overflow-clip top-0 w-[345px]" data-name="Container">
      <Img4 />
    </div>
  );
}

function Span16() {
  return (
    <div className="absolute bg-[rgba(0,49,83,0.1)] h-[24px] left-0 rounded-[16777200px] top-0 w-[98.344px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[#003153] text-[12px] top-[5px] whitespace-nowrap">Industry Visit</p>
    </div>
  );
}

function Span17() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[24px] left-[106.34px] rounded-[16777200px] top-0 w-[85.836px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[#666] text-[12px] top-[5px] whitespace-nowrap">Completed</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[32px] w-[626px]" data-name="Container">
      <Span16 />
      <Span17 />
    </div>
  );
}

function H5() {
  return (
    <div className="absolute h-[32px] left-[32px] top-[72px] w-[626px]" data-name="h3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-0 not-italic text-[#003153] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">DRDO Technical Exchange</p>
    </div>
  );
}

function P5() {
  return (
    <div className="absolute h-[56px] left-[32px] top-[116px] w-[626px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#666] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[624px]">Technical exchange session with Defence Research and Development Organisation focusing on simulation and training applications.</p>
    </div>
  );
}

function Calendar4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Calendar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span18() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">March 2, 2025</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-0 top-0 w-[124.125px]" data-name="Container">
      <Calendar4 />
      <Span18 />
    </div>
  );
}

function MapPin4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="MapPin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="MapPin">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span19() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">DeF Lab</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-[140.12px] top-0 w-[77.688px]" data-name="Container">
      <MapPin4 />
      <Span19 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[20px] left-[32px] top-[188px] w-[626px]" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[240px] left-[345px] top-0 w-[690px]" data-name="Container">
      <Container40 />
      <H5 />
      <P5 />
      <Container41 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[240px] relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-white h-[242px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container37 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Img5() {
  return (
    <div className="h-[240px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg5} />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col h-[240px] items-start left-0 overflow-clip top-0 w-[345px]" data-name="Container">
      <Img5 />
    </div>
  );
}

function Span20() {
  return (
    <div className="absolute bg-[rgba(255,102,0,0.1)] h-[24px] left-0 rounded-[16777200px] top-0 w-[95.289px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[#f60] text-[12px] top-[5px] whitespace-nowrap">Collaboration</p>
    </div>
  );
}

function Span21() {
  return (
    <div className="absolute bg-[rgba(125,249,255,0.1)] h-[24px] left-[103.29px] rounded-[16777200px] top-0 w-[80.773px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[#7df9ff] text-[12px] top-[5px] whitespace-nowrap">Upcoming</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[32px] w-[626px]" data-name="Container">
      <Span20 />
      <Span21 />
    </div>
  );
}

function H6() {
  return (
    <div className="absolute h-[32px] left-[32px] top-[72px] w-[626px]" data-name="h3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-0 not-italic text-[#003153] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">TU Delft Design Exchange</p>
    </div>
  );
}

function P6() {
  return (
    <div className="absolute h-[56px] left-[32px] top-[116px] w-[626px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#666] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[589px]">Joint research workshop with TU Delft faculty and students exploring future mobility design and sustainable transportation.</p>
    </div>
  );
}

function Calendar5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Calendar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span22() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">March 25-27, 2026</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-0 top-0 w-[148.125px]" data-name="Container">
      <Calendar5 />
      <Span22 />
    </div>
  );
}

function MapPin5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="MapPin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="MapPin">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span23() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">DeF Lab & Online</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-[164.12px] top-0 w-[145.117px]" data-name="Container">
      <MapPin5 />
      <Span23 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[20px] left-[32px] top-[188px] w-[626px]" data-name="Container">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[240px] left-[345px] top-0 w-[690px]" data-name="Container">
      <Container48 />
      <H6 />
      <P6 />
      <Container49 />
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[240px] relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-white h-[242px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container45 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Img6() {
  return (
    <div className="h-[240px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg6} />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col h-[240px] items-start left-0 overflow-clip top-0 w-[345px]" data-name="Container">
      <Img6 />
    </div>
  );
}

function Span24() {
  return (
    <div className="absolute bg-[rgba(125,249,255,0.1)] h-[24px] left-0 rounded-[16777200px] top-0 w-[79.219px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[#7df9ff] text-[12px] top-[5px] whitespace-nowrap">Exhibition</p>
    </div>
  );
}

function Span25() {
  return (
    <div className="absolute bg-[rgba(125,249,255,0.1)] h-[24px] left-[87.22px] rounded-[16777200px] top-0 w-[80.773px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[#7df9ff] text-[12px] top-[5px] whitespace-nowrap">Upcoming</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[32px] w-[626px]" data-name="Container">
      <Span24 />
      <Span25 />
    </div>
  );
}

function H7() {
  return (
    <div className="absolute h-[32px] left-[32px] top-[72px] w-[626px]" data-name="h3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-0 not-italic text-[#003153] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">DeF Lab Annual Showcase</p>
    </div>
  );
}

function P7() {
  return (
    <div className="absolute h-[56px] left-[32px] top-[116px] w-[626px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#666] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[586px]">Annual exhibition showcasing student projects, research outcomes, and innovative prototypes from the past academic year.</p>
    </div>
  );
}

function Calendar6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Calendar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span26() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">April 15, 2026</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-0 top-0 w-[113.234px]" data-name="Container">
      <Calendar6 />
      <Span26 />
    </div>
  );
}

function MapPin6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="MapPin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="MapPin">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span27() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">IIT Bombay</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-[129.23px] top-0 w-[96.109px]" data-name="Container">
      <MapPin6 />
      <Span27 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[20px] left-[32px] top-[188px] w-[626px]" data-name="Container">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[240px] left-[345px] top-0 w-[690px]" data-name="Container">
      <Container56 />
      <H7 />
      <P7 />
      <Container57 />
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[240px] relative shrink-0 w-full" data-name="Container">
      <Container54 />
      <Container55 />
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-white h-[242px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container53 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Img7() {
  return (
    <div className="h-[240px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="https://images.unsplash.com/photo-1569189830976-c86a2dfed895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmUlMjBtb2JpbGl0eSUyMGF1dG9ub21vdXMlMjB2ZWhpY2xlJTIwY29uZmVyZW5jZXxlbnwxfHx8fDE3NzUyMDQ2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col h-[240px] items-start left-0 overflow-clip top-0 w-[345px]" data-name="Container">
      <Img7 />
    </div>
  );
}

function Span28() {
  return (
    <div className="absolute bg-[rgba(255,102,0,0.1)] h-[24px] left-0 rounded-[16777200px] top-0 w-[89.438px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[#f60] text-[12px] top-[5px] whitespace-nowrap">Conference</p>
    </div>
  );
}

function Span29() {
  return (
    <div className="absolute bg-[rgba(125,249,255,0.1)] h-[24px] left-[97.44px] rounded-[16777200px] top-0 w-[80.773px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[#7df9ff] text-[12px] top-[5px] whitespace-nowrap">Upcoming</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[32px] w-[626px]" data-name="Container">
      <Span28 />
      <Span29 />
    </div>
  );
}

function H8() {
  return (
    <div className="absolute h-[32px] left-[32px] top-[72px] w-[626px]" data-name="h3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-0 not-italic text-[#003153] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">Future Mobility Summit 2026</p>
    </div>
  );
}

function P8() {
  return (
    <div className="absolute h-[56px] left-[32px] top-[116px] w-[626px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#666] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[624px]">{`Presenting keynote on 'Designing Human-Centered Autonomous Vehicle Experiences' at India's premier mobility conference.`}</p>
    </div>
  );
}

function Calendar7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Calendar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span30() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">May 20-22, 2026</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-0 top-0 w-[133.734px]" data-name="Container">
      <Calendar7 />
      <Span30 />
    </div>
  );
}

function MapPin7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="MapPin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="MapPin">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #FF6600)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Span31() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#666] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Mumbai Convention Center</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-[149.73px] top-0 w-[207.516px]" data-name="Container">
      <MapPin7 />
      <Span31 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute h-[20px] left-[32px] top-[188px] w-[626px]" data-name="Container">
      <Container66 />
      <Container67 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[240px] left-[345px] top-0 w-[690px]" data-name="Container">
      <Container64 />
      <H8 />
      <P8 />
      <Container65 />
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[240px] relative shrink-0 w-full" data-name="Container">
      <Container62 />
      <Container63 />
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-white h-[242px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container61 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

export function EventsFigma() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("All Events");

  // Define which events are upcoming vs past
  const eventCategories = {
    past: [
      <AnimatedEventCard key="event1" index={0}><Container4 /></AnimatedEventCard>,
      <AnimatedEventCard key="event2" index={1}><Container12 /></AnimatedEventCard>,
      <AnimatedEventCard key="event3" index={2}><Container20 /></AnimatedEventCard>,
      <AnimatedEventCard key="event4" index={3}><Container28 /></AnimatedEventCard>,
      <AnimatedEventCard key="event5" index={4}><Container36 /></AnimatedEventCard>,
    ],
    upcoming: [
      <AnimatedEventCard key="event6" index={0}><Container44 /></AnimatedEventCard>,
      <AnimatedEventCard key="event7" index={1}><Container52 /></AnimatedEventCard>,
      <AnimatedEventCard key="event8" index={2}><Container60 /></AnimatedEventCard>,
    ],
  };

  // Filter events based on selected filter
  const getFilteredEvents = () => {
    if (selectedFilter === "All Events") {
      return [...eventCategories.past, ...eventCategories.upcoming];
    } else if (selectedFilter === "Upcoming") {
      return eventCategories.upcoming;
    } else {
      return eventCategories.past;
    }
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <PageHeader
          title="Events & Collaborations"
          description="DeF Lab actively participates in conferences, exhibitions, and industry collaborations to share research and foster innovation."
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <FilterButton
            label="All Events"
            isActive={selectedFilter === "All Events"}
            onClick={() => setSelectedFilter("All Events")}
          />
          <FilterButton
            label="Upcoming"
            isActive={selectedFilter === "Upcoming"}
            onClick={() => setSelectedFilter("Upcoming")}
          />
          <FilterButton
            label="Past Events"
            isActive={selectedFilter === "Past Events"}
            onClick={() => setSelectedFilter("Past Events")}
          />
        </div>

        {/* Events Grid */}
        <div key={selectedFilter} className="flex flex-col gap-6">
          {getFilteredEvents()}
        </div>
      </div>
    </div>
  );
}
