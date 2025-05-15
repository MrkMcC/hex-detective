import ColourFlavour from "../../../../enum/ColourFlavour";
import ColourService from "../../../../services/ColourService";
import ColourMix from "../../../colour/ColourMix";

interface Props {}

const HexTutorialPage1 = ({}: Props) => {
  const rgbExampleOptions = {
    showLetterR: true,
    showLetterG: true,
    showLetterB: true,
    flavour: ColourFlavour.Hidden,
  };
  const fullTutorialOptions = {
    flavour: ColourFlavour.Percentage,
  };

  return (
    <div
      className="hex-tutorial font-sans-serif text-center"
      style={ColourService.RandomBorderColourStyle()}
    >
      <p>Every colour we can see is a mix of Red, Green and Blue, or RGB.</p>
      <div className="flex-row wrap justify-center gap-2 tutorial-colours">
        <ColourMix
          colour={ColourService.ColourFromHex("c04080")}
          options={rgbExampleOptions}
        />
        <ColourMix
          colour={ColourService.ColourFromHex("60d080")}
          options={rgbExampleOptions}
        />
        <ColourMix
          colour={ColourService.ColourFromHex("6040b0")}
          options={rgbExampleOptions}
        />
      </div>
      <p>
        This colour has a lot more blue than anything else, so the result looks
        blue-ish:
      </p>
      <div className="flex-row wrap justify-center tutorial-colours">
        <ColourMix
          name="result"
          colour={ColourService.ColourFromHex("4533e5")}
          options={fullTutorialOptions}
        />
      </div>
    </div>
  );
};

export default HexTutorialPage1;
