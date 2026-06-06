import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const heroImage =
  "https://images.unsplash.com/photo-1639174326326-6e2ef8d8ae39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2400";

export function HomeHero() {
  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden">
      <img
        src={heroImage}
        alt="Immersive VR experience at DeF Lab"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(27, 42, 74, 0.55)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(27,42,74,0.65) 0%, rgba(27,42,74,0.35) 55%, rgba(27,42,74,0.15) 100%)",
        }}
      />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center">
        <div className="max-w-3xl text-white">
          <span
            className="inline-block uppercase mb-6 text-[#FFB380]"
            style={{ letterSpacing: "0.32em", fontSize: "13px", fontWeight: 500 }}
          >
            Design for Future Lab
          </span>
          <h1
            className="text-white mb-6"
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: 1.1,
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            Designing Future<br />
            Mobility and Immersive<br />
            Innovation
          </h1>
          <p
            className="mb-10 text-white/90 max-w-xl"
            style={{ fontSize: "18px", lineHeight: 1.65 }}
          >
            A research space at IIT Bombay exploring VR, immersive simulations,
            digital prototyping, and the next generation of mobility design.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/facilities"
              className="inline-flex items-center gap-2 bg-[#FF6600] hover:bg-[#e65c00] text-white px-7 h-[52px] rounded-[10px] shadow-lg transition-colors"
            >
              <span>Visit Lab</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/research"
              className="inline-flex items-center gap-2 bg-white text-[#003153] hover:bg-white/90 px-7 h-[52px] rounded-[10px] shadow-lg transition-colors"
            >
              <span>Explore Research</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 text-xs uppercase tracking-[0.3em] hidden sm:block">
        Scroll
      </div>
    </section>
  );
}
