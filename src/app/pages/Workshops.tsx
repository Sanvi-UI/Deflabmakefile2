import { Calendar, MapPin, Users } from "lucide-react";

export function Workshops() {
  const workshops = [
    {
      title: "Concept Ideation in VR",
      date: "March 20-21, 2026",
      duration: "2 days",
      capacity: "20 participants",
      location: "DeF Lab, IIT Bombay",
      description: "Learn to ideate and brainstorm design concepts in virtual reality environments. Explore spatial thinking and rapid prototyping techniques using VR tools.",
      image: "https://images.unsplash.com/photo-1459550532302-ba13832edcdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGNvbmNlcHQlMjBpZGVhdGlvbnxlbnwxfHx8fDE3NzI5NjQxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      level: "Beginner",
    },
    {
      title: "IDC Workshop",
      date: "April 10-12, 2026",
      duration: "3 days",
      capacity: "25 participants",
      location: "DeF Lab, IIT Bombay",
      description: "Comprehensive workshop on interaction design and creative technology. Collaborate with interdisciplinary teams to create innovative design solutions.",
      image: "https://images.unsplash.com/photo-1735476878381-c78713962706?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3b3Jrc2hvcCUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzcyOTY0MTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      level: "All Levels",
    },
    {
      title: "VR Darshana For Helpers",
      date: "April 25-26, 2026",
      duration: "2 days",
      capacity: "15 participants",
      location: "DeF Lab, IIT Bombay",
      description: "A specialized workshop designed for support staff and assistants to understand and facilitate VR experiences. Learn setup, troubleshooting, and user guidance.",
      image: "https://images.unsplash.com/photo-1758273239313-6c703d089dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGV4cGVyaWVuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3Mjk1NjE0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      level: "Beginner",
    },
    {
      title: "VR Temple Darshana",
      date: "May 15-16, 2026",
      duration: "2 days",
      capacity: "20 participants",
      location: "DeF Lab, IIT Bombay",
      description: "Experience and create immersive virtual tours of sacred architecture and heritage sites. Learn cultural preservation through VR technology.",
      image: "https://images.unsplash.com/photo-1593662557880-17e49ff8c6c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWUiUyMHRlbXBsZSUyMGFyY2hpdGVjdHVyZSUyMGltbWVyc2l2ZXxlbnwxfHx8fDE3NzI5NjQxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      level: "Intermediate",
    },
    {
      title: "Immersive Art in VR",
      date: "June 5-7, 2026",
      duration: "3 days",
      capacity: "18 participants",
      location: "DeF Lab, IIT Bombay",
      description: "Create stunning art installations in virtual reality using tools like Tilt Brush and Gravity Sketch. Explore the intersection of art and immersive technology.",
      image: "https://images.unsplash.com/photo-1687389806477-22be64a5480f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbW1lcnNpdmUlMjBhcnQlMjB2aXJ0dWFsJTIwcmVhbGl0eXxlbnwxfHx8fDE3NzI5NjQxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      level: "Intermediate",
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-700";
      case "Intermediate":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl text-[#003153] mb-4">Workshops</h1>
          <div className="w-24 h-1 bg-[#FF6600] mx-auto mb-6"></div>
          <p className="text-lg text-[#666666] max-w-3xl mx-auto">
            Intensive hands-on workshops covering cutting-edge design technologies and methodologies. Open to students, professionals, and researchers.
          </p>
        </div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all group"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Level Badge */}
                <div className="mb-3">
                  <span className={`text-xs px-3 py-1 rounded-full ${getLevelColor(workshop.level)}`}>
                    {workshop.level}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl text-[#003153] mb-4">{workshop.title}</h3>

                {/* Description */}
                <p className="text-[#666666] leading-relaxed mb-4">{workshop.description}</p>

                {/* Meta Information */}
                <div className="space-y-2 text-sm text-[#666666] mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-[#FF6600]" />
                    <span>{workshop.date} • {workshop.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-[#FF6600]" />
                    <span>Limited to {workshop.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#FF6600]" />
                    <span>{workshop.location}</span>
                  </div>
                </div>

                {/* Register Button */}
                <button className="w-full py-3 bg-[#FF6600] text-white rounded-lg hover:bg-[#FF6600]/90 transition-colors">
                  Register Interest
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Hands-On Learning",
              description: "Work directly with professional equipment and tools under expert guidance.",
            },
            {
              title: "Small Groups",
              description: "Limited capacity ensures personalized attention and quality learning experience.",
            },
            {
              title: "Certificate",
              description: "Receive a certificate of completion from IIT Bombay DeF Lab.",
            },
          ].map((benefit, index) => (
            <div key={index} className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
              <h3 className="text-xl text-[#003153] mb-3">{benefit.title}</h3>
              <p className="text-[#666666]">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Custom Workshop CTA */}
        <div className="text-center p-12 bg-gradient-to-br from-[#003153] to-[#003153]/90 rounded-2xl text-white">
          <h2 className="text-3xl mb-4">Custom Workshops</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            We also offer customized workshops tailored to your organization's needs. Contact us to discuss your requirements.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[#FF6600] text-white rounded-lg hover:bg-[#FF6600]/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Inquire About Custom Workshops
          </a>
        </div>
      </div>
    </div>
  );
}