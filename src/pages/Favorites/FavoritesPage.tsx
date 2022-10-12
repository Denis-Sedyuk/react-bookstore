import { useNavigate } from "react-router-dom";
import { BookFavorite, ButtonBackPage, Title } from "components";
import { useAppSelector, getFavoritesBooks } from "store";
import { FavoritePageContainer, FavoritesBookBox } from "./styles";

export const FavoritesPage = () => {
  const { favoritesBooks } = useAppSelector(getFavoritesBooks);

  const navigate = useNavigate();
  const handleBackPage = () => {
    navigate(-1);
  };
  return (
    <FavoritePageContainer>
      <ButtonBackPage onCLick={handleBackPage} type="button" />
      <Title>Favorites</Title>
      {favoritesBooks.length > 0 ? (
        <FavoritesBookBox>
          {favoritesBooks.map((book) => {
            return <BookFavorite book={book} key={book.isbn13} />;
          })}
        </FavoritesBookBox>
      ) : (
        <Title>Ooop's there's nothing here</Title>
      )}
    </FavoritePageContainer>
  );
};
