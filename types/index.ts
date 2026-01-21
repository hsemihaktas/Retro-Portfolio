export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  status: "Released" | "In Dev" | "Prototype";
  type: "mobile" | "web";
  image?: string;
  links?: {
    demo?: string;
    github?: string;
  };
}

export interface Experience {
  id: number;
  type: "work" | "edu";
  role: string;
  org: string;
  date: string;
  desc: string;
}
