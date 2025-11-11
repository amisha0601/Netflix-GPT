import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const searchMovieTMDB = async (movie, lang) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=${lang}&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    setErrorMessage(null);
    console.log(searchText.current.value);

    const gptQuery =
      lang[langKey].gptQuery +
      searchText.current.value +
      ". only give me names of 6 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Teri Meri Kahaani, Oye Lucky Lucky Oye, Golmaal";

    try {
      const gptResults = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: gptQuery }],
      });

      if (!gptResults.choices || gptResults.choices.length === 0) {
        setErrorMessage("Sorry, no results found. Try a different search.");
        return;
      }

      console.log(gptResults.choices?.[0]?.message?.content);
      const gptMovies = gptResults.choices?.[0]?.message?.content
        .split(",")
        .map((movie) => movie.trim());
      const promiseArray = gptMovies.map((movie) =>
        searchMovieTMDB(movie, langKey)
      );
      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);

      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    } catch (error) {
      console.error("OpenAI API Error:", error);
      setErrorMessage(
        "Sorry, the search failed. Please check your API key and billing status."
      );
    }
  };

  return (
    <div className="pt-[6%] flex flex-col items-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>
        <button
          className="py-2 px-4 m-4 col-span-3 bg-lime-400 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>

      {errorMessage && (
        <div className="w-full md:w-1/2 mt-2 p-2 bg-red-900 bg-opacity-80 text-white text-center rounded-lg">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;
