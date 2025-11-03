import type { Movie } from "../model/type";
import Carousel from "./Carousel";
import MovieCard from "./MovieCard";

export const CategoryMovie = ({
  title,
  data,
  overlay = true,
}: {
  title?: string;
  data: Movie[];
  overlay?: boolean;
}) => {
  return (
    <div className="max-w-[1250px] mx-auto px-4 mb-[30px]">
      <h2 className="text-3xl font-[1000] text-white mb-7">{title}</h2>
      <div className="relative">
        <Carousel
          loop={false}
          showPagination={false}
          spaceBetween={15}
          slidesPerView={5}
          slidesPerGroup={3}
          effect="flip"
          speed={1000}
          slides={data.map((movie) => (
            <MovieCard
              id={movie.id}
              key={movie.id}
              vote_average={movie.vote_average}
              title={movie.title}
              img={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              date={movie.release_date}
            />
          ))}
        />
        {overlay && (
          <>
            <div className="absolute pointer-events-none left-0 top-0 h-full w-40 z-9 flex justify-content-center items-center">
              <div className="w-[10%]  h-full bg-[#0f0f0f]"></div>
              <div className=" h-full w-[90%] bg-gradient-to-r from-[#0f0f0f]/100 to-transparent z-9"></div>
            </div>

            <div className="absolute pointer-events-none right-0 top-0 h-full w-40 z-9 flex justify-content-center items-center">
              <div className=" h-full w-[90%] bg-gradient-to-l from-[#0f0f0f]/100 to-transparent z-9"></div>
              <div className="w-[10%]  h-full bg-[#0f0f0f]"></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
