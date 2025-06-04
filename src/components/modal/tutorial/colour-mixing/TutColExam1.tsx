import { useState } from "react";
import ColourFlavour from "../../../../enum/ColourFlavour";
import ColourService from "../../../../services/ColourService";
import BarChart from "../../../common/colour/BarChart";
import Localise from "../../../common/Localise";
import SimulationFrame from "../SimulationFrame";

const TutColExam1 = () => {
  const [colour, setColour] = useState(ColourService.RandomColour());

  const editableOptions = {
    flavour: ColourFlavour.Percentage,
    editing: { enabled: true, step: 2.55 },
  };

  return (
    <div className="tutorial font-sans-serif text-center">
      <p>
        <Localise>TUTORIAL/COLOURS/EXAM/PAGE_1/P_1</Localise>
      </p>
      <div className="flex-row wrap gap-1 justify-center ">
        <SimulationFrame>
          <div className="flex-col gap-1 justify-center align-center">
            <BarChart
              colour={colour}
              options={editableOptions}
              onChange={setColour}
            />
            <p className="m-0">
              <Localise>TUTORIAL/COLOURS/EXAM/PAGE_1/P_2</Localise>
            </p>
          </div>
        </SimulationFrame>
      </div>
      <p>
        <Localise>TUTORIAL/COLOURS/EXAM/PAGE_1/P_3</Localise>
      </p>
    </div>
  );
};

export default TutColExam1;
