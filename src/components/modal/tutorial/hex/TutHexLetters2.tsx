import { useState } from "react";
import Colour from "../../../../classes/Colour";
import CustomFlavour from "../../../../classes/CustomFlavour";
import BarChart from "../../../common/colour/BarChart";
import Localise from "../../../common/Localise";
import SimulationFrame from "../SimulationFrame";

const TutHexLetters2 = () => {
  const [colour, setColour] = useState(new Colour(119, 204, 255));

  const editableOptions = {
    flavour: new CustomFlavour((int: number) =>
      (int / 17).toString(16).toUpperCase()
    ),
    editing: {
      enabled: true,
      step: 1,
      customIntScale: 15,
    },
  };

  return (
    <div className="tutorial font-sans-serif text-center">
      <p>
        <Localise>TUTORIAL/HEX/LETTERS/PAGE_2/P_1</Localise>
      </p>
      <SimulationFrame>
        <p className="m-0 font-mono">0 1 2 3 4 5 6 7 8 9 A B C D E F</p>
      </SimulationFrame>
      <p>
        <Localise>TUTORIAL/HEX/LETTERS/PAGE_2/P_2</Localise>
      </p>
      <div className="flex-row gap-1 justify-center align-start">
        <SimulationFrame>
          <div className="flex-col">
            <BarChart
              colour={colour}
              options={editableOptions}
              onChange={setColour}
            />
            <p className="mb-0">
              <Localise>TUTORIAL/HEX/LETTERS/PAGE_2/P_3</Localise>
            </p>
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
