import ColourFlavour from "../../../../enum/ColourFlavour";
import ColourService from "../../../../services/ColourService";
import BarChart from "../../../colour/BarChart";

interface Props {}

const TutColSaturation1 = ({}: Props) => {
  const greyOptions = {
    flavour: ColourFlavour.Percentage,
  };

  return (
    <div className="tutorial font-sans-serif text-center">
      <p>So what happens if we mix all three colours?</p>
      <p>If R, G and B are all the same, we get a shade of grey:</p>
      <div className="flex-row gap-1 wrap justify-center ">
        <BarChart
          name="White"
          colour={ColourService.ColourFromHex("ffffff")}
          options={greyOptions}
        />
        <BarChart
          colour={ColourService.ColourFromHex("c0c0c0")}
          options={greyOptions}
        />
        <BarChart
          name="Grey"
          colour={ColourService.ColourFromHex("808080")}
          options={greyOptions}
        />
        <BarChart
          colour={ColourService.ColourFromHex("404040")}
          options={greyOptions}
        />
        <BarChart
          name="Black"
          colour={ColourService.ColourFromHex("000000")}
          options={greyOptions}
        />
      </div>
    </div>
  );
};

export default TutColSaturation1;
