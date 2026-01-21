import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    type: "mobile",
    title: "Neon Drifter",
    description:
      "A high-speed racing prototype exploring physics-based drifting mechanics.",
    longDescription:
      "Neon Drifter is a mobile-first racing experience built with Unity. It utilizes a custom physics engine to simulate realistic tire friction on mobile devices. The project focuses on touch input optimization and keeping 60FPS on mid-range devices.",
    tech: ["Unity", "C#", "Mobile Input", "Shader Graph"],
    status: "Released",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
    links: {
      appStore: "#",
      playStore: "#",
      store: "#",
    },
  },
  {
    id: "2",
    type: "web",
    title: "Void Dashboard",
    description:
      "Analytical dashboard for monitoring microservices status in real-time.",
    longDescription:
      "A comprehensive admin dashboard built for DevOps teams. Features real-time WebSocket connections to visualize server load, error rates, and deployment pipelines. Built with Next.js 14 and Recharts.",
    tech: ["React", "Next.js", "WebSockets", "Tailwind"],
    status: "In Dev",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: "3",
    type: "web",
    title: "Pixel Engine",
    description: "Lightweight 2D rendering engine built from scratch.",
    longDescription:
      "An educational rendering engine written in C++ and compiled to WebAssembly for web demos. It handles sprite batching, lighting systems, and particle effects without any external game engine dependencies.",
    tech: ["C++", "WASM", "WebGL", "OpenGL"],
    status: "Prototype",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    links: {
      github: "#",
    },
  },
  {
    id: "4",
    type: "mobile",
    title: "Pocket Ledger",
    description: "Minimalist finance tracker for personal budgeting on the go.",
    longDescription:
      "A React Native application designed for quick expense entry. Uses local-first architecture (SQLite) for offline capability and syncs when online. Features a dark mode UI designed for OLED screens.",
    tech: ["React Native", "SQLite", "TypeScript"],
    status: "Released",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2606&auto=format&fit=crop",
    links: {
      appStore: "#",
      playStore: "#",
    },
  },
];
