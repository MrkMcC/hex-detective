import Colour from "../../../../classes/Colour";
import HueDifferenceBias from "../../../../enum/colour-generation-bias/HueDifferenceBias";
import ArrayHelper from "../../../../helper/ArrayHelper";
import ColourService from "../../../../services/ColourService";
import ColourBiasOption from "./ColourBiasOption";

interface Props {
  value: HueDifferenceBias;
}

const C_MAX_RED = new Colour(255, 0, 0);
const C_MAX_GREEN = new Colour(0, 255, 0);
const C_MAX_BLUE = new Colour(0, 0, 255);

/**@Obsolete */
const HueBiasOptions = ({ value }: Props) => {
  const elems2 = ArrayHelper.GetEnumFlags<number>(HueDifferenceBias).map(
    (bias) => {
      const minDifference = 10; // Constants.DIFFICULTY.HUE_BIAS[bias].MIN;
      const maxDifference = 12; // Constants.DIFFICULTY.HUE_BIAS[bias].MAX;

      return (
        <ColourBiasOption
          key={bias}
          isActive={value === bias}
          colours={[
            undefined,
            C_MAX_RED,
            undefined,
            undefined,
            undefined,
            undefined,
            ColourService.ShiftHue(C_MAX_RED, minDifference),
            maxDifference && maxDifference < 120
              ? ColourService.ShiftHue(C_MAX_RED, maxDifference)
              : C_MAX_GREEN,
            maxDifference && maxDifference < 120
              ? ColourService.ShiftHue(C_MAX_RED, -maxDifference)
              : C_MAX_BLUE,
          ]}
        />
      );
    }
  );

  return <div className="difficulty-option-scale flex-row">{elems2}</div>;
};

export default HueBiasOptions;
