import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../Button/Button";
import { Label } from "../LabelForm/styles";
import { Input } from "../SearchInput/Input";
import { ForgotPass, SignButton, StyledFormSignIn, TabBox } from "./styles";

export type SignInValues = {
  email: string;
  password: string;
};

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<SignInValues>();

  const onsubmit: SubmitHandler<SignInValues> = (data) => {
    console.log(data);
    //  Тут нужно записать данные в редакс
  };

  reset();
  return (
    <StyledFormSignIn onSubmit={handleSubmit(onsubmit)}>
      <TabBox>
        <SignButton type="button">SIGN IN</SignButton>
        <SignButton type="button">SIGN UP</SignButton>
      </TabBox>
      <Label>Email</Label>
      <Input
        placeholder="Your email"
        type="email"
        {...register("email", { required: "Incorrect email" })}
        control={control}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <Label>Password</Label>
      <Input
        placeholder="Your password"
        type="password"
        {...register("password", { required: "Incorrect password" })}
        control={control}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <ForgotPass>Forgot password ?</ForgotPass>
      <Button type="submit">SIGN IN</Button>
    </StyledFormSignIn>
  );
};
