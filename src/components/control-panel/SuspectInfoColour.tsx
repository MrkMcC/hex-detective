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
        {typeof flavour !== "string"
          ? (flavour as CustomFlavour).transformColour(colour)
          : colour.toString(flavour)}
      </span>
    </span>
  );
};

export default SuspectInfoColour;
