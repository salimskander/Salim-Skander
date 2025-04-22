export type Project = {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  images?: string[];
  link?: string;
  github?: string;
  featured?: boolean;
  date?: string;
  category?: string;
}; 