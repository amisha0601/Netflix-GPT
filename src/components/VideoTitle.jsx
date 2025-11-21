import React from "react";
import { PlayIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="absolute top-0 w-full aspect-video pt-[16%] md:pt-[16%] px-15 md:px-30 text-white bg-gradient-to-r from-black z-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        {title}
      </h1>

      <p className="hidden md:block py-3 line-clamp-3 text-sm md:text-base lg:text-md font-light max-w-md leading-snug drop-shadow">
        {overview}
      </p>

      <div className="flex gap-2 md:gap-4 mt-1">
        {/* --- FIX 1: Update the Play Button Link --- */}
        <Link 
            to={"/browse/" + movieId} 
            state={{ mediaType: "movie" }} // <--- Explicitly say this is a movie
        >
          <button className="flex items-center gap-1 bg-white/80 text-black text-sm md:text-base py-1 px-1.5 md:px-1.5 rounded-lg transition duration-300 shadow-md transform hover:scale-102 hover:opacity-50">
            <PlayIcon className="w-3 h-3 md:w-5 md:h-5" />
            {lang[langKey].play}
          </button>
        </Link>

        {/* --- FIX 2: Update the More Info Button Link --- */}
        <Link 
            to={"/browse/" + movieId} 
            state={{ mediaType: "movie" }} 
        >
          <button className="flex items-center gap-1 bg-gray-800/40 text-white text-sm md:text-base py-1 px-1.5 md:px-1.5 rounded-lg transition duration-300 shadow-md transform hover:scale-102 hover:opacity-60">
            <InformationCircleIcon className="w-3 h-3 md:w-5 md:h-5" />
            {lang[langKey].moreInfo}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoTitle;