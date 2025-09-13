import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { addPopularTvSeries } from "../utils/tvSeriesSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularTvSeries = () => {
  //Fetch Data from TMDB API and update store.
  const dispatch = useDispatch();

  const getPopularTvSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addPopularTvSeries(json.results));
  };

  useEffect(() => {
    getPopularTvSeries();
  }, []);
};

export default usePopularTvSeries;