import styled from "styled-components";
import { Color } from "../../ui/colors";

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
  margin-top: 10px;
  height: 500px;
`;

export const PreviewBook = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  max-width: 448px;
  max-height: 472px;
  border-top: 1px solid ${Color.Gray};
`;

export const Price = styled.span`
  grid-column: span 2;
  justify-self: start;
  ${Color.Primary};
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
`;

export const InfoAboutBookBox = styled.div`
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin-top: 24px;
`;

export const Edition = styled.span`
  justify-self: start;
  color: ${Color.Secondary};
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
`;

export const ProductInfo = styled.span`
  justify-self: end;
  color: ${Color.Primary};
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
`;

export const MoreDetails = styled.p`
  grid-column: span 2;
  justify-self: start;
  position: relative;
  color: ${Color.Primary};
  margin-top: 14px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const ButtonToCard = styled.button`
  grid-column: span 2;
  margin-top: 77px;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: ${Color.White};
  background: ${Color.Primary};
  padding: 18px 0 14px;
`;

export const TextPreviewBook = styled.p`
  grid-column: span 2;
  justify-self: center;
  margin-top: 40px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Primary};
`;

export const DescriptionList = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${Color.Gray};
`;

export const DescriptionItem = styled.button`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};
  background: ${Color.White};
  border: none;
  padding: 0 40px 24px;

  :disabled {
    color: ${Color.Primary};
    border-bottom: 1px solid ${Color.Primary};
  }

  :active {
    color: ${Color.Primary};
    border-bottom: 1px solid ${Color.Primary};
  }

  :hover {
    color: ${Color.Primary};
  }
`;

export const DescriptionBox = styled.div`
  display: flex;
  margin-top: 48px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: ${Color.Primary};
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
