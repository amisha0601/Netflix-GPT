import React, { useState } from "react";
import { SORT_BY_OPTIONS, YEARS } from "../utils/constants";
import useDiscover from "../hooks/useDiscover";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const TailorYourBinge = () => {
  const [sortBy, setSortBy] = useState(SORT_BY_OPTIONS[0].value);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");

  const langKey = useSelector((store) => store.config.lang);

  useDiscover(sortBy, selectedGenres);

  const movies = useSelector((store) => store.discover.discoverMovies);
  const genres = useSelector((store) => store.genres.genreList);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleGenreClick = (genreId) => {
    setSelectedGenres((prevGenres) => {
      if (prevGenres.includes(genreId)) {
        return prevGenres.filter((id) => id !== genreId);
      }
      return [...prevGenres, genreId];
    });
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <div className="pt-24 px-8 bg-black bg-opacity-90 text-white">
      <h1 className="text-3xl font-bold mb-4">
        {lang[langKey].TailorYourBinge}
      </h1>

      <div className="mb-4">
        <label htmlFor="sort-by" className="mr-2">
          {lang[langKey].sortBy}:
        </label>
        <select
          id="sort-by"
          className="p-2 rounded bg-gray-800 text-white"
          onChange={handleSortChange}
          value={sortBy}
        >
          {SORT_BY_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {lang[langKey][option.langKey]}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="year" className="mr-2">
          {lang[langKey].year}:
        </label>
        <select
          id="year"
          className="p-2 rounded bg-gray-800 text-white"
          onChange={handleYearChange}
          value={selectedYear}
        >
          <option value="">{lang[langKey].allYears}</option>
          {YEARS.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-8">
        <label className="mr-2">{lang[langKey].genres}:</label>
        <div className="flex flex-wrap gap-2 mt-2">
          {genres?.map((genre) => (
            <button
              key={genre.id}
              onClick={() => handleGenreClick(genre.id)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedGenres.includes(genre.id)
                  ? "bg-red-700 text-white" 
                  : "bg-gray-700 text-gray-300" 
              }`}
            >
              {genre.name}
            </button>
          ))}
        </div>
      </div>

      <MovieList title={lang[langKey].results} movies={movies} />
    </div>
  );
};

export default TailorYourBinge;
