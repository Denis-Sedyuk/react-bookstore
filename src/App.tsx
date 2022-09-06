import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainTemplate } from "./components/Maintemplate/MainTemplate";
import { AccountPage } from "./pages/Account/AccountPage";
import { BookPage } from "./pages/Book/BookPage";
import { CartPage } from "./pages/Cart/CartPage";
import { FavoritesPage } from "./pages/Favorites/FavoritesPage";
import { HomePage } from "./pages/Home/HomePage";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";
import { ResetPage } from "./pages/Reset/ResetPage";
import { SearchPage } from "./pages/Search/SearchPage";
import { SignInPage } from "./pages/SignIn/SignInPage";
import { SignUpPage } from "./pages/SignUp/SignUpPage";

import { ROUTE } from "./routes";

export const App = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
        <Route path={ROUTE.BOOK} element={<BookPage />} />
        <Route path={ROUTE.CART} element={<CartPage />} />
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
        <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
        <Route path={ROUTE.RESET_PASSWORD} element={<ResetPage />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
