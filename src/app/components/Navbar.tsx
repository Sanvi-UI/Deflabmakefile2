import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import defLabLogo from "../../imports/image-2.webp";

const navItems = [
  { label: "About", path: "/about" },
  { label: "Team", path: "/team" },
  { label: "Facilities", path: "/facilities" },
  { label: "Courses", path: "/courses" },
  { label: "Research", path: "/research" },
  { label: "Events", path: "/events" },
  { label: "Contact", path: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled && !mobileMenuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent border-b border-transparent"
          : "bg-white border-b border-gray-200 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[66px]">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img src={defLabLogo} alt="DeF Lab" className="h-9 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              const base = transparent
                ? active
                  ? "text-[#FF6600]"
                  : "text-white/90 hover:text-[#FF6600]"
                : active
                  ? "text-[#FF6600]"
                  : "text-[#666666] hover:text-[#003153]";
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm transition-colors ${base}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              transparent
                ? "text-white hover:text-white/80"
                : "text-[#666666] hover:text-[#003153]"
            }`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 text-sm transition-colors ${
                  location.pathname === item.path
                    ? "text-[#FF6600]"
                    : "text-[#666666] hover:text-[#003153]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
