import Colour from "../../../classes/Colour";

interface Props {
  colours: Colour[];
  isActive: boolean;
}

const ColourBiasOption = ({ colours, isActive }: Props) => {
  const colourSampleElements = colours.map((c, index) => (
    <div
      key={index}
      className={`colour-sample sample-${index}`}
      style={{ backgroundColor: c.toString() }}
    />
  ));

  return (
    <div className={`colour-bias-option ${isActive ? "active" : "inactive"}`}>
      {colourSampleElements}
    </div>
  );
};

export default ColourBiasOption;
