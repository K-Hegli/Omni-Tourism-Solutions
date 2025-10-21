import { useState } from "react";
import { FullStackDevIcon, BlockchainIcon } from "./ServiceIcons";

interface PartnerFlipCardProps {
  name: string;
  icon: string;
  desc: string;
  details: string;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  FullStackDevIcon,
  BlockchainIcon,
};

export default function PartnerFlipCard({ name, icon, desc, details }: PartnerFlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const IconComponent = iconMap[icon] || FullStackDevIcon;

  return (
    <div className="relative w-full h-[28rem] perspective cursor-pointer" onClick={() => setFlipped(!flipped)}>
      <div
        className={`absolute inset-0 transition-transform duration-700 preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 flex flex-col justify-center items-center backface-hidden p-8 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#ff5c33]/25">
          <div className="icon-ring w-16 h-16 rounded-full border-4 border-[#ff5c33] bg-gradient-to-br from-gray-900 to-gray-800 mb-4">
            <IconComponent className="w-8 h-8 text-[#ff5c33]" />
          </div>
          <h3 className="font-heading text-xl font-semibold text-offWhite mb-3">{name}</h3>
          <p className="font-body text-gray-300 text-base text-center leading-relaxed mb-6">{desc}</p>
          
          <p className="mt-auto text-[#ff5c33] text-sm italic">(Click to view details)</p>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden p-8 flex flex-col rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#ff5c33]/25">
          <div className="flex-1 overflow-y-auto">
            <p className="font-body text-gray-200 text-base whitespace-pre-line leading-relaxed">{details}</p>
          </div>
          <p className="mt-6 text-center text-[#ff5c33] text-sm italic">(Click anywhere to flip back)</p>
        </div>
      </div>
    </div>
  );
}
