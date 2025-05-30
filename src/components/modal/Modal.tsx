import { useEffect, useState } from "react";
import ModalReferenceType from "../../enum/modal/ModalReferenceType";
import ColourService from "../../services/ColourService";
import ModalService from "../../services/ModalService";
import ModalOptionsT from "../../types/components/ModalOptionsT";
import DialogContent from "./dialog/DialogContent";
import TutorialContent from "./tutorial/TutorialContent";

const Modal = () => {
  const [options, setOptions] = useState<ModalOptionsT | null>(null);

  useEffect(() => ModalService.SetListener(initialiseNewModal), []);

  const initialiseNewModal = (options: ModalOptionsT | null) => {
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
        {options.reference.type === ModalReferenceType.Tutorial && (
          <TutorialContent
            stage={options.reference.index}
            onClose={handleClose}
          />
        )}

        {options.reference.type === ModalReferenceType.Dialog && (
          <DialogContent
            index={options.reference.index}
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
