import ColourFlavour from "../../enum/ColourFlavour";
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
      <p>Tutorial coming soon.</p>
      <div className="flex-row wrap space-around">
        <ColourMix name="Red" colour={ColourService.ColourFromHex("ff0000")} />
        <ColourMix colour={ColourService.ColourFromHex("00ff00")} />
        <ColourMix name="Blue" colour={ColourService.ColourFromHex("0000ff")} />
        <ColourMix
          colour={ColourService.ColourFromHex("b090d0")}
          options={{ showRGB: true }}
        />
        <ColourMix
          colour={ColourService.ColourFromHex("ff0077")}
          options={{ showRGB: true }}
        />
        <ColourMix
          name="White"
          colour={ColourService.ColourFromHex("ffffff")}
          options={{ showRGB: true, flavour: ColourFlavour.Int }}
        />
        <ColourMix
          name="Black"
          colour={ColourService.ColourFromHex("000000")}
          options={{ showRGB: true, flavour: ColourFlavour.Percentage }}
        />
      </div>
    </div>
  );
};

export default HowToRead;
