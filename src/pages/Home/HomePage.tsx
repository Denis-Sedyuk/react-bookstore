import { useEffect } from "react";
import { BookList, SubscribeForm, Title } from "../../components/index";
import { fetchSignInUser } from "../../store/feautures/userSlice";
import { useAppSelector } from "../../store/hooks";
import { getUser } from "../../store/selectors/userSelectors";
import { HomePageContainer } from "./styles";

export const HomePage = () => {
  const { email, creationTime } = useAppSelector(getUser);

  return (
    <HomePageContainer>
      <Title>New Releases Books</Title>
      <p>mail :{email}</p>
      <p> time :{creationTime}</p>
      <BookList />
      <SubscribeForm />
    </HomePageContainer>
  );
};
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
