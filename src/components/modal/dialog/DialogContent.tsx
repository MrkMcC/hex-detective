import HexDetectiveEvent from "../../../enum/HexDetectiveEvent";
import DialogIndex from "../../../enum/modal/DialogIndex";
import ModalPageT from "../../../types/components/ModalPageT";
import ModalContent from "../ModalContent";
import BackToMenu from "./BackToMenu";

interface Props {
  index: DialogIndex;
  onClose: () => void;
}

const DialogContent = ({ index, onClose }: Props) => {
  let pages: ModalPageT[];

  switch (index) {
    default:
      pages = [
        {
          title: "Back to Main Menu",
          body: <BackToMenu />,
          allowClose: false,
          dialogOptions: [
            {
              buttonText: "No, keep playing",
              event: HexDetectiveEvent.CloseModal,
            },
            {
              buttonText: "Yes, quit",
              event: HexDetectiveEvent.BackToMenu,
            },
          ],
        },
      ];
      break;
  }

  return <ModalContent onClose={onClose} pages={pages} />;
};

export default DialogContent;
