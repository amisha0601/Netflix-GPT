import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGenres } from "../utils/genresSlice";

const useGenres = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const genreList = useSelector((store) => store.genres.genreList);

  const getGenres = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=${langKey}`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addGenres(json.genres));
  };

  useEffect(() => {
    getGenres();
  }, [langKey]);
};

export default useGenres;