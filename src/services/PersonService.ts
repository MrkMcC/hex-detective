import ColourGenerationBias from "../classes/ColourGenerationBias";
import Crowd from "../classes/Crowd";
import PersonData from "../classes/PersonData";
import ArrayHelper from "../helper/ArrayHelper";
import ColourService from "./ColourService";
import LogService from "./LogService";

const LOG_SUBJECT = "PersonService";

const randomPerson = (
  colourGenerationBias?: ColourGenerationBias,
  suspect?: PersonData
): PersonData => {
  return new PersonData(
    ColourService.RandomColour(colourGenerationBias, suspect?.colours.hat),
    ColourService.RandomColour(colourGenerationBias, suspect?.colours.shirt),
    ColourService.RandomColour(colourGenerationBias, suspect?.colours.pants)
  );
};

const generateNonDuplicate = (
  constructionInstruction: (unique?: PersonData) => PersonData,
  unique?: PersonData
) => {
  const newPerson = constructionInstruction(unique);

  if (unique && unique.equals(newPerson)) {
    LogService.Debug(LOG_SUBJECT, "Duplicate detected. Re-generating...");
    return generateNonDuplicate(constructionInstruction, unique);
  } else return newPerson;
};

const generateCrowd = (
  constructionInstruction: (unique?: PersonData) => PersonData,
  amount: number
): Crowd => {
  const people: PersonData[] = [];
  let suspect: PersonData | undefined = undefined;
  for (let index = 0; index < amount; index++) {
    const newPerson = generateNonDuplicate(constructionInstruction, suspect);
    if (!suspect) suspect = newPerson;

    people.push(newPerson);
  }
  return new Crowd(ArrayHelper.Shuffle(people), suspect!.id);
};

const randomCrowd = (
  amount: number,
  colourGenerationBias?: ColourGenerationBias
) => {
  return generateCrowd(
    (unique?: PersonData) => randomPerson(colourGenerationBias, unique),
    amount
  );
};

const findPersonById = (people: PersonData[], id?: string) => {
  return people.find((p) => p.id === id);
};

const PersonService = {
  RandomCrowd: randomCrowd,
  GenerateCrowd: generateCrowd,
  FindPersonById: findPersonById,
};

export default PersonService;
