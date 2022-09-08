import React from "react";
import { BookList } from "../../components/BookList/BookList";
import { Title } from "../../components/SubscribeForm/styles";
import { ResultFound, SearchPageContainer } from "./styles";

export const SearchPage = () => {
  return (
    <SearchPageContainer>
      <Title>‘beginners’ Search results</Title>
      <ResultFound>Found 196 books</ResultFound>
      <BookList />
    </SearchPageContainer>
  );
};
