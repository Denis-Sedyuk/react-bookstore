import { Button, StyledTabBar } from "./styles";

interface IProps {
  section: string;
  setSection: (value: string) => void;
}

export const TabBar = ({ setSection }: IProps) => {
  const handleSetSignIn = () => {
    setSection("SignIn");
  };

  const handleSetSignUp = () => {
    setSection("SignUp");
  };
  return (
    <StyledTabBar>
      <Button onClick={handleSetSignIn}>Sign in</Button>
      <Button onClick={handleSetSignUp}>Sign up</Button>
    </StyledTabBar>
  );
};
