import { useState } from "react";

type BackGroundProps = {
  image?: string;
};

function BackGround({ image }: BackGroundProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="fixed inset-0 w-full h-[80vh] -z-1">
      {/* skeleton / loading */}
      {!isLoaded && (
        <div className="w-full h-[80vh] mb-2 rounded-xl bg-[#0f0f0f] animate-pulse"></div>
      )}
      <img
        src={`https://image.tmdb.org/t/p/original${image}`}
        alt="background"
        className={`w-full h-full object-cover object-top transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
      />

      {/* overlay */}
      {isLoaded && (
        <>
          <div className="absolute inset-0 bg-[rgba(15,15,15,0.7)] z-1"></div>
          <div className="absolute left-0 bottom-0 w-full h-[40vh] bg-[linear-gradient(180deg,rgba(4,21,45,0)_0%,rgba(15,15,15,1)_79.17%)] z-1"></div>
        </>
      )}
    </div>
  );
}

export default BackGround;
