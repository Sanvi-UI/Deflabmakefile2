import { Glasses, Box, ScanLine, Code, Gamepad2, Palette } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { PageHeader } from "../components/PageHeader";
import aboutIntroImg from "../../imports/image-80.png";

function useScrollAnim(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export function About() {
  const introRef = useRef<HTMLDivElement>(null);
  const [introVisible, setIntroVisible] = useState(false);
  const { ref: servicesRef, visible: servicesVisible } = useScrollAnim(0.1);

  useEffect(() => {
    const el = introRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIntroVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const anim = (delay: string, visible: boolean) => ({
    animation: visible ? `aboutFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) ${delay} both` : 'none',
    opacity: visible ? undefined : 0,
  });

  const cardAnim = (delay: string) => ({
    animation: servicesVisible ? `aboutPopUp 0.65s cubic-bezier(0.34,1.56,0.64,1) ${delay} both` : 'none',
    opacity: servicesVisible ? undefined : 0,
  });

  const services = [
    {
      icon: <Glasses className="w-16 h-16 text-[#FF6600]" />,
      title: "AR/VR Experience",
      description: "Our AR/VR solutions transform how users interact with digital content. Providing immersive and engaging experiences across different industries.",
    },
    {
      icon: <Box className="w-16 h-16 text-[#FF6600]" />,
      title: "3D Printing",
      description: "Produce tailored parts and products with precision and customization options. Quickly turn digital designs into physical models for testing and development.",
    },
    {
      icon: <ScanLine className="w-16 h-16 text-[#FF6600]" />,
      title: "3D Scanning",
      description: "Capture detailed and accurate 3D models of objects, environments, and Reconstruct digital models of existing parts for redesign or replication.",
    },
    {
      icon: <Code className="w-16 h-16 text-[#FF6600]" />,
      title: "Creative Coding",
      description: "Develop dynamic visuals, animations, and generative art using coding languages. Build unique, interactive applications and installations tailored to specific creative and technical requirement",
    },
    {
      icon: <Gamepad2 className="w-16 h-16 text-[#FF6600]" />,
      title: "Immersive Simulation",
      description: "Experience immersive and interactive gaming experience..",
    },
    {
      icon: <Palette className="w-16 h-16 text-[#FF6600]" />,
      title: "Art & Illustrations",
      description: "Our art and illustration offers a blend of creativity, customization, and professional quality to bring your vision to life, enhancing the visual impact of your projects across various media.",
    },
  ];

  const cardDelays = ["0s", "0.1s", "0.2s", "0.3s", "0.4s", "0.5s"];

  return (
    <div className="py-12 bg-white">
      <style>{`
        @keyframes aboutFadeUp {
          0%   { opacity: 0; transform: translateY(28px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes aboutFadeRight {
          0%   { opacity: 0; transform: translateX(36px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes aboutPopUp {
          0%   { opacity: 0; transform: translateY(24px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes aboutBarGrow {
          0%   { opacity: 0; transform: scaleX(0); transform-origin: left; }
          100% { opacity: 1; transform: scaleX(1); transform-origin: left; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <PageHeader
          title="About DeF Lab"
          description="Design for Future (DeF) lab is envisioned to create visions for new design solutions that contribute to the social, environmental, and economic future of the world."
        />

        {/* Intro Text with Image */}
        <div ref={introRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Text Content — each block fades up sequentially */}
          <div className="flex flex-col">
            <h2
              style={anim('0s', introVisible)}
              className="text-2xl text-[#FF6600] mb-6 leading-tight"
            >
              We're a group of creative thinkers who have built a Design for future Lab to change the world.
            </h2>

            <div
              style={{
                animation: introVisible ? `aboutBarGrow 0.6s cubic-bezier(0.22,1,0.36,1) 0.25s both` : 'none',
                opacity: introVisible ? undefined : 0,
              }}
              className="w-20 h-1 bg-[#003153] mb-8"
            />

            <div className="space-y-6 text-base text-[#666666] leading-relaxed text-left">
              <p style={anim('0.45s', introVisible)}>
                DeF Lab brings together experts from various fields to innovate and develop cutting-edge solutions in the Creative industries. Our team focuses on integrating design and research to create forward-thinking, sustainable, and efficient technologies that shape the future of Design.
              </p>
              <p style={anim('0.65s', introVisible)}>
                Our Facility of DeF Lab is one of the first of a new generation of research facilities at IDC School of Design to highlight IIT Bombay's commitment to transforming students and researchers into thought leaders equipped to solve real problems through the application of technology and design solutions. We are equipped with the latest tools and technology to bring your ideas to life and push the boundaries of what's possible.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div
            style={{
              animation: introVisible ? `aboutFadeRight 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s both` : 'none',
              opacity: introVisible ? undefined : 0,
            }}
            className="relative flex"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl flex-1">
              <img
                src={aboutIntroImg}
                alt="About DeF Lab"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#7DF9FF]/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>

        {/* Services Section */}
        <div ref={servicesRef}>
          <div style={cardAnim('0s')} className="mb-10">
            <div className="mb-3 text-center">
              <span className="text-sm tracking-wider text-[#FF6600] uppercase">
                What we are best at
              </span>
            </div>
            <h3 className="text-4xl text-center text-[#003153] mb-8">Our Services</h3>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((item, index) => (
              <div
                key={index}
                style={cardAnim(cardDelays[index])}
                className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all"
              >
                <div className="mb-6 flex justify-center">{item.icon}</div>
                <h3 className="text-xl text-[#003153] mb-3 text-center font-semibold">{item.title}</h3>
                <p className="text-[#666666] leading-relaxed text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
