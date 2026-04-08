import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxVideo,
  RxCamera,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// THIS IS THE DATA THAT ACTUALLY SHOWS UP ON SCREEN
const serviceData = [
  {
    Icon: RxVideo,
    title: "Video Editing",
    description: "Cinematic Vlogs, YouTube content, Music Videos, and high-energy Gaming Montages.",
  },
  {
    Icon: RxRocket,
    title: "Short-Form",
    description: "Viral-ready Reels, TikToks, and YT Shorts with captions and sound design.",
  },
  {
    Icon: RxPencil2,
    title: "Branding",
    description: "Full Branding Kits, minimalist logos, and professional Social Media identity.",
  },
  {
    Icon: RxCrop,
    title: "Graphic Design",
    description: "High-quality Tarpaulins, Posters, Banners, and Infographics for business.",
  },
  {
    Icon: RxReader,
    title: "Publications",
    description: "Creative PubMats, Certificates, Portfolios, and sleek PowerPoint decks.",
  },
  {
    Icon: RxDesktop,
    title: "Admin & Shop",
    description: "Expert Shopee/Lazada administration, Order Management, and Client Support.",
  },
  {
    Icon: RxCamera,
    title: "Post-Prod",
    description: "Color Grading, Green Screen removal, and Podcast audio/video enhancement.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">
                <item.Icon />
              </div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg font-bold">{item.title}</div>
                <p className="max-w-[350px] leading-normal text-sm">{item.description}</p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;