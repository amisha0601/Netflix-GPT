import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import usePopularTvSeries from "../hooks/usePopularTvSeries";
import useAiringTodayTvSeries from "../hooks/useAiringTodayTvSeries";
import useOnTheAirTvSeries from "../hooks/useOnTheAirTvSeries";
import useTopRatedTvSeries from "../hooks/useTopRatedTvSeries";
import TailorYourBinge from "./TailorYourBinge";
import useGenres from "../hooks/useGenres";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const isDiscoverMode = useSelector((store) => store.discover.isDiscoverMode);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularTvSeries();
  useAiringTodayTvSeries();
  useOnTheAirTvSeries();
  useTopRatedTvSeries();
  useGenres();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : isDiscoverMode ? (
        <TailorYourBinge />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
