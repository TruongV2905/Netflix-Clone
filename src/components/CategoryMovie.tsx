import { useCallback, useState } from "react";
import type { Movie } from "../model/type";
import Carousel from "./Carousel";
import MovieCard from "./MovieCard";

export const CategoryMovie = ({
  title,
  data,
}: {
  title?: string;
  data: Movie[];
}) => {
  return (
    <div className="max-w-[70vw] mx-auto px-4 mb-10">
      <h2 className="text-2xl font-bold text-white mb-5">{title}</h2>
      <div className="relative">
        <Carousel
          loop={false}
          showPagination={false}
          spaceBetween={10}
          slidesPerView={5}
          slidesPerGroup={3}
          effect="flip"
          speed={1000}
          slides={data.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              img={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              date={movie.release_date}
            />
          ))}
        />
        {/* Overlay bên trái che một phần ảnh */}
        <div className="absolute pointer-events-none left-0 top-0 h-full w-40 z-9 flex justify-content-center items-center">
          <div className="w-[10%]  h-full bg-[#0f0f0f]"></div>
          <div className=" h-full w-[90%] bg-gradient-to-r from-[#0f0f0f]/100 to-transparent z-9"></div>
        </div>

        {/* Overlay bên phải che một phần ảnh */}
        <div className="absolute pointer-events-none right-0 top-0 h-full w-40 z-9 flex justify-content-center items-center">
          <div className=" h-full w-[90%] bg-gradient-to-l from-[#0f0f0f]/100 to-transparent z-9"></div>
          <div className="w-[10%]  h-full bg-[#0f0f0f]"></div>
        </div>
      </div>
    </div>
  );
};
