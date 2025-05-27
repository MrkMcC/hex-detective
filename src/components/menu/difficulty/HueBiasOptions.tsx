import Colour from "../../../classes/Colour";
import Constants from "../../../Constants";
import HueDifferenceBias from "../../../enum/colour-generation-bias/HueDifferenceBias";
import ColourService from "../../../services/ColourService";
import ColourBiasOption from "./ColourBiasOption";

interface Props {
  value: HueDifferenceBias;
}

const C_MAX_RED = new Colour(255, 0, 0);
const C_MAX_GREEN = new Colour(0, 255, 0);
const C_MAX_BLUE = new Colour(0, 0, 255);

const HueBiasOptions = ({ value }: Props) => {
  const elems = [
    <ColourBiasOption
      key={HueDifferenceBias.MinDifferenceStrong}
      isActive={value === HueDifferenceBias.MinDifferenceStrong}
      colours={[
        undefined,
        C_MAX_RED,
        undefined,
        undefined,
        undefined,
        undefined,
        ColourService.ShiftHue(
          C_MAX_RED,
          Constants.DIFFICULTY.HUE_BIAS[HueDifferenceBias.MinDifferenceStrong]
            .MIN
        ),
        C_MAX_GREEN,
        C_MAX_BLUE,
      ]}
    />,
    <ColourBiasOption
      key={HueDifferenceBias.MinDifferenceSome}
      isActive={value === HueDifferenceBias.MinDifferenceSome}
      colours={[
        undefined,
        C_MAX_RED,
        undefined,
        undefined,
        undefined,
        undefined,
        ColourService.ShiftHue(
          C_MAX_RED,
          Constants.DIFFICULTY.HUE_BIAS[HueDifferenceBias.MinDifferenceSome].MIN
        ),
        C_MAX_GREEN,
        C_MAX_BLUE,
      ]}
    />,
    <ColourBiasOption
      key={HueDifferenceBias.None}
      isActive={value === HueDifferenceBias.None}
      colours={[
        undefined,
        C_MAX_RED,
        undefined,
        undefined,
        undefined,
        undefined,
        C_MAX_RED,
        C_MAX_GREEN,
        C_MAX_BLUE,
      ]}
    />,
    <ColourBiasOption
      key={HueDifferenceBias.MaxDifferenceSome}
      isActive={value === HueDifferenceBias.MaxDifferenceSome}
      colours={[
        undefined,
        C_MAX_RED,
        undefined,
        undefined,
        undefined,
        undefined,
        C_MAX_RED,
        ColourService.ShiftHue(
          C_MAX_RED,
          Constants.DIFFICULTY.HUE_BIAS[HueDifferenceBias.MaxDifferenceSome].MAX
        ),
        ColourService.ShiftHue(
          C_MAX_RED,
          -Constants.DIFFICULTY.HUE_BIAS[HueDifferenceBias.MaxDifferenceSome]
            .MAX
        ),
      ]}
    />,
    <ColourBiasOption
      key={HueDifferenceBias.MaxDifferenceStrong}
      isActive={value === HueDifferenceBias.MaxDifferenceStrong}
      colours={[
        undefined,
        C_MAX_RED,
        undefined,
        undefined,
        undefined,
        undefined,
        C_MAX_RED,
        ColourService.ShiftHue(
          C_MAX_RED,
          Constants.DIFFICULTY.HUE_BIAS[HueDifferenceBias.MaxDifferenceStrong]
            .MAX
        ),
        ColourService.ShiftHue(
          C_MAX_RED,
          -Constants.DIFFICULTY.HUE_BIAS[HueDifferenceBias.MaxDifferenceStrong]
            .MAX
        ),
      ]}
    />,
  ];

  return <div className="difficulty-option-scale flex-row">{elems}</div>;
};

export default HueBiasOptions;
