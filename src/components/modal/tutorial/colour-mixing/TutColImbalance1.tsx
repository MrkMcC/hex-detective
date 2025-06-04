import Colour from "../../../../classes/Colour";
import ColourFlavour from "../../../../enum/ColourFlavour";
import BarChart from "../../../common/colour/BarChart";
import Localise from "../../../common/Localise";
import SimulationFrame from "../SimulationFrame";

const TutColImbalance1 = () => {
  const percentageOptions = {
    flavour: ColourFlavour.Percentage,
  };

  return (
    <div className="tutorial font-sans-serif text-center">
      <p>
        <Localise>TUTORIAL/COLOURS/IMBALANCE/PAGE_1/P_1</Localise>
      </p>
      <p>
        <Localise>TUTORIAL/COLOURS/IMBALANCE/PAGE_1/P_2</Localise>
      </p>
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
              <Localise>TUTORIAL/COLOURS/IMBALANCE/PAGE_1/P_3</Localise>
              <br />
              <p className="mb-0">
                <Localise>TUTORIAL/COLOURS/IMBALANCE/PAGE_1/P_4</Localise>
              </p>
            </p>
          </div>
        </SimulationFrame>
      </div>
    </div>
  );
};

export default TutColImbalance1;
