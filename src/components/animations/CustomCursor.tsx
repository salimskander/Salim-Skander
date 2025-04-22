'use client';

import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setCursorVariant('click');
    const handleMouseUp = () => setCursorVariant('default');
    
    const handleMouseEnterLink = () => setCursorVariant('hover');
    const handleMouseLeaveLink = () => setCursorVariant('default');
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Ajouter des événements pour les liens et boutons
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnterLink);
      link.addEventListener('mouseleave', handleMouseLeaveLink);
    });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnterLink);
        link.removeEventListener('mouseleave', handleMouseLeaveLink);
      });
    };
  }, []);

  const variants: Variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      height: 20,
      width: 20,
      backgroundColor: "white",
      mixBlendMode: "difference" as const,
      border: "1px solid rgba(255, 255, 255, 0.5)"
    },
    hover: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      height: 30,
      width: 30,
      backgroundColor: "white",
      mixBlendMode: "difference" as const,
      border: "1px solid rgba(255, 255, 255, 0.8)"
    },
    click: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      mixBlendMode: "difference" as const,
      border: "1px solid white"
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    />
  );
} 