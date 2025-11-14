import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { addPopularTvSeries } from "../utils/tvSeriesSlice";
import { API_OPTIONS, SUPPORTED_LANGUAGES } from "../utils/constants";

const usePopularTvSeries = () => {
  //Fetch Data from TMDB API and update store.
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const regionCode = SUPPORTED_LANGUAGES.find(lang => lang.identifier === langKey)?.region || "US";

  const popularTvSeries = useSelector((store) => store.tvSeries.popularTvSeries);

  const getPopularTvSeries = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/popular?language=${langKey}&region=${regionCode}&page=1`,
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addPopularTvSeries(json.results));
  };

  useEffect(() => {
    !popularTvSeries &&
    getPopularTvSeries();
  }, [langKey,regionCode]);
};

export default usePopularTvSeries;