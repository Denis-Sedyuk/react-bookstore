import { BookList, SubscribeForm, Title } from "../../components/index";
import { useAppSelector, getUser } from "../../store/index";
import { HomePageContainer } from "./styles";

export const HomePage = () => {
  const { email } = useAppSelector(getUser);

  return (
    <HomePageContainer>
      <Title>New Releases Books</Title>
      <p>email :{email}</p>
      <BookList />
      <SubscribeForm />
    </HomePageContainer>
  );
};
