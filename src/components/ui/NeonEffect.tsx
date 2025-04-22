'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type NeonProps = {
  children: ReactNode;
  color?: string;
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
  pulsate?: boolean;
};

export default function NeonEffect({ 
  children, 
  color = 'purple', 
  intensity = 'medium', 
  className = '',
  pulsate = false
}: NeonProps) {
  
  const getGlowStyle = () => {
    const colors = {
      purple: {
        base: '#9333EA',
        glow: 'rgba(147, 51, 234, VAR)',
      },
      blue: {
        base: '#3B82F6',
        glow: 'rgba(59, 130, 246, VAR)',
      },
    };
    
    const intensityValues = {
      low: '0.3',
      medium: '0.5',
      high: '0.8',
    };
    
    const selectedColor = colors[color as keyof typeof colors] || colors.purple;
    const intensityValue = intensityValues[intensity];
    const glowColor = selectedColor.glow.replace('VAR', intensityValue);
    
    return {
      color: selectedColor.base,
      textShadow: `0 0 5px ${glowColor}, 0 0 10px ${glowColor}, 0 0 15px ${glowColor}`,
    };
  };
  
  const pulseAnimation = pulsate ? {
    animate: {
      textShadow: [
        `0 0 5px ${getGlowStyle().textShadow.split(',')[0].split(' ')[3]}`,
        `0 0 10px ${getGlowStyle().textShadow.split(',')[0].split(' ')[3]}, 0 0 15px ${getGlowStyle().textShadow.split(',')[0].split(' ')[3]}`,
        `0 0 5px ${getGlowStyle().textShadow.split(',')[0].split(' ')[3]}`
      ]
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }
  } : {};

  return (
    <motion.span
      className={className}
      style={getGlowStyle()}
      {...pulseAnimation}
    >
      {children}
    </motion.span>
  );
} 