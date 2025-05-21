import { ReactNode } from "react";
import Colour from "../../../../classes/Colour";

interface Props {
  colour?: Colour;
  strong?: boolean;
  children: ReactNode;
}

const ColouredText = ({ colour, strong = false, children }: Props) => {
  return (
    <span style={colour ? { color: colour.toString() } : {}}>
      {strong ? <strong>{children}</strong> : children}
    </span>
  );
};

export default ColouredText;
