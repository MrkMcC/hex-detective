import { useState } from "react";
import ColourFlavour from "../../../../enum/ColourFlavour";
import ColourService from "../../../../services/ColourService";
import BarChart from "../../../common/colour/BarChart";
import SimulationFrame from "../SimulationFrame";

interface Props {}

const TutColExam1 = ({}: Props) => {
  const [colour, setColour] = useState(ColourService.RandomColour());

  const editableOptions = {
    flavour: ColourFlavour.Percentage,
    editing: { enabled: true, step: 2.55 },
  };

  return (
    <div className="tutorial font-sans-serif text-center">
      <p>This concludes the tutorial on colour theory.</p>
      <div className="flex-row wrap gap-1 justify-center ">
        <SimulationFrame>
          <div className="flex-col gap-1 justify-center align-center">
            <BarChart
              colour={colour}
              options={editableOptions}
              onChange={setColour}
            />
            <p className="m-0">
              Here's another chart to play around with. No restrictions this
              time.
            </p>
          </div>
        </SimulationFrame>
      </div>
      <p>But before we move on to hex codes...</p>
    </div>
  );
};

export default TutColExam1;
