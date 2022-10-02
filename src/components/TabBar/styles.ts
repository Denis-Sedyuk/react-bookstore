import styled from "styled-components";
import { Color } from "../../ui/colors";

export const StyledTabBar = styled.div`
  display: flex;
  max-width: 544px;
  width: 100%;
  border: 1px solid ${Color.Gray};
  border-bottom: none;
`;

export const Button = styled.button<{ $isActiveSignIn?: boolean; $isActiveSignUp?: boolean }>`
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  width: 100%;
  color: ${Color.Secondary};
  color: ${({ $isActiveSignIn }) => $isActiveSignIn && `${Color.Primary}`};
  color: ${({ $isActiveSignUp }) => $isActiveSignUp && `${Color.Primary}`};
  background-color: ${Color.White};
  border: none;
  border-bottom: 1px solid ${Color.Gray};
  border-bottom: ${({ $isActiveSignIn }) => $isActiveSignIn && `1px solid${Color.Primary}`};
  border-bottom: ${({ $isActiveSignUp }) => $isActiveSignUp && `1px solid${Color.Primary}`};
  padding: 26px 0 22px;

  &:hover {
    color: ${Color.Primary};
  }
`;
