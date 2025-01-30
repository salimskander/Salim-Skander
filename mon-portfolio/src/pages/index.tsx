import Image from "next/image";
import Link from "next/link";
import { useTheme } from '../context/ThemeContext';
import { TiltCard } from '../components/TiltCard';

// Données des compétences
const skills = {
  frontend: ["React / Next.js", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "Express", "PostgreSQL"],
  tools: ["Git", "Docker", "AWS"]
};

// Composant pour une carte de compétence
const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => {
  const { theme } = useTheme();
  
  return (
    <div className="relative p-6 rounded-lg overflow-hidden group">
      {theme === 'futuristic' && (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-50 animate-gradient"></div>
      )}
      <div className={`relative p-6 rounded-lg ${
        theme === 'professional' 
          ? 'bg-slate-800 border border-slate-700' 
          : theme === 'colorful'
          ? 'bg-white border-2 border-transparent bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-padding'
          : 'bg-black/30 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(0,255,255,0.3)]'
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
                      ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white hover:opacity-90'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]'
                  }`}
                >
                  Mes projets
                </Link>
                <Link 
                  href="/contact"
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    theme === 'colorful'
                      ? 'border-2 border-rose-500 text-rose-500 hover:bg-rose-50'
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
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/30 to-orange-500/30 rounded-full"></div>
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-transparent rounded-full animate-pulse"></div>
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full animate-pulse [animation-delay:-2s]"></div>
                </>
              )}
              <Image
                src="/profile.jpg"
                alt="Photo de profil"
                fill
                className={`rounded-full object-cover ${
                  theme === 'colorful'
                    ? 'border-2 border-rose-500'
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
