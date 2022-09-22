import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/media";

export const StyledHeader = styled.form`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  align-items: center;
  max-height: 104px;
  margin-bottom: 72px;
  margin-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${Color.Gray};

  ${Media.Tablet} {
    padding: 0 40px;
  }

  ${Media.Mobile} {
    padding: 0 24px;
  }
`;

export const NavLinkIcon = styled(Link)`
  max-width: 149px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const NavItem = styled.li`
  list-style: none;
`;
