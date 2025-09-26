import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    genreList: null,
  },
  reducers: {
    addGenres: (state, action) => {
      state.genreList = action.payload;
    },
  },
});

export const { addGenres } = genresSlice.actions;
export default genresSlice.reducer;