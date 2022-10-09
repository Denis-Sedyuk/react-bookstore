import { StyledButton } from "./styles";
import { MouseEvent, ReactNode } from "react";

interface IProps {
  type: "button" | "submit" | "reset";
  children: ReactNode;
  onClick?: (() => void) | ((event: MouseEvent<HTMLElement>) => void);
}

export const Button = ({ type, children, onClick }: IProps) => {
  return (
    <StyledButton type={type} children={children} whileHover={{ scale: 1.1 }} onClick={onClick} />
  );
};
