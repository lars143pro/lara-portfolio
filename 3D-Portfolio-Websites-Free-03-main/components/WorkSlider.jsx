import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      // SLIDE 1: SHORT FORM REELS
      images: [
        { title: "Reel 1", path: "/thumb1.jpg", link: "https://laraneronaa.my.canva.site/" },
        { title: "Reel 2", path: "/thumb1.jpg", link: "https://laraneronaa.my.canva.site/" }, // Add more here!
      ],
    },
    {
      // SLIDE 2: PUBMAT
      images: [
        { title: "PUBMAT", path: "/thumb2.jpg", link: "https://laraneronaa.my.canva.site/" },
        { title: "BRANDING", path: "/thumb2.jpg", link: "https://laraneronaa.my.canva.site/" },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={15}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[320px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          {/* GRID LAYOUT: Shows 2 images per slide on desktop */}
          <div className="grid grid-cols-2 grid-rows-1 gap-4 h-full cursor-none">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-xl overflow-hidden flex items-center justify-center group bg-white/5 border border-white/10 backdrop-blur-sm"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                  {/* Image with subtle zoom on hover */}
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-110 transition-all duration-500"
                  />

                  {/* OVERLAY: Changed to your Neon Blue Theme */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-accent/40 via-[#050816]/80 to-[#050816]/90 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    aria-hidden
                  />

                  {/* CONTENT */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-500 w-full px-5">
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex flex-col items-center gap-y-2"
                    >
                      {/* Project Title */}
                      <div className="text-[10px] tracking-[0.3em] uppercase text-accent font-bold">
                        {image.title}
                      </div>
                      
                      {/* View Link */}
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] font-light">
                        <div className="delay-100">VIEW</div>
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          PROJECT
                        </div>
                        <BsArrowRight className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;