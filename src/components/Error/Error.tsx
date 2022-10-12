import { ReactNode } from "react";
import { StyledError } from "./styles";

interface IProps {
  children?: ReactNode;
}

export const Error = ({ children }: IProps) => {
  return <StyledError />;
};
