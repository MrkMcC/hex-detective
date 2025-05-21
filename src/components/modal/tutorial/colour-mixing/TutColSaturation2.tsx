import ColourFlavour from "../../../../enum/ColourFlavour";
import ColourService from "../../../../services/ColourService";
import BarChart from "../../../common/colour/BarChart";

interface Props {}

const TutColSaturation2 = ({}: Props) => {
  const greyOptions = {
    flavour: ColourFlavour.Percentage,
  };

  return (
    <div className="tutorial font-sans-serif text-center">
      <p>
        The closer the three values are to each other, the less 'saturated' the
        colour is.
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
      </div>
      <p>
        The larger the gap between the lowest and highest value, the higher the
        saturation:
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
        Low saturation makes a colour greyish. High saturation means the colour
        is more intense.
      </p>
    </div>
  );
};

export default TutColSaturation2;
