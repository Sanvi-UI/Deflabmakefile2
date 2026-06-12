import { useParams, useNavigate, Link } from "react-router";
import { ArrowLeft, Clock, User, GraduationCap } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import driveHero from "@/imports/image-29.png";
import driveImg2 from "@/imports/image-30.png";
import driveImg3 from "@/imports/image-31.png";
import escooterHero from "@/imports/image-32.png";
import escooterImg2 from "@/imports/image-33.png";
import escooterImg3 from "@/imports/image-34.png";
import escooterPhoto from "@/imports/image-35.png";
import acrylicHero from "@/imports/image-40.png";
import acrylicImg2 from "@/imports/image-41.png";
import acrylicImg3 from "@/imports/image-42.png";
import acrylicImg4 from "@/imports/image-43.png";
import piyushHero from "@/imports/image-36.png";
import piyushImg2 from "@/imports/image-37.png";
import piyushImg3 from "@/imports/image-38.png";
import piyushImg4 from "@/imports/image-39.png";
import creativeImg1 from "@/imports/image-81.png";
import creativeImg2 from "@/imports/image-82.png";
import creativeImg3 from "@/imports/image-83.png";
import creativeImg4 from "@/imports/image-84.png";
import creativeBanner from "@/imports/image-85.png";
import impossibleImg1 from "@/imports/image-86.png";
import impossibleImg2 from "@/imports/image-87.png";
import impossibleImg3 from "@/imports/image-88.png";
import impossibleImg4 from "@/imports/image-89.png";
import vtolImg1 from "@/imports/image-90.png";
import vtolImg2 from "@/imports/image-91.png";
import vtolImg3 from "@/imports/image-92.png";
import vtolImg4 from "@/imports/image-93.png";
import vtolImg5 from "@/imports/image-94.png";
import vtolImg6 from "@/imports/image-95.png";
import vtolBanner from "@/imports/image-96.png";
import impossibleBanner from "@/imports/image-97.png";
import snehaLocalBanner from "../../imports/image-105.png";
import ryoImg1 from "../../imports/image-106.png";
import ryoImg2 from "../../imports/image-107.png";
import ryoImg3 from "../../imports/image-108.png";
import ryoImg4 from "../../imports/image-109.png";
import ryoBanner from "../../imports/image-110.png";
import snehaImg1 from "@/imports/image-98.png";
import snehaImg2 from "@/imports/image-99.png";
import snehaImg3 from "@/imports/image-100.png";
import snehaImg4 from "@/imports/image-101.png";
import snehaImg5 from "@/imports/image-102.png";
import snehaImg6 from "@/imports/image-103.png";
import polkadotBanner from "../../imports/polkadot_research.webp";
import creativeMisuseBanner from "../../imports/creative_misuse.webp";

