import { CloseIcon, MinusIcon, PlusIcon } from "../../assets/index";
import { useAppDispatch, amountMinus, amountPlus, removeCart } from "../../store/index";
import { IBookCart } from "../../types/types";
import { MouseEvent } from "react";
import {
  Amount,
  AmountButton,
  AmountTotal,
  Authors,
  BookInfo,
  BookPhotoBox,
  BookTitle,
  Card,
  CartContainer,
  Close,
  Photo,
  Price,
  PriceWrapper,
} from "./styles";
import { Color } from "../../ui";

interface IProps {
  book: IBookCart;
}

export const Cart = ({ book }: IProps) => {
  const dispath = useAppDispatch();

  const handleDeleteBook = (e: MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    dispath(removeCart(book.isbn13));
  };

  const handleAmountPlus = (e: MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    dispath(amountPlus(book));
  };

  const handleAmountMinus = (e: MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    dispath(amountMinus(book));
    if (book.amount < 1) {
      dispath(removeCart(book.isbn13));
    }
  };

  const resultPrice = (+book.price.slice(1) * (book.amount + 1)).toFixed(2);

  return (
    <CartContainer>
      <Card>
        <BookPhotoBox>
          <Photo src={book.image} alt={book.title} />
        </BookPhotoBox>
        <BookInfo>
          <BookTitle>{book.title}</BookTitle>
          <Authors>
            {book.authors}, {book.publisher}, {book.year}
          </Authors>
          <Amount>
            <AmountButton type="button" onClick={handleAmountMinus}>
              <MinusIcon stroke={Color.Primary} />
            </AmountButton>
            <AmountTotal>{book.amount + 1}</AmountTotal>
            <AmountButton type="button" onClick={handleAmountPlus}>
              <PlusIcon stroke={Color.Primary} />
            </AmountButton>
          </Amount>
        </BookInfo>
        <PriceWrapper>
          <Price>${resultPrice}</Price>
          <Close typeof="button" onClick={handleDeleteBook}>
            <CloseIcon stroke={Color.Primary} />
          </Close>
        </PriceWrapper>
      </Card>
    </CartContainer>
  );
};
