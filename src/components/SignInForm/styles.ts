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

export const ForgotPass = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 32px;
  color: ${Color.Primary};
  text-align: start;
  margin-bottom: 30px;
`;

export const ErrorDesc = styled.p`
  color: ${Color.Red};
  font-size: 16px;
  font-weight: bold;
`;
