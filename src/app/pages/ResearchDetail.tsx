import { useParams, useNavigate, Link } from "react-router";
import { ArrowLeft, Clock, User, GraduationCap } from "lucide-react";

export function ResearchDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = [
    {
      id: "digital-visualisation-automotive-vr",
      title: "Digital Visualisation of Automotive in VR",
      researcher: "Piyush",
      professor: "Dr. Sarah Mitchell",
      duration: "6 months",
      category: "VR",
      description: "This groundbreaking research explores the convergence of automotive design and virtual reality technology, creating immersive environments where designers and engineers can visualize, interact with, and refine vehicle concepts in three-dimensional space. The project investigates how VR can transform traditional automotive design workflows by enabling real-time collaboration, spatial understanding, and intuitive manipulation of complex design elements. By leveraging cutting-edge VR hardware and custom-developed visualization software, this research demonstrates how immersive technologies can reduce prototyping costs, accelerate design iterations, and enable more creative exploration in automotive development. The findings suggest that VR-based visualization tools can significantly improve stakeholder communication, design decision-making, and overall product quality in the automotive industry.",
      bannerImage: "https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwVlIlMjB2aXN1YWxpemF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI5NjQ3NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "gradient-tracking",
      title: "Gradient Tracking",
      researcher: "Adithyan K R",
      professor: "Dr. James Chen",
      duration: "4 months",
      category: "Interaction Design",
      description: "This innovative research investigates novel interaction paradigms using gradient-based tracking systems for immersive virtual reality interfaces. The project develops sophisticated algorithms that interpret subtle gradient variations in visual input to enable more natural and intuitive user interactions within VR environments. By analyzing color, depth, and spatial gradients in real-time, the system creates a responsive interface that adapts to user movements and gestures with unprecedented precision. The research demonstrates how gradient tracking can enhance user experience by reducing latency, improving gesture recognition accuracy, and enabling more fluid interactions between users and virtual objects. Applications range from artistic creation tools to industrial design interfaces, showcasing the versatility and potential of this approach in transforming how we interact with digital content in three-dimensional space.",
      bannerImage: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkaWVudCUyMHRyYWNraW5nJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3Mjk2NDc2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "polka-dot-interaction",
      title: "Polka Dot Interaction",
      researcher: "Adithyan K R",
      professor: "Dr. James Chen",
      duration: "3 months",
      category: "Interaction Design",
      description: "This experimental research explores pattern-based interaction methods for immersive environments, focusing on the unique properties of polka dot patterns as interaction triggers and visual feedback mechanisms. The project investigates how distributed dot patterns can serve as both interface elements and tracking markers, creating a seamless integration between visual design and functional interaction. Through user studies and iterative prototyping, the research demonstrates how polka dot patterns can enhance spatial awareness, provide intuitive feedback, and create engaging interactive experiences in both augmented and virtual reality contexts. The findings reveal that pattern-based interactions can reduce cognitive load while maintaining aesthetic appeal, making them particularly suitable for creative applications where visual design and functionality must coexist harmoniously.",
      bannerImage: "https://images.unsplash.com/photo-1672685847201-f0866fb87c52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMGRvdCUyMHBhdHRlcm4lMjBkZXNpZ258ZW58MXx8fHwxNzcyOTY0NzY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "dynamic-reality-vehicle-engineering",
      title: "Dynamic Reality Integration for Vehicle Engineering",
      researcher: "Himansh Kumar Jatav",
      professor: "Dr. Robert Anderson",
      duration: "8 months",
      category: "Mobility",
      description: "This comprehensive research project examines the integration of dynamic reality technologies into contemporary vehicle engineering workflows, with a focus on enhancing design processes, improving testing methodologies, and accelerating product development cycles. The research develops frameworks for seamlessly incorporating mixed reality systems into existing engineering pipelines, enabling teams to visualize complex mechanical systems, simulate real-world conditions, and validate design decisions in virtual environments before committing to physical prototypes. Through collaboration with industry partners, the project demonstrates significant improvements in design efficiency, reduction in prototyping costs, and enhanced cross-functional communication. The findings provide valuable insights into how emerging reality technologies can transform traditional engineering practices and contribute to more sustainable, innovative vehicle development processes.",
      bannerImage: "https://images.unsplash.com/photo-1581662853886-0d02cbe6bb0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWhpY2xlJTIwZW5naW5lZXJpbmclMjBzaW11bGF0aW9ufGVufDF8fHx8MTc3Mjk2NDc2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "zippy3-rear-steered-escooter",
      title: "Zippy3- Rear Steered Urban E-Scooter",
      researcher: "Naveed Kadechur",
      professor: "Dr. Maria Santos",
      duration: "10 months",
      category: "Mobility",
      description: "This innovative mobility research project focuses on developing a revolutionary rear-steered electric scooter designed specifically for dense urban environments. The project addresses critical challenges in urban micro-mobility by reimagining fundamental vehicle dynamics and steering mechanisms. Through extensive prototyping, user testing, and computational analysis, the research demonstrates how rear-wheel steering can significantly improve maneuverability in tight spaces, enhance stability at various speeds, and provide a more intuitive riding experience for urban commuters. The Zippy3 design incorporates sustainable materials, modular components for easy maintenance, and intelligent safety features that respond to urban traffic patterns. This research contributes valuable insights to the growing field of sustainable urban transportation and presents a compelling alternative to conventional e-scooter designs.",
      bannerImage: "https://images.unsplash.com/photo-1759213215109-081f2c1f67de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHNjb290ZXIlMjB1cmJhbiUyMG1vYmlsaXR5fGVufDF8fHx8MTc3Mjk2NDc2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "compact-vtol-urban-commuting",
      title: "Compact VTOL for Urban Commuting",
      researcher: "Rangeet Hait",
      professor: "Dr. Elena Rodriguez",
      duration: "12 months",
      category: "Mobility",
      description: "This visionary research project explores the design and conceptualization of compact vertical take-off and landing aircraft tailored for urban commuting scenarios. With a primary focus on exterior form language and aesthetic design, the research balances futuristic styling with practical considerations such as aerodynamics, safety, and urban integration. The project employs advanced computational design tools, wind tunnel testing, and virtual prototyping to develop vehicle concepts that are both visually striking and functionally viable. Through extensive analysis of urban air mobility challenges, the research proposes innovative solutions for noise reduction, energy efficiency, and seamless integration with existing urban infrastructure. The findings contribute to the emerging field of urban air mobility and provide design frameworks that could influence the next generation of personal aerial vehicles.",
      bannerImage: "https://images.unsplash.com/photo-1676193672216-c3df9cda6b41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWVE9MJTIwYWlyY3JhZnQlMjB1cmJhbiUyMGRlc2lnbnxlbnwxfHx8fDE3NzI5NjQ3NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "gesture-game-immersive-ads",
      title: "Gesture-Based Game for Immersive Advertisements",
      researcher: "Sneha Tiwari",
      professor: "Dr. Priya Sharma",
      duration: "5 months",
      category: "Interaction Design",
      description: "This research investigates the intersection of gaming, gesture recognition, and advertising within the unique context of Indian urban spaces. The project develops innovative gesture-controlled interactive experiences that transform public advertising from passive viewing to active engagement. Through the creation of prototype systems deployed in high-traffic urban areas, the research demonstrates how gesture-based interactions can increase audience engagement, create memorable brand experiences, and generate valuable data about consumer behavior. The study addresses technical challenges such as varying lighting conditions, diverse user populations, and crowded environments while maintaining robust gesture recognition performance. The findings reveal important insights about cultural preferences in interaction design, the potential of gamification in advertising, and the ethical considerations of deploying interactive systems in public spaces.",
      bannerImage: "https://images.unsplash.com/photo-1727846990874-a0e0503d9dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZXN0dXJlJTIwYmFzZWQlMjBnYW1pbmclMjBpbnRlcmFjdGlvbnxlbnwxfHx8fDE3NzI5NjQ3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "interactive-website-contact-points",
      title: "Interactive Website of Contact Points",
      researcher: "RYO",
      professor: "Dr. Takeshi Yamamoto",
      duration: "7 months",
      category: "Interaction Design",
      description: "This experimental research explores the complex relationships between digital interfaces, the human body, and physical environments through the lens of contact points and interaction design. The project develops an innovative web-based platform that maps and visualizes the various points of contact between users, digital systems, and their surrounding spaces. Through interdisciplinary approaches combining interaction design, phenomenology, and embodied cognition research, this work challenges traditional notions of human-computer interaction by emphasizing the physical and spatial dimensions of digital experiences. The research demonstrates how acknowledging and designing for these contact points can lead to more intuitive, accessible, and meaningful digital interactions. The findings have implications for web design, accessibility, and the future development of spatial computing interfaces.",
      bannerImage: "https://images.unsplash.com/photo-1657812159077-90649115008c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMHdlYiUyMGRlc2lnbiUyMGVudmlyb25tZW50fGVufDF8fHx8MTc3Mjk2NDc2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "exploring-creative-acts-misuse",
      title: "Exploring Creative Acts through Misuse",
      researcher: "Rintaro",
      professor: "Dr. Kenji Nakamura",
      duration: "6 months",
      category: "VR",
      description: "This provocative research investigates the creative possibilities that emerge when technologies and design tools are used in ways that diverge from their intended purposes. By deliberately exploring 'misuse' as a creative methodology, the project uncovers new interaction paradigms, unexpected aesthetic possibilities, and alternative approaches to problem-solving in virtual reality contexts. Through systematic experimentation and documentation of unintended uses, the research reveals how constraints, accidents, and unconventional approaches can lead to innovative outcomes. The project challenges conventional notions of 'correct' tool usage and demonstrates how embracing misuse can foster creativity, encourage experimentation, and expand the boundaries of what's possible in digital design. The findings have implications for design education, creative practice, and the development of more flexible, open-ended design tools.",
      bannerImage: "https://images.unsplash.com/photo-1617004574627-d3bd7fb4a71a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydCUyMG1pc3VzZSUyMGNvbmNlcHR8ZW58MXx8fHwxNzcyOTY0NzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-[#003153] mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/research")}
            className="px-6 py-3 bg-[#FF6600] text-white rounded-lg hover:bg-[#FF6600]/90 transition-colors"
          >
            Back to Research
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-[#666666]">
            <Link to="/" className="hover:text-[#FF6600] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/research" className="hover:text-[#FF6600] transition-colors">
              Research
            </Link>
            <span>/</span>
            <span className="text-[#FF6600]">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Banner Section with Image LEFT and Title RIGHT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* LEFT: Image */}
          <div className="h-[400px] lg:h-[600px] overflow-hidden bg-gray-100 rounded-lg">
            <img
              src={project.bannerImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT: Title and Info */}
          <div className="flex flex-col justify-center">
            {/* Project Title */}
            <h1 className="text-5xl md:text-6xl text-[#003153] mb-12">{project.title}</h1>

            {/* Info List - Duration, Professor, Researcher */}
            <div className="space-y-6">
              {/* Duration */}
              <div>
                <p className="text-sm text-[#666666] mb-1">Duration</p>
                <p className="text-lg text-[#003153]">{project.duration}</p>
              </div>

              {/* Professor */}
              <div>
                <p className="text-sm text-[#666666] mb-1">Professor</p>
                <p className="text-lg text-[#003153]">{project.professor}</p>
              </div>

              {/* Researcher */}
              <div>
                <p className="text-sm text-[#666666] mb-1">Researcher</p>
                <p className="text-lg text-[#003153]">{project.researcher}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Description */}
        <div className="mb-24">
          <h2 className="text-2xl text-[#003153] mb-6">Project Overview</h2>
          <p className="text-lg text-[#666666] leading-relaxed">{project.description}</p>
        </div>

        {/* Photo Gallery - Bento Grid */}
        <div className="mb-24">
          <h2 className="text-2xl text-[#003153] mb-6">Gallery</h2>
          
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-6 gap-4 auto-rows-[200px]">
            {/* Large item - spans 3x2 */}
            <div className="col-span-3 row-span-2 bg-gray-200 rounded-xl"></div>
            
            {/* Tall right item - spans 3x2 */}
            <div className="col-span-3 row-span-2 bg-gray-200 rounded-xl"></div>
            
            {/* Bottom row - 3 equal items */}
            <div className="col-span-2 row-span-1 bg-gray-200 rounded-xl"></div>
            <div className="col-span-2 row-span-1 bg-gray-200 rounded-xl"></div>
            <div className="col-span-2 row-span-1 bg-gray-200 rounded-xl"></div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mb-24">
          <button
            onClick={() => navigate("/research")}
            className="px-8 py-3 bg-[#FF6600] text-white rounded-lg hover:bg-[#FF6600]/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Back to All Research Projects
          </button>
        </div>
      </div>
    </div>
  );
}