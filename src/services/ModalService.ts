import { JSX } from "react";

let listener: (nodes: JSX.Element[]) => void;

const setListener = (func: (nodes: JSX.Element[]) => void) => {
  listener = func;
};

const showModal = (...pages: JSX.Element[]) => {
  listener(pages);
};

const ModalService = {
  SetListener: setListener,
  ShowModal: showModal,
};

export default ModalService;
