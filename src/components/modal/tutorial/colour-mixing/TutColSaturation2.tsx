import ColourFlavour from "../../../../enum/ColourFlavour";
import ColourService from "../../../../services/ColourService";
import BarChart from "../../../common/colour/BarChart";
import Localise from "../../../common/Localise";

const TutColSaturation2 = () => {
  const greyOptions = {
    flavour: ColourFlavour.Percentage,
  };

  return (
    <div className="tutorial font-sans-serif text-center">
      <p>
        <Localise>TUTORIAL/COLOURS/SATURATION/PAGE_2/P_1</Localise>
      </p>
      <div className="flex-row gap-1 wrap justify-center ">
        <BarChart
          colour={ColourService.ColourFromHex("998080")}
          options={greyOptions}
        />
        <BarChart
          colour={ColourService.ColourFromHex("809980")}
          options={greyOptions}
        />
        <BarChart
          colour={ColourService.ColourFromHex("80809a")}
          options={greyOptions}
        />
      </div>{" "}
      <p>
        <Localise>TUTORIAL/COLOURS/SATURATION/PAGE_2/P_2</Localise>
      </p>
      <div className="flex-row gap-1 wrap justify-center ">
        <BarChart
          colour={ColourService.ColourFromHex("b38080")}
          options={greyOptions}
        />
        <BarChart
          colour={ColourService.ColourFromHex("b38000")}
          options={greyOptions}
        />
        <BarChart
          colour={ColourService.ColourFromHex("ff8000")}
          options={greyOptions}
        />
      </div>
      <p>
        <Localise>TUTORIAL/COLOURS/SATURATION/PAGE_2/P_3</Localise>
      </p>
    </div>
  );
};

export default TutColSaturation2;
