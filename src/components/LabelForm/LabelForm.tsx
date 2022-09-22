import { Label } from "./styles";

interface IProps {
  children: string;
}

export const LabelForm = ({ children }: IProps) => {
  return <Label children={children} />;
};
