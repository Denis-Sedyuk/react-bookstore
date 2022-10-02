import { MouseEvent, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { removeFavorite } from "../../store/feautures/favoritesSlice";
import { useAppDispatch } from "../../store/hooks";
import { IBookDetails } from "../../types/types";
import { Color } from "../../ui/colors";
import { Like } from "../index";
import { HeartIcon } from "../../assets/index";

import {
  Authors,
  BookInfo,
  BookPhotoBox,
  BookTitle,
  Card,
  Container,
  LikeBtn,
  Photo,
  Price,
} from "./styles";
import { Link } from "react-router-dom";

interface IProps {
  book: IBookDetails;
}

export const BookFavorite = ({ book }: IProps) => {
  const dispatch = useAppDispatch();
  const [removeFavorites, setRemoveFavorites] = useState<boolean>(true);

  const handleRemoveFavorites = (e: MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    dispatch(removeFavorite(book.isbn13));
    setRemoveFavorites(true);
  };

  return (
    <Container>
      <Link to={`/books/${book.isbn13}`}>
        <Card>
          <BookPhotoBox>
            <Photo src={book.image} />
          </BookPhotoBox>
          <BookInfo>
            <BookTitle>{book.title}</BookTitle>
            <Authors>
              {book.authors}. {book.publisher} {book.year}
            </Authors>
            <Price>
              {book.price === "$0.00" ? "This book is free" : book.price}
              <Rating
                readonly={true}
                ratingValue={+book.rating * 20}
                size={25}
                fillColor={Color.Primary}
              />
            </Price>
            {removeFavorites && (
              <LikeBtn onClick={handleRemoveFavorites} whileHover={{ scale: 1.4 }}>
                <HeartIcon />
              </LikeBtn>
            )}
          </BookInfo>
        </Card>
      </Link>
    </Container>
  );
};
