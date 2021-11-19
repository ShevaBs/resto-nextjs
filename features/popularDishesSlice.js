import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {id: 1, name: "Burger", img:"./images/dish-1.png", rating: 5, price: 15.99},
  {id: 2, name: "Naggets", img:"./images/dish-2.png", rating: 4, price: 12.99},
  {id: 3, name: "Chicken Grill", img:"./images/dish-3.png", rating: 5, price: 20.99},
  {id: 4, name: "Pizza ", img:"./images/dish-4.png", rating: 5, price: 13.99},
  {id: 5, name: "Cookie ", img:"./images/dish-5.png", rating: 5, price: 11.99},
  {id: 6, name: "Chicken Legs ", img:"./images/dish-6.png", rating: 4, price: 12.99},
]
const popularDishesSlice = createSlice({
  name: "popularDishesSlice",
  initialState,
  // reducers: {
  
  // }
});

// export const {} = popularDishesSlice.actions
export default popularDishesSlice.reducer