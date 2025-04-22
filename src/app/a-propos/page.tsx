'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import NeonEffect from '@/components/ui/NeonEffect';
import Link from 'next/link';

export default function AboutPage() {
  // Parcours académique et professionnel
  const experiences = [
    {
      period: 'Oct. 2024 - Présent',
      role: 'Développeur Python',
      company: 'Yunohit',
      description: 'Développement d&apos;applications et solutions Python au sein d&apos;une startup innovante, en parallèle de ma formation.'
    },
    {
      period: '2022 - Présent',
      role: 'Formation en Informatique',
      company: 'Ynov Bordeaux',
      description: 'Cursus de 5 ans en informatique. Actuellement en 3ème année, avec une formation axée sur les technologies modernes et la pratique de projets concrets.'
    },
    {
      period: '2021 - 2022',
      role: 'Prépa École d&apos;Ingénieur',
      company: 'CESI Bordeaux',
      description: 'Formation préparatoire aux études d&apos;ingénieur, avec introduction aux sciences fondamentales et à la méthodologie.'
    },
    {
      period: '2021',
      role: 'Baccalauréat Général',
      company: '',
      description: 'Obtention du diplôme du baccalauréat général.'
    }
  ];

  return (
    <div className="min-h-screen py-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <NeonEffect color="purple" intensity="low">À Propos de Moi</NeonEffect>
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image 
                src="/ma_tete.jpg" 
                alt="Salim Skander" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent mix-blend-overlay"></div>
            </div>
            
            {/* Éléments de design */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-purple-600/15 blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-violet-500/15 blur-xl"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-2xl font-bold mb-6">Qui suis-je?</h2>
            <p className="text-foreground/80 mb-4">
              Bonjour! Je suis Salim Skander, étudiant en informatique et développeur passionné par la création d&apos;applications innovantes et intuitives. Actuellement en 3ème année à Ynov Bordeaux, je développe mes compétences en programmation tout en acquérant une expérience professionnelle concrète.
            </p>
            <p className="text-foreground/80 mb-8">
              Je suis extrêmement curieux par nature, et je crois fermement que dans un monde aussi changeant que l&apos;informatique, la curiosité couplée à la capacité d&apos;apprendre rapidement est la clé du succès. J&apos;adore résoudre des problèmes complexes et j&apos;ai une véritable appétence pour l&apos;expérience utilisateur, cherchant toujours à créer des interfaces intuitives et agréables qui répondent aux besoins réels des utilisateurs.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-2">
              <button 
                onClick={() => {
                  // Ouvre le CV dans un nouvel onglet
                  window.open('/CV alternance Salim Skander.pdf', '_blank');
                  
                  const link = document.createElement('a');
                  link.href = '/CV alternance Salim Skander.pdf';
                  link.download = 'CV_Salim_Skander.pdf';
                  link.setAttribute('download', 'CV_Salim_Skander.pdf');
                  link.setAttribute('type', 'application/pdf');
                  link.click();
                }}
                className="rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-3 font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer"
              >
                Télécharger CV
              </button>
              <Link 
                href="https://linkedin.com/in/salimskander" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-full border border-foreground/20 px-6 py-3 font-medium hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-violet-600/20 hover:border-purple-500/40 transition-all duration-300 flex items-center gap-2 hover:shadow-md hover:-translate-y-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                </svg>
                LinkedIn
              </Link>
              <Link 
                href="https://github.com/salimskander" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-full border border-foreground/20 px-6 py-3 font-medium hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-violet-600/20 hover:border-purple-500/40 transition-all duration-300 flex items-center gap-2 hover:shadow-md hover:-translate-y-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub
              </Link>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            <span className="relative">
              <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">Mon Parcours</span>
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-violet-500"></span>
            </span>
          </h2>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                className="flex flex-col md:flex-row gap-6 relative"
              >
                {/* Ligne verticale pour connecter les expériences */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-[7px] md:left-[132px] top-[28px] w-0.5 h-[calc(100%+48px)] bg-gradient-to-b from-purple-500/30 to-transparent"></div>
                )}
                
                {/* Point pour marquer l&apos;année */}
                <div className="w-[15px] h-[15px] rounded-full bg-purple-500 absolute left-0 md:left-32 top-[10px] z-10 shadow-[0_0_8px_rgba(147,51,234,0.6)]"></div>
                
                <div className="w-24 md:w-32 shrink-0 text-foreground/60 font-medium pl-8 md:pl-0 md:text-right -ml-4">
                  {experience.period}
                </div>
                
                <div className="pl-8 md:pl-12 border-l border-foreground/10 md:border-none">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-500">{experience.role}</h3>
                  <p className="text-foreground/70 font-medium mb-2">{experience.company}</p>
                  <p className="text-foreground/80">{experience.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-24 text-center bg-gradient-to-r from-purple-600/10 to-violet-600/10 p-12 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(147,51,234,0.1),transparent_70%)]"></div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Envie de collaborer?</h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto relative z-10">
            Je suis toujours ouvert à discuter de nouveaux projets, opportunités ou partenariats.
          </p>
          
          <Link 
            href="/contact"
            className="bg-gradient-to-r from-purple-600 to-violet-600 text-white font-medium py-3 px-8 rounded-full inline-flex items-center hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 relative z-10"
          >
            Contactez-moi
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 