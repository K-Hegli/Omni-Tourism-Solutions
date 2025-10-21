import React from "react";

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function ValueCard({ title, description, icon: Icon }: ValueCardProps) {
  return (
    <div className="card-hover flex flex-col items-center text-center group h-full min-h-[22rem]">
      {/* Metallic gradient icon frame with glow - matching Omni packages */}
      <div className="icon-ring w-20 h-20 rounded-xl mb-6 bg-gradient-to-tr from-[#2a2a2a] to-[#1a1a1a] border-2 border-[#ff5c33]/40 shadow-inner group-hover:border-[#ff5c33] transition-all duration-300">
        <Icon className="w-10 h-10 text-[#ff5c33] group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Content */}
      <h3 className="font-heading text-xl font-bold text-[#ff5c33] mb-3">{title}</h3>
      <p className="font-body text-gray-300 leading-relaxed flex-grow">{description}</p>
    </div>
  );
}
