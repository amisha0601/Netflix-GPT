import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useMovieInfo from "../hooks/useMovieInfo";
import { clearMovieDetails } from "../utils/moviesSlice";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid"; 
import lang from "../utils/languageConstants"; 

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);

  const [isMuted, setIsMuted] = useState(true);

  const location = useLocation();
  const mediaType = location.state?.mediaType || "movie";
 
  const { isLoading } = useMovieInfo(movieId, mediaType);

  const movie = useSelector((store) => store.movies.movieDetails);
  const trailer = useSelector((store) => store.movies.movieTrailer);

  useEffect(() => {
    return () => {
      dispatch(clearMovieDetails());
    };
  }, [dispatch]);

  const handleVolumeToggle = () => {
    setIsMuted(!isMuted);
  };

  
  if (isLoading || !movie)
    return (
      <div className="bg-black min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#E50914] mb-3"></div>
          
          <p className="text-white text-lg">{lang[langKey].loading}</p>
        </div>
      </div>
    );
    
  
  if (!trailer || !trailer.key)
    return (
        <div className="bg-black text-white min-h-screen p-8 md:p-20">
            <Link
                to="/browse"
                className="absolute top-4 left-4 z-20 text-sm text-white bg-[#c2050e] px-2 py-1 rounded-md font-medium hover:bg-[#da0813] transition-colors"
            >
              
              &larr; {lang[langKey].back} 
            </Link>
            <div className="max-w-4xl mx-auto pt-20">
                <h1 className="flex justify-center text-4xl font-bold mb-4 mt-12 text-red-700">
                    
                    {lang[langKey].trailerNotAvailable}
                </h1>
                <p className="flex justify-center text-xl text-gray-600 mb-8">
                    
                    {lang[langKey].videoNotFound}
                </p>
                
                <h2 className="text-3xl font-bold mt-24 mb-3">{movie?.title}</h2>
                <p className="text-md mb-6">{movie?.overview}</p>
                <div className="flex flex-wrap gap-x-12 gap-y-2">
                    <p className="text-md">
                        
                        <strong>{lang[langKey].Date}:</strong>&nbsp;{movie?.release_date}
                    </p>
                    <p className="text-md">
                        <strong>{lang[langKey].rating}:</strong>&nbsp;{movie?.vote_average?.toFixed(1)} / 10
                    </p>
                    <p className="text-md">
                        <strong>{lang[langKey].runtime}:</strong>&nbsp;{movie?.runtime} {lang[langKey].minutes}
                    </p>
                </div>
            </div>
        </div>
    );

  
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <div className="w-full aspect-video relative">
          
        <Link
          to="/browse"
          className="absolute top-4 left-4 z-30 text-sm text-white bg-[#c2050e] px-2 py-1 rounded-md font-medium hover:bg-[#da0813] transition-colors"
        >
          
          &larr; {lang[langKey].back}
        </Link>
        
        <button
            onClick={handleVolumeToggle}
            className="absolute bottom-6 right-6 z-30 p-2 bg-black/50 hover:bg-black/70 rounded-full border border-white/30 transition-colors"
        >
            {isMuted ? (
                <SpeakerXMarkIcon className="w-7 h-7 text-white" />
            ) : (
                <SpeakerWaveIcon className="w-7 h-7 text-white" />
            )}
        </button>
        
        <div className="absolute inset-0 z-10 cursor-default"></div>

        <iframe
          className="w-full h-full transform scale-[1.025]"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&loop=1&playlist=${trailer.key}`}
          title={movie.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
        <p className="text-md mb-4">{movie.overview}</p>
        <div className="flex flex-wrap gap-x-12 gap-y-2">
          <p className="text-md">
            
            <strong>{lang[langKey].Date}:</strong>&nbsp;{movie.release_date}
          </p>
          <p className="text-md">
            <strong>{lang[langKey].rating}:</strong>&nbsp;{movie.vote_average?.toFixed(1)} / 10
          </p>
          <p className="text-md">
            <strong>{lang[langKey].runtime}:</strong>&nbsp;{movie.runtime} {lang[langKey].minutes}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;