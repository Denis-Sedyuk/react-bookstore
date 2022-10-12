import { ArrowBackIcon } from "assets";
import { Color } from "ui";
import { ArrowButtonBackPage } from "./styles";

interface IProps {
  type: "button" | "submit" | "reset";
  onCLick: () => void;
}

export const ButtonBackPage = ({ onCLick, type }: IProps) => {
  return (
    <ArrowButtonBackPage onClick={onCLick} type={type} whileHover={{ scale: 1.4 }}>
      <ArrowBackIcon stroke={Color.Primary} />
    </ArrowButtonBackPage>
  );
};
