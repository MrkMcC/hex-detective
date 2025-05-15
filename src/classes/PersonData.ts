import { nanoid } from "nanoid";
import Constants from "../Constants";
import MathHelper from "../helper/MathHelper";
import ColourService from "../services/ColourService";
import Colour from "./Colour";

type PersonColoursT = {
  hat: Colour;
  head: Colour;
  shirt: Colour;
  pants: Colour;
};

type PersonVariationsT = {
  hat: number;
  eyes: number;
  mouth: number;
  shirt: number;
  pants: number;
};

class PersonData {
  id: string;
  colours: PersonColoursT;
  variations: PersonVariationsT;
  ruledOut = false;

  constructor(hat: Colour, shirt: Colour, pants: Colour, head?: Colour) {
    this.id = nanoid();

    this.colours = {
      hat: hat,
      shirt: shirt,
      pants: pants,
      head: head ?? ColourService.RandomColour(),
    };

    this.variations = {
      hat: MathHelper.GetRandomNumber(Constants.VARIATION_AMOUNT_HAT),
      eyes: MathHelper.GetRandomNumber(Constants.VARIATION_AMOUNT_EYES),
      mouth: MathHelper.GetRandomNumber(Constants.VARIATION_AMOUNT_MOUTH),
      shirt: MathHelper.GetRandomNumber(Constants.VARIATION_AMOUNT_SHIRT),
      pants: MathHelper.GetRandomNumber(Constants.VARIATION_AMOUNT_PANTS),
    };
  }
}

export default PersonData;
