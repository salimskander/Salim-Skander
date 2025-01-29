import Image from "next/image";
import Link from "next/link";
import { useTheme } from '../context/ThemeContext';

// Données des compétences
const skills = {
  frontend: ["React / Next.js", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "Express", "PostgreSQL"],
  tools: ["Git", "Docker", "AWS"]
};

// Composant pour une carte de compétence
const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="relative p-6 rounded-lg overflow-hidden group">
    {/* Effet de bordure animée */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-50 animate-gradient"></div>
    {/* Fond avec effet holographique */}
    <div className="relative bg-black/30 backdrop-blur-md p-6 rounded-lg border border-white/10 shadow-[0_0_15px_rgba(0,255,255,0.3)]">
      <h3 className="text-xl font-bold mb-4 text-cyan-300">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center space-x-2 text-white/80">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

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
          <div className="flex-1 relative">
            {/* Carte holographique avec effet AR */}
            <div className="relative p-8 rounded-lg overflow-hidden">
              {/* Effet de scan */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-transparent animate-scan"></div>
              {/* Fond avec effet holographique */}
              <div className="relative bg-black/30 backdrop-blur-xl p-8 rounded-lg border border-white/10 shadow-[0_0_30px_rgba(0,255,255,0.2)]">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="text-white">Bonjour, je suis</span>{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Votre Nom</span>
                </h1>
                <div className="relative">
                  {/* Effet de ligne de scan */}
                  <div className="absolute left-0 w-1 h-full bg-cyan-400/50 animate-pulse"></div>
                  <p className="text-xl text-white/80 pl-4">
                    Développeur Full Stack spécialisé dans la création d'expériences web futuristes
                  </p>
                </div>
                <div className="flex gap-4 mt-8">
                  <Link 
                    href="/projects"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all duration-300"
                  >
                    Mes projets
                  </Link>
                  <Link 
                    href="/contact"
                    className="border border-cyan-500/50 text-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all duration-300"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Cercles lumineux animés */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-transparent rounded-full animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full animate-pulse [animation-delay:-2s]"></div>
              <Image
                src="/profile.jpg"
                alt="Photo de profil"
                fill
                className="rounded-full object-cover border-2 border-cyan-500/20 shadow-[0_0_30px_rgba(0,255,255,0.3)]"
                priority
              />
            </div>
          </div>
        </section>

        {/* Sections Compétences et Projets */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-cyan-300">Compétences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SkillCard title="Frontend" skills={skills.frontend} />
            <SkillCard title="Backend" skills={skills.backend} />
            <SkillCard title="Outils" skills={skills.tools} />
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
