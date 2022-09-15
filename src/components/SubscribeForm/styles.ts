import styled from "styled-components";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/media";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${Color.Purple};
  margin-top: 72px;
  padding-inline: 64px;
  padding-block: 56px;

  ${Media.Tablet} {
    margin: 0 40px;
  }

  ${Media.Mobile} {
    margin: 0 24px;
  }
`;

export const Title = styled.h3`
  text-align: start;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: ${Color.Primary};
`;

export const Subtitle = styled.p`
  text-align: start;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: ${Color.Secondary};
  margin-bottom: 32px;
`;

export const InputForm = styled.div`
  width: 100%;
  display: flex;
`;

export const SubscribeButton = styled.button`
  border: none;
  border-radius: 0px 2px 2px 0px;
  background-color: ${Color.Primary};
  padding: 16px 40px;
  color: ${Color.White};
  min-width: 147px;
`;
