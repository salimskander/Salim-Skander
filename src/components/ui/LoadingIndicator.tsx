'use client';

import { motion } from 'framer-motion';

export default function LoadingIndicator() {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div 
        className="h-16 w-16 relative"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border-t-2 border-purple-600 opacity-75"></div>
        <div className="absolute inset-0 rounded-full border-l-2 border-transparent"></div>
        <div className="absolute inset-0 rounded-full border-b-2 border-transparent"></div>
        <div className="absolute inset-0 rounded-full border-r-2 border-transparent"></div>
      </motion.div>
      <p className="absolute mt-20 text-foreground/80">Chargement...</p>
    </div>
  );
} 