import {
  ArrowLeft,
  Github,
  Globe,
  Smartphone,
  Monitor,
  Layers,
} from "lucide-react";
import { Project } from "@/types";
import { WebFrame } from "./WebFrame";
import { MobileFrame } from "./MobileFrame";

interface ProjectDetailViewProps {
  project: Project;
  onBack: () => void;
}

export function ProjectDetailView({ project, onBack }: ProjectDetailViewProps) {
  const defaultWebImage =
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop";
  const defaultMobileImage =
    "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1000&auto=format&fit=crop";

  return (
    <div className="flex flex-col h-full bg-white relative animate-[fadeInUp_0.3s_ease-out]">
      {/* NAVIGATION BAR - Sticky Top */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b-[4px] border-[#1a1a1a] p-4 md:p-6 flex items-center justify-between shrink-0">
        <button
          onClick={onBack}
          className="flex items-center gap-3 font-mono text-sm font-bold uppercase hover:text-[#ccff00] hover:bg-black px-4 py-2 border-[2px] border-transparent hover:border-transparent transition-all group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Index
        </button>

        <div className="hidden md:flex items-center gap-2 font-mono text-[10px] text-gray-400">
          <span>PROJECT_ID: {project.id.padStart(3, "0")}</span>
          <span>//</span>
          <span className="uppercase">{project.status}</span>
        </div>
      </div>

      {/* SCROLLABLE CONTENT AREA */}
      <div className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-12">
        {/* HEADER */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-black flex items-center gap-2 ${
                project.type === "mobile" ? "bg-blue-100" : "bg-[#ccff00]"
              }`}
            >
              {project.type === "mobile" ? (
                <Smartphone size={12} />
              ) : (
                <Monitor size={12} />
              )}
              {project.type.toUpperCase()}
            </span>
            <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-black bg-gray-100">
              {project.status}
            </span>
          </div>

          <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter text-[#1a1a1a] mb-6 leading-[0.9]">
            {project.title}
          </h1>

          <p className="font-mono text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed border-l-[4px] border-black pl-6">
            {project.description}
          </p>
        </div>

        {/* VISUAL SHOWCASE */}
        <div className="mb-16 bg-gray-100 border-[3px] border-[#1a1a1a] p-8 md:p-12 flex items-center justify-center relative overflow-hidden">
          {/* Background Decor */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle, black 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />

          {project.type === "web" && (
            <WebFrame
              imageSrc={project.image || defaultWebImage}
              title={project.title}
            />
          )}

          {project.type === "mobile" && (
            <MobileFrame
              imageSrc={project.image || defaultMobileImage}
              title={project.title}
            />
          )}
        </div>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Left: Long Description */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-display font-black text-2xl uppercase mb-4 flex items-center gap-2">
                <Layers size={20} /> About Project
              </h3>
              <div className="prose prose-lg font-mono text-gray-600 max-w-none">
                <p>{project.longDescription || project.description}</p>
              </div>
            </div>

            <div className="bg-[#f8f8f8] p-6 border-l-[4px] border-[#ccff00]">
              <h4 className="font-bold text-xs uppercase tracking-widest mb-2 text-black">
                Technical Insight
              </h4>
              <p className="font-mono text-sm text-gray-500">
                This project was built to challenge modern web constraints. It
                uses a custom state management solution to minimize re-renders
                and employs Web Workers for heavy computational tasks.
              </p>
            </div>
          </div>

          {/* Right: Tech Stack & Meta */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display font-black text-xl uppercase mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs font-bold border-[2px] border-black px-3 py-1.5 bg-white shadow-[2px_2px_0px_black]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display font-black text-xl uppercase mb-4">
                Links
              </h3>
              <div className="flex flex-col gap-3">
                {project.links?.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-black text-white h-12 flex items-center justify-center gap-2 font-bold uppercase hover:bg-[#ccff00] hover:text-black transition-all border-[3px] border-black hover:-translate-y-1 hover:shadow-[4px_4px_0px_black] text-sm"
                  >
                    <Globe size={16} /> Live Demo
                  </a>
                )}
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-white text-black h-12 flex items-center justify-center gap-2 font-bold uppercase hover:bg-gray-50 transition-all border-[3px] border-black hover:-translate-y-1 hover:shadow-[4px_4px_0px_black] text-sm"
                  >
                    <Github size={16} /> Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
