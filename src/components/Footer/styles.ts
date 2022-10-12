import styled from "styled-components";
import { Media, Color } from "ui";

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 72px;
  border-top: 1px solid ${Color.Gray};

  ${Media.Tablet} {
    padding: 0 40px;
  }

  ${Media.Mobile} {
    flex-direction: column;
  }
`;

export const Copyright = styled.p`
  color: ${Color.Secondary};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 17px 0;

  ${Media.Mobile} {
    padding: 12px 0;
  }
`;
