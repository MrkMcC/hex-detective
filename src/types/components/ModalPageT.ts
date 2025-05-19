import { ReactNode } from "react";
import HexDetectiveEvent from "../../enum/HexDetectiveEvent";

type DialogOptionT = {
  buttonText: string;
  event: HexDetectiveEvent;
};

type ModalPageT = {
  title: string;
  body: ReactNode;
  allowClose?: boolean;
  dialogOptions?: DialogOptionT[];
};

export default ModalPageT;
