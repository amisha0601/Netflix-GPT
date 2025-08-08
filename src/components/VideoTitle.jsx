import React from "react";
import { Play, Info } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 w-full aspect-video pt-[20%] md:pt-[20%] px-6 md:px-12 text-white bg-gradient-to-r from-black z-10">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-lg max-w-2xl leading-tight">
        {title}
      </h1>

      <p className="hidden md:block py-4 text-sm md:text-base lg:text-lg font-normal max-w-lg leading-relaxed drop-shadow">
        {overview}
      </p>

      <div className="flex gap-2 md:gap-3 mt-4">
        <button className="flex items-center gap-2 bg-white text-black text-sm md:text-base font-medium py-2 px-4 md:px-5 rounded-lg hover:bg-opacity-80 transition duration-300 shadow-md">
          <Play className="w-4 h-4 md:w-5 md:h-5" />
          Play
        </button>
        <button className="flex items-center gap-2 bg-gray-700 bg-opacity-70 text-white text-sm md:text-base font-medium py-2 px-4 md:px-5 rounded-lg hover:bg-opacity-90 transition duration-300 shadow-md">
          <Info className="w-4 h-4 md:w-5 md:h-5" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
