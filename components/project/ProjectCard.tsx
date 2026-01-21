import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onClick: (p: Project) => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={() => onClick(project)}
      className="bg-white border-[3px] border-black p-6 cursor-pointer group hover:bg-[#fcfcfc] transition-all relative"
    >
      {/* Heavy Shadow Simulation via absolute div */}
      <div className="absolute top-0 left-0 w-full h-full bg-black translate-x-2 translate-y-2 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />

      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        {/* Number/Icon */}
        <div className="w-16 h-16 bg-black text-white flex items-center justify-center shrink-0 font-display font-bold text-2xl group-hover:bg-[#ccff00] group-hover:text-black transition-colors">
          {project.id.padStart(2, "0")}
        </div>

        <div className="flex-1 w-full">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-display font-black text-2xl uppercase tracking-tighter">
              {project.title}
            </h3>
            <ArrowUpRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </div>

          <p className="text-sm text-gray-600 mb-4 font-medium leading-relaxed max-w-xl border-l-2 border-gray-200 pl-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] font-bold uppercase border border-black px-2 py-1 bg-gray-100"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
