import ColourFlavour from "../../enum/ColourFlavour";

type ColourMixOptionsT = {
  flavour?: ColourFlavour;
  showLetterR?: boolean;
  showLetterG?: boolean;
  showLetterB?: boolean;
  editing?: {
    enabled: boolean;
    step?: number;
    customIntScale?: number;
  };
  customValueText?: (int: number) => string;
};

export default ColourMixOptionsT;
