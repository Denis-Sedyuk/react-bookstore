import styled from "styled-components";
import { Color } from "../../ui/colors";

export const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 70px;
`;

export const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  max-width: 256px;
  width: 100%;
`;

export const TotalDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 256px;
  padding: 5px 5px;
`;

export const Sum = styled.p`
  text-align: start;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};
`;

export const Cost = styled.p`
  text-align: end;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Primary};
`;

export const Total = styled.h4`
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  margin: 20px 0;
  color: ${Color.Primary};
`;
