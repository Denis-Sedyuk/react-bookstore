import { motion } from "framer-motion";
import styled from "styled-components";
import { MinusIcon } from "../../assets";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/media";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  margin-bottom: 48px;
  width: 100%;
  column-gap: 20px;
  border: 1px solid ${Color.Primary};
  position: relative;

  ${Media.Tablet} {
    column-gap: 12px;
  }

  ${Media.Mobile} {
    flex-direction: column;
  }
`;

export const BookPhotoBox = styled.div`
  display: flex;
  max-width: 256px;
  max-height: 192px;
  background-color: ${Color.Blue};
  align-items: center;

  ${Media.Mobile} {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Photo = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 100%;
  max-width: 550px;
  padding-top: 24px;
`;

export const BookTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  padding-bottom: 10px;
`;

export const Authors = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 5px;
  color: ${Color.Secondary};
  align-items: center;
`;

export const Amount = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const AmountTotal = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${Color.Primary};
`;

export const AmountButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 5px;
  cursor: pointer;
  background: none;
  border: none;
  align-self: center;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;

  ${Media.Tablet} {
    /* justify-content: space-between; */
  }
`;

export const Close = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  max-width: 56px;
  cursor: pointer;
  position: absolute;
  top: 4px;
  right: 4px;

  ${Media.Tablet} {
    align-self: end;
  }
`;

export const Price = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  margin-right: 10px;

  ${Media.Mobile} {
    position: absolute;
    bottom: 0;
    right: 10px;
  }
`;
