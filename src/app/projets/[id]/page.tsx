'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { Project } from '@/types/project';
import NeonEffect from '@/components/ui/NeonEffect';

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Récupérer l'ID du projet depuis les paramètres d'URL
    const projectId = Number(params.id);
    
    // Trouver le projet correspondant
    const foundProject = projects.find(p => p.id === projectId);
    
    if (foundProject) {
      setProject(foundProject);
    } else {
      // Rediriger vers la page des projets si le projet n'est pas trouvé
      router.push('/projets');
    }
    
    setIsLoading(false);
  }, [params.id, router]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-2xl">Chargement...</div>
      </div>
    );
  }
  
  if (!project) {
    return null; // Le router va rediriger, pas besoin d'afficher quoi que ce soit
  }
  
  return (
    <div className="min-h-screen py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link 
          href="/projets" 
          className="inline-flex items-center text-foreground/70 hover:text-foreground mb-8 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Retour aux projets
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <NeonEffect color="purple" intensity="low">
              {project.title}
            </NeonEffect>
          </h1>
          
          {project.date && (
            <p className="text-foreground/60 mb-6">{project.date} • {project.category}</p>
          )}
          
          <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8">
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map(tech => (
              <span 
                key={tech} 
                className="text-sm bg-foreground/10 px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-lg leading-relaxed mb-6">{project.description}</p>
            
            {project.longDescription && (
              <div className="mt-6">
                {project.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            )}
          </div>
          
          {/* Galerie d'images supplémentaires */}
          {project.images && project.images.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Galerie</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((img, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="relative h-[250px] rounded-lg overflow-hidden"
                  >
                    <Image 
                      src={img} 
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex flex-wrap gap-4">
            {project.link && (
              <Link 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Voir le site
              </Link>
            )}
            
            {project.github && (
              <Link 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-foreground/10 px-6 py-3 rounded-lg hover:bg-foreground/20 transition-colors flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                Voir le code source
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 