import styled from "styled-components";
import { Color } from "../../ui/colors";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 26px;
  min-width: 544px;
  border: 1px solid ${Color.Gray};
  padding: 26px 32px 40px;
  margin: 0 auto;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  text-align: start;
`;
