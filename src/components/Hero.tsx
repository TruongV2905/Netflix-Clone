import React from "react";
import Carousel from "./Carousel";
import { Button, Input } from "antd";
import type { Movie } from "../model/type";

function Hero({ data }: { data: Movie[] }) {
  const slides = data.map((item) => (
    <img
      src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
      alt=""
      className="w-full h-[80vh] object-cover object-top "
    />
  ));

  return (
    <div className="relative">
      <Carousel
        autoplay
        showPagination={false}
        showNavigation={false}
        slidesPerView={1}
        slidesPerGroup={1}
        slides={slides}
      />
      <div className="absolute left-0 top-2/4 w-fit  z-4">
        <h4 className="font-black max-w-[700px] text-left text-4xl text-white px-10 pb-3">
          Phim
        </h4>
        <p className="font-[400] max-w-[700px] text-left text-[18px] text-white px-10">
          Phim ảnh lay động chúng ta theo một cách rất riêng, dù cho đó là phim
          đáng sợ, hài hước, bi ai, lãng mạn hay dung hòa giữa các yếu tố đó.
          Thật nhiều nội dung, thật nhiều cơ hội trải nghiệm.
        </p>
        <div className="flex items-center gap-5 mt-4 px-10">
          <input
            type="text"
            placeholder="Địa chỉ email"
            className="flex-1 h-[45px] bg-transparent border border-[rgba(128, 128, 128, 0.7)] text-xl px-4 text-white rounded-4xl"
          />
          <button className="bg-red-600 h-[45px] text-white px-5 rounded-4xl font-semibold cursor-pointer duration-300 hover:bg-red-700">
            Tham gia ngay
          </button>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-full h-[40vh] bg-[linear-gradient(180deg,rgba(4,21,45,0)_0%,rgba(15,15,15,1)_79.17%)] z-3"></div>
    </div>
  );
}

export default Hero;
