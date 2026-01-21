import { Github, Linkedin, Mail } from "lucide-react";

export function ContactButtons() {
  return (
    <div className="p-5 md:p-8 mt-auto shrink-0 bg-[#f0f0f0] relative">
      <div className="flex flex-row items-center justify-between gap-3">
        <div className="flex gap-2 shrink-0">
          {/* GitHub - Black */}
          <a
            href="#"
            className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center border-[2px] border-[#1a1a1a] bg-white hover:bg-[#1a1a1a] hover:text-white transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_black] group shadow-[2px_2px_0px_black]"
            title="GitHub"
          >
            <Github
              size={16}
              className="group-hover:scale-110 transition-transform md:w-[18px] md:h-[18px]"
            />
          </a>
          {/* LinkedIn - Blue */}
          <a
            href="#"
            className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center border-[2px] border-[#1a1a1a] bg-white hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_#005885] group shadow-[2px_2px_0px_black]"
            title="LinkedIn"
          >
            <Linkedin
              size={16}
              className="group-hover:scale-110 transition-transform md:w-[18px] md:h-[18px]"
            />
          </a>
          {/* X/Twitter - Black */}
          <a
            href="#"
            className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center border-[2px] border-[#1a1a1a] bg-white hover:bg-black hover:text-white transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_black] group shadow-[2px_2px_0px_black]"
            title="X (Twitter)"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current group-hover:scale-110 transition-transform"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
        {/* Contact - Neon Yellow */}
        <a
          href="mailto:me@rewound.dev"
          className="flex-1 h-9 md:h-10 flex items-center justify-center gap-2 border-[2px] border-[#1a1a1a] bg-[#ccff00] hover:brightness-110 transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_black] shadow-[2px_2px_0px_black]"
        >
          <Mail size={14} />
          <span className="font-black text-[10px] tracking-widest uppercase">
            Contact
          </span>
        </a>
      </div>
    </div>
  );
}
