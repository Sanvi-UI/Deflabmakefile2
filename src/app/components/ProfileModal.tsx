import { useEffect } from "react";
import { X, Mail, Linkedin, User } from "lucide-react";
import type { TeamMember } from "./TeamMemberCard";

interface ProfileModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export function ProfileModal({ member, onClose }: ProfileModalProps) {
  useEffect(() => {
    if (!member) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl h-[580px] flex flex-col"
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close profile"
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-[#FF6600] hover:text-white text-[#003153] transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-0 h-full overflow-hidden rounded-2xl">
          {/* Photo + meta — fixed left column */}
          <div className="flex flex-col bg-gray-50 border-r border-gray-100 h-full">
            <div className="w-full h-[380px] flex-shrink-0 bg-gray-100 overflow-hidden">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User className="w-24 h-24 text-gray-400" />
                </div>
              )}
            </div>

            <div className="px-5 py-4 border-t border-gray-100 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-base text-[#FF6600] mb-1">{member.role}</p>
                <p className="text-xs text-[#666666]">{member.department}</p>
              </div>

              <div className="flex items-center gap-3 mt-4">
                <a
                  href={`mailto:${member.email}`}
                  aria-label={`Email ${member.name}`}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#003153] text-white hover:bg-[#FF6600] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#003153] text-white hover:bg-[#FF6600] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Content — scrollable right column */}
          <div className="p-8 overflow-y-auto h-full">
            <h2 className="text-3xl text-[#003153] mb-4">{member.name}</h2>

            <div className="h-px bg-[#7DF9FF] mb-5" />

            <p className="text-[#333] mb-6 leading-relaxed whitespace-pre-line">{member.bio}</p>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#003153] mb-3">
                Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {member.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 rounded-full bg-[#003153]/5 text-[#003153] text-sm border border-[#003153]/10"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
