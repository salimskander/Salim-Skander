'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import NeonEffect from '@/components/ui/NeonEffect';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Empêcher le défilement du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'py-2 sm:py-3 bg-background/80 backdrop-blur-md shadow-[0_4px_30px_rgba(147,51,234,0.15)]' : 'py-3 sm:py-5'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-14 flex items-center justify-between">
        <Link href="/" className="font-['Playfair_Display'] text-xl sm:text-2xl tracking-wider" onClick={() => {
          // Empêcher la navigation si on est déjà sur la page d'accueil
          if (pathname === '/') {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
            // good code
          }
        }}>
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 200
            }}
            className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent hover:from-violet-600 hover:to-purple-600 transition-all duration-500"
          >
            <NeonEffect color="purple" intensity="medium">𝓢alim 𝓢</NeonEffect>
          </motion.span>
        </Link>
        
        {/* Menu version desktop - avec effet néon au survol */}
        <nav className="hidden md:flex items-center gap-8">
          {['accueil', 'projets', 'a propos', 'contact'].map((item, index) => {
            const href = item === 'accueil' ? '/' : `/${item.replace(' ', '-')}`;
            const isActive = pathname === href;
            
            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Link 
                  href={href}
                  className={`text-foreground/80 hover:text-foreground transition-colors relative group ${isActive ? 'text-foreground' : ''}`}
                  onClick={(e) => {
                    // Effet visuel immédiat au clic
                    const target = e.currentTarget;
                    target.classList.add('animate-pulse');
                    setTimeout(() => {
                      target.classList.remove('animate-pulse');
                    }, 300);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-purple-500 transition-all duration-300 ${isActive ? 'w-full shadow-[0_0_5px_#9333EA]' : 'w-0 group-hover:w-full group-hover:shadow-[0_0_5px_#9333EA]'}`} />
                </Link>
              </motion.div>
            );
          })}
        </nav>
        
        {/* Bouton menu mobile avec SVG */}
        <button
          className="md:hidden flex items-center justify-center z-50 p-2 relative transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-violet-500/20 hover:from-purple-500/30 hover:to-violet-500/30 shadow-sm hover:shadow-md transition-all duration-300">
            <motion.svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.3 }}
                  d="M6 6L18 18M6 18L18 6" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    d="M4 6H20" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    d="M4 12H20" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    d="M4 18H20" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                </>
              )}
            </motion.svg>
            
            {!isMenuOpen && (
              <motion.span 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute -bottom-6 text-xs font-medium text-purple-400 whitespace-nowrap"
              >
              </motion.span>
            )}
          </div>
        </button>
        
        {/* Menu version mobile */}
        <motion.div
          className="fixed inset-0 bg-background/95 backdrop-blur-md flex md:hidden flex-col items-center justify-center z-40"
          initial={{ clipPath: "circle(0% at top right)" }}
          animate={{ 
            clipPath: isMenuOpen 
              ? "circle(150% at top right)" 
              : "circle(0% at top right)"
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <nav className="flex flex-col items-center gap-8 w-full px-6">
            {['accueil', 'projets', 'a propos', 'contact'].map((item, i) => {
              const href = item === 'accueil' ? '/' : `/${item.replace(' ', '-')}`;
              const isActive = pathname === href;
              
              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: isMenuOpen ? 1 : 0, 
                    y: isMenuOpen ? 0 : 20 
                  }}
                  transition={{ 
                    delay: isMenuOpen ? 0.1 * i : 0,
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                  className="w-full text-center"
                >
                  <Link 
                    href={href}
                    className={`text-2xl font-medium relative block py-3 ${isActive ? 'text-purple-500' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-purple-500 transition-all duration-300 ${
                      isActive ? 'w-16 shadow-[0_0_5px_#9333EA]' : 'w-0'
                    }`} />
                  </Link>
                </motion.div>
              );
            })}
          </nav>
        </motion.div>
      </div>
    </header>
  );
} 