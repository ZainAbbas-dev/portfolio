import {
  Bot,
  BrainCircuit,
  Braces,
  Cable,
  Code2,
  Database,
  Eye,
  FileCode2,
  FlaskConical,
  Layers3,
  ScanFace,
  Radio,
  Server,
  Sparkles,
  Video,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type Skill = {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "AI / Real-Time";
  icon: LucideIcon;
  accent: "violet" | "blue" | "cyan" | "emerald";
};

export const skills: Skill[] = [
  { name: "Next.js", category: "Frontend", icon: Layers3, accent: "violet" },
  { name: "React", category: "Frontend", icon: Code2, accent: "cyan" },
  { name: "HTML5", category: "Frontend", icon: FileCode2, accent: "blue" },
  { name: "CSS3", category: "Frontend", icon: Braces, accent: "violet" },
  { name: "Node.js", category: "Backend", icon: Server, accent: "emerald" },
  { name: "Express.js", category: "Backend", icon: Cable, accent: "blue" },
  { name: "Python", category: "Backend", icon: Braces, accent: "blue" },
  { name: "FastAPI", category: "Backend", icon: Zap, accent: "emerald" },
  { name: "Flask", category: "Backend", icon: FlaskConical, accent: "cyan" },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: Database,
    accent: "blue",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: Database,
    accent: "emerald",
  },
  {
    name: "Socket.io",
    category: "AI / Real-Time",
    icon: Radio,
    accent: "violet",
  },
  { name: "WebRTC", category: "AI / Real-Time", icon: Video, accent: "cyan" },
  { name: "OpenCV", category: "AI / Real-Time", icon: Eye, accent: "emerald" },
  {
    name: "DeepFace",
    category: "AI / Real-Time",
    icon: ScanFace,
    accent: "cyan",
  },
  {
    name: "TensorFlow Lite",
    category: "AI / Real-Time",
    icon: BrainCircuit,
    accent: "violet",
  },
  {
    name: "Haar Cascade",
    category: "AI / Real-Time",
    icon: ScanFace,
    accent: "blue",
  },
  {
    name: "Gemini API",
    category: "AI / Real-Time",
    icon: Bot,
    accent: "violet",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    description: "Responsive interfaces and production-ready web experiences.",
    icon: Sparkles,
  },
  {
    title: "Backend",
    description: "Scalable APIs, authentication, and application architecture.",
    icon: Server,
  },
  {
    title: "Database",
    description: "Structured and document data for real-world products.",
    icon: Database,
  },
  {
    title: "AI / Real-Time",
    description: "Intelligent features and live collaborative systems.",
    icon: Radio,
  },
] as const;
