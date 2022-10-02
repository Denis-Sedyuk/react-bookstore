import { motion } from "framer-motion";
import styled from "styled-components";
import { Color } from "../../ui/colors";

export const StyledButton = styled(motion.button)`
  background-color: ${Color.Primary};
  color: ${Color.White};
  border: none;
  border-radius: 0px 2px 2px 0px;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  padding: 16px 40px;
  cursor: pointer;
`;
