import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  image: string;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.cart.push(action.payload);
    },

    deleteItems: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((items) => items.id !== action.payload);
    },

    incrementItem: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },

    decrementItem: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;

        // delete the item if it is 1 
        if (item.quantity === 0) {
          cartSlice.caseReducers.deleteItems(state, action);
        }
      }
    },
  },
});

export const { addItem, incrementItem, decrementItem, deleteItems } =
  cartSlice.actions;

export const getCurrentQuantityById =
  (id: number) => (state: { cartItem: CartState }) =>
    state.cartItem.cart.find((item) => item.id === id)?.quantity ?? 0;

export const getTotalCartPrice = (state: { cartItem: CartState }) =>
  state.cartItem.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getTotalCardQuantity = (state: { cartItem: CartState }) =>
  state.cartItem?.cart.reduce((sum, item) => sum + item.quantity, 0);

export default cartSlice.reducer;
