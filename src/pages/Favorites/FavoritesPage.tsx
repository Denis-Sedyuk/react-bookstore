import { useNavigate } from "react-router-dom";
import { ButtonBackPage, Title } from "../../components/index";
import { FavoritePageContainer } from "./styles";

export const FavoritesPage = () => {
  useNavigate();
  const navigate = useNavigate();
  const handleBackPage = () => {
    navigate(-1);
  };
  return (
    <FavoritePageContainer>
      <ButtonBackPage onCLick={handleBackPage} type="button" />
      <Title>Favorites</Title>
    </FavoritePageContainer>
  );
};
