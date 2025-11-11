import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies = [] }) => {

  const filteredMovies = (movies || []).filter((movie) => movie.poster_path);
  if (filteredMovies.length === 0) return null;

  return (
    <div className="pl-6 ">
      <h1 className="text-2xl pt-5 pb-2.5 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {filteredMovies?.map((movie) => (

           <div key={movie.id} className="w-36 pr-4">
              <MovieCard posterPath={movie.poster_path} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
