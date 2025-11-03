import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Company, Country, Genre, Language } from "../model/type";

interface MovieCardProps {
  title?: string;
  image?: string;
  date?: string;
  vote_average?: number;
  tagline?: string;
  id?: number;
  overview?: string;
  genres?: Genre[];
  status?: string;
  runtime?: number;
  vote_count?: number;
  spoken_languages?: Language[];
  production_companies?: Company[];
  production_countries?: Country[];
}
function PosterCard({
  title,
  image,
  date,
  vote_average,
  id,
  overview,
  genres,
  status,
  tagline,
  vote_count,
  runtime,
  spoken_languages,
  production_companies,
  production_countries,
}: MovieCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const nav = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Format date (optional)
  const formattedDate = date ? new Date(date).toLocaleDateString() : "N/A";

  return (
    <section className="max-w-[1250px] mx-auto mt-[70px] px-4 pt-10 flex items-stretch">
      <div
        className="w-[35%] h-fit rounded-xl bg-transparent overflow-hidden relative group cursor-pointer"
        onClick={() => id && nav(`/movie/${id}`)}
      >
        {!isLoaded && (
          <>
            <div className="w-full h-[600px] mb-2 rounded-xl bg-gray-700 animate-pulse" />
          </>
        )}

        <div className="relative w-full h-[80%] mb-2 overflow-hidden rounded-xl">
          {image && (
            <>
              <img
                onLoad={() => setIsLoaded(true)}
                src={`https://image.tmdb.org/t/p/original${image}`}
                alt={title || "Movie Poster"}
                className={`w-full h-full object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-110 ${
                  isLoaded ? "block" : "hidden"
                }`}
              />
              <div className="absolute top-0 right-0 bg-[#e50914] aspect-[3/4] w-[17%] rounded-[9%_91%_18%_82%_/_75%_13%_87%_25%] text-white text-[30px] font-[700] flex items-center justify-center">
                <span>{vote_average?.toFixed(1)}</span>
              </div>
            </>
          )}
          <div className="absolute bottom-0 h-[35%] left-0 right-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
        </div>
      </div>
      {!isLoaded ? (
        <div className="w-[65%] h-full pl-7 animate-pulse">
          {/* Title */}
          <div className="h-10 bg-gray-700 rounded w-1/2 mb-3"></div>

          {/* Tagline */}
          <div className="h-6 bg-gray-600 rounded w-1/3 mb-5"></div>

          {/* Genres */}
          <div className="flex space-x-2 my-4">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="h-6 w-16 bg-gray-700 rounded-full"
                ></div>
              ))}
          </div>

          {/* Overview */}
          <div className="space-y-2 mb-4">
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            <div className="h-4 bg-gray-700 rounded w-2/3"></div>
          </div>

          {/* Info rows */}
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="w-full h-6 bg-gray-700 rounded my-3"
              ></div>
            ))}

          {/* Companies */}
          <div className="w-full mt-4 flex flex-wrap gap-3">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="w-20 h-10 bg-gray-700 rounded-xl"></div>
              ))}
          </div>
        </div>
      ) : (
        <div className="w-[65%] h-full pl-7">
          <h1 className="text-white text-6xl my-1.5 font-[500]">{title}</h1>
          <h2 className="text-gray-400 text-xl font-light italic">{tagline}</h2>

          {genres && (
            <div className="flex space-x-2 my-4 ">
              {genres.map((genre) => (
                <span
                  key={genre.id}
                  className="text-sm text-white px-2 py-1 bg-[#e50914] rounded-full"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          )}

          <p className="text-white mb-4">{overview}</p>

          <div className="w-full flex gap-5 border-b border-gray-400 py-4">
            <p className="text-gray-400">
              <span className="font-bold text-white">Status:</span> {status}
            </p>
            <p className="text-gray-400">
              <span className="font-bold text-white">Release date:</span>{" "}
              {formattedDate}
            </p>
            <p className="text-gray-400">
              <span className="font-bold text-white">Runtime:</span> {runtime}{" "}
              minutes
            </p>
            <p className="text-gray-400">
              <span className="font-bold text-white">Vote:</span> {vote_count}{" "}
              votes
            </p>
          </div>

          <div className="w-full flex gap-5 border-b border-gray-400 py-4">
            <p className="text-gray-400">
              <span className="font-bold text-white">Languages:</span>{" "}
              {spoken_languages?.map((lang) => lang.english_name).join(", ")}
            </p>
          </div>
          <div className="w-full flex gap-5 border-b border-gray-400 py-4">
            <p className="text-gray-400">
              <span className="font-bold text-white">Countries:</span>{" "}
              {production_countries?.map((country) => country.name).join(", ")}
            </p>
          </div>
          <div className="w-full mt-4 gap-4 justify-start flex flex-wrap">
            {production_companies?.map((company) => (
              <div
                key={company.id}
                className="w-fit flex flex-col items-center rounded-xl my-2 mr-2 bg-white"
              >
                {company.logo_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                    alt={company.name}
                    className="object-contain h-15 p-3"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default PosterCard;
