import { ReactNode } from "react";
import ReactDOM from "react-dom";

export enum PortalTarget {
  ROOT = "root",
  MODAL = "modal",
}

interface IPortal {
  target: PortalTarget;
  children: ReactNode;
}

export const Portal = ({ target, children }: IPortal) => {
  const root = document.getElementById(target) as HTMLElement;

  return ReactDOM.createPortal(children, root);
};
