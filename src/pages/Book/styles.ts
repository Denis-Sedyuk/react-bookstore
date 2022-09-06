import styled from "styled-components";

export const BookPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 100%;
`;

export const BookInfoBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  border: 1px solid black;
  height: 400px;
`;

export const SocialNetworksList = styled.ul`
  margin-top: 50px;
  display: flex;
  column-gap: 25px;
`;

export const SocialNetworksItem = styled.li`
  list-style: none;
`;

export const SimilarBookBox = styled.div`
  margin-top: 72px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 48px;
  align-items: center;
  justify-content: center;
`;

export const SimilarTitle = styled.h3`
  grid-column: span 2;
  text-align: start;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
`;

export const ArrowsBox = styled.div`
  display: flex;
  justify-self: end;
  gap: 20px;
`;
