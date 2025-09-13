import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { addAiringTodayTvSeries } from "../utils/tvSeriesSlice";
import { API_OPTIONS } from "../utils/constants";

const useAiringTodayTvSeries = () => {
  //Fetch Data from TMDB API and update store.
  const dispatch = useDispatch();

  const getAiringTodayTvSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addAiringTodayTvSeries(json.results));
  };

  useEffect(() => {
    getAiringTodayTvSeries();
  }, []);
};

export default useAiringTodayTvSeries;