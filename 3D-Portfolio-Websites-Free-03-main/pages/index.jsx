import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/50 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Bringing Visions <br /> To{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#00d4ff] drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]">
              Digital Reality
            </span>
          </motion.h1>

          {/* description - FIXED NESTING */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-white/90 leading-relaxed"
          >
            Creative Freelancer dedicated to crafting{" "}
            <span className="text-accent">engaging short-form videos</span> and{" "}
            <span className="text-accent">eye-catching digital designs</span>. I focus on bringing unique 
            visions to life through modern visual storytelling, providing high-quality results for 
            both local and international projects.
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      
      {/* image container */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        {/* BACKGROUND EXPLOSION EFFECT */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 opacity-30 hue-rotate-[190deg] brightness-125"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar - CRISP & FLOATING */}
<motion.div
  variants={fadeIn('up', 0.5)}
  initial='hidden'
  animate='show'
  exit='hidden'
  transition={{ duration: 1, ease: 'easeInOut' }}
  /* - max-w-[480px]: Shrinking this stops the image from stretching/blurring.
     - right-[5%]: Keeps you away from the edge.
     - bottom-[5%]: Sets the floating height.
  */
  className='w-full h-full max-w-[480px] max-h-[580px] absolute bottom-[10%] right-[12%] hidden xl:flex z-50 pointer-events-none'
>
  {/* THE GLOW - Set to -z-20 to ensure it is deep behind your face */}
  <div className='absolute inset-0 bg-accent/30 blur-[100px] rounded-full scale-75 -z-20 translate-y-10' />
  
  {/* SHARPENING WRAPPER */}
  <div className="w-full h-full brightness-105 contrast-110 saturate-105 drop-shadow-[0_10px_20px_rgba(0,242,255,0.1)]">
    <Avatar />
  </div>
</motion.div>
      </div>
    </div>
  );
};

export default Home;