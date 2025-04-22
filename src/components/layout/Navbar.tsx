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

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-[0_4px_30px_rgba(147,51,234,0.15)]' : 'py-5'}`}>
      <div className="container mx-auto px-6 sm:px-8 md:px-14 flex items-center justify-between">
        <Link href="/" className="font-['Playfair_Display'] text-2xl tracking-wider" onClick={() => {
          // Empêcher la navigation si on est déjà sur la page d'accueil
          if (pathname === '/') {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
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
        
        {/* Bouton menu mobile */}
        <button 
          className="md:hidden flex flex-col gap-1.5 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <motion.span 
            animate={{ 
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 8 : 0
            }}
            className="w-6 h-0.5 bg-foreground block transition-transform"
          />
          <motion.span 
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            className="w-6 h-0.5 bg-foreground block"
          />
          <motion.span 
            animate={{ 
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -8 : 0
            }}
            className="w-6 h-0.5 bg-foreground block transition-transform"
          />
        </button>
        
        {/* Menu version mobile */}
        <motion.div
          className="fixed inset-0 bg-background flex md:hidden flex-col items-center justify-center z-40"
          initial={{ clipPath: "circle(0% at top right)" }}
          animate={{ 
            clipPath: isMenuOpen 
              ? "circle(150% at top right)" 
              : "circle(0% at top right)"
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <nav className="flex flex-col items-center gap-8">
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
                >
                  <Link 
                    href={href}
                    className={`text-xl font-medium relative ${isActive ? 'text-purple-500' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    {isActive && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-500 shadow-[0_0_5px_#9333EA]" />}
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