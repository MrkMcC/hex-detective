import { ReactNode } from "react";

type ModalPageT = {
  title: string;
  body: ReactNode;
};

type ModalOptionsT = {
  heading: string;
  pages: ModalPageT[];
};

export default ModalOptionsT;
