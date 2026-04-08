import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo replaced with text */}
          <Link href="/">
            <h2 className="text-2xl xl:text-4xl font-sora font-light tracking-widest text-white uppercase select-none">
              lara <span className="font-extrabold text-accent drop-shadow-glow">nerona</span>
              <span className="text-accent">.</span>
            </h2>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;