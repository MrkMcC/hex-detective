import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ColourBias from "../../../../classes/ColourBiasPercentage";
import ClassHelper from "../../../../helper/ClassHelper";
import Slider from "../../../common/Slider";

interface Props {
  gradient: "saturation" | "value";
  value: ColourBias;
}

const GradientRangeSlider = ({ gradient, value }: Props) => {
  const [min, setMin] = useState(0);

  const bookendMinShift = `${value.minimum * 95}%`;
  const bookendMaxShift = `${(1 - value.maximum) * 90}%`;

  const classes = ClassHelper.Join("gradient-range-slider", gradient);
  return (
    <div className={classes}>
      <div className="gradients">
        <div className="red" />
        <div className="green" />
        <div className="blue" />
      </div>
      <Slider value={min} onChange={setMin} min={0} max={1} step={0.01} />
      <div className="bookend-container"></div>
      <div className="bookend min" style={{ left: bookendMinShift }}>
        <FaArrowRight className="icon" />
      </div>
      <div className="bookend max" style={{ right: bookendMaxShift }}>
        <FaArrowLeft className="icon" />
      </div>
    </div>
  );
};

export default GradientRangeSlider;
