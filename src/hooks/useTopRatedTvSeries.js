import { useDispatch, useSelector} from "react-redux";
import React, { useEffect } from "react";
import { addTopRatedTvSeries } from "../utils/tvSeriesSlice";
import { API_OPTIONS,SUPPORTED_LANGUAGES} from "../utils/constants";

const useTopRatedTvSeries = () => {
  //Fetch Data from TMDB API and update store.
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const regionCode = SUPPORTED_LANGUAGES.find(lang => lang.identifier === langKey)?.region || "US";

  const getTopRatedTvSeries = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?language=${langKey}&region=${regionCode}&page=1`,
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addTopRatedTvSeries(json.results));
  };

  useEffect(() => {
    getTopRatedTvSeries();
  }, [langKey,regionCode]);
};

export default useTopRatedTvSeries;
