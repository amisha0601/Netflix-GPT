import React from "react";
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie, mediaType }) => {
  const {
    id,
    poster_path,
    title,
    name,
    vote_average,
    release_date,
    first_air_date,
  } = movie;

  if (!poster_path) return null;
  const year = (release_date || first_air_date)?.split("-")[0];

  const type = mediaType || movie.media_type || "movie";

  return (
    <div className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 pr-2 sm:pr-3 md:pr-4 relative group transition-transform duration-300 ease-in-out transform hover:scale-110 hover:z-10 ">
      <Link to={`/browse/${id}`} state={{ mediaType: type }}>
        <img
          alt={title || name}
          src={IMG_CDN_URL + poster_path}
          className="rounded-lg sm:rounded-xl md:rounded-2xl w-full h-auto"
        />

        <div
          className="opacity-0 group-hover:opacity-100 absolute bottom-0 w-full p-2 sm:p-3 pr-4 sm:pr-7 bg-gradient-to-t from-black to-black/55 
          rounded-b-lg transition-opacity duration-300"
        >
          <h3 className="text-white text-xs sm:text-sm font-bold truncate">
            {title || name}
          </h3>
          <div className="flex justify-between items-center text-xs text-gray-300 mt-0.5 sm:mt-1">
            <span className="text-xs sm:text-xs">{year}</span>
            <span className="text-xs sm:text-xs">{vote_average?.toFixed(1)} ★</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
