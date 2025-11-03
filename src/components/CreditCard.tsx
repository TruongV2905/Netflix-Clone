import { useState } from "react";
interface CreditCardProps {
  image?: string;
  name?: string;
  character?: string;
}

function CreditCard({ image, name, character }: CreditCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="mb-4 w-[18%] flex flex-col justify-center items-center gap-2">
      {!isLoaded && (
        <>
          <div className="w-full aspect-[1/1] mb-2 rounded-full bg-gray-700 animate-pulse" />
        </>
      )}
      <img
        onLoad={() => setIsLoaded(true)}
        src={`https://image.tmdb.org/t/p/original${image}`}
        alt={image}
        className={`w-full aspect-[1/1] object-cover object-center rounded-full  ${
          isLoaded ? "block" : "hidden"
        }`}
      />

      {!isLoaded ? (
        <div className="w-full flex flex-col items-center h-full animate-pulse">
          <div className="h-7 bg-gray-700 rounded  w-full  mb-3"></div>
          <div className="h-7 bg-gray-600 rounded w-[80%] mb-3"></div>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-semibold text-white">{name}</h2>
          <p className="text-lg text-gray-500">{character}</p>
        </>
      )}
    </div>
  );
}

export default CreditCard;
