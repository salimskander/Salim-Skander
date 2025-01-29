import React from 'react';
import Link from 'next/link';
import { useTheme } from '../../context/ThemeContext';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className={`text-2xl font-semibold transition-colors duration-300 ${
            theme === 'basic' 
              ? 'text-foreground hover:text-primary/80' 
              : 'text-foreground hover:text-cyan-400'
          }`}
        >
          Salim Skander
        </Link>
        <div className="relative">
          <button
            onClick={toggleTheme}
            className="w-32 h-10 rounded-full relative overflow-hidden group"
          >
            {/* Fond du bouton avec animation */}
            <div className={`
              absolute inset-0 transition-all duration-500
              ${theme === 'basic' 
                ? 'bg-gradient-to-r from-gray-700 to-gray-900' 
                : 'bg-gradient-to-r from-blue-900 via-cyan-900 to-blue-900 animate-gradient-x'
              }
            `} />
            
            {/* Effet de grille futuriste (visible uniquement en mode futuriste) */}
            {theme === 'futuristic' && (
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_1px,transparent_1px),linear-gradient(0deg,transparent_1px,transparent_1px)] bg-[size:4px_4px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />
              </div>
            )}

            {/* Indicateur qui slide avec glow effect en mode futuriste */}
            <div
              className={`
                absolute top-1 h-8 w-14 rounded-full transition-all duration-500 ease-in-out
                ${theme === 'basic' 
                  ? 'left-1 bg-gray-600' 
                  : 'left-[calc(100%-3.75rem)] bg-cyan-500/30 shadow-[0_0_15px_rgba(0,255,255,0.5)]'
                }
              `}
            />

            {/* Textes avec animation */}
            <div className="absolute inset-0 flex items-center justify-between px-3 text-sm font-bold">
              <span className={`
                transition-all duration-500
                ${theme === 'basic' 
                  ? 'text-white' 
                  : 'text-gray-400 transform translate-x-2 opacity-50'
                }
              `}>
                Basic
              </span>
              <span className={`
                transition-all duration-500
                ${theme === 'futuristic' 
                  ? 'text-cyan-300 animate-pulse' 
                  : 'text-gray-400 transform -translate-x-2 opacity-50'
                }
              `}>
                Futur
              </span>
            </div>

            {/* Effet hover */}
            <div className={`
              absolute inset-0 border-2 rounded-full transition-all duration-300
              ${theme === 'basic'
                ? 'border-transparent hover:border-white/30'
                : 'border-transparent hover:border-cyan-500/50 hover:shadow-[0_0_10px_rgba(0,255,255,0.3)]'
              }
            `} />
          </button>
        </div>
      </nav>
    </header>
  );
}; 