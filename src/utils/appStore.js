import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import tvSeriesReducer from "./tvSeriesSlice"

const appStore = configureStore(
    {
      reducer: {
       user: userReducer,
       movies: moviesReducer,
       gpt: gptReducer,
       tvSeries: tvSeriesReducer
      } , 

      devTools:true
    }
)
export default appStore;