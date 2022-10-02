import { StyledButton } from "./styles";

interface IProps {
  type: "button" | "submit" | "reset";
  children: string;
}

export const Button = ({ type, children }: IProps) => {
  return <StyledButton type={type} children={children} whileHover={{ scale: 1.1 }} />;
};
