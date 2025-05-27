import Colour from "../../../../classes/Colour";
import Constants from "../../../../Constants";
import ValueBias from "../../../../enum/colour-generation-bias/ValueBias";
import ArrayHelper from "../../../../helper/ArrayHelper";
import ColourService from "../../../../services/ColourService";
import ColourBiasOption from "./ColourBiasOption";

interface Props {
  value: ValueBias;
}

const ValueBiasOptions = ({ value }: Props) => {
  const sampleColours = {
    Red: [new Colour(255, 0, 0), new Colour(128, 0, 0), new Colour(32, 0, 0)],
    Green: [new Colour(0, 255, 0), new Colour(0, 128, 0), new Colour(0, 32, 0)],
    Blue: [new Colour(0, 0, 255), new Colour(0, 0, 128), new Colour(0, 0, 32)],
  };

  const applyValueBias = (colour: Colour, valueBias: ValueBias) => {
    return ColourService.ApplySaturationAndValueBias(
      colour,
      undefined,
      Constants.DIFFICULTY.VALUE_BIAS[valueBias].MIN,
      undefined,
      Constants.DIFFICULTY.VALUE_BIAS[valueBias].MAX
    );
  };

  const elems = ArrayHelper.GetEnumFlags<number>(ValueBias).map((bias) => (
    <ColourBiasOption
      key={bias}
      isActive={value === bias}
      colours={[
        applyValueBias(sampleColours.Red[0], bias),
        applyValueBias(sampleColours.Red[1], bias),
        applyValueBias(sampleColours.Red[2], bias),
        applyValueBias(sampleColours.Green[0], bias),
        applyValueBias(sampleColours.Green[1], bias),
        applyValueBias(sampleColours.Green[2], bias),
        applyValueBias(sampleColours.Blue[0], bias),
        applyValueBias(sampleColours.Blue[1], bias),
        applyValueBias(sampleColours.Blue[2], bias),
      ]}
    />
  ));

  return <div className="difficulty-option-scale flex-row">{elems}</div>;
};

export default ValueBiasOptions;
