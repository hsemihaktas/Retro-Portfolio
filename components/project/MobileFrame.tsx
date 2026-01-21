import Image from "next/image";

interface MobileFrameProps {
  imageSrc: string;
  title: string;
}

export function MobileFrame({ imageSrc, title }: MobileFrameProps) {
  return (
    <div className="relative border-gray-800 bg-gray-800 border-[8px] rounded-[2.5rem] h-[500px] w-[280px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] flex flex-col justify-center">
      {/* Notch */}
      <div className="w-[80px] h-[18px] bg-gray-800 absolute -top-[8px] left-1/2 -translate-x-1/2 rounded-b-[1rem] z-10" />
      {/* Screen */}
      <div className="h-full w-full bg-white rounded-[2rem] overflow-hidden border-[2px] border-black relative">
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
