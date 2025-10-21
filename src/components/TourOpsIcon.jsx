import React from 'react';

export default function TourOpsIcon({ size = 48, className = '', color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="TourOps operations icon"
    >
      {/* Circular container */}
      <circle
        cx="24"
        cy="24"
        r="22"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
      />
      
      {/* Map pin element */}
      <path
        d="M20 14c0-2.2 1.8-4 4-4s4 1.8 4 4c0 2.2-3.1 6.2-4 7.5-.9-1.3-4-5.3-4-7.5z"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
      />
      
      {/* Pin center dot */}
      <circle
        cx="24"
        cy="14"
        r="1.5"
        fill={color}
      />
      
      {/* Roster lines (stacked horizontal lines) */}
      <g strokeWidth="2" stroke={color} strokeLinecap="round">
        <line x1="14" y1="28" x2="34" y2="28" />
        <line x1="14" y1="32" x2="30" y2="32" />
        <line x1="14" y1="36" x2="32" y2="36" />
      </g>
    </svg>
  );
}

// Alternative compact version for smaller usage
export function TourOpsIconCompact({ size = 24, className = '', color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="TourOps icon"
    >
      {/* Simplified pin */}
      <path
        d="M10 6c0-1.1.9-2 2-2s2 .9 2 2c0 1.1-1.5 3.1-2 3.8-.5-.7-2-2.7-2-3.8z"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
      
      {/* Simplified roster lines */}
      <g strokeWidth="1.5" stroke={color} strokeLinecap="round">
        <line x1="6" y1="14" x2="18" y2="14" />
        <line x1="6" y1="17" x2="16" y2="17" />
        <line x1="6" y1="20" x2="17" y2="20" />
      </g>
    </svg>
  );
}