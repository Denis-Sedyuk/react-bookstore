import React, { useEffect } from "react";
import { fetchBooks } from "../../store/feautures/bookSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getBooks } from "../../store/selectors/bookSelectors";
import { BookItem } from "../index";
import { StyledBookList } from "./styles";

export const BookList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, books } = useAppSelector(getBooks);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <StyledBookList>
      {books.map((book) => {
        return <BookItem book={book} {...book} key={book.isbn13} />;
      })}
    </StyledBookList>
  );
};
