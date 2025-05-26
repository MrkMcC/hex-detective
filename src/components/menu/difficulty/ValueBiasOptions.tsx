import Colour from "../../../classes/Colour";
import ValueBias from "../../../enum/colour-generation-bias/ValueBias";
import ColourBiasOption from "./ColourBiasOption";

interface Props {
  value: ValueBias;
}

const ValueBiasOptions = ({ value }: Props) => {
  const elems = [
    <ColourBiasOption
      key={ValueBias.Extreme}
      isActive={value === ValueBias.Extreme}
      colours={[
        new Colour(255, 0, 0),
        new Colour(224, 0, 0),
        new Colour(192, 0, 0),
        new Colour(0, 255, 0),
        new Colour(0, 224, 0),
        new Colour(0, 192, 0),
        new Colour(0, 0, 255),
        new Colour(0, 0, 224),
        new Colour(0, 0, 192),
      ]}
    />,
    <ColourBiasOption
      key={ValueBias.Strong}
      isActive={value === ValueBias.Strong}
      colours={[
        new Colour(255, 0, 0),
        new Colour(192, 0, 0),
        new Colour(112, 0, 0),
        new Colour(0, 255, 0),
        new Colour(0, 192, 0),
        new Colour(0, 112, 0),
        new Colour(0, 0, 255),
        new Colour(0, 0, 192),
        new Colour(0, 0, 112),
      ]}
    />,
    <ColourBiasOption
      key={ValueBias.Subtle}
      isActive={value === ValueBias.Subtle}
      colours={[
        new Colour(255, 0, 0),
        new Colour(160, 0, 0),
        new Colour(64, 0, 0),
        new Colour(0, 255, 0),
        new Colour(0, 160, 0),
        new Colour(0, 64, 0),
        new Colour(0, 0, 255),
        new Colour(0, 0, 160),
        new Colour(0, 0, 64),
      ]}
    />,
    <ColourBiasOption
      key={ValueBias.None}
      isActive={value === ValueBias.None}
      colours={[
        new Colour(255, 0, 0),
        new Colour(128, 0, 0),
        new Colour(32, 0, 0),
        new Colour(0, 255, 0),
        new Colour(0, 128, 0),
        new Colour(0, 32, 0),
        new Colour(0, 0, 255),
        new Colour(0, 0, 128),
        new Colour(0, 0, 32),
      ]}
    />,
  ];

  return <div className="difficulty-option-scale flex-row">{elems}</div>;
};

export default ValueBiasOptions;
