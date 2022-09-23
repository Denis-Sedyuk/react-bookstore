import { ArrowBackIcon } from "../../assets/index";
import { ArrowButtonBackPage } from "./styles";

interface IProps {
  type: "button" | "submit" | "reset";
  onCLick: () => void;
}

export const ButtonBackPage = ({ onCLick, type }: IProps) => {
  return (
    <ArrowButtonBackPage onClick={onCLick} type={type}>
      <ArrowBackIcon />
    </ArrowButtonBackPage>
  );
};
