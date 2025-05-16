import Colour from "../../../../classes/Colour";
import ColourFlavour from "../../../../enum/ColourFlavour";
import BarChart from "../../../colour/BarChart";

interface Props {}

const TutColDominance2 = ({}: Props) => {
  const percentageOptions = {
    flavour: ColourFlavour.Percentage,
  };

  return (
    <div className="tutorial font-sans-serif text-center">
      <p>Let's see what happens to (50% 50% 0%) if we add more red.</p>
      <div className="flex-row wrap gap-1 justify-center ">
        <BarChart
          colour={new Colour(128, 128, 0)}
          options={percentageOptions}
        />
        <BarChart
          colour={new Colour(192, 128, 0)}
          options={percentageOptions}
        />
        <BarChart
          colour={new Colour(255, 128, 0)}
          options={percentageOptions}
        />
      </div>
      <p>The result becomes redder and brighter.</p>
      <p>What if we add more green instead?</p>
      <div className="flex-row wrap gap-1 justify-center ">
        <BarChart
          colour={new Colour(128, 128, 0)}
          options={percentageOptions}
        />
        <BarChart
          colour={new Colour(128, 192, 0)}
          options={percentageOptions}
        />
        <BarChart
          colour={new Colour(128, 255, 0)}
          options={percentageOptions}
        />
      </div>
      <p>
        When reading RGB values, we want to look out for the highest of the
        three to get an idea which colour is the most dominant.
      </p>
    </div>
  );
};

export default TutColDominance2;
