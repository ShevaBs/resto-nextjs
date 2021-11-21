import { configureStore, combineReducers } from "@reduxjs/toolkit";
import carouselSlice from "../features/carouselSlice";
import menuSlice from "../features/menuSlice";
import popularDishesSlice from "../features/popularDishesSlice";
import reviewsSlice from "../features/reviewsSlice";

const rootReducer = combineReducers({
  slides: carouselSlice,
  popularDishes: popularDishesSlice,
  menu: menuSlice,
  reviews: reviewsSlice
})

export const store = configureStore({
  reducer: rootReducer
})