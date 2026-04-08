import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-[3000ms] z-10 w-[200px] xl:w-[260px] select-none pointer-events-none opacity-80">
      <Image
        src="/bulb.png"
        alt="bulb glow"
        width={260}
        height={200}
        // object-contain prevents the glow from looking squashed
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Bulb;