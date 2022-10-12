import { motion } from "framer-motion";
import styled from "styled-components";
import { Color } from "ui";

export const StyledButton = styled(motion.button)`
  border: 1px solid black;
  background-color: ${Color.White};
  color: ${Color.Primary};
  border-radius: 50px;
  padding: 4px 10px;
  cursor: pointer;
`;
