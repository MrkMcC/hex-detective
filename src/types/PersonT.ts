import Colour from "../classes/Colour";

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

type PersonT = {
  id: string;
  colours: PersonColoursT;
  variations: PersonVariationsT;
  ruledOut: boolean;
};

export default PersonT;
