import styled from "styled-components";
import { Color } from "../../ui/colors";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  max-width: 544px;
  width: 100%;
  border: 1px solid ${Color.Gray};
  padding: 26px 32px 40px;
  margin: 0 auto;
`;

export const ErrorDesc = styled.p`
  color: ${Color.Red};
  font-size: 16px;
  font-weight: bold;
`;
