import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useMovieInfo from "../hooks/useMovieInfo";
import { clearMovieDetails } from "../utils/moviesSlice";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  useMovieInfo(movieId);

  const movie = useSelector((store) => store.movies.movieDetails);
  const trailer = useSelector((store) => store.movies.movieTrailer);

  useEffect(() => {
    return () => {
      dispatch(clearMovieDetails());
    };
  }, [dispatch]);

  if (!movie || !trailer)
    return (
      <div className="bg-black min-h-screen text-white text-center p-20">
        Loading...
      </div>
    );

  return (
    <div className="bg-black text-white min-h-screen">
      <Link
        to="/browse"
        className="absolute top-4 left-4 z-20 text-lg text-white bg-black bg-opacity-50 px-3 py-1 rounded hover:bg-opacity-75"
      >
        &larr; Back
      </Link>

      <div className="w-full aspect-video">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer.key}`}
          title={movie.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
        <p className="text-lg mb-4">{movie.overview}</p>
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          <p className="text-md">
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p className="text-md">
            <strong>Rating:</strong> {movie.vote_average?.toFixed(1)} / 10
          </p>
          <p className="text-md">
            <strong>Runtime:</strong> {movie.runtime} minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
