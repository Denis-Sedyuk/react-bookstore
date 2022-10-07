import { store } from "./store";
import { fetchBookDetails } from "./feautures/bookDetailsSlice";
import { fetchBooks } from "./feautures/bookSlice";
import { removeCart, addToCart, amountMinus, amountPlus } from "./feautures/cartSlice";
import { addToFavotires, removeFavorite } from "./feautures/favoritesSlice";
import { fetchSignInUser, fetchSignUpUser } from "./feautures/userSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getBooksDetails } from "./selectors/bookDetailsSelectors";
import { getBooks } from "./selectors/bookSelectors";
import { getCart } from "./selectors/cartSelectors";
import { getFavoritesBooks } from "./selectors/favoritesBooksSelectors";
import { getUser } from "./selectors/userSelectors";

export {
  store,
  fetchBookDetails,
  fetchBooks,
  removeCart,
  addToCart,
  amountMinus,
  amountPlus,
  addToFavotires,
  removeFavorite,
  fetchSignInUser,
  fetchSignUpUser,
  useAppDispatch,
  useAppSelector,
  getBooksDetails,
  getBooks,
  getCart,
  getFavoritesBooks,
  getUser,
};
