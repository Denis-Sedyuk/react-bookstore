import { StyledTitle } from "./styles";

interface IProps {
  children: string;
}

export const Title = ({ children }: IProps) => {
  return <StyledTitle children={children} />;
};
