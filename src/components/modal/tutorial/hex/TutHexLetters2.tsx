import { useState } from "react";
import Colour from "../../../../classes/Colour";
import ColourFlavour from "../../../../enum/ColourFlavour";
import BarChart from "../../../colour/BarChart";
import SimulationFrame from "../SimulationFrame";

interface Props {}

const TutHexLetters2 = ({}: Props) => {
  const [colour, setColour] = useState(new Colour(119, 204, 255));

  const editableOptions = {
    flavour: ColourFlavour.Name,
    editing: {
      enabled: true,
      step: 1,
      customIntScale: 15,
      customValueText: (int: number) => (int / 17).toString(16).toUpperCase(),
    },
  };

  return (
    <div className="tutorial font-sans-serif text-center">
      <p>Let's borrow a few letters from the alphabet.</p>
      <SimulationFrame>
        <p className="m-0">0 1 2 3 4 5 6 7 8 9 A B C D E F</p>
      </SimulationFrame>
      <p>We'll just call it A instead of 10, B instead of 11, and so on.</p>
      <div className="flex-row gap-1 justify-center align-start">
        <SimulationFrame>
          <div className="flex-col">
            <BarChart
              colour={colour}
              options={editableOptions}
              onChange={setColour}
            />
            <p className="mb-0">Efficient.</p>
          </div>
        </SimulationFrame>
        <SimulationFrame>
          <div className="flex-col">
            <p className="m-0">A = 10</p>
            <p className="m-0">B = 11</p>
            <p className="m-0">C = 12</p>
            <p className="m-0">D = 13</p>
            <p className="m-0">E = 14</p>
            <p className="m-0">F = 15</p>
          </div>
        </SimulationFrame>
      </div>
    </div>
  );
};

export default TutHexLetters2;
