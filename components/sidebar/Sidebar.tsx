import { AvatarCard } from "./AvatarCard";
import { ProfileHeader } from "./ProfileHeader";
import { BioSection } from "./BioSection";
import { ContactButtons } from "./ContactButtons";

export function Sidebar() {
  return (
    <div className="md:col-span-4 lg:col-span-3 bg-[#f0f0f0] border-b-[4px] md:border-b-0 md:border-r-[4px] border-[#1a1a1a] flex flex-col relative z-20 shrink-0 h-auto md:h-full">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, black 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* Top Section: Photo & ID */}
      <div className="p-5 md:p-8 md:pb-4 flex flex-col items-center shrink-0">
        <AvatarCard />
        <ProfileHeader />
      </div>

      {/* Bio Section */}
      <BioSection />

      {/* Contact Buttons */}
      <ContactButtons />
    </div>
  );
}
