"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button } from "@mui/material";
import { useState } from "react";
import SwiperClass from "swiper";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import styles from "./InlineNavigationSwiper.module.scss";

type TInlineNavigationSwiperProps = SwiperProps;

export interface IInlineNavigationSwiper {
  swiperProps?: TInlineNavigationSwiperProps;
  children: React.ReactNode[];
  navigation?: boolean;
}

const InlineNavigationSwiper = ({
  swiperProps,
  navigation,
  children,
}: IInlineNavigationSwiper) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className={styles.wrapper}>
      {navigation && (
        <div className={styles.wrapper_navigation}>
          <Button onClick={() => swiper?.slidePrev()}>
            <ChevronLeftIcon />
          </Button>
        </div>
      )}

      <Swiper
        spaceBetween={12}
        direction="horizontal"
        {...swiperProps}
        slidesPerView={1}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        className={`${styles.inline_navigation_swiper} ${swiperProps?.className}`}
        modules={[Navigation, Pagination]}
      >
        {children.map((item, index) => (
          <SwiperSlide
            className={`${styles.inline_navigation_swiper_slide}`}
            key={index}
          >
            {item}
          </SwiperSlide>
        ))}
      </Swiper>

      {navigation && (
        <div className={styles.wrapper_navigation}>
          <Button onClick={() => swiper?.slideNext()}>
            <ChevronRightIcon />
          </Button>
        </div>
      )}
    </div>
  );
};

export default InlineNavigationSwiper;
