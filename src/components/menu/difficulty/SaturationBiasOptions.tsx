import Colour from "../../../classes/Colour";
import Constants from "../../../Constants";
import SaturationBias from "../../../enum/colour-generation-bias/SaturationBias";
import ArrayHelper from "../../../helper/ArrayHelper";
import ColourService from "../../../services/ColourService";
import ColourBiasOption from "./ColourBiasOption";

interface Props {
  value: SaturationBias;
}

const SaturationBiasOptions = ({ value }: Props) => {
  const sampleColours = {
    Red: [
      new Colour(200, 0, 0),
      new Colour(200, 100, 100),
      new Colour(200, 190, 190),
    ],
    Green: [
      new Colour(0, 200, 0),
      new Colour(100, 200, 100),
      new Colour(190, 200, 190),
    ],
    Blue: [
      new Colour(0, 0, 200),
      new Colour(100, 100, 200),
      new Colour(190, 190, 200),
    ],
  };

  const applySaturationBias = (
    colour: Colour,
    saturationBias: SaturationBias
  ) => {
    return ColourService.ApplySaturationAndValueBias(
      colour,
      Constants.DIFFICULTY.SATURATION_BIAS[saturationBias].MIN,
      undefined,
      Constants.DIFFICULTY.SATURATION_BIAS[saturationBias].MAX
    );
  };

  const elems = ArrayHelper.GetEnumFlags<number>(SaturationBias).map((bias) => (
    <ColourBiasOption
      key={bias}
      isActive={value === bias}
      colours={[
        applySaturationBias(sampleColours.Red[0], bias),
        applySaturationBias(sampleColours.Red[1], bias),
        applySaturationBias(sampleColours.Red[2], bias),
        applySaturationBias(sampleColours.Green[0], bias),
        applySaturationBias(sampleColours.Green[1], bias),
        applySaturationBias(sampleColours.Green[2], bias),
        applySaturationBias(sampleColours.Blue[0], bias),
        applySaturationBias(sampleColours.Blue[1], bias),
        applySaturationBias(sampleColours.Blue[2], bias),
      ]}
    />
  ));

  return <div className="difficulty-option-scale flex-row">{elems}</div>;
};

export default SaturationBiasOptions;
