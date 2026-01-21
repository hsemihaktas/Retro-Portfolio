import { Cpu, Code, Terminal, Globe } from "lucide-react";

export function HeroBanner() {
  return (
    <header className="p-5 md:p-10 lg:p-14 border-b-[4px] border-[#1a1a1a] bg-white relative overflow-hidden flex flex-col justify-center min-h-[200px] md:min-h-[250px] shrink-0">
      <Cpu
        className="absolute -right-12 -bottom-12 text-gray-100 w-48 h-48 md:w-64 md:h-64 rotate-12"
        strokeWidth={0.5}
      />

      <div className="relative z-10 w-full max-w-[550px]">
        <svg
          viewBox="0 0 420 130"
          className="w-full h-auto block fill-[#1a1a1a] overflow-visible"
          aria-label="SOFTWARE ENGINEER"
        >
          <text
            x="0"
            y="55"
            fontSize="70"
            fontWeight="900"
            fontFamily="'Work Sans', sans-serif"
            letterSpacing="-0.07em"
          >
            SOFTWARE
          </text>
          <text
            x="0"
            y="118"
            fontSize="70"
            fontWeight="900"
            fontFamily="'Work Sans', sans-serif"
            letterSpacing="-0.02em"
          >
            ENGINEER
          </text>
        </svg>

        <div className="inline-flex flex-wrap gap-3 font-mono text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider mt-6">
          <span className="flex items-center gap-2 px-3 py-1.5 border border-[#1a1a1a] bg-[#ccff00] text-black shadow-[2px_2px_0px_black]">
            <Code size={12} /> Clean Code
          </span>
          <span className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 bg-white">
            <Terminal size={12} /> Architecture
          </span>
          <span className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 bg-white">
            <Globe size={12} /> Creative Dev
          </span>
        </div>
      </div>
    </header>
  );
}
