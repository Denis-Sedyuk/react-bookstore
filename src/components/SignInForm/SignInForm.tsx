import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input, Button, LabelForm, Spinner } from "../index";
import { ErrorDesc, ForgotPass, StyledFormSignIn } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUser } from "../../store/selectors/userSelectors";
import { fetchSignInUser } from "../../store/feautures/userSlice";

export interface IProps {
  section: string;
}

export type SignInValues = {
  email: string;
  password: string;
};

export const SignInForm = ({ section }: IProps) => {
  const { error } = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<SignInValues>({
    defaultValues: { email: "", password: "" },
  });

  const onsubmit: SubmitHandler<SignInValues> = (userInfo) => {
    setIsLoading(false);
    dispatch(fetchSignInUser(userInfo))
      .then(() => {
        // navigate(ROUTE.HOME);
      })
      .finally(() => {
        reset();
      });
  };

  return (
    <StyledFormSignIn onSubmit={handleSubmit(onsubmit)}>
      <LabelForm>Email</LabelForm>
      <Controller
        name="email"
        control={control}
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
      {errors.email && <ErrorDesc>{errors.email.message}</ErrorDesc>}
      <LabelForm>Password</LabelForm>
      <Controller
        name="password"
        control={control}
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
      {errors.password && <ErrorDesc>{errors.password.message}</ErrorDesc>}
      <ForgotPass>
        <Link to={`/${ROUTE.RESET_PASSWORD}`}>Forgot password ?</Link>
      </ForgotPass>
      {error && <ErrorDesc>{error}</ErrorDesc>}
      <Button type="submit">{isLoading ? "Loading..." : "Sign in"}</Button>
    </StyledFormSignIn>
  );
};
