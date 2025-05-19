import CustomFlavour from "../../classes/CustomFlavour";
import ColourFlavour from "../../enum/ColourFlavour";

type BarChartOptionsT = {
  flavour?: ColourFlavour | CustomFlavour;
  showLetterR?: boolean;
  showLetterG?: boolean;
  showLetterB?: boolean;
  editing?: {
    enabled: boolean;
    step?: number;
    customIntScale?: number;
  };
};

export default BarChartOptionsT;
