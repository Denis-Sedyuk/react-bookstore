import React, { ChangeEvent, useEffect, useState } from "react";
import { ArrowBackIcon } from "../../assets/index";
import { Title } from "../../components/index";
import { fetchBooks } from "../../store/feautures/bookSlice";
import { generateRandomId, setEmail } from "../../store/feautures/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getBooksDetails } from "../../store/selectors/bookDetailsSelectors";

export const CartPage = () => {
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

  // useEffect(() => {
  //   dispatch(fetchBooks());
  // }, [dispatch]);

  return (
    <div>
      <ArrowBackIcon />
      <Title>Your cart</Title>

      <input type="text" value={newEmail} onChange={handleNewEmail}></input>
      <h2> new mail is {email}</h2>
      <button onClick={handleSetNewEmail}>set</button>

      <h2>{id}</h2>
      <button onClick={handleNewId}>Click</button>

      <div></div>
    </div>
  );
};
