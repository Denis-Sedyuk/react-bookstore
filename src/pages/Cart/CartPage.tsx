import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonBackPage, Title } from "../../components/index";
import { generateRandomId, setEmail } from "../../store/feautures/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { CartPageContainer } from "./styles";

export const CartPage = () => {
  useNavigate();
  const navigate = useNavigate();
  const handleBackPage = () => {
    navigate(-1);
  };
  // пример синхронного кода

  const { id, email } = useAppSelector((state) => state.user);
  const [newEmail, setNewEmail] = useState("");

  const dispatch = useAppDispatch();

  const handleNewId = () => {
    dispatch(generateRandomId());
  };

  const handleNewEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setNewEmail(event.target.value);
  };

  const handleSetNewEmail = () => {
    dispatch(setEmail(newEmail));
  };

  // сверху синхронный код

  return (
    <CartPageContainer>
      <ButtonBackPage onCLick={handleBackPage} type="button" />
      <Title>Your cart</Title>

      <input type="text" value={newEmail} onChange={handleNewEmail}></input>
      <h2> new mail is {email}</h2>
      <button onClick={handleSetNewEmail}>set</button>

      <h2>{id}</h2>
      <button onClick={handleNewId}>Click</button>
    </CartPageContainer>
  );
};
