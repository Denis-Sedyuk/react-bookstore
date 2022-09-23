import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button, LabelForm, Input } from "../index";
import { StyledForm } from "./styles";

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
  const { handleSubmit, reset, control } = useForm<SignUpValues>();

  const onsubmit: SubmitHandler<SignUpValues> = ({ email, password }) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
    });
  };

  // //  Тут нужно записать данные в store
  reset();
  return (
    <StyledForm onSubmit={handleSubmit(onsubmit)}>
      <LabelForm>Name</LabelForm>
      <Controller
        control={control}
        name="userName"
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
      <Button type="submit">Sign up</Button>
    </StyledForm>
  );
};
