import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {id: 1, name: "Pizza", img:"./images/menu-1.jpg", rating: 5, price: 13.99},
  {id: 2, name: "Burger", img:"./images/menu-2.jpg", rating: 4, price: 15.99},
  {id: 3, name: "Pancakes", img:"./images/menu-3.jpg", rating: 5, price: 12.99},
  {id: 4, name: "Ice Cream ", img:"./images/menu-4.jpg", rating: 5, price: 13.99},
  {id: 5, name: "Biskuit ", img:"./images/menu-5.jpg", rating: 5, price: 11.99},
  {id: 6, name: "Muffins", img:"./images/menu-6.jpg", rating: 5, price: 8.99},
  {id: 7, name: "Lemonade", img:"./images/menu-7.jpg", rating: 5, price: 5.99},
  {id: 8, name: "Granola", img:"./images/menu-8.jpg", rating: 4, price: 6.99},
  {id: 9, name: "Fresh Juice", img:"./images/menu-9.jpg", rating: 5, price: 7.99},
]
const menuSlice = createSlice({
  name: "menuSlice",
  initialState,
  // reducers: {
  
  // }
});

// export const {} = menuSlice.actions
export default menuSlice.reducer