import {
  BookInfo,
  BookPhotoBox,
  BookSubTitle,
  BookTitle,
  Photo,
  Price,
  StyledItem,
} from "./styles";
import { Link } from "react-router-dom";
import { IBook } from "../../types/types";

interface IProps {
  book: IBook;
}

export const BookItem = ({ book }: IProps) => {
  return (
    <Link to={`/books/${book.isbn13}`}>
      <StyledItem whileHover={{ scale: 1.1 }}>
        <BookPhotoBox>
          <Photo src={book.image} />
        </BookPhotoBox>
        <BookInfo>
          <BookTitle>{book.title}</BookTitle>
          <BookSubTitle>
            {book.subtitle ? book.subtitle : "Description will come later"}
          </BookSubTitle>
          <Price>{book.price === "$0.00" ? "This book is free" : book.price}</Price>
        </BookInfo>
      </StyledItem>
    </Link>
  );
};
