import { useEffect, useState } from "react";
import ColourService from "../../services/ColourService";
import ModalService from "../../services/ModalService";
import ModalOptionsT from "../../types/components/ModalOptionsT";
import TutorialContent from "./tutorial/TutorialContent";

interface Props {}

const Modal = ({}: Props) => {
  const [options, setOptions] = useState<ModalOptionsT | null>(null);

  useEffect(() => ModalService.SetListener(initialiseNewModal), []);

  const initialiseNewModal = (options: ModalOptionsT) => {
    setOptions(options);
  };

  const handleClose = () => {
    setOptions(null);
  };

  return options ? (
    <>
      <div className="modal-overlay"></div>
      <div
        className="modal ui-panel"
        style={ColourService.RandomBorderColourStyle()}
      >
        <button className="modal-btn-close large" onClick={handleClose}>
          X
        </button>
        {options.reference.type === "tutorial" && (
          <TutorialContent
            stage={options.reference.index}
            onClose={handleClose}
          />
        )}
      </div>
    </>
  ) : (
    <></>
  );
};

export default Modal;
