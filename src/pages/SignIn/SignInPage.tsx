import React from "react";
import { SignInForm } from "../../components/SignInForm/SignInForm";
import { SignUpForm } from "../../components/SignUpForm/SignUpForm";
import { SignInContainer } from "./styles";

export const SignInPage = () => {
  return (
    <SignInContainer>
      <SignInForm />
      <SignUpForm />
    </SignInContainer>
  );
};
