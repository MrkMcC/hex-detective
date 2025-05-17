import Colour from "../../../../classes/Colour";
import ColourFlavour from "../../../../enum/ColourFlavour";
import ColourPresets from "../../../../helper/ColourPresets";
import BarChart from "../../../colour/BarChart";

interface Props {}

const TutColDominance1 = ({}: Props) => {
  const percentageOptions = {
    flavour: ColourFlavour.Percentage,
  };

  return (
    <div className="tutorial font-sans-serif text-center">
      <p>The next few rounds will use this notation: (red% green% blue%).</p>
      <p>(0% 0% 100%) is bright blue.</p>
      <div className="flex-row justify-center ">
        <BarChart colour={ColourPresets.Blue} options={percentageOptions} />
      </div>
      <p>(50% 50% 0%) is yellow. Not too dark, not too bright.</p>
      <div className="flex-row justify-center ">
        <BarChart
          colour={new Colour(128, 128, 0)}
          options={percentageOptions}
        />
      </div>
    </div>
  );
};

export default TutColDominance1;
