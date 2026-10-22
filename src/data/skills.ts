import {
  Boxes,
  BrainCircuit,
  Braces,
  Cable,
  ChartScatter,
  Code2,
  Container,
  Cpu,
  Database,
  Eye,
  FileCode2,
  Flame,
  FlaskConical,
  Layers3,
  Radio,
  ScanFace,
  ScanSearch,
  Server,
  Smartphone,
  Smile,
  Sparkles,
  Video,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type Skill = {
  name: string;
  category: "Frontend" | "Backend & Real-Time" | "Data & DevOps" | "AI / ML";
  icon: LucideIcon;
  accent: "violet" | "blue" | "cyan" | "emerald";
};

export const skills: Skill[] = [
  { name: "TypeScript", category: "Frontend", icon: FileCode2, accent: "blue" },
  { name: "Next.js", category: "Frontend", icon: Layers3, accent: "violet" },
  { name: "React", category: "Frontend", icon: Code2, accent: "cyan" },
  { name: "Tailwind CSS", category: "Frontend", icon: Wind, accent: "blue" },
  { name: "Flutter", category: "Frontend", icon: Smartphone, accent: "cyan" },
  { name: "Node.js", category: "Backend & Real-Time", icon: Server, accent: "emerald" },
  { name: "Express.js", category: "Backend & Real-Time", icon: Cable, accent: "blue" },
  { name: "Python", category: "Backend & Real-Time", icon: Braces, accent: "blue" },
  { name: "FastAPI", category: "Backend & Real-Time", icon: Zap, accent: "emerald" },
  { name: "Flask", category: "Backend & Real-Time", icon: FlaskConical, accent: "cyan" },
  { name: "Socket.io", category: "Backend & Real-Time", icon: Radio, accent: "violet" },
  { name: "WebRTC", category: "Backend & Real-Time", icon: Video, accent: "cyan" },
  { name: "PostgreSQL", category: "Data & DevOps", icon: Database, accent: "blue" },
  { name: "Prisma ORM", category: "Data & DevOps", icon: Boxes, accent: "violet" },
  { name: "MongoDB", category: "Data & DevOps", icon: Database, accent: "emerald" },
  { name: "Docker", category: "Data & DevOps", icon: Container, accent: "blue" },
  { name: "PyTorch", category: "AI / ML", icon: Flame, accent: "violet" },
  { name: "scikit-learn", category: "AI / ML", icon: ChartScatter, accent: "blue" },
  { name: "Hugging Face", category: "AI / ML", icon: Smile, accent: "emerald" },
  { name: "YOLOv8", category: "AI / ML", icon: ScanSearch, accent: "cyan" },
  { name: "OpenCV", category: "AI / ML", icon: Eye, accent: "emerald" },
  { name: "DeepFace", category: "AI / ML", icon: ScanFace, accent: "cyan" },
  { name: "TensorFlow Lite", category: "AI / ML", icon: BrainCircuit, accent: "violet" },
  { name: "ONNX Runtime", category: "AI / ML", icon: Cpu, accent: "blue" },
];

export const skillGroups = [
  {
    title: "Frontend",
    description: "Type-safe, responsive web and mobile interfaces built for production.",
    icon: Sparkles,
  },
  {
    title: "Backend & Real-Time",
    description: "REST APIs, authentication, and live features with Socket.io and WebRTC.",
    icon: Server,
  },
  {
    title: "Data & DevOps",
    description: "Relational and document data modeling, containerized and deployed.",
    icon: Database,
  },
  {
    title: "AI / ML",
    description: "Training, serving, and deploying models from the cloud to the device.",
    icon: BrainCircuit,
  },
] as const;
