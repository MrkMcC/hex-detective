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
  hidden = false;
  equals = (other: PersonData) => {
    return (
      this.colours.hat.equals(other.colours.hat) &&
      this.colours.shirt.equals(other.colours.shirt) &&
      this.colours.pants.equals(other.colours.pants)
    );
  };

  constructor(hat: Colour, shirt: Colour, pants: Colour, head?: Colour) {
    this.id = nanoid();

    this.colours = {
      hat: hat,
      shirt: shirt,
      pants: pants,
      head: head ?? ColourService.RandomColour(),
    };

    this.variations = {
      hat: MathHelper.GetRandomNumber(1, Constants.VARIATION.AMOUNTS.HAT),
      eyes: MathHelper.GetRandomNumber(1, Constants.VARIATION.AMOUNTS.EYES),
      mouth: MathHelper.GetRandomNumber(1, Constants.VARIATION.AMOUNTS.MOUTH),
      shirt: MathHelper.GetRandomNumber(1, Constants.VARIATION.AMOUNTS.SHIRT),
      pants: MathHelper.GetRandomNumber(1, Constants.VARIATION.AMOUNTS.PANTS),
    };
  }
}

export default PersonData;
