import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

// Icons
import {
  FaVideo,
  FaPalette,
  FaDesktop,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiFigma,
  SiCanva,
} from "react-icons/si";

// Components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// Data containing ALL your services and info
export const aboutData = [
  {
    title: "Video Editing",
    info: [
      {
        title: "Cinematic, Vlogs, YouTube, Music Videos",
        icons: [FaVideo], 
      },
      {
        title: "Reels, Shorts, TikTok, Gaming Montages",
        icons: [FaVideo],
      },
      {
        title: "Podcast, Trailers, Ads, Multi-cam, Green Screen",
        stage: "Expert",
      },
    ],
  },
  {
    title: "Graphic Design",
    info: [
      {
        title: "Logos, Branding Kits, Social Media Content",
        icons: [SiAdobephotoshop, SiCanva, SiFigma],
      },
      {
        title: "Posters, Tarpaulins, Banners, Infographics",
        icons: [FaPalette],
      },
      {
        title: "PowerPoints, Portfolios, Certificates, PubMats",
        stage: "Creative",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "International Online Assistant & Project Lead",
        stage: "2024 - 2025",
      },
      {
        title: "Customer Sales Representative",
        stage: "2024 - 2025",
      },
      {
        title: "Shopee Admin, Page Editor & Online Shop Admin",
        stage: "2022 - 2023",
      },
      {
        title: "Personal Video Editor",
        stage: "2022 - 2023",
      },
    ],
  },
  {
    title: "Why Me?",
    info: [
      {
        title: "Fast Delivery (1–3 Days)",
        stage: "⚡",
      },
      {
        title: "Unlimited Revisions",
        stage: "🔄",
      },
      {
        title: "High-Quality Personalized Outputs",
        stage: "✨",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            I am an <span className="text-accent">artist</span>, but I don&apos;t know how to draw.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-white/80"
          >
            I&apos;m Lara, a passionate video editor and graphic designer from the Philippines. 
            I thrive on turning complex ideas into powerful visuals—from cinematic reels to 
            creative branding. I&apos;m here to make you happy with work that stands out.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects.
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={100} duration={5} />%
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Client Satisfaction.
                </div>
              </div>

              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Days Avg Delivery.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          {/* Tabs Menu */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Tab Content */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-4 xl:gap-y-6 items-center xl:items-start overflow-y-auto">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0 text-white">{item.title}</div>
                <div className="hidden md:flex text-accent">-</div>
                <div className="text-accent/80 font-bold">{item.stage}</div>

                <div className="flex gap-x-4 ml-2">
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-accent hover:scale-110 transition-all">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;