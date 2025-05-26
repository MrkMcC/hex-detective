import Colour from "../../../classes/Colour";

interface Props {
  colours: Colour[];
  isActive: boolean;
}

const ColourBiasOption = ({ colours, isActive }: Props) => {
  return (
    <div className={`colour-bias-option ${isActive ? "active" : "inactive"}`}>
      <div
        className="colour-sample sample-1"
        style={{ backgroundColor: colours[0].toString() }}
      />
      <div
        className="colour-sample sample-2"
        style={{ backgroundColor: colours[1].toString() }}
      />
      <div
        className="colour-sample sample-3"
        style={{ backgroundColor: colours[2].toString() }}
      />
      <div
        className="colour-sample sample-4"
        style={{ backgroundColor: colours[3].toString() }}
      />
    </div>
  );
};

export default ColourBiasOption;
