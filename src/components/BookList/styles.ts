import styled from "styled-components";
import { Media } from "../../ui/media";

export const StyledBookList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 48px;
  column-gap: 32px;
  min-height: 100vh;

  ${Media.Tablet} {
    grid-template-columns: 1fr 1fr;
  }

  ${Media.Mobile} {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;
