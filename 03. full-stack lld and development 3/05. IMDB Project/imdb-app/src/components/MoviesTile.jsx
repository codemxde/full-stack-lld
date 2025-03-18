import { useEffect, useState } from "react";
import MovieCard, { MoviePlaceholder } from "./MovieCard";

const getWatchlist = () => JSON.parse(localStorage.getItem("watchlist"));

export default function MoviesTile({ movies }) {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("watchlist")) {
      localStorage.setItem("watchlist", "[]");
    }
    const localWatchlist = localStorage.getItem("watchlist");
    setWatchlist(JSON.parse(localWatchlist));
  }, []);

  const addToWatchlist = (movie) => {
    const updatedWatchlist = [...watchlist, movie];
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    setWatchlist(updatedWatchlist);
  };

  const removeFromWatchlist = (thisMovie) => {
    const updatedWatchlist = watchlist.filter((movie) => movie.id !== thisMovie.id);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    setWatchlist(updatedWatchlist);
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-8">
      <h2 className="text-3xl font-extrabold ">Trending Movies</h2>
      <div className="flex flex-wrap justify-evenly gap-8 ">
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              watchlist={watchlist}
              movie={movie}
              addToWatchlist={addToWatchlist}
              removeFromWatchlist={removeFromWatchlist}
            />
          );
        })}
      </div>
    </div>
  );
}
