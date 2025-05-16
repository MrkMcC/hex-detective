import Crowd from "../classes/Crowd";
import PersonData from "../classes/PersonData";
import ArrayHelper from "../helper/ArrayHelper";
import ColourService from "./ColourService";
import LogService from "./LogService";

const LOG_SUBJECT = "PersonService";

const randomPerson = (): PersonData => {
  return new PersonData(
    ColourService.RandomColour(),
    ColourService.RandomColour(),
    ColourService.RandomColour()
  );
};

const generateNonDuplicate = (
  constructionInstruction: () => PersonData,
  unique?: PersonData
) => {
  const newPerson = constructionInstruction();

  if (unique && unique.equals(newPerson)) {
    LogService.Debug(LOG_SUBJECT, "Duplicate detected. Re-generating...");
    return generateNonDuplicate(constructionInstruction, unique);
  } else return newPerson;
};

const generatePeople = (
  constructionInstruction: () => PersonData,
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

const randomCrowd = (amount: number) => {
  return generatePeople(randomPerson, amount);
};

const findPersonById = (people: PersonData[], id?: string) => {
  return people.find((p) => p.id === id);
};

const PersonService = {
  RandomCrowd: randomCrowd,
  GeneratePeople: generatePeople,
  FindPersonById: findPersonById,
};

export default PersonService;
