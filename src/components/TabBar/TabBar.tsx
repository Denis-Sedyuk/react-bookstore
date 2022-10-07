import { useToggle } from "../../hooks/index";
import { Button, StyledTabBar } from "./styles";

interface IProps {
  section: string;
  setSection: (value: string) => void;
}

export const TabBar = ({ setSection }: IProps) => {
  const [isActiveSignIn, toggleIsActiveSignIn] = useToggle(true);
  const [isActiveSignUp, toggleIsActiveSignUp] = useToggle(false);

  const handleSetSignIn = () => {
    setSection("SignIn");
    toggleIsActiveSignIn();
    toggleIsActiveSignUp();
  };

  const handleSetSignUp = () => {
    setSection("SignUp");
    toggleIsActiveSignIn();
    toggleIsActiveSignUp();
  };

  return (
    <StyledTabBar>
      <Button onClick={handleSetSignIn} $isActiveSignIn={isActiveSignIn}>
        Sign in
      </Button>
      <Button onClick={handleSetSignUp} $isActiveSignUp={isActiveSignUp}>
        Sign up
      </Button>
    </StyledTabBar>
  );
};
