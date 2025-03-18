import { useEffect, useState } from "react";
import template from "../assets/template.webp";
import MoviesTile from "./MoviesTile";
import Pagination from "./Pagination";
import axios from "axios";

function Movies() {
  const [movies, setMovies] = useState(null);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${pageNo}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDIyZWU1NWJkNWEzMWFkZTM1YWNlNzBmZjkyMDIzNSIsIm5iZiI6MTc0MTQ5OTI2Ny4wMTksInN1YiI6IjY3Y2QyYjgzNTlhZTAzZWZlMzJhNjVhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hLBenLrLG4KoZBBdxnjw2itzMUudCJY2jvpHxhRaK54",
      },
    };

    axios.get(url, options).then((response) => {
      setMovies(response.data.results);
    });
  }, [pageNo]);

  const nextPage = () => setPageNo(pageNo + 1);
  const previousPage = () => {
    const previous = pageNo === 1 ? 1 : pageNo - 1;
    setPageNo(previous);
  };

  return (
    <div className="flex flex-col items-center gap-12">
      {movies === null ? <div></div> : <MoviesTile movies={movies} />}

      <Pagination pageNo={pageNo} nextPage={nextPage} previousPage={previousPage} />
    </div>
  );
}

export default Movies;
