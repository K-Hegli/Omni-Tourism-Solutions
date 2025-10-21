import React, { useState } from "react";

interface TeamMemberCardProps {
  name: string;
  punchline: string;
  bio: string;
  image?: string; // Path to team member photo
  imagePlaceholder?: string; // Fallback initials if no image
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  punchline,
  bio,
  image,
  imagePlaceholder = "TM",
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="relative h-[24rem] cursor-pointer perspective group"
      style={{ perspective: "1000px" }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front of Card */}
        <div
          className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-gray-800 hover:border-[#ff5c33] transition-colors duration-300"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex flex-col items-center justify-center h-full p-6 text-center space-y-4">
            {/* Profile Picture or Placeholder */}
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-[#ff5c33]"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#ff5c33] to-[#ff2a5f] flex items-center justify-center text-white text-4xl font-heading font-bold shadow-lg">
                {imagePlaceholder}
              </div>
            )}

            {/* Name */}
            <h3 className="font-heading text-2xl font-bold text-offWhite">
              {name}
            </h3>

            {/* Punchline */}
            <p className="font-body text-[#ff5c33] italic text-lg px-4">
              "{punchline}"
            </p>

            {/* Click Hint */}
            <p className="font-body text-gray-500 text-sm mt-4">
              (Click to read bio)
            </p>
          </div>
        </div>

        {/* Back of Card */}
        <div
          className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-[#ff5c33]"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="flex flex-col h-full p-6">
            {/* Name on Back */}
            <h3 className="font-heading text-xl font-bold text-offWhite mb-4 text-center">
              {name}
            </h3>

            {/* Bio */}
            <div className="flex-1 overflow-hidden">
              <p className="font-body text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                {bio}
              </p>
            </div>

            {/* Click Hint */}
            <p className="font-body text-gray-500 text-sm text-center mt-4 italic">
              (Click anywhere to flip back)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
