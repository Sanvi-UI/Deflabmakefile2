import { Link } from "react-router";
import { Mail, MapPin } from "lucide-react";
import defLabLogo from "../../imports/def_lab_logo.svg";

export function Footer() {
  return (
    <footer className="bg-[#003153] text-white rounded-t-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <img src={defLabLogo} alt="DeF Lab" className="h-12 w-auto mb-4" />
            <p className="text-sm text-gray-300">
              The Design for Future Lab work explores the intersection of emerging technologies and design processes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-gray-300 hover:text-[#7DF9FF] transition-colors">
                About
              </Link>
              <Link to="/team" className="block text-sm text-gray-300 hover:text-[#7DF9FF] transition-colors">
                Team
              </Link>
              <Link to="/research" className="block text-sm text-gray-300 hover:text-[#7DF9FF] transition-colors">
                Research
              </Link>
              <Link to="/contact" className="block text-sm text-gray-300 hover:text-[#7DF9FF] transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-gray-300">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span>mobilityvehicledesigniitb@gmail.com</span>
              </div>

              <div className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>DeF Lab, IIT Bombay, Powai, Mumbai</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} DeF Lab - Design for Future Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
