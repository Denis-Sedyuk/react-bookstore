import styled from "styled-components";
import { Media } from "../../ui/media";

export const HomePageContainer = styled.div`
  width: 100%;

  ${Media.Tablet} {
    padding: 0 40px;
  }

  ${Media.Mobile} {
    padding: 0 24px;
  }
`;
