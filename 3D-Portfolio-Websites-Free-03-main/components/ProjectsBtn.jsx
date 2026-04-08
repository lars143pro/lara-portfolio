import Image from "next/image";
import Link from "next/link";

import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 z-10">
      <Link
        href="/work"
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src="/rounded-text.png"
          alt="rounded text"
          width={141}
          height={148}
          /* - invert: This flips the black text to pure white.
             - drop-shadow: Adds a crisp white glow to make the text pop.
          */
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] pointer-events-none select-none invert drop-shadow-[0_0_2px_rgba(255,255,255,1)]"
        />
        <HiArrowRight
          /* - text-accent: Keeps the arrow in your glowy blue theme color.
             - group-hover: Adds that interactive blue neon glow when you hover.
          */
          className="absolute text-4xl text-accent group-hover:translate-x-2 group-hover:drop-shadow-[0_0_15px_rgba(0,242,255,1)] transition-all duration-300"
          aria-hidden
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;