import { useNavigate } from "react-router-dom";
import { Button, ButtonBackPage, LabelForm, Title } from "../../components/index";
import { ROUTE } from "../../routes";
import { getUser, useAppSelector } from "../../store";
import { InfoContainer, StyledAccountContainer, UserInfo, UserSubTitle } from "./styles";

export const AccountPage = () => {
  const { email, creationTime } = useAppSelector(getUser);
  useNavigate();
  const navigate = useNavigate();
  const handleBackPage = () => {
    navigate(-1);
  };

  const handleExit = () => {
    navigate(ROUTE.HOME);
  };

  return (
    <StyledAccountContainer>
      <ButtonBackPage onCLick={handleBackPage} type="button" />
      <Title>Account</Title>
      <InfoContainer>
        <UserSubTitle>User information</UserSubTitle>
        <LabelForm>Email:</LabelForm>
        <UserInfo>{email}</UserInfo>
        <LabelForm>Date of registration:</LabelForm>
        <UserInfo>{new Date(creationTime).toLocaleDateString()}</UserInfo>
        <Button type="button" onClick={handleExit}>
          To main
        </Button>
      </InfoContainer>
    </StyledAccountContainer>
  );
};
