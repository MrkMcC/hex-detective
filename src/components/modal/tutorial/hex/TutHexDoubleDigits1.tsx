import { useState } from "react";
import Colour from "../../../../classes/Colour";
import CustomFlavour from "../../../../classes/CustomFlavour";
import ColourFlavour from "../../../../enum/ColourFlavour";
import BarChart from "../../../common/colour/BarChart";
import Green from "../../../common/colour/text/Green";
import Localise from "../../../common/Localise";
import SimulationFrame from "../SimulationFrame";

const TutHexDoubleDigits1 = () => {
  const initialColour = new Colour(240, 128, 43);
  const toOldScale = (colour: Colour) => {
    const transform = (int: number) => Math.round(int / 17) * 17;
    return new Colour(
      transform(colour.int.red),
      transform(colour.int.green),
      transform(colour.int.blue)
    );
  };

  const [colour, setColour] = useState(initialColour);
  const [oldScaleColour, setOldScaleColour] = useState(
    toOldScale(initialColour)
  );

  const handleSetColour = (colour: Colour) => {
    setColour(colour);
    setOldScaleColour(toOldScale(colour));
  };

  const oldScaleOptions = {
    flavour: new CustomFlavour((int: number) =>
      (int / 17).toString(16).toUpperCase()
    ),
  };
  const newScaleOptions = {
    flavour: ColourFlavour.Hex,
    editing: {
      enabled: true,
      step: 1,
    },
  };

  return (
    <div className="tutorial font-sans-serif text-center">
      <p>
        <Localise>TUTORIAL/HEX/DOUBLEDIGITS/PAGE_1/P_1</Localise>
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
              <div className="flex-row gap-1">
                <BarChart
                  name="old scale"
                  colour={oldScaleColour}
                  options={oldScaleOptions}
                />
                <BarChart
                  name="new scale"
                  colour={colour}
                  options={newScaleOptions}
                  onChange={handleSetColour}
                />
              </div>
              <p>
                <Localise>TUTORIAL/HEX/DOUBLEDIGITS/PAGE_1/P_2</Localise>
              </p>
            </div>
          </SimulationFrame>
        </div>
      </div>
    </div>
  );
};

export default TutHexDoubleDigits1;
