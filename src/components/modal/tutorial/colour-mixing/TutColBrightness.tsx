import ColourFlavour from "../../../../enum/ColourFlavour";
import ColourService from "../../../../services/ColourService";
import BarChart from "../../../common/colour/BarChart";

interface Props {}

const TutColBrightness = ({}: Props) => {
  const redShadesOptions = {
    showLetterR: true,
    flavour: ColourFlavour.Percentage,
  };

  return (
    <div
      className="tutorial font-sans-serif text-center"
      style={ColourService.RandomBorderColourStyle()}
    >
      <p>Colours are made of light. More colour, more light!</p>
      <p>They have up to 100% red, green or blue.</p>
      <p>100% is the brightest. 25% is pretty dark.</p>
      <div className="flex-col gap-1 wrap justify-space-around ">
        <div className="flex-row wrap justify-center ">
          <BarChart
            colour={ColourService.ColourFromHex("ff0000")}
            options={redShadesOptions}
          />
          <BarChart
            colour={ColourService.ColourFromHex("800000")}
            options={redShadesOptions}
          />
          <BarChart
            colour={ColourService.ColourFromHex("400000")}
            options={redShadesOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default TutColBrightness;
