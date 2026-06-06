import { BookOpen, Users, Clock, ArrowRight } from "lucide-react";

import { Link } from "react-router";
import { PageHeader } from "../components/PageHeader";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function CourseCard({ course, index }: { course: any; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      style={{
        animation: isVisible ? `cardPopUp 0.6s ease-out ${index * 0.15}s both` : 'none',
        opacity: isVisible ? 1 : 0,
      }}
      className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all group flex flex-col"
    >
      {/* Image */}
      <div className="h-56 overflow-hidden bg-gray-100">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl text-[#003153] mb-2 group-hover:text-[#FF6600] transition-colors">{course.title}</h3>

        {/* Info Icons - stacked on separate lines */}
        <div className="flex flex-col gap-1 mb-5">
          <div className="flex items-center gap-2 text-sm text-[#666666]">
            <BookOpen size={16} className="text-[#FF6600] flex-shrink-0" />
            <span>{course.instructor}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#666666]">
            <Clock size={16} className="text-[#FF6600] flex-shrink-0" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#666666]">
            <Users size={16} className="text-[#FF6600] flex-shrink-0" />
            <span>{course.students}</span>
          </div>
        </div>

        <p className="text-[#666666] leading-relaxed mb-4 min-h-[200px]">{course.description}</p>

        {/* Topics */}
        <div>
          <p className="text-xs text-[#666666] mb-2">Topics Covered:</p>
          <div className="flex flex-wrap gap-2 min-h-[64px]">
            {course.topics.map((topic: string, topicIndex: number) => (
              <span
                key={topicIndex}
                className="text-xs px-3 py-1 bg-[#FF6600]/10 text-[#FF6600] rounded-full h-fit"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Learn More Button */}
        {course.slug && (
          <div className="mt-auto pt-6">
            <Link
              to={`/courses/${course.slug}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#FF6600] hover:bg-[#e65c00] text-white rounded-full transition-colors group/btn"
            >
              Learn More
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export function Courses() {
  const courses = [
    {
      slug: "design-for-future",
      title: "Design for Future",
      instructor: "Prof. Sugandh Malhotra",
      duration: "Elective (14 weeks)",
      students: "30-40 students",
      description: "An intensive course exploring future design scenarios through immersive technologies, speculative design, and creative prototyping. Students develop skills in conceptualizing and visualizing future mobility and interaction paradigms.",
      image: "https://images.unsplash.com/photo-1761122912306-13d8f83892c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjByZXNlYXJjaCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI5NTYxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      topics: ["Speculative Design", "Future Scenarios", "Digital Prototyping", "Design Research Methods"],
    },
    {
      slug: "concept-ideation-in-vr",
      title: "Concept Ideation in VR",
      instructor: "Prof. Sugandh Malhotra",
      duration: "14 weeks",
      students: "50 students",
      description: "Hands-on workshop focusing on virtual reality as a design tool. Students learn to ideate, sketch, and prototype concepts directly in immersive VR environments using industry-standard tools and platforms.",
      image: "https://images.unsplash.com/photo-1758598303762-56c85bef2496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbW1lcnNpdmUlMjBkaWdpdGFsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI5NTYxNDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      topics: ["VR Design Tools", "3D Sketching", "Spatial Design", "Immersive Prototyping"],
    },
    {
      slug: "immersive-art-in-vr",
      title: "Immersive Art in VR",
      instructor: "Prof. Sugandh Malhotra",
      duration: "14 weeks",
      students: "75 students",
      description: "Exploring the intersection of art and technology through virtual reality. Students create immersive artistic experiences, learn creative coding for VR, and develop interactive installations.",
      image: "https://images.unsplash.com/photo-1758598303762-56c85bef2496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbW1lcnNpdmUlMjBkaWdpdGFsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI5NTYxNDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      topics: ["Creative Coding", "Interactive Art", "VR Experiences", "Installation Design"],
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <PageHeader
          title="Courses & Learning"
          description="DeF Lab offers specialized courses in future design, virtual reality, and immersive technologies, combining theoretical foundations with hands-on practice."
        />

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} index={index} />
          ))}
        </div>

        {/* Learning Approach Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl text-[#003153]">Our Teaching Philosophy</h2>
            <p className="text-[#666666] leading-relaxed">
              At DeF Lab, we believe in learning by doing. Our courses combine theoretical knowledge with extensive hands-on practice using state-of-the-art equipment and tools.
            </p>
            <p className="text-[#666666] leading-relaxed">
              Students work on real-world projects, collaborate with industry partners, and have access to our full range of VR equipment, 3D printers, and simulation tools.
            </p>
            <ul className="space-y-3 text-[#666666]">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#FF6600] rounded-full mt-2 flex-shrink-0"></span>
                <span>Project-based learning with real industry applications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#FF6600] rounded-full mt-2 flex-shrink-0"></span>
                <span>Access to cutting-edge VR and prototyping facilities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#FF6600] rounded-full mt-2 flex-shrink-0"></span>
                <span>Mentorship from experienced researchers and industry experts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#FF6600] rounded-full mt-2 flex-shrink-0"></span>
                <span>Interdisciplinary collaboration opportunities</span>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1759092912891-9f52486bb059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NzI5NTYxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Lab Learning Environment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-[#FF6600]/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}