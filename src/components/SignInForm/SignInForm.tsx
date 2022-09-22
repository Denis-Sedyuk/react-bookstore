import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input, Button, LabelForm } from "../index";
import { ForgotPass, StyledFormSignIn } from "./styles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";

export interface Iprops {
  section: string;
}

export type SignInValues = {
  email: string;
  password: string;
};

export const SignInForm = ({ section }: Iprops) => {
  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<SignInValues>();

  const onsubmit: SubmitHandler<SignInValues> = ({ email, password }) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
    });
  };

  reset();
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
      {errors.email && <p>{errors.email.message}</p>}
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
      {errors.password && <p>{errors.password.message}</p>}
      <ForgotPass>
        <Link to={`/${ROUTE.RESET_PASSWORD}`}>Forgot password ?</Link>
      </ForgotPass>
      <Button type="submit">SIGN IN</Button>
    </StyledFormSignIn>
  );
};
