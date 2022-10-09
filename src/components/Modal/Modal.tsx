import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes";
import { Portal } from "../index";
import { PortalTarget } from "../Portal/Portal";
import { Button, ModalBox, Title, Wrapper } from "./styles";

interface IProps {
  toggleModal: (value: boolean) => void;
}

export const Modal = ({ toggleModal }: IProps) => {
  const navigate = useNavigate();
  return (
    <Portal target={PortalTarget.MODAL}>
      <Wrapper>
        <ModalBox>
          <Title>You have successfully registered</Title>
          <Button
            type="button"
            onClick={() => {
              toggleModal(false);
              navigate(ROUTE.HOME);
            }}
          >
            Ok
          </Button>
        </ModalBox>
      </Wrapper>
    </Portal>
  );
};
