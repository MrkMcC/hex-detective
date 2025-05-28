import { useState } from "react";
import ColourBiasAngle from "../../../../classes/ColourBiasAngle";
import ColourBiasPercentage from "../../../../classes/ColourBiasPercentage";
import ClassHelper from "../../../../helper/ClassHelper";
import Slider from "../../../common/Slider";

interface Props {
  hsvProperty: "hue" | "saturation" | "value";
  value: ColourBiasPercentage | ColourBiasAngle;
  className?: string;
}

const GradientRangeSlider = ({ hsvProperty, value, className }: Props) => {
  const [min, setMin] = useState(0);

  let sliderMinimum = 0;
  let sliderMaximum = 1;
  let sliderStep = 0.01;
  let bookendMinShift = `${value.minimum * 95}%`;
  let bookendMaxShift = `${(1 - value.maximum) * 90}%`;

  if (hsvProperty === "hue") {
    sliderMinimum = 1;
    sliderMaximum = 180;
    sliderStep = 1;

    bookendMinShift = `${
      ((value.minimum - sliderMinimum) / (sliderMaximum - sliderMinimum)) * 95
    }%`;
    bookendMaxShift = `${
      ((sliderMaximum - value.maximum) / sliderMaximum) * 90
    }%`;
  }

  const classes = ClassHelper.Join(
    "gradient-range-slider",
    className,
    hsvProperty
  );
  return (
    <div className={classes}>
      <div className="gradients">
        <div className="gradient-1" />
        <div className="gradient-2" />
        <div className="gradient-3" />
      </div>
      <Slider
        value={min}
        onChange={setMin}
        min={sliderMinimum}
        max={sliderMaximum}
        step={sliderStep}
      />
      <div className="bookend min" style={{ left: bookendMinShift }} />
      <div className="bookend max" style={{ right: bookendMaxShift }} />
    </div>
  );
};

export default GradientRangeSlider;
