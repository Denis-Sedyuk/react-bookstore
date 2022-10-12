import { motion } from "framer-motion";
import styled from "styled-components";
import { Color } from "ui";

export const StyledBurgerButton = styled(motion.button)`
  max-width: 24px;
  background-color: ${Color.White};
  color: ${Color.Primary};
  cursor: pointer;
`;
