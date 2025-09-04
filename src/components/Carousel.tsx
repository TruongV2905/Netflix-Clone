import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperProps } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules";
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
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const remainder = slides.length % slidesPerView;
  const adjustedSlides =
    remainder === 0 ? slides : slides.slice(0, slides.length - remainder);
  return (
    <div className="relative w-full">
      <Swiper
        className={`w-full ${className}`}
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        pagination={showPagination ? { clickable: true } : false}
        scrollbar={showScrollbar ? { draggable: true } : false}
        autoplay={
          autoPlay ? { delay: 2500, disableOnInteraction: false } : false
        }
        loop={loop}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        breakpoints={breakpoints}
        {...swiperProps}
      >
        {adjustedSlides?.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Buttons */}
      {showNavigation && swiperInstance && (
        <>
          <button
            onClick={() => swiperInstance.slidePrev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 px-4 py-2 bg-gray-800 text-white rounded-lg"
          >
            Prev
          </button>
          <button
            onClick={() => swiperInstance.slideNext()}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 px-4 py-2 bg-gray-800 text-white rounded-lg"
          >
            Next
          </button>
        </>
      )}
    </div>
  );
}

export default Carousel;
