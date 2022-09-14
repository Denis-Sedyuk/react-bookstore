import styled from "styled-components";
import { Color } from "../../ui/colors";

export const StyledFormSignIn = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  min-width: 544px;
  border: 1px solid ${Color.Gray};
  padding: 26px 32px 40px;
  margin: 0 auto;
`;

export const TabBox = styled.div`
  display: flex;
  margin-bottom: 22px;
`;

export const SignButton = styled.button`
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  width: 100%;
  color: ${Color.Secondary};
  background-color: ${Color.White};
  border: none;
  border-bottom: 1px solid ${Color.Gray};

  :disabled {
    color: ${Color.Secondary};
  }

  :active {
    color: ${Color.Primary};
    border-bottom: 1px solid ${Color.Primary};
  }

  :hover {
    border-bottom: 2px solid ${Color.Primary};
    color: ${Color.Primary};
  }
`;

export const ForgotPass = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 32px;
  color: ${Color.Primary};
  text-align: start;
  margin-bottom: 30px;
`;
