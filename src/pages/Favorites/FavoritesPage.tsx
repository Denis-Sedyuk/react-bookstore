import { useNavigate } from "react-router-dom";
import { BookFavorite, ButtonBackPage, Title } from "../../components/index";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getFavoritesBooks } from "../../store/selectors/favoritesBooksSelectors";
import { FavoritePageContainer, FavoritesBookBox } from "./styles";

export const FavoritesPage = () => {
  const dispatch = useAppDispatch();
  const { favoritesBooks } = useAppSelector(getFavoritesBooks);

  const navigate = useNavigate();
  const handleBackPage = () => {
    navigate(-1);
  };
  return (
    <FavoritePageContainer>
      <ButtonBackPage onCLick={handleBackPage} type="button" />
      <Title>Favorites</Title>
      <FavoritesBookBox>
        {favoritesBooks.map((book) => {
          return <BookFavorite book={book} key={book.isbn13} />;
        })}
      </FavoritesBookBox>
    </FavoritePageContainer>
  );
};
