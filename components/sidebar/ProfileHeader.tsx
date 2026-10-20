import { MapPin } from "lucide-react";

export function ProfileHeader() {
  return (
    <div className="w-full text-center px-1">
      <h1 className="font-display font-black text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-[0.9] tracking-tighter text-[#1a1a1a] mb-3 break-words max-w-full">
        Rewound
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2 w-full border-t border-b border-gray-300 py-2">
        <span className="font-mono text-[9px] md:text-[10px] font-bold text-gray-500 px-1.5 md:px-2 border-r border-gray-300 whitespace-nowrap">
          LVL.24
        </span>
        <span className="font-mono text-[9px] md:text-[10px] font-bold text-[#1a1a1a] px-1.5 md:px-2 border-r border-gray-300 whitespace-nowrap">
          DEVELOPER
        </span>
        <span className="font-mono text-[9px] md:text-[10px] font-bold text-gray-500 px-1.5 md:px-2 flex items-center gap-1 whitespace-nowrap">
          <MapPin size={10} /> IST
        </span>
      </div>
    </div>
  );
}
