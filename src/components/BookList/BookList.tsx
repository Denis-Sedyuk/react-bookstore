import { useEffect } from "react";
import { fetchBooks, useAppDispatch, useAppSelector, getBooks } from "../../store/index";
import { BookItem, Spinner, Error } from "../index";
import { StyledBookList } from "./styles";

export const BookList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, books } = useAppSelector(getBooks);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <StyledBookList>
      {books.map((book) => {
        return <BookItem book={book} key={book.isbn13} />;
      })}
    </StyledBookList>
  );
};
