import { useState } from "react";
import { Modal, SignInForm, SignUpForm, TabBar } from "components";
import { useToggle } from "hooks";
import { SignInContainer } from "./styles";

export const SignInPage = () => {
  const [isOpen, toggleModal] = useToggle(false);
  const [section, setSection] = useState("SignIn");

  return (
    <SignInContainer>
      <TabBar section={section} setSection={setSection} />
      {section === "SignIn" ? (
        <SignInForm section="SignIn" />
      ) : (
        <SignUpForm section="SignUp" toggleModal={toggleModal} />
      )}
      {isOpen && <Modal toggleModal={toggleModal} />}
    </SignInContainer>
  );
};
