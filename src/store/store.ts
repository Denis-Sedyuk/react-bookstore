import { configureStore, combineReducers } from "@reduxjs/toolkit";
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
import userReducer from "./feautures/userSlice";
import booksReducer from "./feautures/bookSlice";
import bookDetailsSliceReducer from "./feautures/bookDetailsSlice";
import bookFavoritesReducer from "./feautures/favoritesSlice";
import cartReducer from "./feautures/cartSlice";
import searchReducer from "./feautures/searchSlice";

const rootReducer = combineReducers({
  user: userReducer,
  books: booksReducer,
  bookDetails: bookDetailsSliceReducer,
  booksFavorites: bookFavoritesReducer,
  cart: cartReducer,
  search: searchReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: { persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
