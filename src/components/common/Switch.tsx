import { ChangeEvent } from "react";

interface Props {
  value: boolean;
  onChange: (value: boolean) => void;
}

const Switch = ({ value, onChange }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={value} onChange={handleChange} />{" "}
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
