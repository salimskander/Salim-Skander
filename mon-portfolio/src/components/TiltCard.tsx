import React, { useRef, useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({ children, className = '' }) => {
  const { theme } = useTheme();
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current || theme !== 'futuristic') return;

      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Calculer la position relative de la souris par rapport au centre de la fenêtre
      const mouseX = (e.clientX - windowWidth / 2) / (windowWidth / 2);
      const mouseY = (e.clientY - windowHeight / 2) / (windowHeight / 2);
      
      // Convertir en degrés de rotation (max 10 degrés)
      const rotateY = mouseX * 10;
      const rotateX = -mouseY * 10;

      setRotation({ x: rotateX, y: rotateY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [theme]);

  const style: React.CSSProperties = {
    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`,
    transition: 'transform 0.1s ease',
    willChange: 'transform'
  };

  return (
    <div
      ref={cardRef}
      style={theme === 'futuristic' ? style : undefined}
      className={className}
    >
      {children}
    </div>
  );
}; 