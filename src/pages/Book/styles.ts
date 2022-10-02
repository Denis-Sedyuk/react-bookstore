import styled from "styled-components";
import { Button } from "../../components/index";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/media";

export const BookPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 72px 40px 0;

  ${Media.Mobile} {
    padding: 60px 24px 0;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  text-align: start;
  flex-direction: column;
  width: 100%;
`;

export const BookInfoBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 128px;
  margin-top: 10px;
  width: 100%;

  ${Media.Tablet} {
    grid-template-columns: 1fr;
    place-items: center;
    row-gap: 48px;
  }
`;

export const BookPhotoBox = styled.div`
  width: 100%;
  background-color: ${Color.Blue};
  margin-bottom: 20px;
  position: relative;
`;

export const Photo = styled.img`
  width: 100%;
`;

export const LikeBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;

export const PreviewBook = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid ${Color.Gray};
`;

export const CostStarBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const Price = styled.span`
  grid-column: span 2;
  justify-self: start;
  ${Color.Primary};
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
`;

export const RatingStars = styled.div`
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

export const MoreDetails = styled.button`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  position: relative;
  max-width: 121px;
  background: ${Color.White};
  color: ${Color.Primary};
  margin: 14px 0 60px;
  text-align: start;
  cursor: pointer;
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
  place-self: center;
  margin-top: 40px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  max-width: 120px;
  color: ${Color.Primary};
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  column-gap: 32px;
  row-gap: 48px;
  margin-top: 72px;
`;

export const SimilarTitle = styled.h3`
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  text-align: start;
  grid-column: span 2;
`;

export const ArrowsBox = styled.div`
  display: flex;
  justify-self: end;
  gap: 20px;
`;
