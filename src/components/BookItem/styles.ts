import styled from "styled-components";
import { Color } from "../../ui/colors";

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 352px;
  width: 100%;
`;

export const BookPhotoBox = styled.div`
  width: 100%;
  background-color: ${Color.Blue};
  margin-bottom: 20px;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
`;

export const BookTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-align: start;
  margin-bottom: 8px;
`;

export const BookSubTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};
  align-self: flex-start;
  margin-bottom: 40px;
`;

export const Price = styled.span`
  color: ${Color.Primary};
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-align: start;
`;
