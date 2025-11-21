import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  const tvSeries = useSelector((store) => store.tvSeries);

  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className=" bg-black">
      <div className="-mt-60 pl-6 relative z-20 pb-11">
        <MovieList
          title={lang[langKey].nowPlayingMovies}
          movies={movies.nowPlayingMovies || []}
        />
        <MovieList
          title={lang[langKey].popularMovies}
          movies={movies.popularMovies || []}
        />
        <MovieList
          title={lang[langKey].topRatedMovies}
          movies={movies.topRatedMovies || []}
        />
        <MovieList
          title={lang[langKey].upcomingMovies}
          movies={movies.upcomingMovies || []}
        />
        <MovieList
          title={lang[langKey].airingTodayTvSeries}
          movies={tvSeries.airingTodayTvSeries || []}
           mediaType="tv"
        />
        <MovieList
          title={lang[langKey].onTheAirTvSeries}
          movies={tvSeries.onTheAirTvSeries || []}
           mediaType="tv"
        />
        <MovieList
          title={lang[langKey].popularTvSeries}
          movies={tvSeries.popularTvSeries || []}
           mediaType="tv"
        />

        <MovieList
          title={lang[langKey].topRatedTvSeries}
          movies={tvSeries.topRatedTvSeries || []}
          mediaType="tv"
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
