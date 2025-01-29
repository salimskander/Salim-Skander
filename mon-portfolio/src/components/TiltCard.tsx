import React, { useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({ children, className = '' }) => {
  const { theme } = useTheme();
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculer le centre de la carte
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculer la position relative de la souris par rapport au centre
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Convertir en degrés de rotation (max 10 degrés)
    const rotateY = (mouseX / (rect.width / 2)) * 10;
    const rotateX = -(mouseY / (rect.height / 2)) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  const style: React.CSSProperties = {
    transform: isHovering
      ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`
      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.1s ease',
    willChange: 'transform'
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={theme === 'futuristic' ? handleMouseMove : undefined}
      onMouseEnter={theme === 'futuristic' ? handleMouseEnter : undefined}
      onMouseLeave={theme === 'futuristic' ? handleMouseLeave : undefined}
      style={style}
      className={className}
    >
      {children}
    </div>
  );
}; 