import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { addOnTheAirTvSeries } from "../utils/tvSeriesSlice";
import { API_OPTIONS, SUPPORTED_LANGUAGES } from "../utils/constants";

const useOnTheAirTvSeries = () => {
  //Fetch Data from TMDB API and update store.
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const regionCode =
    SUPPORTED_LANGUAGES.find((lang) => lang.identifier === langKey)?.region ||
    "US";

  const onTheAirTvSeries = useSelector((store) => store.tvSeries.onTheAirTvSeries);  

  const getOnTheAirTvSeries = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/on_the_air?language=${langKey}&region=${regionCode}&page=1`,
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addOnTheAirTvSeries(json.results));
  };

  useEffect(() => {
    !onTheAirTvSeries && 
    getOnTheAirTvSeries();
  }, [langKey, regionCode]);
};

export default useOnTheAirTvSeries;
