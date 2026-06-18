export interface Project {
  id: string;
  title: string;
  category: "Web" | "AI/ML";
  technologies: string[];
  description: string;
  detailedWalkthrough?: string;
  githubUrl?: string;
  demoUrl?: string;
  impactMetric?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  skillsGained: string[];
  color: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  score: string;
  details: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: "Languages" | "Web Technologies" | "AI/ML & Data Science" | "Databases & Tools";
  color: string;
}

export interface CloudNode {
  id: string;
  name: string;
  type: "vulnerable" | "active" | "gateway" | "database" | "serverless" | "compute";
  x: number;
  y: number;
  status: "idle" | "running" | "linked" | "alert";
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}
