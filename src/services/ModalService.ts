import ModalOptionsT from "../types/components/ModalOptionsT";

let listener: (options: ModalOptionsT | null) => void;

const closeModal = () => {
  listener(null);
};

const setListener = (func: (options: ModalOptionsT | null) => void) => {
  listener = func;
};

const showModal = (options: ModalOptionsT) => {
  listener(options);
};

const ModalService = {
  CloseModal: closeModal,
  SetListener: setListener,
  ShowModal: showModal,
};

export default ModalService;
