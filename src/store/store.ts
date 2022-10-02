import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feautures/userSlice";
import booksReducer from "./feautures/bookSlice";
import bookDetailsSliceReducer from "./feautures/bookDetailsSlice";
import bookFavoritesReducer from "./feautures/favoritesSlice";
import cartReducer from "./feautures/cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    books: booksReducer,
    bookDetails: bookDetailsSliceReducer,
    booksFavorites: bookFavoritesReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
