import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonBackPage, Title } from "../../components/index";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { CartPageContainer } from "./styles";

export const CartPage = () => {
  const navigate = useNavigate();
  const handleBackPage = () => {
    navigate(-1);
  };

  return (
    <CartPageContainer>
      <ButtonBackPage onCLick={handleBackPage} type="button" />
      <Title>Your cart</Title>
    </CartPageContainer>
  );
};
