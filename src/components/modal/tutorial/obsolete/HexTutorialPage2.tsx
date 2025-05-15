import ColourFlavour from "../../../../enum/ColourFlavour";
import ColourService from "../../../../services/ColourService";
import ColourMix from "../../../colour/ColourMix";

interface Props {}

const HexTutorialPage2 = ({}: Props) => {
  const redShadesOptions = {
    showLetterR: true,
    flavour: ColourFlavour.Percentage,
  };
  const greenShadesOptions = {
    showLetterG: true,
    flavour: ColourFlavour.Percentage,
  };
  const blueShadesOptions = {
    showLetterB: true,
    flavour: ColourFlavour.Percentage,
  };

  return (
    <div
      className="hex-tutorial font-sans-serif text-center"
      style={ColourService.RandomBorderColourStyle()}
    >
      <p>Higher colour values are brighter, lower values are darker.</p>
      <div className="flex-col gap-1 wrap justify-space-around tutorial-colours">
        <div className="flex-row wrap justify-center tutorial-colours">
          <ColourMix
            colour={ColourService.ColourFromHex("ff0000")}
            options={redShadesOptions}
          />
          <ColourMix
            colour={ColourService.ColourFromHex("800000")}
            options={redShadesOptions}
          />
          <ColourMix
            colour={ColourService.ColourFromHex("400000")}
            options={redShadesOptions}
          />
        </div>
        <div className="flex-row wrap justify-center tutorial-colours">
          <ColourMix
            colour={ColourService.ColourFromHex("00ff00")}
            options={greenShadesOptions}
          />
          <ColourMix
            colour={ColourService.ColourFromHex("008000")}
            options={greenShadesOptions}
          />
          <ColourMix
            colour={ColourService.ColourFromHex("004000")}
            options={greenShadesOptions}
          />
        </div>
        <div className="flex-row wrap justify-center tutorial-colours">
          <ColourMix
            colour={ColourService.ColourFromHex("0000ff")}
            options={blueShadesOptions}
          />
          <ColourMix
            colour={ColourService.ColourFromHex("000080")}
            options={blueShadesOptions}
          />
          <ColourMix
            colour={ColourService.ColourFromHex("000040")}
            options={blueShadesOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default HexTutorialPage2;
