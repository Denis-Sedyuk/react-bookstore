import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../SearchInput/Input";
import {
  InputForm,
  StyledForm,
  SubscribeButton,
  Subtitle,
  Title,
} from "./styles";

export type SubscribeValues = {
  email: string;
};

export const SubscribeForm = () => {
  const { register, handleSubmit, reset } = useForm<SubscribeValues>();

  const onsubmit: SubmitHandler<SubscribeValues> = (data) => {
    console.log(data);
    //  Тут нужно записать данные в редакс
  };

  reset();
  return (
    <StyledForm onSubmit={handleSubmit(onsubmit)}>
      <Title>Subscribe to Newsletter</Title>
      <Subtitle>
        Be the first to know about new IT books, upcoming releases, exclusive
        offers and more.
      </Subtitle>
      <InputForm>
        <Input
          placeholder="Your email"
          {...register("email")}
          type="text"
          name="email"
          control={control}
        />
        <SubscribeButton type="submit">Subscribe</SubscribeButton>
      </InputForm>
    </StyledForm>
  );
};
