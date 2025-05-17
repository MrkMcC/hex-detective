import ColourFlavour from "../../../../enum/ColourFlavour";
import ColourService from "../../../../services/ColourService";
import BarChart from "../../../colour/BarChart";

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
        The descriptions you get will only tell you how much red, green and blue
        are in a colour.
      </p>
      <p>
        You have to figure out yourself what that mix looks like. Some examples:
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
      <p>
        Once again, take your time to understand each chart. This will be on the
        test.
      </p>
    </div>
  );
};

export default TutColComplementary2;
