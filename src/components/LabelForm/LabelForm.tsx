import { ReactNode } from "react";
import { Label } from "./styles";

interface IProps {
  children: ReactNode;
}

export const LabelForm = ({ children }: IProps) => {
  return <Label children={children} />;
};
