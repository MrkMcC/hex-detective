import ColourFlavour from "../../../../enum/ColourFlavour";
import ColourService from "../../../../services/ColourService";
import BarChart from "../../../common/colour/BarChart";
import Localise from "../../../common/Localise";

const TutColBrightness = () => {
  const redShadesOptions = {
    showLetterR: true,
    flavour: ColourFlavour.Percentage,
  };

  return (
    <div
      className="tutorial font-sans-serif text-center"
      style={ColourService.RandomBorderColourStyle()}
    >
      <p>
        <Localise>TUTORIAL/COLOURS/BRIGHTNESS/PAGE_1/P_1</Localise>
      </p>
      <p>
        <Localise>TUTORIAL/COLOURS/BRIGHTNESS/PAGE_1/P_2</Localise>
      </p>
      <p>
        <Localise>TUTORIAL/COLOURS/BRIGHTNESS/PAGE_1/P_3</Localise>
      </p>
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
