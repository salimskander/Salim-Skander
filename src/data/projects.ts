import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: "Human-capacities",
    description: "Plateforme interactive permettant de tester et d'améliorer ses capacités cognitives.",
    longDescription: "Human Capacities est une application web conçue pour évaluer et développer différentes capacités cognitives à travers une série de tests interactifs. J'ai créé cette plateforme pour permettre aux utilisateurs de mesurer leurs performances dans des domaines comme la mémoire, l'attention, la vitesse de réaction et la logique.\n\nL'interface utilisateur est intuitive et responsive, offrant une expérience fluide sur tous les appareils. Chaque test est soigneusement conçu pour cibler des compétences cognitives spécifiques, et les résultats sont présentés de manière claire avec des statistiques et des comparaisons pour suivre sa progression au fil du temps.",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    image: "/projects/human-capacities-logo.png",
    images: [
      "/projects/human-capacities-detail-1.jpg",
      "/projects/human-capacities-detail-2.jpg",
      "/projects/human-capacities-detail-3.jpg",
      "/projects/human-capacities-detail-4.jpg"
    ],
    link: "https://human-capacities.vercel.app/",
    github: "https://github.com/salimskander/human-capacities",
    date: "decembre 2024",
    category: "Web Application"
  },
  {
    id: 2,
    title: "TIX",
    description: "Application React Native innovante connectant organisateurs et participants d'événements. Permet le suivi d'organisateurs et la gestion d'événements en temps réel avec une Interface intuitive",
    technologies: ["React Native", "Expo", "Firebase", "Typescript"],
    image: "/projects/tix-logo.png",
    images: [
      "/projects/tix-detail-1.jpg",
      "/projects/tix-detail-2.jpg"
    ],
    github: "https://github.com/salimskander/tix-CLI",
    date: "Mars 2023",
    category: "Mobile Application"
  },
  {
    id: 3,
    title: "Tix-API",
    description: "🎫 API REST moderne pour la gestion d'événements et de billetterie.",
    longDescription: "🎫 API REST moderne pour la gestion d'événements et de billetterie. Construite avec Node.js, Express et MongoDB. Inclut authentification JWT, paiements sécurisés et documentation Swagger.",
    technologies: ["Node.js", "Express", "MongoDB", "TypeScript"],
    image: "/projects/tix-api-logo.png",
    images: [
      "/projects/tix-api-detail-1.jpg",
      "/projects/tix-api-detail-2.jpg"
    ],
    github: "https://github.com/salimskander/tix-api",
    date: "Juin 2023",
    category: "Mobile Application"
  },
  {
    id: 4,
    title: "MonitEyes",
    description: "Application web légère de surveillance système multi-plateforme. Développée en Python avec Flask et psutil. Offre monitoring en temps réel du CPU, RAM, disque et ports réseau via interface web responsive et API REST. Inclut génération de rapports, analyses statistiques et alertes personnalisables.",
    technologies: ["Python", "Flask", "psutil", "SQLite"],
    image: "/projects/monit-eyes-logo.png",
    github: "https://github.com/salimskander/Outil-admin",
    date: "Avril 2023",
    category: "Web Application"
  }
]; 