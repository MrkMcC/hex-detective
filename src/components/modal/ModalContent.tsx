import { useState } from "react";
import HexDetectiveEvent from "../../enum/HexDetectiveEvent";
import EventService from "../../services/EventService";
import ModalPageT from "../../types/components/ModalPageT";

interface Props {
  heading: string;
  pages: ModalPageT[];
  onClose: () => void;
}

const ModalContent = ({ heading, pages, onClose }: Props) => {
  const [pageIndex, setPageIndex] = useState(0);

  const currentPage = pages[pageIndex];
  const multiPage = pages.length > 1;
  const isLastPage = pageIndex === pages.length - 1;

  const handleNext = () => {
    setPageIndex((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setPageIndex((prev) => prev - 1);
  };

  const handleDialogOption = (event: HexDetectiveEvent) => {
    EventService.Emit(event);
    onClose();
  };

  const dialogButtonElements = currentPage.dialogOptions?.map((option) => (
    <button
      key={option.event}
      className="large"
      onClick={() => handleDialogOption(option.event)}
    >
      {option.buttonText}
    </button>
  ));

  return (
    <>
      {currentPage.allowClose !== false && (
        <button className="modal-btn-close large" onClick={onClose}>
          X
        </button>
      )}
      <div className="modal-header text-center">
        <h1 className="margin-0">
          {heading}
          {!!heading && !!currentPage.title && " - "}
          {currentPage.title}
        </h1>
      </div>
      <div className="modal-body">{currentPage.body}</div>
      <div className={`modal-footer flex-row justify-between`}>
        <div>
          {multiPage && (
            <button
              className="large"
              onClick={handlePrevious}
              disabled={pageIndex <= 0}
            >
              Previous Page
            </button>
          )}
        </div>
        {dialogButtonElements}
        {isLastPage && currentPage.allowClose !== false && (
          <button className="large" onClick={onClose}>
            {multiPage ? "Close" : "OK"}
          </button>
        )}
        {!isLastPage && (
          <button className="large" onClick={handleNext}>
            Next Page
          </button>
        )}
      </div>
    </>
  );
};

export default ModalContent;
