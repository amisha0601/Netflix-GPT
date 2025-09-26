import { createSlice } from "@reduxjs/toolkit";

const discoverSlice = createSlice({
    name: "discover",
    initialState: {
        isDiscoverMode: false,
        discoverMovies: null,
    },
    reducers: {
        toggleDiscoverMode: (state) => {
            state.isDiscoverMode = !state.isDiscoverMode;
        },
        addDiscoverMovies: (state,action) => {
            state.discoverMovies = action.payload;
        },
    },
});

export const {toggleDiscoverMode, addDiscoverMovies} = discoverSlice.actions;
export default discoverSlice.reducer;