import { MapPin } from "lucide-react";

export function ProfileHeader() {
  return (
    <div className="w-full text-center">
      <h1 className="font-display font-black text-3xl md:text-5xl lg:text-6xl leading-[0.85] tracking-tighter text-[#1a1a1a] mb-3">
        REWOUND
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-2 w-full border-t border-b border-gray-300 py-2">
        <span className="font-mono text-[9px] md:text-[10px] font-bold text-gray-500 px-2 border-r border-gray-300">
          LVL.28
        </span>
        <span className="font-mono text-[9px] md:text-[10px] font-bold text-[#1a1a1a] px-2 border-r border-gray-300">
          ENGINEER
        </span>
        <span className="font-mono text-[9px] md:text-[10px] font-bold text-gray-500 px-2 flex items-center gap-1">
          <MapPin size={10} /> IST
        </span>
      </div>
    </div>
  );
}
