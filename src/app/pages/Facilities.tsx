import { Glasses, Printer, Scan, Eye, Hand, Car, Plane, Monitor, Code, Pen } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function FacilityCard({ product, index, icon }: { product: any; index: number; icon: any }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      style={{
        animation: isVisible ? `cardPopUp 0.6s ease-out ${index * 0.1}s both` : 'none',
        opacity: isVisible ? 1 : 0,
      }}
      className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all group overflow-hidden relative flex flex-col"
    >
      {/* Image */}
      <div className="aspect-video overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex-grow">
        <div className="mb-4 transition-transform group-hover:scale-110 origin-left">
          {icon}
        </div>
        <h3 className="text-xl text-[#003153] mb-3">{product.name}</h3>
        <p className="text-[#666666] leading-relaxed mb-4">{product.description}</p>
        
        {/* Specifications */}
        <ul className="space-y-1">
          {product.specs.map((spec: string, specIndex: number) => (
            <li key={specIndex} className="flex items-start gap-2 text-sm text-[#666666]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600] mt-1.5"></span>
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Accent Border - Positioned absolutely at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6600] via-[#7DF9FF] to-[#003153] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}

export function Facilities() {
  const [activeCategory, setActiveCategory] = useState(0);

  const facilities = [
    {
      icon: <Glasses className="w-8 h-8 text-[#FF6600]" />,
      title: "AR/VR",
      products: [
        {
          name: "Meta Quest 2",
          description: "Advanced standalone VR headset with high-resolution display and intuitive hand tracking capabilities for immersive design experiences.",
          specs: ["Resolution: 1832 x 1920 per eye", "Refresh Rate: 90Hz", "6DOF Tracking", "Hand Tracking"],
          image: "https://images.unsplash.com/photo-1758273239313-6c703d089dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGV4cGVyaWVuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3Mjk1NjE0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          name: "Meta Quest 3",
          description: "Next-generation mixed reality headset combining virtual and augmented reality with enhanced passthrough technology.",
          specs: ["Resolution: 2064 x 2208 per eye", "Refresh Rate: 120Hz", "Mixed Reality Passthrough", "Snapdragon XR2 Gen 2"],
          image: "https://images.unsplash.com/photo-1758273239313-6c703d089dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGV4cGVyaWVuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3Mjk1NjE0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          name: "Pico 4 Ultra",
          description: "Premium standalone VR headset with ultra-high resolution display and advanced mixed reality capabilities for professional and research applications.",
          specs: ["Ultra-High Resolution Display", "Mixed Reality Passthrough", "Eye & Face Tracking", "Snapdragon XR2 Gen 2"],
          image: "https://images.unsplash.com/photo-1758273239313-6c703d089dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGV4cGVyaWVuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3Mjk1NjE0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          name: "Pico 4 Enterprise",
          description: "Enterprise-focused VR headset designed for professional applications, training, and collaboration with advanced device management features.",
          specs: ["Enterprise Device Management", "Long Battery Life", "Lightweight Design", "Business-Grade Security"],
          image: "https://images.unsplash.com/photo-1758273239313-6c703d089dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGV4cGVyaWVuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3Mjk1NjE0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        },
      ],
    },
    {
      icon: <Printer className="w-8 h-8 text-[#FF6600]" />,
      title: "3D Printing",
      products: [
        {
          name: "Fractal 3D",
          description: "High-precision industrial 3D printer for detailed prototyping with advanced material compatibility.",
          specs: ["Large Build Volume", "Multi-Material Support", "High Precision", "Professional Grade"],
          image: "https://images.unsplash.com/photo-1736666835308-27fa97a0d660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50aW5nJTIwbGFib3JhdG9yeSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyOTU2MTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          name: "Creality K2 Plus Combo",
          description: "Fast and reliable FDM printer with enclosed chamber for consistent print quality and material versatility.",
          specs: ["Build Volume: 350 x 350 x 350mm", "Auto Bed Leveling", "Enclosed Chamber", "High-Speed Printing"],
          image: "https://images.unsplash.com/photo-1736666835308-27fa97a0d660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50aW5nJTIwbGFib3JhdG9yeSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyOTU2MTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          name: "Bambu Lab A1",
          description: "User-friendly 3D printer with automatic calibration and multi-color printing capabilities for creative projects.",
          specs: ["Build Volume: 256 x 256 x 256mm", "Auto Calibration", "Multi-Color AMS Lite", "CoreXY Motion"],
          image: "https://images.unsplash.com/photo-1736666835308-27fa97a0d660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50aW5nJTIwbGFib3JhdG9yeSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyOTU2MTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        },
      ],
    },
    {
      icon: <Scan className="w-8 h-8 text-[#FF6600]" />,
      title: "Sensors",
      products: [
        {
          name: "3D Scanner",
          description: "Professional 3D scanning system for capturing high-fidelity digital replicas of physical objects and environments.",
          specs: ["High Resolution Capture", "Point Cloud Processing", "Mesh Generation", "Texture Mapping"],
          image: "https://images.unsplash.com/photo-1612886649688-ef2912f17921?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHNjYW5uaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI5MTA4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          name: "Kinect Azure",
          description: "Advanced depth sensing camera with AI-powered body tracking for interactive installations and creative coding.",
          specs: ["Depth Camera", "Body Tracking", "Multiple Person Detection", "SDK Support"],
          image: "https://images.unsplash.com/photo-1759092912891-9f52486bb059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NzI5NTYxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          name: "Hand Tracker",
          description: "Precision hand and finger tracking system for gesture-based interactions and natural user interfaces.",
          specs: ["Real-time Tracking", "Gesture Recognition", "Sub-millimeter Accuracy", "Low Latency"],
          image: "https://images.unsplash.com/photo-1759092912891-9f52486bb059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NzI5NTYxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          name: "Eye Tracker",
          description: "High-precision eye tracking technology for gaze-based research, UX studies, and attention analysis.",
          specs: ["Gaze Point Tracking", "Pupil Dilation", "Head Movement", "Research Grade Accuracy"],
          image: "https://images.unsplash.com/photo-1759092912891-9f52486bb059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NzI5NTYxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
      ],
    },
    {
      icon: <Monitor className="w-8 h-8 text-[#FF6600]" />,
      title: "Immersive Simulation",
      products: [
        {
          name: "Flight Simulator",
          description: "Professional-grade flight simulation cockpit for aerospace interface design and pilot experience research.",
          specs: ["Full Cockpit Controls", "Multi-Screen Display", "Force Feedback", "Professional Flight Dynamics"],
          image: "https://images.unsplash.com/photo-1771920800290-53f22e5ac3f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBzaW11bGF0b3IlMjBjb2NrcGl0fGVufDF8fHx8MTc3Mjk1NjE0OHww&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          name: "Car Simulation",
          description: "Full-scale automotive driving simulator with realistic vehicle dynamics for testing interface designs.",
          specs: ["Racing Wheel & Pedals", "Realistic Physics", "Multiple Vehicle Models", "Immersive Display"],
          image: "https://images.unsplash.com/photo-1771920800290-53f22e5ac3f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBzaW11bGF0b3IlMjBjb2NrcGl0fGVufDF8fHx8MTc3Mjk1NjE0OHww&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          name: "Work Station",
          description: "High-performance computing workstations with professional-grade GPUs for rendering and design software.",
          specs: ["RTX 4090 GPU", "64GB RAM", "4K Displays", "Adobe Creative Suite"],
          image: "https://images.unsplash.com/photo-1761122912306-13d8f83892c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjByZXNlYXJjaCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI5NTYxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
      ],
    },
    {
      icon: <Pen className="w-8 h-8 text-[#FF6600]" />,
      title: "Art & Illustration",
      products: [
        {
          name: "XP-Pen",
          description: "Professional pen display tablet with high color accuracy and pressure sensitivity for digital illustration.",
          specs: ["8192 Pressure Levels", "99% Adobe RGB", "Low Parallax", "Tilt Recognition"],
          image: "https://images.unsplash.com/photo-1761122912306-13d8f83892c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjByZXNlYXJjaCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI5NTYxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          name: "Wacom Syntax",
          description: "Industry-standard digital pen tablet trusted by professional artists and designers worldwide.",
          specs: ["Pro Pen 2", "Multi-Touch Surface", "Customizable Express Keys", "Premium Build Quality"],
          image: "https://images.unsplash.com/photo-1761122912306-13d8f83892c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjByZXNlYXJjaCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI5NTYxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
      ],
    },
  ];

  const currentCategory = facilities[activeCategory];

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <PageHeader
          title="Our Facilities"
          description="DeF Lab is equipped with cutting-edge technology and tools to support research, prototyping, and innovation in design and immersive experiences."
        />

        {/* Category Tabs */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex justify-center gap-3 min-w-max pb-2">
            {facilities.map((facility, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-8 py-2.5 rounded-full transition-all text-sm ${
                  activeCategory === index
                    ? "bg-[#FF6600] text-white"
                    : "bg-gray-100 text-[#666666] hover:bg-gray-200"
                }`}
              >
                {facility.title}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCategory.products.map((product, index) => (
            <FacilityCard 
              key={`${activeCategory}-${index}`} 
              product={product} 
              index={index} 
              icon={currentCategory.icon} 
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center p-12 bg-[#003153] rounded-2xl border border-gray-200">
          <h2 className="text-3xl text-white mb-4">Visit Our Lab</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Interested in using our facilities or collaborating on research? Get in touch with us to schedule a visit.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[#FF6600] text-white rounded-lg hover:bg-[#FF6600]/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}