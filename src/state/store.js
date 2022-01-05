import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

//MIDDLEWARE
const localStorageMiddleware = ({ getState }) => {
  return next => action => {
    const result = next(action);
    localStorage.setItem('cart', JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  if (localStorage.getItem('cart') !== null) {
    return JSON.parse(localStorage.getItem('cart')); // re-hydrate the store
  }
};

// STORE CONFIGURATION
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
