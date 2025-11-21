import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieDetails, addMovieTrailer } from "../utils/moviesSlice";

const useMovieInfo = (movieId, mediaType = "movie") => {
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);

  const getLanguageCode = (key) => {
    switch (key) {
      case "hindi":
        return "hi-IN";
      case "spanish":
        return "es-ES";
      case "french":
        return "fr-FR";
      case "german":
        return "de-DE";
      case "italian":
        return "it-IT";
      default:
        return "en-US";
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  const getMovieData = async () => {
    if (!movieId) return;
    dispatch(addMovieTrailer(null));
    setIsLoading(true);

    const langCode = getLanguageCode(langKey);

    const type = mediaType === "tv" ? "tv" : "movie";

    try {
      const detailsData = await fetch(
        `https://api.themoviedb.org/3/${type}/${movieId}?language=${langCode}`,
        API_OPTIONS
      );
      const details = await detailsData.json();

      if (type === "tv") {
        details.title = details.name;
        details.original_title = details.original_name;
        details.release_date = details.first_air_date;
        details.runtime = details.episode_run_time?.[0] || 0;
      }

      dispatch(addMovieDetails(details));

      const videosData = await fetch(
        `https://api.themoviedb.org/3/${type}/${movieId}/videos?language=${langCode}`,
        API_OPTIONS
      );
      const videosJson = await videosData.json();
      const results = videosJson.results;

      if (!results || results.length === 0) {
        dispatch(addMovieTrailer(null));
        return;
      }

      const enTrailer = results.find(
        (video) =>
          video.site === "YouTube" &&
          video.type === "Trailer" &&
          video.iso_639_1 === "en"
      );
      const anyTrailer = results.find(
        (video) =>
          video.site === "YouTube" &&
          (video.type === "Trailer" || video.type === "Teaser")
      );
      const anyYoutubeVideo = results.find((video) => video.site === "YouTube");

      const trailer = enTrailer || anyTrailer || anyYoutubeVideo;

      if (trailer?.key) {
        dispatch(addMovieTrailer(trailer));
      } else {
        dispatch(addMovieTrailer(null));
      }
    } catch (error) {
      console.error("Failed to fetch movie info:", error);
      dispatch(addMovieTrailer(null));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovieData();
  }, [movieId, mediaType, dispatch, langKey]);

  return { isLoading };
};

export default useMovieInfo;
