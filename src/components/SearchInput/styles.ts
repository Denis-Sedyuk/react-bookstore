import styled from "styled-components";
import { Color } from "ui";

export const SearchArea = styled.input`
  width: 100%;
  min-height: 56px;
  background: ${Color.Light};
  border: 1px solid ${Color.Gray};
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  padding-left: 20px;
`;
