import { nanoid } from "nanoid";
import Constants from "../Constants";
import MathHelper from "../helper/MathHelper";
import PersonT from "../types/PersonT";
import ColourService from "./ColourService";

const generatePerson = (): PersonT => {
  return {
    id: nanoid(),
    colours: {
      hat: ColourService.RandomColour(),
      head: ColourService.RandomColour(),
      shirt: ColourService.RandomColour(),
      pants: ColourService.RandomColour(),
    },
    variations: {
      hat: MathHelper.GetRandomNumber(Constants.VARIATION_AMOUNT_HAT),
      eyes: MathHelper.GetRandomNumber(Constants.VARIATION_AMOUNT_EYES),
      mouth: MathHelper.GetRandomNumber(Constants.VARIATION_AMOUNT_MOUTH),
      shirt: MathHelper.GetRandomNumber(Constants.VARIATION_AMOUNT_SHIRT),
      pants: MathHelper.GetRandomNumber(Constants.VARIATION_AMOUNT_PANTS),
    },
    ruledOut: false,
  };
};

const generatePeople = (amount: number) => {
  const ppl: PersonT[] = [];
  for (let index = 0; index < amount; index++) {
    ppl.push(generatePerson());
  }
  return ppl;
};

const findPersonById = (people: PersonT[], id?: string) => {
  return people.find((p) => p.id === id);
};

const PersonService = {
  GeneratePeople: generatePeople,
  FindPersonById: findPersonById,
};

export default PersonService;
