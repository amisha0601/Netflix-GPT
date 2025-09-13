import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { addTopRatedTvSeries } from "../utils/tvSeriesSlice";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedTvSeries = () => {
  //Fetch Data from TMDB API and update store.
  const dispatch = useDispatch();

  const getTopRatedTvSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?page=1",
      API_OPTIONS
    );

    const json = await data.json();
     console.log("Top Rated TV Series API Response:", json); 
    dispatch(addTopRatedTvSeries(json.results));
  };

  useEffect(() => {
    getTopRatedTvSeries();
  }, []);
};

export default useTopRatedTvSeries;