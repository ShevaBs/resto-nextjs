import { configureStore, combineReducers } from "@reduxjs/toolkit";
import carouselSlice from "../features/carouselSlice";
import popularDishesSlice from "../features/popularDishesSlice";

const rootReducer = combineReducers({
  slides: carouselSlice,
  popularDishes: popularDishesSlice,
})

export const store = configureStore({
  reducer: rootReducer
})