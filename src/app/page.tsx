'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import NeonEffect from '@/components/ui/NeonEffect';
import NeonParticles from '@/components/ui/NeonParticles';
import FancyButton from '@/components/ui/FancyButton';
import ContactButton from '@/components/ui/ContactButton';

// Composant pour l'animation de texte lettre par lettre
const AnimatedText = ({ text, className = "", delay = 0 }: { text: string, className?: string, delay?: number }) => {
  // Divisez le texte en caractères pour l'animation
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * i }
    })
  };
  
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };
  
  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};


export default function Home() {
  // Référence pour l'animation de scroll parallaxe
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Références pour les sections et animations d'entrée
  const techSectionRef = useRef(null);
  const ctaSectionRef = useRef(null);
  
  const techSectionInView = useInView(techSectionRef, { once: true, amount: 0.3 });
  const ctaSectionInView = useInView(ctaSectionRef, { once: true, amount: 0.5 });
  
  // Effet parallaxe pour différents éléments
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  
  const hardSkills = [
    {
      name: 'LANGAGES',
      icon: '💻',
      skills: [
        'Python', 'Golang', 'C#', 'Java', 'JavaScript', 
        'Node.js', 'SQL', 'HTML & CSS', 'MongoDB', 
        'Swift', 'Kotlin'
      ]
    },
    {
      name: 'FRAMEWORKS',
      icon: '🔧',
      skills: [
        'React', 'ReactJs', 'Django', 'Flask',
        'Express.js', 'SwiftUI', 'Android Studio'
      ]
    },
    {
      name: 'CONCEPTS',
      icon: '🧠',
      skills: [
        'Base de données', 'API Rest', 'Développement web/mobile',
        'Docker', 'UX/UI Design', 'Programmation Orientée Objet',
        'Logique de programmation'
      ]
    }
  ];

  const softSkills = [
    'Esprit logique', 'Rationnel', 'Adaptabilité', 
    'Minutieux', 'Communication', 'Méthodologie agile', 
    'Esprit d\'équipe', 'Rigoureux'
  ];

  return (
    <>
      {/* Ajout des particules néon */}
      <NeonParticles count={50} />
      
      {/* Conteneur principal avec animation de défilement */}
      <div ref={ref} className="relative">
        {/* Éléments décoratifs avec effet parallaxe - MODIFIÉS */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-purple-400/15 blur-3xl"
            style={{ y: y1 }}
          />
          <motion.div
            className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-purple-600/15 blur-3xl"
            style={{ y: y2 }}
          />
          <motion.div
            className="absolute -bottom-20 right-1/4 w-72 h-72 rounded-full bg-violet-500/15 blur-3xl"
            style={{ y: y3 }}
          />
        </div>

        {/* Section Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center gap-8 p-4 md:p-8 w-full relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            {/* Nom avec effet néon */}
            <AnimatedText 
              text="Salim Skander"
              className="text-5xl md:text-7xl font-bold mb-4 flex justify-center flex-wrap"
              delay={0.2}
            />
            
            <motion.h2 
              className="text-xl md:text-2xl text-foreground/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <NeonEffect color="purple" intensity="low" pulsate>Développeur Full Stack & Mobile</NeonEffect>
            </motion.h2>
            
            {/* Boutons avec bordure néon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col md:flex-row gap-6 justify-center items-center"
            >
              <FancyButton
                text="Voir mes projets"
                href="/projets"
              />
              
              <ContactButton href="/contact" />
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 text-sm text-foreground/60 flex flex-col items-center"
          >
            <p>Scrollez pour découvrir</p>
            <div className="animate-bounce mt-2">↓</div>
          </motion.div>
        </section>

        {/* Section Hard Skills avec design amélioré */}
        <section className="py-20 px-4 w-full" ref={techSectionRef}>
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={techSectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-wide bg-gradient-to-r from-purple-600 via-violet-500 to-purple-600 bg-clip-text text-transparent mb-4">
                COMPÉTENCES
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-purple-600 to-violet-600 mx-auto rounded-full"></div>
            </motion.div>
            
            {/* Hard Skills Section - Grid Layout */}
            <div className="mb-20">
              <motion.h3 
                className="text-2xl md:text-3xl font-bold mb-10 text-center"
                initial={{ opacity: 0 }}
                animate={techSectionInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
              >
                <span className="relative">
                  <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">HARD SKILLS</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-violet-500"></span>
                </span>
              </motion.h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {hardSkills.map((category, categoryIndex) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={techSectionInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.2 }}
                    className="group"
                  >
                    <div className="bg-background/30 backdrop-blur-md p-8 rounded-2xl border border-foreground/5 hover:border-purple-500/30 transition-all duration-300 h-full shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1">
                      <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="text-3xl">{category.icon}</span>
                        <h4 className="text-xl font-bold tracking-wider text-center bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                          {category.name}
                        </h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 justify-center">
                        {category.skills.map((skill, index) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={techSectionInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.4 + categoryIndex * 0.1 + index * 0.05, duration: 0.3 }}
                            className="px-4 py-2 bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-xl text-sm font-medium transition-all duration-300 border border-foreground/10 hover:border-purple-500/40 hover:bg-purple-500/5 cursor-default relative overflow-hidden group"
                          >
                            {skill}
                            <motion.span 
                              className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                              transition={{ repeat: Infinity, duration: 2 }}
                            />
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Soft Skills Section - Design alternatif */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={techSectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">
                <span className="relative">
                  <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">SOFT SKILLS</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-violet-500"></span>
                </span>
              </h3>
              
              <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={techSectionInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ 
                      delay: 1 + index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [-1, 1, -1, 0],
                      transition: { rotate: { duration: 0.3, ease: "easeInOut" } }
                    }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-violet-600/30 blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-lg"/>
                    <div className="w-[140px] h-[140px] bg-foreground/5 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center justify-center gap-3 border border-foreground/10 group-hover:border-purple-500/50 transition-all duration-300 shadow-lg transform hover:rotate-0 relative">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-violet-500/20 group-hover:from-purple-500/30 group-hover:to-violet-500/30 transition-colors duration-300">
                        <span className="text-2xl">
                          {index % 8 === 0 ? "🧠" : 
                           index % 8 === 1 ? "🔄" : 
                           index % 8 === 2 ? "🤝" : 
                           index % 8 === 3 ? "✨" : 
                           index % 8 === 4 ? "💬" : 
                           index % 8 === 5 ? "📊" : 
                           index % 8 === 6 ? "👥" : "📝"}
                        </span>
                      </div>
                      <p className="text-center font-medium text-sm">{skill}</p>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                      <div className="absolute -top-1 -left-1 w-3 h-3 bg-violet-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section CTA avec animation de perspective */}
        <section className="py-20 px-4 w-full bg-foreground/5 relative overflow-hidden" ref={ctaSectionRef}>
          <AnimatePresence>
            {ctaSectionInView && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 overflow-hidden pointer-events-none"
              >
                <svg width="100%" height="100%" 
                  className="absolute top-0 left-0 opacity-10">
                  <pattern
                    id="grid-pattern"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect width="40" height="40" fill="none" />
                    <circle cx="20" cy="20" r="1" fill="currentColor" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="container mx-auto max-w-3xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaSectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                animate={ctaSectionInView ? {
                  textShadow: ["0 0 0px rgba(0,0,0,0)", "0 0 15px rgba(59, 130, 246, 0.5)", "0 0 0px rgba(0,0,0,0)"]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 1
                }}
              >
                Prêt à collaborer ?
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={ctaSectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Link href="/contact" className="group relative overflow-hidden rounded-full px-8 py-4 font-medium inline-block border border-foreground/20">
                  <span className="relative z-10 text-background group-hover:text-background transition-colors">
                    Discutons de votre projet
                  </span>
                  <motion.span 
                    className="absolute inset-0 bg-foreground"
                    initial={{ borderRadius: 9999 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 25px 3px rgba(147, 51, 234, 0.6)"
                    }}
                  />
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ borderRadius: 9999 }}
                    whileHover={{ scale: 1.05 }}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
