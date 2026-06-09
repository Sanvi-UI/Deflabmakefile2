import { Tag } from "lucide-react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import driveHero from "@/imports/image-29.png";
import piyushCover from "@/imports/image-36.png";
import acrylicCover from "@/imports/image-41.png";
import escooterHero from "@/imports/image-32.png";
import escooterCover from "@/imports/image-33.png";

function ResearchCard({ project, index }: { project: any; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      style={{
        animation: isVisible ? `cardPopUp 0.6s ease-out ${index * 0.1}s both` : 'none',
        opacity: isVisible ? 1 : 0,
      }}
      className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all group flex flex-col h-[600px] overflow-hidden relative"
    >
      {/* Image */}
      <div className="h-[220px] overflow-hidden bg-gray-100 flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category Tag */}
        <div className="flex items-center gap-2 mb-3">
          <Tag size={14} className="text-[#FF6600]" />
          <span className="text-xs tracking-wider text-[#FF6600] bg-[#FF6600]/10 px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl text-[#003153] mb-3 group-hover:text-[#FF6600] transition-colors h-[90px] leading-tight line-clamp-3 overflow-hidden">
          {project.title}
        </h3>

        {/* Researcher Name */}
        <p className="text-sm text-[#666666] mb-3">
          Researcher: {project.researcher}
        </p>

        {/* Description */}
        <p className="text-sm text-[#666666] leading-relaxed line-clamp-4 overflow-hidden">{project.description}</p>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* View More Detail Button */}
        <div className="mt-4 flex flex-shrink-0">
          <Link
            to={`/research/${project.id}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#003153] text-white text-sm rounded-lg hover:bg-[#FF6600] transition-colors whitespace-nowrap w-fit"
          >
            View Details
            <ArrowUpRight size={16} className="flex-shrink-0" />
          </Link>
        </div>
      </div>

      {/* Gradient Line on Hover - Positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF6600] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
}

export function Research() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      id: "digital-visualisation-automotive-vr",
      title: "Automotive VR Visualization",
      researcher: "Piyush Soni",
      category: "VR",
      description: "Developing an efficient workflow for converting automotive CAD models into immersive VR experiences using Alias, Maya, Blender, Substance Painter, and Unreal Engine.",
      image: piyushCover,
      imagePosition: "center 50%",
    },
    {
      id: "gradient-tracking",
      title: "Gradient Tracking",
      researcher: "Adithyan K R",
      category: "Interaction Design",
      description: "Novel interaction paradigms using gradient-based tracking for immersive VR interfaces and user experiences.",
      image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkaWVudCUyMHRyYWNraW5nJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3Mjk2NDc2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "polka-dot-interaction",
      title: "Polka Dot Interaction",
      researcher: "Adithyan K R",
      category: "Interaction Design",
      description: "Innovative interface design exploring pattern-based interaction methods for enhanced immersive environments.",
      image: "https://images.unsplash.com/photo-1672685847201-f0866fb87c52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMGRvdCUyMHBhdHRlcm4lMjBkZXNpZ258ZW58MXx8fHwxNzcyOTY0NzY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "dynamic-reality-vehicle-engineering",
      title: "Dynamic Reality Integration for Vehicle Engineering",
      researcher: "Himansh Kumar Jatav",
      professor: "Prof. Sugandh Malhotra",
      duration: "Not specified",
      category: "Mobility",
      description: "A VR-based automotive exploration platform built in Unity, enabling users to explore a vehicle at 1:1 scale with interactive doors, hood mechanics, and component reveal features.",
      image: driveHero,
      imagePosition: "center 55%",
    },
    {
      id: "zippy3-rear-steered-escooter",
      title: "Zippy3- Rear Steered Urban E-Scooter",
      researcher: "Naveed Kadechur",
      professor: "Prof. Sugandh Malhotra",
      duration: "7 weeks",
      category: "Mobility",
      description: "Design and fabrication of a three-wheeled utilitarian electric scooter for short-range urban commuting, spanning research, 3D modelling, electronics integration, and physical prototype assembly.",
      image: escooterCover,
      imagePosition: "center 50%",
    },
    {
      id: "compact-vtol-urban-commuting",
      title: "Compact eVTOL for Urban Commuting",
      researcher: "Rangeet Hait",
      professor: "Prof. Sugandh Malhotra",
      duration: "7 weeks",
      category: "Mobility",
      description: "Designing a compact electric Vertical Take-Off and Landing (eVTOL) vehicle to address urban traffic congestion, combining aviation ergonomics, VR sketching, and human-centered design for accessible personal air mobility.",
      image: "https://images.unsplash.com/photo-1676193672216-c3df9cda6b41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWVE9MJTIwYWlyY3JhZnQlMjB1cmJhbiUyMGRlc2lnbnxlbnwxfHx8fDE3NzI5NjQ3NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "gesture-game-immersive-ads",
      title: "Gesture-Based Game for Immersive Advertisements",
      researcher: "Sneha Tiwari",
      category: "Interaction Design",
      description: "Gesture-controlled interactive experiences for engaging public advertising in urban spaces across India.",
      image: "https://images.unsplash.com/photo-1727846990874-a0e0503d9dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZXN0dXJlJTIwYmFzZWQlMjBnYW1pbmclMjBpbnRlcmFjdGlvbnxlbnwxfHx8fDE3NzI5NjQ3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "interactive-website-contact-points",
      title: "Interactive Website of Contact Points",
      researcher: "Ryo Nakamoto",
      category: "Interaction Design",
      description: "Exploring how digital information, the human body, and the surrounding environment can be connected through an interactive web-based experience that transforms invisible data into tangible, sensory interaction.",
      image: "https://images.unsplash.com/photo-1657812159077-90649115008c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMHdlYiUyMGRlc2lnbiUyMGVudmlyb25tZW50fGVufDF8fHx8MTc3Mjk2NDc2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "exploring-creative-acts-misuse",
      title: "Exploring Creative Acts Through Misuse",
      researcher: "Rintaro Fujita",
      category: "Interaction Design",
      description: "Investigating how the intentional misuse of technology can become a catalyst for creative expression, using black-box systems like iPhone text-recognition and smile-detection algorithms as artistic tools.",
      image: "https://images.unsplash.com/photo-1617004574627-d3bd7fb4a71a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydCUyMG1pc3VzZSUyMGNvbmNlcHR8ZW58MXx8fHwxNzcyOTY0NzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "impossible-worlds-vr",
      title: "Impossible Worlds in VR",
      researcher: "Adithyan K R",
      category: "VR",
      description: "Reimagining M.C. Escher's Relativity as a navigable virtual world of interconnected staircases, looping pathways, and gravity-defying structures built in Unreal Engine 5.",
      image: "https://images.unsplash.com/photo-1617004574627-d3bd7fb4a71a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydCUyMG1pc3VzZSUyMGNvbmNlcHR8ZW58MXx8fHwxNzcyOTY0NzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "acrylic-panel-floating-depth",
      title: "The Unintended Acrylic Panel Edge",
      researcher: "Rintaro Fujita",
      category: "Interaction Design",
      description: "Investigating how the optical properties of acrylic panel cross-sections create floating depth illusions without advanced display technologies, wearable devices, or complex engineering systems.",
      image: acrylicCover,
      imagePosition: "center 50%",
    },
  ];

  const categories = ["All", "VR", "Mobility", "Interaction Design"];
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <PageHeader
          title="Research Projects"
          description="Explore our cutting-edge research initiatives spanning VR, mobility design, and interactive technologies that push the boundaries of design innovation."
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm transition-all ${
                selectedCategory === cat
                  ? "bg-[#FF6600] text-white shadow-md"
                  : "bg-gray-100 text-[#666666] hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ResearchCard project={project} index={index} key={project.id} />
          ))}
        </div>

        {/* Publications Section */}
        <div className="mt-24 p-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
          <h2 className="text-3xl text-[#003153] mb-6 text-center">Publications & Papers</h2>
          <p className="text-lg text-[#666666] text-center mb-8 max-w-2xl mx-auto">
            Our research has been published in leading conferences and journals in design, HCI, and virtual reality.
          </p>
          <div className="text-center">
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-[#003153] text-white rounded-lg hover:bg-[#003153]/90 transition-colors shadow-lg hover:shadow-xl"
            >
              View Publications
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}