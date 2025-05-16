import { useEffect, useState } from "react";
import ColourService from "../../services/ColourService";
import ModalService from "../../services/ModalService";
import ModalOptionsT from "../../types/components/ModalOptionsT";

interface Props {}

const Modal = ({}: Props) => {
  const [options, setOptions] = useState<ModalOptionsT | null>(null);
  const [pageIndex, setPageIndex] = useState(0);

  const multiPage = options && options.pages.length > 1;

  useEffect(() => ModalService.SetListener(initialiseNewModal));

  const initialiseNewModal = (options: ModalOptionsT) => {
    setOptions(options);
    setPageIndex(0);
  };

  const handleClose = () => {
    setOptions(null);
  };

  const handleNext = () => {
    setPageIndex((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setPageIndex((prev) => prev - 1);
  };

  return options !== null ? (
    <>
      <div className="modal-overlay"></div>
      <div
        className="modal ui-panel"
        style={ColourService.RandomBorderColourStyle()}
      >
        <button className="modal-btn-close large" onClick={handleClose}>
          X
        </button>
        <div className="modal-header">
          <h1 className="margin-0">
            {options.heading} - {options.pages[pageIndex].title}
          </h1>
        </div>
        <div className="modal-body">{options.pages[pageIndex].body}</div>
        <div className={`modal-footer flex-row justify-between`}>
          <div>
            {multiPage && (
              <button
                className="large"
                onClick={handlePrevious}
                disabled={pageIndex <= 0}
              >
                Previous
              </button>
            )}
          </div>
          {pageIndex + 1 < options.pages.length ? (
            <button className="large" onClick={handleNext}>
              Next
            </button>
          ) : (
            <button className="large" onClick={handleClose}>
              {multiPage ? "Close" : "OK"}
            </button>
          )}
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Modal;
