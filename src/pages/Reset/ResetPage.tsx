import { Controller, useForm } from "react-hook-form";
import { LabelForm, Input, Button } from "components";
import { FormStyled, Title } from "./styles";

export const ResetPage = () => {
  const { control } = useForm();

  return (
    <FormStyled>
      <Title>Reset password</Title>
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
      <Button type="submit">Reset</Button>
    </FormStyled>
  );
};
