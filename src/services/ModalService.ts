import TutorialBasicsPage1 from "../components/modal/tutorial/basics/TutorialBasicsPage1";
import ModalOptionsT from "../types/components/ModalOptionsT";

let listener: (options: ModalOptionsT) => void;

const setListener = (func: (options: ModalOptionsT) => void) => {
  listener = func;
};

const showModal = (options: ModalOptionsT) => {
  listener(options);
};

const showTutorial = (stage: number) => {
  switch (stage) {
    case 1:
      showModal({
        heading: "Basics",
        pages: [{ title: "How to Score", body: TutorialBasicsPage1({}) }],
      });
      break;
    case 2:
      showModal({
        heading: "Basics",
        pages: [{ title: "Ruling Out", body: TutorialBasicsPage1({}) }],
      });
      break;
    default:
      throw `NOT IMPLEMENTED: TutorialPage for stage ${stage}.`;
  }
};

const ModalService = {
  SetListener: setListener,
  ShowModal: showModal,
  ShowTutorial: showTutorial,
};

export default ModalService;
