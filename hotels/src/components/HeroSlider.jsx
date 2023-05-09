import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
//Import required modules
import { EffectFade, Autoplay } from "swiper";

//images
import Img1 from "../assets/heroSlider/1.jpg";
import Img2 from "../assets/heroSlider/2.jpg";
import Img3 from "../assets/heroSlider/3.jpg";

const slides = [
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img1,
    btnText: "Click here to Book now",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img2,
    btnText: "Click here to Book now",
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img3,
    btnText: "Click here to Book now",
  },
];

export default function HeroSlider() {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="heroSlider h-[650px] lg:h-[860px]  "
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          className="bg-pink-500 h-[100%] relative flex justify-center items-center"
          key={index}
        >
          <div className="z-20 text-white text-center">
            <div className="uppercase font-tertiary tracking-[6px] mb-5">
              Just enjoy and relax
            </div>
            <h1 className="text-[32px] lg:text-[68px] font-primary uppercase tracking-[2px] max-w-[900px] leading-tight mb-6">
              {slide.title}
            </h1>
            <Link
              to="/room?type=room"
              className="btn btn-lg btn-primary mx-auto w-[200px]"
            >
              {slide.btnText}
            </Link>
          </div>
          <div className="absolute top-0 w-[100%] h-[100%] ">
            <img src={slide.bg} className=" w-[100%] h-[100%] object-cover" />
          </div>
          {/* ----overlay--- */}
          <div className="absolute h-[100%] w-[100%] bg-black/70"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
