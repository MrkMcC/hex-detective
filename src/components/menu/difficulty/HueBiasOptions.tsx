import Colour from "../../../classes/Colour";
import HueDifferenceBias from "../../../enum/colour-generation-bias/HueDifferenceBias";
import ColourBiasOption from "./ColourBiasOption";

interface Props {
  value: HueDifferenceBias;
}

const HueBiasOptions = ({ value }: Props) => {
  const elems = [
    <ColourBiasOption
      isActive={value === HueDifferenceBias.MinDifferenceStrong}
      colours={[
        new Colour(255, 0, 128),
        new Colour(0, 255, 128),
        new Colour(0, 128, 255),
        new Colour(128, 255, 0),
      ]}
    />,
    <ColourBiasOption
      isActive={value === HueDifferenceBias.MinDifferenceSome}
      colours={[
        new Colour(255, 0, 128),
        new Colour(0, 255, 128),
        new Colour(0, 128, 255),
        new Colour(128, 255, 0),
      ]}
    />,
    <ColourBiasOption
      isActive={value === HueDifferenceBias.None}
      colours={[
        new Colour(255, 0, 128),
        new Colour(0, 255, 128),
        new Colour(0, 128, 255),
        new Colour(128, 255, 0),
      ]}
    />,
    <ColourBiasOption
      isActive={value === HueDifferenceBias.MaxDifferenceSome}
      colours={[
        new Colour(255, 0, 0),
        new Colour(255, 128, 0),
        new Colour(255, 255, 0),
        new Colour(255, 0, 128),
      ]}
    />,
    <ColourBiasOption
      isActive={value === HueDifferenceBias.MaxDifferenceStrong}
      colours={[
        new Colour(255, 0, 0),
        new Colour(255, 0, 128),
        new Colour(255, 0, 255),
        new Colour(128, 0, 255),
      ]}
    />,
  ];

  return <div className="difficulty-option-scale flex-row">{elems}</div>;
};

export default HueBiasOptions;
