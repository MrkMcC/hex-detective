import ModalOptionsT from "../types/components/ModalOptionsT";

let listener: (options: ModalOptionsT) => void;

const setListener = (func: (options: ModalOptionsT) => void) => {
  listener = func;
};

const showModal = (options: ModalOptionsT) => {
  listener(options);
};

const ModalService = {
  SetListener: setListener,
  ShowModal: showModal,
};

export default ModalService;
