import styled from "styled-components";
import { Color, Media } from "ui";

export const StyledSearchPage = styled.div`
  display: grid;
  grid-gap: 72px;
  margin-block: 72px;
  ${Media.Mobile} {
    grid-gap: 56px;
    margin-block: 56px;
  }
`;

export const SearchBooks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Info = styled.p`
  margin-top: 16px;
  font-weight: 400;
`;

export const BooksSearchWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 48px;
  column-gap: 32px;
  min-height: 100vh;
  ${Media.Tablet} {
    grid-template-columns: 1fr 1fr;
  }
  ${Media.Mobile} {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

export const StyledError = styled.div`
  text-align: center;
  margin-top: 20%;
`;

export const Message = styled.h3`
  align-self: center;
  margin-top: 10%; ;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  border-top: 1 solid ${Color.Gray};

  ${Media.Mobile} {
    margin-top: 37px;
  }
`;

export const ButtonArrow = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 67px;
  color: ${Color.Primary};
  background: none;
  border: none;
  cursor: pointer;
  :disabled {
    color: ${Color.Secondary};
  }
  ${Media.Mobile} {
    width: 60px;
  }
`;

export const PageList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  list-style: none;
`;

export const PageItem = styled.li``;

export const PageItemButton = styled.button<{ $isActive: boolean }>`
  color: ${({ $isActive }) => ($isActive ? `${Color.Primary}` : `${Color.Secondary}`)};

  background: none;
  border: none;
  cursor: pointer;
`;

export const MiddlePageList = styled.div`
  color: ${Color.Primary};
`;
