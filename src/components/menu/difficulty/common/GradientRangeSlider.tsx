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
  let bookendMinShift = `${value.minimum * 100}%`;
  let bookendMaxShift = `${(1 - value.maximum) * 100}%`;

  if (hsvProperty === "hue") {
    sliderMinimum = 1;
    sliderMaximum = 180;
    sliderStep = 1;

    bookendMinShift = `${
      ((value.minimum - sliderMinimum) / (sliderMaximum - sliderMinimum)) * 100
    }%`;
    bookendMaxShift = `${
      ((sliderMaximum - value.maximum) / sliderMaximum) * 100
    }%`;
  }

  const classes = ClassHelper.Join(
    "gradient-range-slider",
    className,
    `gradient-range-slider--type-${hsvProperty}`
  );
  return (
    <div className={classes}>
      <div className="gradient-range-slider__gradients">
        <div className="gradient-range-slider__gradient gradient-range-slider__gradient--pos-1" />
        <div className="gradient-range-slider__gradient gradient-range-slider__gradient--pos-2" />
        <div className="gradient-range-slider__gradient gradient-range-slider__gradient--pos-3" />
      </div>
      <Slider
        value={min}
        onChange={setMin}
        min={sliderMinimum}
        max={sliderMaximum}
        step={sliderStep}
      />
      <div className="gradient-range-slider__bookend-container gradient-range-slider__bookend-container--type-min">
        <div
          className="gradient-range-slider__bookend gradient-range-slider__bookend--type-min"
          style={{ left: bookendMinShift }}
        />
      </div>
      <div className="gradient-range-slider__bookend-container gradient-range-slider__bookend-container--type-max">
        <div
          className="gradient-range-slider__bookend gradient-range-slider__bookend--type-max"
          style={{ right: bookendMaxShift }}
        />
      </div>
    </div>
  );
};

export default GradientRangeSlider;
