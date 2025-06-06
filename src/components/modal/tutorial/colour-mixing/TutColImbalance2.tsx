import { useState } from "react";
import Colour from "../../../../classes/Colour";
import ColourFlavour from "../../../../enum/ColourFlavour";
import BarChart from "../../../common/colour/BarChart";
import Red from "../../../common/colour/text/Red";
import Localise from "../../../common/Localise";
import SimulationFrame from "../SimulationFrame";
import TutorialColourTask from "../TutorialColourTask";

const TutColImbalance2 = () => {
  const [colour, setColour] = useState(new Colour(64, 128, 192));
  const [taskOne, setTaskOne] = useState(false);
  const [taskTwo, setTaskTwo] = useState(false);
  const [taskThree, setTaskThree] = useState(false);

  const targetOne = new Colour(255, 128, 0);
  const targetTwo = new Colour(191, 0, 64);
  const targetThree = new Colour(0, 128, 255);

  const percentageOptions = {
    flavour: ColourFlavour.Percentage,
  };

  const editableOptions = {
    flavour: ColourFlavour.Percentage,
    editing: { enabled: true, step: 63.75 },
  };

  const handleChange = (newColour: Colour) => {
    setColour(newColour);

    if (newColour.equals(targetOne)) setTaskOne(true);
    if (newColour.equals(targetTwo)) setTaskTwo(true);
    if (newColour.equals(targetThree)) setTaskThree(true);
  };

  return (
    <div className="tutorial font-sans-serif text-center">
      <p>
        <Localise>TUTORIAL/COLOURS/IMBALANCE/PAGE_2/P_1</Localise>
      </p>
      <div className="flex-row justify-center">
        <SimulationFrame>
          <div className="flex-col">
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
            <p className="mb-0">
              <Localise replacements={[<Red strong={false}>R</Red>]}>
                TUTORIAL/COLOURS/IMBALANCE/PAGE_2/P_2
              </Localise>
            </p>
          </div>
        </SimulationFrame>
      </div>
      <p>
        <Localise>TUTORIAL/COLOURS/IMBALANCE/PAGE_2/P_3</Localise>
      </p>
      <div className="flex-row wrap gap-1 justify-center ">
        <SimulationFrame>
          <BarChart
            colour={colour}
            options={editableOptions}
            onChange={handleChange}
          />
          <div className="flex-col wrap gap-1 justify-center ">
            <TutorialColourTask colour={targetOne} completed={taskOne} />
            <TutorialColourTask colour={targetTwo} completed={taskTwo} />
            <TutorialColourTask colour={targetThree} completed={taskThree} />
          </div>
        </SimulationFrame>
      </div>
    </div>
  );
};

export default TutColImbalance2;
