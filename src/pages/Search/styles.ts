import styled from "styled-components";
import { Color } from "../../ui/colors";

export const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResultFound = styled.p`
  margin-top: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: start;
  color: ${Color.Secondary};
`;
