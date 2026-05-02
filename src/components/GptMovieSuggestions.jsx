import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

const GptMovieSuggestions = () => {
  const { movieResults } = useSelector((store) => store.gpt);
  if (!movieResults) return null;

  const successfulResults = movieResults.filter(
    (movieList) => movieList && movieList.length > 0
  );

  return (
    <div className="p-4 sm:p-6 md:m-10 bg-black/85 text-white rounded-2xl">
      <div className="space-y-6">
        {successfulResults.map((movies) => {
          const translatedTitle = movies[0].title;

          return (
            <MovieList
              key={translatedTitle}
              title={translatedTitle}
              movies={movies}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
