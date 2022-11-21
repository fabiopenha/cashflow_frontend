import React from "react";
import foto1 from '../../images/primopobre.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';


const CardSlider = () => {
  return (
    <div className="h-40 md:h-96 mb-5">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <img src={foto1} alt="slide" className="w-full h-44 md:h-96 rounded-md 
          object-cover md:object-fill" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={foto1} alt="slide" className="w-full h-44 md:h-96 rounded-md 
          object-cover md:object-fill" />
        </SwiperSlide>

    </Swiper>
    </div>
  );
};

export default CardSlider;
