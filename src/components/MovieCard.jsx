import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const {
    poster_path,
    title,
    name,
    vote_average,
    release_date,
    first_air_date,
  } = movie;

  if (!poster_path) return null;
  const year = (release_date || first_air_date)?.split("-")[0];

  return (
    <div className="w-36 pr-4 relative group transition-transform duration-300 ease-in-out transform hover:scale-110 hover:z-10 ">
      <img
        alt={title || name}
        src={IMG_CDN_URL + poster_path}
        className="rounded-2xl"
      />

      <div
        className=" opacity-0 group-hover:opacity-100 absolute  bottom-0 w-full p-3 pr-7 bg-gradient-to-t from-black to-transparent 
         rounded-b-lg transition-opacity duration-300 "
      >
        <h3 className="text-white text-sm font-bold truncate">
          {title || name}
        </h3>
        <div className="flex justify-between items-center text-xs text-gray-300 mt-1">
          <span>{year}</span>
          <span>{vote_average?.toFixed(1)} ★</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
