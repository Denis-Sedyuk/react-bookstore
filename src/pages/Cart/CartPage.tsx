import { useNavigate } from "react-router-dom";
import { ButtonBackPage, Cart, Title } from "../../components/index";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getCart } from "../../store/selectors/cartSelectors";
import { CartPageContainer } from "./styles";

export const CartPage = () => {
  const dispatch = useAppDispatch();
  const { cartBooks, amount } = useAppSelector(getCart);

  const navigate = useNavigate();
  const handleBackPage = () => {
    navigate(-1);
  };

  return (
    <CartPageContainer>
      <ButtonBackPage onCLick={handleBackPage} type="button" />
      <Title>Your cart</Title>
      {cartBooks.map((book) => {
        return <Cart book={book} key={book.isbn13} />;
      })}
    </CartPageContainer>
  );
};
