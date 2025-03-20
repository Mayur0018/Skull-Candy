import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    count : 1,
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
    incrementCart : (state,action)=>{
      const  item = state.cartItems.find((item)=> item.id === action.payload);
      if(item){
        item.quantity += 1
      }
    },
    decrementCart : (state,action)=>{
      const  item = state.cartItems.find((item)=> item.id === action.payload);
      if(item && item.quantity> 1){
        item.quantity -= 1
      }else{
        state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      }
    },
  },
});

export const { addToCart, removeFromCart,incrementCart,decrementCart } = cartSlice.actions;

export default cartSlice.reducer;
