import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../Button/Button";
import { Label } from "../LabelForm/styles";
import { Input } from "../SearchInput/Input";
import { StyledForm } from "./styles";

export interface Iprops {
  section: string;
}

export type SignUpValues = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignUpForm = ({ section }: Iprops) => {
  const { handleSubmit, reset, control } = useForm<SignUpValues>();

  const onsubmit: SubmitHandler<SignUpValues> = ({ email, password }) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
    });
  };

  // //  Тут нужно записать данные в store
  reset();
  return (
    <StyledForm onSubmit={handleSubmit(onsubmit)}>
      <Label>Name</Label>
      <Controller
        control={control}
        name="userName"
        render={({ field: { onChange, value } }) => {
          return (
            <Input
              name={"userName"}
              placeholder={"Your name"}
              value={value}
              onChange={onChange}
              type="text"
            />
          );
        }}
      />
      <Label>Email</Label>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => {
          return (
            <Input
              name={"email"}
              placeholder={"Your email"}
              value={value}
              onChange={onChange}
              type="email"
            />
          );
        }}
      />
      <Label>Password</Label>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => {
          return (
            <Input
              name={"password"}
              placeholder={"Your password"}
              value={value}
              onChange={onChange}
              type="password"
            />
          );
        }}
      />
      <Label>Confirm password</Label>
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, value } }) => {
          return (
            <Input
              name={"confirmPassword"}
              placeholder={"Confirm password"}
              value={value}
              onChange={onChange}
              type="password"
            />
          );
        }}
      />
      <Button type="submit">SIGN UP</Button>
    </StyledForm>
  );
};
