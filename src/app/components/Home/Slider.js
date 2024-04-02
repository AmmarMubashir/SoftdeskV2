"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Keyboard, Mousewheel } from "swiper/modules";
import CourseCard from "./CourseCard";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 3000 }}
        mousewheel={true} // Enable mousewheel control
        keyboard={true} // Enable keyboard control
        breakpoints={{
          740: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination, Keyboard, Mousewheel]}
        className=" p-5"
      >
        <SwiperSlide>
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard />
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
