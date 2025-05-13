import { ReactNode } from "react";
import Colour from "../../classes/Colour";

interface Props {
  colour: Colour;
  children: ReactNode;
}

const ColouredText = ({ colour, children }: Props) => {
  return <span style={{ color: colour.toString() }}>{children}</span>;
};

export default ColouredText;
