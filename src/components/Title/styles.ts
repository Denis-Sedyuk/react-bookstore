import styled from "styled-components";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/media";

export const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: 56px;
  line-height: 64px;
  color: ${Color.Primary};
  text-align: start;

  ${Media.Mobile} {
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
  }
`;
