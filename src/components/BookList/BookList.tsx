import React from "react";
import { BookItem } from "../BookItem/BookItem";
import { StyledBookList } from "./styles";

export const BookList = () => {
  return (
    <StyledBookList>
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
    </StyledBookList>
  );
};
