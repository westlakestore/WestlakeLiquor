import React from 'react';

const WestlakeLiquorLogo = ({ className = "w-48 h-12" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 320 80" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background with gradient */}
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <linearGradient id="bottleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#065f46" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>
      
      {/* Wine bottle silhouette */}
      <g transform="translate(8, 12)">
        <path 
          d="M12 8 L12 4 Q12 2 14 2 L18 2 Q20 2 20 4 L20 8 Q22 10 22 14 L22 48 Q22 52 18 52 L14 52 Q10 52 10 48 L10 14 Q10 10 12 8 Z" 
          fill="url(#bottleGradient)"
          stroke="#fbbf24" 
          strokeWidth="0.5"
        />
        <ellipse cx="16" cy="6" rx="2" ry="1" fill="#fbbf24" />
        <rect x="14" y="2" width="4" height="2" fill="#fbbf24" rx="1" />
      </g>
      
      {/* Main text "Westlake" */}
      <text 
        x="45" 
        y="35" 
        fontFamily="serif" 
        fontSize="24" 
        fontWeight="bold" 
        fill="url(#goldGradient)"
        letterSpacing="1px"
      >
        Westlake
      </text>
      
      {/* Subtitle "LIQUOR" */}
      <text 
        x="45" 
        y="55" 
        fontFamily="serif" 
        fontSize="16" 
        fontWeight="600" 
        fill="#d1d5db"
        letterSpacing="3px"
      >
        LIQUOR
      </text>
      
      {/* Decorative elements */}
      <circle cx="280" cy="25" r="2" fill="#fbbf24" opacity="0.7" />
      <circle cx="290" cy="35" r="1.5" fill="#f97316" opacity="0.5" />
      <circle cx="285" cy="45" r="1" fill="#fbbf24" opacity="0.6" />
      
      {/* Decorative line */}
      <line x1="45" y1="42" x2="270" y2="42" stroke="#374151" strokeWidth="1" opacity="0.3" />
    </svg>
  );
};

export default WestlakeLiquorLogo;