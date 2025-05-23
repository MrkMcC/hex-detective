import HueDifferenceBias from "../enum/colour-generation-bias/HueDifferenceBias";
import IncrementBias from "../enum/colour-generation-bias/IncrementBias";
import SaturationBias from "../enum/colour-generation-bias/SaturationBias";
import ValueBias from "../enum/colour-generation-bias/ValueBias";

class ColourGenerationBias {
  incrementBias: IncrementBias;
  saturationBias: SaturationBias;
  hueDifferenceBias: HueDifferenceBias;
  valueBias: ValueBias;

  constructor(
    incrementBias: IncrementBias,
    saturationBias: SaturationBias,
    hueDifferenceBias: HueDifferenceBias,
    valueBias: ValueBias
  ) {
    this.incrementBias = incrementBias;
    this.saturationBias = saturationBias;
    this.hueDifferenceBias = hueDifferenceBias;
    this.valueBias = valueBias;
  }
}

export default ColourGenerationBias;
