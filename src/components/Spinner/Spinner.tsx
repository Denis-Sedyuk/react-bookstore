import { StyledSpinner } from "./styles";
import { ThreeDots } from "react-loader-spinner";
import { Color } from "../../ui/colors";

export const Spinner = () => {
  return (
    <StyledSpinner>
      <ThreeDots width={50} height={20} color={Color.Primary_Light} />
    </StyledSpinner>
  );
};
