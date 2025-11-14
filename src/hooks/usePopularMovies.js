import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS, SUPPORTED_LANGUAGES } from "../utils/constants";

const usePopularMovies = () => {
  //Fetch Data from TMDB API and update store.
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const regionCode = SUPPORTED_LANGUAGES.find(lang => lang.identifier === langKey)?.region || "US";

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=${langKey}&region=${regionCode}&page=1`,
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies &&
    getPopularMovies();
  }, [langKey,regionCode]);
};

export default usePopularMovies;