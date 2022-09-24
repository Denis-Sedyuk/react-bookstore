import { BookPhotoBox, BookSubTitle, BookTitle, Photo, Price, StyledItem } from "./styles";
import { Link } from "react-router-dom";
import { IBook } from "../../types/types";

interface IProps {
  book: IBook;
}

export const BookItem = ({ book }: IProps) => {
  return (
    <Link to={`/books/${book.isbn13}`}>
      <StyledItem>
        <BookPhotoBox>
          <Photo src={book.image} />
        </BookPhotoBox>
        <BookTitle>{book.title}</BookTitle>
        <BookSubTitle>{book.subtitle ? book.subtitle : "Description will come later"}</BookSubTitle>
        <Price>{book.price === "$0.00" ? "This book is free" : book.price}</Price>
      </StyledItem>
    </Link>
  );
};
