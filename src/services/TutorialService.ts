import PersonData from "../classes/PersonData";
import TutorialBasicsPage1 from "../components/modal/tutorial/basics/TutorialBasicsPage1";
import TutorialBasicsPage2 from "../components/modal/tutorial/basics/TutorialBasicsPage2";
import TutorialColoursPage1 from "../components/modal/tutorial/colour-mixing/TutorialColoursPage1";
import ArrayHelper from "../helper/ArrayHelper";
import ColourPresets from "../helper/ColourPresets";
import TutorialState from "../types/TutorialState";
import ModalService from "./ModalService";
import PersonService from "./PersonService";

const showModal = (stage: number) => {
  switch (stage) {
    case 1:
      ModalService.ShowModal({
        heading: "Basics",
        pages: [{ title: "How to Score", body: TutorialBasicsPage1({}) }],
      });
      break;
    case 2:
      ModalService.ShowModal({
        heading: "Basics",
        pages: [{ title: "Ruling Out", body: TutorialBasicsPage2({}) }],
      });
      break;
    case 3:
      ModalService.ShowModal({
        heading: "Colours",
        pages: [{ title: "Brightness", body: TutorialColoursPage1({}) }],
      });
      break;
    default:
      throw `NOT IMPLEMENTED: TutorialPage for stage ${stage}.`;
  }
};

const generatePeople = (state: TutorialState) => {
  switch (state.stage) {
    case 1:
      return [
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
    case 2:
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
    case 3:
      if (state.round === 1)
        return [
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
      if (state.round === 2)
        return [
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
      if (state.round === 3)
        return [
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

  throw `NOT IMPLEMENTED: Person generation for tutorial stage ${state.stage}.${state.round}`;
};

const TutorialService = {
  ShowModal: showModal,
  GeneratePeople: generatePeople,
};

export default TutorialService;
