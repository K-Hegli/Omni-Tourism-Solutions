import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  icon?: React.FC<{ className?: string }>;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({ 
  title, 
  subtitle, 
  icon: Icon, 
  centered = true,
  className = "" 
}: SectionTitleProps) {
  const containerClass = centered ? "text-center" : "text-left";
  
  return (
    <div className={`${containerClass} mb-12 ${className}`}>
      <div className={`inline-flex flex-col ${centered ? 'items-center' : 'items-start'} gap-4`}>
        {/* Icon + Title Row */}
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="flex-shrink-0">
              <Icon className="w-7 h-7 text-[#ff5c33]" />
            </div>
          )}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-offWhite tracking-wide"
              style={{
                textShadow: '0 0 40px rgba(255, 42, 95, 0.3), 0 0 80px rgba(255, 92, 51, 0.2)',
                fontFamily: 'Cinzel, serif'
              }}>
            {title}
          </h2>
        </div>

        {/* Metallic Underline Accent */}
        <div className="relative w-full">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#ff5c33] to-transparent" />
          <div className="absolute left-1/2 -translate-x-1/2 -top-[3px] w-2 h-2 rounded-full bg-[#ff5c33] shadow-[0_0_8px_rgba(255,92,51,0.6)]" />
        </div>

        {/* Optional Subtitle */}
        {subtitle && (
          <p className="font-body text-gray-400 text-base md:text-lg max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
