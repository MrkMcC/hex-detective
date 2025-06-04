import HexDetectiveEvent from "../../../enum/HexDetectiveEvent";
import TutorialStage from "../../../enum/TutorialStage";
import LocalisationService from "../../../services/LocalisationService";
import ModalPageT from "../../../types/components/ModalPageT";
import Localise from "../../common/Localise";
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
      pages = [
        {
          title: <Localise>TUTORIAL/BASICS/SCORING/PAGE_1/TITLE</Localise>,
          body: <TutBasScoring />,
        },
      ];
      break;
    case TutorialStage.Basics_SelectionMode:
      heading = HEADING_BASICS;
      pages = [
        {
          title: <Localise>TUTORIAL/BASICS/RULEOUT/PAGE_1/TITLE</Localise>,
          body: <TutBasRuleOut />,
        },
      ];
      break;

    case TutorialStage.Colours_Brightness:
      heading = HEADING_COLOURS;
      pages = [
        {
          title: <Localise>TUTORIAL/COLOURS/BRIGHTNESS/PAGE_1/TITLE</Localise>,
          body: <TutColBrightness />,
        },
      ];
      break;
    case TutorialStage.Colours_Complementary:
      heading = HEADING_COLOURS;
      pages = [
        {
          title: (
            <Localise>TUTORIAL/COLOURS/COMPLEMENTARY/PAGE_1/TITLE</Localise>
          ),
          body: <TutColComplementary1 />,
        },
        {
          title: (
            <Localise>TUTORIAL/COLOURS/COMPLEMENTARY/PAGE_2/TITLE</Localise>
          ),
          body: <TutColComplementary2 />,
        },
      ];
      break;
    case TutorialStage.Colours_PercNotation:
      heading = HEADING_COLOURS;
      pages = [
        {
          title: (
            <Localise>TUTORIAL/COLOURS/PERCNOTATION/PAGE_1/TITLE</Localise>
          ),
          body: <TutColPercNotation />,
        },
      ];
      break;
    case TutorialStage.Colours_Saturation:
      heading = HEADING_COLOURS;
      pages = [
        {
          title: <Localise>TUTORIAL/COLOURS/SATURATION/PAGE_1/TITLE</Localise>,
          body: <TutColSaturation1 />,
        },
        {
          title: <Localise>TUTORIAL/COLOURS/SATURATION/PAGE_2/TITLE</Localise>,
          body: <TutColSaturation2 />,
        },
      ];
      break;
    case TutorialStage.Colours_Imbalance:
      heading = HEADING_COLOURS;
      pages = [
        {
          title: <Localise>TUTORIAL/COLOURS/IMBALANCE/PAGE_1/TITLE</Localise>,
          body: <TutColImbalance1 />,
        },
        {
          title: <Localise>TUTORIAL/COLOURS/IMBALANCE/PAGE_2/TITLE</Localise>,
          body: <TutColImbalance2 />,
        },
      ];
      break;
    case TutorialStage.Colours_Exam:
      heading = HEADING_COLOURS;
      pages = [
        {
          title: <Localise>TUTORIAL/COLOURS/EXAM/PAGE_1/TITLE</Localise>,
          body: <TutColExam1 />,
        },
        {
          title: <Localise>TUTORIAL/COLOURS/EXAM/PAGE_2/TITLE</Localise>,
          body: <TutColExam2 />,
        },
      ];
      break;
    case TutorialStage.Hex_ChangingScale:
      heading = HEADING_HEX;
      pages = [
        {
          title: <Localise>TUTORIAL/HEX/SCALE/PAGE_1/TITLE</Localise>,
          body: <TutHexChangingScale1 />,
        },
        {
          title: <Localise>TUTORIAL/HEX/SCALE/PAGE_2/TITLE</Localise>,
          body: <TutHexChangingScale2 />,
        },
      ];
      break;
    case TutorialStage.Hex_Letters:
      heading = HEADING_HEX;
      pages = [
        {
          title: <Localise>TUTORIAL/HEX/LETTERS/PAGE_1/TITLE</Localise>,
          body: <TutHexLetters1 />,
        },
        {
          title: <Localise>TUTORIAL/HEX/LETTERS/PAGE_2/TITLE</Localise>,
          body: <TutHexLetters2 />,
        },
      ];
      break;
    case TutorialStage.Hex_DoubleDigits:
      heading = HEADING_HEX;
      pages = [
        {
          title: <Localise>TUTORIAL/HEX/DOUBLEDIGITS/PAGE_1/TITLE</Localise>,
          body: <TutHexDoubleDigits1 />,
        },
        {
          title: <Localise>TUTORIAL/HEX/DOUBLEDIGITS/PAGE_2/TITLE</Localise>,
          body: <TutHexDoubleDigits2 />,
        },
      ];
      break;
    case TutorialStage.Hex_Exam:
      heading = HEADING_HEX;
      pages = [
        {
          title: <Localise>TUTORIAL/HEX/EXAM/PAGE_1/TITLE</Localise>,
          body: <TutHexExam1 />,
        },
      ];
      break;
    default:
      heading = HEADING_DONE;
      pages = [
        {
          title: <Localise>TUTORIAL/DONE/PAGE_1/TITLE</Localise>,
          body: <TutDone1 />,
          allowClose: false,
          dialogOptions: [
            {
              buttonText: LocalisationService.GetLocalisedText(
                "TUTORIAL/NAVIGATION/BTN_BYE"
              ),
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
