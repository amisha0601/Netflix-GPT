import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { addOnTheAirTvSeries } from "../utils/tvSeriesSlice";
import { API_OPTIONS } from "../utils/constants";

const useOnTheAirTvSeries = () => {
  //Fetch Data from TMDB API and update store.
  const dispatch = useDispatch();

  const getOnTheAirTvSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addOnTheAirTvSeries(json.results));
  };

  useEffect(() => {
    getOnTheAirTvSeries();
  }, []);
};

export default useOnTheAirTvSeries;