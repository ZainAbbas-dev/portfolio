import { Eye, ScanFace, Scale, ShieldCheck, type LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  icon: LucideIcon;
  accent: "violet" | "blue" | "cyan" | "emerald";
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "CaseRoute",
    category: "AI-Powered Legal Tech",
    description:
      "A full-stack legal marketplace with AI case categorization, lawyer-client matchmaking, secure documents, real-time chat, and role-based workflows.",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Socket.io"],
    icon: Scale,
    accent: "violet",
    liveUrl: "https://case-route.vercel.app/",
  },
  {
    title: "Nexus Secure Chat",
    category: "Encrypted Communication",
    description:
      "A production messaging platform with AES-256 encryption, scam detection, trust scoring, WebRTC calls, live coding, and a shared whiteboard.",
    stack: ["React", "WebRTC", "Socket.io", "PostgreSQL"],
    icon: ShieldCheck,
    accent: "blue",
    liveUrl: "https://nexus-secure-chat-savr.vercel.app/",
  },
  {
    title: "Multimodal Vision Engine",
    category: "AI / Computer Vision",
    description:
      "An AI engine designed to process multimodal inputs for richer visual understanding, analysis, and intelligent application workflows.",
    stack: ["Python", "FastAPI", "OpenCV", "AI Models"],
    icon: Eye,
    accent: "cyan",
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
