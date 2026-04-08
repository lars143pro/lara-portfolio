import { motion } from "framer-motion";
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxVideo,
  RxCamera,
} from "react-icons/rx";

// Components
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// Framer motion variants
import { fadeIn } from "../../variants";

// 1. YOUR ORIGINAL DATA
export const serviceData = [
  {
    icon: <RxVideo />,
    title: "Video Editing",
    description: "Cinematic Vlogs, YouTube content, Music Videos, and high-energy Gaming Montages tailored to your style.",
  },
  {
    icon: <RxRocket />,
    title: "Short-Form Content",
    description: "Viral-ready Reels, TikToks, and YT Shorts with captions, sound design, and fast-paced pacing.",
  },
  {
    icon: <RxPencil2 />,
    title: "Branding & Logos",
    description: "Full Branding Kits, minimalist or vibrant logos, and professional Social Media identity sets.",
  },
  {
    icon: <RxCrop />,
    title: "Graphic Design",
    description: "High-quality Tarpaulins, Posters, Banners, and Infographics for events or business promotions.",
  },
  {
    icon: <RxReader />,
    title: "Digital Publications",
    description: "Creative PubMats, Certificates, Portfolios, and sleek PowerPoint presentations for any purpose.",
  },
  {
    icon: <RxDesktop />,
    title: "Admin & Management",
    description: "Expert Page/Shop administration (Shopee/Lazada), Order Management, and International Client Support.",
  },
  {
    icon: <RxCamera />,
    title: "Post-Production",
    description: "Color Grading, Green Screen removal, Multi-cam syncing, and Podcast audio/video enhancement.",
  },
];

// 2. THE PAGE COMPONENT (Required to fix the ReferenceError)
const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-white/70"
            >
              I provide high-quality visual solutions and professional 
              administrative support for local and international clients. 
              My goal is to make you happy with every output.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

// 3. THE EXPORT
export default Services;