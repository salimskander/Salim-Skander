import Image from "next/image";
import Link from "next/link";
import { useTheme } from '../context/ThemeContext';
import { TiltCard } from '../components/TiltCard';
import { useState, useEffect } from 'react';

// Données des compétences
const skills = {
  Langages: [
    "Python",
    "TypeScript / JavaScript",
    "SQL",
    "HTML & CSS",
    "Golang",
    
    "Swift",
    "Kotlin"
  ],
  Frameworks: [
    "React / React native",
    "Django",
    "Flask",
    "Express js",
    "Swift UI"



  ],
  Concepts: [
    "Base de données",
    "AI", 
    "REST", 
    "Développement web/mobile", 
    "UX/UI Design applicatif", 
    "POO", 
    "Logique de programmation"
  ]
};

// Ajouter cette constante avec les soft skills en haut du fichier
const softSkills = [
  "Esprit logique et rationnel",
  "Adaptabilité",
  "Minutieux",
  "Communication",
  "Méthodologie agile",
  "Esprit d'équipe",
  "Curiosité"
];

// Composant pour une carte de compétence
const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => {
  const { theme } = useTheme();
  
  return (
    <div className="relative p-6 rounded-lg overflow-hidden group">
      {theme === 'futuristic' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 animate-pulse"></div>
          <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500/50 to-blue-500/50 blur-xl group-hover:opacity-75 transition-opacity opacity-0"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent animate-glow"></div>
        </>
      )}
      <div className={`relative p-6 rounded-lg ${
        theme === 'professional' 
          ? 'bg-slate-800 border border-slate-700' 
          : theme === 'colorful'
          ? 'bg-white border-2 border-transparent bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-padding'
          : 'bg-black/30 backdrop-blur-md border border-cyan-500/30'
      }`}>
        <h3 className={`text-xl font-bold mb-4 ${
          theme === 'professional' ? 'text-slate-200' 
          : theme === 'colorful' ? 'text-slate-800'
          : 'text-cyan-300'
        }`}>{title}</h3>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center space-x-2">
              {theme === 'futuristic' && (
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              )}
              {theme === 'colorful' && (
                <span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
              )}
              <span className={`${
                theme === 'professional' ? 'text-slate-300' 
                : theme === 'colorful' ? 'text-slate-700'
                : 'text-white/80'
              }`}>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Ajouter ce composant pour les soft skills flottants
const FloatingSkill = ({ skill, index }: { skill: string; index: number }) => {
  const { theme } = useTheme();
  
  return (
    <div 
      className={`absolute inline-block px-6 py-3 rounded-full text-lg font-medium animate-continuous-float
        ${theme === 'colorful'
          ? 'bg-white/90 text-rose-500 border-2 border-rose-500'
          : theme === 'professional'
          ? 'bg-slate-800 text-slate-200 border border-slate-700'
          : 'bg-black/30 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm'
        }`}
      style={{
        left: `${(index * 20) % 70 + 15}%`,
        animationDelay: `${index * -3}s`,
        animationDuration: `${15 + index * 2}s`
      }}
    >
      {skill}
    </div>
  );
};

// Composant pour un projet
const ProjectCard = ({ title, description }: { title: string; description: string }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
    <div className="relative bg-black/40 backdrop-blur-md rounded-lg overflow-hidden border border-white/10">
      <div className="aspect-video bg-gradient-to-br from-cyan-900/30 to-transparent"></div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-cyan-300 mb-2">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  </div>
);

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      {theme === 'futuristic' && (
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>
      )}
      
      <main className="relative container mx-auto px-4 py-20">
        {/* Section Hero avec effet holographique */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          <TiltCard className="flex-1 relative">
            {/* Carte holographique avec effet AR */}
            <div className={`relative p-8 rounded-lg overflow-hidden ${
              theme === 'colorful' 
                ? 'bg-white border-2 border-rose-500 bg-[radial-gradient(circle_at_center,_var(--accent)_1px,_transparent_1px)] bg-[size:20px_20px]'
                : 'bg-black/30 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,255,255,0.2)]'
            }`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className={theme === 'colorful' ? 'text-rose-600' : 'text-white'}>
                  Bonjour, je suis
                </span>{" "}
                <span className={`${
                  theme === 'colorful' 
                    ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-transparent bg-clip-text'
                    : 'text-white'
                }`}>
                  Salim Skander
                </span>
              </h1>
              <div className="relative">
                <p className={`text-xl ${
                  theme === 'colorful' 
                    ? 'text-rose-600'
                    : 'text-white/80'
                } pl-4`}>
                  Développeur Full Stack en formation passionné par le developpement mobile
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <Link 
                  href="/projects"
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    theme === 'colorful'
                      ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white hover:shadow-[0_5px_15px_-3px_rgba(251,113,133,0.4)] hover:-translate-y-1 hover:scale-105'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]'
                  }`}
                >
                  Mes projets
                </Link>
                <Link 
                  href="/contact"
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    theme === 'colorful'
                      ? 'border-2 border-rose-500 text-rose-500 hover:bg-gradient-to-r hover:from-rose-500 hover:to-orange-500 hover:text-white hover:border-transparent hover:-translate-y-1 hover:scale-105 hover:shadow-[0_5px_15px_-3px_rgba(251,113,133,0.4)]'
                      : 'border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]'
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </TiltCard>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {theme === 'colorful' ? (
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/30 to-orange-500/30 rounded-full animate-pulse"></div>
              ) : theme === 'professional' ? (
                <div className="absolute inset-0 bg-slate-800/50 rounded-full"></div>
                
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-transparent rounded-full animate-pulse"></div>
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full animate-pulse [animation-delay:-2s]"></div>
                </>
              )}
              <Image
                src="/salim.jpg"
                alt="Photo de profil"
                fill
                className={`rounded-full object-cover ${
                  theme === 'colorful'
                    ? 'border-2 border-rose-500'
                    : theme === 'professional'
                    ? 'border border-slate-700'
                    : 'border-2 border-cyan-500/20 shadow-[0_0_30px_rgba(0,255,255,0.3)]'
                }`}
                priority
              />
            </div>
          </div>
        </section>

        {/* Sections Compétences et Projets */}
        <section className="mb-20">
          <h2 className={`text-3xl font-bold mb-8 ${
            theme === 'colorful'
              ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-transparent bg-clip-text'
              : 'text-cyan-300'
          }`}>
            Compétences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SkillCard title="Langages" skills={skills.Langages} />
            <SkillCard title="Frameworks" skills={skills.Frameworks} />
            <SkillCard title="Concepts" skills={skills.Concepts} />
          </div>
        </section>

        <section className="mb-20">
          <h2 className={`text-3xl font-bold mb-8 ${
            theme === 'colorful'
              ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-transparent bg-clip-text'
              : 'text-cyan-300'
          }`}>
            Soft Skills
          </h2>
          <div id="softSkillsContainer" className="relative w-full h-[500px]">
            {softSkills.map((skill, index) => (
              <FloatingSkill key={skill} skill={skill} index={index} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-cyan-300">Projets Récents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Projet 1" 
              description="Description du projet avec effet holographique" 
            />
          </div>
        </section>
      </main>
    </div>
  );
}
