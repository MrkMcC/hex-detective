import ColourBiasAngle from "./ColourBiasAngle";
import ColourBiasPercentage from "./ColourBiasPercentage";

class ColourGenerationBias {
  hue: ColourBiasAngle;
  saturation: ColourBiasPercentage;
  value: ColourBiasPercentage;

  constructor(
    hue?: ColourBiasAngle,
    saturation?: ColourBiasPercentage,
    value?: ColourBiasPercentage
  ) {
    this.hue = hue ?? new ColourBiasAngle();
    this.saturation = saturation ?? new ColourBiasPercentage();
    this.value = value ?? new ColourBiasPercentage();
  }
}

export default ColourGenerationBias;
