import { ChangeEvent } from "react";

interface Props {
  id?: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

const Switch = ({ id, value, onChange }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <label className="switch">
      <input id={id} type="checkbox" checked={value} onChange={handleChange} />{" "}
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
