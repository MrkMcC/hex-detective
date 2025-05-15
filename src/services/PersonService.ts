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

const findPersonById = (people: PersonData[], id?: string) => {
  return people.find((p) => p.id === id);
};

const PersonService = {
  RandomPeople: randomPeople,
  GenerateTutorialPeople: generateTutorialPeople,
  FindPersonById: findPersonById,
};

export default PersonService;
