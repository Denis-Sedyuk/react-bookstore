import styled from "styled-components";
import { Link } from "react-router-dom";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/media";
import { motion } from "framer-motion";

export const StyledHeader = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  max-height: 104px;
  margin-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${Color.Gray};

  ${Media.Tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const NavLinkIcon = styled(Link)`
  max-width: 149px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: end;
  gap: 15px;
`;

export const NavItem = styled(motion.li)`
  list-style: none;
`;
