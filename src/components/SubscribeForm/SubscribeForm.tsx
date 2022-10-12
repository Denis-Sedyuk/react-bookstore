import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input } from "components";
import { InputForm, StyledForm, SubscribeButton, Subtitle, Title } from "./styles";

export type SubscribeValues = {
  email: string;
};

export const SubscribeForm = () => {
  const { handleSubmit, reset, control } = useForm<SubscribeValues>();

  const onsubmit: SubmitHandler<SubscribeValues> = (data) => {
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onsubmit)}>
      <Title>Subscribe to Newsletter</Title>
      <Subtitle>
        Be the first to know about new IT books, upcoming releases, exclusive offers and more.
      </Subtitle>
      <InputForm>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                name="email"
                placeholder="Your email"
                value={value}
                onChange={onChange}
                type="email"
              />
            );
          }}
        />
        <SubscribeButton type="submit">Subscribe</SubscribeButton>
      </InputForm>
    </StyledForm>
  );
};
