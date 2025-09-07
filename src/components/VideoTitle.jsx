import React from "react";
import { PlayIcon, InformationCircleIcon } from "@heroicons/react/24/solid";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 w-full aspect-video pt-[24%] md:pt-[24%] px-10 md:px-20 text-white bg-gradient-to-r from-black z-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight  leading-tight">
        {title}
      </h1>

      <p className="hidden md:block py-4 text-sm md:text-base lg:text-md font-normal max-w-md leading-snug drop-shadow">
        {overview}
      </p>


<div className="flex gap-2 md:gap-4 mt-4">

 
  <button className="flex items-center gap-1 bg-white text-black text-sm md:text-base font-medium py-2 px-3 md:px-3 rounded-lg transition duration-300 shadow-md transform hover:scale-102 hover:opacity-50">
    <PlayIcon className="w-4 h-4 md:w-6 md:h-6" />
    Play
  </button>


  <button className="flex items-center gap-1 bg-gray-700 text-white text-sm md:text-base font-medium py-2 px-3 md:px-3 rounded-lg transition duration-300 shadow-md transform hover:scale-102 hover:opacity-60">
    <InformationCircleIcon className="w-4 h-4 md:w-6 md:h-6" />
    More Info
  </button>
</div>
    </div>
  );
};

export default VideoTitle;