export function ResearchDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = [
    {
      id: "digital-visualisation-automotive-vr",
      title: "Automotive VR Visualization",
      researcher: "Piyush Soni",
      professor: "Prof. Sugandh Malhotra & Assist. Prof. Swarnadeep Nath",
      duration: "6 months",
      category: "VR",
      description: "This project focuses on developing an efficient workflow for converting automotive CAD models into immersive Virtual Reality experiences. As the automotive industry increasingly adopts VR for design reviews, customer engagement, and product visualization, the conversion of complex NURBS-based CAD models into optimized VR assets remains a significant challenge. The research investigates the limitations of existing workflows and proposes a structured approach for transforming high-fidelity automotive models created in Autodesk Alias into VR-ready assets while preserving visual quality and performance. The study emphasizes mesh optimization, topology refinement, texture preparation, and workflow standardization to improve the overall efficiency of automotive VR content creation.\n\nThe project involved extensive experimentation using industry-standard tools such as Alias, Maya, Blender, Substance Painter, and Unreal Engine. Multiple iterations of NURBS-to-mesh conversion were conducted, followed by retopology, surface continuity analysis, mesh optimization, UV mapping, texturing, and VR integration. Quality assessment techniques including Zebra Analysis and Proximity Analysis were used to evaluate model accuracy and surface smoothness before deployment in a virtual environment. The final outcome is a comprehensive workflow that enables designers and developers to create high-quality automotive VR experiences more efficiently. By improving asset quality, reducing conversion issues, and enhancing visualization capabilities, the project contributes to the growing use of immersive technologies in automotive design, marketing, and user experience evaluation.",
      bannerImage: "",
      localBannerImage: piyushHero,
      bannerImagePosition: "center 50%",
      galleryImages: [piyushHero, piyushImg2, piyushImg3, piyushImg4],
    },
    {
      id: "gradient-tracking",
      title: "Gradient Tracking",
      researcher: "Adithyan K R",
      professor: "Dr. James Chen",
      duration: "2 months",
      category: "Interaction Design",
      description: "This innovative research investigates novel interaction paradigms using gradient-based tracking systems for immersive virtual reality interfaces. The project develops sophisticated algorithms that interpret subtle gradient variations in visual input to enable more natural and intuitive user interactions within VR environments. By analyzing color, depth, and spatial gradients in real-time, the system creates a responsive interface that adapts to user movements and gestures with unprecedented precision. The research demonstrates how gradient tracking can enhance user experience by reducing latency, improving gesture recognition accuracy, and enabling more fluid interactions between users and virtual objects. Applications range from artistic creation tools to industrial design interfaces, showcasing the versatility and potential of this approach in transforming how we interact with digital content in three-dimensional space.",
      bannerImage: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkaWVudCUyMHRyYWNraW5nJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3Mjk2NDc2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "polka-dot-interaction",
      title: "Polka Dot Interaction",
      researcher: "Adithyan K R",
      professor: "Dr. James Chen",
      duration: "2 months",
      category: "Interaction Design",
      description: "This experimental research explores pattern-based interaction methods for immersive environments, focusing on the unique properties of polka dot patterns as interaction triggers and visual feedback mechanisms. The project investigates how distributed dot patterns can serve as both interface elements and tracking markers, creating a seamless integration between visual design and functional interaction. Through user studies and iterative prototyping, the research demonstrates how polka dot patterns can enhance spatial awareness, provide intuitive feedback, and create engaging interactive experiences in both augmented and virtual reality contexts. The findings reveal that pattern-based interactions can reduce cognitive load while maintaining aesthetic appeal, making them particularly suitable for creative applications where visual design and functionality must coexist harmoniously.",
      bannerImage: "",
      localBannerImage: polkadotBanner,
      galleryImages: [polkadotBanner],
    },
    {
      id: "dynamic-reality-vehicle-engineering",
      title: "Dynamic Reality Integration for Vehicle Engineering",
      researcher: "Himansh Kumar Jatav",
      professor: "Prof. Sugandh Malhotra",
      duration: "2 months",
      category: "Mobility",
      description: "DRIVE (Dynamic Reality Integration for Vehicle Engineering) is a VR-based automotive exploration platform developed using Unity and the XR Interaction Toolkit. The project addresses the limitations of traditional 2D and screen-based 3D visualization methods by creating an immersive, interactive environment where users can explore a detailed vehicle model at true 1:1 scale. Key features include grab-and-release mechanics for the hood and all four doors, a dynamic toggle to hide the car's exterior and reveal internal components, and contextual part-name display on interaction. Built with a focus on intuitive navigation, physical realism, and user comfort, the application demonstrates the potential of VR as a tool for automotive education, engineering review, and design exploration. The platform draws on real-world industry precedents where manufacturers like Ford and Volkswagen already use VR for design review and technician training, validating the approach taken in this project. Physics-based interaction through Unity's HingeJoint system ensures that component movement mirrors real-world behavior, strengthening the educational value of the experience. User testing confirmed that the application was intuitive, comfortable, and effective at communicating spatial relationships within the vehicle. The project lays a strong foundation for future development including driving simulation, multi-vehicle support, and real-time diagnostic data integration.",
      bannerImage: "",
      localBannerImage: driveHero,
      galleryImages: [driveHero, driveImg2, driveImg3],
    },
    {
      id: "zippy3-rear-steered-escooter",
      title: "Zippy3- Rear Steered Urban E-Scooter",
      researcher: "Naveed Kadechur",
      professor: "Prof. Sugandh Malhotra",
      duration: "2 months",
      category: "Mobility",
      description: "This project focuses on the design and fabrication of a three-wheeled utilitarian electric scooter purpose-built for short-range urban and semi-urban commuting. The process moves through four phases — research and benchmarking of existing e-scooter solutions, conceptual sketching and 3D modelling of the frame, electronics integration and physical fabrication using welding and bending, and final assembly with full system testing. Key design priorities include rider ergonomics, load-carrying capacity, frame stability, and ease of use. Electrical components including a hub motor, battery, and controller are sourced through DEF Lab and integrated into a custom-fabricated frame. The benchmarking phase draws comparisons across personal commuting, last-mile delivery, and intra-campus transport use cases to ensure the design is grounded in real-world application scenarios. Material selection and detailed fabrication drawings are developed alongside the 3D model to bridge the gap between concept and manufacture efficiently. The project also builds the researcher's practical skills in electrical systems integration, time management, and workshop fabrication techniques relevant to real-world vehicle development. The result is a stable, low-maintenance personal mobility vehicle that demonstrates how thoughtful design and hands-on engineering can together produce a viable solution for everyday urban transport.",
      bannerImage: "",
      localBannerImage: escooterPhoto,
      bannerImagePosition: "center 50%",
      bannerStroke: true,
      galleryImages: [escooterHero, escooterImg2, escooterImg3],
    },
    {
      id: "compact-vtol-urban-commuting",
      title: "Compact eVTOL for Urban Commuting",
      researcher: "Rangeet Hait",
      professor: "Prof. Sugandh Malhotra",
      duration: "2 months",
      category: "Mobility",
      description: "This project focuses on designing a compact electric Vertical Take-Off and Landing (eVTOL) vehicle intended to address the growing challenges of urban transportation, traffic congestion, and increasing travel times in densely populated cities. Through extensive research on transportation infrastructure, urban mobility patterns, existing eVTOL technologies, and aviation design principles, the project investigates the potential of personal aerial mobility as an efficient alternative to conventional road-based commuting. The study examines current developments in the eVTOL industry, analyzes existing aircraft configurations, and identifies opportunities for creating a vehicle that combines compactness, efficiency, safety, and user accessibility. Particular attention is given to the needs of modern urban professionals who require faster travel options while maintaining flexibility for both intra-city and intercity journeys.\n\nThe design process incorporates user research, market analysis, aviation ergonomics, pilot-orientation studies, and form exploration using advanced visualization techniques, including VR sketching and digital modeling. The final concept proposes a low-altitude, single-seater personal eVTOL vehicle capable of vertical take-off and landing while maintaining stable flight performance and a compact footprint for convenient parking and storage. The project emphasizes ease of operation for individuals without formal pilot training, making personal air mobility more accessible to a broader audience. By integrating futuristic transportation technologies with human-centered design principles, the proposed solution aims to reduce dependency on congested road networks, shorten commuting times, and provide a practical vision for the future of sustainable urban transportation. The project ultimately demonstrates how emerging aviation technologies can be leveraged to create innovative mobility solutions that enhance efficiency, convenience, and quality of life in rapidly urbanizing environments.",
      bannerImage: "",
      localBannerImage: vtolBanner,
      galleryImages: [vtolImg5, vtolImg6, vtolImg1, vtolImg2, vtolImg3, vtolImg4],
    },
    {
      id: "gesture-game-immersive-ads",
      title: "Gesture-Based Game for Immersive Advertisements",
      researcher: "Sneha Tiwari",
      professor: "Prof. Sugandh Malhotra",
      duration: "2 months",
      category: "Interaction Design",
      description: "This project explores the potential of gesture-based interactive gaming as a tool for immersive advertising in Indian urban spaces. A 3D space-themed game was designed and developed using Unity and Python with MediaPipe-based hand gesture recognition, enabling users to interact through natural gestures such as bursting enemies and saving astronauts. Inspired by successful global advergaming campaigns, the project investigates how interactive public installations can transform traditional passive advertising into engaging, participatory experiences. The system was designed for deployment in high-footfall public environments such as malls, transit hubs, and urban plazas, where it can attract attention, encourage active participation, and improve message recall. Through user testing and evaluation, the research examined the effectiveness of gesture-controlled gameplay in enhancing audience engagement, emotional connection, and overall interaction quality, while demonstrating the potential of game-based experiences as innovative advertising solutions for urban India.",
      bannerImage: "",
      localBannerImage: snehaLocalBanner,
      galleryImages: [snehaImg2, snehaImg3, snehaImg4, snehaImg6],
    },
    {
      id: "interactive-website-contact-points",
      title: "Interactive Website of Contact Points",
      researcher: "Ryo Nakamoto",
      professor: "Prof. Sugandh Malhotra & Prof. Shin Matsumura",
      duration: "6 months",
      category: "Interaction Design",
      description: "This project explores the relationship between digital information, the human body, and the surrounding environment through an interactive web-based experience. As internet-connected devices such as smartphones and laptops have become an integral part of everyday life, people increasingly rely on digital information to make decisions and interact with the world. The project investigates how information, which is often invisible and exists as digital data, can be transformed into a tangible and bodily experience. Through extensive research on internet and smartphone usage, the researcher examined how individuals continuously engage with information through screens in both private and public spaces.\n\nThe outcome of the project is an interactive website inspired by the poem \"Put Your Hands Up to the Sun.\" The website encourages users to take their smartphone screen into sunlight, where the display gradually turns red, evoking the experience of seeing blood flow through a hand illuminated by sunlight. By combining the smartphone, the user's body, and natural environmental elements such as the sun, the project creates a unique sensory interaction that raises awareness of the connection between digital media and physical existence. The work encourages users to reflect on how technology mediates their perception of the world while simultaneously reconnecting them with their own bodies and immediate surroundings. Ultimately, the project presents an artistic and experiential approach to understanding the invisible relationship between information, technology, human perception, and environmental interaction.",
      bannerImage: "",
      localBannerImage: ryoBanner,
      galleryImages: [ryoImg1, ryoImg2, ryoImg3, ryoImg4],
    },
    {
      id: "exploring-creative-acts-misuse",
      title: "Exploring Creative Acts Through Misuse",
      researcher: "Rintaro Fujita",
      professor: "Prof. Sugandh Malhotra & Prof. Scott Allen",
      duration: "6 months",
      category: "Interaction Design",
      description: "This project investigates how the intentional misuse of technology can become a catalyst for creative expression and artistic innovation. Inspired by historical examples such as turntable scratching, circuit bending, and other unconventional technological practices, the research explores how digital systems can be repurposed beyond their intended functions to reveal unexpected behaviors and generate novel forms of interaction. The study specifically focuses on black-box technologies such as iPhone text-recognition systems and camera smile-detection algorithms, examining how their limitations, biases, and recognition patterns can be transformed into creative tools. Through a series of experimental interventions, the researcher analyzed how these systems respond to manipulated visual inputs, abstract imagery, and deliberately misleading designs.\n\nTo support this investigation, a custom iPhone Text Recognition (I2T) Simulator was developed using Swift and Xcode, enabling large-scale testing of image-recognition behavior. Thousands of generated images, abstract facial representations, Bezier-curve drawings, and visual compositions were processed to provoke algorithmic misrecognition. The findings revealed that machine-vision systems often identify patterns and meanings where humans perceive none, exposing hidden biases embedded within recognition algorithms. By leveraging these unexpected outcomes, the project demonstrates how technological misuse can serve as a medium for artistic exploration, encouraging new ways of understanding the relationship between human perception, machine intelligence, and creative design. Ultimately, the work highlights how errors, glitches, and misrecognitions can become valuable resources for innovation and experimental visual expression.",
      bannerImage: "",
      localBannerImage: creativeMisuseBanner,
      galleryImages: [creativeMisuseBanner, creativeImg1, creativeImg3, creativeImg2, creativeImg4],
    },
    {
      id: "impossible-worlds-vr",
      title: "Impossible Worlds in VR",
      researcher: "Adithyan K R",
      professor: "Prof. Sugandh Malhotra",
      duration: "6 months",
      category: "VR",
      description: "This project explores how virtual reality can transform static works of art into immersive and interactive experiences by reimagining M.C. Escher's famous artwork Relativity as a navigable virtual world. The research investigates the potential of VR to create paradoxical environments that challenge conventional understandings of space, gravity, and movement. Inspired by Escher's impossible architecture, the project enables users to step inside a world of interconnected staircases, looping pathways, and gravity-defying structures that would be impossible to experience in the physical world. By combining artistic inspiration with advanced digital technologies, the project seeks to understand how immersive environments can alter human perception and create entirely new forms of spatial exploration.\n\nThe development process involved creating optimized low-poly 3D assets using Autodesk Maya, applying detailed textures through Adobe Substance Painter, and assembling the complete environment in Unreal Engine 5. A custom teleportation door system was designed and implemented using Unreal Engine Blueprints, allowing users to move seamlessly between different areas and experience non-Euclidean spatial relationships. Additional interactive elements such as animated staircases, smooth locomotion systems, and spatial navigation mechanics were integrated to enhance immersion and usability. User testing focused on understanding how individuals react to environments that deliberately challenge their expectations of reality and spatial logic. The final outcome demonstrates how virtual reality can bridge the gap between traditional art and interactive technology, creating engaging experiences that encourage curiosity, exploration, and deeper reflection on the nature of perception, architecture, and human cognition.",
      bannerImage: "",
      localBannerImage: impossibleBanner,
      galleryImages: [impossibleImg1, impossibleImg2, impossibleImg3, impossibleImg4],
    },
    {
      id: "acrylic-panel-floating-depth",
      title: "The Unintended Acrylic Panel Edge",
      researcher: "Rintaro Fujita",
      professor: "Prof. Sugandh Malhotra",
      duration: "6 months",
      category: "Interaction Design",
      description: "This research explores the potential of unintended material properties to create novel visual experiences and alternative forms of display technology. The project investigates how acrylic sheets arranged in carefully designed cross-sectional configurations can generate a unique floating-depth illusion, where images appear to exist in front of the physical surface without the need for electronic displays, wearable devices, or complex optical systems. Inspired by the concept of Creative Unintentional Use, the study intentionally examines how materials can be used beyond their conventional purpose to uncover unexpected opportunities for design innovation. Through iterative prototyping, optical experimentation, and material exploration, multiple acrylic configurations were developed and tested to understand how refraction, occlusion, and viewing angles influence visual perception.\n\nTo evaluate the experiential qualities of the display, the researcher conducted qualitative user studies with participants from diverse design and engineering backgrounds. Observations and interviews revealed that users interpreted the same visual phenomenon in remarkably different ways, describing it as a hologram, mirage, ghost-like image, magical effect, or floating screen. The findings demonstrated that visual ambiguity can encourage curiosity, physical engagement, exploration, and personal meaning-making rather than being perceived as a design flaw. The project contributes to the fields of Human-Computer Interaction (HCI), Material-Driven Design, and interactive display research by proposing ambiguity, material intelligence, and embodied interaction as valuable design resources. The outcome presents a low-cost and innovative approach to creating immersive visual experiences that can be applied in museums, exhibitions, educational environments, interactive installations, and future display technologies, while challenging conventional assumptions that higher fidelity and clarity always lead to better user experiences.",
      bannerImage: "",
      localBannerImage: acrylicImg2,
      bannerImagePosition: "center 50%",
      galleryImages: [acrylicHero, acrylicImg2, acrylicImg3, acrylicImg4],
      galleryNaturalWidthFromIndex: 2,
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
          <div className={`h-[400px] lg:h-[600px] overflow-hidden bg-gray-100 rounded-lg${(project as any).bannerStroke ? " border-2 border-black" : ""}`}>
            {(project as any).localBannerImage ? (
              <ImageWithFallback
                src={(project as any).localBannerImage}
                alt={project.title}
                className="w-full h-full object-cover"
                style={{ objectPosition: (project as any).bannerImagePosition ?? "center 55%" }}
              />
            ) : (
              <img
                src={project.bannerImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* RIGHT: Title and Info */}
          <div className="flex flex-col justify-center">
            {/* Project Title */}
            <h1 className="text-5xl md:text-6xl text-[#003153] mb-12">
              {(project as any).shortTitle ?? project.title}
            </h1>

            {/* Info List - Researcher, Professor, Duration */}
            <div className="space-y-6">
              {/* Researcher */}
              <div>
                <p className="text-sm text-[#666666] mb-1">Researcher</p>
                <p className="text-lg text-[#003153]">{project.researcher}</p>
              </div>

              {/* Professor */}
              <div>
                <p className="text-sm text-[#666666] mb-1">Professor</p>
                <div className="flex flex-col gap-1">
                  {project.professor.split(" & ").map((name, i) => (
                    <p key={i} className="text-lg text-[#003153]">{name}</p>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div>
                <p className="text-sm text-[#666666] mb-1">Duration</p>
                <p className="text-lg text-[#003153]">{project.duration}</p>
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

        {/* Photo Gallery */}
        <div className="mb-24">
          <h2 className="text-2xl text-[#003153] mb-6">Gallery</h2>

          {(project as any).galleryImages ? (
            /* Horizontal scrollable strip — all images equal height, cropped consistently */
            <div className="overflow-x-auto -mx-4 px-4 pb-2">
              <div className="flex gap-6 items-start" style={{ width: "max-content" }}>
                {((project as any).galleryImages as string[]).map((img, i) => {
                  const naturalFrom = (project as any).galleryNaturalWidthFromIndex ?? Infinity;
                  const isNatural = i >= naturalFrom;
                  return isNatural ? (
                    <div
                      key={i}
                      className="flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 shadow-md"
                      style={{ height: "380px" }}
                    >
                      <ImageWithFallback
                        src={img}
                        alt={`${project.title} image ${i + 1}`}
                        style={{ height: "380px", width: "auto", display: "block" }}
                      />
                    </div>
                  ) : (
                    <div
                      key={i}
                      className="flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 shadow-md"
                      style={{ width: "560px", height: "380px" }}
                    >
                      <ImageWithFallback
                        src={img}
                        alt={`${project.title} image ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Bento Grid Layout for other projects */
            <div className="grid grid-cols-6 gap-4 auto-rows-[200px]">
              <div className="col-span-3 row-span-2 bg-gray-200 rounded-xl"></div>
              <div className="col-span-3 row-span-2 bg-gray-200 rounded-xl"></div>
              <div className="col-span-2 row-span-1 bg-gray-200 rounded-xl"></div>
              <div className="col-span-2 row-span-1 bg-gray-200 rounded-xl"></div>
              <div className="col-span-2 row-span-1 bg-gray-200 rounded-xl"></div>
            </div>
          )}
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