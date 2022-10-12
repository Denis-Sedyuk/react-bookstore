import styled from "styled-components";
import { Color } from "ui";

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.4);
`;

export const ModalBox = styled.div`
  width: 300px;
  height: 150px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Color.White};
`;

export const Title = styled.h4`
  margin: 25px 5px;
  text-align: center;
  font-weight: 400;
  font-size: 22px;
  line-height: 24px;
`;

export const Button = styled.button`
  background-color: ${Color.Blue};
  width: 100px;
  height: 30px;
  border-radius: 50px;
`;
