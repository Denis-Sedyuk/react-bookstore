import { MainTemplate, RequareAuth } from "./components/index";
import { Routes, Route } from "react-router-dom";
import {
  AccountPage,
  BookPage,
  CartPage,
  FavoritesPage,
  HomePage,
  NotFoundPage,
  ResetPage,
  SearchPage,
  SignInPage,
} from "./pages/index";
import { ROUTE } from "./routes/index";

export const App = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
        <Route path={`${ROUTE.BOOK}:isbn13`} element={<BookPage />} />
        <Route path={ROUTE.USER} element={<SignInPage />} />
        <Route path={ROUTE.RESET_PASSWORD} element={<ResetPage />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />

        <Route element={<RequareAuth />}>
          <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
          <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
          <Route path={ROUTE.CART} element={<CartPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
