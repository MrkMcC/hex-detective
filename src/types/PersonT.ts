type PersonColoursT = {
  hat: string;
  head: string;
  shirt: string;
  pants: string;
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
