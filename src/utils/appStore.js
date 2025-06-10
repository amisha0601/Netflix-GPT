import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";

const appStore = configureStore(
    {
      reducer: {
       user: useReducer
      } , 
      devTools:true
    }
)
export default appStore;