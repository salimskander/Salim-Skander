'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, amount: 0.2 });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isCardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="project-card group relative"
    >
      <Link href={`/projets/${project.id}`} className="card-main-link" aria-label={`Voir les détails de ${project.title}`}>
        <span className="sr-only">Voir les détails de {project.title}</span>
      </Link>
      
      <div className="card-image-container">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          className="card-image"
        />
        <div className="card-overlay">
          {project.technologies && (
            <div className="card-tech-stack">
              {project.technologies.slice(0, 3).map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
              {project.technologies.length > 3 && (
                <span className="tech-badge">+{project.technologies.length - 3}</span>
              )}
            </div>
          )}
        </div>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-description">{project.description}</p>
        
        <div className="card-actions">
          <Link href={`/projets/${project.id}`} className="details-link">
            <span>Détails</span>
            <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <div className="action-buttons">
            {project.github && (
              <Link href={project.github} target="_blank" rel="noopener noreferrer" className="action-button github-button" aria-label="Voir le code source" onClick={(e) => e.stopPropagation()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>GitHub</span>
              </Link>
            )}
            
            {project.link && (
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="action-button live-button" aria-label="Voir le projet" onClick={(e) => e.stopPropagation()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <span>Démo</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 