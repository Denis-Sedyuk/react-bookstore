import React, { useState } from "react";
import { SignInForm } from "../../components/SignInForm/SignInForm";
import { SignUpForm } from "../../components/SignUpForm/SignUpForm";
import { TabBar } from "../../components/TabBar/TabBar";
import { SignInContainer } from "./styles";

export const SignInPage = () => {
  const [section, SetSection] = useState("SignIn");

  return (
    <SignInContainer>
      <TabBar section={section} setSection={SetSection} />
      {section === "SignIn" ? <SignInForm section="SignIn" /> : <SignUpForm section="SignUp" />}
    </SignInContainer>
  );
};
