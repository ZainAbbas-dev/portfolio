import { Eye, HeartPulse, ScanFace, Scale, ShieldCheck, type LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  icon: LucideIcon;
  accent: "violet" | "blue" | "cyan" | "emerald";
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "MediQore",
    category: "Final Year Project · AI HealthTech",
    description:
      "An AI-assisted, offline-first health platform for Lady Health Workers: a Flutter Android app and React web portal with AES-256 encrypted offline storage, conflict-aware UUID sync, and on-device ONNX risk models trained with scikit-learn.",
    stack: ["Flutter", "Node.js", "PostgreSQL", "React", "scikit-learn", "ONNX Runtime"],
    icon: HeartPulse,
    accent: "emerald",
    featured: true,
  },
  {
    title: "CaseRoute",
    category: "Legal Tech Marketplace",
    description:
      "A legal marketplace with 27 REST API endpoints, JWT-secured dashboards for three user roles, a weighted lawyer-matching algorithm, and real-time chat on a dedicated Socket.io server.",
    stack: ["Next.js", "Express.js", "PostgreSQL", "Prisma", "Socket.io"],
    icon: Scale,
    accent: "violet",
    liveUrl: "https://case-route.vercel.app/",
  },
  {
    title: "Nexus Secure Chat",
    category: "Real-Time Communication",
    description:
      "A real-time communication platform with WebRTC audio/video calls, AES-encrypted rooms, phishing detection with a 4-tier trust score, a shared whiteboard, and a live Monaco code editor.",
    stack: ["React", "WebRTC", "Socket.io", "PostgreSQL"],
    icon: ShieldCheck,
    accent: "blue",
    liveUrl: "https://nexus-secure-chat-savr.vercel.app/",
  },
  {
    title: "Multimodal Vision Engine",
    category: "Computer Vision REST API",
    description:
      "A FastAPI service serving ViLT for visual question answering, Donut for receipt parsing, and YOLOv8 for object detection, containerized with Docker on Hugging Face Spaces.",
    stack: ["Python", "FastAPI", "PyTorch", "YOLOv8", "Docker"],
    icon: Eye,
    accent: "cyan",
    liveUrl: "https://multimodal-vision-engine.vercel.app/",
  },
  {
    title: "Face Recognition Attendance",
    category: "AI-Powered Desktop App",
    description:
      "A real-time attendance system with facial recognition, automated logging, Flask APIs, instructor monitoring, and anomaly flagging.",
    stack: ["Python", "DeepFace", "OpenCV", "Flask"],
    icon: ScanFace,
    accent: "emerald",
  },
];
