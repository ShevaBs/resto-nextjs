import { configureStore, combineReducers } from "@reduxjs/toolkit";
import carouselSlice from "../features/carouselSlice";

const rootReducer = combineReducers({
  slides: carouselSlice
})

export const store = configureStore({
  reducer: rootReducer
})