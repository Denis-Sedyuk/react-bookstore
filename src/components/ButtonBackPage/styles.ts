import { motion } from "framer-motion";
import styled from "styled-components";
import { Color } from "ui";

export const ArrowButtonBackPage = styled(motion.button)`
  max-width: 14px;
  background-color: ${Color.White};
  color: ${Color.Primary};
  border: none;
  cursor: pointer;
`;
