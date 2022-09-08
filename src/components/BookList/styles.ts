import styled from "styled-components";
import { Media } from "../../ui/media";

export const StyledBookList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  row-gap: 48px;
  column-gap: 32px;
  margin-top: 48px;

  ${Media.Tablet} {
    grid-template-columns: 1fr 1fr;
  }

  ${Media.Mobile} {
    grid-template-columns: 1fr;
  }
`;
