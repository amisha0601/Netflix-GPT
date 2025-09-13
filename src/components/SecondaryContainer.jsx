import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  const tvSeries = useSelector((store) => store.tvSeries);

  return (
    <div className=" bg-black">
      <div className="-mt-60 pl-6 relative z-20">
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies || []}
        />
        <MovieList title={"Popular"} movies={movies.popularMovies || []} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies || []} />
        <MovieList
          title={"Upcoming Movies"}
          movies={movies.upcomingMovies || []}
        />
        <MovieList
          title={"Airing Today Tv Series"}
          movies={tvSeries.airingTodayTvSeries || []}
        />
          <MovieList
          title={"On The Air Tv Series"}
          movies={tvSeries.onTheAirTvSeries || []}
        />
        <MovieList
          title={"Popular Tv Series"}
          movies={tvSeries.popularTvSeries || []}
        />
      
        <MovieList
          title={"Top Rated Tv Series"}
          movies={tvSeries.topRatedTvSeries || []}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
