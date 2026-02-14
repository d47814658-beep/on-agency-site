import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto" }) => {
  return (
    <svg 
      viewBox="0 0 110 52" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="ON AGENCY Logo"
    >
      {/* Toggle O Container - Rect with Stroke */}
      <rect 
        x="2.5" 
        y="2.5" 
        width="55" 
        height="29" 
        rx="14.5" 
        stroke="currentColor" 
        strokeWidth="5" 
        fill="none" 
      />
      
      {/* Toggle O Dot - Solid Circle */}
      <circle cx="43" cy="17" r="8" fill="currentColor" />
      
      {/* Letter N */}
      <path d="M70 0V34H80L94 13V34H104V0H94L80 21V0H70Z" fill="currentColor" />
      
      {/* AGENCY Text */}
      <text 
        x="55" 
        y="49" 
        textAnchor="middle" 
        fontSize="8.5" 
        fontFamily="Inter, sans-serif" 
        fontWeight="700" 
        letterSpacing="0.4em"
        fill="currentColor"
      >
        AGENCY
      </text>
    </svg>
  );
};

export default Logo;