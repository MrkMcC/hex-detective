import TutorialStage from "../../../enum/TutorialStage";
import LogService from "../../../services/LogService";
import ModalPageT from "../../../types/components/ModalPageT";
import ModalContent from "../ModalContent";
import TutBasScoring from "./basics/TutBas";
import TutBasRuleOut from "./basics/TutBasRuleOut";
import TutColBrightness from "./colour-mixing/TutColBrightness";
import TutColComplementary1 from "./colour-mixing/TutColComplementary1";
import TutColComplementary2 from "./colour-mixing/TutColComplementary2";
import TutColDominance1 from "./colour-mixing/TutColDominance1";
import TutColDominance2 from "./colour-mixing/TutColDominance2";
import TutorialColoursPage4 from "./colour-mixing/TutorialColoursPage4";
import TutorialColoursPage5 from "./colour-mixing/TutorialColoursPage5";

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
    case TutorialStage.Colours_Dominance:
      heading = HEADING_COLOURS;
      pages = [
        {
          title: "Colour Imbalance (1/2)",
          body: <TutColDominance1 />,
        },
        { title: "Colour Imbalance (2/2)", body: <TutColDominance2 /> },
      ];
      break;
    case TutorialStage.Colours_Saturation:
      heading = HEADING_COLOURS;
      pages = [{ title: "", body: <TutorialColoursPage4 /> }];
      break;
    case TutorialStage.Colours_Exam:
      heading = HEADING_COLOURS;
      pages = [{ title: "", body: <TutorialColoursPage5 /> }];
      break;
    default:
      throw LogService.Error(
        LOG_SUBJECT,
        `NOT IMPLEMENTED: TutorialPage for stage ${stage}.`
      );
  }

  return <ModalContent heading={heading} onClose={onClose} pages={pages} />;
};

export default TutorialContent;
