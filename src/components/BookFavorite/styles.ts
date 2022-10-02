import { motion } from "framer-motion";
import styled from "styled-components";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/media";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  display: flex;
  max-height: 242px;
  width: 100%;
  column-gap: 32px;
  border: 1px solid ${Color.Primary};

  ${Media.Mobile} {
    flex-direction: column;
    min-height: 100vh;
  }
`;

export const BookPhotoBox = styled.div`
  display: flex;
  background-color: ${Color.Blue};
  align-items: center;
  max-width: 256px;

  ${Media.Mobile} {
    max-width: 100%;
    position: relative;
  }
`;

export const Photo = styled.img`
  height: 100%;
  width: 100%;
`;

export const BookInfo = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  position: relative;
  width: 100%;

  ${Media.Mobile} {
    row-gap: 20px;
    position: static;
  }
`;

export const BookTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  align-self: center;
  padding-right: 45px;

  ${Media.Mobile} {
    padding-right: 0;
  }
`;

export const Authors = styled.p`
  display: flex;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding-right: 45px;
  color: ${Color.Secondary};
  align-items: center;
  ${Media.Mobile} {
    padding-right: 0;
  }
`;

export const Price = styled.span`
  display: grid;
  grid-template-columns: 40% 60%;
  text-align: start;
  color: ${Color.Primary};
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  align-items: center;

  ${Media.Mobile} {
    display: flex;
    justify-content: space-between;
  }
`;

export const LikeBtn = styled(motion.div)`
  position: absolute;
  top: 112px;
  right: 20px;
  max-width: 56px;
  cursor: pointer;

  ${Media.Tablet} {
    top: 32px;
  }

  ${Media.Mobile} {
    top: 310px;
    right: 40px;
  }
`;
