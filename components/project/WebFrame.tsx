import Image from "next/image";

interface WebFrameProps {
  imageSrc: string;
  title: string;
}

export function WebFrame({ imageSrc, title }: WebFrameProps) {
  return (
    <div className="w-full max-w-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)]">
      {/* Browser Chrome */}
      <div className="bg-[#e0e0e0] border-[3px] border-b-0 border-black rounded-t-lg p-2 flex gap-2 items-center">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] border border-black" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] border border-black" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border border-black" />
        </div>
        <div className="flex-1 bg-white border border-black mx-2 h-4 rounded-sm opacity-50 text-[8px] font-mono flex items-center pl-2 text-gray-400">
          localhost:3000
        </div>
      </div>
      {/* Browser Content */}
      <div className="bg-white border-[3px] border-black aspect-video relative overflow-hidden group">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
    </div>
  );
}
