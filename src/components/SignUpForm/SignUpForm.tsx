import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../Button/Button";
import { Label } from "../LabelForm/styles";
import { Input } from "../SearchInput/Input";
import { SignButton, TabBox } from "../SignInForm/styles";
import { StyledForm } from "./styles";

export type SignUpValues = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  search: string;
};

export const SignUpForm = () => {
  const { register, handleSubmit, reset, control } = useForm<SignUpValues>();

  const onsubmit: SubmitHandler<SignUpValues> = (data) => {
    console.log(data);
    //  Тут нужно записать данные в редакс
  };

  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth, email, password).then(
  //     (userCredential) => {
  //       //   const user = userCredential.user;
  //       console.log(userCredential);
  //     }
  //   );
  // };
  // //  Тут нужно записать данные в store
  reset();
  return (
    <StyledForm onSubmit={handleSubmit(onsubmit)}>
      <TabBox>
        <SignButton type="button">SIGN IN</SignButton>
        <SignButton type="button">SIGN UP</SignButton>
      </TabBox>
      <Label>Name</Label>
      <Input
        placeholder="Your name"
        type="text"
        {...register("userName")}
        control={control}
      />
      <Label>Email</Label>
      <Input
        placeholder="Your email"
        type="email"
        {...register("email")}
        control={control}
      />
      <Label>Password</Label>
      <Input
        placeholder="Your password"
        type="password"
        {...register("password")}
        control={control}
      />
      <Label>Confirm password</Label>
      <Input
        placeholder="Confirm password"
        type="password"
        {...register("password")}
        control={control}
      />
      <Button type="submit">SIGN UP</Button>
    </StyledForm>
  );
};
