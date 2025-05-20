import { useState } from "react";
import ColourFlavour from "../../../../enum/ColourFlavour";
import ColourPresets from "../../../../helper/ColourPresets";
import BarChart from "../../../common/colour/BarChart";
import SimulationFrame from "../SimulationFrame";

interface Props {}

const TutHexChangingScale2 = ({}: Props) => {
  const [colour, setColour] = useState(ColourPresets.SkyBlue);

  const editableOptions = {
    flavour: ColourFlavour.Int,
    editing: { enabled: true, step: 1, customIntScale: 15 },
  };

  return (
    <div className="tutorial font-sans-serif text-center">
      <p>...fifteen.</p>
      <p>
        From now on, we'll use a number between 0 and 15 for our RGB values.
      </p>
      <div className="flex-row justify-center">
        <SimulationFrame>
          <div className="flex-col">
            <BarChart
              colour={colour}
              options={editableOptions}
              onChange={setColour}
            />
            <p className="mb-0">Beautiful.</p>
          </div>
        </SimulationFrame>
      </div>
      <p>The scale changed, but everything else is the same.</p>
      <p>(100% 0% 0%) is now called (15, 0, 0)</p>
      <p>Let's do this!</p>
    </div>
  );
};

export default TutHexChangingScale2;
