import PersonData from "../classes/PersonData";
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

const findPersonById = (people: PersonData[], id?: string) => {
  return people.find((p) => p.id === id);
};

const PersonService = {
  RandomPeople: randomPeople,
  GeneratePeople: generatePeople,
  FindPersonById: findPersonById,
};

export default PersonService;
