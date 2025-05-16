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

  switch (stage) {
    case TutorialStage.Basics_Scoring:
      ModalService.ShowModal({
        heading: HEADING_BASICS,
        pages: [{ title: "How to Score", content: modalContent }],
      });
      break;
    case TutorialStage.Basics_SelectionMode:
      ModalService.ShowModal({
        heading: HEADING_BASICS,
        pages: [{ title: "Ruling Out", content: modalContent }],
      });
      break;
    case TutorialStage.Colours_Brightness:
      ModalService.ShowModal({
        heading: HEADING_COLOURS,
        pages: [{ title: "Brightness", content: modalContent }],
      });
      break;
    default:
      throw LogService.Error(
        LOG_SUBJECT,
        `NOT IMPLEMENTED: TutorialPage for stage ${stage}.`
      );
  }
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
            ColourPresets.RedPerc100,
            ColourPresets.RedPerc25,
            ColourPresets.RedPerc25,
            ColourPresets.RedPerc100
          ),
          new PersonData(
            ColourPresets.RedPerc100,
            ColourPresets.RedPerc50,
            ColourPresets.RedPerc25,
            ColourPresets.RedPerc100
          ),
          new PersonData(
            ColourPresets.RedPerc100,
            ColourPresets.RedPerc100,
            ColourPresets.RedPerc25,
            ColourPresets.RedPerc100
          ),
        ];
      } else if (state.round === 2) {
        people = [
          new PersonData(
            ColourPresets.GreenPerc100,
            ColourPresets.GreenPerc25,
            ColourPresets.GreenPerc25,
            ColourPresets.GreenPerc100
          ),
          new PersonData(
            ColourPresets.GreenPerc100,
            ColourPresets.GreenPerc50,
            ColourPresets.GreenPerc25,
            ColourPresets.GreenPerc100
          ),
          new PersonData(
            ColourPresets.GreenPerc100,
            ColourPresets.GreenPerc100,
            ColourPresets.GreenPerc25,
            ColourPresets.GreenPerc100
          ),
        ];
      } else {
        people = [
          new PersonData(
            ColourPresets.BluePerc100,
            ColourPresets.BluePerc25,
            ColourPresets.BluePerc25,
            ColourPresets.BluePerc100
          ),
          new PersonData(
            ColourPresets.BluePerc100,
            ColourPresets.BluePerc50,
            ColourPresets.BluePerc25,
            ColourPresets.BluePerc100
          ),
          new PersonData(
            ColourPresets.BluePerc100,
            ColourPresets.BluePerc100,
            ColourPresets.BluePerc25,
            ColourPresets.BluePerc100
          ),
        ];
      }
      return new Crowd(people, ArrayHelper.RandomElement(people).id);
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
