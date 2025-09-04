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
    <div className="w-full px-4">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {data.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            img={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          />
        ))}
      </div>
    </div>
  );
};
