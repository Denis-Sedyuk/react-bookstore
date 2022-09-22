import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feautures/userSlice";
import booksReducer from "./feautures/bookSlice";
import bookDetailsSliceReducer from "./feautures/bookDetailsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    books: booksReducer,
    bookDetails: bookDetailsSliceReducer,
    // favorites: "",
    // cart: "",
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
