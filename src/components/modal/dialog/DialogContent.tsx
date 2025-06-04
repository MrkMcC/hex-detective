import HexDetectiveEvent from "../../../enum/HexDetectiveEvent";
import DialogIndex from "../../../enum/modal/DialogIndex";
import LocalisationService from "../../../services/LocalisationService";
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
          title: LocalisationService.GetLocalisedText("MODAL/QUIT/TITLE"),
          body: <BackToMenu />,
          allowClose: false,
          dialogOptions: [
            {
              buttonText: LocalisationService.GetLocalisedText(
                "MODAL/QUIT/BTN_CANCEL"
              ),
              event: HexDetectiveEvent.CloseModal,
            },
            {
              buttonText: LocalisationService.GetLocalisedText(
                "MODAL/QUIT/BTN_CONFIRM"
              ),
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
