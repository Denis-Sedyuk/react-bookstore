import { motion } from "framer-motion";
import styled from "styled-components";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/media";

export const StyledBurgerMenu = styled(motion.form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 40px 50px 40px;
  background-color: ${Color.White};
  border: 1px solid ${Color.Primary};
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 45%;
  z-index: 50;

  ${Media.Mobile} {
    padding: 0 24px;
    width: 100%;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${Color.Gray};
  min-height: 108px;
`;

export const CloseButton = styled(motion.button)`
  max-width: 24px;
  max-height: 24px;
  background-color: ${Color.White};
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const NavItem = styled(motion.li)`
  list-style: none;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: ${Color.Primary};
`;
