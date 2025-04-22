'use client';

import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-foreground/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Salim Skander</h3>
            <p className="text-foreground/70 max-w-xs">
              Développeur full stack passionné par la création d&apos;applications web modernes et intuitives.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {['Accueil', 'Projets', 'A propos', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Accueil' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Me contacter</h3>
            <div className="flex gap-4">
              {/* Email */}
              <a 
                href="mailto:sm.infomail17@gmail.com" 
                className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center transition-all hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-400 hover:text-background hover:scale-110 hover:shadow-[0_0_15px_rgba(147,51,234,0.6)]"
                title="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
              
              {/* GitHub */}
              <a 
                href="https://github.com/salimskander" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center transition-all hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-400 hover:text-background hover:scale-110 hover:shadow-[0_0_15px_rgba(147,51,234,0.6)]"
                title="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/salimskander" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center transition-all hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-400 hover:text-background hover:scale-110 hover:shadow-[0_0_15px_rgba(147,51,234,0.6)]"
                title="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-foreground/10 text-center text-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} Salim Skander. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export function SmoothScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 origin-left"
      style={{ scaleX }}
    />
  );
} 