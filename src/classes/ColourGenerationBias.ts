import HueDifferenceBias from "../enum/colour-generation-bias/HueDifferenceBias";
import IncrementBias from "../enum/colour-generation-bias/IncrementBias";
import SaturationBias from "../enum/colour-generation-bias/SaturationBias";

class ColourGenerationBias {
  incrementBias: IncrementBias;
  saturationBias: SaturationBias;
  hueDifferenceBias: HueDifferenceBias;

  constructor(
    incrementBias: IncrementBias,
    saturationBias: SaturationBias,
    hueDifferenceBias: HueDifferenceBias
  ) {
    this.incrementBias = incrementBias;
    this.saturationBias = saturationBias;
    this.hueDifferenceBias = hueDifferenceBias;
  }
}

export default ColourGenerationBias;
