import React from "react";

interface MovieCardProps {
  title?: string;
  img?: string;
  date?: string;
  loading?: boolean;
}

function MovieCard({ title, img, date, loading }: MovieCardProps) {
  if (loading) {
    return (
      <div className="max-w-[240px] aspect-[3/5] bg-transparent overflow-hidden relative">
        <div className="w-full h-[85%] mb-2 rounded-xl bg-gray-700 animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
          <div className="h-3 bg-gray-600 rounded w-1/2 animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[240px] aspect-[3/5] bg-transparent overflow-hidden relative group cursor-pointer">
      {/* Poster */}
      <div className="relative w-full h-[85%] mb-2 overflow-hidden rounded-xl">
        <img
          src={img}
          alt="Movie Poster"
          className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 h-[35%] left-0 right-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
      </div>
      <div>
        <h3 className="text-white text-lg font-bold">{title}</h3>
        <p className="text-gray-300 text-sm">{date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
