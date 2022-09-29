import { useState } from "react";
import { SignInForm, SignUpForm, TabBar } from "../../components/index";
import { SignInContainer } from "./styles";

export const SignInPage = () => {
  const [section, setSection] = useState("SignIn");

  return (
    <SignInContainer>
      <TabBar section={section} setSection={setSection} />
      {section === "SignIn" ? <SignInForm section="SignIn" /> : <SignUpForm section="SignUp" />}
    </SignInContainer>
  );
};
