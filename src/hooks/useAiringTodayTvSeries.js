import { useDispatch,useSelector } from "react-redux";
import React, { useEffect } from "react";
import { addAiringTodayTvSeries } from "../utils/tvSeriesSlice";
import { API_OPTIONS,SUPPORTED_LANGUAGES } from "../utils/constants";

const useAiringTodayTvSeries = () => {
  //Fetch Data from TMDB API and update store.
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const regionCode = SUPPORTED_LANGUAGES.find(lang => lang.identifier === langKey)?.region || "US";

  const airingTodayTvSeries = useSelector((store) => store.tvSeries.airingTodayTvSeries);

  const getAiringTodayTvSeries = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/airing_today?language=${langKey}&region=${regionCode}&page=1`,
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addAiringTodayTvSeries(json.results));
  };

  useEffect(() => {
    !airingTodayTvSeries &&
    getAiringTodayTvSeries();
  }, [langKey,regionCode]);
};

export default useAiringTodayTvSeries;