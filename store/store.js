import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../store/slices/authSlice';
import cartReducer from '../store/slices/cartSlice';


export const store=configureStore({
    reducer:{
        auth:authReducer,
        cart:cartReducer,
        // addToCart: (state, action) => {
        //     const newItem = action.payload;
        //     const existingItem = state.find((item) => item.id === newItem.id);
      
        //     if (existingItem) {
        //       // Update existing item
        //       existingItem.quantity += newItem.quantity;
        //       existingItem.price = existingItem.quantity * newItem.price;
        //     } else {
        //       // Add new item
        //       state.cart.push(newItem);
        //     }
        // }
    }
});
