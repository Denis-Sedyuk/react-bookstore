import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainTemplate } from "./components/Maintemplate/MainTemplate";
import { AccountPage } from "./pages/AccountPage";
import { BookPage } from "./pages/BookPage";
import { CartPage } from "./pages/CartPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { HomePage } from "./pages/HomePage";
import { ResetPage } from "./pages/ResetPage";
import { SearchPage } from "./pages/SearchPage";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainTemplate />}>
        <Route path="/" element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="book" element={<BookPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="reset" element={<ResetPage />} />
      </Route>
    </Routes>
  );
};
