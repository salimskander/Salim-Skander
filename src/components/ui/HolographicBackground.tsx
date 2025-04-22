'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HolographicBackgroundProps {
  active: boolean;
  className?: string;
}

const HolographicBackground = ({ active, className = "" }: HolographicBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Effet pour dessiner l'effet holographique
  useEffect(() => {
    if (!active || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let time = 0;
    
    // Ajuster la taille du canvas
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Animation de l'effet holographique
    const animate = () => {
      time += 0.01;
      
      const { width, height } = canvas.getBoundingClientRect();
      
      ctx.clearRect(0, 0, width, height);
      
      const centerX = width / 2;
      const centerY = height / 2;
      
      // Créer un dégradé radial
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, width / 1.5
      );
      
      // Couleurs d'aspect holographique
      gradient.addColorStop(0, 'rgba(147, 51, 234, 0.2)');
      gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.1)');
      gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      // Ajouter des lignes holographiques
      for (let i = 0; i < 5; i++) {
        const lineY = (height / 6) * i + Math.sin(time + i) * 5;
        
        ctx.beginPath();
        ctx.moveTo(0, lineY);
        ctx.lineTo(width, lineY);
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - i * 0.015})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [active]);
  
  return (
    <motion.div 
      className={`absolute inset-0 rounded-full overflow-hidden pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </motion.div>
  );
};

export default HolographicBackground; 