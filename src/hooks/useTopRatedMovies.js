import { useDispatch,useSelector } from "react-redux";
import React, { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS,SUPPORTED_LANGUAGES } from "../utils/constants";

const useTopRatedMovies = () => {
  //Fetch Data from TMDB API and update store.
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const regionCode = SUPPORTED_LANGUAGES.find(lang => lang.identifier === langKey)?.region || "US";

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies)

  const getTopRatedMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=${langKey}&region=${regionCode}&page=1`,
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovies && 
    getTopRatedMovies();
  }, [langKey, regionCode]);
};

export default useTopRatedMovies;