import React from 'react';

interface IconProps {
  className?: string;
}

export const WebDevIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
    <polyline points="7 10 10 13 7 16"/>
    <line x1="13" y1="13" x2="17" y2="13"/>
  </svg>
);

export const SEOIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
    <path d="M11 8a3 3 0 0 1 3 3"/>
    <circle cx="11" cy="11" r="3"/>
    <path d="M8 16l-2 2"/>
    <path d="M16 8l2-2"/>
  </svg>
);

export const SocialMediaIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    <circle cx="6" cy="6" r="3"/>
    <circle cx="18" cy="18" r="3"/>
    <path d="M8.5 8.5L15.5 15.5"/>
  </svg>
);

export const PhotoVideoIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-4.5 4.5L13 7"/>
    <circle cx="8" cy="10" r="2"/>
    <path d="m2 17 5-5 5 5"/>
    <path d="M15 12l5 5"/>
  </svg>
);

export const EngagementIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    <path d="M12 12l2 2 4-4"/>
  </svg>
);

export const PartnerIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
);

export const RingDivider: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center justify-center space-x-4 ${className}`}>
    <div className="w-10 h-10 rounded-full border-4 border-[#ff5c33] flex items-center justify-center shadow-lg shadow-[#ff5c33]/50">
      <div className="w-4 h-4 bg-gradient-to-br from-[#ff2a5f] to-[#ff5c33] rounded-full"></div>
    </div>
  </div>
);

// Omni Package Icons
export const MiniIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="4"/>
    <circle cx="12" cy="12" r="8" opacity="0.5"/>
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
  </svg>
);

export const AlphaIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L3 22h3.5L8 18h8l1.5 4H21L12 2zm0 5l3 8H9l3-8z"/>
    <path d="M16 14a2 2 0 100 4 2 2 0 000-4z" opacity="0.7"/>
  </svg>
);

export const OmegaIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M7 21c0-4 2-7 5-7s5 3 5 7"/>
    <path d="M7 21H3M21 21h-4"/>
    <circle cx="12" cy="10" r="6"/>
  </svg>
);

// Value Icons
export const PunctualityIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
  </svg>
);

export const HumblenessIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
    <path d="M12 14v-3"/>
    <path d="M9 11l3-3 3 3"/>
  </svg>
);

export const PassionIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
  </svg>
);

export const GrowthInnovationIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    <path d="M18 8l4-4"/>
    <path d="M18 4l4 4"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

// Section Header Icons
export const ServicesHeaderIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="3" y="3" width="7" height="7" rx="1"/>
    <rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="14" y="14" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/>
  </svg>
);

export const PackagesHeaderIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="7.5 4.21 12 6.81 16.5 4.21"/>
    <polyline points="7.5 19.79 7.5 14.6 3 12"/>
    <polyline points="21 12 16.5 14.6 16.5 19.79"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
    <line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);

export const PartnersHeaderIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M8.7 6.3L3 12l5.7 5.7L10.4 17 6.8 13.4 10.4 9.8 8.7 6.3zM15.3 6.3L13.6 9.8 17.2 13.4 13.6 17 15.3 19.7 21 12 15.3 6.3z"/>
  </svg>
);

// Alternative tech-oriented icons for Software Solutions
export const CodeBracketsIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M8.7 6.3L3 12l5.7 5.7L10.4 17 6.8 13.4 10.4 9.8 8.7 6.3zM15.3 6.3L13.6 9.8 17.2 13.4 13.6 17 15.3 19.7 21 12 15.3 6.3z"/>
  </svg>
);

export const GearIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z"/>
    <path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a1 1 0 0 1-1.4 1.4l-.1-.1a1 1 0 0 0-1.1-.2 7 7 0 0 1-1.6.9 1 1 0 0 0-.6 1v.2a1 1 0 0 1-2 0v-.2a1 1 0 0 0-.6-1 7 7 0 0 1-1.6-.9 1 1 0 0 0-1.1.2l-.1.1a1 1 0 1 1-1.4-1.4l.1-.1a1 1 0 0 0 .2-1.1 7 7 0 0 1-.9-1.6 1 1 0 0 0-1-.6H4.6a1 1 0 0 1 0-2h.2a1 1 0 0 0 1-.6 7 7 0 0 1 .9-1.6 1 1 0 0 0-.2-1.1l-.1-.1a1 1 0 1 1 1.4-1.4l.1.1a1 1 0 0 0 1.1.2c.5-.3 1-.5 1.6-.9a1 1 0 0 0 .6-1V4.6a1 1 0 0 1 2 0v.2a1 1 0 0 0 .6 1c.6.4 1.1.6 1.6.9a1 1 0 0 0 1.1-.2l.1-.1a1 1 0 1 1 1.4 1.4l-.1.1a1 1 0 0 0-.2 1.1c.3.5.5 1 .9 1.6a1 1 0 0 0 1 .6h.2a1 1 0 0 1 0 2h-.2a1 1 0 0 0-1 .6c-.4.6-.6 1.1-.9 1.6z"/>
  </svg>
);

export const ServerStackIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="2" y="3" width="20" height="4" rx="1"/>
    <rect x="2" y="10" width="20" height="4" rx="1"/>
    <rect x="2" y="17" width="20" height="4" rx="1"/>
  </svg>
);

// Partner Category Icons
export const TechnologyIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="6" width="20" height="12" rx="2"/>
    <path d="M12 12h.01"/>
    <path d="M17 12h.01"/>
    <path d="M7 12h.01"/>
  </svg>
);

// Individual Partner Icons
export const DesignArchitectureIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
    <polyline points="22 12 12 17 2 12"/>
  </svg>
);

export const FullStackDevIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
    <line x1="12" y1="2" x2="12" y2="22"/>
  </svg>
);

export const BlockchainIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="3" y="3" width="7" height="7" rx="1"/>
    <rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="14" y="14" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/>
    <path d="M10 6.5h4"/>
    <path d="M10 17.5h4"/>
    <path d="M17.5 10v4"/>
    <path d="M6.5 10v4"/>
  </svg>
);

// Assessment Icons for About You page
export const StrengthIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M12 2l3 7h7l-5.5 4 2 7-6.5-5-6.5 5 2-7L2 9h7z"/>
    <path d="M12 2v10"/>
  </svg>
);

export const WeaknessIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

export const OpportunityIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="4"/>
    <line x1="12" y1="2" x2="12" y2="8"/>
    <line x1="12" y1="16" x2="12" y2="22"/>
    <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/>
    <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/>
  </svg>
);

export const ThreatIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

export const StrategyIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
    <path d="M16.24 7.76l2.12-2.12"/>
    <path d="M18.36 18.36l-2.12-2.12"/>
    <path d="M7.76 16.24l-2.12 2.12"/>
    <path d="M5.64 5.64l2.12 2.12"/>
  </svg>
);

export const InnovationIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v6m0 6v6"/>
    <path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24"/>
    <path d="M1 12h6m6 0h6"/>
    <path d="m4.93 19.07 4.24-4.24m5.66-5.66 4.24-4.24"/>
  </svg>
);


