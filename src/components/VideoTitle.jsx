import React from 'react';
import { Play, Info } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 w-full h-[100vh] bg-gradient-to-r from-black text-white flex flex-col justify-center px-12">
      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight drop-shadow-lg max-w-xl leading-snug">
        {title}
      </h1>

      {/* Overview */}
      <p className="py-4 text-base font-normal max-w-md leading-relaxed drop-shadow">
        {overview}
      </p>

      {/* Buttons */}
      <div className="flex gap-3 mt-2">
        <button className="flex items-center gap-2 bg-white text-black text-sm font-medium py-2 px-5 rounded hover:bg-opacity-80 transition">
          <Play className="w-4 h-4" />
          Play
        </button>
        <button className="flex items-center gap-2 bg-gray-700 bg-opacity-70 text-white text-sm font-medium py-2 px-5 rounded hover:bg-opacity-90 transition">
          <Info className="w-4 h-4" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;