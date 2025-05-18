import Colour from "../../classes/Colour";
import ColourFlavour from "../../enum/ColourFlavour";

type SuspectInfoOptionsT = {
  flavour?: ColourFlavour | ((colour: Colour) => string);
  revealColours?: boolean;
  compact?: boolean;
};

export default SuspectInfoOptionsT;
