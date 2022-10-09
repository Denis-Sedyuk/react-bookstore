import styled from "styled-components";
import { Media } from "../../ui";
import { Color } from "../../ui/colors";

export const StyledAccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  width: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
`;

export const UserSubTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${Color.Primary};
  margin-bottom: 20px;
`;

export const UserInfo = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${Color.Primary};
`;
