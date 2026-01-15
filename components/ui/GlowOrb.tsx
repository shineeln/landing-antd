
import React from 'react';

interface GlowOrbProps {
  color?: string;
  className?: string;
  size?: string;
}

export const GlowOrb: React.FC<GlowOrbProps> = ({ 
  color = "bg-blue-600", 
  className = "",
  size = "400px"
}) => (
  <div 
    className={`floating-orb ${color} ${className} transition-opacity duration-1000 dark:opacity-[0.25] opacity-[0.08]`} 
    style={{ 
      width: size, 
      height: size, 
      filter: 'blur(160px)',
      position: 'absolute',
      borderRadius: '50%',
      zIndex: -1
    }} 
  />
);
