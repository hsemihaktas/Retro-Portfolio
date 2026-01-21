"use client";

import { useState } from "react";
import { Project } from "@/types";
import { PROJECTS } from "@/lib/data/projects";

// Layout Components
import { Sidebar } from "@/components/sidebar/Sidebar";

// Common Components
import { SkillsTicker } from "@/components/common/SkillsTicker";
import { FilterControls } from "@/components/common/FilterControls";

// Home Components
import { HeroBanner } from "@/components/home/HeroBanner";
import { ExperienceLog } from "@/components/home/ExperienceLog";
import { Footer } from "@/components/home/Footer";

// Project Components
import { ProjectCard } from "@/components/project/ProjectCard";
import { ProjectDetailView } from "@/components/project/ProjectDetailView";

type FilterType = "all" | "mobile" | "web";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredProjects = PROJECTS.filter((p) =>
    filter === "all" ? true : p.type === filter,
  );

  return (
    <div className="w-full min-h-screen md:h-screen md:overflow-hidden flex items-center justify-center p-0 md:p-6 lg:p-8 bg-[#d4d4d4] relative">
      {/* MAIN CARD CONTAINER */}
      <div className="w-full max-w-[1600px] bg-white border-y-[4px] md:border-[4px] border-[#1a1a1a] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)] md:h-full md:grid md:grid-cols-12 relative flex flex-col md:overflow-hidden transition-all duration-300">
        {/* === LEFT COLUMN: FIXED DASHBOARD (Sidebar) === */}
        <Sidebar />

        {/* === RIGHT COLUMN: DYNAMIC CONTENT === */}
        <div className="md:col-span-8 lg:col-span-9 bg-[#f8f8f8] flex flex-col relative z-10 md:overflow-hidden h-full">
          {selectedProject ? (
            // VIEW B: PROJECT DETAILS
            <ProjectDetailView
              project={selectedProject}
              onBack={() => setSelectedProject(null)}
            />
          ) : (
            // VIEW A: DASHBOARD HOME
            <div className="flex flex-col h-full overflow-y-auto animate-[fadeIn_0.3s_ease-out]">
              {/* HERO BANNER */}
              <HeroBanner />

              {/* SKILLS TICKER */}
              <SkillsTicker />

              {/* PROJECTS GRID */}
              <div className="p-6 md:p-10 lg:p-12 pb-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#ccff00] border-2 border-black flex items-center justify-center font-black text-lg shadow-[3px_3px_0px_black]">
                      #
                    </div>
                    <h3 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tight">
                      Selected Works
                    </h3>
                  </div>

                  {/* FILTER CONTROLS */}
                  <FilterControls filter={filter} onFilterChange={setFilter} />
                </div>

                <div className="grid grid-cols-1 gap-8 min-h-[300px]">
                  {filteredProjects.length > 0 ? (
                    filteredProjects.map((p) => (
                      <ProjectCard
                        key={p.id}
                        project={p}
                        onClick={(project) => setSelectedProject(project)}
                      />
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-gray-300 text-gray-400 font-mono text-sm">
                      <span className="mb-2">/// NO_DATA_FOUND</span>
                      <span>Try a different filter.</span>
                    </div>
                  )}
                </div>
              </div>

              {/* EXPERIENCE LOG */}
              <ExperienceLog />

              {/* FOOTER */}
              <Footer />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
