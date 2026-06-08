import { useParams, useNavigate, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import coreImage from "../../imports/image-3.webp";
import descImage from "../../imports/image-4.webp";
import kingsprayImg from "../../imports/image-5.webp";
import openBrushImg from "../../imports/image-6.webp";
import gravitySketchImg from "../../imports/image-7.webp";
import conceptIdeationIntroImg from "../../imports/image-3.png";
import conceptGallery1 from "../../imports/image-4.png";
import conceptGallery2 from "../../imports/image-5.png";
import conceptGallery3 from "../../imports/image-6.png";
import conceptGallery4 from "../../imports/image-7.png";
import iaFinal1 from "../../imports/image-9.png";
import iaFinal2 from "../../imports/image-10.png";
import iaFinal3 from "../../imports/image-11.png";
import iaFinal4 from "../../imports/image-12.png";
import iaFinal5 from "../../imports/image-13.png";
import iaFinal6 from "../../imports/image-14.png";
import iaFinal7 from "../../imports/image-15.png";
import iaFinal8 from "../../imports/image-16.png";
import iaFinal9 from "../../imports/image-17.png";
import dffHeroImg from "../../imports/image-22.png";

type CourseDetailData = {
  slug: string;
  title: string;
  tagline: string;
  description: string[];
  philosophy?: { title: string; text: string }[];
  outcomesIntro?: string;
  outcomes?: string[];
  introVRTools?: string[];
  objectives?: string[];
  finalArtwork?: string;
  tools?: string[];
  bannerImage?: string;
  // Design for Future specific
  when?: string;
  who?: string;
  bodyParagraphs?: string[];
  groups?: { name: string; members: string }[];
  // Concept Ideation in VR specific
  learningObjectives?: { title: string; sub?: string }[];
  methodology?: { phase: string; items: string[] }[];
};

const courseDetails: Record<string, CourseDetailData> = {
  "immersive-art-in-vr": {
    slug: "immersive-art-in-vr",
    title: "Immersive Art in VR",
    tagline:
      "A dynamic three-dimensional environment where students explore and create art using virtual reality tools.",
    description: [
      "Immersive Art in VR introduces students to a dynamic three-dimensional environment where they can explore and create art using virtual reality tools.",
      "The course combines traditional art knowledge with modern digital techniques, allowing students to sketch and paint in a space that responds to gesture, scale, and movement.",
      "It encourages creative expression beyond the limitations of conventional media and invites learners to reimagine the act of making art. More than just a learning module, the course opens up new possibilities for artists to experiment and express themselves in innovative ways.",
    ],
    philosophy: [
      {
        title: "Foundational Grounding",
        text: "Highlights how traditional visual language, structure, shading, and composition translates into immersive VR contexts.",
      },
      {
        title: "Experiential Learning",
        text: "Learning happens through doing. Each day includes guided exercises, demonstrations, and hands-on practice in VR.",
      },
      {
        title: "Balanced Pace",
        text: "The schedule is designed to support deep focus while also allowing time for exploration and reflection.",
      },
      {
        title: "Project Based Outcome",
        text: "Students will complete individual projects in VR painting and graffiti through a shared understanding of visual language.",
      },
      {
        title: "Small Group Focus",
        text: "Limited number of students and a staggered schedule lets each participant receive personalized guidance and feedback.",
      },
    ],
    outcomesIntro: "By the end of the workshop, students will:",
    outcomes: [
      "Understand how core visual concepts translate into VR.",
      "Gain hands-on experience with VR art tools like Open Brush, Kingspray, Vermillion, and Gravity Sketch.",
      "Create a completed VR artwork that reflects their learning and personal approach.",
      "Build confidence in using VR for creative expression and ideation.",
    ],
    introVRTools: ["Kingspray", "Open Brush", "Gravity Sketch"],
    objectives: [
      "Form Study: To understand how complex objects can be constructed from simple shapes and improve spatial visualization.",
      "Value Study: To learn how light, shadow, and shading create depth and realism in drawings.",
      "History (Color & Composition): To understand how color and composition evolved and how these principles can be applied meaningfully in artworks.",
    ],
    finalArtwork:
      "Students will work on a final VR artwork that brings together the core principles covered so far, form, value, colour theory, and composition. This phase supports creative exploration and independent application of techniques, using VR as the primary medium.",
    tools: ["Open Brush", "Gravity Sketch", "Kingspray", "Vermillion"],
  },
  "concept-ideation-in-vr": {
    slug: "concept-ideation-in-vr",
    title: "Concept Ideation in VR",
    tagline: "Hands-on VR sketching and 3D design using industry-standard hardware and software, building spatial reasoning and creative ideation skills.",
    description: [
      "This hands-on course introduces students to the revolutionary world of virtual reality (VR) sketching and 3D design using VR hardware and VR concept ideation software.",
      "Students will learn essential sketching techniques, spatial reasoning, and the fundamentals of 3D modeling within an immersive VR environment.",
      "By the end of the course, students will be able to confidently ideate new concepts in VR space, fostering their creativity and preparing them for new career opportunities. Students will also learn observation and eye-hand-body coordination that are important skills for development of new design concepts.",
    ],
    learningObjectives: [
      { title: "Understand the Basics of Sketching in VR", sub: "Navigate the Gravity Sketch interface, utilize core tools and features effectively, and grasp the foundational concepts of working within an immersive 3D modeling environment." },
      { title: "Improve Sketching Abilities Through Practice", sub: "Strengthen line confidence, proportion, and gesture through repeated VR sketching exercises that build muscle memory and creative fluency over time." },
      { title: "Sketch in 3D Space", sub: "Master fundamental sketching techniques in VR, including line work, shape creation, and manipulating objects across three-dimensional space with spatial precision." },
      { title: "Create Wireframes Through Drawing Contours", sub: "Learn to construct accurate 3D wireframes by tracing key contours and silhouettes, translating observation into clean, structured volumetric form." },
      { title: "Introduction to 3D Modeling in VR Space", sub: "Explore the building blocks of 3D modeling within VR such as extrusion, revolution, and surface manipulation to transform sketches into refined dimensional models." },
    ],
    methodology: [
      {
        phase: "Introduction",
        items: [
          "Introduction to the course, scope, and methodology",
          "Basic foundation course covering the introduction of VR / AR / MR systems and how they work",
        ],
      },
      {
        phase: "Fundamental Sketching",
        items: [
          "Getting started with Gravity Sketch: line work, shapes, basic transformations, interface overview, navigation, basic tools",
          "Develop observation skills, identify key features, break complex 3D models in simple strokes and shapes",
          "Basics of sketching techniques and getting started with VR sketching software",
          "Getting started with VR hardware and VR sketching software, necessary information about the interface and controllers",
        ],
      },
      {
        phase: "3D Sketching Practice",
        items: [
          "3D sketching exercises and practice",
        ],
      },
      {
        phase: "3D Modeling Basics",
        items: [
          "3D Modeling Basics (extrusion, revolution, introduction to sculpting)",
          "Use of basic modeling functions (extrusion, revolution, etc.)",
          "Introduction to advanced modeling methods for complex 3D models",
          "Introduction to Design Principles (proportion, scale, symmetry, etc.) and their application in sketching and modeling in VR",
        ],
      },
      {
        phase: "Project Work",
        items: [
          "Concept ideation project in VR: applying all learned skills to a complete design brief",
        ],
      },
    ],
  },
  "design-for-future": {
    slug: "design-for-future",
    title: "Design for Future",
    tagline:
      "Igniting students' creative potential through critical thinking, future scenarios, and disruptive design.",
    description: [
      "The course aims to ignite students' creative potential and harness their ingenuity by encouraging them to think critically and innovatively.",
      "Through the exploration of cutting-edge technologies, design processes, and future scenarios, it inspires students to envision disruptive, unconventional futures and contribute to shaping humanity's path toward a better tomorrow.",
    ],
    when: "July - October 2024",
    who: "Guided by: Dr. Sugandh Malhotra",
    bodyParagraphs: [
      "As part of the Design for Future course, students were tasked with envisioning future technologies, policies, and scenarios that could shape the world ahead.",
      "The process began with a brainstorming session involving more than 20 students. This collaborative activity encouraged them to explore diverse possibilities.",
      "Following the brainstorming session, the students were divided into six groups, each assigned specific keywords representing critical themes or areas of interest.",
      "Each group conducted an in-depth study of technological advancements and developments related to their assigned keywords.",
      "To deepen their understanding and enrich their ideas, multiple discussion sessions were organized with the instructor of the course and their research scholars.",
      "These interactions allowed students to build narratives around their technologies and explore how these innovations could be leveraged in the future.",
      "The discussions also focused on how designers, using their unique skills, could contribute to society, humanity, nature, the world at large, and domains like health and hospitality.",
      "As a culmination of their research and discussions, students were tasked with constructing scenarios for the future.",
      "Using the storyboarding technique, they visualized their ideas and narratives, crafting detailed scenarios that illustrated the potential implications.",
      "These scenarios were then presented in the form of posters, combining visual storytelling with strategic foresight to communicate their future-building activities effectively.",
      "Through this comprehensive process, students not only honed their skills in speculative and strategic design but also gained valuable insights.",
    ],
    groups: [
      { name: "Group 1", members: "Aadish George, Aman Bagmare, Digbijoy Banikya, Sanjeev Kumar, Sumit Jangra" },
      { name: "Group 2", members: "Tushar, Minhas, Varum, Prashin, Sohan" },
      { name: "Group 3", members: "Arunabh, Tanushka, Deepak, Abhinav, Visakh" },
      { name: "Group 4", members: "Nitya, Simon, Jaydeep, Shubham, Stephen" },
      { name: "Group 5", members: "Anumeha, Aswin, Sai, Urvi, Uthra" },
      { name: "Group 6", members: "Aditya, Vishnu, Srijita, Deekshaa, Pawan" },
    ],
  },
};

function ImagePlaceholder({ ratio = "aspect-[4/3]" }: { ratio?: string }) {
  return <div className={`${ratio} w-full rounded-xl bg-gray-200`} />;
}

export function CourseDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const course = slug ? courseDetails[slug] : undefined;

  if (!course) {
    return (
      <div className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-2xl text-[#FF6600] mb-4">Course details coming soon</h1>
          <p className="text-[#666666] mb-8">
            We're still putting together the detailed page for this course. Check back soon.
          </p>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF6600] hover:bg-[#e65c00] text-white rounded-full transition-colors"
          >
            <ArrowLeft size={16} /> Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const headingClass = "text-2xl text-[#FF6600] font-medium leading-tight mb-6";

  return (
    <div style={{ animation: "pageFadeIn 0.4s ease-out both" }} className="bg-white">
      {/* Banner */}
      <div style={{ animation: "bannerSlideDown 0.55s cubic-bezier(0.22,1,0.36,1) both" }} className="relative h-80 md:h-[420px] overflow-hidden bg-[#003153]">
        <img
          src="https://images.unsplash.com/photo-1758598303762-56c85bef2496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbW1lcnNpdmUlMjBkaWdpdGFsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI5NTYxNDh8MA&ixlib=rb-4.1.0&q=80&w=1920"
          alt={course.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute top-0 left-0 right-0 z-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
            <button
              type="button"
              onClick={() => navigate('/courses')}
              className="inline-flex items-center gap-2 text-white hover:text-[#FF6600] transition-colors group/back cursor-pointer"
            >
              <ArrowLeft size={18} className="group-hover/back:-translate-x-1 transition-transform" /> Back
            </button>
          </div>
        </div>

        <div className="absolute inset-0 flex items-end pointer-events-none">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#FF6600] via-[#FF8533] to-[#FFB347] bg-clip-text text-transparent cursor-default inline-block leading-[1.2] pb-2">
              {course.title}
            </h1>
            <p className="text-white/90 max-w-2xl leading-relaxed">{course.tagline}</p>
          </div>
        </div>
      </div>

      <div style={{ animation: "contentRiseUp 0.55s cubic-bezier(0.22,1,0.36,1) 0.25s both" }} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {course.slug === "concept-ideation-in-vr" ? (
          <>
            {/* Introduction */}
            <section className="mb-16 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className={headingClass}>Introduction</h2>
                <div className="space-y-4">
                  {course.description.map((para, i) => (
                    <p key={i} className="text-[#666666] leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
              <div
                className="w-full overflow-hidden rounded-2xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
                style={{ aspectRatio: "553 / 305" }}
              >
                <img
                  src={conceptIdeationIntroImg}
                  alt="Concept Ideation in VR"
                  className="block w-full h-full object-cover scale-[1.03] origin-center"
                />
              </div>
            </section>

            {/* Learning Objectives */}
            <section className="mb-16">
              <h2 className={headingClass}>Learning Objectives</h2>
              <p className="text-[#666666] mb-6 leading-relaxed">
                Upon successful completion of this course, students will be able to:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {course.learningObjectives?.map((obj, i) => (
                  <div
                    key={i}
                    className="h-[320px] p-8 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:border-[#FF6600]/40 transition-all flex flex-col"
                  >
                    <h3 className="text-2xl text-[#FF6600] font-medium leading-tight mb-6">{obj.title}</h3>
                    {obj.sub && <p className="text-[#666666] leading-relaxed">{obj.sub}</p>}
                  </div>
                ))}
              </div>
            </section>

            {/* Software */}
            <section className="mb-16">
              <h2 className={headingClass}>Software Involved</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { name: "Gravity Sketch", img: gravitySketchImg },
                  { name: "Open Brush", img: openBrushImg },
                  { name: "Kingspray", img: kingsprayImg },
                ].map((tool) => (
                  <div key={tool.name}>
                    <img src={tool.img} alt={tool.name} className="w-full h-auto block rounded-xl" />
                    <p className="text-center text-[#003153] mt-3">{tool.name}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Methodology */}
            <section className="mb-16">
              <h2 className={headingClass}>Methodology</h2>
              <div className="space-y-0">
                {course.methodology?.map((phase, i) => (
                  <div key={i} className="flex gap-6 group">
                    {/* Timeline spine */}
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-[#FF6600] flex-shrink-0 mt-1" />
                      {i < (course.methodology?.length ?? 0) - 1 && (
                        <div className="w-px flex-1 bg-gray-200 my-1" />
                      )}
                    </div>
                    {/* Content */}
                    <div className={`pb-10 flex-1 ${i === (course.methodology?.length ?? 0) - 1 ? "" : ""}`}>
                      <h3 className="text-[#003153] mb-3 leading-snug">{phase.phase}</h3>
                      <ul className="space-y-2 list-disc pl-6 marker:text-[#FF6600]">
                        {phase.items.map((item, j) => (
                          <li key={j} className="text-[#666666] leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery */}
            <section className="mb-16">
              <h2 className={headingClass}>Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[conceptGallery1, conceptGallery2, conceptGallery3, conceptGallery4].map((img, i) => (
                  <div
                    key={i}
                    className="w-full rounded-2xl overflow-hidden"
                    style={{ aspectRatio: "16 / 9" }}
                  >
                    <img
                      src={img}
                      alt={`Concept Ideation in VR ${i + 1}`}
                      className="block w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>

            <div className="text-center">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6600] hover:bg-[#e65c00] text-white rounded-full transition-colors"
              >
                <ArrowLeft size={16} /> Back to All Courses
              </Link>
            </div>
          </>
        ) : course.slug === "design-for-future" ? (
          <>
            {/* Description */}
            <section className="mb-16">
              <div className="max-w-4xl mb-12">
                <h2 className={headingClass}>Description</h2>
                <div className="space-y-4">
                  {course.description.map((para, i) => (
                    <p key={i} className="text-[#666666] leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              <div className="w-full rounded-2xl overflow-hidden shadow-[0px_20px_50px_-10px_rgba(0,0,0,0.3)]">
                <img src={dffHeroImg} alt="Design for Future" className="w-full h-auto block" />
              </div>
            </section>

            {/* Course Process - structured sections */}
            <section className="mb-16 max-w-4xl space-y-16">
              <div>
                <h2 className={headingClass}>Brainstorming &amp; Group Formation</h2>
                <div className="space-y-4">
                  <p className="text-[#666666] leading-relaxed">
                    As part of the Design for Future course, students were tasked with envisioning future technologies, policies, and scenarios that could shape the world ahead.
                  </p>
                  <p className="text-[#666666] leading-relaxed">
                    The process began with a brainstorming session involving more than 20 students. This collaborative activity encouraged them to explore diverse possibilities.
                  </p>
                  <p className="text-[#666666] leading-relaxed">
                    Following the brainstorming session, the students were divided into six groups, each assigned specific keywords representing critical themes or areas of interest.
                  </p>
                </div>
              </div>

              <div>
                <h2 className={headingClass}>Research &amp; Discussions</h2>
                <div className="space-y-4">
                  <p className="text-[#666666] leading-relaxed">
                    Each group conducted an in-depth study of technological advancements and developments related to their assigned keywords.
                  </p>
                  <p className="text-[#666666] leading-relaxed">
                    To deepen their understanding and enrich their ideas, multiple discussion sessions were organized with the instructor of the course and their research scholars.
                  </p>
                  <p className="text-[#666666] leading-relaxed">
                    These interactions allowed students to build narratives around their technologies and explore how these innovations could be leveraged in the future. The discussions also focused on how designers, using their unique skills, could contribute to society, humanity, nature, the world at large, and domains like health and hospitality.
                  </p>
                </div>
              </div>

              <div>
                <h2 className={headingClass}>Future Scenarios &amp; Outcomes</h2>
                <div className="space-y-4">
                  <p className="text-[#666666] leading-relaxed">
                    As a culmination of their research and discussions, students were tasked with constructing scenarios for the future.
                  </p>
                  <p className="text-[#666666] leading-relaxed">
                    Using the storyboarding technique, they visualized their ideas and narratives, crafting detailed scenarios that illustrated the potential implications. These scenarios were then presented in the form of posters, combining visual storytelling with strategic foresight to communicate their future-building activities effectively.
                  </p>
                  <p className="text-[#666666] leading-relaxed">
                    Through this comprehensive process, students not only honed their skills in speculative and strategic design but also gained valuable insights.
                  </p>
                </div>
              </div>
            </section>

            {/* Six Groups */}
            <section className="mb-16">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                {course.groups?.map((g) => (
                  <div
                    key={g.name}
                    className="h-full p-8 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:border-[#FF6600]/40 transition-all flex flex-col"
                  >
                    <h3 className="text-2xl text-[#FF6600] font-medium leading-tight mb-6">{g.name}</h3>
                    <p className="text-[#666666] leading-relaxed">{g.members}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="text-center">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6600] hover:bg-[#e65c00] text-white rounded-full transition-colors"
              >
                <ArrowLeft size={16} /> Back to All Courses
              </Link>
            </div>
          </>
        ) : (
        <>
        {/* Description */}
        <section className="mb-16 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className={headingClass}>Description</h2>
            <div className="space-y-4">
              {course.description.map((para, i) => (
                <p key={i} className="text-[#666666] leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
            <img src={descImage} alt="" className="w-full h-auto block" />
          </div>
        </section>

        {/* Core Philosophy */}
        <section className="mb-16">
          <h2 className={headingClass}>Core Philosophy</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {course.philosophy?.map((p) => (
              <div
                key={p.title}
                className="h-full p-8 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:border-[#FF6600]/40 transition-all flex flex-col"
              >
                <h3 className="text-2xl text-[#FF6600] font-medium leading-tight mb-6">{p.title}</h3>
                <p className="text-[#666666] leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Image */}
        <section className="mb-16">
          <h2 className={headingClass}>Timeline</h2>
          <div className="relative left-1/2 right-1/2 -translate-x-1/2 w-screen">
            <img
              src={coreImage}
              alt="Timeline"
              className="w-full h-auto block"
            />
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="mb-16 max-w-4xl">
          <h2 className={headingClass}>Learning Outcomes</h2>
          <p className="text-[#666666] mb-6 leading-relaxed">{course.outcomesIntro}</p>
          <ul className="space-y-3 list-disc pl-6 marker:text-[#FF6600]">
            {course.outcomes?.map((o) => (
              <li key={o} className="text-[#666666] leading-relaxed">{o}</li>
            ))}
          </ul>
        </section>

        {/* Objective */}
        <section className="mb-16 max-w-4xl">
          <h2 className={headingClass}>Objective</h2>
          <ul className="space-y-3 list-disc pl-6 marker:text-[#FF6600]">
            {course.objectives?.map((o) => (
              <li key={o} className="text-[#666666] leading-relaxed">{o}</li>
            ))}
          </ul>
        </section>

        {/* Creating Your VR Artwork */}
        <section className="mb-16">
          <div className="max-w-4xl">
            <h2 className={headingClass}>Creating Your VR Artwork</h2>
            <p className="text-[#666666] leading-relaxed">{course.finalArtwork}</p>
          </div>

          {/* Software Involved - sub heading */}
          <h3 className="text-2xl text-[#FF6600] font-medium leading-tight mt-10 mb-6">Software Involved</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: "Kingspray", img: kingsprayImg },
              { name: "Open Brush", img: openBrushImg },
              { name: "Gravity Sketch", img: gravitySketchImg },
            ].map((tool) => (
              <div key={tool.name}>
                <img
                  src={tool.img}
                  alt={tool.name}
                  className="w-full h-auto block rounded-xl"
                />
                <p className="text-center text-[#003153] mt-3">{tool.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="mb-16">
          <h2 className={headingClass}>Final Render</h2>
          <p className="text-[#666666] mb-6 max-w-3xl leading-relaxed">
            A collection of workshop visuals, VR tools in use, exercise outcomes, and final student artworks from the Immersive Art in VR sessions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[iaFinal1, iaFinal2, iaFinal3, iaFinal4, iaFinal5, iaFinal6, iaFinal7, iaFinal8, iaFinal9].map((img, i) => (
              <div
                key={i}
                className="w-full rounded-2xl overflow-hidden bg-gray-100"
                style={{ aspectRatio: "16 / 9" }}
              >
                <img
                  src={img}
                  alt={`Immersive Art in VR ${i + 1}`}
                  className="block w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <div className="text-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6600] hover:bg-[#e65c00] text-white rounded-full transition-colors"
          >
            <ArrowLeft size={16} /> Back to All Courses
          </Link>
        </div>
        </>
        )}
      </div>
    </div>
  );
}
