import styled from "styled-components";
import { Button } from "../../components/Button/Button";
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
  column-gap: 128px;
  margin-top: 10px;
`;

export const BookPhotoBox = styled.div`
  width: 100%;
  max-width: 544px;
  background-color: ${Color.Blue};
  margin-bottom: 20px;
`;

export const Photo = styled.img`
  width: 100%;
`;

export const PreviewBook = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 460px;
  border-top: 1px solid ${Color.Gray};
`;

export const CostStarBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Price = styled.span`
  grid-column: span 2;
  justify-self: start;
  ${Color.Primary};
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
`;

export const Rating = styled.p`
  font-size: 40px;
`;

export const InfoAboutBookBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
`;

export const BasicAboutBookBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const KeyAboutBook = styled.span`
  text-align: start;
  color: ${Color.Secondary};
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
`;

export const ValueAboutBook = styled.span`
  text-align: end;
  color: ${Color.Primary};
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
`;

export const MoreDetails = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  position: relative;
  max-width: 121px;
  color: ${Color.Primary};
  margin: 14px 0 60px;
  text-align: start;
`;

export const ButtonAddToCart = styled(Button)`
  margin-top: 77px;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  padding: 18px 0 14px;
  background-color: ${Color.Primary};
  color: ${Color.White};
`;

export const TextPreviewBook = styled.a`
  margin-top: 40px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Primary};
`;

export const DescriptionList = styled.div`
  display: flex;
  width: 100%;
  margin-top: 72px;
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
  }

  :active {
    color: ${Color.Primary};
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
