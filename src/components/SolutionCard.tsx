import React, { useState } from 'react';

interface SolutionCardProps {
  icon: string;
  title: string;
  description: string;
  details: string;
  action?: () => void;
}

export default function SolutionCard({ icon, title, description, details, action }: SolutionCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-card relative perspective w-full h-64 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`flip-inner absolute inset-0 preserve-3d transition-transform duration-500 service-card ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 rounded-lg p-6 flex flex-col items-center justify-center backface-hidden">
          <img src={icon} alt={title} className="w-12 h-12 mb-4 text-[#ff5c33]" />
          <h4 className="text-xl text-offWhite mb-2">{title}</h4>
          <p className="text-gray-400 text-center text-sm">{description}</p>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 rounded-lg p-6 flex flex-col items-center justify-center rotate-y-180 backface-hidden">
          <p className="text-offWhite text-center mb-4">{details}</p>
          <button 
            className="btn-primary px-4 py-2"
            onClick={(e) => {
              e.stopPropagation();
              if (action) action();
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}