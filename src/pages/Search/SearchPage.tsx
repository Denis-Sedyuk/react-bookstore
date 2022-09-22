import React from "react";
import { BookList, Title } from "../../components/index";
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
