import React from "react";
import {
  Button,
  Input,
  InputForm,
  StyledForm,
  Subtitle,
  Title,
} from "./styles";

export const SubscribeForm = () => {
  return (
    <StyledForm>
      <Title>Subscribe to Newsletter</Title>
      <Subtitle>
        Be the first to know about new IT books, upcoming releases, exclusive
        offers and more.
      </Subtitle>
      <InputForm>
        <Input placeholder="Your email" type="text" />
        <Button type="button">Subscribe</Button>
      </InputForm>
    </StyledForm>
  );
};
