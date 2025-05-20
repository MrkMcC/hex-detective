import { ReactNode } from "react";
import Colour from "../../classes/Colour";
import CustomFlavour from "../../classes/CustomFlavour";
import ColourFlavour from "../../enum/ColourFlavour";

interface Props {
  colour: Colour;
  reveal?: boolean;
  children?: ReactNode;
  flavour: ColourFlavour | CustomFlavour;
}

const SuspectInfoColour = ({ colour, reveal, flavour }: Props) => {
  return (
    <span className="colour-text">
      <span
        className={`flavour-${flavour}`}
        style={{ color: reveal ? colour.toString() : undefined }}
      >
        {flavour === ColourFlavour.Hex && colour.toString().toUpperCase()}
        {flavour === ColourFlavour.Int && colour.int.toString()}
        {flavour === ColourFlavour.Name && colour.name}
        {flavour === ColourFlavour.Percentage && colour.percentage.toString()}
        {typeof flavour !== "string" &&
          (flavour as CustomFlavour).transformColour(colour)}
      </span>
    </span>
  );
};

export default SuspectInfoColour;
