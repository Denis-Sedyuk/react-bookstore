import styled from "styled-components";
import { Color } from "../../ui/colors";

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: start;
  row-gap: 15px;
  max-width: 352px;
  width: 100%;
  min-height: 100%;
  justify-content: space-between;
`;

export const BookPhotoBox = styled.div`
  display: flex;
  width: 100%;
  background-color: ${Color.Blue};
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BookTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* text-align: start; */
`;

export const BookSubTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};
  /* align-self: flex-start; */
`;

export const Price = styled.span`
  color: ${Color.Primary};
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* text-align: start; */
`;
