import { configureStore, createSlice } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const User = {
  id: "",
  name: "",
  email: "",
};

const initialCartItem = {
  id: "",
  image: "",
  price: "",
  quantity: "",
  name: "",
};

const initialState = {
  user: User,
  cart: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    addToCart: (state, action) => {
      const newItem = { ...initialCartItem, ...action.payload };
      state.cart.push(newItem);
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity -= 1;
      }
    },
    removeFromCart:(state,action)=>{
        const id = action.payload;
        state.cart = state.cart.filter((item) => item.id !== id);
    }
  },
});

const persistedReducer = persistReducer(persistConfig, appSlice.reducer);

export const { setUser, addToCart, increaseQuantity, decreaseQuantity ,removeFromCart} =
  appSlice.actions;

export const store = configureStore({
  reducer: {
    app: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
