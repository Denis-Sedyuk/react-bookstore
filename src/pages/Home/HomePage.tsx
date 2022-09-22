import { BookList, SubscribeForm, Title } from "../../components/index";
import { HomePageContainer } from "./styles";

export const HomePage = () => {
  return (
    <HomePageContainer>
      <Title>New Releases Books</Title>
      <BookList />
      <SubscribeForm />
    </HomePageContainer>
  );
};
