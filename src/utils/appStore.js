import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import tvSeriesReducer from "./tvSeriesSlice";
import configReducer from "./configSlice";
import discoverReducer from "./discoverSlice";
import genresReducer from "./genresSlice";

const appStore = configureStore(
    {
      reducer: {
       user: userReducer,
       movies: moviesReducer,
       gpt: gptReducer,
       tvSeries: tvSeriesReducer,
       config: configReducer,
       discover: discoverReducer,
       genres: genresReducer
      } , 

      devTools:true
    }
)
export default appStore;