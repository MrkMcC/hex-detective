import { useState } from "react";
import Colour from "../../../../classes/Colour";
import ColourFlavour from "../../../../enum/ColourFlavour";
import BarChart from "../../../colour/BarChart";
import Green from "../../../common/Green";
import SimulationFrame from "../SimulationFrame";

interface Props {}

const TutHexDoubleDigits1 = ({}: Props) => {
  const [colour, setColour] = useState(new Colour(240, 128, 43));

  const editableOptions = {
    flavour: ColourFlavour.Hex,
    editing: {
      enabled: true,
      step: 1,
    },
  };

  return (
    <div className="tutorial font-sans-serif text-center">
      <p>
        Good news! All your hard work made the economy go up. We can afford a
        second digit now.
      </p>
      <div className="flex-col gap-1">
        <div className="flex-row justify-center ">
          <SimulationFrame>
            <p className="m-0">
              (F, F, F){" ==> "}(F<Green>F</Green>, F<Green>F</Green>, F
              <Green>F</Green>)
            </p>
          </SimulationFrame>
        </div>
        <div className="flex-row gap-1 justify-center align-start">
          <SimulationFrame>
            <div className="flex-col align-center">
              <BarChart
                colour={colour}
                options={editableOptions}
                onChange={setColour}
              />
              <p>
                The left digit does the same as before,
                <br />
                the right digit allows more fine tuning.
              </p>
            </div>
          </SimulationFrame>
        </div>
      </div>
    </div>
  );
};

export default TutHexDoubleDigits1;
