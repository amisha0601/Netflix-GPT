import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS, SUPPORTED_LANGUAGES } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const regionCode =
    SUPPORTED_LANGUAGES.find((lang) => lang.identifier === langKey)?.region ||
    "US";

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=${langKey}&region=${regionCode}&page=1`,
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, [langKey, regionCode]);
};

export default useNowPlayingMovies;
