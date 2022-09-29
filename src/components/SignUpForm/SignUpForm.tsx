import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes";
import { fetchSignUpUser } from "../../store/feautures/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUser } from "../../store/selectors/userSelectors";
import { FirebaseError } from "../../utils/firebaseErrors";
import { Button, LabelForm, Input } from "../index";
import { ErrorDesc, StyledForm } from "./styles";

export interface IProps {
  section: string;
}

export type SignUpValues = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignUpForm = ({ section }: IProps) => {
  const { error } = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<SignUpValues>({
    defaultValues: { userName: "", email: "", password: "", confirmPassword: "" },
  });

  const onsubmit: SubmitHandler<SignUpValues> = (userInfo) => {
    setIsLoading(true);
    dispatch(fetchSignUpUser(userInfo))
      .then(() => {
        // navigate(ROUTE.HOME);
      })
      .finally(() => {
        reset();
      });
  };
  return (
    <StyledForm onSubmit={handleSubmit(onsubmit)}>
      <LabelForm>Name</LabelForm>
      <Controller
        control={control}
        name="userName"
        rules={{
          required: "Please enter your name",
        }}
        render={({ field: { onChange, value } }) => {
          return (
            <Input
              name={"userName"}
              placeholder={"Your name"}
              value={value}
              onChange={onChange}
              type="text"
            />
          );
        }}
      />
      {errors.userName && <ErrorDesc>{errors.userName.message}</ErrorDesc>}
      <LabelForm>Email</LabelForm>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => {
          return (
            <Input
              name={"email"}
              placeholder={"Your email"}
              value={value}
              onChange={onChange}
              type="email"
            />
          );
        }}
      />
      <LabelForm>Password</LabelForm>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => {
          return (
            <Input
              name={"password"}
              placeholder={"Your password"}
              value={value}
              onChange={onChange}
              type="password"
            />
          );
        }}
      />
      <LabelForm>Confirm password</LabelForm>
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, value } }) => {
          return (
            <Input
              name={"confirmPassword"}
              placeholder={"Confirm password"}
              value={value}
              onChange={onChange}
              type="password"
            />
          );
        }}
      />
      {error && <ErrorDesc>{error}</ErrorDesc>}
      <Button type="submit">{isLoading ? "Loading..." : "Sign up"}</Button>
    </StyledForm>
  );
};
