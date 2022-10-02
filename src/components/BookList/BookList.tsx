import { useEffect } from "react";
import { fetchBooks } from "../../store/feautures/bookSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getBooks } from "../../store/selectors/bookSelectors";
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
