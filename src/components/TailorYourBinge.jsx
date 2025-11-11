import React, { useState } from "react";
import { SORT_BY_OPTIONS, YEARS, BG_URL } from "../utils/constants";
import useDiscover from "../hooks/useDiscover";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const TailorYourBinge = () => {
  const [sortBy, setSortBy] = useState(SORT_BY_OPTIONS[0].value);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const langKey = useSelector((store) => store.config.lang);
  useDiscover(sortBy, selectedGenres, selectedYear);
  const movies = useSelector((store) => store.discover.discoverMovies);
  const genres = useSelector((store) => store.genres.genreList);

  const handleSortChange = (e) => setSortBy(e.target.value);
  const handleGenreClick = (genreId) => {
    setSelectedGenres((prevGenres) =>
      prevGenres.includes(genreId)
        ? prevGenres.filter((id) => id !== genreId)
        : [...prevGenres, genreId]
    );
  };
  const handleYearChange = (e) => setSelectedYear(e.target.value);
  const handleClearFilters = () => {
    setSortBy(SORT_BY_OPTIONS[0].value);
    setSelectedGenres([]);
    setSelectedYear("");
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="fixed top-0 left-0 -z-10 h-screen w-screen">
        <img className="h-full w-full object-cover" src={BG_URL} alt="bg" />
        <div className="absolute top-0 left-0 h-full w-full bg-black/60"></div>
      </div>

      <aside className="w-full md:fixed md:top-0 md:left-0 md:w-1/4 h-auto md:h-screen pt-20 px-6 pb-6 md:overflow-y-auto bg-black/80 md:shadow-2xl no-scrollbar z-10">
        <h1 className="text-2xl font-bold mb-5 text-white">
          {lang[langKey].tailorYourBinge}
        </h1>

        <div className="mb-4">
          <label
            htmlFor="sort-by"
            className="block text-xs font-medium text-gray-300 mb-1"
          >
            {lang[langKey].sortBy}:
          </label>
          <select
            id="sort-by"
            className="w-full p-2 text-sm rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
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

        <div className="mb-4">
          <label
            htmlFor="year"
            className="block text-xs font-medium text-gray-300 mb-1"
          >
            {lang[langKey].year}:
          </label>
          <select
            id="year"
            className="w-full p-2 text-sm rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
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

        <div className="mb-4">
          <label className="block text-xs font-medium text-gray-300 mb-2">
            {lang[langKey].genres}:
          </label>
          <div className="flex flex-wrap gap-1.5">
            {genres?.map((genre) => (
              <button
                key={genre.id}
                onClick={() => handleGenreClick(genre.id)}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                  selectedGenres.includes(genre.id)
                    ? "bg-red-700 text-white shadow-lg"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {genre.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleClearFilters}
            className="w-full p-2 bg-gray-600 hover:bg-gray-500 text-white rounded-md transition-colors font-medium text-sm"
          >
            {lang[langKey].clearFilters}
          </button>
        </div>
      </aside>

      <main className="w-full md:w-3/4 md:ml-auto pt-8 md:pt-20 px-4 md:px-8 pb-12">
        <h2 className="text-2xl font-bold text-white mb-4">
          {lang[langKey].results}
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {movies && movies.length > 0 ? (
            movies.map(
              (movie) =>
                movie.poster_path && (
                  <MovieCard key={movie.id} posterPath={movie.poster_path} />
                )
            )
          ) : (
            <p className="text-gray-400 col-span-full">
              No movies found for the selected filters.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default TailorYourBinge;
