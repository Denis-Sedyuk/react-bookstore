import { useEffect } from "react";
import { fetchBooks, useAppDispatch, useAppSelector, getBooks } from "store";
import { BookItem, Spinner, Error } from "components";
import { StyledBookList } from "./styles";

export const BookList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, books } = useAppSelector(getBooks);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <StyledBookList>
      {/* <Container> */}
      {isLoading && <Spinner />}
      {error && <Error />}
      {books.map((book) => {
        return <BookItem book={book} key={book.isbn13} />;
      })}
      {/* </Container> */}
    </StyledBookList>
  );
};
