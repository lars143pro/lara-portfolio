import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-40 pointer-events-none select-none">
      <Image
        src="/top-left-img.png"
        alt="left cover bg"
        width={400}
        height={400}
        /* - hue-rotate-[190deg]: Flips the red splash to a deep Cyan/Blue
           - brightness-125: Makes the blue "pop" more
           - saturate-150: Makes the color more intense
        */
        className="w-full h-full hue-rotate-[190deg] brightness-125 saturate-150"
      />
    </div>
  );
};

export default TopLeftImg;