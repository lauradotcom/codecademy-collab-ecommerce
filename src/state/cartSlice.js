import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  items: [],
  totalAmount: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      const updatedTotalCount = state.totalCount + action.item.amount;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        totalCount: updatedTotalCount,
      };
    },
    removeItem: (state, action) => {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingCartItem.price;
      const updatedTotalCount = state.totalCount + action.item.amount;
      let updatedItems;
      if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        totalCount: updatedTotalCount,
      };
    },
    clearItems: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;
export const cartSelector = (state) => state.cart;
export default cartSlice.reducer;
