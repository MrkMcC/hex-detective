import { ReactNode } from "react";
import Colour from "../classes/Colour";

interface Props {
  colour: Colour;
  reveal?: boolean;
  children?: ReactNode;
}

const ColourText = ({ colour, reveal, children }: Props) => {
  return (
    <span className="colour-text">
      {children && <span>{children} </span>}
      <span
        className="hex"
        style={{ color: reveal ? colour.toString() : undefined }}
      >
        {colour.toString()}
      </span>
    </span>
  );
};

export default ColourText;
