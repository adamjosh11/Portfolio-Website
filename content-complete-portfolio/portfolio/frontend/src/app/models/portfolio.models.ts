export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  year: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  highlights: string[];
  isCurrent: boolean;
}

export interface PersonalInterest {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
