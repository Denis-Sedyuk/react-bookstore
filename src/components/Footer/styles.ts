import styled from "styled-components";
import { Color } from "../../ui/colors";

export const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 72px;
  border-top: 1px solid ${Color.Gray};
`;

export const CopyRight = styled.p`
  color: ${Color.Secondary};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding-block: 35px;
`;
