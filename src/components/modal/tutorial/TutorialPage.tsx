import TutorialStage from "../../../enum/TutorialStage";
import LogService from "../../../services/LogService";
import TutorialBasicsPage1 from "./basics/TutorialBasicsPage1";
import TutorialBasicsPage2 from "./basics/TutorialBasicsPage2";
import TutColBrightness from "./colour-mixing/TutColBrightness";
import TutColComplementary1 from "./colour-mixing/TutColComplementary1";
import TutorialColoursPage3 from "./colour-mixing/TutorialColoursPage3";
import TutorialColoursPage4 from "./colour-mixing/TutorialColoursPage4";
import TutorialColoursPage5 from "./colour-mixing/TutorialColoursPage5";

interface Props {
  stage: TutorialStage;
}

const LOG_SUBJECT = "TutorialPage";

const TutorialPage = ({ stage }: Props) => {
  switch (stage) {
    case TutorialStage.Basics_Scoring:
      return <TutorialBasicsPage1 />;
    case TutorialStage.Basics_SelectionMode:
      return <TutorialBasicsPage2 />;
    case TutorialStage.Colours_Brightness:
      return <TutColBrightness />;
    case TutorialStage.Colours_Complementary:
      return <TutColComplementary1 />;
    case TutorialStage.Colours_Dominance:
      return <TutorialColoursPage3 />;
    case TutorialStage.Colours_Saturation:
      return <TutorialColoursPage4 />;
    case TutorialStage.Colours_Exam:
      return <TutorialColoursPage5 />;
    default:
      throw LogService.Error(
        LOG_SUBJECT,
        `NOT IMPLEMENTED: TutorialPage for stage ${stage}.`
      );
  }
};

export default TutorialPage;
