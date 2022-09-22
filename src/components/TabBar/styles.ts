import styled from "styled-components";
import { Color } from "../../ui/colors";

export const StyledTabBar = styled.div`
  display: flex;
  min-width: 544px;
  border: 1px solid ${Color.Gray};
  border-bottom: none;
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  width: 100%;
  color: ${Color.Secondary};
  background-color: ${Color.White};
  border: none;
  border-bottom: 1px solid ${Color.Gray};
  padding: 26px 0 22px;

  &:disabled {
    color: ${Color.Secondary};
  }

  &:active {
    color: ${Color.Primary};
    border-bottom: 1px solid ${Color.Primary};
  }

  &:hover {
    border-bottom: 1px solid ${Color.Primary};
    color: ${Color.Primary};
  }
`;
