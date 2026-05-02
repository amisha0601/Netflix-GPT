import React from "react";
import { PlayIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="absolute top-0 w-full aspect-video pt-[28%] sm:pt-[22%] md:pt-[16%] px-3 sm:px-6 md:px-15 lg:px-30 text-white bg-gradient-to-r from-black z-6">
      <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-1 sm:mb-2 md:mb-0">
        {title}
      </h1>

      <p className="hidden lg:block py-3 line-clamp-3 text-xs sm:text-sm md:text-base lg:text-md font-light max-w-md leading-snug drop-shadow">
        {overview}
      </p>

      <div className="flex gap-1 sm:gap-2 md:gap-4 mt-3 sm:mt-3 md:mt-1">
        <Link 
            to={"/browse/" + movieId} 
            state={{ mediaType: "movie" }} 
        >
          <button className="flex items-center gap-0.5 sm:gap-1 bg-white/80 text-black text-xs sm:text-sm md:text-base py-1.5 sm:py-1 md:py-1 px-2 md:mt-2 sm:px-2 md:px-1.5 rounded-lg transition duration-300 shadow-md transform hover:scale-102 hover:opacity-50">
            <PlayIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span className="hidden sm:inline text-xs sm:text-sm">{lang[langKey].play}</span>
          </button>
        </Link>

        <Link 
            to={"/browse/" + movieId} 
            state={{ mediaType: "movie" }} 
        >
          <button className="flex items-center gap-0.5 sm:gap-1 bg-gray-800/40 text-white text-xs sm:text-sm md:text-base py-1.5 sm:py-1 md:py-1 px-2 md:mt-2 sm:px-2 md:px-1.5 rounded-lg transition duration-300 shadow-md transform hover:scale-102 hover:opacity-60">
            <InformationCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span className="hidden sm:inline text-xs sm:text-sm">{lang[langKey].moreInfo}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoTitle;