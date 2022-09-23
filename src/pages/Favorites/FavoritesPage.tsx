import { useNavigate } from "react-router-dom";
import { ButtonBackPage, Title } from "../../components/index";

export const FavoritesPage = () => {
  useNavigate();
  const navigate = useNavigate();
  const handleBackPage = () => {
    navigate(-1);
  };
  return (
    <div>
      <ButtonBackPage onCLick={handleBackPage} type="button" />
      <Title>Favorites</Title>
    </div>
  );
};
