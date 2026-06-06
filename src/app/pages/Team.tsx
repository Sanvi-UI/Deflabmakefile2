import { useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { TeamMemberCard, type TeamMember } from "../components/TeamMemberCard";
import { ProfileModal } from "../components/ProfileModal";
import lalitDasImg from "../../imports/image-9.png";
import rintaroImg from "../../imports/image-10.png";
import sugandhImg from "../../imports/image-18.png";
import nabajitImg from "../../imports/image-12.png";
import dhiruImg from "../../imports/image-19.png";
import piyushImg from "../../imports/image-17.png";
import shivamImg from "../../imports/image-16.png";
import ryotaImg from "../../imports/image-15.png";
import ryoImg from "../../imports/image-14.png";
import krishnanImg from "../../imports/image-13.png";
import mayuImg from "../../imports/image-20.png";

interface TeamCategory {
  category: string;
  members: TeamMember[];
}

const teamCategories: TeamCategory[] = [
  {
    category: "Professors",
    members: [
      {
        name: "Dr. Lalit Das",
        role: "Faculty",
        department: "Design Research",
        cardRole: "Faculty",
        cardDepartment: "Design Research",
        bio: "Dr. Lalit Das leads design research initiatives at DeF Lab, with a focus on future mobility and immersive systems. His work bridges academic inquiry and industry collaboration to advance human-centered design practice.",
        interests: ["Future Mobility", "Design Research", "Human-Centered Design"],
        email: "lalit.das@deflab.in",
        linkedin: "https://linkedin.com/in/lalitdas",
        image: lalitDasImg,
      },
      {
        name: "Sugandh Malhotra",
        role: "Professor Incharge",
        department: "Design & Technology",
        cardRole: "Professor Incharge",
        cardDepartment: "Design & Technology",
        bio: "Sugandh explores the intersection of design and emerging technologies, leading projects that prototype new interactions across VR, AR, and digital fabrication platforms.",
        interests: ["VR/AR", "Digital Prototyping", "Interaction Design"],
        email: "sugandh@deflab.in",
        linkedin: "https://linkedin.com/in/sugandh",
        image: sugandhImg,
      },
    ],
  },
  {
    category: "PhD Researchers",
    members: [
      {
        name: "Nabajit Deka",
        role: "Researcher & Design Practitioner",
        department: "IIT Bombay-Monash Research Academy",
        cardRole: "PhD Candidate",
        cardDepartment: "Research",
        bio: "Nabajit Deka is a researcher and design practitioner at the IIT Bombay-Monash Research Academy, Mumbai working at the intersection of design thinking, participatory design, and social innovation. His work focuses on empowering resource-constrained communities in India through inclusive toolkits, co-creation methods, and community-driven innovation. He holds a bachelor's degree in architecture and a master's degree in visual communication, which continue to shape his interdisciplinary approach to research and practice.",
        interests: ["Participatory Design", "Social Innovation", "Inclusive Design", "Community-Driven Innovation"],
        email: "nabajit@deflab.in",
        linkedin: "https://linkedin.com/in/nabajit",
        image: nabajitImg,
      },
      {
        name: "Shivam Vats",
        role: "PhD Student",
        department: "IDC School of Design, IIT Bombay",
        cardRole: "PhD Candidate",
        cardDepartment: "Research",
        bio: "Shivam Vats is a PhD student at the IDC School of Design, IIT Bombay, working in the field of Design for Sustainability. He is also a product designer, and his research focuses on developing sustainable design frameworks that integrate sustainability into the core of the design process. He completed his Master's degree from U.P. Institute of Design and his Bachelor's degree from Dada Lakhmi Chand State University of Performing and Visual Arts. His academic interests include sustainability, design theory, and design research methods. Apart from his academic and research pursuits, he is also an athlete who actively participates in marathons and endurance runs.",
        interests: ["Design for Sustainability", "Product Design", "Design Theory", "Marathons & Endurance Runs"],
        email: "shivam@deflab.in",
        linkedin: "https://linkedin.com/in/shivamvats",
        image: shivamImg,
      },
      {
        name: "Krishnanunni KU",
        role: "PhD Scholar",
        department: "IDC School of Design, IIT Bombay",
        cardRole: "PhD Candidate",
        cardDepartment: "Research",
        bio: "Krishnanunni K U is a PhD scholar at the IDC School of Design, Indian Institute of Technology Bombay, working at the intersection of design, perception, AI, and nature-inspired visual systems. Originally from Kerala, India, his research explores how humans perceive naturalness in computer-generated representations of plant forms, particularly through growth and decay patterns. Alongside his academic research, he has professional experience in footwear and industrial design, with a focus on nature-inspired design approaches. His interests span computational creativity, visual perception, music, sketching, and interdisciplinary design research.",
        interests: ["Computational Creativity", "Visual Perception", "Nature-Inspired Design", "Footwear & Industrial Design"],
        email: "krishnanunni@deflab.in",
        linkedin: "https://linkedin.com/in/krishnanunni",
        image: krishnanImg,
      },
      {
        name: "Uthra S Ganesh",
        role: "Industrial & Textile Design Practitioner",
        department: "IITB-Monash Research Academy",
        cardRole: "PhD Candidate",
        cardDepartment: "Research",
        bio: "Uthra S Ganesh is an Industrial and Textile design practitioner at the IITB-Monash Research Academy. She holds a Bachelor's degree in Textile Design from NIFT Chennai and a Master's degree in Industrial Design from the IDC School of Design, IIT Bombay. Her work explores the intersections of materiality, accessibility, and human-centered systems.",
        interests: ["Industrial Design", "Textile Design", "Materiality", "Accessibility", "Human-Centered Design"],
        email: "uthra@deflab.in",
        linkedin: "https://linkedin.com/in/uthraganesh",
      },
    ],
  },
  {
    category: "Staff",
    members: [
      {
        name: "Dhiru Boro",
        role: "Animation Designer | Storyboard Artist | VR Artist",
        department: "Central Institute of Technology Kokrajhar",
        cardRole: "Staff",
        cardDepartment: "Technical Support",
        bio: "Dhiru Boro completed his Bachelor of Design in Animation Design from the Central Institute of Technology Kokrajhar. His interests lie in animation, visual storytelling, storyboarding, and immersive media. Over the years, he has worked on projects involving character design, sequential storytelling, digital illustration, and VR-based creative experiences using tools such as Gravity Sketch, Open Brush, and Kingspray VR. He is particularly interested in exploring how emerging technologies can be used to create engaging stories and interactive experiences. He is also interested in cultural preservation through visual storytelling and exploring how design and technology can help document, communicate, and share stories with wider audiences. Through his work, he strives to create meaningful experiences while continuously learning and experimenting with new creative approaches.",
        interests: ["Animation", "Visual Storytelling", "Storyboarding", "Immersive Media", "VR Art", "Cultural Preservation"],
        email: "dhiru@deflab.in",
        linkedin: "https://linkedin.com/in/dhiruboro",
        image: dhiruImg,
      },
      {
        name: "Piyush Soni",
        role: "Senior Project Staff",
        department: "Design for Future Lab, IDC School of Design, IIT Bombay",
        cardRole: "Staff",
        cardDepartment: "Technical Support",
        bio: "Piyush Soni is a Senior Project Staff member at the Design for Future Lab within IIT Bombay's IDC School of Design. Building on his design degree from the Central Institute of Technology Kokrajhar, he has recently sought to expand his academic journey at IIT. His core expertise lies at the intersection of immersive technologies (VR/AR/MR), 3D animation, and real-time interactive installations. As both an educator and researcher, he has pioneered a sixteen week VR sketching course and authored a research paper on 4D immersive pedagogy.",
        interests: ["Immersive Technologies", "VR/AR/MR", "3D Animation", "Interactive Installations", "4D Immersive Pedagogy"],
        email: "piyush@deflab.in",
        linkedin: "https://linkedin.com/in/piyushsoni",
        image: piyushImg,
      },
      {
        name: "Zecharia Sari",
        role: "Staff",
        department: "Technical Support",
        cardRole: "Staff",
        cardDepartment: "Technical Support",
        bio: "Zecharia Sari is originally from the hills of Shillong, Meghalaya, also known as the abode of clouds. He completed his schooling at St. Anthony's Higher Secondary School and pursued his Bachelor of Design at the Central Institute of Technology, where he began his creative journey and eventually evolved into a specialization in design and technology.",
        interests: ["Design", "Technology", "Technical Support", "Operations"],
        email: "zecharia@deflab.in",
        linkedin: "https://linkedin.com/in/zechariasari",
      },
      {
        name: "Vaibhav Chawla",
        role: "Mobility & Vehicle Designer",
        department: "IDC School of Design, IIT Bombay",
        cardRole: "Staff",
        cardDepartment: "Mobility & Vehicle Design",
        bio: "Vaibhav Chawla is from Meerut, Uttar Pradesh. He designs cool stuff like cars, watches and much more. He holds a B.Des in Fashion and Lifestyle Accessory Design from NIFT Bombay and an M.Des in Mobility and Vehicle Design from IDC School of Design, IIT Bombay.",
        interests: ["Mobility Design", "Vehicle Design", "Accessory Design", "Watches"],
        email: "vaibhav@deflab.in",
        linkedin: "https://linkedin.com/in/vaibhavchawla",
      },
    ],
  },
  {
    category: "Interns",
    members: [
      {
        name: "Sanskar Bihade",
        role: "CGI Artist, Filmmaker & Game Design Enthusiast",
        department: "B.Des 3, IDC School of Design",
        cardRole: "Intern",
        cardDepartment: "Immersive Cross-World Experience",
        bio: "Sanskar Bihade is a CGI Artist, Filmmaker, and Game Design Enthusiast. Over the past couple of years, he has dabbled across various 3D and CGI pipelines to create stories and short films that sit with the audience. He has also worked under various startups as a 3D visual communication designer, where his drive for creation in 3D is never-ending. He now looks forward to forging experiences that are more immersive to the audience than a simple 2D screen. Developing VR experiences is where he is leaning, while sticking to his roots as a storyteller, at the intersection of art, content, stories, and immersive experiences. He is proficient in Blender 3D, Substance 3D Painter, and Marvelous Designer, and a novice at Unreal Engine.",
        interests: ["CGI", "Filmmaking", "Game Design", "VR Experiences", "3D Visual Communication", "Storytelling"],
        email: "sanskar@deflab.in",
        linkedin: "https://linkedin.com/in/sanskarbihade",
      },
      {
        name: "Ayush Patil",
        role: "Intern",
        department: "National Institute of Design, Ahmedabad",
        cardRole: "Intern",
        cardDepartment: "Gamified Learning using Interaction",
        bio: "Ayush (Ash) is from Nagpur, Maharashtra, and holds a Bachelor's degree in Exhibition and Spatial Design from the National Institute of Design, Ahmedabad. At DeF Lab, guided by Prof. Sugandh Malhotra, his project explores gesture-based interaction using TouchDesigner and AI, with a focus on applications in education and gamified learning, investigating how gestures can be used effectively to create engaging, embodied learning experiences. As a spatial designer, he also works in building immersive spaces, projection mapping, and interactive exhibitions, aiming to craft holistic audience experiences that are worth remembering.",
        interests: ["Gesture-Based Interaction", "Gamified Learning", "Immersive Spaces", "Projection Mapping", "Interactive Exhibitions"],
        email: "ayush@deflab.in",
        linkedin: "https://linkedin.com/in/ayushpatil",
      },
      {
        name: "Aryamaan Borgohain",
        role: "Intern",
        department: "National Institute of Design, Ahmedabad",
        cardRole: "Intern",
        cardDepartment: "VR Animation",
        bio: "Aryamaan Borgohain is from Anushaktinagar, Mumbai, and holds a Bachelor's degree in Animation Film Design from the National Institute of Design, Ahmedabad. At DeF Lab, under the guidance of Prof. Sugandh Malhotra, he is creating a VR animated short film rooted in filmmaking practice, encompassing direction, composition, visualization, and content research. A central aspect of his process is intensive planning, sequence visualization based on narrative, art direction, spatial audio and sound design, and world building. The film's primary goal is to achieve deep visual immersion through depth, character behavior, and the character's journey, experienced alongside the audience within the virtual space.",
        interests: ["VR Filmmaking", "Animation", "World Building", "Spatial Audio", "Art Direction"],
        email: "aryamaan@deflab.in",
        linkedin: "https://linkedin.com/in/aryamaan",
      },
      {
        name: "Radhika",
        role: "Intern",
        department: "Standarization of gesture for Smart products",
        cardRole: "Intern",
        cardDepartment: "Standardization of Gesture for Smart Products",
        bio: "Radhika contributes to research on standardizing gesture interactions for smart products and interfaces.",
        interests: ["Gesture Design", "Smart Products", "Interaction"],
        email: "radhika@deflab.in",
        linkedin: "https://linkedin.com/in/radhika",
      },
    ],
  },
  {
    category: "Exchange Students",
    members: [
      {
        name: "Rintaro Fujita",
        role: "MDes by Research",
        department: "IDC School of Design, IIT Bombay",
        cardRole: "Exchange Student",
        cardDepartment: "International Exchange Program",
        bio: "Originally from Tokyo, Japan, Rintaro is currently enrolled in the MDes by Research program at the IDC School of Design, IIT Bombay. Centered on the \"creative misuse\" of materials, ready-made products and existing systems, he conducts cross-disciplinary research spanning media art and experimental interaction design. His current projects include \"The Unintended Edge,\" a floating depth display utilizing acrylic edges, and \"Algorithmic Rangoli,\" which merges traditional Indian art with generative AI. His major achievements include selections for the SIGGRAPH Asia 2024 Art Gallery, the WIRED CREATIVE HACK AWARD 2024, and the Asia Digital Art Award FUKUOKA 2025.",
        interests: ["Media Art", "Experimental Interaction Design", "Generative AI", "Creative Misuse"],
        email: "rintaro@deflab.in",
        linkedin: "https://linkedin.com/in/rintarofujita",
        image: rintaroImg,
      },
      {
        name: "Mayu Eguchi",
        role: "Exchange Student",
        department: "International Exchange Program",
        cardRole: "Exchange Student",
        cardDepartment: "International Exchange Program",
        bio: "Mayu contributes to design research and prototyping initiatives as part of the international exchange program.",
        interests: ["Design Research", "Prototyping", "Cultural Exchange"],
        email: "mayu@deflab.in",
        linkedin: "https://linkedin.com/in/mayueguchi",
        image: mayuImg,
      },
      {
        name: "Ryota Sakamoto",
        role: "Exchange Student",
        department: "International Exchange Program",
        cardRole: "Exchange Student",
        cardDepartment: "International Exchange Program",
        bio: "Ryota is engaged in immersive technology projects during his exchange tenure at DeF Lab, bringing international perspectives.",
        interests: ["Immersive Tech", "Exchange Research", "Innovation"],
        email: "ryota@deflab.in",
        linkedin: "https://linkedin.com/in/ryotasakamoto",
        image: ryotaImg,
      },
      {
        name: "Ryo Nakamoto",
        role: "Exchange Student",
        department: "International Exchange Program",
        cardRole: "Exchange Student",
        cardDepartment: "International Exchange Program",
        bio: "Ryo is a visiting researcher from Japan, contributing to cross-cultural design studies and collaborative projects at DeF Lab.",
        interests: ["Cross-Cultural Design", "Collaboration", "Research"],
        email: "ryo@deflab.in",
        linkedin: "https://linkedin.com/in/ryonakamoto",
        image: ryoImg,
      },
    ],
  },
];

export function Team() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Our Team"
          description="Meet the talented individuals driving innovation and research at DeF Lab. Our multidisciplinary team brings together expertise in design, technology, and creative thinking."
        />

        <div className="space-y-16">
          {teamCategories.map((category) => (
            <div key={category.category}>
              <h2 className="text-3xl text-[#003153] mb-8 pb-3 border-b-2 border-[#7DF9FF]">
                {category.category}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {category.members.map((member) => (
                  <TeamMemberCard
                    key={member.name}
                    member={member}
                    onClick={() => setSelected(member)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center p-12 bg-[#003153] rounded-xl text-white">
          <h2 className="text-3xl mb-4">Join Our Team</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for passionate researchers and designers. Check out our open positions and collaboration opportunities.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[#FF6600] text-white rounded-lg hover:bg-[#FF6600]/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <ProfileModal member={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
