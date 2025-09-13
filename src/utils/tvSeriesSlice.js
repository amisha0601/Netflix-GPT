import { createSlice } from "@reduxjs/toolkit";

const tvSeriesSlice = createSlice({
  name: "tvSeries",
  initialState: {
    popularTvSeries: null,
    airingTodayTvSeries: null,
    onTheAirTvSeries: null,
    topRatedTvSeries: null,
  },
  reducers: {
    addPopularTvSeries: (state, action) => {
      state.popularTvSeries = action.payload;
    },
    addAiringTodayTvSeries: (state, action) => {
      state.airingTodayTvSeries = action.payload;
    },

    addOnTheAirTvSeries: (state, action) => {
      state.onTheAirTvSeries = action.payload;
    },

    addTopRatedTvSeries: (state, action) => {
      state.topRatedTvSeries = action.payload;
    },
  },
});

export const {
  addPopularTvSeries,
  addAiringTodayTvSeries,
  addOnTheAirTvSeries,
  addTopRatedTvSeries,
} = tvSeriesSlice.actions;

export default tvSeriesSlice.reducer;
