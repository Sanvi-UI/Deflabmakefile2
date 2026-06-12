import { Calendar, MapPin, Users } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "../components/PageHeader";

import indiahciImg from "../../assets/events/indiahci.jpg";
import animelaImg from "../../assets/events/animela.jpg";
import autodeskImg from "../../assets/events/autodesk.jpg";
import sonyImg from "../../assets/events/sony.jpg";
import drdoImg from "../../assets/events/drdo.jpg";
import tudelftImg from "../../assets/events/tudelft.jpg";
import showcaseImg from "../../assets/events/showcase.jpg";

export function Events() {
  const [activeFilter, setActiveFilter] = useState<"all" | "upcoming" | "past">("all");

  const events = [
    {
      title: "India HCI 2025 Exhibition",
      date: "December 15-18, 2025",
      type: "Conference",
      location: "IIT Bombay",
      description: "Showcasing our latest VR research and interactive installations at India's premier Human-Computer Interaction conference.",
      image: indiahciImg,
      status: "Completed",
    },
    {
      title: "Animela 2025",
      date: "January 20-22, 2025",
      type: "Exhibition",
      location: "Mumbai",
      description: "Participating in India's largest animation and immersive media festival with VR art installations and demonstrations.",
      image: animelaImg,
      status: "Completed",
    },
    {
      title: "Autodesk India Visit",
      date: "February 5, 2025",
      type: "Industry Visit",
      location: "DeF Lab",
      description: "Hosted Autodesk team for collaboration discussions on future design tools and VR integration in automotive design workflows.",
      image: autodeskImg,
      status: "Completed",
    },
    {
      title: "Sony Research Collaboration",
      date: "February 18, 2025",
      type: "Industry Visit",
      location: "DeF Lab",
      description: "Meeting with Sony Research team to explore collaborative opportunities in immersive entertainment and VR experiences.",
      image: sonyImg,
      status: "Completed",
    },
    {
      title: "DRDO Technical Exchange",
      date: "March 2, 2025",
      type: "Industry Visit",
      location: "DeF Lab",
      description: "Technical exchange session with Defence Research and Development Organisation focusing on simulation and training applications.",
      image: drdoImg,
      status: "Completed",
    },
    {
      title: "TU Delft Design Exchange",
      date: "March 25-27, 2026",
      type: "Collaboration",
      location: "DeF Lab & Online",
      description: "Joint research workshop with TU Delft faculty and students exploring future mobility design and sustainable transportation.",
      image: tudelftImg,
      status: "Upcoming",
    },
    {
      title: "DeF Lab Annual Showcase",
      date: "April 15, 2026",
      type: "Exhibition",
      location: "IIT Bombay",
      description: "Annual exhibition showcasing student projects, research outcomes, and innovative prototypes from the past academic year.",
      image: showcaseImg,
      status: "Upcoming",
    },
    {
      title: "Future Mobility Summit 2026",
      date: "May 20-22, 2026",
      type: "Conference",
      location: "Mumbai Convention Center",
      description: "Presenting keynote on 'Designing Human-Centered Autonomous Vehicle Experiences' at India's premier mobility conference.",
      image: "https://images.unsplash.com/photo-1607088797610-020db7a14cd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmUlMjBtb2JpbGl0eSUyMGVsZWN0cmljJTIwdmVoaWNsZXxlbnwxfHx8fDE3NzI5NTYxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      status: "Upcoming",
    },
  ];

  // Filter events based on active tab
  const filteredEvents = events.filter((event) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "upcoming") return event.status === "Upcoming";
    if (activeFilter === "past") return event.status === "Completed";
    return true;
  });

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <PageHeader
          title="Events & Collaborations"
          description="DeF Lab actively participates in conferences, exhibitions, and industry collaborations to share research and foster innovation."
        />

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-6 py-2 rounded-full text-sm transition-all ${
              activeFilter === "all"
                ? "bg-[#FF6600] text-white"
                : "bg-gray-100 text-[#666666] hover:bg-gray-200"
            }`}
          >
            All Events
          </button>
          <button
            onClick={() => setActiveFilter("upcoming")}
            className={`px-6 py-2 rounded-full text-sm transition-all ${
              activeFilter === "upcoming"
                ? "bg-[#FF6600] text-white"
                : "bg-gray-100 text-[#666666] hover:bg-gray-200"
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveFilter("past")}
            className={`px-6 py-2 rounded-full text-sm transition-all ${
              activeFilter === "past"
                ? "bg-[#FF6600] text-white"
                : "bg-gray-100 text-[#666666] hover:bg-gray-200"
            }`}
          >
            Past Events
          </button>
        </div>

        {/* Events Timeline */}
        <div className="space-y-8">
          {filteredEvents.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "15+", label: "Events per Year" },
            { number: "10+", label: "Industry Partners" },
            { number: "500+", label: "Participants Engaged" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
              <div className="text-4xl text-[#FF6600] mb-2">{stat.number}</div>
              <div className="text-[#666666]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Collaboration CTA */}
        <div className="mt-20 text-center p-12 bg-gradient-to-br from-[#003153] to-[#003153]/90 rounded-2xl text-white">
          <h2 className="text-3xl mb-4">Collaborate with Us</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Interested in hosting an event, exhibition, or research collaboration with DeF Lab? We welcome partnerships with industry and academia.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[#FF6600] text-white rounded-lg hover:bg-[#FF6600]/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Discuss Collaboration
          </a>
        </div>
      </div>
    </div>
  );
}

function EventCard({ event, index }: { event: any; index: number }) {
  const gradientColors = [
    "from-[#FF6600] via-[#FF8C42] to-[#FFB380]",
    "from-[#7DF9FF] via-[#4FC3F7] to-[#0288D1]",
    "from-[#003153] via-[#1A5B7A] to-[#4A90A4]",
    "from-[#FF6600] via-[#7DF9FF] to-[#003153]",
  ];

  const gradientClass = gradientColors[index % gradientColors.length];

  return (
    <div
      style={{
        animation: `cardPopUp 0.6s ease-out ${index * 0.1}s both`,
      }}
      className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md group hover:shadow-xl transition-all duration-300 relative"
    >
      {/* Status Badge & Gradient Line */}
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-start p-6">
        <span className={`px-4 py-1.5 rounded-full text-xs backdrop-blur-sm border ${
          event.status === "Upcoming"
            ? "bg-[#7DF9FF]/90 text-[#003153] border-[#7DF9FF]"
            : "bg-white/90 text-[#666666] border-gray-300"
        }`}>
          {event.status}
        </span>
      </div>

      {/* Top gradient line */}
      <div className={`h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${gradientClass}`}></div>

      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-2/5 h-64 md:h-auto overflow-hidden bg-gray-100">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs px-3 py-1 bg-[#FF6600]/10 text-[#FF6600] rounded-full">
                {event.type}
              </span>
            </div>

            <h3 className="text-2xl text-[#003153] mb-4 group-hover:text-[#FF6600] transition-colors">
              {event.title}
            </h3>

            <p className="text-[#666666] leading-relaxed mb-6">{event.description}</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3 text-sm text-[#666666]">
              <Calendar size={16} className="text-[#FF6600]" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#666666]">
              <MapPin size={16} className="text-[#FF6600]" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}