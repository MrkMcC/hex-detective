import Crowd from "../classes/Crowd";
import PersonData from "../classes/PersonData";
import TutorialStage from "../enum/TutorialStage";
import ArrayHelper from "../helper/ArrayHelper";
import ColourPresets from "../helper/ColourPresets";
import TutorialState from "../types/TutorialState";
import LogService from "./LogService";
import ModalService from "./ModalService";
import PersonService from "./PersonService";

const HEADING_BASICS = "Basics";
const HEADING_COLOURS = "Colours";
const LOG_SUBJECT = "TutorialService";

const modalContentType: "tutorial" = "tutorial";

const showModal = (stage: TutorialStage) => {
  const modalContent = { type: modalContentType, index: Number(stage) };
  let heading = "";
  let pageTitle = "";

  switch (stage) {
    case TutorialStage.Basics_Scoring:
      heading = HEADING_BASICS;
      pageTitle = "How to Score";
      break;
    case TutorialStage.Basics_SelectionMode:
      heading = HEADING_BASICS;
      pageTitle = "Ruling Out";
      break;
    case TutorialStage.Colours_Brightness:
      heading = HEADING_COLOURS;
      pageTitle = "Brightness";
      break;
    case TutorialStage.Colours_Complementary:
      heading = HEADING_COLOURS;
      pageTitle = "Mixing Red, Green and Blue";
      break;
    default:
      throw LogService.Error(
        LOG_SUBJECT,
        `NOT IMPLEMENTED: TutorialPage for stage ${stage}.`
      );
  }

  ModalService.ShowModal({
    heading: heading,
    pages: [{ title: pageTitle, content: modalContent }],
  });
};

const generateCrowd = (state: TutorialState): Crowd => {
  let people: PersonData[];

  switch (state.stage) {
    case TutorialStage.Basics_Scoring:
      people = [
        new PersonData(
          ColourPresets.Red,
          ColourPresets.Grey,
          ColourPresets.Grey,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Green,
          ColourPresets.Grey,
          ColourPresets.Grey,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Blue,
          ColourPresets.Grey,
          ColourPresets.Grey,
          ColourPresets.Grey
        ),
      ];
      return new Crowd(people, people[state.round - 1].id);
    case TutorialStage.Basics_SelectionMode:
      const baseColours = [
        ColourPresets.Red,
        ColourPresets.Green,
        ColourPresets.Blue,
      ];
      return PersonService.GeneratePeople(
        () =>
          new PersonData(
            ArrayHelper.RandomElement(baseColours),
            ArrayHelper.RandomElement(baseColours),
            ArrayHelper.RandomElement(baseColours),
            ColourPresets.Grey
          ),
        5 + 5 * state.round
      );
    case TutorialStage.Colours_Brightness:
      if (state.round === 1) {
        people = [
          new PersonData(
            ColourPresets.Tutorial.RedPerc100,
            ColourPresets.Tutorial.RedPerc25,
            ColourPresets.Tutorial.RedPerc25,
            ColourPresets.Tutorial.RedPerc100
          ),
          new PersonData(
            ColourPresets.Tutorial.RedPerc100,
            ColourPresets.Tutorial.RedPerc50,
            ColourPresets.Tutorial.RedPerc25,
            ColourPresets.Tutorial.RedPerc100
          ),
          new PersonData(
            ColourPresets.Tutorial.RedPerc100,
            ColourPresets.Tutorial.RedPerc100,
            ColourPresets.Tutorial.RedPerc25,
            ColourPresets.Tutorial.RedPerc100
          ),
        ];
      } else if (state.round === 2) {
        people = [
          new PersonData(
            ColourPresets.Tutorial.GreenPerc100,
            ColourPresets.Tutorial.GreenPerc25,
            ColourPresets.Tutorial.GreenPerc25,
            ColourPresets.Tutorial.GreenPerc100
          ),
          new PersonData(
            ColourPresets.Tutorial.GreenPerc100,
            ColourPresets.Tutorial.GreenPerc50,
            ColourPresets.Tutorial.GreenPerc25,
            ColourPresets.Tutorial.GreenPerc100
          ),
          new PersonData(
            ColourPresets.Tutorial.GreenPerc100,
            ColourPresets.Tutorial.GreenPerc100,
            ColourPresets.Tutorial.GreenPerc25,
            ColourPresets.Tutorial.GreenPerc100
          ),
        ];
      } else {
        people = [
          new PersonData(
            ColourPresets.Tutorial.BluePerc100,
            ColourPresets.Tutorial.BluePerc25,
            ColourPresets.Tutorial.BluePerc25,
            ColourPresets.Tutorial.BluePerc100
          ),
          new PersonData(
            ColourPresets.Tutorial.BluePerc100,
            ColourPresets.Tutorial.BluePerc50,
            ColourPresets.Tutorial.BluePerc25,
            ColourPresets.Tutorial.BluePerc100
          ),
          new PersonData(
            ColourPresets.Tutorial.BluePerc100,
            ColourPresets.Tutorial.BluePerc100,
            ColourPresets.Tutorial.BluePerc25,
            ColourPresets.Tutorial.BluePerc100
          ),
        ];
      }
      return new Crowd(people, ArrayHelper.RandomElement(people).id);
    case TutorialStage.Colours_Complementary:
      people = [
        new PersonData(
          ColourPresets.Tutorial.RedAndGreen,
          ColourPresets.Tutorial.RedAndGreen,
          ColourPresets.Tutorial.RedAndGreen,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Tutorial.GreenAndBlue,
          ColourPresets.Tutorial.GreenAndBlue,
          ColourPresets.Tutorial.GreenAndBlue,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Tutorial.BlueAndRed,
          ColourPresets.Tutorial.BlueAndRed,
          ColourPresets.Tutorial.BlueAndRed,
          ColourPresets.Grey
        ),
      ];
      return new Crowd(ArrayHelper.Shuffle(people), people[state.round - 1].id);
  }

  throw LogService.Error(
    LOG_SUBJECT,
    `NOT IMPLEMENTED: Person generation for tutorial stage ${state.stage}.${state.round}`
  );
};

const TutorialService = {
  ShowModal: showModal,
  GeneratePeople: generateCrowd,
};

export default TutorialService;
