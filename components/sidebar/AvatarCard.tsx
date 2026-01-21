import Image from "next/image";

export function AvatarCard() {
  return (
    <div className="w-24 h-24 md:w-40 md:h-40 lg:w-52 lg:h-52 aspect-square border-[3px] border-[#1a1a1a] bg-white p-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative mb-5 md:mb-8 group">
      <div className="w-full h-full border border-[#1a1a1a] overflow-hidden grayscale contrast-125 relative">
        <Image
          src="https://api.dicebear.com/9.x/notionists/svg?seed=Alex&backgroundColor=e5e5e5&scale=120&flip=true"
          alt="Avatar"
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
          unoptimized
        />
        {/* Overlay Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50" />
      </div>
      {/* Online Badge */}
      <div className="absolute -bottom-3 right-3 bg-[#ccff00] border-[2px] border-black px-2 py-0.5 text-[9px] font-black uppercase shadow-[2px_2px_0px_black] flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 bg-black animate-pulse" />
        ONLINE
      </div>
    </div>
  );
}
