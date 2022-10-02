import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getCart } from "../../store/selectors/cartSelectors";
import { IBookCart } from "../../types/types";
import { CartContainer } from "./styles";

interface IProps {
  book: IBookCart;
}

export const Cart = ({ book }: IProps) => {
  const dispath = useAppDispatch();

  return (
    <CartContainer>
      {book.amount < 1 && <p> В Корзине пусто</p>}
      {book.price}
    </CartContainer>
  );
};
