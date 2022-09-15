import React from "react";
import { SignButton, StyledTabBar } from "./styles";

interface Iprops {
  section: string;
  setSection: React.Dispatch<React.SetStateAction<string>>;
}

export const TabBar = ({ setSection }: Iprops) => {
  return (
    <StyledTabBar>
      <SignButton onClick={() => setSection("SignIn")}>SIGN IN</SignButton>
      <SignButton onClick={() => setSection("SignUp")}>SIGN UP</SignButton>
    </StyledTabBar>
  );
};
