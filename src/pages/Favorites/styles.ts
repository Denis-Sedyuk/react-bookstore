import styled from "styled-components";
import { Media } from "ui";

export const FavoritePageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  text-align: start;
  padding-top: 70px;

  ${Media.Mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const FavoritesBookBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;
