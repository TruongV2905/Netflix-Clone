import React, { useState } from "react";
import Carousel from "./Carousel";
import type { Movie } from "../model/type";

function Hero({ data }: { data: Movie[] }) {
  const [loadedImages, setLoadedImages] = useState<boolean[]>(
    Array(data.length).fill(false)
  );

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const slides = data.map((item, index) =>
    loadedImages[index] ? (
      <img
        key={index}
        onLoad={() => handleImageLoad(index)}
        src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
        alt=""
        className="w-full h-[80vh] object-cover object-top"
      />
    ) : (
      <div
        key={index}
        className="w-full h-[80vh] mb-2 rounded-xl bg-[#0f0f0f] animate-pulse"
      >
        <img
          onLoad={() => handleImageLoad(index)}
          src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
          alt=""
          className="hidden"
        />
      </div>
    )
  );

  return (
    <div className="relative mb-10">
      <Carousel
        autoplay
        showPagination={false}
        showNavigation={false}
        slidesPerView={1}
        effect="fade"
        slidesPerGroup={1}
        slides={slides}
      />
      <div className="absolute left-0 top-2/4 w-full z-4">
        <div className="max-w-[1250px] mx-auto px-4">
          <h4 className="font-black max-w-[700px] text-left text-4xl text-white px-10 pb-3">
            Phim
          </h4>
          <p className="font-[400] max-w-[800px] text-left text-[18px] text-white px-10">
            Phim ảnh lay động chúng ta theo một cách rất riêng, dù cho đó là
            phim đáng sợ, hài hước, bi ai, lãng mạn hay dung hòa giữa các yếu tố
            đó. Thật nhiều nội dung, thật nhiều cơ hội trải nghiệm.
          </p>
          <div className="flex items-center max-w-[1000px] gap-5 mt-4 px-10">
            <input
              type="text"
              placeholder="Địa chỉ email"
              className="flex-1 h-[45px] bg-transparent border border-[rgba(128, 128, 128, 0.7)] text-xl px-4 text-white rounded-4xl"
            />
            <button className="bg-[#c11119] h-[45px] text-white px-5 rounded-4xl font-semibold cursor-pointer duration-300 hover:bg-red-700">
              Tham gia ngay
            </button>
          </div>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-full h-[40vh] bg-[linear-gradient(180deg,rgba(4,21,45,0)_0%,rgba(15,15,15,1)_79.17%)] z-3"></div>
    </div>
  );
}

export default Hero;
