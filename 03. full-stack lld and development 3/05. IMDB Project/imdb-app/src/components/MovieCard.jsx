import { useState } from "react";
import Shimmer from "./Shimmer";

export function MoviePlaceholder({ movie }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgUrl = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;

  return (
    <>
      {!isLoaded && <Shimmer />}
      <img
        src={imgUrl}
        alt="Poster"
        className={`h-[30vh] w-[20vw] bg-center bg-cover flex justify-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer items-start ${
          isLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300 `}
        onLoad={() => {
          setIsLoaded(true);
        }}
      />
    </>
  );
}

function MovieCard({ watchlist, movie, addToWatchlist, removeFromWatchlist }) {
  const isMovieAdded = watchlist.filter(
    (watchListMovie) => watchListMovie.id === movie.id
  );
  return (
    <div
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`,
      }}
      className="h-[27vh] w-[20vw] bg-center bg-cover flex rounded-xl hover:scale-110 duration-300 hover:cursor-pointer items-start"
    >
      <div className="w-full h-full flex flex-col justify-between">
        <div className="w-full p-2 text-2xl font-bold text-white bg-gray-900/70 text-center rounded-lg">
          {movie.title}
        </div>
        {isMovieAdded.length === 0 ? (
          <i
            className="fa-solid fa-plus text-3xl p-3 text-white self-end hover:text-red-600"
            onClick={() => addToWatchlist(movie)}
          ></i>
        ) : (
          <i
            className="fa-solid fa-xmark text-3xl p-3 text-white self-end hover:text-red-600"
            onClick={() => removeFromWatchlist(movie)}
          ></i>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
