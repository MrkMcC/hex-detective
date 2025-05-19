import CustomFlavour from "../../classes/CustomFlavour";
import ColourFlavour from "../../enum/ColourFlavour";

type SuspectInfoOptionsT = {
  flavour?: ColourFlavour | CustomFlavour;
  revealColours?: boolean;
  compact?: boolean;
};

export default SuspectInfoOptionsT;
