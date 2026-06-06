import { User } from "lucide-react";

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  cardRole?: string;
  cardDepartment?: string;
  bio: string;
  interests: string[];
  email: string;
  linkedin: string;
  image?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  onClick: () => void;
}

export function TeamMemberCard({ member, onClick }: TeamMemberCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl"
    >
      {/* Photo */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 flex items-center justify-center">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <User className="w-20 h-20 text-gray-400" />
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#003153]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex items-center justify-center">
          <span className="px-5 py-2 bg-[#FF6600] text-white rounded-md text-sm tracking-wide opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
            View Profile
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-6 text-center">
        <h3 className="text-lg text-[#003153] mb-1">{member.name}</h3>
        <p className="text-sm text-[#FF6600] mb-2">{member.cardRole ?? member.role}</p>
        <p className="text-sm text-[#666666]">{member.cardDepartment ?? member.department}</p>
      </div>
    </div>
  );
}
