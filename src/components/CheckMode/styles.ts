import styled from "styled-components";
import { Color } from "../../ui/colors";

export const StyledCheckModeButton = styled.div`
  display: flex;
  width: 100%;
  margin-top: 72px;
  border-bottom: 1px solid ${Color.Gray};
`;

export const Button = styled.button`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};
  background: ${Color.White};
  border: none;
  padding: 0 40px 24px;

  :disabled {
    color: ${Color.Primary};
  }

  :active {
    color: ${Color.Primary};
  }

  :hover {
    color: ${Color.Primary};
  }
`;
