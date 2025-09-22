import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import tvSeriesReducer from "./tvSeriesSlice"
import configReducer from "./configSlice"

const appStore = configureStore(
    {
      reducer: {
       user: userReducer,
       movies: moviesReducer,
       gpt: gptReducer,
       tvSeries: tvSeriesReducer,
       config: configReducer
      } , 

      devTools:true
    }
)
export default appStore;