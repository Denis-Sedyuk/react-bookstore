import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonBackPage, Input, LabelForm, Title } from "../../components/index";
import { useAppSelector } from "../../store/hooks";
import { getUser } from "../../store/selectors/userSelectors";
import { StyledAccountContainer, UserSubTitle } from "./styles";

export const AccountPage = () => {
  useNavigate();
  const navigate = useNavigate();
  const handleBackPage = () => {
    navigate(-1);
  };
  return (
    <StyledAccountContainer>
      <ButtonBackPage onCLick={handleBackPage} type="button" />
      <Title>Account</Title>
      <UserSubTitle>Profile</UserSubTitle>
      <LabelForm>Name</LabelForm>
    </StyledAccountContainer>
  );
};
