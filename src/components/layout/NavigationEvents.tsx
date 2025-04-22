'use client';

import { useEffect, useState, useRef, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import LoadingIndicator from '../ui/LoadingIndicator';

function NavigationEventsContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Délai avant d'afficher l'indicateur de chargement (en ms)
  const LOADING_DELAY = 150;
  
  useEffect(() => {
    const handleStartNavigation = () => {
      setIsNavigating(true);
      
      // Définir un timer pour afficher l'indicateur de chargement
      // seulement si la navigation prend plus de temps que LOADING_DELAY
      timerRef.current = setTimeout(() => {
        setShowLoading(true);
      }, LOADING_DELAY);
    };

    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      // Vérifier si c'est un clic sur le logo alors qu'on est déjà sur la page d'accueil
      if (link && link.getAttribute('href') === '/' && pathname === '/' && 
          (link.classList.contains('font-[\'Playfair_Display\']') || 
           link.querySelector('.font-[\'Playfair_Display\']'))) {
        // Ne pas déclencher la navigation
        return;
      }
      
      if (link && link.href.includes(window.location.origin)) {
        handleStartNavigation();
      }
    };

    window.addEventListener('beforeunload', handleStartNavigation);
    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('beforeunload', handleStartNavigation);
      document.removeEventListener('click', handleLinkClick);
    };
  }, [pathname]);

  // Effet pour réinitialiser l'état lorsque la navigation est terminée
  useEffect(() => {
    // Si la navigation se termine rapidement (avant LOADING_DELAY),
    // on annule le timer et on ne montre jamais l'indicateur
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    
    setIsNavigating(false);
    setShowLoading(false);
  }, [pathname, searchParams]);

  return showLoading && isNavigating ? <LoadingIndicator /> : null;
}

export default function NavigationEvents() {
  return (
    <Suspense fallback={null}>
      <NavigationEventsContent />
    </Suspense>
  );
} 