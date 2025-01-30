import React from 'react';
import Link from 'next/link';
import { ThemeSelector } from '../ThemeSelector';
import { useTheme } from '../../context/ThemeContext';

export const Header = () => {
  const { theme } = useTheme();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className={`text-2xl font-semibold ${
            theme === 'colorful'
              ? 'header-title'
              : theme === 'basic' 
                ? 'text-foreground' 
                : 'text-white'
          }`}
        >
          Salim Skander
        </Link>
        <ThemeSelector />
      </nav>
    </header>
  );
}; 