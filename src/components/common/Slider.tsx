import { ChangeEvent } from "react";
import ClassHelper from "../../helper/ClassHelper";

interface Props {
  className?: string;
  value: number;
  min?: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}

const Slider = ({
  className,
  value,
  min = 0,
  max,
  step = 1,
  onChange,
}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <input
      className={ClassHelper.Join("slider", className)}
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Slider;
