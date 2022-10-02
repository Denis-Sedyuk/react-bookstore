import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookCart } from "../../types/types";

interface ICart {
  cartBooks: IBookCart[];
  total: number;
  amount: number;
}

const initialState: ICart = {
  cartBooks: [],
  total: 0,
  amount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeCart(state, { payload }: PayloadAction<string>) {
      state.cartBooks = state.cartBooks.filter((book) => {
        return book.isbn13 !== payload;
      });
    },

    addToCart(state, { payload }: PayloadAction<IBookCart>) {
      const result = state.cartBooks.find((book) => book.isbn13 === payload.isbn13);
      if (!result) state.cartBooks.push(payload);
    },
  },
});

export default cartSlice.reducer;
