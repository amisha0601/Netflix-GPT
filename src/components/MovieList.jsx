import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const MovieList = ({ title, movies = [], mediaType }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - 500;
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + 500;
  };

  const filteredMovies = (movies || []).filter((movie) => movie.poster_path);
  if (filteredMovies.length === 0) return null;

  return (
    <div className="px-6 group/list relative text-white">
      <h1 className="text-2xl pt-5 pb-2.5">{title}</h1>

      <div className="relative flex items-center">
        <ChevronLeftIcon
          className="
            hidden md:block
            absolute left-0 z-10 
            w-12 h-full 
            bg-black/30 hover:bg-black/70 
            cursor-pointer 
            opacity-0 group-hover/list:opacity-100 
            transition-all duration-300 rounded-r-md
          "
          onClick={scrollLeft}
        />

        <div
          ref={sliderRef}
          className="flex overflow-x-scroll no-scrollbar scroll-smooth"
        >
          <div className="flex gap-4">
            {filteredMovies?.map((movie) => (
              <div key={movie.id} className="flex-shrink-0">
                <MovieCard movie={movie} mediaType={mediaType} />
              </div>
            ))}
          </div>
        </div>

        <ChevronRightIcon
          className="
            hidden md:block
            absolute right-0 z-10 
            w-12 h-full 
            bg-black/30 hover:bg-black/70 
            cursor-pointer 
            opacity-0 group-hover/list:opacity-100 
            transition-all duration-300 rounded-l-md
          "
          onClick={scrollRight}
        />
      </div>
    </div>
  );
};

export default MovieList;
