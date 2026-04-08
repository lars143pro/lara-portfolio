import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none w-full h-full">
      <Image
        src="/avatar.png"
        alt="Lara Nerona"
        width={737}
        height={678}
        /* object-contain: prevents stretching
           unoptimized: set to true if Next.js image optimization is making it blurry
        */
        className="translate-z-0 w-full h-full object-contain"
        priority
        unoptimized={true} 
      />
    </div>
  );
};

export default Avatar;