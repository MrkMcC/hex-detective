import Crowd from "../classes/Crowd";
import PersonData from "../classes/PersonData";
import TutorialStage from "../enum/TutorialStage";
import ArrayHelper from "../helper/ArrayHelper";
import ColourPresets from "../helper/ColourPresets";
import TutorialState from "../types/TutorialState";
import ColourService from "./ColourService";
import LogService from "./LogService";
import ModalService from "./ModalService";
import PersonService from "./PersonService";

const LOG_SUBJECT = "TutorialService";

const modalContentType: "tutorial" = "tutorial";

const showModal = (stage: TutorialStage) => {
  ModalService.ShowModal({
    reference: { type: modalContentType, index: Number(stage) },
  });
};

const generateCrowd = (state: TutorialState): Crowd => {
  let crowd: Crowd;
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
      return PersonService.GenerateCrowd(
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
        new PersonData(
          ColourPresets.Red,
          ColourPresets.Red,
          ColourPresets.Red,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Green,
          ColourPresets.Green,
          ColourPresets.Green,
          ColourPresets.Grey
        ),
        new PersonData(
          ColourPresets.Blue,
          ColourPresets.Blue,
          ColourPresets.Blue,
          ColourPresets.Grey
        ),
      ];
      return new Crowd(ArrayHelper.Shuffle(people), people[state.round - 1].id);
    case TutorialStage.Colours_Dominance:
      people = [
        new PersonData(
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.SkyBlue,
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Grey
        ),
        new PersonData(
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.OceanGreen,
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Grey
        ),
        new PersonData(
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Purple,
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Grey
        ),
        new PersonData(
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.SpringGreen,
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Grey
        ),
        new PersonData(
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Crimson,
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Grey
        ),
        new PersonData(
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Orange,
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Grey
        ),
        new PersonData(
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Red,
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Grey
        ),
        new PersonData(
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Green,
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Grey
        ),
        new PersonData(
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Blue,
          ColourService.GenerateColour(0, 128, 255),
          ColourPresets.Grey
        ),
      ];
      return new Crowd(
        ArrayHelper.Shuffle(people),
        ArrayHelper.RandomElement(people.slice(0, 6)).id
      );
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
