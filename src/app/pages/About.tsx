import { Glasses, Printer, ScanLine, Code, Gamepad2, Palette } from "lucide-react";
import { PageHeader } from "../components/PageHeader";

export function About() {
  const services = [
    {
      icon: <Glasses className="w-16 h-16 text-[#FF6600]" />,
      title: "AR/VR Experience",
      description: "Our AR/VR solutions transform how users interact with digital content. Providing immersive and engaging experiences across different industries.",
    },
    {
      icon: <Printer className="w-16 h-16 text-[#FF6600]" />,
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

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <PageHeader
          title="About DeF Lab"
          description="Design for Future (DeF) lab is envisioned to create visions for new design solutions that contribute to the social, environmental, and economic future of the world."
        />

        {/* Intro Text with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Text Content */}
          <div className="flex flex-col">
            <h2 className="text-2xl text-[#FF6600] mb-6 leading-tight">
              We're a group of creative thinkers who have built a Design for future Lab to change the world.
            </h2>
            <div className="w-20 h-1 bg-[#003153] mb-8"></div>
            
            <div className="space-y-6 text-base text-[#666666] leading-relaxed text-left">
              <p>
                DeF Lab brings together experts from various fields to innovate and develop cutting-edge solutions in the Creative industries. Our team focuses on integrating design and research to create forward-thinking, sustainable, and efficient technologies that shape the future of Design.
              </p>
              <p>
                Our Facility of DeF Lab is one of the first of a new generation of research facilities at IDC School of Design to highlight IIT Bombay's commitment to transforming students and researchers into thought leaders equipped to solve real problems through the application of technology and design solutions. We are equipped with the latest tools and technology to bring your ideas to life and push the boundaries of what's possible.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative flex">
            <div className="rounded-2xl overflow-hidden shadow-2xl flex-1">
              <img
                src="https://images.unsplash.com/photo-1658555012297-edb48f0c2d4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMFZSJTIwaGVhZHNldHxlbnwxfHx8fDE3NzI5OTk4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AR/VR Technology"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#7DF9FF]/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-10">
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
  );
}