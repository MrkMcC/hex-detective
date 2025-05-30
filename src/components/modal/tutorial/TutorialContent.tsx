import HexDetectiveEvent from "../../../enum/HexDetectiveEvent";
import TutorialStage from "../../../enum/TutorialStage";
import ModalPageT from "../../../types/components/ModalPageT";
import ModalContent from "../ModalContent";
import TutBasScoring from "./basics/TutBas";
import TutBasRuleOut from "./basics/TutBasRuleOut";
import TutColBrightness from "./colour-mixing/TutColBrightness";
import TutColComplementary1 from "./colour-mixing/TutColComplementary1";
import TutColComplementary2 from "./colour-mixing/TutColComplementary2";
import TutColExam1 from "./colour-mixing/TutColExam1";
import TutColExam2 from "./colour-mixing/TutColExam2";
import TutColImbalance1 from "./colour-mixing/TutColImbalance1";
import TutColImbalance2 from "./colour-mixing/TutColImbalance2";
import TutColPercNotation from "./colour-mixing/TutColPercNotation";
import TutColSaturation1 from "./colour-mixing/TutColSaturation1";
import TutColSaturation2 from "./colour-mixing/TutColSaturation2";
import TutDone1 from "./done/TutDone1";
import TutHexChangingScale1 from "./hex/TutHexChangingScale1";
import TutHexChangingScale2 from "./hex/TutHexChangingScale2";
import TutHexDoubleDigits1 from "./hex/TutHexDoubleDigits1";
import TutHexDoubleDigits2 from "./hex/TutHexDoubleDigits2";
import TutHexExam1 from "./hex/TutHexExam1";
import TutHexLetters1 from "./hex/TutHexLetters";
import TutHexLetters2 from "./hex/TutHexLetters2";

interface Props {
  stage: TutorialStage;
  onClose: () => void;
}

const HEADING_BASICS = "";
const HEADING_COLOURS = "";
const HEADING_HEX = "";
const HEADING_DONE = "";

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
      pages = [
        { title: "Conclusion (1/2)", body: <TutColExam1 /> },
        { title: "Conclusion (2/2)", body: <TutColExam2 /> },
      ];
      break;
    case TutorialStage.Hex_ChangingScale:
      heading = HEADING_HEX;
      pages = [
        { title: "Changing the Scale (1/2)", body: <TutHexChangingScale1 /> },
        { title: "Changing the Scale (2/2)", body: <TutHexChangingScale2 /> },
      ];
      break;
    case TutorialStage.Hex_Letters:
      heading = HEADING_HEX;
      pages = [
        { title: "Counting with Letters (1/2)", body: <TutHexLetters1 /> },
        { title: "Counting with Letters (2/2)", body: <TutHexLetters2 /> },
      ];
      break;
    case TutorialStage.Hex_DoubleDigits:
      heading = HEADING_HEX;
      pages = [
        { title: "Almost Done (1/2)", body: <TutHexDoubleDigits1 /> },
        { title: "Almost Done (2/2)", body: <TutHexDoubleDigits2 /> },
      ];
      break;
    case TutorialStage.Hex_Exam:
      heading = HEADING_HEX;
      pages = [{ title: "The Finish Line", body: <TutHexExam1 /> }];
      break;
    default:
      heading = HEADING_DONE;
      pages = [
        {
          title: "That's all",
          body: <TutDone1 />,
          allowClose: false,
          dialogOptions: [
            {
              buttonText: "Bye!",
              event: HexDetectiveEvent.BackToMenu,
            },
          ],
        },
      ];
      break;
  }

  return <ModalContent heading={heading} onClose={onClose} pages={pages} />;
};

export default TutorialContent;
