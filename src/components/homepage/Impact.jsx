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
import impact from "@/utils/impact";
import arrow from "../../../public/assests/images/arrowright (2).svg";
import arrowleft from "../../../public/assests/images/arrowleftt.svg";
import styles from "./homepage.module.css";

function Impact() {
  return (
    <Container className={styles.impactcontainer}>
      <h3>OUR IMPACT</h3>
      <h4>Thanks to the generosity of people just like you</h4>
      <Swiper
        modules={[Navigation, A11y]}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
          hideOnClick: true,
          clickable: true,
        }}
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
        spaceBetween={30}
        className="mySwiper"
      >
        <button className={`flex align-x ${styles.navigations}`}>
          <Image
            className="next"
            width={40}
            height={40}
            objectFit="contain"
            src={arrow}
            alt="arrow_right"
          />
          <Image
            className="prev"
            src={arrowleft}
            width={20}
            height={20}
            objectFit="contain"
          />
        </button>
        {impact.map((el) => (
          <SwiperSlide key={el.id} className={styles.sliders}>
            <div className={`flex flex-col gap-sm ${styles.impactslider}`}>
              <Image src={el.image} alt={el.heading} />
              <h2>{el.heading}</h2>
              <p>{el.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Impact;
