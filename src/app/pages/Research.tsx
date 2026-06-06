import { Tag } from "lucide-react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function ResearchCard({ project, index }: { project: any; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      style={{
        animation: isVisible ? `cardPopUp 0.6s ease-out ${index * 0.1}s both` : 'none',
        opacity: isVisible ? 1 : 0,
      }}
      className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all group flex flex-col h-[560px] overflow-hidden relative"
    >
      {/* Image */}
      <div className="h-[220px] overflow-hidden bg-gray-100 flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
        <h3 className="text-2xl text-[#003153] mb-3 group-hover:text-[#FF6600] transition-colors min-h-[64px] leading-tight">
          {project.title}
        </h3>

        {/* Researcher Name */}
        <p className="text-sm text-[#666666] mb-3">
          Researcher: {project.researcher}
        </p>

        {/* Description */}
        <p className="text-sm text-[#666666] leading-relaxed flex-grow line-clamp-4">{project.description}</p>

        {/* View More Detail Button */}
        <div className="mt-4">
          <Link
            to={`/research/${project.id}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#003153] text-white text-sm rounded-lg hover:bg-[#FF6600] transition-colors"
          >
            View Details
            <ArrowUpRight size={16} />
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
      title: "Digital Visualisation of Automotive in VR",
      researcher: "Piyush",
      category: "VR",
      description: "Exploring immersive virtual reality environments for automotive design visualization and interactive prototyping workflows.",
      image: "https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwVlIlMjB2aXN1YWxpemF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI5NjQ3NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
      category: "Mobility",
      description: "Integrating dynamic reality technologies into vehicle engineering workflows for enhanced design and testing.",
      image: "https://images.unsplash.com/photo-1581662853886-0d02cbe6bb0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWhpY2xlJTIwZW5naW5lZXJpbmclMjBzaW11bGF0aW9ufGVufDF8fHx8MTc3Mjk2NDc2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "zippy3-rear-steered-escooter",
      title: "Zippy3- Rear Steered Urban E-Scooter",
      researcher: "Naveed Kadechur",
      category: "Mobility",
      description: "Innovative rear-steered electric scooter design for improved urban mobility and maneuverability.",
      image: "https://images.unsplash.com/photo-1759213215109-081f2c1f67de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHNjb290ZXIlMjB1cmJhbiUyMG1vYmlsaXR5fGVufDF8fHx8MTc3Mjk2NDc2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "compact-vtol-urban-commuting",
      title: "Compact VTOL for Urban Commuting",
      researcher: "Rangeet Hait",
      category: "Mobility",
      description: "Compact VTOL design for urban commuting, focusing on exterior form language and aesthetic design of vertical take-off aircraft.",
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
      researcher: "RYO",
      category: "Interaction Design",
      description: "Exploring the intersection between digital interfaces, human body, and physical environment through contact points.",
      image: "https://images.unsplash.com/photo-1657812159077-90649115008c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMHdlYiUyMGRlc2lnbiUyMGVudmlyb25tZW50fGVufDF8fHx8MTc3Mjk2NDc2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "exploring-creative-acts-misuse",
      title: "Exploring Creative Acts through Misuse",
      researcher: "Rintaro",
      category: "VR",
      description: "Investigating creative possibilities that emerge through unconventional and unexpected uses of technology and design.",
      image: "https://images.unsplash.com/photo-1617004574627-d3bd7fb4a71a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydCUyMG1pc3VzZSUyMGNvbmNlcHR8ZW58MXx8fHwxNzcyOTY0NzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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