import { Zap } from "lucide-react";
import { SKILLS } from "@/lib/data/skills";

export function SkillsTicker() {
  const duplicatedSkills = [...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <div className="border-b-[4px] border-[#1a1a1a] bg-[#1a1a1a] text-[#ccff00] py-4 overflow-hidden select-none sticky top-0 z-30 shrink-0">
      <div className="flex w-max animate-marquee">
        {duplicatedSkills.map((skill, i) => (
          <span
            key={i}
            className="mx-8 font-display font-black text-xl uppercase tracking-wider flex items-center gap-3"
          >
            <Zap size={18} fill="#ccff00" className="text-[#ccff00]" /> {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
