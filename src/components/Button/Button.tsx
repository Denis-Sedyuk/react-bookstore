import { StyledButton } from "./styles";
import { MouseEvent } from "react";

interface IProps {
  type: "button" | "submit" | "reset";
  children: string;
  onClick?: (() => void) | ((event: MouseEvent<HTMLElement>) => void);
}

export const Button = ({ type, children, onClick }: IProps) => {
  return (
    <StyledButton type={type} children={children} whileHover={{ scale: 1.1 }} onClick={onClick} />
  );
};
