import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { NavBarValues } from "../Navbar/Navbar";
import { SignInValues } from "../SignInForm/SignInForm";
import { SignUpValues } from "../SignUpForm/SignUpForm";
import { SubscribeValues } from "../SubscribeForm/SubscribeForm";
import { StyledInput } from "./styles";

interface IProps {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  name: keyof SignInValues | keyof SignUpValues | keyof NavBarValues | keyof SubscribeValues;
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeholder, type, name, onChange }: IProps) => {
  return (
    <StyledInput
      placeholder={placeholder}
      type={type}
      name={name}
      onChange={onChange}
      whileHover={{ scale: 1.1 }}
    />
  );
};
