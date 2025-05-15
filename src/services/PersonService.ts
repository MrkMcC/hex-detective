import {
  default as Person,
  default as PersonData,
} from "../classes/PersonData";
import ColourPresets from "../helper/ColourPresets";
import TutorialState from "../types/TutorialStage";
import ColourService from "./ColourService";

const generatePerson = (): Person => {
  return new Person(
    ColourService.RandomColour(),
    ColourService.RandomColour(),
    ColourService.RandomColour()
  );
};

const generatePeople = (amount: number) => {
  const ppl: Person[] = [];
  for (let index = 0; index < amount; index++) {
    ppl.push(generatePerson());
  }
  return ppl;
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
  }

  throw `Tutorial Stage '${state.stage}.${state.round}' is not implemented!`;
};

const findPersonById = (people: Person[], id?: string) => {
  return people.find((p) => p.id === id);
};

const PersonService = {
  GeneratePeople: generatePeople,
  GenerateTutorialPeople: generateTutorialPeople,
  FindPersonById: findPersonById,
};

export default PersonService;
