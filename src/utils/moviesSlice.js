import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        movieDetails: null,
        movieTrailer: null,
    },
    reducers: {
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state,action) => {
            state.popularMovies = action.payload;
        },
        
        addTopRatedMovies: (state,action) => {
            state.topRatedMovies = action.payload;
        },
        
        addUpcomingMovies: (state,action) => {
            state.upcomingMovies = action.payload;
        },
        
        addTrailerVideo: (state,action) => {
          state.trailerVideo = action.payload;
        },
        addMovieDetails: (state, action) => {
        state.movieDetails = action.payload;
        },
        addMovieTrailer: (state, action) => {
        state.movieTrailer = action.payload;
        },

        clearMovieDetails: (state) => {
        state.movieDetails = null;
        state.movieTrailer = null;
        },

    },
});

export const {addNowPlayingMovies , addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies,addMovieDetails,addMovieTrailer,clearMovieDetails} = moviesSlice.actions;

export default moviesSlice.reducer;