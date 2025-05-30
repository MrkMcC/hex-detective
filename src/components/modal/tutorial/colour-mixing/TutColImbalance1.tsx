import Colour from "../../../../classes/Colour";
import ColourFlavour from "../../../../enum/ColourFlavour";
import BarChart from "../../../common/colour/BarChart";
import SimulationFrame from "../SimulationFrame";

interface Props {}

const TutColImbalance1 = ({}: Props) => {
  const percentageOptions = {
    flavour: ColourFlavour.Percentage,
  };

  return (
    <div className="tutorial font-sans-serif text-center">
      <p>So far, we've only worked with primary and secondary colours.</p>
      <p>But what if all three values are different?</p>
      <div className="flex-row justify-center ">
        <SimulationFrame>
          <div className="flex-col">
            <div className="flex-row wrap gap-1 justify-center">
              <BarChart
                colour={new Colour(255, 77, 0)}
                options={percentageOptions}
              />
              <BarChart
                colour={new Colour(0, 255, 77)}
                options={percentageOptions}
              />
              <BarChart
                colour={new Colour(77, 0, 255)}
                options={percentageOptions}
              />
            </div>
            <p className="mb-0">
              We see the dominant colour coming through in the result.
              <br />
              <p className="mb-0">
                But there is a hint of secondary colour in there.
              </p>
            </p>
          </div>
        </SimulationFrame>
      </div>
    </div>
  );
};

export default TutColImbalance1;
