import ColourFlavour from "../../../../enum/ColourFlavour";
import ColourService from "../../../../services/ColourService";
import LocalisationService from "../../../../services/LocalisationService";
import BarChart from "../../../common/colour/BarChart";
import Localise from "../../../common/Localise";

const TutColSaturation1 = () => {
  const greyOptions = {
    flavour: ColourFlavour.Percentage,
  };

  return (
    <div className="tutorial font-sans-serif text-center">
      <p>
        <Localise>TUTORIAL/COLOURS/SATURATION/PAGE_1/P_1</Localise>
      </p>
      <p>
        <Localise>TUTORIAL/COLOURS/SATURATION/PAGE_1/P_2</Localise>
      </p>
      <div className="flex-row gap-1 wrap justify-center ">
        <BarChart
          name={LocalisationService.GetLocalisedText("COLOURS/WHITE")}
          colour={ColourService.ColourFromHex("ffffff")}
          options={greyOptions}
        />
        <BarChart
          colour={ColourService.ColourFromHex("c0c0c0")}
          options={greyOptions}
        />
        <BarChart
          name={LocalisationService.GetLocalisedText("COLOURS/GREY")}
          colour={ColourService.ColourFromHex("808080")}
          options={greyOptions}
        />
        <BarChart
          colour={ColourService.ColourFromHex("404040")}
          options={greyOptions}
        />
        <BarChart
          name={LocalisationService.GetLocalisedText("COLOURS/BLACK")}
          colour={ColourService.ColourFromHex("000000")}
          options={greyOptions}
        />
      </div>
    </div>
  );
};

export default TutColSaturation1;
