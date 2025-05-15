import { ReactNode } from "react";
import Colour from "../../classes/Colour";
import ColourFlavour from "../../enum/ColourFlavour";

interface Props {
  colour: Colour;
  reveal?: boolean;
  children?: ReactNode;
  flavour: ColourFlavour;
}

const SuspectInfoColour = ({ colour, reveal, children, flavour }: Props) => {
  return (
    <span className="colour-text">
      {children && <span>{children} </span>}
      <span
        className={`flavour-${flavour}`}
        style={{ color: reveal ? colour.toString() : undefined }}
      >
        {flavour === ColourFlavour.Hex && colour.toString().toUpperCase()}
        {flavour === ColourFlavour.Int && colour.int.toString()}
        {flavour === ColourFlavour.Name && colour.name}
        {flavour === ColourFlavour.Percentage && colour.percentage.toString()}
      </span>
    </span>
  );
};

export default SuspectInfoColour;
