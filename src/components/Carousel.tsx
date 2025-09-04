import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperProps } from "swiper/react";

// Swiper modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type CarouselProps = SwiperProps & {
  slides: React.ReactNode[];
  className?: string;
  showNavigation?: boolean;
  showPagination?: boolean;
  showScrollbar?: boolean;
  autoPlay?: boolean;
};

function Carousel({
  slides,
  className = "",
  showNavigation = true,
  showPagination = true,
  showScrollbar = false,
  autoPlay = false,
  loop = true,
  spaceBetween = 20,
  slidesPerView = 1,
  breakpoints,
  ...swiperProps
}: CarouselProps) {
  return (
    <Swiper
      className={` w-full ${className}`}
      modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
      navigation={showNavigation}
      pagination={showPagination ? { clickable: true } : false}
      scrollbar={showScrollbar ? { draggable: true } : false}
      autoplay={autoPlay ? { delay: 2500, disableOnInteraction: false } : false}
      loop={loop}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      breakpoints={breakpoints}
      {...swiperProps}
    >
      {slides?.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
