import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const products = action.payload;
      const existingIteam = state.cartItems.find(
        (item) => item.id === products.id
      );

      if (existingIteam) {
        existingIteam.quantity += 1;
      } else {
        state.cartItems.push({ ...products, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
