import styled from "styled-components";
import { Media } from "../../ui/media";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  margin: 0 auto;
  text-align: center;
  min-height: 100vh;
  max-width: 1120px;
  padding-inline: 40px;

  ${Media.Tablet} {
    padding: 0 40px;
  }

  ${Media.Mobile} {
    padding: 0 24px;
  }
`;
