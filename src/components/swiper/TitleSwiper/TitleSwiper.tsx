"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import SwiperClass from "swiper";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import styles from "./TitleSwiper.module.scss";

type TTitleSwiperProps = SwiperProps;

export interface ITitleSwiper {
  swiperProps?: TTitleSwiperProps;
  children: React.ReactNode[];
  navigation?: boolean;
  title?: string;
  moreControl?: React.ReactNode;
}

const TitleSwiper = ({
  swiperProps,
  navigation,
  children,
  title,
  moreControl,
}: ITitleSwiper) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_head}>
        <div className={styles.wrapper_head_title}>
          <h6>{title}</h6>
        </div>
        {navigation && (
          <div className={styles.wrapper_head_navigation}>
            <IconButton onClick={() => swiper?.slidePrev()}>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton onClick={() => swiper?.slideNext()}>
              <ChevronRightIcon />
            </IconButton>
          </div>
        )}
        <div className={styles.wrapper_head_more_control}>{moreControl}</div>
      </div>

      <Swiper
        spaceBetween={12}
        slidesPerView={"auto"}
        direction="horizontal"
        {...swiperProps}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        className={`${styles.title_swiper} ${swiperProps?.className}`}
        modules={[Navigation, Pagination]}
      >
        {children.map((item, index) => (
          <SwiperSlide className={`${styles.title_swiper_slide}`} key={index}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TitleSwiper;
