import ColourService from "../../services/ColourService";
import ColourMix from "../colour/ColourMix";

interface Props {}

const HowToRead = ({}: Props) => {
  return (
    <div
      className="how-to-play ui-panel"
      style={ColourService.RandomBorderColourStyle()}
    >
      <p>Colours are a mix of Red, Green and Blue, or RGB</p>
      <p>
        To make a bright red, we'll use 100% red and 0% green and blue: (100% 0
        0) Darker red (50% 0 0) Mix:
      </p>
      <ColourMix hexCode="ff100a" />
    </div>
  );
};

export default HowToRead;
