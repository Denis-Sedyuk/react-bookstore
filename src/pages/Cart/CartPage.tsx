import { useNavigate } from "react-router-dom";
import { Button, ButtonBackPage, Cart, Title } from "components";
import { useAppSelector, getCart } from "store";
import {
  CartPageContainer,
  Cost,
  Sum,
  Total,
  TotalContainer,
  TotalDescription,
  TotalWrapper,
} from "./styles";

export const CartPage = () => {
  const { cartBooks } = useAppSelector(getCart);

  const navigate = useNavigate();
  const handleBackPage = () => {
    navigate(-1);
  };

  const sumTotal = cartBooks
    .reduce((sum, book) => {
      if (book.price !== "$0.00") {
        const newPrice = book.price.split("");
        newPrice.splice(0, 1);
        const price = newPrice.join("");
        return sum + +price * (+book.amount + 1);
      } else {
        return sum;
      }
    }, 0)
    .toFixed(2);

  const sumVat = (+sumTotal * 0.2).toFixed(2);
  const total = (+sumTotal + +sumVat).toFixed(2);

  return (
    <CartPageContainer>
      <ButtonBackPage onCLick={handleBackPage} type="button" />
      <Title>Your cart</Title>

      {cartBooks.map((book) => {
        return <Cart book={book} key={book.isbn13} />;
      })}
      {cartBooks.length > 0 ? (
        <TotalWrapper>
          <TotalDescription>
            <TotalContainer>
              <Sum>Sum total</Sum>
              <Cost>$ {sumTotal}</Cost>
            </TotalContainer>
            <TotalContainer>
              <Sum>VAT</Sum>
              <Cost>$ {sumVat}</Cost>
            </TotalContainer>
            <TotalContainer>
              <Total>Total:</Total>
              <Total>${total}</Total>
            </TotalContainer>
            <Button type="button" onClick={() => {}}>
              Check out
            </Button>
          </TotalDescription>
        </TotalWrapper>
      ) : (
        <Title> is empty </Title>
      )}
    </CartPageContainer>
  );
};
