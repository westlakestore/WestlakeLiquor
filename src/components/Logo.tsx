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
        <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#dc2626" />
          <stop offset="50%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#f87171" />
        </linearGradient>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      
      {/* Wine glass silhouette */}
      <g transform="translate(8, 12)">
        {/* Wine glass bowl */}
        <ellipse 
          cx="16" 
          cy="20" 
          rx="10" 
          ry="12" 
          fill="url(#blueGradient)"
          stroke="url(#redGradient)" 
          strokeWidth="0.5"
        />
        {/* Wine glass stem */}
        <rect 
          x="15" 
          y="32" 
          width="2" 
          height="16" 
          fill="url(#blueGradient)"
        />
        {/* Wine glass base */}
        <ellipse 
          cx="16" 
          cy="50" 
          rx="8" 
          ry="2" 
          fill="url(#blueGradient)"
        />
        {/* Wine in glass */}
        <ellipse 
          cx="16" 
          cy="22" 
          rx="8" 
          ry="8" 
          fill="url(#redGradient)"
          opacity="0.8"
        />
      </g>
      
      {/* Main text "Westlake" */}
      <text 
        x="45" 
        y="35" 
        fontFamily="serif" 
        fontSize="24" 
        fontWeight="bold" 
        fill="url(#redGradient)"
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
        fill="url(#blueGradient)"
        letterSpacing="3px"
      >
        LIQUOR
      </text>
      
      {/* Decorative elements */}
      <circle cx="280" cy="25" r="2" fill="#dc2626" opacity="0.7" />
      <circle cx="290" cy="35" r="1.5" fill="#3b82f6" opacity="0.5" />
      <circle cx="285" cy="45" r="1" fill="#dc2626" opacity="0.6" />
      
      {/* Decorative line */}
      <line x1="45" y1="42" x2="270" y2="42" stroke="#6b7280" strokeWidth="1" opacity="0.3" />
    </svg>
  );
};

export default WestlakeLiquorLogo;