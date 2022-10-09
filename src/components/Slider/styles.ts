import styled from "styled-components";
import { Color, Media } from "../../ui";

export const StyledSlider = styled.div`
  max-width: 800px;
  /* ${Media.Tablet} {
    max-width: 700px;
  } */
  margin: 0 auto;

  .slick-slide {
    margin: 0 10px;
  }
  .slick-list {
    margin: 0 -10px;
  }
`;
