import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

import { products } from "../data/products";

//MIDDLEWARE
const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    const cart = getState().cart.items.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }));
    localStorage.setItem("cart", JSON.stringify(cart));
    return result;
  };
};

const reHydrateStore = () => {
  if (localStorage.getItem("cart") !== null) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const newCart = cart.map((item) => {
      let index = products.findIndex((element) => element.id === item.id);
      return {
        id: item.id,
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
    newCart.forEach((item) => {
      totalPrice += item.price * (1 - item.discount) * item.quantity;
      totalQuantity += item.quantity;
    });
    console.log({
      items: newCart,
      totalPrice,
      totalQuantity,
    });
    return {
      cart: {
        items: newCart,
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
