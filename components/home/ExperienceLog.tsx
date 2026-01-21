import { Briefcase, GraduationCap } from "lucide-react";
import { EXPERIENCE } from "@/lib/data/experience";

export function ExperienceLog() {
  return (
    <div className="px-6 md:px-10 lg:px-12 pb-12 mt-8">
      <div className="flex items-center gap-3 mb-8 border-t-[3px] border-black pt-12 border-dashed">
        <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold">
          /
        </div>
        <h3 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tight">
          Experience Log
        </h3>
      </div>

      <div className="flex flex-col gap-6">
        {EXPERIENCE.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white border-l-[4px] border-black pl-6 py-2 hover:bg-gray-50 transition-colors"
          >
            <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-start">
              <div className="w-full md:w-32 shrink-0">
                <div className="font-mono text-[10px] font-bold text-gray-400 mb-1 flex items-center gap-2 uppercase tracking-wider">
                  {item.type === "work" ? (
                    <Briefcase size={10} />
                  ) : (
                    <GraduationCap size={10} />
                  )}
                  {item.type.toUpperCase()}
                </div>
                <div className="font-mono text-xs font-bold text-black bg-[#e0e0e0] inline-block px-2 py-1">
                  {item.date}
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-display font-black text-xl uppercase leading-none mb-1 group-hover:text-[#666] transition-colors">
                  {item.role}
                </h4>
                <div className="font-mono text-xs font-bold text-[#1a1a1a] mb-2 flex items-center gap-2">
                  @ {item.org}
                </div>
                <p className="font-mono text-xs text-gray-500 leading-relaxed max-w-2xl">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
