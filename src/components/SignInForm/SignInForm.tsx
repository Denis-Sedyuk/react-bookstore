import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button } from "../Button/Button";
import { Label } from "../LabelForm/styles";
import { Input } from "../SearchInput/Input";
import { ForgotPass, StyledFormSignIn } from "./styles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export interface Iprops {
  section: string;
}

export type SignInValues = {
  email: string;
  password: string;
};

export const SignInForm = ({ section }: Iprops) => {
  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<SignInValues>();

  const onsubmit: SubmitHandler<SignInValues> = ({ email, password }) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
    });
  };

  reset();
  return (
    <StyledFormSignIn onSubmit={handleSubmit(onsubmit)}>
      <Label>Email</Label>
      <Controller
        name="email"
        control={control}
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
      {errors.email && <p>{errors.email.message}</p>}
      <Label>Password</Label>
      <Controller
        name="password"
        control={control}
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
      {errors.password && <p>{errors.password.message}</p>}
      <ForgotPass>Forgot password ?</ForgotPass>
      <Button type="submit">SIGN IN</Button>
    </StyledFormSignIn>
  );
};
