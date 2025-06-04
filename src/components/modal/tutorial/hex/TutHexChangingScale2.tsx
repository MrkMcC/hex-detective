import { useState } from "react";
import ColourFlavour from "../../../../enum/ColourFlavour";
import ColourPresets from "../../../../helper/ColourPresets";
import BarChart from "../../../common/colour/BarChart";
import Localise from "../../../common/Localise";
import SimulationFrame from "../SimulationFrame";

const TutHexChangingScale2 = () => {
  const [colour, setColour] = useState(ColourPresets.SkyBlue);

  const editableOptions = {
    flavour: ColourFlavour.Int,
    editing: { enabled: true, step: 1, customIntScale: 15 },
  };

  return (
    <div className="tutorial font-sans-serif text-center">
      <p>
        <Localise>TUTORIAL/HEX/SCALE/PAGE_2/P_1</Localise>
      </p>
      <p>
        <Localise>TUTORIAL/HEX/SCALE/PAGE_2/P_2</Localise>
      </p>
      <div className="flex-row justify-center">
        <SimulationFrame>
          <div className="flex-col">
            <BarChart
              colour={colour}
              options={editableOptions}
              onChange={setColour}
            />
            <p className="mb-0">
              <Localise>TUTORIAL/HEX/SCALE/PAGE_2/P_3</Localise>
            </p>
          </div>
        </SimulationFrame>
      </div>
      <p>
        <Localise>TUTORIAL/HEX/SCALE/PAGE_2/P_4</Localise>
      </p>
      <p>
        <Localise>TUTORIAL/HEX/SCALE/PAGE_2/P_5</Localise>
      </p>
      <p>
        <Localise>TUTORIAL/HEX/SCALE/PAGE_2/P_6</Localise>
      </p>
    </div>
  );
};

export default TutHexChangingScale2;
