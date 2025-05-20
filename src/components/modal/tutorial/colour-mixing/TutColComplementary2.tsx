import ColourFlavour from "../../../../enum/ColourFlavour";
import ColourService from "../../../../services/ColourService";
import BarChart from "../../../common/colour/BarChart";

interface Props {}

const TutColComplementary2 = ({}: Props) => {
  const yellowOptions = {
    showLetterR: true,
    showLetterG: true,
    flavour: ColourFlavour.Percentage,
  };
  const cyanOptions = {
    showLetterG: true,
    showLetterB: true,
    flavour: ColourFlavour.Percentage,
  };
  const magentaOptions = {
    showLetterR: true,
    showLetterB: true,
    flavour: ColourFlavour.Percentage,
  };

  return (
    <div
      className="tutorial font-sans-serif text-center"
      style={ColourService.RandomBorderColourStyle()}
    >
      <p>
        #HexDetective will test your understanding of how R, G and B interact.
      </p>
      <p>
        If we mix two equal amounts of primary colour, we get a secondary
        colour. The secondary colours are:
      </p>
      <div className="flex-row gap-1 wrap justify-center">
        <BarChart
          name="R + G = Yellow"
          colour={ColourService.ColourFromHex("ffff00")}
          options={yellowOptions}
        />
        <BarChart
          name="G + B = Cyan"
          colour={ColourService.ColourFromHex("00ffff")}
          options={cyanOptions}
        />
        <BarChart
          name="R + B = Magenta"
          colour={ColourService.ColourFromHex("ff00ff")}
          options={magentaOptions}
        />
      </div>
      <p>You don't need to remember the names of these colours.</p>
      <p>The descriptions you get will only refer to red, green and blue.</p>
      <p>
        Once again, take your time to understand each chart. This will be on the
        test.
      </p>
    </div>
  );
};

export default TutColComplementary2;
