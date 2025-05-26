import Colour from "../../../classes/Colour";
import SaturationBias from "../../../enum/colour-generation-bias/SaturationBias";
import ColourBiasOption from "./ColourBiasOption";

interface Props {
  value: SaturationBias;
}

const SaturationBiasOptions = ({ value }: Props) => {
  const elems = [
    <ColourBiasOption
      key={SaturationBias.Extreme}
      isActive={value === SaturationBias.Extreme}
      colours={[
        new Colour(200, 0, 0),
        new Colour(200, 25, 25),
        new Colour(200, 50, 50),
        new Colour(0, 200, 0),
        new Colour(25, 200, 25),
        new Colour(50, 200, 50),
        new Colour(0, 0, 200),
        new Colour(25, 25, 200),
        new Colour(50, 50, 200),
      ]}
    />,
    <ColourBiasOption
      key={SaturationBias.Strong}
      isActive={value === SaturationBias.Strong}
      colours={[
        new Colour(200, 0, 0),
        new Colour(200, 50, 50),
        new Colour(200, 80, 80),
        new Colour(0, 200, 0),
        new Colour(50, 200, 50),
        new Colour(80, 200, 80),
        new Colour(0, 0, 200),
        new Colour(50, 50, 200),
        new Colour(80, 80, 200),
      ]}
    />,
    <ColourBiasOption
      key={SaturationBias.Subtle}
      isActive={value === SaturationBias.Subtle}
      colours={[
        new Colour(200, 0, 0),
        new Colour(200, 75, 75),
        new Colour(200, 130, 130),
        new Colour(0, 200, 0),
        new Colour(75, 200, 75),
        new Colour(130, 200, 130),
        new Colour(0, 0, 200),
        new Colour(75, 75, 200),
        new Colour(130, 130, 200),
      ]}
    />,
    <ColourBiasOption
      key={SaturationBias.None}
      isActive={value === SaturationBias.None}
      colours={[
        new Colour(200, 0, 0),
        new Colour(200, 90, 90),
        new Colour(200, 200, 200),
        new Colour(0, 200, 0),
        new Colour(90, 200, 90),
        new Colour(200, 200, 200),
        new Colour(0, 0, 200),
        new Colour(90, 90, 200),
        new Colour(200, 200, 200),
      ]}
    />,
  ];

  return <div className="difficulty-option-scale flex-row">{elems}</div>;
};

export default SaturationBiasOptions;
