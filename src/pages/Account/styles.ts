import styled from "styled-components";
import { Color } from "../../ui/colors";

export const StyledAccountContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;

export const UserSubTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${Color.Primary};
`;
