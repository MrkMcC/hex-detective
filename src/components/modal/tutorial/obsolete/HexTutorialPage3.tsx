import ColourFlavour from "../../../../enum/ColourFlavour";
import ColourService from "../../../../services/ColourService";
import ColourMix from "../../../colour/ColourMix";

interface Props {}

const HexTutorialPage3 = ({}: Props) => {
  const yellowOptions = {
    showLetterR: true,
    showLetterG: true,
    flavour: ColourFlavour.Hidden,
  };
  const cyanOptions = {
    showLetterG: true,
    showLetterB: true,
    flavour: ColourFlavour.Hidden,
  };
  const magentaOptions = {
    showLetterR: true,
    showLetterB: true,
    flavour: ColourFlavour.Hidden,
  };

  const greyOptions = {
    flavour: ColourFlavour.Hidden,
  };

  return (
    <div
      className="hex-tutorial font-sans-serif text-center"
      style={ColourService.RandomBorderColourStyle()}
    >
      <p>If we combine two colours we get yellow, cyan or magenta.</p>
      <div className="flex-row gap-1 wrap justify-center tutorial-colours">
        <ColourMix
          name="R + G = Yellow"
          colour={ColourService.ColourFromHex("ffff00")}
          options={yellowOptions}
        />
        <ColourMix
          name="G + B = Cyan"
          colour={ColourService.ColourFromHex("00ffff")}
          options={cyanOptions}
        />
        <ColourMix
          name="R + B = Magenta"
          colour={ColourService.ColourFromHex("ff00ff")}
          options={magentaOptions}
        />
      </div>
      <p>If three values are close to each other, we get a shade of grey.</p>
      <div className="flex-row gap-1 wrap justify-center tutorial-colours">
        <ColourMix
          name="White"
          colour={ColourService.ColourFromHex("ffffff")}
          options={greyOptions}
        />
        <ColourMix
          colour={ColourService.ColourFromHex("c0c0c0")}
          options={greyOptions}
        />
        <ColourMix
          name="Grey"
          colour={ColourService.ColourFromHex("808080")}
          options={greyOptions}
        />
        <ColourMix
          colour={ColourService.ColourFromHex("404040")}
          options={greyOptions}
        />
        <ColourMix
          name="Black"
          colour={ColourService.ColourFromHex("000000")}
          options={greyOptions}
        />
      </div>
    </div>
  );
};

export default HexTutorialPage3;
