import React from "react";
import foto1 from '../../images/primopobre.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';


const CardSlider = () => {
  return (
    <div className="h-40 md:h-96 md:mb-5 bg-slate-400 rounded-md">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="h-full w-full"
      >
        <SwiperSlide>
          <img src={foto1} alt="slide" className="w-full h-full md:h-96 rounded-md
          object-cover md:object-fill" />
        </SwiperSlide>

        <SwiperSlide className="rounded-md">
          <img src={foto1} alt="slide" className="w-full h-full md:h-96 rounded-md
          object-cover md:object-fill" />
        </SwiperSlide>

    </Swiper>
    </div>
  );
};

export default CardSlider;
