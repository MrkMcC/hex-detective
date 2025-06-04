import { useState } from "react";
import HexDetectiveEvent from "../../enum/HexDetectiveEvent";
import EventService from "../../services/EventService";
import ModalPageT from "../../types/components/ModalPageT";
import Localise from "../common/Localise";
import ModalButton from "./common/ModalButton";

interface Props {
  heading?: string;
  pages: ModalPageT[];
  onClose: () => void;
}

const ModalContent = ({ heading = "", pages, onClose }: Props) => {
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
      <div className={`modal-footer`}>
        {multiPage && (
          <ModalButton onClick={handlePrevious} disabled={pageIndex <= 0}>
            <Localise>MODAL/BTN_PAGE_PREV</Localise>
          </ModalButton>
        )}
        {dialogButtonElements}
        {isLastPage && currentPage.allowClose !== false && (
          <ModalButton onClick={onClose}>
            {multiPage ? (
              <Localise>MODAL/BTN_CLOSE</Localise>
            ) : (
              <Localise>MODAL/BTN_OK</Localise>
            )}
          </ModalButton>
        )}
        {!isLastPage && (
          <ModalButton onClick={handleNext}>
            <Localise>MODAL/BTN_PAGE_NEXT</Localise>
          </ModalButton>
        )}
      </div>
    </>
  );
};

export default ModalContent;
