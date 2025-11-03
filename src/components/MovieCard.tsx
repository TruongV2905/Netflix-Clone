import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface MovieCardProps {
  title?: string;
  img?: string;
  date?: string | number | Date;
  vote_average?: number;
  id?: number;
}

function MovieCard({ title, img, date, vote_average, id }: MovieCardProps) {
  const [loaded, setLoaded] = useState(false);
  const nav = useNavigate();
  const reDate = date ? new Date(date) : null;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formatted = reDate
    ? `${months[reDate.getMonth()]} ${String(reDate.getDate()).padStart(
        2,
        "0"
      )}, ${reDate.getFullYear()}`
    : "Unknown date";

  return (
    <div
      className="max-w-[300px] rounded-xl mx-auto aspect-[3/5] bg-transparent overflow-hidden relative group cursor-pointer"
      onClick={() => nav(`/movie/${id}`)}
    >
      {!loaded && (
        <>
          <div className="w-full h-[85%] mb-2 rounded-xl bg-gray-700 animate-pulse" />
          <div className="space-y-2">
            <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
            <div className="h-3 bg-gray-600 rounded w-1/2 animate-pulse"></div>
          </div>
        </>
      )}
      <div className="relative w-full h-[80%] mb-2 overflow-hidden rounded-xl">
        <img
          onLoad={() => {
            setLoaded(true);
          }}
          src={img}
          alt="Movie Poster"
          className={`w-full h-full object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-110 ${
            loaded ? "block" : "hidden"
          }`}
        />
        <div className="absolute bottom-0 h-[35%] left-0 right-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
      </div>
      {loaded && (
        <>
          <div className="absolute top-0 right-0 bg-[#e50914] aspect-[3/4] w-[17%] rounded-[9%_91%_18%_82%_/_75%_13%_87%_25%] text-white text-[20px] font-[700] flex items-center justify-center">
            <span>{vote_average?.toFixed(1)}</span>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold truncate">{title}</h3>
            <p className="text-gray-300 text-sm">{formatted}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieCard;
