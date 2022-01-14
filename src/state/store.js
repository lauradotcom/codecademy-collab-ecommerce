import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

import * as products from "../data/products.json";

//MIDDLEWARE
const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    const cartItems = getState().cart.items.map((item) => ({
      productId: item.productId,
      quantity: item.quantity,
    }));
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    return result;
  };
};

const reHydrateStore = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  if (cartItems !== null && cartItems.length > 0) {
    const newCartItems = cartItems.map((item) => {
      let index = products.findIndex((element) => element.productId === item.productId);
      return {
        productId: item.productId,
        id: products[index].id,
        name: products[index].name,
        description: products[index].description,
        images: products[index].images,
        price: products[index].price,
        discount: products[index].discount,
        quantity: item.quantity,
      };
    });
    let totalPrice = 0;
    let totalQuantity = 0;
    newCartItems.forEach((item) => {
      totalPrice += item.price * (1 - item.discount) * item.quantity;
      totalQuantity += item.quantity;
    });
    return {
      cart: {
        items: newCartItems,
        totalPrice: totalPrice,
        totalQuantity: totalQuantity,
      },
    }; // re-hydrate the store
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
