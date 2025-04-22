'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProjectCard from '@/components/projects/ProjectCard';
import NeonEffect from '@/components/ui/NeonEffect';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  // Référence pour l'animation d'entrée
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: -20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mes Projets
          </h1>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations récentes. Chaque projet représente un défi unique 
            et démontre différents aspects de mes compétences en développement.
          </p>
        </motion.div>
        
        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
} 