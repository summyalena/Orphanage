"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";

import Container from "@/ui/Container";
import { hope } from "@/utils/impact";
import arrow from "../../../public/assests/images/arrowright (2).svg";
import arrowleft from "../../../public/assests/images/arrowleftt.svg";
import styles from "./homepage.module.css";

function Hope() {
  return (
    <Container className={styles.hopecontainer}>
      <h2>Bringing hope and love to every child's life</h2>
      <Swiper
        modules={[Navigation, A11y]}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
          hideOnClick: true,
          clickable: true,
        }}
        autoplay={true}
        onMouseMove={styles.activeHover}
        slidesPerView={2}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 1.5,
          },
          800: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={140}
        className="mySwiper"
      >
        <button className={`align-x ${styles.navigations}`}>
          <Image
            className="next"
            width={40}
            height={40}
            src={arrow}
            alt="arrow_right"
          />

          <Image
            className="prev"
            src={arrowleft}
            width={25}
            height={25}
            alt="arrow_left"
          />
        </button>
        {hope.map((el) => (
          <SwiperSlide key={el.id} className={styles.sliders}>
            <div className={styles.hopeslider}>
              <Image src={el.image} alt={el.heading} />
              <h4>{el.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Hope;
