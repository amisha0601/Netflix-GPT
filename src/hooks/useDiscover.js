import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addDiscoverMovies } from "../utils/discoverSlice";

const useDiscover = (sortBy, selectedGenres, selectedYear) => {
  const dispatch = useDispatch();

  const getDiscoverResults = async () => {
    let apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=${sortBy}&page=1`;

    if (selectedGenres.length > 0) {
      const genreQueryParam = selectedGenres.join(",");
      apiUrl += `&with_genres=${genreQueryParam}`;
    }

    if (selectedYear) {
      apiUrl += `&primary_release_year=${selectedYear}`;
    }

    const data = await fetch(apiUrl, API_OPTIONS);
    const json = await data.json();
    dispatch(addDiscoverMovies(json.results));
  };

  useEffect(() => {
    getDiscoverResults();
  }, [sortBy, selectedGenres, selectedYear]);
};

export default useDiscover;
