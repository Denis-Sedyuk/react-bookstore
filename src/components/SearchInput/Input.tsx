import React, { HTMLInputTypeAttribute } from "react";
import { Control, Controller } from "react-hook-form";
import { NavBarValues } from "../Navbar/Navbar";
import { SignInValues } from "../SignInForm/SignInForm";
import { SignUpValues } from "../SignUpForm/SignUpForm";
import { SubscribeValues } from "../SubscribeForm/SubscribeForm";

import { StyledInput } from "./styles";

interface Iprops {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  name:
    | keyof SignInValues
    | keyof SignUpValues
    | keyof NavBarValues
    | keyof SubscribeValues;
  control: Control<
    SignInValues | SignUpValues | NavBarValues | SubscribeValues
  >;
}

export const Input = ({ placeholder, type, name, control }: Iprops) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <StyledInput
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            type={type}
          />
        );
      }}
    />
  );
};
