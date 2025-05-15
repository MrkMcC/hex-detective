import { JSX, useEffect, useState } from "react";
import ColourService from "../../services/ColourService";
import ModalService from "../../services/ModalService";

interface Props {}

const Modal = ({}: Props) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pages, setPages] = useState<JSX.Element[]>([]);

  useEffect(() => ModalService.SetListener(initialiseNewModal));

  const initialiseNewModal = (modalPages: JSX.Element[]) => {
    setPages(modalPages);
    setPageIndex(0);
  };

  const handleClose = () => {
    setPages([]);
  };

  const handleNext = () => {
    setPageIndex((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setPageIndex((prev) => prev - 1);
  };

  return pages.length > 0 ? (
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
            How to Read Hex Colour Codes [{pageIndex + 1} / {pages.length}] -
            Pagetitle
          </h1>
        </div>
        <div className="modal-body">{pages[pageIndex]}</div>
        <div className="modal-footer flex-row justify-between">
          <div>
            {pageIndex > 0 && (
              <button className="large" onClick={handlePrevious}>
                Previous
              </button>
            )}
          </div>
          {pageIndex + 1 < pages.length ? (
            <button className="large" onClick={handleNext}>
              Next
            </button>
          ) : (
            <button className="large" onClick={handleClose}>
              Close
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
