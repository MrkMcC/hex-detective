import TutorialStage from "../../../enum/TutorialStage";
import LogService from "../../../services/LogService";
import ModalPageT from "../../../types/components/ModalPageT";
import ModalContent from "../ModalContent";
import TutBasScoring from "./basics/TutBas";
import TutBasRuleOut from "./basics/TutBasRuleOut";
import TutColBrightness from "./colour-mixing/TutColBrightness";
import TutColComplementary1 from "./colour-mixing/TutColComplementary1";
import TutColComplementary2 from "./colour-mixing/TutColComplementary2";
import TutColImbalance1 from "./colour-mixing/TutColImbalance1";
import TutColImbalance2 from "./colour-mixing/TutColImbalance2";
import TutColPercNotation from "./colour-mixing/TutColPercNotation";
import TutColSaturation1 from "./colour-mixing/TutColSaturation1";
import TutColSaturation2 from "./colour-mixing/TutColSaturation2";

interface Props {
  stage: TutorialStage;
  onClose: () => void;
}

const LOG_SUBJECT = "TutorialPage";
const HEADING_BASICS = "";
const HEADING_COLOURS = "";

const TutorialContent = ({ stage, onClose }: Props) => {
  let heading: string;
  let pages: ModalPageT[];

  switch (stage) {
    case TutorialStage.Basics_Scoring:
      heading = HEADING_BASICS;
      pages = [{ title: "How to Score", body: <TutBasScoring /> }];
      break;
    case TutorialStage.Basics_SelectionMode:
      heading = HEADING_BASICS;
      pages = [{ title: "Ruling Out", body: <TutBasRuleOut /> }];
      break;
    case TutorialStage.Colours_Brightness:
      heading = HEADING_COLOURS;
      pages = [{ title: "Brightness", body: <TutColBrightness /> }];
      break;
    case TutorialStage.Colours_Complementary:
      heading = HEADING_COLOURS;
      pages = [
        { title: "Mixing Colours (1/2)", body: <TutColComplementary1 /> },
        {
          title: "Mixing Colours (2/2)",
          body: <TutColComplementary2 />,
        },
      ];
      break;
    case TutorialStage.Colours_PercNotation:
      heading = HEADING_COLOURS;
      pages = [{ title: "Percentage Notation", body: <TutColPercNotation /> }];
      break;
    case TutorialStage.Colours_Saturation:
      heading = HEADING_COLOURS;
      pages = [
        { title: "Saturation (1/2)", body: <TutColSaturation1 /> },
        { title: "Saturation (2/2)", body: <TutColSaturation2 /> },
      ];
      break;
    case TutorialStage.Colours_Imbalance:
      heading = HEADING_COLOURS;
      pages = [
        {
          title: "Colour Imbalance (1/2)",
          body: <TutColImbalance1 />,
        },
        { title: "Colour Imbalance (2/2)", body: <TutColImbalance2 /> },
      ];
      break;
    case TutorialStage.Colours_Exam:
      heading = HEADING_COLOURS;
    default:
      throw LogService.Error(
        LOG_SUBJECT,
        `NOT IMPLEMENTED: TutorialPage for stage ${stage}.`
      );
  }

  return <ModalContent heading={heading} onClose={onClose} pages={pages} />;
};

export default TutorialContent;
