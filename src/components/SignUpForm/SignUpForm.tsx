import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { fetchSignUpUser, useAppDispatch, useAppSelector, getUser } from "store";
import { Button, LabelForm, Input, Spinner } from "components";
import { ErrorDesc, StyledForm } from "./styles";

export interface IProps {
  section: string;
  toggleModal: (value: boolean) => void;
}

export type SignUpValues = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignUpForm = ({ section, toggleModal }: IProps) => {
  const { error, isPendingAuth } = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm<SignUpValues>({
    defaultValues: { userName: "", email: "", password: "", confirmPassword: "" },
  });

  const onsubmit: SubmitHandler<SignUpValues> = (userInfo) => {
    dispatch(fetchSignUpUser(userInfo))
      .then(() => {
        toggleModal(true);
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
        rules={{
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters long",
          },
        }}
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
        rules={{
          required: "Confirm  your password",
          validate: (value: string) => {
            if (watch("password") !== value) {
              return "Password does not match";
            }
          },
        }}
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
      {}
      {isPendingAuth ? <Spinner /> : <Button type="submit">Sign up</Button>}
    </StyledForm>
  );
};
