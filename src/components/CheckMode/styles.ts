import { motion } from "framer-motion";
import styled from "styled-components";
import { Color } from "ui";

export const StyledCheckModeButton = styled.div`
  display: flex;
  width: 100%;
  margin-top: 72px;
  border-bottom: 1px solid ${Color.Gray};
`;

export const Button = styled(motion.button)`
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: ${Color.Secondary};
  background: ${Color.White};
  border: none;
  padding: 0 40px 24px;
`;
