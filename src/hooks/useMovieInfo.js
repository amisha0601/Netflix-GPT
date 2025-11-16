// src/hooks/useMovieInfo.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieDetails, addMovieTrailer } from "../utils/moviesSlice";

const useMovieInfo = (movieId) => {
  const dispatch = useDispatch();

  const getMovieData = async () => {
    const detailsData = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      API_OPTIONS
    );
    const details = await detailsData.json();
    dispatch(addMovieDetails(details));

    const videosData = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const videosJson = await videosData.json();

    const filterData = videosJson.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : videosJson.results[0];
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    if (movieId) {
      getMovieData();
    }
  }, [movieId, dispatch]);
};

export default useMovieInfo;