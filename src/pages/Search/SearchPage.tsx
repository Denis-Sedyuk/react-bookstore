import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BookItem, BookList, Title } from "../../components/index";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchSearchBooks } from "../../store/feautures/searchSlice";
import { getBooksSearch } from "../../store/selectors/searcSelectors";
import { ResultFound, SearchPageContainer } from "./styles";

export const SearchPage = () => {
  return (
    <SearchPageContainer>
      <Title>Search results</Title>
      <ResultFound>Found 196 books</ResultFound>
      {/* <BookList /> */}
    </SearchPageContainer>
  );
};
