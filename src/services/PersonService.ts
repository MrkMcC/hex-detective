import PersonData from "../classes/PersonData";
import ArrayHelper from "../helper/ArrayHelper";
import ColourPresets from "../helper/ColourPresets";
import TutorialState from "../types/TutorialState";
import ColourService from "./ColourService";

const randomPerson = (): PersonData => {
  return new PersonData(
    ColourService.RandomColour(),
    ColourService.RandomColour(),
    ColourService.RandomColour()
  );
};

const randomPeople = (amount: number) => {
  const ppl: PersonData[] = [];
  for (let index = 0; index < amount; index++) {
    ppl.push(randomPerson());
  }
  return ppl;
};

const generatePeople = (
  constructionInstruction: () => PersonData,
  amount: number
) => {
  const result: PersonData[] = [];
  for (let index = 0; index < amount; index++) {
    result.push(constructionInstruction());
  }
  return result;
};

const generateTutorialPeople = (state: TutorialState) => {
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
      return generatePeople(
        () =>
          new PersonData(
            ArrayHelper.RandomElement(baseColours),
            ArrayHelper.RandomElement(baseColours),
            ArrayHelper.RandomElement(baseColours),
            ColourPresets.Grey
          ),
        3
      );
  }

  throw `Tutorial Stage '${state.stage}.${state.round}' is not implemented!`;
};

const findPersonById = (people: PersonData[], id?: string) => {
  return people.find((p) => p.id === id);
};

const PersonService = {
  RandomPeople: randomPeople,
  GenerateTutorialPeople: generateTutorialPeople,
  FindPersonById: findPersonById,
};

export default PersonService;
