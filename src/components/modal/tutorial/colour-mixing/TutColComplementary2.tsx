import ColourFlavour from "../../../../enum/ColourFlavour";
import ColourService from "../../../../services/ColourService";
import LocalisationService from "../../../../services/LocalisationService";
import BarChart from "../../../common/colour/BarChart";
import Localise from "../../../common/Localise";

const TutColComplementary2 = () => {
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
        <Localise>TUTORIAL/COLOURS/COMPLEMENTARY/PAGE_2/P_1</Localise>
      </p>
      <p>
        <Localise>TUTORIAL/COLOURS/COMPLEMENTARY/PAGE_2/P_2</Localise>
      </p>
      <div className="flex-row gap-1 wrap justify-center">
        <BarChart
          name={LocalisationService.GetLocalisedText(
            "COLOURS/COMBINED_RED_GREEN"
          )}
          colour={ColourService.ColourFromHex("ffff00")}
          options={yellowOptions}
        />
        <BarChart
          name={LocalisationService.GetLocalisedText(
            "COLOURS/COMBINED_GREEN_BLUE"
          )}
          colour={ColourService.ColourFromHex("00ffff")}
          options={cyanOptions}
        />
        <BarChart
          name={LocalisationService.GetLocalisedText(
            "COLOURS/COMBINED_RED_BLUE"
          )}
          colour={ColourService.ColourFromHex("ff00ff")}
          options={magentaOptions}
        />
      </div>
      <p>
        <Localise>TUTORIAL/COLOURS/COMPLEMENTARY/PAGE_2/P_3</Localise>
      </p>
      <p>
        <Localise>TUTORIAL/COLOURS/COMPLEMENTARY/PAGE_2/P_4</Localise>
      </p>
      <p>
        <Localise>TUTORIAL/COLOURS/COMPLEMENTARY/PAGE_2/P_5</Localise>
      </p>
    </div>
  );
};

export default TutColComplementary2;
