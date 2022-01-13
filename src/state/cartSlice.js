import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      if (item.quantity <= 0) {
        return;
      }
      const updatedTotalPrice = state.totalPrice + (item.price * (1 - item.discount)) * item.quantity;
      const updatedTotalQuantity = state.totalQuantity + item.quantity;
      const existingCartItemIndex = state.items.findIndex(
        (existingItem) => existingItem.id === item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + item.quantity,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(item);
      }

      state.items = updatedItems;
      state.totalPrice = updatedTotalPrice;
      state.totalQuantity = updatedTotalQuantity;
    },
    removeItem: (state, action) => {
      const item = action.payload;
      const updatedTotalPrice =
        state.totalPrice - (item.price * (1 - item.discount)) * item.quantity;
      const updatedTotalQuantity = state.totalQuantity - item.quantity;
      const existingCartItemIndex = state.items.findIndex(
        (existingItem) => existingItem.id === item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        if (existingCartItem.quantity <= item.quantity) {
          updatedItems = [...state.items];
          updatedItems.splice(existingCartItemIndex, 1);
        } else {
          const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity - item.quantity,
          };
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        }
      } else {
        return;
      }

      state.items = updatedItems;
      state.totalPrice = updatedTotalPrice;
      state.totalQuantity = updatedTotalQuantity;
    },
    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;
export const cartSelector = (state) => state.cart;
export default cartSlice.reducer;
