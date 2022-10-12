import { BurgerIcon } from "assets";
import { StyledBurgerButton } from "./styles";

interface IProps {
  type: "button" | "submit" | "reset";
  onClick: () => void;
}

export const BurgerButton = ({ onClick }: IProps) => {
  return (
    <StyledBurgerButton onClick={onClick} type="button" whileHover={{ scale: 1.2 }}>
      <BurgerIcon />
    </StyledBurgerButton>
  );
};
