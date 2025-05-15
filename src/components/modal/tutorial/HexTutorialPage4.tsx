import Colour from "../../../classes/Colour";
import ColourFlavour from "../../../enum/ColourFlavour";
import ColourService from "../../../services/ColourService";
import ColourMix from "../../colour/ColourMix";

interface Props {}

const HexTutorialPage4 = ({}: Props) => {
  const percentageOptions = {
    flavour: ColourFlavour.Percentage,
  };
  const intOptions = {
    flavour: ColourFlavour.Int,
  };

  return (
    <div
      className="hex-tutorial font-sans-serif text-center"
      style={ColourService.RandomBorderColourStyle()}
    >
      <p>Computers represent these RGB values on a scale from 0 to 255.</p>
      <div className="flex-row gap-1 wrap justify-center tutorial-colours">
        <ColourMix
          colour={new Colour(0, 128, 255)}
          options={percentageOptions}
        />
        <ColourMix colour={new Colour(0, 128, 255)} options={intOptions} />
      </div>
      <p>This is where hex codes come in.</p>
    </div>
  );
};

export default HexTutorialPage4;
