import React, { useState } from "react";
import type { Video } from "../model/type";

function VideoCard({ video }: { video: Video }) {
  const [showPlayer, setShowPlayer] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* Khung chứa thumbnail */}
      <div
        className="relative cursor-pointer w-[300px] rounded-lg overflow-hidden group"
        onClick={() => setShowPlayer(true)}
      >
        {/* Skeleton hiển thị trước khi thumbnail load */}
        {!isLoaded && (
          <div className="w-full aspect-video bg-gray-700 animate-pulse rounded-lg" />
        )}

        <img
          src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
          alt="Video thumbnail"
          onLoad={() => setIsLoaded(true)}
          className={`w-full aspect-video object-cover opacity-80 group-hover:opacity-100 transition ${
            isLoaded ? "block" : "hidden"
          }`}
        />

        {/* Icon play overlay */}
        {isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-white opacity-80 group-hover:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}

        {/* Tên video */}
        <div className="text-white mt-1 font-light">
          {!isLoaded ? (
            <div className="h-5 bg-gray-700 rounded w-3/4 mt-2 animate-pulse" />
          ) : (
            <p>
              {video.name.length > 30
                ? video.name.slice(0, 30) + "..."
                : video.name}
            </p>
          )}
        </div>
      </div>

      {/* Overlay player */}
      {showPlayer && (
        <div
          onClick={() => setShowPlayer(false)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <div className="w-[80%] max-w-4xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${video.key}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default VideoCard;
