import { LayoutGrid, Smartphone, Monitor } from "lucide-react";

type FilterType = "all" | "mobile" | "web";

interface FilterControlsProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export function FilterControls({
  filter,
  onFilterChange,
}: FilterControlsProps) {
  return (
    <div className="flex bg-white border-[2px] border-black p-1 gap-1 shadow-[4px_4px_0px_rgba(0,0,0,0.1)]">
      <button
        onClick={() => onFilterChange("all")}
        className={`px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase font-mono transition-all flex items-center gap-2 ${
          filter === "all"
            ? "bg-black text-white"
            : "bg-transparent text-gray-500 hover:bg-gray-100 hover:text-black"
        }`}
      >
        <LayoutGrid size={12} /> All Systems
      </button>
      <button
        onClick={() => onFilterChange("mobile")}
        className={`px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase font-mono transition-all flex items-center gap-2 ${
          filter === "mobile"
            ? "bg-black text-white"
            : "bg-transparent text-gray-500 hover:bg-gray-100 hover:text-black"
        }`}
      >
        <Smartphone size={12} /> Mobile
      </button>
      <button
        onClick={() => onFilterChange("web")}
        className={`px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase font-mono transition-all flex items-center gap-2 ${
          filter === "web"
            ? "bg-black text-white"
            : "bg-transparent text-gray-500 hover:bg-gray-100 hover:text-black"
        }`}
      >
        <Monitor size={12} /> Web
      </button>
    </div>
  );
}
