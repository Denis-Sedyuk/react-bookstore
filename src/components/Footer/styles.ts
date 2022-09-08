import styled from "styled-components";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/media";

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 72px;
  border-top: 1px solid ${Color.Gray};

  ${Media.Mobile} {
    flex-direction: column;
  }
`;

export const Copyright = styled.p`
  color: ${Color.Secondary};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding-block: 35px;
`;
